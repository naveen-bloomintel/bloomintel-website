"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { TechnologyStack } from "@/components/sections/technology-stack"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Optimized background image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/bg.jpeg"
          alt="BloomIntel Background"
          fill
          className="object-cover"
          quality={85}
          priority
          sizes="100vw"
        />
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TechnologyStack />
      </main>
      <Footer />
    </div>
  )
}
