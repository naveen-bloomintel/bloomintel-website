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

const Dot = () => (
  <span className="text-teal-500/50 text-[8px] mx-8 select-none flex-shrink-0">◆</span>
)

export function Stats() {
  const { ref, inView } = useInView()

  return (
    <section className="py-12 border-y border-zinc-800 overflow-hidden bg-zinc-950">
      <div
        ref={ref}
        className={`reveal ${inView ? "reveal-shown" : "reveal-hidden"}`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-8 text-center px-6">
          Serving enterprise teams across
        </p>

        <div className="relative">
          {/* Edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none" />

          {/* Scrolling ticker — single track with two copies for seamless loop */}
          <div className="flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee hover:[animation-play-state:paused]">
              {/* Copy 1 */}
              {industries.map((name, i) => (
                <span key={`a-${i}`} className="flex items-center">
                  <span className="text-sm font-semibold text-zinc-500 hover:text-teal-400 transition-colors duration-300 cursor-default select-none whitespace-nowrap px-2">
                    {name}
                  </span>
                  <Dot />
                </span>
              ))}
              {/* Copy 2 — identical, makes the loop seamless */}
              {industries.map((name, i) => (
                <span key={`b-${i}`} className="flex items-center">
                  <span className="text-sm font-semibold text-zinc-500 hover:text-teal-400 transition-colors duration-300 cursor-default select-none whitespace-nowrap px-2">
                    {name}
                  </span>
                  <Dot />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
