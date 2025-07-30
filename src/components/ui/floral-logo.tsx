export function FloralLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(60,60)">
        {/* Center circle */}
        <circle cx="0" cy="0" r="3" fill="#d946ef" />

        {/* Petals - 8 directions */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = i * 45 * (Math.PI / 180)
          const x1 = Math.cos(angle) * 8
          const y1 = Math.sin(angle) * 8
          const x2 = Math.cos(angle) * 25
          const y2 = Math.sin(angle) * 25
          const x3 = Math.cos(angle) * 35
          const y3 = Math.sin(angle) * 35

          return (
            <g key={i}>
              {/* Main petal line */}
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#d946ef" strokeWidth="1.5" strokeLinecap="round" />
              {/* Petal tip */}
              <circle cx={x2} cy={y2} r="1.5" fill="#d946ef" />

              {/* Decorative elements */}
              <line
                x1={x2}
                y1={y2}
                x2={x3}
                y2={y3}
                stroke="#d946ef"
                strokeWidth="0.8"
                strokeLinecap="round"
                opacity="0.6"
              />

              {/* Side branches */}
              {i % 2 === 0 && (
                <>
                  <line
                    x1={x1 * 1.5}
                    y1={y1 * 1.5}
                    x2={x1 * 1.5 + Math.cos(angle + Math.PI / 4) * 8}
                    y2={y1 * 1.5 + Math.sin(angle + Math.PI / 4) * 8}
                    stroke="#d946ef"
                    strokeWidth="1"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                  <line
                    x1={x1 * 1.5}
                    y1={y1 * 1.5}
                    x2={x1 * 1.5 + Math.cos(angle - Math.PI / 4) * 8}
                    y2={y1 * 1.5 + Math.sin(angle - Math.PI / 4) * 8}
                    stroke="#d946ef"
                    strokeWidth="1"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                </>
              )}
            </g>
          )
        })}
      </g>
    </svg>
  )
}
