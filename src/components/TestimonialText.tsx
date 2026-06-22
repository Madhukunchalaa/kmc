'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Renders a testimonial quote clamped to a few lines with a "Read more" toggle.
 * The full text is always present in the DOM (never trimmed) — only the visual
 * height is clamped, so long (up to 300-word) reviews keep cards consistent.
 */
export default function TestimonialText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const [clampable, setClampable] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Measured in the clamped state: if the full text is taller than the
    // clamped box, we need a "Read more" toggle.
    setClampable(el.scrollHeight > el.clientHeight + 2);
  }, [text]);

  return (
    <div className="testimonial-text-wrap">
      <p ref={ref} className={`testimonial-text${expanded ? ' is-expanded' : ''}`}>
        &quot;{text}&quot;
      </p>
      {(clampable || expanded) && (
        <button
          type="button"
          className="testimonial-readmore"
          onClick={() => setExpanded((e) => !e)}
        >
          {expanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </div>
  );
}
