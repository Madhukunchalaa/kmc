'use client';

import { useState, useEffect, useRef } from 'react';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const autoCloseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoOpenTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 1. Auto-open chat box after 10 seconds (10000ms)
    autoOpenTimerRef.current = setTimeout(() => {
      setIsOpen(true);

      // 2. Start the auto-close timer (after 10 seconds of opening, close it)
      autoCloseTimerRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 10000);
    }, 10000);

    return () => {
      if (autoOpenTimerRef.current) clearTimeout(autoOpenTimerRef.current);
      if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
    };
  }, []);

  const handleInteraction = () => {
    // If user interacts (hovers, clicks inside, types), cancel the auto-close timer
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
    }
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Cancel all auto timers once the user manually interacts with the button
    if (autoOpenTimerRef.current) {
      clearTimeout(autoOpenTimerRef.current);
      autoOpenTimerRef.current = null;
    }
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
    }

    setIsOpen(!isOpen);
  };

  const closeChat = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
    }
    setIsOpen(false);
  };

  const handleSend = () => {
    if (!message.trim()) return;
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/918096223929?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    
    // Reset state
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div
      className="chat-float-wrapper"
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsOpen(!isOpen);
        }
      }}
      aria-label="Contact Kriss on WhatsApp"
    >
      {/* WhatsApp chat popup box */}
      {isOpen && (
        <div 
          className="chat-popup-box"
          onClick={(e) => {
            e.stopPropagation(); // Don't toggle chat on clicking inside the box
            handleInteraction();
          }}
          onMouseEnter={handleInteraction}
        >
          {/* Header */}
          <div className="chat-popup-header">
            <div className="chat-popup-avatar-container">
              <img src="/site-logo.png" alt="KrissMaagiic Logo" className="chat-popup-avatar" />
              <span className="chat-popup-online-status"></span>
            </div>
            <div className="chat-popup-header-info">
              <div className="chat-popup-title">KrissMaagiic Guidance</div>
              <div className="chat-popup-status">Typically replies instantly</div>
            </div>
            <button type="button" className="chat-popup-close-btn" onClick={closeChat} aria-label="Close chat">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Body */}
          <div className="chat-popup-body">
            <div className="chat-bubble-received">
              Hi there! ✨ Welcome to KrissMaagiic Crystals. How can we help you today?
            </div>
          </div>

          {/* Input Footer */}
          <div className="chat-popup-footer">
            <textarea
              className="chat-popup-input"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                handleInteraction();
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button type="button" className="chat-popup-send-btn" onClick={handleSend} disabled={!message.trim()}>
              <i className="fa-brands fa-whatsapp me-1"></i> Send
            </button>
          </div>
        </div>
      )}

      {/* Astro Jathaka Chakra Background Wheel */}
      <div className="astro-chakra-container">
        <svg viewBox="0 0 100 100" className="astro-chakra-svg">
          {/* Outer Ring */}
          <circle cx="50" cy="50" r="46" fill="none" stroke="var(--accent, #E8C99A)" strokeWidth="1.2" opacity="0.8"/>
          <circle cx="50" cy="50" r="41" fill="none" stroke="var(--accent, #E8C99A)" strokeWidth="0.75" opacity="0.5" strokeDasharray="3, 3"/>
          
          {/* Astrological Houses (12 Divisions) */}
          <line x1="50" y1="4" stroke="var(--accent, #E8C99A)" x2="50" y2="96" strokeWidth="0.5" opacity="0.4"/>
          <line x1="4" y1="50" x2="96" y2="50" stroke="var(--accent, #E8C99A)" strokeWidth="0.5" opacity="0.4"/>
          <line x1="17.3" y1="17.3" x2="82.7" y2="82.7" stroke="var(--accent, #E8C99A)" strokeWidth="0.5" opacity="0.4"/>
          <line x1="82.7" y1="17.3" x2="17.3" y2="82.7" stroke="var(--accent, #E8C99A)" strokeWidth="0.5" opacity="0.4"/>
          <line x1="10.2" y1="27" x2="89.8" y2="73" stroke="var(--accent, #E8C99A)" strokeWidth="0.5" opacity="0.4"/>
          <line x1="10.2" y1="73" x2="89.8" y2="27" stroke="var(--accent, #E8C99A)" strokeWidth="0.5" opacity="0.4"/>
          <line x1="27" y1="10.2" x2="73" y2="89.8" stroke="var(--accent, #E8C99A)" strokeWidth="0.5" opacity="0.4"/>
          <line x1="27" y1="89.8" x2="73" y2="10.2" stroke="var(--accent, #E8C99A)" strokeWidth="0.5" opacity="0.4"/>

          {/* Inner Rings */}
          <circle cx="50" cy="50" r="32" fill="none" stroke="var(--accent, #E8C99A)" strokeWidth="0.75" opacity="0.6"/>
          <circle cx="50" cy="50" r="28" fill="none" stroke="var(--accent, #E8C99A)" strokeWidth="0.5" opacity="0.4" strokeDasharray="4, 4"/>

          {/* Constellation dots */}
          <circle cx="25" cy="20" r="1.5" fill="var(--accent, #E8C99A)" opacity="0.9"/>
          <circle cx="75" cy="20" r="1.5" fill="var(--accent, #E8C99A)" opacity="0.9"/>
          <circle cx="20" cy="65" r="1.5" fill="var(--accent, #E8C99A)" opacity="0.9"/>
          <circle cx="80" cy="65" r="2" fill="var(--accent, #E8C99A)" opacity="0.9"/>
          <circle cx="50" cy="14" r="2" fill="var(--accent, #E8C99A)" opacity="0.9"/>
          <circle cx="50" cy="86" r="1.5" fill="var(--accent, #E8C99A)" opacity="0.9"/>
        </svg>
      </div>

      {/* Main Astrology Consultation Circle Icon */}
      <div className="chat-float-icon-btn d-flex align-items-center gap-3" style={{ fontSize: '1.75rem' }}>
        <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i>
        <i 
          className="fa-brands fa-instagram" 
          style={{ 
            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent', 
            cursor: 'pointer' 
          }} 
          onClick={(e) => { 
            e.stopPropagation(); 
            window.open('https://www.instagram.com/krissmaagiiccrystals/', '_blank'); 
          }}
        ></i>
      </div>
      
      {/* Tooltip */}
      {!isOpen && <span className="chat-tooltip">Need crystal guidance?</span>}
    </div>
  );
}
