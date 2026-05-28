'use client';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918096223929"
      className="chat-float-wrapper"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Kriss"
    >
      {/* Astro Jathaka Chakra Background Wheel */}
      <div className="astro-chakra-container">
        <svg viewBox="0 0 100 100" className="astro-chakra-svg">
          {/* Outer Ring */}
          <circle cx="50" cy="50" r="46" fill="none" stroke="var(--accent, #E8C99A)" strokeWidth="1.2" opacity="0.8"/>
          <circle cx="50" cy="50" r="41" fill="none" stroke="var(--accent, #E8C99A)" strokeWidth="0.75" opacity="0.5" strokeDasharray="3, 3"/>
          
          {/* Astrological Houses (12 Divisions) */}
          <line x1="50" y1="4" x2="50" y2="96" stroke="var(--accent, #E8C99A)" strokeWidth="0.5" opacity="0.4"/>
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
      <div className="chat-float-icon-btn">
        <i className="fa-solid fa-comments"></i>
      </div>
      
      {/* Tooltip */}
      <span className="chat-tooltip">Need crystal guidance?</span>
    </a>
  );
}

