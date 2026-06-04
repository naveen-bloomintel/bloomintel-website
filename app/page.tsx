"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { TechnologyStack } from "@/components/sections/technology-stack"
import { HowItWorks } from "@/components/sections/how-it-works"
import { WhyUs } from "@/components/sections/why-us"
import { Insights } from "@/components/sections/insights"
import { CTABanner } from "@/components/sections/cta-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#09090b]">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TechnologyStack />
        <HowItWorks />
        <WhyUs />
        <Insights />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
