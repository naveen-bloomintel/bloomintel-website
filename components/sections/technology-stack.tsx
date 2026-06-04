"use client"

import { Bot, Shield, Zap, BarChart3, Brain, Lock } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Roadmapping",
    description:
      "Before anything is built, we spend two weeks mapping your operations end-to-end — identifying which workflows carry the most cost, the most risk, and the most potential. You leave with a prioritized AI roadmap with projected outcomes per initiative.",
    tag: "Discovery to roadmap in 2 weeks",
  },
  {
    icon: Bot,
    title: "Purpose-Built AI Agents",
    description:
      "We design each agent for a specific job — not general-purpose AI, but systems that know exactly what they are supposed to do, what data they can access, and what they must never act on autonomously. Every output goes through your approval queue before it reaches anyone.",
    tag: "Approval-gated by default",
  },
  {
    icon: Zap,
    title: "Intelligent Applications",
    description:
      "Full-stack software with AI embedded at its core — built against your existing systems, databases, and APIs. Deployed in weeks, not quarters. No migration required from your current stack.",
    tag: "Production-ready in under 4 weeks",
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
    <section id="services" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/60 rounded-2xl overflow-hidden border border-zinc-800 mb-16"
        >
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group bg-[#09090b] p-8 hover:bg-zinc-800/40 transition-colors duration-300 reveal ${grid.inView ? "reveal-shown" : "reveal-hidden"}`}
              style={{ transitionDelay: grid.inView ? `${i * 70}ms` : "0ms" }}
            >
              <div className="w-10 h-10 rounded-xl bg-teal-600/10 border border-teal-500/15 flex items-center justify-center mb-6">
                <service.icon className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="text-base font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6">{service.description}</p>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-teal-400 flex-shrink-0" />
                <span className="text-xs text-zinc-600">{service.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Use case grid */}
        <div ref={cases.ref} className={`reveal ${cases.inView ? "reveal-shown" : "reveal-hidden"}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600 mb-6">
            Where our agents operate today
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc, i) => (
              <div
                key={uc.category}
                className={`rounded-xl border border-zinc-800 bg-zinc-900 p-6 reveal ${cases.inView ? "reveal-shown" : "reveal-hidden"}`}
                style={{ transitionDelay: cases.inView ? `${i * 60}ms` : "0ms" }}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-1.5 h-5 rounded-full bg-teal-500/40" />
                  <div className="text-sm font-bold text-white">{uc.category}</div>
                </div>
                <ul className="space-y-2.5">
                  {uc.examples.map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-xs text-zinc-500 leading-relaxed">
                      <div className="w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" />
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
