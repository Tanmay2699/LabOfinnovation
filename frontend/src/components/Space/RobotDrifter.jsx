/**
 * The system's figure: a tethered lab rover drifting in the dark.
 *
 * It exists because the obvious choice — a floating astronaut — belongs to
 * every space template on the internet and says nothing about what this
 * company does. A robot on a tether says both things at once.
 *
 * Three loops on deliberately unrelated periods so they never resolve into one
 * motion: the body bobs on dur-drift, the tether sways at 1.35x, the sensor
 * lens cycles at 0.8x. Under reduced motion all three stop and it sits level,
 * which still composes.
 *
 * One per page. A mascot on every page becomes a cartoon, which is the
 * register this brand avoids. Hide it below 640px rather than shrinking it —
 * at small sizes the chest readout stops reading and it becomes a grey blob.
 *
 * Never make it react to the pointer. The moment it responds to the user it
 * reads as a game character.
 */
const RobotDrifter = ({ size = 220, tether = true, className = '' }) => (
  <div className={`relative inline-block pointer-events-none ${className}`} aria-hidden="true">
    <svg width={size} height={size * 1.25} viewBox="0 0 176 220" fill="none">
      {tether && (
        <g className="animate-sway" style={{ transformOrigin: '50% 0%' }}>
          <path
            d="M88 8 C 96 48, 78 78, 88 104"
            stroke="var(--constellation)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <circle cx="88" cy="8" r="2.5" fill="var(--signal-300)" />
        </g>
      )}

      <g className="animate-bob" style={{ transformOrigin: '50% 40%' }}>
        {/* chassis */}
        <rect x="48" y="96" width="80" height="72" rx="18"
          fill="var(--surface-overlay)" stroke="var(--line-strong)" strokeWidth="1.5" />
        {/* head */}
        <rect x="56" y="58" width="64" height="46" rx="16"
          fill="var(--surface-inset)" stroke="var(--line-strong)" strokeWidth="1.5" />
        {/* visor */}
        <rect x="66" y="70" width="44" height="22" rx="11" fill="var(--signal-900)" />
        <circle className="animate-lens" cx="80" cy="81" r="5" fill="var(--signal-700)" />
        <circle cx="98" cy="81" r="3" fill="var(--signal-700)" />
        {/* antenna — the one warm point in the figure */}
        <path d="M88 58 L88 44" stroke="var(--line-strong)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="88" cy="40" r="4" fill="var(--ember-500)" />
        {/* arms */}
        <path d="M48 116 C 28 122, 22 136, 26 150"
          stroke="var(--line-strong)" strokeWidth="3" strokeLinecap="round" />
        <path d="M128 116 C 148 122, 154 136, 150 150"
          stroke="var(--line-strong)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="26" cy="154" r="6"
          fill="var(--surface-overlay)" stroke="var(--line-strong)" strokeWidth="1.5" />
        <circle cx="150" cy="154" r="6"
          fill="var(--surface-overlay)" stroke="var(--line-strong)" strokeWidth="1.5" />
        {/* chest readout */}
        <rect x="68" y="116" width="40" height="4" rx="2" fill="var(--signal-500)" opacity="0.8" />
        <rect x="68" y="126" width="26" height="4" rx="2" fill="var(--constellation)" />
        <rect x="68" y="136" width="34" height="4" rx="2" fill="var(--constellation)" />
        {/* treads */}
        <path d="M58 168 L52 190 M118 168 L124 190"
          stroke="var(--line-strong)" strokeWidth="3" strokeLinecap="round" />
        <rect x="40" y="188" width="96" height="16" rx="8"
          fill="var(--surface-inset)" stroke="var(--line-strong)" strokeWidth="1.5" />
      </g>
    </svg>
  </div>
);

export default RobotDrifter;
