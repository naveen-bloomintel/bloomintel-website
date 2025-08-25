"use client"

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { ArrowRight, Play } from "lucide-react"
import { Suspense, useState, lazy } from "react"
import { ConsultationModal } from "@/components/booking/consultation-modal"

// Lazy load the 3D model component
const ModelViewer = lazy(() => import("@/components/ui/model-viewer"))

export function Hero() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Faded minimalistic text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-light leading-tight">
                <span className="text-white/90 block">AI for</span>
                <span className="text-white/70 block">your</span>
                <span className="text-white/50 block">business</span>
              </h1>
              <p className="text-lg text-white/60 max-w-md leading-relaxed font-light">
                Build AI that thinks like you do — automate judgment, decisions, and operations 24/7.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => setIsConsultationOpen(true)}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
              >
                Book Strategy Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="ghost" className="text-white/70 hover:bg-white/10 hover:text-white">
                <Play className="mr-2 h-4 w-4" />
                See Demo
              </Button>
            </div>
          </div>

          {/* Right side - 3D Object */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10"></div>
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center text-white/50 animate-pulse">
                    <div className="w-20 h-20 border-4 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
                  </div>
                }
              >
                <ModelViewer />
              </Suspense>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <GlassCard className="backdrop-blur-md bg-white/5 border-white/10">
            <h3 className="text-xl font-light text-white/90 mb-2">AI Automation</h3>
            <p className="text-white/60 font-light">Streamline workflows with intelligent automation</p>
          </GlassCard>
          <GlassCard className="backdrop-blur-md bg-white/5 border-white/10">
            <h3 className="text-xl font-light text-white/90 mb-2">IT Support</h3>
            <p className="text-white/60 font-light">24/7 technical support and infrastructure management</p>
          </GlassCard>
          <GlassCard className="backdrop-blur-md bg-white/5 border-white/10">
            <h3 className="text-xl font-light text-white/90 mb-2">Custom Solutions</h3>
            <p className="text-white/60 font-light">Tailored software built for your specific needs</p>
          </GlassCard>
        </div>
      </div>
      
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </section>
  )
}
