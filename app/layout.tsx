import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AspA! - AI Automation for Professional Productivity",
  description:
    "Empowering businesses with AI-driven automation solutions that enhance productivity and streamline operations across multiple industries.",
  metadataBase: new URL("https://aspai.com"),
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/aspa2.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/aspa-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
