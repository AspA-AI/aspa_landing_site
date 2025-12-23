"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, Mail, User, MessageSquare, Sparkles } from "lucide-react"

interface ContactFormProps {
  id?: string;
}

export function ContactForm({ id }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields')
      return
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address')
      return
    }
    
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      
      // Log success to console for debugging
      console.log('Message sent successfully:', data)
      
    } catch (error: unknown) {
      console.error('Error sending message:', error)
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      alert(errorMessage)
    } finally {
      setIsSubmitting(false)
      
      // Reset submission status after 5 seconds
      const resetTimer = setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
      
      // Clean up the timeout if the component unmounts
      return () => clearTimeout(resetTimer)
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id={id || 'contact'}>
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl opacity-20" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full border border-[#D4AF37]/20 mb-6">
            <Sparkles className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-sm font-mono text-[#D4AF37]">Let's Connect</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Get in Touch</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Interested in AspA! AI automation? Drop us a message and we'll get back to you soon.
          </p>
        </div>

        <Card className="p-8 sm:p-12 bg-white text-black border-gray-200 shadow-2xl">
          {isSubmitted ? (
            <div className="text-center py-12 animate-fade-in-up">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
                  <User className="h-4 w-4 text-[#D4AF37]" />
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all text-black"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                  <Mail className="h-4 w-4 text-[#D4AF37]" />
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all text-black"
                  placeholder="your email address"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium">
                  <MessageSquare className="h-4 w-4 text-[#D4AF37]" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="text-white w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Tell us about your interest in AspA! AI automation..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-100 disabled:bg-[#D4AF37]/70"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Or reach us directly at{" "}
            <a href="mailto:contact@aspai.com" className="text-[#D4AF37] hover:underline font-medium">
              contact@aspai.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
