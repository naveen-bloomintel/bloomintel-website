"use client"

import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    step: "01",
    title: "Discovery Call",
    duration: "45 minutes",
    description:
      "A focused conversation with the person who would build your system — not a sales representative. We assess where AI creates the highest-leverage impact in your operations, and whether we're the right fit to deliver it.",
    detail: "No pitch · No commitment",
  },
  {
    step: "02",
    title: "Design & Build",
    duration: "1–4 weeks",
    description:
      "Our engineers design your agents at schema level — defining the goals, the tools each agent can use, the rules it must follow, and the conditions under which it stops and waits for human judgment. Then we build and integrate directly against your stack.",
    detail: "Dedicated engineering team · Zero migration",
  },
  {
    step: "03",
    title: "Review & Approve",
    duration: "Ongoing",
    description:
      "Every output your agent produces lands in your approval queue — with full context. You approve, edit and approve, or reject. Nothing reaches your customers, your systems, or your team without your sign-off. That gate cannot be bypassed.",
    detail: "Approval-gated · Full audit log",
  },
  {
    step: "04",
    title: "Monitor & Govern",
    duration: "Always-on",
    description:
      "We monitor for performance drift, catch edge cases before they become incidents, and send you weekly summaries of what your agents did and what we adjusted. Quarterly reviews expand capabilities as your operations grow.",
    detail: "Drift detection · Weekly summaries",
  },
]

export function HowItWorks() {
  const header = useInView()
  const grid   = useInView()

  return (
    <section id="process" className="py-28 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div
          ref={header.ref}
          className={`max-w-xl mb-20 reveal ${header.inView ? "reveal-shown" : "reveal-hidden"}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 mb-5">Our Process</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            From first conversation
            <br />to governed production
          </h2>
        </div>

        {/* Steps */}
        <div
          ref={grid.ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, i) => (
            <div
              key={step.step}
              className={`relative reveal ${grid.inView ? "reveal-shown" : "reveal-hidden"}`}
              style={{ transitionDelay: grid.inView ? `${i * 100}ms` : "0ms" }}
            >
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%+0px)] w-full h-px bg-gradient-to-r from-white/[0.08] to-transparent -translate-x-8" />
              )}

              {/* Step number */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl font-bold text-white/[0.05] leading-none select-none">{step.step}</span>
                <div className="h-px flex-1 bg-zinc-800" />
              </div>

              {/* Duration badge */}
              <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-teal-400 bg-teal-600/10 border border-teal-500/15 rounded-full px-2.5 py-1 mb-4">
                {step.duration}
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-5">{step.description}</p>

              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3.5 py-1.5">
                <div className="w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
                <span className="text-xs text-zinc-500">{step.detail}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
