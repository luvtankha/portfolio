"use client";

import { useRef, useState } from "react";
import {
  Maximize2,
  Minimize2,
  Minus,
  Pause,
  Play,
  Volume1,
  Volume2,
} from "lucide-react";

export function HeliosVideoWindow({ label = "HELIOS demo" }: { label?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.45);
  const [muted, setMuted] = useState(true);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const changeVolume = (delta: number) => {
    const video = videoRef.current;
    const next = Math.max(0, Math.min(1, Number((volume + delta).toFixed(1))));
    setVolume(next);
    setMuted(next === 0);
    if (video) {
      video.volume = next;
      video.muted = next === 0;
    }
  };

  const toggleMinimize = () => {
    setIsMinimized((current) => {
      const next = !current;
      if (next) setIsMaximized(false);
      return next;
    });
  };

  const toggleMaximize = () => {
    setIsMinimized(false);
    setIsMaximized((current) => !current);
  };

  return (
    <section
      className={[
        "helios-video-window",
        isMinimized ? "is-minimized" : "",
        isMaximized ? "is-maximized" : "",
      ].filter(Boolean).join(" ")}
      aria-label={label}
    >
      <header className="helios-video-titlebar">
        <div>
          <i aria-hidden="true" />
          <span>HELIOS.mp4</span>
          <small>DEMO</small>
        </div>
        <div className="helios-video-window-actions">
          <button
            type="button"
            onClick={toggleMinimize}
            aria-label={isMinimized ? "Restore HELIOS video" : "Minimize HELIOS video"}
            title={isMinimized ? "Restore" : "Minimize"}
          >
            <Minus size={15} />
          </button>
          <button
            type="button"
            onClick={toggleMaximize}
            aria-label={isMaximized ? "Restore HELIOS video size" : "Maximize HELIOS video"}
            title={isMaximized ? "Restore size" : "Maximize"}
          >
            {isMaximized ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>
        </div>
      </header>

      {!isMinimized && (
        <>
          <div className="helios-video-stage">
            <video
              ref={videoRef}
              src="/media/helios.mp4"
              autoPlay
              muted={muted}
              loop
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              Your browser does not support HTML video.
            </video>
          </div>
          <footer className="helios-video-controls">
            <button type="button" onClick={togglePlayback} aria-label={isPlaying ? "Pause HELIOS video" : "Play HELIOS video"} title={isPlaying ? "Pause" : "Play"}>
              {isPlaying ? <Pause size={15} /> : <Play size={15} />}
            </button>
            <span className="helios-video-control-separator" aria-hidden="true" />
            <button type="button" onClick={() => changeVolume(-0.1)} aria-label="Lower HELIOS video volume" title="Volume down">
              <Volume1 size={15} />
            </button>
            <div className="helios-volume-meter" aria-label={`Volume ${Math.round(volume * 100)} percent`}>
              <span style={{ width: `${volume * 100}%` }} />
            </div>
            <button type="button" onClick={() => changeVolume(0.1)} aria-label="Raise HELIOS video volume" title="Volume up">
              <Volume2 size={15} />
            </button>
            <small>{muted ? "MUTED · click volume +" : `${Math.round(volume * 100)}%`}</small>
          </footer>
        </>
      )}
    </section>
  );
}
