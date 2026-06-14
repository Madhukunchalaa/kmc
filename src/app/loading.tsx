import Spinner from '@/components/Spinner';

export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      gap: '1.5rem'
    }}>
      <div style={{
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: 'rgba(200, 149, 108, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--primary,#C8956C)',
        fontSize: '1.5rem',
        animation: 'pulse 2s infinite ease-in-out'
      }}>
        <Spinner size={24} color="var(--primary,#C8956C)" />
      </div>
      <p style={{
        color: 'var(--primary,#C8956C)',
        fontSize: '0.9rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        animation: 'pulse 2s infinite ease-in-out'
      }}>
        Loading...
      </p>

    </div>
  );
}
