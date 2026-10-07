'use strict';

// The reference portrait's centered cover crop and ordered Bayer dither.
(() => {
  const frame = document.querySelector('.portrait-frame');
  const image = frame?.querySelector('.portrait-image');
  const canvas = frame?.querySelector('.portrait-canvas');
  const context = canvas?.getContext('2d');
  if (!frame || !image || !context) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const bayer = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]];
  const block = 2;
  const sampleCanvas = document.createElement('canvas');
  const sampleContext = sampleCanvas.getContext('2d', {willReadFrequently: true});
  if (!sampleContext) return;

  let width = 0, height = 0, columns = 0, rows = 0;
  let luminance = null, phase = 0, lastFrame = 0, needsDraw = true, inView = true;
  let animationFrame = 0;

  function prepareImage() {
    if (!image.complete || !image.naturalWidth) return;
    // Layout dimensions avoid the frame's breathing transform affecting the crop.
    width = frame.clientWidth;
    height = frame.clientHeight;
    if (!width || !height) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    sampleCanvas.width = width;
    sampleCanvas.height = height;
    const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
    const cropWidth = image.naturalWidth * scale;
    const cropHeight = image.naturalHeight * scale;
    sampleContext.drawImage(image, (width - cropWidth) / 2, (height - cropHeight) / 2, cropWidth, cropHeight);
    const pixels = sampleContext.getImageData(0, 0, width, height).data;
    columns = Math.ceil(width / block);
    rows = Math.ceil(height / block);
    luminance = new Float32Array(columns * rows);
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        const pixel = ((row * block) * width + column * block) * 4;
        luminance[row * columns + column] = (.299 * pixels[pixel] + .587 * pixels[pixel + 1] + .114 * pixels[pixel + 2]) / 255;
      }
    }
    needsDraw = true;
    requestDraw();
  }

  function paused() {
    return reducedMotion.matches || document.body.classList.contains('motion-paused');
  }

  function requestDraw() {
    if (!animationFrame && luminance && inView && !document.hidden) animationFrame = requestAnimationFrame(draw);
  }

  function draw(time) {
    animationFrame = 0;
    if (!luminance || !inView || document.hidden) return;
    const still = paused();
    if (still && !needsDraw) return;
    if (!needsDraw && time - lastFrame < 40) {
      requestDraw();
      return;
    }
    if (!still && lastFrame) phase += Math.min(time - lastFrame, 100) * .00003;
    lastFrame = time;
    needsDraw = false;
    for (let row = 0; row < rows; row++) {
      const y = row * block;
      for (let column = 0; column < columns; column++) {
        const x = column * block;
        const brightness = luminance[row * columns + column] + (still ? 0 : .035 * Math.sin(phase + .015 * x + .01 * y));
        const threshold = bayer[row % 4][column % 4] / 16 * .5 + .25;
        context.fillStyle = brightness > threshold ? '#dbeafe' : '#10141d';
        context.fillRect(x, y, block, block);
      }
    }
    frame.classList.add('is-dithered');
    if (!still) requestDraw();
  }

  image.addEventListener('load', prepareImage, {once: true});
  new ResizeObserver(prepareImage).observe(frame);
  new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    lastFrame = 0;
    requestDraw();
  }, {rootMargin: '50px'}).observe(frame);
  document.addEventListener('visibilitychange', () => {lastFrame = 0; requestDraw();});
  reducedMotion.addEventListener('change', () => {needsDraw = true; requestDraw();});
  new MutationObserver(() => {needsDraw = true; lastFrame = 0; requestDraw();})
    .observe(document.body, {attributes: true, attributeFilter: ['class']});
  prepareImage();
})();
