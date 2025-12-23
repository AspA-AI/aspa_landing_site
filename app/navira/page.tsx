"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Inbox,
  UserCheck,
  Bot,
  Database,
  FileText,
  Search,
  Users,
  MessageSquare,
  BarChart3,
  Sparkles,
  Target,
  TrendingUp,
  CheckCircle2,
  Megaphone,
  GitBranch,
  Shield,
} from "lucide-react"

export default function NaviraPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-block">
              <span className="text-primary text-sm font-mono">Real Estate AI Automation</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">Navira - AspA!</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
              A cutting-edge, multi-agent AI platform in development to significantly enhance real estate broker
              productivity and introduce a unique, personalized system for prospect discovery.
            </p>
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Currently in Development
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8">
                <a href="#contact">Express Interest</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <a href="#features">Explore Vision</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Broker Productivity */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">AI Broker Productivity Suite</h2>
            <p className="text-lg text-muted-foreground">
              Designed to automate administrative tasks so brokers can focus on high-value client interactions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-card hover:bg-accent/5 transition-colors">
              <Inbox className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">AI Inbox + Lead Assistant</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Centralizes all incoming leads from email, WhatsApp, Messenger, and site forms. Automatically
                classifies, prioritizes, and drafts replies.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Multi-channel integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Auto CRM integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Follow-up reminders</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card hover:bg-accent/5 transition-colors">
              <UserCheck className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">AI Lead Qualification</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Automatically manages initial qualification of buyers and sellers through intelligent questioning and
                analysis.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Automated questioning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Lead value estimation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Qualification briefs</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card hover:bg-accent/5 transition-colors">
              <Bot className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">AI Personal Digital Twin</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Learns your professional tone, style, and niche. Operates autonomously to answer questions and suggest
                properties.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Learns your style</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Autonomous responses</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Smart property matching</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card hover:bg-accent/5 transition-colors">
              <Database className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">AI CRM Automation</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Streamlines routine CRM tasks, keeping client records current and generating actionable activity notes.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Pipeline updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Call/meeting logging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Automated reminders</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card hover:bg-accent/5 transition-colors">
              <FileText className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Document Assist</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Generates marketing materials, property sheets, and contract drafts. Provides legal guidelines by
                country.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Marketing materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Contract drafts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Legal guidelines</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Hunt Agent - Core Differentiator */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Core Differentiator
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">AI Hunt Agent</h2>
            <p className="text-lg text-muted-foreground">
              Personalized Prospect Discovery - Moving beyond inbound leads to actively discovering high-potential
              prospects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-primary text-primary-foreground">
              <Search className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Phase A: Broker Learning</h3>
              <p className="mb-6 leading-relaxed">
                The AI learns from your proven strategies by asking where you find prospects, which websites you read,
                events you attend, and diaspora groups you follow.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Personalizes to your methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Creates custom prospect map</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Learns your target demographics</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Phase B: Active Discovery</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Using your personalized map, the AI searches external channels for individuals showing buying/selling
                intent.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Diaspora & networking events</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Investment seminars & real estate fairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Facebook/Telegram communities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>LinkedIn events & relocation forums</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-card">
            <div className="flex items-start gap-4">
              <TrendingUp className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3">AI Hunt Feedback Loop</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Continuously refines the prospect discovery algorithm by tracking your engagement with suggested
                  events and analyzing conversion outcomes to improve future recommendations.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded">Event tracking</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded">Outcome analysis</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded">Continuous learning</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Collaboration Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Broker Collaboration</h2>
            <p className="text-lg text-muted-foreground">
              Secure, compliant system for profitable broker-to-broker cooperation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-card hover:bg-accent/5 transition-colors">
              <GitBranch className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Matchmaker AI</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Suggests optimal collaboration opportunities based on listing type, buyer type, and region
                compatibility.
              </p>
            </Card>

            <Card className="p-6 bg-card hover:bg-accent/5 transition-colors">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Collaboration Matchmaker</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI suggests optimal collaboration opportunities based on listing type, buyer type, and geographic
                compatibility.
              </p>
            </Card>

            <Card className="p-6 bg-card hover:bg-accent/5 transition-colors">
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Cooperation Preferences</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Define data-sharing rules with Share, Limited Share, or No Share options to control listing visibility.
              </p>
            </Card>

            <Card className="p-6 bg-card hover:bg-accent/5 transition-colors">
              <BarChart3 className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Agency View</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Performance metrics for management without exposing sensitive client or private communication data.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* User-Facing AI */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">User-Facing AI Tools</h2>
            <p className="text-lg text-muted-foreground">
              Enhanced experiences for property buyers and sellers with advanced AI concierge services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card">
              <MessageSquare className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">AI Property Advisor</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Intelligent chatbot handling text and audio. Asks clarifying questions, suggests listings, explains
                pricing/ROI, and provides neighborhood insights.
              </p>
            </Card>

            <Card className="p-6 bg-card">
              <Search className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Smart Search</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Goes beyond filters to analyze commute times, noise levels, lifestyle compatibility, budget feasibility,
                and past preferences.
              </p>
            </Card>

            <Card className="p-6 bg-card">
              <BarChart3 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Comparison Engine</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Objective analysis highlighting trade-offs: price, area, renovation costs, long-term value, and rental
                ROI potential.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Listing Intelligence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="listing-intelligence">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Listing Intelligence</h2>
            <p className="text-lg text-muted-foreground">
              AI tools to optimize property listings for maximum exposure and better sales performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-card hover:bg-accent/5 transition-colors">
              <Sparkles className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Listing Enhancer</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Generates improved descriptions, SEO-optimized content, and platform-specific versions.
              </p>
            </Card>

            <Card className="p-6 bg-card hover:bg-accent/5 transition-colors">
              <TrendingUp className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Pricing Intelligence</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Data-backed recommendations, market trends, and comparable sales analysis.
              </p>
            </Card>

            <Card className="p-6 bg-card hover:bg-accent/5 transition-colors">
              <Target className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Stagnant Analysis</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Diagnoses why listings aren't selling with concrete improvement suggestions.
              </p>
            </Card>

            <Card className="p-6 bg-card hover:bg-accent/5 transition-colors">
              <BarChart3 className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Agency Dashboard</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Performance insights, conversion tracking, and market opportunities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Marketing Automation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Marketing Automation</h2>
            <p className="text-lg text-muted-foreground">
              Generate professional, multi-platform marketing assets instantly
            </p>
          </div>

          <Card className="p-8 bg-card max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <Megaphone className="h-12 w-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-3">AI Marketing Generator</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Creates a full suite of marketing assets for brokers and agencies, replacing manual creation with
                  instant, professional results.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Property marketing images",
                "Posters for offline printing",
                "Social media posts (Instagram, Facebook)",
                "TikTok / Instagram Reels scripts",
                "YouTube walkthrough scripts",
                "Brochure PDFs",
                "Multi-language versions",
                "Direct social media posting",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Multi-Agent Architecture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Multi-Agent Architecture</h2>
            <p className="text-lg text-muted-foreground">
              Built on specialized AI agents working collaboratively for optimal performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Lead Agent", icon: Users },
              { name: "Inbox Agent", icon: Inbox },
              { name: "Qualification Agent", icon: UserCheck },
              { name: "Hunt Agent", icon: Search },
              { name: "Collaboration Agent", icon: GitBranch },
              { name: "Persona Agent", icon: Bot },
              { name: "Analytics Agent", icon: BarChart3 },
              { name: "Listing Agent", icon: FileText },
              { name: "Marketing Agent", icon: Megaphone },
            ].map((agent) => (
              <Card key={agent.name} className="p-4 bg-card text-center hover:bg-accent/5 transition-colors">
                <agent.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold">{agent.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Enhancements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Future Enhancements</h2>
            <p className="text-lg text-muted-foreground">Our roadmap for next-generation real estate AI capabilities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card">
              <h3 className="text-xl font-bold mb-4">IoT Device Integration</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Smart home sensors for suitability recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Smart locks and security devices integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>HVAC and utility data for cost predictions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Environmental sensors for lifestyle matching</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card">
              <h3 className="text-xl font-bold mb-4">Enhanced Data Feeds</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Property history and pricing trends from registries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Neighborhood statistics and demographics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Local events relevant to buyers/sellers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Competitor listing analysis</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-5" />
        <div className="max-w-4xl mx-auto text-center relative z-10 text-primary-foreground">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Ready to Transform Your Real Estate Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">
            See how Navira - AspA! can 3x your productivity and discover high-potential prospects automatically
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="text-lg px-8 shadow-xl">
              <a href="mailto:contact@aspai.com">Express Interest</a>
            </Button>
            <Button
              onClick={() => {
                window.location.href = "/#contact-form"
              }}
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground hover:border-primary-foreground cursor-pointer"
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
