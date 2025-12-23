"use client"

export function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(oklch(0.65 0.18 150) 1px, transparent 1px),
                           linear-gradient(90deg, oklch(0.65 0.18 150) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Top left blob - moves in a large circular pattern */}
      <div
        className="absolute w-40 h-40 bg-[#D4AF37] rounded-full blur-3xl"
        style={{
          animation: 'float-1 25s ease-in-out infinite',
          top: '15%',
          left: '10%',
        }}
      />

      {/* Bottom right blob - moves in a figure-8 pattern */}
      <div
        className="absolute w-40 h-40 bg-[#D4AF37] rounded-full blur-3xl"
        style={{
          animation: 'float-2 30s ease-in-out infinite',
          bottom: '15%',
          right: '10%',
        }}
      />

      {/* Middle right blob - moves in a diagonal wave */}
      <div
        className="absolute w-48 h-48 bg-primary/20 rounded-full blur-3xl"
        style={{
          animation: 'float-3 35s ease-in-out infinite',
          top: '40%',
          left: '60%',
        }}
      />

      {/* Middle left blob - moves in a vertical wave */}
      <div
        className="absolute w-48 h-48 bg-primary/20 rounded-full blur-3xl"
        style={{
          animation: 'float-4 28s ease-in-out infinite',
          top: '60%',
          left: '30%',
        }}
      />

      <style jsx global>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(5vw, 5vh) scale(1.1); }
          50% { transform: translate(10vw, -5vh) scale(0.9); }
          75% { transform: translate(5vw, 5vh) scale(1.1); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-8vw, -5vh) scale(1.05); }
          50% { transform: translate(5vw, 10vh) scale(0.95); }
          75% { transform: translate(-8vw, -5vh) scale(1.05); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-10vw, -8vh) scale(1.1); }
          66% { transform: translate(5vw, 10vh) scale(0.9); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(15vw, -5vh) scale(1.05); }
          50% { transform: translate(5vw, 15vh) scale(0.95); }
          75% { transform: translate(-10vw, 5vh) scale(1.1); }
        }
      `}</style>
    </div>
  )
}
