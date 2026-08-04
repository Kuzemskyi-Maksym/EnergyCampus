type TeapotProps = {
  className?: string;
  mood?: "wave" | "point" | "calm";
};

/**
 * "Чайничок" — маскот проєкту. Метафора простa: чайник, що википає
 * даремно, це і є та енергія, яку ми втрачаємо. Малюнок навмисно
 * лишається лінійним і теплим (не корпоративним), з легкою парою —
 * єдиний анімований елемент на сторінці, тож увага не розсіюється.
 */
export default function Teapot({ className = "", mood = "wave" }: TeapotProps) {
  return (
    <div className={`relative kettle-bob ${className}`}>
      <svg viewBox="0 0 220 220" className="w-full h-full" aria-hidden="true">
        <ellipse cx="110" cy="196" rx="58" ry="8" fill="var(--color-leaf-tint)" />

        {/* steam */}
        <g stroke="var(--color-slate-light)" strokeWidth="4" strokeLinecap="round" fill="none">
          <path className="steam-1" d="M92 40 q-6 -10 0 -18" />
          <path className="steam-2" d="M110 34 q-6 -10 0 -18" />
          <path className="steam-3" d="M128 40 q-6 -10 0 -18" />
        </g>

        {/* body */}
        <path
          d="M46 118 C46 84 74 62 110 62 C146 62 174 84 174 118 C174 152 146 172 110 172 C74 172 46 152 46 118 Z"
          fill="#eef6f8"
          stroke="var(--color-forest)"
          strokeWidth="5"
        />
        {/* lid */}
        <path d="M84 62 C84 50 96 42 110 42 C124 42 136 50 136 62" fill="#eef6f8" stroke="var(--color-forest)" strokeWidth="5" />
        <rect x="102" y="30" width="16" height="10" rx="4" fill="#eef6f8" stroke="var(--color-forest)" strokeWidth="5" />
        {/* spout */}
        <path d="M172 104 C190 100 200 92 202 80" fill="none" stroke="var(--color-forest)" strokeWidth="5" strokeLinecap="round" />
        {/* handle */}
        <path d="M40 100 C18 100 18 140 40 140" fill="none" stroke="var(--color-forest)" strokeWidth="5" strokeLinecap="round" />

        {/* face */}
        <circle cx="90" cy="120" r="6" fill="var(--color-forest)" />
        <circle cx="130" cy="120" r="6" fill="var(--color-forest)" />
        {mood === "wave" || mood === "calm" ? (
          <path d="M96 140 Q110 152 124 140" stroke="var(--color-forest)" strokeWidth="5" strokeLinecap="round" fill="none" />
        ) : (
          <circle cx="110" cy="142" r="7" fill="var(--color-clay)" />
        )}
        <circle cx="72" cy="130" r="7" fill="var(--color-clay)" opacity="0.5" />
        <circle cx="148" cy="130" r="7" fill="var(--color-clay)" opacity="0.5" />

        {/* leaf badge on belly */}
        <path
          d="M110 150 C120 150 126 158 126 166 C114 166 108 160 108 150 Z"
          fill="var(--color-leaf)"
        />

        {mood === "wave" && (
          <path
            d="M182 118 C192 112 198 118 196 128 C204 124 210 130 204 138"
            fill="none"
            stroke="var(--color-forest)"
            strokeWidth="5"
            strokeLinecap="round"
          />
        )}
      </svg>
    </div>
  );
}
