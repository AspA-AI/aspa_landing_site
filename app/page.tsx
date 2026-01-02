"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Brain, Zap, Shield, Target, ArrowRight, CheckCircle2, Sparkles, ArrowDown } from "lucide-react"
import { AnimatedGridBackground } from "@/components/animated-grid-background"
import { ProductShowcase } from "@/components/product-showcase"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"

const scrollToContact = (e: React.MouseEvent) => {
  e.preventDefault()
  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <AnimatedGridBackground />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-block animate-fade-in-up">
              <span className="text-sm font-mono px-4 py-2 rounded-full border transition-colors duration-200
                text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20
                [data-theme='purple']:text-purple-500 [data-theme='purple']:bg-purple-500/10 [data-theme='purple']:border-purple-500/20
                [data-theme='blue']:text-blue-500 [data-theme='blue']:bg-blue-500/10 [data-theme='blue']:border-blue-500/20">
                AI for Professional Productivity
              </span>
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
AspA! <br /> <span className="transition-colors duration-200
                text-[#D4AF37]
                [data-theme='purple']:text-purple-500
                [data-theme='blue']:text-blue-500">
                AI automation
              </span>
            </h1>
            <p
              className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Builds sector-specific AI solutions that automate repetitive tasks, enabling professionals to focus on
              high-value strategic work.
            </p>
            {/* <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white hover:text-white border-primary/30 cursor-pointer transition-colors"
              >
                Contact
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Productivity Gap</h2>
            <p className="text-lg text-muted-foreground">
              Professionals across industries are overwhelmed by repetitive tasks, inefficient workflows, and data
              overload
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Task Overload",
                description:
                  "High volume of repetitive administrative work consuming valuable time and limiting strategic focus",
              },
              {
                title: "Workflow Inefficiency",
                description: "Outdated processes limiting overall output, speed, and team collaboration effectiveness",
              },
              {
                title: "Data Overload",
                description: "Difficulty managing vast amounts of raw data and translating it into actionable insights",
              },
              {
                title: "Manual Content Generation",
                description:
                  "Time-consuming processes for creating reports, marketing materials, and operational content",
              },
              {
                title: "Regulatory Constraints",
                description: "Complex compliance requirements like GDPR demanding constant attention and expertise",
              },
              {
                title: "Decision Fatigue",
                description: "Too many low-value decisions preventing focus on strategic, high-impact choices",
              },
            ].map((problem, index) => (
              <Card key={`problem-${index}`} className="p-6 text-black hover:text-white text-center transition-all duration-300 relative overflow-hidden group bg-gradient-to-br from-[#D4AF3744] to-[#D4AF3722] backdrop-blur-sm">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <h3 className="font-semibold mb-2 text-lg">{problem.title}</h3>
                  <p className="text-sm leading-relaxed">{problem.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Framework */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Modular Multi-Agent Architecture</h2>
            <p className="text-lg text-muted-foreground">
              Flexible, scalable AI framework designed for cross-sector deployment and deep domain specialization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-white text-black border-gray-200 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37]" />
              <Brain className="h-12 w-12 text-[#D4AF37] mb-4 ml-2" />
              <h3 className="text-xl font-bold mb-3 pl-2">Sector-Specific AI Agents</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 pl-2">
                Each agent focuses on discrete, specialized tasks: communication, data processing, predictive insights,
                workflow management, and compliance checks.
              </p>
              <div className="space-y-2 pl-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                  <span>Task-specific optimization</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                  <span>Independent operation</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                  <span>Intelligent communication</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white text-black border-gray-200 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37]" />
              <Zap className="h-12 w-12 text-[#D4AF37] mb-4 ml-2" />
              <h3 className="text-xl font-bold mb-3 pl-2">Human-Centered Augmentation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 pl-2">
                AI executes repetitive, low-value tasks while humans retain strategic decision-making, creative
                problem-solving, and critical oversight.
              </p>
              <div className="space-y-2 pl-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                  <span>Augmentation not replacement</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                  <span>Higher adoption rates</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                  <span>Ethical technology deployment</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white text-black border-gray-200 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37]" />
              <Shield className="h-12 w-12 text-[#D4AF37] mb-4 ml-2" />
              <h3 className="text-xl font-bold mb-3 pl-2">Flexible Data Integration</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 pl-2">
                Agents consume structured data, unstructured text, IoT feeds, and real-time external data to
                continuously improve predictive performance.
              </p>
              <div className="space-y-2 pl-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                  <span>Multi-source integration</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                  <span>Real-time processing</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                  <span>Continuous learning</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-lg text-muted-foreground">
              Our commitment to collaborative technology and deep vertical scalability sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Augmentation Over Replacement",
                description: "Collaborative model ensuring higher adoption and ethical deployment",
              },
              {
                icon: Target,
                title: "Multi-Sector Scalability",
                description: "Designed to serve new industries efficiently with minimal time-to-market",
              },
              {
                icon: Brain,
                title: "Modular AI Architecture",
                description: "Independent agents communicating intelligently for optimal outcomes",
              },
              {
                icon: Zap,
                title: "Data-Driven Insights",
                description: "Transform raw data into clear, actionable strategic recommendations",
              },
              {
                icon: Shield,
                title: "Unified Brand Trust",
                description: "Every product carries AspA! quality and compliance standards",
              },
            ].map((value) => (
              <Card key={value.title} className="p-6 text-black text-center transition-all duration-300 relative overflow-hidden group bg-gradient-to-br from-[#D4AF3744] to-[#D4AF3722] backdrop-blur-sm">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 text-white">
                  <value.icon className="h-10 w-10 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Product Strategy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="vision">
        {/* Abstract Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/abstract.png)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80 backdrop-blur-sm" />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Multi-Product Strategy</h2>
            <p className="text-lg text-muted-foreground">
              Establishing market leadership in one vertical before efficiently scaling to others
            </p>
          </div>


          <div className="grid md:grid-cols-2 gap-8 mb-12 items-stretch">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-8">
              {/* Card 1 */}
              <Card className="p-6 bg-black/60 shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 h-full relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <h4 className="text-xl font-semibold mb-4 text-[#D4AF37]">
                    Building AI That Actually Works
                  </h4>
                  <p className="leading-relaxed text-gray-200">
                    Our mission is to create practical, reliable AI systems that remove
                    complexity, automate intelligently, and empower teams to focus on what
                    truly matters.
                  </p>
                </div>
              </Card>

              {/* Card 2 */}
              <Card className="p-6 bg-black/60 shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 h-full relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Our Service</h3>
                  <p className="mb-6 leading-relaxed text-gray-200">
                    We're developing a next-generation AI platform focused on intelligent
                    automation, adaptive agents, and real-world problem solving.
                  </p>
                  <Button asChild variant="secondary" size="lg" className="shadow-lg">
                    <Link href="#">
                      Contact us 
                      <ArrowDown className="ml-2 h-5 w-5 text-[#D4AF37]" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>

            {/* RIGHT COLUMN */}
            <Card 
              className="p-8 text-white bg-black/80 hover:bg-black border-gray-900 h-full shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 transform-gpu relative z-10 overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 z-0" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Target Sectors</h3>

              <div className="space-y-4">
                {[
                  { name: "Healthcare", desc: "Clinical admin automation" },
                  { name: "Logistics", desc: "Route optimization & supply chain" },
                  { name: "HR & Education", desc: "Workflow and content automation" },
                  { name: "Facility Management", desc: "Smart buildings & operations" },
                  { name: "Entertainment", desc: "Content workflows & personalization" },
                  { name: "Advertising", desc: "Campaign optimization & analytics" },
                ].map((vertical, i) => (
                  <div key={vertical.name.replace(/\s+/g, '-').toLowerCase()}>
                    <CheckCircle2 className="h-5 w-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">{vertical.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {vertical.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </Card>
          </div>


          <div className="text-center">
            <p className="text-muted-foreground mb-2">Consistent methodology for every vertical:</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-4 py-2 bg-gradient-to-br from-[#D4AF3744] to-[#D4AF3722] rounded-lg border border-primary/20">Domain Discovery</span>
              <span className="text-primary">→</span>
              <span className="px-4 py-2 bg-gradient-to-br from-[#D4AF3744] to-[#D4AF3722] rounded-lg border border-primary/20">AI Agent Design</span>
              <span className="text-primary">→</span>
              <span className="px-4 py-2 bg-gradient-to-br from-[#D4AF3744] to-[#D4AF3722] rounded-lg border border-primary/20">Workflow Automation</span>
              <span className="text-primary">→</span>
              <span className="px-4 py-2 bg-gradient-to-br from-[#D4AF3744] to-[#D4AF3722] rounded-lg border border-primary/20">Human Augmentation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <ProductShowcase id="service"/>

      <ContactForm id="contact" />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B6B3A] via-accent to-accent" />
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-5" />
        <div className="max-w-4xl mx-auto text-center relative z-10 text-primary-foreground">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Interested in AI-powered productivity?</h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">
            Learn how AspA! is developing specialized AI automation solutions for professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 text-white hover:text-white hover:border-primary-foreground cursor-pointer"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
