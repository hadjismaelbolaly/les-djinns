/** Frise signature : étoile à huit branches (géométrie islamique) alternée avec le losange pointé du bogolan. */
export function Motif({ className = "", tone = "or" }: { className?: string; tone?: "or" | "bordeaux" }) {
  const color = tone === "or" ? "#C6A15B" : "#7A2630";
  const id = `motif-${tone}`;
  return (
    <svg aria-hidden="true" className={`block h-6 w-full ${className}`} preserveAspectRatio="none">
      <defs>
        <pattern id={id} width="64" height="24" patternUnits="userSpaceOnUse">
          <g fill="none" stroke={color} strokeWidth="1.2">
            <rect x="6" y="6" width="12" height="12" />
            <rect x="6" y="6" width="12" height="12" transform="rotate(45 12 12)" />
            <path d="M32 4 L42 12 L32 20 L22 12 Z" />
          </g>
          <circle cx="32" cy="12" r="1.6" fill={color} />
          <circle cx="50" cy="12" r="1.2" fill={color} />
          <circle cx="56" cy="12" r="1.2" fill={color} />
          <line x1="0" y1="23.5" x2="64" y2="23.5" stroke={color} strokeWidth="0.6" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="24" fill={`url(#${id})`} />
    </svg>
  );
}
