"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { ConsultationModal } from "@/components/booking/consultation-modal"

export function CTABanner() {
  const [isOpen, setIsOpen] = useState(false)
  const { ref, inView }     = useInView()

  return (
    <section className="py-28 px-6 border-t border-zinc-800">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center reveal ${inView ? "reveal-shown" : "reveal-hidden"}`}
      >
        <div className="relative">
          <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
            <div className="animate-orb-pulse w-[600px] h-[300px] rounded-full bg-teal-600/[0.07] blur-[100px]" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 mb-6">Get Started</p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.06] mb-6">
            Ready to see what
            <br />custom AI can do?
          </h2>

          <p className="text-lg text-zinc-500 max-w-xl mx-auto mb-10 leading-relaxed">
            A 45-minute call with the engineer who would build your system.
            We'll map where AI has the highest impact in your operations — concrete, specific,
            and without obligation.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-teal-600/25 hover:shadow-teal-500/35 hover:scale-[1.02]"
            >
              Book Your Strategy Call
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="mailto:business@bloomintelai.com"
              className="inline-flex items-center justify-center h-12 px-8 rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800/70 text-sm font-medium transition-all duration-200"
            >
              Email Us Directly
            </a>
          </div>

          <p className="text-xs text-zinc-700">
            No commitment · Response within 4 business hours · Confidential by default
          </p>
        </div>
      </div>

      <ConsultationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  )
}
