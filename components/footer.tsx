"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"

const scrollToContact = (e: React.MouseEvent) => {
  e.preventDefault()
  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <span className="">
                  <Link href="/" className="flex items-center gap-3">
                    <Image src="/aspa2.png" alt="AspA! Logo" width={56} height={56} className="object-contain" />
                 </Link>
                </span>
              </div>
              <span className="font-bold text-xl">AspA!</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Augmenting human productivity through specialized AI automation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">Contract Analyser</span>
              </li>
              <li>
                <span className="text-muted-foreground">Assistant Chatbots</span>
              </li>
              <li>
                <span className="text-muted-foreground">Research & Report Gen</span>
              </li>
              <li>
                <span className="text-muted-foreground">Prompt Generator</span>
              </li>
              <li>
                <span className="text-muted-foreground">Mock Interview Gen</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <button
                    onClick={scrollToContact}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                 </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">Privacy Policy</span>
              </li>
              <li>
                <span className="text-muted-foreground">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 AspA! All rights reserved. Building the future of human-AI collaboration. | aspai.com</p>
        </div>
      </div>
    </footer>
  )
}
