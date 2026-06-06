"use client"

import { useInView } from "@/hooks/use-in-view"
import { AnimatedRings } from "@/components/ui/animated-rings"

const differentiators = [
  {
    title: "Custom-built, not configured",
    description:
      "Every system we deliver is engineered from the ground up for your business — your terminology, your edge cases, your workflows. We don't configure templates. We don't resell SaaS with your logo on it.",
  },
  {
    title: "Your data is yours, architecturally",
    description:
      "We do not train models on your data. We do not share your inputs. We do not sell access to your information. This is not a privacy policy clause — it is a structural design decision baked into every system we build.",
  },
  {
    title: "Engineering depth, business fluency",
    description:
      "Our team combines senior AI engineers with people who understand P&L, compliance frameworks, and the real cost of a broken workflow. We speak both languages — and we know which decisions belong to which conversation.",
  },
  {
    title: "A partner, not a vendor",
    description:
      "We stay engaged after launch. We monitor, adjust, and improve continuously. When your business changes — and it will — your AI changes with it. Most of our clients expand their AI footprint every quarter we work together.",
  },
]

const principles = [
  { label: "Approval gate",    text: "No agent output reaches your operations without explicit human approval."         },
  { label: "Full audit",       text: "Every decision and action is logged for compliance reconstruction on demand."     },
  { label: "Data discipline",  text: "Your inputs never train other models. That is architectural, not configurable."   },
  { label: "Drift detection",  text: "We monitor performance and alert you when agent behavior starts to shift."        },
]

export function WhyUs() {
  const header = useInView()
  const left   = useInView()
  const right  = useInView()

  return (
    <section id="about" className="py-16 md:py-24 lg:py-28 px-4 sm:px-6 border-t border-zinc-800 relative overflow-hidden">
      {/* Rings — top-right */}
      <div className="absolute -top-32 -right-32 pointer-events-none opacity-60">
        <AnimatedRings size={480} />
      </div>
      {/* Rings — bottom-left echo */}
      <div className="absolute -bottom-32 -left-32 pointer-events-none opacity-30">
        <AnimatedRings size={340} />
      </div>
      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div
          ref={header.ref}
          className={`max-w-xl mb-10 md:mb-16 reveal ${header.inView ? "reveal-shown" : "reveal-hidden"}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 mb-5">Why BloomIntel</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Built for the work,<br />
            <span className="text-zinc-500 font-normal">not for the demo</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — differentiators */}
          <div
            ref={left.ref}
            className={`space-y-px rounded-2xl overflow-hidden border border-zinc-800 reveal ${left.inView ? "reveal-shown" : "reveal-hidden"}`}
          >
            {differentiators.map((d, i) => (
              <div
                key={d.title}
                className="group relative p-7 bg-[#09090b] hover:bg-zinc-900/80 transition-all duration-300 border-b border-zinc-800 last:border-b-0 overflow-hidden cursor-default"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-teal-500/0 group-hover:bg-teal-500/60 transition-all duration-300" />
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-teal-600/15 border border-teal-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-teal-600/25 group-hover:border-teal-500/50 group-hover:shadow-[0_0_10px_rgba(20,184,166,0.2)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-teal-100 transition-colors duration-200">{d.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-200">{d.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — governance principles */}
          <div
            ref={right.ref}
            className={`reveal ${right.inView ? "reveal-shown" : "reveal-hidden"}`}
            style={{ transitionDelay: "120ms" }}
          >
            <p className="text-sm font-semibold text-white mb-6">
              Our governance principles — the things we will not compromise on, regardless of timeline or scope:
            </p>
            <div className="space-y-4 mb-10">
              {principles.map((p, i) => (
                <div
                  key={p.label}
                  className={`group flex gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-300 cursor-default reveal ${right.inView ? "reveal-shown" : "reveal-hidden"}`}
                  style={{ transitionDelay: right.inView ? `${(i + 1) * 80}ms` : "0ms" }}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.2)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white mb-1 group-hover:text-emerald-100 transition-colors duration-200">{p.label}</div>
                    <div className="text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-200">{p.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl border border-teal-500/15 bg-teal-600/[0.06]">
              <p className="text-sm text-zinc-300 leading-relaxed italic">
                "Most AI tools are built for everyone, which means they are optimized for no one in particular.
                We build AI that understands your specific operations — your terminology, your constraints,
                your edge cases. That specificity is what makes the difference between AI that looks good in a demo
                and AI that runs reliably in production."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-teal-600/20 border border-teal-500/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-teal-300">BI</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">BloomIntel Engineering Team</div>
                  <div className="text-xs text-zinc-500">Ontario, CA</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
