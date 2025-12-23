"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
  {
    title: "Contract File Analyser Chatbot",
    description:
      "AI-powered chatbot that analyzes legal contracts, extracts key information, and provides instant insights for faster decision-making.",
    desktopImage: "/modern-ai-contract-analysis-dashboard-with-documen.jpg",
    mobileImage: "/mobile-ai-contract-chatbot-interface-dark-theme.jpg",
    tags: ["NLP", "Document Analysis", "Legal Tech"],
    demoLink: "https://contract-analyser.demo.com",
    githubLink: "https://github.com/aspai/contract-analyser",
  },
  {
    title: "Assistant Chatbots",
    description:
      "Intelligent conversational AI assistants tailored for various business needs, providing 24/7 support and automation.",
    desktopImage: "/ai-assistant-chatbot-interface-with-conversation-f.jpg",
    mobileImage: "/mobile-chatbot-assistant-messaging-interface-dark-.jpg",
    tags: ["Conversational AI", "Automation", "Support"],
    demoLink: "https://assistant-chatbot.demo.com",
    githubLink: "https://github.com/aspai/assistant-chatbot",
  },
  {
    title: "AI-Assisted Research & Report Generator",
    description:
      "Automated research system that gathers, analyzes, and synthesizes information to generate comprehensive reports in minutes.",
    desktopImage: "/ai-research-automation-dashboard-with-data-visuali.jpg",
    mobileImage: "/mobile-research-report-generator-interface-dark-th.jpg",
    tags: ["Research", "Content Generation", "Analytics"],
    demoLink: "https://research-generator.demo.com",
    githubLink: "https://github.com/aspai/research-generator",
  },
  {
    title: "Prompt Generator",
    description:
      "Sophisticated tool that creates optimized AI prompts for various use cases, enhancing output quality and consistency.",
    desktopImage: "/ai-prompt-engineering-tool-with-templates-dark-the.jpg",
    mobileImage: "/mobile-prompt-generator-app-interface-dark-theme.jpg",
    tags: ["Prompt Engineering", "AI Optimization", "Productivity"],
    demoLink: "https://prompt-generator.demo.com",
    githubLink: "https://github.com/aspai/prompt-generator",
  },
  {
    title: "Personalized Mock Interview Generator",
    description:
      "AI-driven interview preparation system that creates customized mock interviews with real-time feedback and performance analytics.",
    desktopImage: "/ai-mock-interview-platform-with-video-interface-da.jpg",
    mobileImage: "/mobile-interview-practice-app-with-ai-feedback-dar.jpg",
    tags: ["EdTech", "Career Development", "Interview Prep"],
    demoLink: "https://mock-interview.demo.com",
    githubLink: "https://github.com/aspai/mock-interview",
  },
]

interface ProductShowcaseProps {
  id?: string;
}

export function ProductShowcase({ id }: ProductShowcaseProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollInterval: NodeJS.Timeout

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          // Jump back to start seamlessly
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 1
        }
      }, 30)
    }

    const stopAutoScroll = () => {
      clearInterval(scrollInterval)
    }

    startAutoScroll()

    scrollContainer.addEventListener("mouseenter", stopAutoScroll)
    scrollContainer.addEventListener("mouseleave", startAutoScroll)

    return () => {
      clearInterval(scrollInterval)
      scrollContainer.removeEventListener("mouseenter", stopAutoScroll)
      scrollContainer.removeEventListener("mouseleave", startAutoScroll)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" id={id || 'service'}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/20">
            <CheckCircle2 className="w-3 h-3 mr-1 text-[#D4AF37]" />
            Proven Track Record
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team has successfully delivered innovative AI solutions across multiple domains
          </p>
        </div>

        {/* Horizontal Scrolling Product Cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[...products, ...products].map((product, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-[600px] p-6 bg-white text-black border-gray-200 hover:border-[#D4AF37]/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="space-y-4">
                {/* Product Header */}
                <div>
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-[#D4AF37]/20 text-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Device Mockups */}
                <div className="relative h-[300px] mt-6">
                  {/* Desktop Mockup */}
                  <div className="absolute left-0 top-0 w-[400px] h-[240px] rounded-lg border-2 border-primary/20 overflow-hidden shadow-lg bg-background/50">
                    <div className="h-6 bg-card/80 flex items-center px-2 gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <img
                      src={product.desktopImage || "/placeholder.svg"}
                      alt={`${product.title} desktop view`}
                      className="w-full h-[calc(100%-24px)] object-cover"
                    />
                  </div>

                  {/* Mobile Mockup */}
                  <div className="absolute right-4 bottom-0 w-[160px] h-[280px] rounded-2xl border-4 border-primary/30 overflow-hidden shadow-2xl bg-background/80 z-10">
                    <div className="h-6 bg-card/80 flex items-center justify-center">
                      <div className="w-16 h-1 rounded-full bg-foreground/20" />
                    </div>
                    <img
                      src={product.mobileImage || "/placeholder.svg"}
                      alt={`${product.title} mobile view`}
                      className="w-full h-[calc(100%-24px)] object-cover"
                    />
                  </div>
                </div>

                {/* <div className="flex gap-3 pt-4">
                  <Button asChild size="sm" className="flex-1 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white">
                    <Link href={product.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2 text-white" />
                      View Demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent border-[#D4AF37]/30 text-foreground hover:bg-[#D4AF37]/10">
                    <Link href={product.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2 text-[#D4AF37]" />
                      Source Code
                    </Link>
                  </Button>
                </div> */}
              </div>
            </Card>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">Hover to pause • Infinite auto-scrolling showcase</p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
