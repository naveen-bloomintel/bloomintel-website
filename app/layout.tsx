import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bloomintel.ai"),
  title: {
    default: "BloomIntel — Enterprise AI Partner",
    template: "%s | BloomIntel",
  },
  description:
    "BloomIntel designs, builds, and deploys custom AI systems for enterprise operations. Governed by default, approval-gated, purpose-built for your business.",
  keywords: [
    "enterprise AI",
    "AI agents",
    "AI consulting",
    "business automation",
    "AI strategy",
    "process automation",
    "AI governance",
    "custom AI systems",
    "digital transformation",
  ],
  authors: [{ name: "BloomIntel" }],
  creator: "BloomIntel",
  publisher: "BloomIntel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bloomintel.ai",
    title: "BloomIntel — Enterprise AI Partner",
    description:
      "Custom AI systems for enterprise operations. Built for your business, governed by design.",
    siteName: "BloomIntel",
  },
  robots: { index: true, follow: true },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
