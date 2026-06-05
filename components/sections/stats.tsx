"use client"

import { useInView } from "@/hooks/use-in-view"

const industries = [
  "Financial Services",
  "Healthcare & Life Sciences",
  "Logistics & Supply Chain",
  "Legal & Compliance",
  "Manufacturing",
  "Technology",
]

export function Stats() {
  const { ref, inView } = useInView()

  return (
    <section className="py-12 px-6 border-y border-zinc-800">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto text-center reveal ${inView ? "reveal-shown" : "reveal-hidden"}`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600 mb-10">
          Serving enterprise teams across
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {industries.map((name, i) => (
            <span
              key={name}
              className="text-sm font-semibold text-zinc-500 hover:text-zinc-200 transition-colors duration-200 cursor-default select-none"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
