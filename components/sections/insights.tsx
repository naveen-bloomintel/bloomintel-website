"use client"

import { useState } from "react"
import { ArrowRight, Clock, X, BookOpen, Check } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

type Article = {
  category: string
  categoryColor: string
  title: string
  excerpt: string
  readTime: string
  date: string
  featured?: boolean
  body: string[]
}

const articles: Article[] = [
  {
    category: "Strategy",
    categoryColor: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    title: "The Intelligence Inflection Point: When AI Coordination Costs Less Than Human Coordination",
    excerpt:
      "There is a threshold approaching — and in some industries it has already arrived — where the cost of coordinating work through AI drops below the cost of coordinating the same work through people.",
    readTime: "8 min",
    date: "May 2025",
    featured: true,
    body: [
      "There is a threshold approaching — and in some industries it has already arrived — where the cost of coordinating work through AI drops below the cost of coordinating the same work through people. When that threshold is crossed, the fundamental economic logic of how a company is structured, staffed, and managed begins to shift.",
      "Firms exist, in economic theory, because coordinating work inside an organization is cheaper than contracting it in a market. The boundary of the firm has always been set by where internal coordination becomes too expensive relative to external alternatives. AI rewrites that calculation — not at the margins, but at the foundation.",
      "What this means in practice is that organizations designed around human coordination costs will find those structures increasingly expensive to maintain. Hierarchies built to route decisions upward, middle layers designed to translate strategy into execution, teams assembled to perform work that is fundamentally repetitive in nature — all of these become structurally costly in an environment where AI can perform the same coordination at a fraction of the cost, and at scale.",
      "The enterprises that adapt early will not simply be more efficient. They will operate in a structurally different way. They will run leaner at the coordination layer while expanding their capacity for judgment, strategy, and relationship — the things AI is not yet equipped to replace.",
      "This is not a prediction about a distant future. The inflection is happening now, at different rates across different industries. Financial services, legal, logistics, and healthcare are the earliest sectors to feel it. Technology companies are already restructuring around it. The question for enterprise leaders is not whether this shift is coming. It is whether their organization is designed to move through it deliberately, or to be reorganized by it against their will.",
      "At BloomIntel, we build the AI systems that sit at this inflection — not general-purpose AI, but purpose-built agents that replace specific coordination costs with machine precision. The starting point is always an honest assessment of where your organization's coordination costs are highest, and which of those can be safely handed to a system that operates with human oversight but not human bottlenecks.",
    ],
  },
  {
    category: "Operations",
    categoryColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    title: "Why Enterprise AI Works Better When Your Engineers Are Inside the Building",
    excerpt:
      "The failure mode we see most consistently in enterprise AI is not a technical one. It is an operational gap between the people building the AI and the people who have to use it in production.",
    readTime: "5 min",
    date: "Apr 2025",
    body: [
      "The failure mode we see most consistently in enterprise AI is not a technical one. The model works. The integration is clean. The outputs are accurate in staging. What fails is the gap between the people building the AI and the people who have to use it in production every day.",
      "Workflows that look clean in a requirements document become unpredictable in practice. The edge cases that seem statistically rare are the cases that happen every morning. The exceptions that were deemed out of scope are the ones your team gets escalated to them at 9 AM on a Monday.",
      "Closing this gap requires proximity. Not remote access to a staging environment, not weekly calls, not a shared Slack channel — but engineers embedded in the actual workflow, watching what breaks and why, sitting next to the people who will use the system and understanding what they actually need versus what they described they needed.",
      "This is the model we have built BloomIntel around. When we take on a new client, our engineers spend time in your operations before they write any code. We watch the current workflow. We understand the informal processes that never make it into documentation. We identify the judgment calls that happen dozens of times a day and go unrecorded.",
      "That embedded knowledge is what separates AI that runs reliably in production from AI that runs well in a demo. It is not magic. It is methodology. And it is the most consistent differentiator we have observed between enterprise AI deployments that compound in value over time and those that get quietly abandoned after six months.",
      "The implication for organizations evaluating AI partners is simple: ask where your vendor's engineers will be during implementation. If the answer is 'remote,' ask what their plan is for understanding the operational context their system will need to navigate. The answer will tell you most of what you need to know.",
    ],
  },
  {
    category: "Frameworks",
    categoryColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    title: "The Five Attributes That Separate AI-Native Organizations from AI-Assisted Ones",
    excerpt:
      "After working with enterprise teams across financial services, healthcare, logistics, and technology, a consistent pattern has emerged in how the highest-performing organizations structure their AI programs.",
    readTime: "6 min",
    date: "Apr 2025",
    body: [
      "After working with enterprise teams across financial services, healthcare, logistics, and technology, a consistent pattern has emerged. Organizations that see compounding returns from AI share five structural attributes. Those that stagnate at 'AI-assisted' tend to lack most of them.",
      "The first is on-demand talent leverage. AI-native organizations do not try to hire for every function. They maintain a tight core and extend capacity through networks, specialists, and AI agents that activate on demand. The hiring decision is reserved for judgment and relationship — everything else is a leverage question.",
      "The second is algorithmic decision routing. The highest-performing AI organizations build systems that filter, classify, and route decisions before they ever reach a human. Senior staff spend their time on the decisions that genuinely require their expertise — not on the volume of inputs that happen to arrive in their inbox.",
      "The third is continuous feedback loop design. AI systems that improve are AI systems that have been connected to the signals that indicate success and failure. Organizations that treat AI deployment as a one-time implementation instead of an ongoing learning system consistently underperform those that build feedback architecture into the design from the beginning.",
      "The fourth is infrastructure as leverage, not capital. AI-native organizations do not treat AI infrastructure as a capital project with a fixed endpoint. They treat it as a leveraged asset — something that multiplies the output of the people who use it, and that compounds in value as it accumulates data, context, and refinement.",
      "The fifth is engagement by design, not compliance by default. The organizations where AI adoption sticks are the ones where the system was designed around how people actually work, not around how management wishes they worked. Adoption does not follow mandate. It follows usefulness.",
      "These five attributes are not cultural traits. They are operational choices that can be made deliberately, sequenced strategically, and measured systematically. The assessment we conduct with every new client begins here — identifying which of these attributes are present, which are absent, and which implementation sequence creates the fastest path to compounding value.",
    ],
  },
  {
    category: "Transformation",
    categoryColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    title: "The Real Reason Enterprise AI Initiatives Fail — And It Is Not the Technology",
    excerpt:
      "The most common diagnostic we encounter when a new client comes to us after a failed AI initiative is not a technical problem. The model worked. The integration was clean. What failed was the organization around it.",
    readTime: "5 min",
    date: "Mar 2025",
    body: [
      "The most common diagnostic we encounter when a new client comes to us after a failed AI initiative is not a technical problem. The model worked. The integration was clean. The outputs were accurate. What failed was the organization around it.",
      "Every enterprise has systems — formal and informal — designed to maintain stability. Budget processes that require multi-quarter approval cycles. Vendor procurement frameworks that were designed for software, not intelligence. Middle management layers whose value is currently defined by the coordination work the AI would replace. Compliance teams that have never reviewed an AI system and are applying frameworks designed for human processes.",
      "These systems do not distinguish between destabilizing threats and destabilizing opportunities. AI transformation looks identical to both from the inside. The organizational immune system responds to both in the same way: slow the process, add approval gates, require more evidence, defer the decision.",
      "Understanding this dynamic is the prerequisite to designing around it. The organizations that navigate it successfully tend to share two characteristics. First, they have executive sponsorship that is specific, not general — not 'we support AI' but 'this initiative is owned by this executive who has authority to unblock specific bottlenecks.' Second, they start in a domain where the business case is undeniable and the stakeholder resistance is low, win quickly, and use that win to expand mandate.",
      "The sequencing matters more than the technology. We have seen sophisticated AI systems fail because they were introduced into an organizational context that was not prepared to receive them. We have also seen relatively simple systems generate compounding returns because they were introduced at the right entry point, with the right sponsorship, and with the right change management wrapped around them.",
      "When we assess a new client, the organizational readiness question is as important as the technical opportunity question. The best AI system in the wrong organizational context will underperform a simpler system introduced into the right one. This is not a soft observation. It is the most consistent lesson from every deployment we have been part of.",
    ],
  },
]

function ArticleModal({
  article,
  onClose,
}: {
  article: Article
  onClose: () => void
}) {
  return (
    <div
      className="animate-backdrop-in fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="animate-slide-right relative w-full max-w-2xl max-h-[90vh] bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Modal header */}
        <div className="flex items-start justify-between gap-4 p-6 border-b border-zinc-800 flex-shrink-0">
          <div>
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${article.categoryColor} mb-3`}>
              {article.category}
            </span>
            <h2 className="text-lg font-bold text-white leading-snug">{article.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-colors mt-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-4 px-6 py-3 border-b border-zinc-800 flex-shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-zinc-500">
            <Clock className="w-3 h-3" />
            {article.readTime} read
          </div>
          <span className="text-zinc-600">·</span>
          <span className="text-xs text-zinc-500">{article.date}</span>
          <span className="text-zinc-600">·</span>
          <span className="text-xs text-zinc-500">BloomIntel</span>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-6 py-6 space-y-5">
          {article.body.map((para, i) => (
            <p key={i} className="text-sm text-zinc-300 leading-[1.8] font-normal">
              {para}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-zinc-800 flex-shrink-0 bg-zinc-900">
          <p className="text-xs text-zinc-500">
            © 2025 BloomIntel. Published by the BloomIntel Engineering & Strategy Team.
          </p>
        </div>
      </div>
    </div>
  )
}

function ArticleCard({
  article,
  onClick,
  className = "",
  delay = 0,
  inView = false,
}: {
  article: Article
  onClick: () => void
  className?: string
  delay?: number
  inView?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={`group text-left flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800/70 hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(20,184,166,0.05)] transition-all duration-300 overflow-hidden cursor-pointer reveal ${inView ? "reveal-shown" : "reveal-hidden"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${article.categoryColor}`}>
            {article.featured && <BookOpen className="w-3 h-3" />}
            {article.category}
          </span>
          {article.featured && (
            <span className="text-xs text-zinc-500 font-medium">Featured</span>
          )}
        </div>
        <h3 className={`font-bold text-white leading-snug mb-3 group-hover:text-teal-100 transition-colors duration-200 ${article.featured ? "text-xl md:text-2xl" : "text-base"}`}>
          {article.title}
        </h3>
        {article.featured ? (
          <div className="space-y-3">
            {article.body.slice(0, 2).map((para, i) => (
              <p key={i} className="text-sm text-zinc-400 leading-relaxed line-clamp-4 group-hover:text-zinc-300 transition-colors duration-200">
                {para}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-colors duration-200">
            {article.excerpt}
          </p>
        )}
      </div>
      <div className="px-6 py-4 border-t border-zinc-800 group-hover:border-zinc-700 flex items-center justify-between transition-colors duration-200">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors duration-200">
            <Clock className="w-3 h-3" />
            {article.readTime} read
          </div>
          <span className="text-zinc-600">·</span>
          <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors duration-200">{article.date}</span>
        </div>
        <span className="text-xs text-teal-500 font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1 translate-x-1 group-hover:translate-x-0">
          Read <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </button>
  )
}

function NewsletterCard({ inView }: { inView: boolean }) {
  const [email, setEmail]     = useState("")
  const [status, setStatus]   = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubscribe = async () => {
    if (!email || status === "loading") return
    setStatus("loading")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div
      className={`sm:col-span-1 lg:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 flex flex-col justify-between reveal ${inView ? "reveal-shown" : "reveal-hidden"}`}
      style={{ transitionDelay: "300ms" }}
    >
      <div>
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border border-teal-500/20 bg-teal-500/10 text-teal-400 mb-4">
          Intelligence Brief
        </div>
        <h3 className="text-lg font-bold text-white mb-2">
          Monthly AI strategy, from the field
        </h3>
        <p className="text-sm text-zinc-500 leading-relaxed max-w-md">
          Practical frameworks and field observations from our enterprise AI deployments — no hype, no vendor news, just what we are seeing work and what is not.
        </p>
      </div>

      {status === "success" ? (
        <div className="mt-6 flex items-center gap-3 text-emerald-400">
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-semibold">You're on the list.</div>
            <div className="text-xs text-zinc-500 mt-0.5">We'll be in touch with our next issue.</div>
          </div>
        </div>
      ) : (
        <div className="mt-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle") }}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              placeholder="you@company.com"
              className={`w-full flex-1 h-11 rounded-lg bg-zinc-800 border text-sm text-white placeholder-zinc-600 px-4 outline-none transition-colors ${
                status === "error" ? "border-red-500/60" : "border-zinc-700 focus:border-teal-500/60"
              }`}
            />
            <button
              onClick={handleSubscribe}
              disabled={status === "loading"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg bg-teal-600 hover:bg-teal-500 disabled:opacity-60 text-white text-sm font-semibold transition-colors flex-shrink-0"
            >
              {status === "loading" ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Subscribe <ArrowRight className="w-3.5 h-3.5" /></>
              )}
            </button>
          </div>
          {status === "error" && (
            <p className="text-xs text-red-400 mt-2">Something went wrong. Try again or email us directly.</p>
          )}
          {status === "idle" && (
            <p className="text-xs text-zinc-500 mt-2">No spam. Unsubscribe at any time.</p>
          )}
        </div>
      )}
    </div>
  )
}

export function Insights() {
  const [selected, setSelected] = useState<Article | null>(null)
  const header  = useInView()
  const content = useInView()

  const [featured, ...rest] = articles

  return (
    <>
      <section id="insights" className="py-16 md:py-24 lg:py-28 px-4 sm:px-6 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div
            ref={header.ref}
            className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14 reveal ${header.inView ? "reveal-shown" : "reveal-hidden"}`}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 mb-4">
                Perspectives
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Enterprise AI thinking,
                <br />from the people doing it
              </h2>
            </div>
            <p className="text-sm text-zinc-500 max-w-xs leading-relaxed md:text-right">
              Field observations and strategic frameworks from working inside enterprise AI deployments every day.
            </p>
          </div>

          {/* Cards */}
          <div ref={content.ref}>
            {/* Featured + 2 stacked */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-3">
              <ArticleCard
                article={featured}
                onClick={() => setSelected(featured)}
                className="lg:col-span-3"
                inView={content.inView}
                delay={0}
              />
              <div className="lg:col-span-2 flex flex-col gap-3">
                {rest.slice(0, 2).map((a, i) => (
                  <ArticleCard
                    key={a.title}
                    article={a}
                    onClick={() => setSelected(a)}
                    className="flex-1"
                    inView={content.inView}
                    delay={(i + 1) * 80}
                  />
                ))}
              </div>
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <ArticleCard
                article={rest[2]}
                onClick={() => setSelected(rest[2])}
                inView={content.inView}
                delay={240}
              />

              {/* Newsletter */}
              <NewsletterCard inView={content.inView} />
            </div>
          </div>
        </div>
      </section>

      {/* Article modal */}
      {selected && (
        <ArticleModal article={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
