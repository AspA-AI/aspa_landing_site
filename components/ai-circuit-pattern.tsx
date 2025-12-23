"use client"

export function AICircuitPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.65 0.18 150)" />
            <stop offset="100%" stopColor="oklch(0.75 0.14 85)" />
          </linearGradient>
        </defs>

        {/* Circuit board style lines */}
        <g stroke="url(#circuitGradient)" strokeWidth="2" fill="none">
          <path d="M 0 50 H 200 V 150 H 400" className="animate-pulse" />
          <path d="M 100 0 V 200 H 300 V 400" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
          <path d="M 200 100 H 500 V 300" className="animate-pulse" style={{ animationDelay: "1s" }} />
          <path d="M 300 50 V 250 H 600" className="animate-pulse" style={{ animationDelay: "1.5s" }} />
          <path d="M 400 150 H 700 V 350" className="animate-pulse" style={{ animationDelay: "2s" }} />
        </g>

        {/* Connection nodes */}
        <g fill="oklch(0.75 0.14 85)">
          <circle cx="200" cy="50" r="4" className="animate-glow" />
          <circle cx="100" cy="200" r="4" className="animate-glow" style={{ animationDelay: "0.5s" }} />
          <circle cx="400" cy="150" r="4" className="animate-glow" style={{ animationDelay: "1s" }} />
          <circle cx="300" cy="250" r="4" className="animate-glow" style={{ animationDelay: "1.5s" }} />
          <circle cx="600" cy="50" r="4" className="animate-glow" style={{ animationDelay: "2s" }} />
        </g>
      </svg>
    </div>
  )
}
