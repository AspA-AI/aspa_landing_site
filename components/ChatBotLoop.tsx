import { useEffect, useRef, useState } from "react"

type ChatBotLoopProps = {
  title: string
  messages: string[]
  accentColor?: string
}

export default function ChatBotLoop({
  title,
  messages,
  accentColor = "#D4AF37",
}: ChatBotLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  // State for input value
  const [inputValue, setInputValue] = useState("")
  const chatMessages = messages

  useEffect(() => {
    const container = containerRef.current
    const content = contentRef.current
    if (!container || !content) return

    const clone = content.cloneNode(true)
    content.after(clone)

    let scrollPos = 0
    const speed = 30
    let animationFrameId: number
    let isPaused = false

    const animate = () => {
      if (isPaused) return
      scrollPos += speed / 60

      if (scrollPos >= content.scrollHeight) {
        scrollPos = 0
      }

      container.scrollTop = scrollPos
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    const onEnter = () => {
      isPaused = true
      container.style.overflowY = "auto"
    }

    const onLeave = () => {
      isPaused = false
      container.style.overflowY = "hidden"
      container.scrollTop = scrollPos % content.scrollHeight
      requestAnimationFrame(animate)
    }

    container.addEventListener("mouseenter", onEnter)
    container.addEventListener("mouseleave", onLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      container.removeEventListener("mouseenter", onEnter)
      container.removeEventListener("mouseleave", onLeave)
    }
  }, [chatMessages])

  // Handle form submission - just clear the input
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    setInputValue("")
  }

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-2xl bg-gray-800 ">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 bg-gradient-800/80 text-white">
        <div className="p-2 bg-[#D4AF37] rounded-full backdrop-blur-sm">
        </div>
        <span className="font-semibold text-lg">{title}</span>
      </div>

      {/* Chat Body */}
      <div 
        ref={containerRef}
        className="h-[calc(100%-120px)] p-4 overflow-y-auto chat-scrollbar"
      >
        <div ref={contentRef} className="space-y-4">
          {chatMessages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-4 py-3 rounded-2xl shadow-lg ${
                  i % 2 === 0
                    ? "bg-[#D4AF37]  text-white"
                    : "bg-gray-700/90 text-[#D4AF37]"
                }`}
              >
                {msg}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800/90 backdrop-blur-lg">
        <form onSubmit={handleSendMessage} className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  setInputValue("")
                }
              }}
              placeholder="Type a message..."
              className="w-full px-4 py-3 pr-12 rounded-full bg-gray-700/70 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-[#D4AF37] placeholder-[#D4AF37]"
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#D4AF37] text-white hover:opacity-90 transition-opacity"
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}
