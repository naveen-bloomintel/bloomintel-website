"use client"

import { useState } from "react"
import { ArrowRight, ChevronRight, Bot, Zap, Shield, BarChart3 } from "lucide-react"
import { ConsultationModal } from "@/components/booking/consultation-modal"
import { WireframeGlobe } from "@/components/ui/wireframe-globe"

const activity = [
  { icon: Zap,        label: "AI application deployed",     status: "New features live in prod",  time: "just now" },
  { icon: Bot,        label: "Invoice processing agent",    status: "847 invoices cleared",       time: "2m ago"   },
  { icon: BarChart3,  label: "Revenue intelligence brief",  status: "Delivered to 9 executives",  time: "6m ago"   },
  { icon: Shield,     label: "Governance audit complete",   status: "0 policy violations",        time: "11m ago"  },
]

export function Hero() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-0">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="animate-orb-pulse absolute top-[-10%] left-[15%] w-[900px] h-[600px] rounded-full bg-teal-600/[0.07] blur-[160px]" />
        <div className="animate-orb-pulse absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-sky-500/[0.04] blur-[120px]" style={{ animationDelay: "3s" }} />
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-[#09090b] to-transparent" />
      </div>

      {/* Split layout */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-10 sm:py-14 lg:py-20">

          {/* Left: text + CTAs */}
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 mb-8" style={{ animationDelay: "0.05s" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400">AI-Native Enterprise Solutions</span>
            </div>

            <h1 className="animate-fade-up text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.03] mb-6" style={{ animationDelay: "0.12s" }}>
              <span className="text-white">Your Business,</span>
              <br />
              <span className="text-gradient">Powered by AI</span>
            </h1>

            <p className="animate-fade-up text-lg text-zinc-400 max-w-xl leading-relaxed mb-10" style={{ animationDelay: "0.22s" }}>
              We partner with enterprises to design, build, and operate AI-native systems —
              custom applications, intelligent agents, and data infrastructure that compound
              in value as your business scales. Governed by design, not as an afterthought.
            </p>

            <div className="animate-fade-up flex flex-col sm:flex-row gap-3 mb-14" style={{ animationDelay: "0.32s" }}>
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-teal-600/25 hover:shadow-teal-500/35 hover:scale-[1.02]"
              >
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-1.5 h-12 px-8 rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 text-sm font-medium transition-all duration-200"
              >
                Explore Our Services
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="animate-fade-up grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 sm:gap-8" style={{ animationDelay: "0.42s" }}>
              {[
                { v: "70%",     l: "Cost reduction"    },
                { v: "4×",      l: "Faster to scale"   },
                { v: "300%+",   l: "Avg. ROI"          },
                { v: "< 4 wks", l: "To first deploy"   },
              ].map((m, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-white">{m.v}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{m.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: wireframe globe */}
          <div className="hidden lg:flex items-center justify-center animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-teal-500/[0.05] blur-3xl scale-125 pointer-events-none" />
              <WireframeGlobe size={440} />
            </div>
          </div>

        </div>
      </div>

      {/* Dashboard panel */}
      <div className="animate-fade-up relative w-full max-w-4xl mx-auto px-6 pb-8" style={{ animationDelay: "0.55s" }}>
        <div className="absolute -inset-8 bg-teal-600/[0.03] rounded-3xl blur-3xl pointer-events-none" />

        <div className="relative rounded-2xl border border-zinc-700 bg-zinc-900 overflow-hidden shadow-2xl">
          {/* Chrome bar */}
          <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-zinc-800 gap-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="flex gap-1.5 flex-shrink-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-700/80" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-700/80" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-700/80" />
              </div>
              <span className="text-xs text-zinc-500 truncate">
                BloomIntel<span className="hidden sm:inline"> · Enterprise AI Platform</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-medium whitespace-nowrap">
                <span className="hidden sm:inline">All systems operational</span>
                <span className="sm:hidden">Operational</span>
              </span>
            </div>
          </div>

          {/* Live Activity — full width */}
          <div className="p-6">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500 mb-5">Live Activity</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activity.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 p-3 rounded-xl border transition-colors ${
                    i === 0
                      ? "bg-teal-500/[0.05] border-teal-500/20"
                      : "bg-zinc-800/50 border-zinc-800"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    i === 0
                      ? "bg-teal-600/25 border border-teal-500/30"
                      : "bg-teal-600/15 border border-teal-500/20"
                  }`}>
                    <item.icon className="w-4 h-4 text-teal-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-xs font-medium leading-snug ${i === 0 ? "text-white" : "text-zinc-300"}`}>
                      {item.label}
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">{item.status}</div>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                    {i === 0 && <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />}
                    <span className={`text-[10px] ${i === 0 ? "text-teal-500" : "text-zinc-500"}`}>{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  )
}
