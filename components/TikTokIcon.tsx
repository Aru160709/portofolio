export default function TikTokIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M16.6 3h-3.2v12.2a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.4a5.8 5.8 0 1 0 5 5.8V8.9a7 7 0 0 0 4 1.3V7a4.2 4.2 0 0 1-4-4z" />
    </svg>
  );
}
