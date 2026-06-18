'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const BASE = 'https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/videos';

const VIDEOS = [
  {
    id: 1,
    src: `${BASE}/%231.mp4`,
    title: 'Introduction',
    caption: 'Welcome to KrissMaagiic Crystals — your gateway to healing energy, sacred rituals, and crystal wisdom.',
  },
  {
    id: 2,
    src: `${BASE}/%232.mp4`,
    title: 'Candle Spell Rituals',
    caption: 'Ignite your intentions with sacred flame. Watch a real candle spell ritual designed for manifestation and transformation.',
  },
  {
    id: 3,
    src: `${BASE}/%233.mp4`,
    title: 'Tarot Reading',
    caption: 'Every card carries a message from the universe. Experience the depth and insight of a live tarot session.',
  },
  {
    id: 4,
    src: `${BASE}/%234.mp4`,
    title: 'Spell Jar',
    caption: 'Crafted with sacred herbs, crystals, and focused intention — each spell jar is a vessel of powerful energy.',
  },
  {
    id: 5,
    src: `${BASE}/%235.mp4`,
    title: 'Crystal',
    caption: 'Handpicked with love and intention. Discover the crystals that resonate with your energy and carry healing vibrations.',
  },
  {
    id: 6,
    src: `${BASE}/%236.mp4`,
    title: 'Numerology',
    caption: 'Numbers are the language of the universe. Uncover the hidden meaning and power behind yours.',
  },
];

type Phase = 'idle' | 'loading' | 'playing' | 'paused' | 'buffering' | 'error';

const pad = (n: number) => String(n).padStart(2, '0');

export default function VideoGallery() {
  const [active, setActive]         = useState(0);
  const [muted, setMuted]           = useState(true);
  const [phase, setPhase]           = useState<Phase>('idle');
  const [contentKey, setContentKey] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);

  const goTo = useCallback((index: number) => {
    const v = videoRef.current;
    if (v) { v.pause(); v.removeAttribute('src'); v.load(); }
    setActive((index + VIDEOS.length) % VIDEOS.length);
    setContentKey(k => k + 1);
    setPhase('idle');
  }, []);

  const startPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    setPhase('loading');
    v.muted = muted;
    if (!v.src || v.src !== VIDEOS[active].src) {
      v.src = VIDEOS[active].src;
      v.load();
    }
    v.play().catch(() => setPhase('error'));
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (phase === 'idle' || phase === 'error') { startPlay(); return; }
    if (phase === 'playing') { v.pause(); setPhase('paused'); }
    else { v.play().catch(() => {}); }
  };

  const onCanPlay = () => { if (phase === 'loading' || phase === 'buffering') videoRef.current?.play().catch(() => {}); };
  const onPlaying = () => setPhase('playing');
  const onPause   = () => { if (phase === 'playing') setPhase('paused'); };
  const onWaiting = () => setPhase('buffering');
  const onStalled = () => setPhase('buffering');
  const onError   = () => setPhase('error');
  const onEnded   = () => goTo(active + 1);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  const toggleFullscreen = () => {
    const el = videoRef.current;
    if (!el) return;
    if (!document.fullscreenElement) el.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  const video     = VIDEOS[active];
  const started   = phase === 'playing' || phase === 'paused' || phase === 'buffering';
  const fullBlock = phase === 'loading';

  return (
    <section className="video-gallery-section">
      <div className="vg-orb vg-orb-1" />
      <div className="vg-orb vg-orb-2" />

      <div className="container-xl px-lg-5 px-3">
        <div className="vg-grid">

          {/* ═══ LEFT: Content ═══ */}
          <div className="vg-content-side">
            <span className="section-eyebrow" style={{ color: 'var(--gold-light,#FFEFA6)' }}>
              Sacred Glimpses
            </span>

            <div key={contentKey} className="vg-content-body">
              <span className="vg-big-num">{pad(active + 1)}</span>
              <h2 className="vg-content-title">{video.title}</h2>
              <p className="vg-content-caption">{video.caption}</p>
            </div>

            <div className="vg-rule" />

            <div className="vg-playlist">
              {VIDEOS.map((v, i) => (
                <button
                  key={v.id}
                  className={`vg-playlist-item ${i === active ? 'vg-pl-active' : ''}`}
                  onClick={() => goTo(i)}
                >
                  <span className="vg-pl-num">{pad(i + 1)}</span>
                  <span className="vg-pl-title">{v.title}</span>
                  <i className="fa-solid fa-play vg-pl-icon" />
                </button>
              ))}
            </div>

            <div className="vg-nav">
              <button className="vg-nav-btn" onClick={() => goTo(active - 1)} aria-label="Previous video">
                <i className="fa-solid fa-arrow-left" />
              </button>
              <span className="vg-nav-count">{pad(active + 1)} / {pad(VIDEOS.length)}</span>
              <button className="vg-nav-btn" onClick={() => goTo(active + 1)} aria-label="Next video">
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>

          {/* ═══ RIGHT: Video Player ═══ */}
          <div className="vg-player-side">
            <div className="vg-stage">
              <span className="vg-corner vg-corner-tl" />
              <span className="vg-corner vg-corner-tr" />
              <span className="vg-corner vg-corner-bl" />
              <span className="vg-corner vg-corner-br" />

              <video
                ref={videoRef}
                key={video.src}
                preload="none"
                playsInline
                muted={muted}
                onCanPlay={onCanPlay}
                onPlaying={onPlaying}
                onPause={onPause}
                onWaiting={onWaiting}
                onStalled={onStalled}
                onError={onError}
                onEnded={onEnded}
                className="vg-video"
              />

              <div className="vg-overlay-grad" />

              {phase === 'idle' && (
                <div className="vg-idle-overlay" onClick={startPlay}>
                  <button className="vg-big-play" aria-label="Play video">
                    <i className="fa-solid fa-play" />
                  </button>
                  <p className="vg-idle-label">{video.title}</p>
                </div>
              )}

              {fullBlock && (
                <div className="vg-spinner-wrap">
                  <div className="vg-spinner" />
                  <span className="vg-loading-txt">Loading…</span>
                </div>
              )}

              {phase === 'buffering' && (
                <div className="vg-buf-dot">
                  <div className="vg-spinner vg-spinner-sm" />
                </div>
              )}

              {phase === 'error' && (
                <div className="vg-error" onClick={startPlay}>
                  <i className="fa-solid fa-rotate-right" />
                  <span>Tap to retry</span>
                </div>
              )}

              {started && (
                <div className="vg-controls vg-controls-visible">
                  <button className="vg-btn-play" onClick={togglePlay} aria-label={phase === 'playing' ? 'Pause' : 'Play'}>
                    <i className={`fa-solid ${phase === 'playing' ? 'fa-pause' : 'fa-play'}`} />
                  </button>
                  <div className="vg-bottom-bar">
                    <div className="vg-btn-group">
                      <button className="vg-icon-btn" onClick={() => setMuted(m => !m)} aria-label={muted ? 'Unmute' : 'Mute'}>
                        <i className={`fa-solid ${muted ? 'fa-volume-xmark' : 'fa-volume-high'}`} />
                      </button>
                      <button className="vg-icon-btn" onClick={toggleFullscreen} aria-label="Fullscreen">
                        <i className="fa-solid fa-expand" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
