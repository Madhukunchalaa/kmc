export default function CosmicLoader({
  text = 'Loading',
  subtext,
}: {
  text?: string;
  subtext?: string;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', gap: '1rem' }}>
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          width: 48,
          height: 48,
          borderRadius: '50%',
          border: '3px solid rgba(255,255,255,0.15)',
          borderTopColor: 'var(--accent, #c9a96e)',
          animation: 'cosmicSpin 0.9s linear infinite',
        }}
      />
      <style>{`@keyframes cosmicSpin { to { transform: rotate(360deg); } }`}</style>
      {text && <p style={{ margin: 0, fontWeight: 600, color: 'var(--text, #fff)', letterSpacing: '0.04em' }}>{text}</p>}
      {subtext && <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-light, #aaa)' }}>{subtext}</p>}
    </div>
  );
}
