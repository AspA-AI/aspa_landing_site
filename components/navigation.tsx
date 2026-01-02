"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, Moon, Sun } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/aspa2.png" alt="AspA! Logo" width={56} height={56} className="object-contain" />
            {/* <span className="font-bold text-2xl text-[#D4AF37]">AspA!</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/#service" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button asChild>
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/#about" className="block text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <div className="flex items-center justify-between py-2">
              <span className="text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
            <Link href="/#vision" className="block text-muted-foreground hover:text-foreground transition-colors pt-2">
              Vision
            </Link>
            <Button asChild className="w-full">
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
