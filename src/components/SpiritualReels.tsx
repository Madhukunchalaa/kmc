'use client';

import { useState, useRef, useEffect } from 'react';

const BASE = 'https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/videos';

interface Reel {
  id: number;
  src: string;
  title: string;
  caption: string;
  image: string;
}

const REELS: Reel[] = [
  {
    id: 7,
    src: 'https://www.youtube.com/embed/pVP0sCUp7V0?autoplay=1&enablejsapi=1&mute=1&playlist=pVP0sCUp7V0&loop=1',
    title: 'Crystal Power & Manifestation',
    caption: 'Learn how to program and align your crystals with your daily intentions.',
    image: '/crystal-hero.png',
  },
  {
    id: 1,
    src: `${BASE}/%231.mp4`,
    title: 'Welcome to KrissMaagiic',
    caption: 'Discover healing energy, sacred rituals, and certified authentic crystals.',
    image: '/about-hero.png',
  },
  {
    id: 2,
    src: `${BASE}/%232.mp4`,
    title: 'Candle Spell Rituals',
    caption: 'Watch a real candle spell designed to manifest alignment and positivity.',
    image: '/service-candle.png',
  },
  {
    id: 3,
    src: `${BASE}/%233.mp4`,
    title: 'Intuitively Chosen Tarot',
    caption: 'Receive personalized spiritual guidance and clear answers to life questions.',
    image: '/service-tarot.png',
  },
  {
    id: 4,
    src: `${BASE}/%234.mp4`,
    title: 'Spell Jars & Energy',
    caption: 'Handcrafted with moonlight-charged crystals, oils, and focused intentions.',
    image: '/service-spelljar.png',
  },
  {
    id: 5,
    src: `${BASE}/%235.mp4`,
    title: 'Pure Crystal Energy',
    caption: 'Handpicked and ritually cleansed stones to invite harmony into your home.',
    image: '/crystal-hero.png',
  },
  {
    id: 6,
    src: `${BASE}/%236.mp4`,
    title: 'Numerology & Birth Charts',
    caption: 'Understand the hidden patterns and cosmic alignments behind your numbers.',
    image: '/service-numerology.png',
  },
];

export default function SpiritualReels() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [muted, setMuted] = useState(true);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  // Pause all other videos when a new one starts playing
  const handlePlayState = (id: number) => {
    setPlayingId(id);
    Object.keys(videoRefs.current).forEach((key) => {
      const idx = Number(key);
      if (idx !== id) {
        const v = videoRefs.current[idx];
        if (v && !v.paused) {
          v.pause();
        }
      }
    });
  };

  const handleVideoClick = (id: number) => {
    const reel = REELS.find((r) => r.id === id);
    if (!reel) return;
    const isYoutube = reel.src.includes('youtube.com') || reel.src.includes('youtu.be');

    if (isYoutube) {
      if (playingId === id) {
        setPlayingId(null);
      } else {
        handlePlayState(id);
      }
      return;
    }

    const v = videoRefs.current[id];
    if (!v) return;

    if (v.paused) {
      v.muted = muted;
      v.play()
        .then(() => handlePlayState(id))
        .catch(() => {});
    } else {
      v.pause();
      if (playingId === id) {
        setPlayingId(null);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !muted;
    setMuted(nextMuted);
    Object.values(videoRefs.current).forEach((v) => {
      if (v) v.muted = nextMuted;
    });
  };

  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);

    const firstCard = el.querySelector('.reel-card-item');
    if (firstCard) {
      const cardWidth = firstCard.clientWidth + 24;
      setScrollIndex(Math.round(el.scrollLeft / cardWidth));
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const el = carouselRef.current;
    if (!el) return;
    const firstCard = el.querySelector('.reel-card-item');
    if (firstCard) {
      const cardWidth = firstCard.clientWidth + 24;
      const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  // Pause playing video if it scrolls out of view
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            const card = entry.target as HTMLElement;
            const id = Number(card.dataset.id);
            if (id && playingId === id) {
              setPlayingId(null);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    el.querySelectorAll('.reel-card-item').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [playingId]);

  return (
    <section className="section-pad reels-section" style={{ background: 'var(--light-2, #1c0a02)', position: 'relative', overflow: 'hidden' }}>
      {/* Background celestial element */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(162, 59, 236, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center mb-5">
          <span className="section-eyebrow" style={{ color: 'var(--gold-light, #FFEFA6)' }}>
            <i className="fa-solid fa-wand-magic-sparkles me-2"></i>KrissMaagiic In Motion
          </span>
          <h2 className="section-title text-white">
            Watch the <span>Magic Align</span>
          </h2>
          <div className="divider-ornament"><i className="fa-solid fa-diamond-turn-right" style={{ color: 'var(--gold-light, #FFEFA6)' }}></i></div>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 640, margin: '0 auto' }}>
            Get a behind-the-scenes look at how we handpick, cleanse, and ritually energise our crystals, along with guides to our tarot and candle spell sessions.
          </p>
        </div>

        {/* Carousel controls wrapper */}
        <div style={{ position: 'relative' }}>
          {/* Mute Toggle on Top-Right of Section */}
          <button
            type="button"
            onClick={toggleMute}
            style={{
              position: 'absolute',
              top: '-60px',
              right: '24px',
              zIndex: 10,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
              borderRadius: '30px',
              padding: '6px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.8rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            className="reels-mute-toggle"
          >
            <i className={`fa-solid ${muted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
            <span>{muted ? 'Unmute All' : 'Mute All'}</span>
          </button>

          {/* Left Navigation Arrow */}
          <button
            type="button"
            onClick={() => scroll('left')}
            style={{
              position: 'absolute',
              left: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: 46,
              height: 46,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2D1B0E, #1C0A02)',
              border: '1.5px solid rgba(200,149,108,0.4)',
              color: 'var(--primary, #C8956C)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
              opacity: canScrollLeft ? 1 : 0.35,
              pointerEvents: canScrollLeft ? 'auto' : 'none',
              transition: 'all 0.3s ease',
            }}
            className="reels-arrow-left d-none d-md-flex"
            aria-label="Scroll left"
          >
            <i className="fa-solid fa-chevron-left" style={{ fontSize: '0.9rem' }}></i>
          </button>

          {/* Right Navigation Arrow */}
          <button
            type="button"
            onClick={() => scroll('right')}
            style={{
              position: 'absolute',
              right: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: 46,
              height: 46,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2D1B0E, #1C0A02)',
              border: '1.5px solid rgba(200,149,108,0.4)',
              color: 'var(--primary, #C8956C)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
              opacity: canScrollRight ? 1 : 0.35,
              pointerEvents: canScrollRight ? 'auto' : 'none',
              transition: 'all 0.3s ease',
            }}
            className="reels-arrow-right d-none d-md-flex"
            aria-label="Scroll right"
          >
            <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.9rem' }}></i>
          </button>

          {/* Horizontal scrollable track */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              gap: '24px',
              padding: '12px 12px 24px 12px',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
            className="reels-scroll-track"
          >
            {REELS.map((reel) => {
              const isPlaying = playingId === reel.id;
              const isYoutube = reel.src.includes('youtube.com') || reel.src.includes('youtu.be');

              return (
                <div
                  key={reel.id}
                  data-id={reel.id}
                  style={{
                    scrollSnapAlign: 'start',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleVideoClick(reel.id)}
                  className={`reel-card-item${isPlaying ? ' playing' : ''}`}
                >
                  {/* Close/Pause Button (only visible when playing) */}
                  {isPlaying && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlayingId(null);
                        if (!isYoutube) {
                          videoRefs.current[reel.id]?.pause();
                        }
                      }}
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        zIndex: 10,
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'rgba(0, 0, 0, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                      aria-label="Close video"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  )}

                  {/* Fallback image */}
                  {!isPlaying && (
                    <img
                      src={reel.image}
                      alt={reel.title}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 1,
                      }}
                    />
                  )}

                  {/* Video/Iframe Content */}
                  {isPlaying && (
                    isYoutube ? (
                      <iframe
                        src={reel.src}
                        title={reel.title}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          border: 'none',
                          zIndex: 2,
                        }}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        ref={(el) => { videoRefs.current[reel.id] = el; }}
                        data-id={reel.id}
                        loop
                        preload="auto"
                        playsInline
                        muted={muted}
                        autoPlay
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          zIndex: 2,
                        }}
                        onPlay={() => handlePlayState(reel.id)}
                        src={reel.src}
                      />
                    )
                  )}

                  {/* Shimmer gradient overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.85) 100%)', zIndex: 3, pointerEvents: 'none' }} />

                  {/* Play Button Overlay */}
                  {!isPlaying && (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4 }}>
                      <div style={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        background: 'rgba(200, 149, 108, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 25px rgba(200, 149, 108, 0.4)',
                        transition: 'all 0.2s ease',
                      }} className="reel-play-btn">
                        <i className="fa-solid fa-play" style={{ color: '#fff', fontSize: '1.25rem', marginLeft: '4px' }}></i>
                      </div>
                    </div>
                  )}

                  {/* Glassmorphic Description Bar */}
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    background: 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: 'blur(12px)',
                    border: '1.5px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    padding: '12px',
                    zIndex: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    pointerEvents: 'none',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                      <div style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        border: '1px solid rgba(200, 149, 108, 0.4)',
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}>
                        <img src="/uploads/founder-1781446863195.webp" alt="Kriss" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <span style={{ fontSize: '0.68rem', color: 'var(--gold-light, #FFEFA6)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                        KrissMaagiic
                      </span>
                    </div>
                    <h4 style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 700, margin: 0 }}>
                      {reel.title}
                    </h4>
                    <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.3 }}>
                      {reel.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots indicators under the track */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }} className="reels-carousel-dots">
          {REELS.map((_, idx) => {
            const isActive = scrollIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                style={{
                  width: isActive ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  background: isActive ? 'var(--primary, #C8956C)' : 'rgba(255,255,255,0.2)',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => {
                  const el = carouselRef.current;
                  if (el) {
                    const firstCard = el.querySelector('.reel-card-item');
                    if (firstCard) {
                      const cardWidth = firstCard.clientWidth + 24;
                      el.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
                    }
                  }
                }}
                aria-label={`Go to reel ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
