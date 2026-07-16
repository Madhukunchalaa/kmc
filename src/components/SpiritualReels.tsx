'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

const BASE = 'https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/videos';

interface Reel {
  id: number;
  src: string;
  title: string;
  caption: string;
  image: string;
}

interface YoutubePlayerProps {
  src: string;
  title: string;
  muted: boolean;
}

function YoutubePlayer({ src, title, muted }: YoutubePlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [initialSrc] = useState(() => {
    const muteVal = muted ? '1' : '0';
    if (src.includes('mute=')) {
      return src.replace(/mute=[01]/, `mute=${muteVal}`);
    }
    return `${src}&mute=${muteVal}`;
  });

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: muted ? 'mute' : 'unmute', args: [] }),
        '*'
      );
    }
  }, [muted]);

  return (
    <iframe
      ref={iframeRef}
      src={initialSrc}
      title={title}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', zIndex: 2 }}
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  );
}

const FALLBACK_REELS: Reel[] = [
  {
    id: 1,
    src: `${BASE}/Video%201.mp4`,
    title: 'Welcome to KrissMaagiic',
    caption: 'Discover healing energy, sacred rituals, and certified authentic crystals.',
    image: '/about-hero.webp',
  },
  {
    id: 7,
    src: `${BASE}/Video%207.mp4`,
    title: 'Crystal Packing Process',
    caption: 'Watch how we carefully pack and wrap your crystals with love and positive energy.',
    image: '/about-header.webp',
  },
  {
    id: 2,
    src: `${BASE}/Video%202.mp4`,
    title: 'Candle Spell Rituals',
    caption: 'Watch a real candle spell designed to manifest alignment and positivity.',
    image: '/service-candle.webp',
  },
  {
    id: 3,
    src: `${BASE}/Video%203.mp4`,
    title: 'Intuitively Chosen Tarot',
    caption: 'Receive personalized spiritual guidance and clear answers to life questions.',
    image: '/service-tarot.webp',
  },
  {
    id: 4,
    src: `${BASE}/Video%204.mp4`,
    title: 'Spell Jars & Energy',
    caption: 'Handcrafted with moonlight-charged crystals, oils, and focused intentions.',
    image: '/service-spelljar.webp',
  },
  {
    id: 6,
    src: `${BASE}/Video%206.mp4`,
    title: 'Numerology & Birth Charts',
    caption: 'Understand the hidden patterns and cosmic alignments behind your numbers.',
    image: '/service-numerology.webp',
  },
  {
    id: 5,
    src: `${BASE}/Video%205.mp4`,
    title: 'Pure Crystal Energy',
    caption: 'Handpicked and ritually cleansed stones to invite harmony into your home.',
    image: '/crystal-hero.webp',
  },
];



// Returns the modular distance (with direction) of index from center
function getRelativePos(index: number, center: number, n: number): number {
  let rel = ((index - center) % n + n) % n;
  if (rel > n / 2) rel -= n; // negative = left side
  return rel;
}

export default function SpiritualReels() {
  const [reels, setReels] = useState<Reel[]>(FALLBACK_REELS);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingId, setPlayingId] = useState<number | null>(FALLBACK_REELS[0].id);
  const [muted, setMuted] = useState(true);
  const [animating, setAnimating] = useState(false);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  // Load reels from DB on mount; fall back to hardcoded list if none returned
  useEffect(() => {
    fetch('/api/reels')
      .then((r) => r.json())
      .then((d) => {
        if (d.ok && Array.isArray(d.reels) && d.reels.length > 0) {
          // Map DB reels (MongoDB _id as string) to our Reel interface (numeric id)
          const mapped: Reel[] = d.reels.map((r: { _id: string; title: string; caption: string; src: string; image: string }, i: number) => ({
            id: i + 1000, // offset avoids collision with fallback ids
            title: r.title,
            caption: r.caption,
            src: r.src,
            image: r.image ? r.image.replace(/\.png$/, '.webp') : r.image,
          }));
          setReels(mapped);
          setPlayingId(mapped[0].id);
          setActiveIndex(0);
        }
      })
      .catch(() => { /* keep fallback */ });
  }, []);

  const pauseAllVideos = useCallback(() => {
    Object.values(videoRefs.current).forEach((v) => { if (v && !v.paused) v.pause(); });
  }, []);

  const navigate = useCallback((dir: 'left' | 'right') => {
    if (animating) return;
    setAnimating(true);
    setPlayingId(null);
    pauseAllVideos();

    setActiveIndex((prev) => {
      const n = reels.length;
      const next = dir === 'right' ? (prev + 1) % n : (prev - 1 + n) % n;
      return next;
    });

    setTimeout(() => {
      setAnimating(false);
    }, 600);
  }, [animating, pauseAllVideos]);

  // Autoplay center video when active index changes
  useEffect(() => {
    if (animating) return;
    const reel = reels[activeIndex];
    if (!reel) return;
    setPlayingId(reel.id);

    const isYoutube = reel.src.includes('youtube.com') || reel.src.includes('youtu.be');
    if (!isYoutube) {
      const timer = setTimeout(() => {
        const v = videoRefs.current[reel.id];
        if (v) {
          v.muted = muted;
          v.play().catch((err) => {
            console.warn("Autoplay failed:", err);
          });
        }
      }, 400);
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, animating]);

  // Sync mute
  useEffect(() => {
    Object.values(videoRefs.current).forEach((v) => { if (v) v.muted = muted; });
  }, [muted]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') navigate('left');
      if (e.key === 'ArrowRight') navigate('right');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate]);

  // Touch swipe support
  const touchStartX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) navigate(dx < 0 ? 'right' : 'left');
  };

  const handleCardClick = (index: number) => {
    const rel = getRelativePos(index, activeIndex, reels.length);
    if (rel === 0) {
      // Center card: toggle play/pause
      const reel = reels[activeIndex];
      const isYoutube = reel.src.includes('youtube.com') || reel.src.includes('youtu.be');
      if (isYoutube) {
        setPlayingId((prev) => (prev === reel.id ? null : reel.id));
      } else {
        const v = videoRefs.current[reel.id];
        if (!v) return;
        if (v.paused) {
          v.muted = muted;
          v.play().then(() => setPlayingId(reel.id)).catch(() => {});
        } else {
          v.pause();
          setPlayingId(null);
        }
      }
    } else if (rel === -1) {
      navigate('left');
    } else if (rel === 1) {
      navigate('right');
    }
  };

  // Compute 3D transform style for each card based on relative position
  const getCardStyle = (index: number): React.CSSProperties => {
    const rel = getRelativePos(index, activeIndex, reels.length);

    // Only show cards within ±2 positions
    if (Math.abs(rel) > 2) {
      return { opacity: 0, pointerEvents: 'none', transform: 'scale(0.4) translateZ(-400px)', zIndex: 0, transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)' };
    }

    const configs: Record<number, React.CSSProperties> = {
      0: {
        transform: 'translateX(0) translateZ(80px) rotateY(0deg) scale(1)',
        opacity: 1,
        zIndex: 10,
        boxShadow: '0 24px 60px rgba(0,0,0,0.8), 0 0 40px rgba(200,149,108,0.25)',
        borderColor: 'rgba(200,149,108,0.55)',
        cursor: 'pointer',
      },
      1: {
        transform: 'translateX(58%) translateZ(-60px) rotateY(-28deg) scale(0.82)',
        opacity: 0.72,
        zIndex: 6,
        boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
        borderColor: 'rgba(200,149,108,0.2)',
        cursor: 'pointer',
      },
      [-1]: {
        transform: 'translateX(-58%) translateZ(-60px) rotateY(28deg) scale(0.82)',
        opacity: 0.72,
        zIndex: 6,
        boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
        borderColor: 'rgba(200,149,108,0.2)',
        cursor: 'pointer',
      },
      2: {
        transform: 'translateX(108%) translateZ(-160px) rotateY(-40deg) scale(0.64)',
        opacity: 0.35,
        zIndex: 3,
        boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
        borderColor: 'rgba(200,149,108,0.1)',
        cursor: 'pointer',
      },
      [-2]: {
        transform: 'translateX(-108%) translateZ(-160px) rotateY(40deg) scale(0.64)',
        opacity: 0.35,
        zIndex: 3,
        boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
        borderColor: 'rgba(200,149,108,0.1)',
        cursor: 'pointer',
      },
    };

    return {
      ...(configs[rel] || {}),
      transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
    };
  };

  const centerReel = reels[activeIndex];
  const isPlaying = !!centerReel && playingId === centerReel.id;

  return (
    <section
      className="section-pad reels-section"
      style={{ background: 'var(--light-2, #1c0a02)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background orb */}
      <div style={{
        position: 'absolute', top: '20%', left: '-10%',
        width: '450px', height: '450px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(162, 59, 236, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="text-center mb-5">
          <span className="section-eyebrow" style={{ color: 'var(--primary, #C8956C)' }}>
            <i className="fa-solid fa-wand-magic-sparkles me-2" />KrissMaagiic In Motion
          </span>
          <h2 className="section-title" style={{ color: '#2D1B0E' }}>
            Watch the <span>Magic Align</span>
          </h2>
          <div className="divider-ornament">
            <i className="fa-solid fa-diamond-turn-right" style={{ color: 'var(--primary, #C8956C)' }} />
          </div>
          <p className="section-subtitle" style={{ color: 'rgba(45, 27, 14, 0.75)', maxWidth: 640, margin: '0 auto' }}>
            Get a behind-the-scenes look at how we handpick, cleanse, and ritually energise our crystals, along with guides to our tarot and candle spell sessions.
          </p>
        </div>

        {/* Mute toggle */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            style={{
              background: 'rgba(45, 27, 14, 0.05)',
              border: '1px solid rgba(45, 27, 14, 0.18)',
              color: '#2D1B0E',
              borderRadius: '30px',
              padding: '6px 16px',
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: '0.8rem', cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            <i className={`fa-solid ${muted ? 'fa-volume-xmark' : 'fa-volume-high'}`} />
            <span>{muted ? 'Unmute All' : 'Mute All'}</span>
          </button>
        </div>

        {/* 3D Coverflow stage */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(420px, 62vh, 540px)',
            perspective: '1200px',
            perspectiveOrigin: '50% 50%',
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Cards */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transformStyle: 'preserve-3d',
          }}>
            {reels.map((reel, index) => {
              const rel = getRelativePos(index, activeIndex, reels.length);
              const cardIsPlaying = playingId === reel.id;
              const isCenter = rel === 0;
              const isYoutube = reel.src.includes('youtube.com') || reel.src.includes('youtu.be');
              const cardStyle = getCardStyle(index);

              return (
                <div
                  key={reel.id}
                  onClick={() => handleCardClick(index)}
                  style={{
                    position: 'absolute',
                    width: 'clamp(220px, 22vw, 280px)',
                    aspectRatio: '9 / 16',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    background: '#0d041a',
                    borderWidth: '1.5px',
                    borderStyle: 'solid',
                    borderColor: 'rgba(200,149,108,0.15)',
                    // Flatten the card so its <video> is composited on a single
                    // plane — a video nested in a preserve-3d subtree plays audio
                    // but the browser skips painting its frames (poster only).
                    transformStyle: 'flat',
                    willChange: 'transform, opacity',
                    ...cardStyle,
                  }}
                >
                  {/* Close btn when playing & center */}
                  {cardIsPlaying && isCenter && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlayingId(null);
                        if (!isYoutube) videoRefs.current[reel.id]?.pause();
                      }}
                      style={{
                        position: 'absolute', top: 12, right: 12, zIndex: 20,
                        width: 34, height: 34, borderRadius: '50%',
                        background: 'rgba(0,0,0,0.65)', border: '1.5px solid rgba(255,255,255,0.25)',
                        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                      }}
                    >
                      <i className="fa-solid fa-xmark" />
                    </button>
                  )}

                  {/* Poster image — ALWAYS the base layer so a card is never blank/black */}
                  <img
                    src={reel.image}
                    alt={reel.title}
                    width={280}
                    height={498}
                    loading="lazy"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
                  />

                  {/* Video content — only revealed once it has decoded a frame */}
                  {isCenter && !isYoutube && (
                    <video
                      ref={(el) => { videoRefs.current[reel.id] = el; }}
                      loop preload="auto" playsInline muted={muted}
                      poster={reel.image}
                      onError={() => { if (playingId === reel.id) setPlayingId(null); }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 2,
                        // Promote to its own 2D compositing layer so the coverflow's
                        // 3D transforms don't suppress frame painting. The poster
                        // attribute covers the gap until the first frame decodes.
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                        display: cardIsPlaying ? 'block' : 'none',
                      }}
                      src={reel.src}
                    />
                  )}
                  {cardIsPlaying && isYoutube && (
                    <YoutubePlayer src={reel.src} title={reel.title} muted={muted} />
                  )}

                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 40%, rgba(0,0,0,0.9) 100%)',
                    zIndex: 3, pointerEvents: 'none',
                  }} />

                  {/* Play button (center only, not playing) */}
                  {!cardIsPlaying && isCenter && (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: '50%',
                        background: 'rgba(200,149,108,0.9)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 0 25px rgba(200,149,108,0.5)',
                        animation: 'pulse-play 2s infinite',
                      }}>
                        <i className="fa-solid fa-play" style={{ color: '#fff', fontSize: '1.2rem', marginLeft: 4 }} />
                      </div>
                    </div>
                  )}


                </div>
              );
            })}
          </div>

          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => navigate('left')}
            disabled={animating}
            style={{
              position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
              zIndex: 20, width: 46, height: 46, borderRadius: '50%',
              background: 'linear-gradient(135deg, #2D1B0E, #1C0A02)',
              border: '1.5px solid rgba(200,149,108,0.4)', color: 'var(--primary, #C8956C)',
              cursor: animating ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.6)', opacity: animating ? 0.4 : 1,
              transition: 'all 0.3s ease',
            }}
            aria-label="Previous"
          >
            <i className="fa-solid fa-chevron-left" style={{ fontSize: '0.9rem' }} />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => navigate('right')}
            disabled={animating}
            style={{
              position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
              zIndex: 20, width: 46, height: 46, borderRadius: '50%',
              background: 'linear-gradient(135deg, #2D1B0E, #1C0A02)',
              border: '1.5px solid rgba(200,149,108,0.4)', color: 'var(--primary, #C8956C)',
              cursor: animating ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.6)', opacity: animating ? 0.4 : 1,
              transition: 'all 0.3s ease',
            }}
            aria-label="Next"
          >
            <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.9rem' }} />
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}>
          {reels.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                if (animating) return;
                pauseAllVideos();
                setPlayingId(null);
                setActiveIndex(idx);
              }}
              style={{
                width: activeIndex === idx ? 24 : 8,
                height: 8, borderRadius: 4, border: 'none', padding: 0, cursor: 'pointer',
                background: activeIndex === idx ? 'var(--primary, #C8956C)' : 'rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease',
              }}
              aria-label={`Go to reel ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
