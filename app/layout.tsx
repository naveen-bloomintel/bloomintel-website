import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bloomintel.ai'),
  title: {
    default: "BloomIntel - AI That Thinks Like You Do",
    template: "%s | BloomIntel"
  },
  description: "Transform your business with AI automation, intelligent workflows, and predictive infrastructure. Deploy AI agents that learn, adapt, and optimize operations 24/7.",
  keywords: [
    "AI automation",
    "business intelligence", 
    "process automation",
    "predictive analytics",
    "AI consulting",
    "machine learning",
    "digital transformation",
    "AI agents",
    "workflow automation",
    "business optimization"
  ],
  authors: [{ name: "BloomIntel Team" }],
  creator: "BloomIntel",
  publisher: "BloomIntel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bloomintel.ai",
    title: "BloomIntel - AI That Thinks Like You Do",
    description: "Transform your business with AI automation, intelligent workflows, and predictive infrastructure. Deploy AI agents that learn, adapt, and optimize operations 24/7.",
    siteName: "BloomIntel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BloomIntel - AI Business Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BloomIntel - AI That Thinks Like You Do",
    description: "Transform your business with AI automation, intelligent workflows, and predictive infrastructure.",
    images: ["/og-image.jpg"],
    creator: "@bloomintel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} antialiased`}>
      <head>
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" async />
      </head>
      <body className="font-sans" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        {children}
      </body>
    </html>
  )
}
