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
    src: `${BASE}/Video%201.mp4`,
    title: 'Welcome to KrissMaagiic',
    caption: 'Discover healing energy, sacred rituals, and certified authentic crystals.',
    image: '/about-hero.png',
  },
  {
    id: 2,
    src: `${BASE}/Video%202.mp4`,
    title: 'Candle Spell Rituals',
    caption: 'Watch a real candle spell designed to manifest alignment and positivity.',
    image: '/service-candle.png',
  },
  {
    id: 3,
    src: `${BASE}/Video%203.mp4`,
    title: 'Intuitively Chosen Tarot',
    caption: 'Receive personalized spiritual guidance and clear answers to life questions.',
    image: '/service-tarot.png',
  },
  {
    id: 4,
    src: `${BASE}/Video%204.mp4`,
    title: 'Spell Jars & Energy',
    caption: 'Handcrafted with moonlight-charged crystals, oils, and focused intentions.',
    image: '/service-spelljar.png',
  },
  {
    id: 5,
    src: `${BASE}/Video%205.mp4`,
    title: 'Pure Crystal Energy',
    caption: 'Handpicked and ritually cleansed stones to invite harmony into your home.',
    image: '/crystal-hero.png',
  },
  {
    id: 6,
    src: `${BASE}/Video%206.mp4`,
    title: 'Numerology & Birth Charts',
    caption: 'Understand the hidden patterns and cosmic alignments behind your numbers.',
    image: '/service-numerology.png',
  },
];

export default function SpiritualReels() {
  const [centerId, setCenterId] = useState<number | null>(7); // First card is active initially
  const [playingId, setPlayingId] = useState<number | null>(7); // First card plays initially
  const [muted, setMuted] = useState(true);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to pause other HTML5 videos
  const pauseOtherVideos = (id: number) => {
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

  const handlePlayState = (id: number) => {
    setPlayingId(id);
    pauseOtherVideos(id);
  };

  const handleVideoClick = (id: number) => {
    const el = carouselRef.current;
    if (!el) return;

    const cards = el.querySelectorAll('.reel-card-item');
    const targetCard = Array.from(cards).find(
      (card) => Number(card.getAttribute('data-id')) === id
    ) as HTMLElement | undefined;

    if (targetCard) {
      const isCenter = centerId === id;
      if (isCenter) {
        // Toggle play/pause for the center card
        const reel = REELS.find((r) => r.id === id);
        if (!reel) return;
        const isYoutube = reel.src.includes('youtube.com') || reel.src.includes('youtu.be');

        if (isYoutube) {
          if (playingId === id) {
            setPlayingId(null);
          } else {
            setPlayingId(id);
          }
          return;
        }

        const v = videoRefs.current[id];
        if (!v) return;

        if (v.paused) {
          v.muted = muted;
          v.play()
            .then(() => {
              setPlayingId(id);
              pauseOtherVideos(id);
            })
            .catch(() => {});
        } else {
          v.pause();
          if (playingId === id) {
            setPlayingId(null);
          }
        }
      } else {
        // Scroll side card to center
        const targetScrollLeft = targetCard.offsetLeft - el.clientWidth / 2 + targetCard.clientWidth / 2;
        el.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
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

    // Check arrow states
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);

    // Debounce center card calculation to prevent lag during scroll
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const cards = el.querySelectorAll('.reel-card-item');
      const containerCenter = el.scrollLeft + el.clientWidth / 2;

      let closestId: number | null = null;
      let minDistance = Infinity;
      let closestIdx = 0;

      cards.forEach((card, idx) => {
        const cardId = Number(card.getAttribute('data-id'));
        const cardElement = card as HTMLElement;
        const cardCenter = cardElement.offsetLeft + cardElement.clientWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestId = cardId;
          closestIdx = idx;
        }
      });

      if (closestId !== null) {
        setCenterId(closestId);
        setPlayingId(closestId); // Autoplay the centered video
        setScrollIndex(closestIdx);

        // If it's a native video, ensure it starts playing and others pause
        const reel = REELS.find((r) => r.id === closestId);
        if (reel && !reel.src.includes('youtube.com') && !reel.src.includes('youtu.be')) {
          pauseOtherVideos(closestId);
          setTimeout(() => {
            const v = videoRefs.current[closestId!];
            if (v && v.paused) {
              v.muted = muted;
              v.play().catch(() => {});
            }
          }, 50);
        }
      }
    }, 150);
  };

  const scroll = (direction: 'left' | 'right') => {
    const el = carouselRef.current;
    if (!el) return;
    const firstCard = el.querySelector('.reel-card-item') as HTMLElement;
    if (firstCard) {
      const computedGap = parseFloat(window.getComputedStyle(el).gap) || 24;
      const cardWidth = firstCard.offsetWidth + computedGap;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    handleScroll();
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Helper to format YouTube URLs with correct mute state
  const getEmbedUrl = (src: string, isMuted: boolean) => {
    const muteVal = isMuted ? '1' : '0';
    if (src.includes('mute=')) {
      return src.replace(/mute=[01]/, `mute=${muteVal}`);
    }
    return `${src}&mute=${muteVal}`;
  };

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
            className="reels-scroll-track"
          >
            {REELS.map((reel) => {
              const isCenter = centerId === reel.id;
              const isPlaying = playingId === reel.id;
              const isYoutube = reel.src.includes('youtube.com') || reel.src.includes('youtu.be');

              return (
                <div
                  key={reel.id}
                  data-id={reel.id}
                  onClick={() => handleVideoClick(reel.id)}
                  className={`reel-card-item${isCenter ? ' active' : ''}${isPlaying ? ' playing' : ''}`}
                >
                  {/* Close/Pause Button (only visible when playing and centered) */}
                  {isPlaying && isCenter && (
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
                        top: '16px',
                        right: '16px',
                        zIndex: 10,
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'rgba(0, 0, 0, 0.65)',
                        border: '1.5px solid rgba(255, 255, 255, 0.25)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                        transition: 'all 0.2s',
                      }}
                      className="reel-close-btn"
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
                        src={getEmbedUrl(reel.src, muted)}
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

                  {/* Play Button Overlay (only shown when not playing and centered) */}
                  {!isPlaying && isCenter && (
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
                    opacity: isCenter ? 1 : 0.6,
                    transition: 'opacity 0.3s ease',
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
                        <img src="https://pub-bc6e3f2948144094afe58ec3ca87bf45.r2.dev/uploads/founder-1781446863195.webp" alt="Kriss" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                    const firstCard = el.querySelector('.reel-card-item') as HTMLElement;
                    if (firstCard) {
                      const computedGap = parseFloat(window.getComputedStyle(el).gap) || 24;
                      const cardWidth = firstCard.offsetWidth + computedGap;
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
