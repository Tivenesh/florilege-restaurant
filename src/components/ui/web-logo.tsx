export function WebLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(60,60)">
        {/* Center circle */}
        <circle cx="0" cy="0" r="4" fill="#3b82f6" />

        {/* Web/Network pattern */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = i * 60 * (Math.PI / 180)
          const x1 = Math.cos(angle) * 15
          const y1 = Math.sin(angle) * 15
          const x2 = Math.cos(angle) * 30
          const y2 = Math.sin(angle) * 30

          return (
            <g key={i}>
              {/* Main nodes */}
              <line x1="0" y1="0" x2={x1} y2={y1} stroke="#3b82f6" strokeWidth="1.5" />
              <circle cx={x1} cy={y1} r="2.5" fill="#3b82f6" />

              {/* Outer connections */}
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3b82f6" strokeWidth="1" opacity="0.6" />
              <circle cx={x2} cy={y2} r="1.5" fill="#3b82f6" opacity="0.7" />

              {/* Connecting lines between nodes */}
              {i < 5 && (
                <line
                  x1={x1}
                  y1={y1}
                  x2={Math.cos((i + 1) * 60 * (Math.PI / 180)) * 15}
                  y2={Math.sin((i + 1) * 60 * (Math.PI / 180)) * 15}
                  stroke="#3b82f6"
                  strokeWidth="0.8"
                  opacity="0.4"
                />
              )}
            </g>
          )
        })}

        {/* Connect last to first */}
        <line
          x1={Math.cos(5 * 60 * (Math.PI / 180)) * 15}
          y1={Math.sin(5 * 60 * (Math.PI / 180)) * 15}
          x2={Math.cos(0) * 15}
          y2={Math.sin(0) * 15}
          stroke="#3b82f6"
          strokeWidth="0.8"
          opacity="0.4"
        />
      </g>
    </svg>
  )
}
