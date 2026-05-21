export default function PageLoader({ label = 'Loading…' }: { label?: string }) {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        padding: '120px 20px 60px',
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          border: '3px solid rgba(200,149,108,0.2)',
          borderTopColor: 'var(--primary,#C8956C)',
          animation: 'kmcSpin 0.8s linear infinite',
        }}
      />
      <p style={{ color: 'var(--text-light,#999)', fontSize: '0.9rem', margin: 0 }}>{label}</p>
      <style>{`@keyframes kmcSpin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
