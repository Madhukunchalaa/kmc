import Link from 'next/link';
import { ReactNode } from 'react';

export default function AuthShell({
  eyebrow,
  title,
  highlight,
  subtitle,
  children,
  footer,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="auth-bg">
      <div className="auth-orb auth-orb-1" />
      <div className="auth-orb auth-orb-2" />
      <div className="auth-orb auth-orb-3" />

      <div className="auth-wrap">
        <Link href="/" className="auth-brand">
          <i className="fa-solid fa-gem auth-brand-icon" />
          <span className="auth-brand-name">KrissMaagiic</span>
        </Link>

        <div className="auth-heading">
          <span className="auth-eyebrow">{eyebrow}</span>
          <h1 className="auth-title">
            {title} <em className="auth-highlight">{highlight}</em>
          </h1>
          {subtitle && <p className="auth-subtitle">{subtitle}</p>}
        </div>

        <div className="auth-card">
          {children}
        </div>

        {footer && <div className="auth-footer-link">{footer}</div>}
        <div className="auth-back">
          <Link href="/">← Back to home</Link>
        </div>
      </div>
    </div>
  );
}
