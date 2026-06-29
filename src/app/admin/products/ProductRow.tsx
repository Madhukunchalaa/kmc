'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { ReactNode } from 'react';

/**
 * Client wrapper around a product table <tr> that makes the whole row
 * clickable (opens the edit page) and adds a hover highlight.
 *
 * Clicks that land on interactive controls — the Stock editor, the Edit/Delete
 * actions, or anything tagged with `data-no-row-nav` — are ignored so those
 * keep working without triggering navigation.
 */
export default function ProductRow({
  editHref,
  isTrashView,
  children,
}: {
  editHref: string | null;
  isTrashView: boolean;
  children: ReactNode;
}) {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const clickable = !!editHref;

  const baseBg = isTrashView ? 'rgba(255,240,230,0.25)' : '#fff';
  const hoverBg = isTrashView ? 'rgba(255,235,220,0.6)' : '#FAF6F1';

  return (
    <tr
      onClick={(e) => {
        if (!clickable) return;
        const target = e.target as HTMLElement;
        // Don't navigate when a control inside the row was clicked.
        if (target.closest('a, button, input, select, textarea, label, [data-no-row-nav]')) return;
        router.push(editHref);
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderTop: '1px solid rgba(0,0,0,0.05)',
        background: hover && clickable ? hoverBg : baseBg,
        opacity: isTrashView ? 0.85 : 1,
        cursor: clickable ? 'pointer' : 'default',
        transition: 'background 0.15s',
      }}
    >
      {children}
    </tr>
  );
}
