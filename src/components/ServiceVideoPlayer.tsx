'use client';

import { useRef, useState, useEffect } from 'react';

const BASE = 'https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/videos';

const SLUG_TO_VIDEO: Record<string, string> = {
  tarot:         'https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/videos/Img%205371.mp4',
  'tarot-video': `${BASE}/Video%203.mp4`,
  candle:        `${BASE}/Video%204.mp4`,
  spelljar:      `${BASE}/Video%205.mp4`,
  numerology:    `${BASE}/Video%206.mp4`,
};

type Phase = 'idle' | 'loading' | 'playing' | 'paused' | 'buffering' | 'error';

export default function ServiceVideoPlayer({
  slug,
  image,
  title,
  videoUrl,
}: {
  slug: string;
  image: string;
  title: string;
  videoUrl?: string;
}) {
  const videoSrc = (videoUrl && videoUrl.trim()) ? videoUrl : SLUG_TO_VIDEO[slug];
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>('idle');
  const [muted, setMuted] = useState(true);
  const [userPaused, setUserPaused] = useState(false);

  const userPausedRef = useRef(userPaused);
  const mutedRef = useRef(muted);

  useEffect(() => {
    userPausedRef.current = userPaused;
  }, [userPaused]);

  useEffect(() => {
    mutedRef.current = muted;
  }, [muted]);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!userPausedRef.current) {
            if (!video.getAttribute('src')) {
              setPhase('loading');
              video.muted = mutedRef.current;
              video.src = videoSrc;
              video.load();
            } else {
              video.muted = mutedRef.current;
            }
            video.play()
              .then(() => setPhase('playing'))
              .catch(() => setPhase('error'));
          }
        } else {
          if (video.getAttribute('src') && !video.paused) {
            video.pause();
            setPhase('paused');
          }
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, [videoSrc]);

  if (!videoSrc) {
    return (
      <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(200,149,108,0.25)', boxShadow: '0 12px 35px rgba(0,0,0,0.6)', position: 'relative', width: '100%', flex: 1, background: '#0d041a' }}>
        <img src={image} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', objectFit: 'contain', objectPosition: 'center center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(162,59,236,0.08) 0%, transparent 60%, rgba(200,149,108,0.08) 100%)', pointerEvents: 'none' }} />
      </div>
    );
  }

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    setUserPaused(false);
    setPhase('loading');
    v.muted = muted;
    v.src = videoSrc;
    v.load();
    v.play()
      .then(() => setPhase('playing'))
      .catch(() => setPhase('error'));
  };

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (phase === 'idle' || phase === 'error') { start(); return; }
    if (v.paused) {
      setUserPaused(false);
      v.play()
        .then(() => setPhase('playing'))
        .catch(() => {});
    } else {
      setUserPaused(true);
      v.pause();
      setPhase('paused');
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    const next = !muted;
    setMuted(next);
    if (v) v.muted = next;
  };

  const started = phase === 'playing' || phase === 'paused' || phase === 'buffering';

  return (
    <div ref={containerRef} style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(200,149,108,0.25)', boxShadow: '0 12px 35px rgba(0,0,0,0.6), 0 0 20px rgba(162,59,236,0.08)', position: 'relative', width: '100%', flex: 1, background: '#0d041a', cursor: 'pointer' }} onClick={toggle}>
      {/* Fallback image shows until video starts */}
      {(phase === 'idle' || phase === 'error') && (
        <img src={image} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center center' }} />
      )}

      <video
        ref={videoRef}
        preload="none"
        playsInline
        muted={muted}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center center', display: started || phase === 'loading' ? 'block' : 'none' }}
        onCanPlay={() => { if (phase === 'loading' || phase === 'buffering') videoRef.current?.play().catch(() => {}); }}
        onPlaying={() => setPhase('playing')}
        onPause={() => { if (phase === 'playing') setPhase('paused'); }}
        onWaiting={() => setPhase('buffering')}
        onError={() => setPhase('error')}
        onEnded={() => setPhase('idle')}
      />

      {/* Shimmer overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(162,59,236,0.08) 0%, transparent 60%, rgba(200,149,108,0.08) 100%)', pointerEvents: 'none' }} />

      {/* Play button (idle / error) */}
      {(phase === 'idle' || phase === 'error') && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            width: 64, height: 64, borderRadius: '50%',
            background: 'rgba(200,149,108,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 30px rgba(200,149,108,0.5)',
            transition: 'transform 0.2s',
          }}>
            <i className={`fa-solid ${phase === 'error' ? 'fa-rotate-right' : 'fa-play'}`} style={{ color: '#fff', fontSize: '1.4rem', marginLeft: phase === 'error' ? 0 : 4 }} />
          </div>
        </div>
      )}

      {/* Loading spinner */}
      {phase === 'loading' && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)' }}>
          <div style={{ width: 36, height: 36, border: '3px solid rgba(200,149,108,0.3)', borderTopColor: '#C8956C', borderRadius: '50%', animation: 'vgSpin 0.7s linear infinite' }} />
        </div>
      )}

      {/* Controls (playing / paused / buffering) */}
      {started && (
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }} onClick={e => e.stopPropagation()}>
          <button onClick={toggle} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.1rem', cursor: 'pointer', padding: 6 }} aria-label={phase === 'playing' ? 'Pause' : 'Play'}>
            <i className={`fa-solid ${phase === 'playing' ? 'fa-pause' : 'fa-play'}`} />
          </button>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={toggleMute} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1rem', cursor: 'pointer', padding: 6 }} aria-label={muted ? 'Unmute' : 'Mute'}>
              <i className={`fa-solid ${muted ? 'fa-volume-xmark' : 'fa-volume-high'}`} />
            </button>
            <button onClick={() => { const v = videoRef.current; if (v) { if (!document.fullscreenElement) v.requestFullscreen?.(); else document.exitFullscreen?.(); } }} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1rem', cursor: 'pointer', padding: 6 }} aria-label="Fullscreen">
              <i className="fa-solid fa-expand" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
