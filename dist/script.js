'use strict';
const content=window.portfolioContent||{};
const profile=content.profile||{};
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const clock = document.querySelector('.local-clock');
function setClock(){if(clock){try{clock.textContent=new Intl.DateTimeFormat(undefined,{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false,timeZone:profile.timeZone||'Asia/Kolkata'}).format(new Date());}catch{clock.textContent='--:--:--';}}}
setClock();setInterval(setClock,1000);
const menuButton=document.querySelector('.menu-toggle');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');document.querySelector('.main-nav').classList.toggle('open',open);});
document.querySelectorAll('.main-nav a').forEach(link=>link.addEventListener('click',()=>{document.querySelector('.main-nav').classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');}));
function setupContour(){
  const canvas=document.querySelector('.contour-canvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  if(!ctx)return;
  let width=0,height=0,inView=true,last=0,phase=0,needsDraw=true;
  const resize=()=>{
    const rect=canvas.getBoundingClientRect();width=rect.width;height=rect.height;
    const dpr=Math.min(window.devicePixelRatio||1,2);
    canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);needsDraw=true;
  };
  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;},{rootMargin:'50px'}).observe(canvas);
  function draw(time){
    requestAnimationFrame(draw);
    if(!inView||document.hidden||time-last<40)return;
    const elapsed=Math.min(time-last,100);last=time;
    const paused=motionQuery.matches||document.body.classList.contains('motion-paused');
    if(paused&&!needsDraw)return;
    if(!paused)phase+=elapsed*.0001;
    needsDraw=false;ctx.clearRect(0,0,width,height);
    for(let line=0;line<56;line++){
      ctx.beginPath();
      for(let point=0;point<=100;point++){
        const t=point/100,spread=(line-27.5)*3.25;
        const x=width*(.05+.85*t)+Math.cos(t*8+phase)*spread;
        const y=height*(.58-.3*Math.sin(t*4.8+phase))+spread*Math.sin(t*7+phase);
        point?ctx.lineTo(x,y):ctx.moveTo(x,y);
      }
      ctx.strokeStyle=line%5===0?'rgba(29,185,84,.2)':'rgba(179,179,179,.13)';
      ctx.lineWidth=.7;ctx.stroke();
    }
  }
  resize();requestAnimationFrame(draw);
}
setupContour();

const asArray=value=>Array.isArray(value)?value:[];
const coverStyles=new Set(['cover-grid','cover-orbits','cover-bars','cover-disc','cover-signal','cover-stack']);
const projects=asArray(content.projects).map((project,index)=>({...project,number:String(index+1).padStart(2,'0'),technologies:asArray(project.technologies),cover:coverStyles.has(project.cover)?project.cover:'cover-grid'}));
const certificates=asArray(content.certifications).map((certificate,index)=>({...certificate,number:String(index+1).padStart(2,'0')}));
const hackathons=asArray(content.hackathons);
const experience=asArray(content.experience);
const escapeText=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function safeUrl(value){if(typeof value!=='string'||!value.trim())return '';try{const url=new URL(value,location.href);return ['https:','http:','mailto:','tel:'].includes(url.protocol)&&!url.username&&!url.password?url.href:'';}catch{return '';}}
function externalLink(url,label,classes=''){const href=safeUrl(url);if(!href)return '';const external=/^https?:/.test(href);return `<a class="${classes}" href="${escapeText(href)}" ${external?'target="_blank" rel="noopener noreferrer"':''}>${escapeText(label)}</a>`;}
function tagsMarkup(tags){return asArray(tags).map(tag=>`<span>${escapeText(tag)}</span>`).join('');}
function dateLabel(value,month='long'){
  if(!/^\d{4}-\d{2}-\d{2}$/.test(value||''))return '';
  const date=new Date(value+'T00:00:00Z');
  return Number.isNaN(date.getTime())?'':new Intl.DateTimeFormat('en-IN',{day:'numeric',month,year:'numeric',timeZone:'UTC'}).format(date);
}
function renderProfile(){
  document.title=profile.pageTitle||profile.name||document.title;
  document.querySelector('meta[name="description"]').content=profile.pageDescription||'';
  document.querySelector('.wordmark').innerHTML=escapeText(profile.wordmarkTop)+`<span>${escapeText(profile.wordmarkBottom)}</span>`;
  document.querySelector('.identity-label').innerHTML='<span class="tiny-square"></span> '+escapeText(profile.identity);
  document.querySelector('#hero-title').innerHTML=escapeText(profile.name)+'<span class="green-period">.</span>';
  document.querySelector('.hero-headline').textContent=profile.headline||'';
  document.querySelector('.hero-role').textContent=profile.bio||'';
  document.querySelector('.console-item:first-child div>span:last-child').textContent=profile.location||'';
  const emailLink=document.querySelector('.profile-console a[href^="mailto:"]');
  emailLink.textContent=profile.email||'';emailLink.href=profile.email?'mailto:'+profile.email:'#contact';
  document.querySelector('.console-links').innerHTML='<span class="meta-label">QUICK LINKS</span>'+externalLink(profile.githubUrl,'GitHub')+externalLink(profile.linkedinUrl,'LinkedIn');
  const portrait=document.querySelector('.portrait-image');
  if(profile.portrait)portrait.src=profile.portrait;
  portrait.alt=profile.name||'Portrait';
  const github=content.github||{};
  const activityLink=document.querySelector('#activity .section-note');
  activityLink.textContent=github.username?'@'+github.username:'GitHub';activityLink.href=safeUrl(profile.githubUrl)||'#activity';
  document.querySelectorAll('.activity-stats strong').forEach((element,index)=>{element.textContent=[github.publicRepositories,github.followers,github.since][index]??'—';});
  document.querySelector('.activity-updated').textContent=dateLabel(content.updatedOn)?'Updated '+dateLabel(content.updatedOn):'';
  document.querySelector('.contact-links').innerHTML=(profile.email?`<a class="contact-button" href="${escapeText(safeUrl('mailto:'+profile.email))}">${escapeText(profile.email)} <span>↗</span></a>`:'')+externalLink(profile.githubUrl,'GitHub','text-link')+externalLink(profile.linkedinUrl,'LinkedIn','text-link')+(profile.phone?`<a class="text-link" href="${escapeText(safeUrl('tel:'+profile.phone))}">${escapeText(profile.phoneLabel||profile.phone)}</a>`:'');
  document.querySelector('.site-footer>.mono').textContent=(profile.name||'').toUpperCase()+' / PORTFOLIO';
}
renderProfile();
function projectCard(project){
  return `<article class="project-card" data-card-id="${escapeText(project.id)}"><div class="card-cover ${project.cover}"><span class="cover-number">${project.number}</span><span class="cover-caption">${escapeText(project.title)}</span></div><div class="card-content"><span class="card-kicker">${escapeText(project.category)}</span><h3>${escapeText(project.title)}</h3><p>${escapeText(project.description)}</p><div class="tags">${tagsMarkup(project.technologies.slice(0,3))}</div><p class="project-status">${escapeText(project.status)}</p><div class="card-toolbar"><button class="text-button" data-project="${escapeText(project.id)}" aria-label="Open ${escapeText(project.title)} case study">View details <span>+</span></button>${project.sourceUrl?`<a class="source-button" href="${escapeText(safeUrl(project.sourceUrl))}" target="_blank" rel="noopener noreferrer" aria-label="${escapeText(project.title)} source code">&lt;/&gt;</a>`:''}</div>${project.liveUrl?externalLink(project.liveUrl,project.liveLabel||'Live site ↗','project-live-link'):''}</div></article>`;
}
function certificateCard(certificate){return `<article class="project-card certificate-card"><div class="card-cover"><span class="cover-number">${escapeText(certificate.number)}</span><div class="certificate-sheet" aria-hidden="true"><div class="cert-title">CREDENTIAL</div><span class="cert-rule"></span><span class="cert-rule short"></span><span class="cert-rule"></span><span class="cert-rule short"></span><span class="cert-sheet-footer"></span><span class="cert-seal">✓</span></div></div><div class="card-content"><span class="card-kicker">${escapeText(certificate.issuer)}</span><h3>${escapeText(certificate.title)}</h3><p>${escapeText(certificate.description)}</p><div class="tags">${tagsMarkup([certificate.issued,certificate.credentialId].filter(Boolean))}</div><button class="text-button" data-certificate="${escapeText(certificate.id)}" aria-label="Open ${escapeText(certificate.title)} details">View credential <span>+</span></button></div></article>`;}
const mainProjectShelf=document.querySelector('[data-shelf="projects"]');
mainProjectShelf.querySelector('.shelf-track').innerHTML=projects.length?projects.map(projectCard).join(''):'<p class="empty-state">Project details to be added.</p>';
mainProjectShelf.insertAdjacentHTML('beforeend','<div class="shelf-progress" aria-hidden="true"><span></span></div>');
document.querySelector('#projects .shelf-controls').hidden=!projects.length;
mainProjectShelf.querySelector('.shelf-progress').hidden=!projects.length;
const certificateShelf=document.querySelector('[data-shelf="certifications"]');
certificateShelf.querySelector('.shelf-track').innerHTML=certificates.length?certificates.map(certificateCard).join(''):'<p class="empty-state">Certification details to be added.</p>';
document.querySelector('#certifications .shelf-controls').hidden=!certificates.length;
certificateShelf.querySelector('.shelf-progress').hidden=!certificates.length;
function streamSvg(){return '<svg class="stream-svg" aria-hidden="true" preserveAspectRatio="none"><path class="stream-base"/><path class="stream-current"/></svg>';}
const hackathonTimeline=document.querySelector('[data-timeline="hackathons"]');
hackathonTimeline.classList.toggle('is-empty',!hackathons.length);
hackathonTimeline.innerHTML=hackathons.length?streamSvg()+hackathons.map(event=>{
  const eventProjects=projects.filter(project=>project.hackathonId===event.id);
  return `<details class="stream-event"><summary aria-label="${escapeText(event.title)}, toggle its projects"><span class="stream-node" aria-hidden="true"></span><span class="stream-date">${escapeText(event.year)}<small>${escapeText(event.dateLabel||'')}</small></span><span class="stream-summary-copy"><h3>${escapeText(event.title)}</h3></span><span class="stream-expand" aria-hidden="true">+</span></summary><div class="stream-detail">${event.subtitle?`<p class="stream-detail-intro">${escapeText(event.subtitle)}</p>`:''}<p class="stream-detail-intro">${escapeText(event.description)}</p><div class="stream-project-label"><span>PROJECTS</span><a href="#projects">Browse all projects</a></div><div class="shelf" data-shelf="${escapeText(event.id)}"><div class="shelf-track" tabindex="0" aria-label="${escapeText(event.title)} projects">${eventProjects.length?eventProjects.map(projectCard).join(''):'<p class="empty-state">Project details to be added.</p>'}</div></div></div></details>`;
}).join(''):'<p class="empty-state">Hackathon details to be added.</p>';
const experienceTimeline=document.querySelector('[data-timeline="experience"]');
experienceTimeline.classList.toggle('is-empty',!experience.length);
experienceTimeline.innerHTML=experience.length?streamSvg()+experience.map((event,index)=>`<details class="stream-event" ${index===0?'open':''}><summary aria-label="${escapeText(event.title)}, open role details"><span class="stream-node" aria-hidden="true"></span><span class="stream-date">${escapeText(event.year)}<small>${escapeText(event.dates)}</small></span><span class="stream-summary-copy"><h3>${escapeText(event.title)}</h3><p>${escapeText(event.organization)}</p></span><span class="stream-expand" aria-hidden="true">+</span></summary><div class="stream-detail"><p class="stream-detail-intro">${escapeText(event.description)}</p><div class="experience-notes"><div><h4>Contribution</h4><p>${escapeText(event.contribution)}</p></div><div><h4>Impact</h4><p>${escapeText(event.impact)}</p></div></div><div class="tags">${tagsMarkup(event.technologies)}</div></div></details>`).join(''):'<p class="empty-state">Work experience details to be added.</p>';

function updateStream(timeline){const svg=timeline.querySelector('.stream-svg');if(!svg)return;const h=Math.max(svg.getBoundingClientRect().height,1);const w=svg.getBoundingClientRect().width;svg.setAttribute('viewBox',`0 0 ${w} ${h}`);let path=`M ${w/2} 0`;for(let y=0;y<h;y+=110){const bottom=Math.min(y+110,h);const bend=Math.min(6,w*.2);path+=` C ${w/2-bend} ${y+36}, ${w/2+bend} ${Math.min(y+74,h)}, ${w/2} ${bottom}`;}svg.querySelectorAll('path').forEach(line=>line.setAttribute('d',path));}
document.querySelectorAll('.timestream').forEach(timeline=>{new ResizeObserver(()=>updateStream(timeline)).observe(timeline);timeline.querySelectorAll('details').forEach(details=>details.addEventListener('toggle',()=>updateStream(timeline)));});
document.querySelector('.repository-updates').innerHTML=asArray(content.repositories).map(repo=>externalLink(repo.url,repo.name,'repository-name')+`<span class="repository-language">${escapeText(repo.language)}</span><time datetime="${escapeText(repo.updated)}">${escapeText(dateLabel(repo.updated,'short'))}</time>`).map(item=>`<div class="repository-row">${item}</div>`).join('');
let motionPaused=motionQuery.matches;
let dragged=false;
const shelfStates=[];
function scrollBehavior(){return motionQuery.matches||motionPaused?'instant':'smooth';}
document.querySelectorAll('.shelf').forEach(shelf=>{const track=shelf.querySelector('.shelf-track');const state={shelf,track,hover:false,lastInput:0};shelfStates.push(state);const update=()=>{const max=track.scrollWidth-track.clientWidth;const progress=shelf.querySelector('.shelf-progress span');if(progress)progress.style.width=`${max>0?Math.min(100,((track.scrollLeft+track.clientWidth)/track.scrollWidth)*100):100}%`;document.querySelectorAll(`[data-scroll="${CSS.escape(shelf.dataset.shelf)}"]`).forEach(button=>{button.disabled=button.dataset.direction==='-1'?track.scrollLeft<2:track.scrollLeft>=max-2;});};track.addEventListener('scroll',update,{passive:true});new ResizeObserver(update).observe(track);track.addEventListener('pointerenter',()=>state.hover=true);track.addEventListener('pointerleave',()=>state.hover=false);track.addEventListener('wheel',()=>state.lastInput=Date.now(),{passive:true});track.addEventListener('keydown',event=>{if(event.target===track&&['ArrowRight','ArrowLeft'].includes(event.key)){event.preventDefault();state.lastInput=Date.now();track.scrollBy({left:(event.key==='ArrowRight'?1:-1)*track.clientWidth*.82,behavior:scrollBehavior()});}});let startX=0,startScroll=0,activePointer=null;track.addEventListener('pointerdown',event=>{if(event.pointerType!=='mouse'||event.button!==0||event.target.closest('button,a'))return;activePointer=event.pointerId;startX=event.clientX;startScroll=track.scrollLeft;dragged=false;state.lastInput=Date.now();});track.addEventListener('pointermove',event=>{if(activePointer!==event.pointerId)return;const delta=event.clientX-startX;if(Math.abs(delta)>6){dragged=true;track.classList.add('dragging');track.setPointerCapture(event.pointerId);track.scrollLeft=startScroll-delta;}});const stopDrag=()=>{activePointer=null;track.classList.remove('dragging');if(dragged)setTimeout(()=>dragged=false,0);};track.addEventListener('pointerup',stopDrag);track.addEventListener('pointercancel',stopDrag);track.addEventListener('lostpointercapture',stopDrag);track.addEventListener('click',event=>{if(dragged){event.preventDefault();event.stopPropagation();}},true);update();});
document.querySelectorAll('[data-scroll]').forEach(button=>button.addEventListener('click',()=>{const state=shelfStates.find(item=>item.shelf.dataset.shelf===button.dataset.scroll);if(!state)return;state.lastInput=Date.now();state.track.scrollBy({left:Number(button.dataset.direction)*state.track.clientWidth*.92,behavior:scrollBehavior()});}));
setInterval(()=>{if(motionPaused||motionQuery.matches||document.hidden||document.querySelector('dialog[open]'))return;shelfStates.filter(state=>['projects','certifications'].includes(state.shelf.dataset.shelf)).forEach(state=>{const rect=state.track.getBoundingClientRect();if(state.hover||state.track.contains(document.activeElement)||Date.now()-state.lastInput<16000||rect.bottom<0||rect.top>innerHeight)return;const max=state.track.scrollWidth-state.track.clientWidth;if(max<2)return;const next=state.track.scrollLeft>=max-2?0:Math.min(max,state.track.scrollLeft+(state.track.firstElementChild.getBoundingClientRect().width+20));state.track.scrollTo({left:next,behavior:'smooth'});});},7000);
const motionButton=document.querySelector('.motion-toggle');
function syncMotion(){document.body.classList.toggle('motion-paused',motionPaused);motionButton.textContent=motionPaused?'Resume motion':'Pause motion';motionButton.setAttribute('aria-pressed',String(motionPaused));}
motionButton.addEventListener('click',()=>{motionPaused=!motionPaused;syncMotion();});motionQuery.addEventListener('change',()=>{motionPaused=motionQuery.matches;syncMotion();});syncMotion();

const detailDialog=document.querySelector('.detail-dialog');
let detailTrigger=null;
function setDetail({title,number='01',kind='PROJECT',description,cover='cover-grid',facts=[],sections=[],actions=[],technologies=[],trigger=document.activeElement}){
  detailDialog.querySelector('#detail-title').textContent=title;
  detailDialog.querySelector('.detail-number').textContent=number;
  detailDialog.querySelector('.detail-kind').textContent=kind;
  detailDialog.querySelector('.detail-description').textContent=description;
  detailDialog.querySelector('.detail-cover').className=`detail-cover ${cover}`;
  detailDialog.querySelector('.detail-cover .cover-caption').textContent=title;
  detailDialog.querySelector('.detail-facts').innerHTML=facts.map(([label,value])=>`<div><span>${escapeText(label)}</span>${escapeText(value)}</div>`).join('');
  detailDialog.querySelectorAll('.detail-section').forEach((element,index)=>{element.querySelector('h3').textContent=sections[index]?.[0]||'';element.querySelector('p').textContent=sections[index]?.[1]||'';element.hidden=!sections[index];});
  detailDialog.querySelector('.detail-tags').innerHTML=tagsMarkup(technologies);
  detailDialog.querySelector('.detail-actions').innerHTML=actions.map(([label,url])=>externalLink(url,label)).join('');
  detailTrigger=trigger;detailDialog.showModal();detailDialog.scrollTop=0;document.body.classList.add('dialog-open');
}
document.addEventListener('click',event=>{
  const projectButton=event.target.closest('[data-project]');
  const projectCard=event.target.closest('.project-card[data-card-id]');
  const cardBackground=projectCard&&!event.target.closest('a,button,input,select,textarea');
  const certButton=event.target.closest('[data-certificate]');
  if(projectButton||cardBackground){
    const projectId=projectButton?projectButton.dataset.project:projectCard.dataset.cardId;
    const project=projects.find(item=>item.id===projectId);if(!project)return;
    const trigger=projectButton||projectCard.querySelector('[data-project]');
    const actions=[];if(project.sourceUrl)actions.push(['View source',project.sourceUrl]);if(project.liveUrl)actions.push([project.liveLabel||'Live site',project.liveUrl]);
    setDetail({...project,kind:project.category,facts:[['ROLE',project.role],['LAST UPDATE',project.period],['STATUS',project.status]],sections:[['Overview',project.overview],['Development',project.development]],actions,trigger});
  }else if(certButton){
    const certificate=certificates.find(item=>item.id===certButton.dataset.certificate);if(!certificate)return;
    setDetail({...certificate,kind:'CERTIFICATION',cover:'cover-disc',facts:[['ISSUER',certificate.issuer],['ISSUED',certificate.issued]],sections:[['Credential',certificate.description]],actions:certificate.url?[['Verify credential',certificate.url]]:[]});
  }
});
detailDialog.querySelector('.close-dialog').addEventListener('click',()=>detailDialog.close());
function clickOutsideDialog(event){const rect=event.currentTarget.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)event.currentTarget.close();}
detailDialog.addEventListener('click',clickOutsideDialog);
detailDialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');if(detailTrigger&&detailTrigger.isConnected)detailTrigger.focus({preventScroll:true});});

if('IntersectionObserver' in window){document.documentElement.classList.add('js-reveals');const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);} }),{threshold:.06});document.querySelectorAll('.reveal').forEach(section=>revealObserver.observe(section));const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.main-nav a').forEach(link=>link.classList.toggle('active',link.hash===`#${entry.target.id}`));}}),{rootMargin:'-20% 0px -60% 0px',threshold:0});document.querySelectorAll('main>section[id]').forEach(section=>navObserver.observe(section));}
