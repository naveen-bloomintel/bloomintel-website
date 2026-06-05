"use client"

import { Bot, Shield, Zap, BarChart3, Brain, Lock } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { AnimatedNodes } from "@/components/ui/animated-nodes"

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Roadmapping",
    description:
      "Before anything is built, we spend two weeks mapping your operations end-to-end — identifying which workflows carry the most cost, the most risk, and the most potential. You leave with a prioritized AI roadmap with projected outcomes per initiative.",
    tag: "Discovery to roadmap in 2 weeks",
  },
  {
    icon: Zap,
    title: "Intelligent Applications",
    description:
      "Full-stack software with AI embedded at its core — built against your existing systems, databases, and APIs. Deployed in weeks, not quarters. No migration required from your current stack.",
    tag: "Production-ready in under 4 weeks",
  },
  {
    icon: Bot,
    title: "Purpose-Built AI Agents",
    description:
      "We design each agent for a specific job — not general-purpose AI, but systems that know exactly what they are supposed to do, what data they can access, and what they must never act on autonomously. Every output goes through your approval queue before it reaches anyone.",
    tag: "Approval-gated by default",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Infrastructure",
    description:
      "We build the real-time intelligence layer your business decisions should be running on: automated dashboards, anomaly detection, and AI-generated reporting that reaches the right people without a single manual export.",
    tag: "Automated reporting and alerting",
  },
  {
    icon: Lock,
    title: "Governance & Compliance by Design",
    description:
      "Every agent we deploy comes with a full audit log of every decision and every action — constructed to support compliance reconstruction on demand. Your data never trains other models. That is not a setting. It is architectural.",
    tag: "Full audit trail · Your data stays yours",
  },
  {
    icon: Shield,
    title: "Managed Deployment & Support",
    description:
      "We run the infrastructure. We monitor for drift. We send you weekly summaries of what your agents did, what they flagged, and what we adjusted. You retain full control and approval authority at every step.",
    tag: "Ongoing · Drift detection included",
  },
]

const useCases = [
  { category: "Support",    examples: ["Ticket resolution",      "Auto-escalation",          "Refund issuance"        ] },
  { category: "Sales",      examples: ["Lead qualification",     "Meeting scheduling",       "CRM logging"            ] },
  { category: "Finance",    examples: ["Invoice matching",       "AP automation",            "Spend analysis"         ] },
  { category: "Operations", examples: ["Inventory monitoring",   "PO preparation",           "Vendor communication"   ] },
  { category: "Analytics",  examples: ["Churn prediction",       "Retention analysis",       "KPI reporting"          ] },
  { category: "Compliance", examples: ["Policy monitoring",      "Audit preparation",        "Regulatory flagging"    ] },
]

export function TechnologyStack() {
  const header = useInView()
  const grid   = useInView()
  const cases  = useInView()

  return (
    <section id="services" className="py-16 md:py-24 lg:py-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated network background */}
      <div className="absolute inset-0 pointer-events-none opacity-60 hidden lg:block">
        <AnimatedNodes width={1400} height={900} />
      </div>
      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div
          ref={header.ref}
          className={`max-w-2xl mb-16 reveal ${header.inView ? "reveal-shown" : "reveal-hidden"}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 mb-5">What We Build</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Every capability your enterprise needs to operate on AI
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            We don't configure templates or resell SaaS subscriptions. Every system is custom-engineered
            for how your specific business thinks, decides, and operates.
          </p>
        </div>

        {/* Service cards */}
        <div
          ref={grid.ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/60 rounded-2xl overflow-hidden border border-zinc-800 mb-12 md:mb-16"
        >
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative bg-[#09090b] p-6 lg:p-8 hover:bg-zinc-900 transition-all duration-300 cursor-default overflow-hidden reveal ${grid.inView ? "reveal-shown" : "reveal-hidden"}`}
              style={{ transitionDelay: grid.inView ? `${i * 70}ms` : "0ms" }}
            >
              {/* Teal glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(20,184,166,0.06),transparent_60%)]" />

              {/* Top border accent */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-teal-500/0 to-transparent group-hover:via-teal-500/40 transition-all duration-500" />

              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-teal-600/10 border border-teal-500/15 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-teal-600/20 group-hover:border-teal-500/40 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.15)]">
                  <service.icon className="w-5 h-5 text-teal-400 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-base font-semibold text-white mb-3 transition-colors duration-200 group-hover:text-teal-100">{service.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 transition-colors duration-200 group-hover:text-zinc-300">{service.description}</p>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-teal-400 flex-shrink-0 transition-all duration-200 group-hover:shadow-[0_0_6px_rgba(45,212,191,0.8)]" />
                  <span className="text-xs text-zinc-500 transition-colors duration-200 group-hover:text-teal-400">{service.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Use case grid */}
        <div ref={cases.ref} className={`reveal ${cases.inView ? "reveal-shown" : "reveal-hidden"}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-6">
            Where our agents operate today
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc, i) => (
              <div
                key={uc.category}
                className={`group rounded-xl border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-300 cursor-default reveal ${cases.inView ? "reveal-shown" : "reveal-hidden"}`}
                style={{ transitionDelay: cases.inView ? `${i * 60}ms` : "0ms" }}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-1.5 h-5 rounded-full bg-teal-500/40 transition-all duration-300 group-hover:bg-teal-500/70 group-hover:shadow-[0_0_8px_rgba(20,184,166,0.3)]" />
                  <div className="text-sm font-bold text-white group-hover:text-teal-100 transition-colors duration-200">{uc.category}</div>
                </div>
                <ul className="space-y-2.5">
                  {uc.examples.map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-xs text-zinc-400 leading-relaxed transition-colors duration-200 group-hover:text-zinc-300">
                      <div className="w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0 group-hover:bg-teal-500/60 transition-colors duration-200" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

