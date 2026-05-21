export default function Spinner({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        borderRadius: '50%',
        border: `2px solid rgba(255,255,255,0.35)`,
        borderTopColor: color,
        animation: 'kmcSpinInline 0.7s linear infinite',
        verticalAlign: 'middle',
      }}
    >
      <style>{`@keyframes kmcSpinInline { to { transform: rotate(360deg); } }`}</style>
    </span>
  );
}
