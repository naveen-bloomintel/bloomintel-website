"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ConsultationModal } from "@/components/booking/consultation-modal"
import { Toaster } from "@/components/ui/toaster"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Services",  href: "#services"  },
  { label: "Process",   href: "#process"   },
  { label: "About",     href: "#about"     },
  { label: "Insights",  href: "#insights"  },
]

export function Navbar() {
  const [isOpen, setIsOpen]               = useState(false)
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const [scrolled, setScrolled]           = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#09090b]/92 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <Image
                src="/bloomintel-logo.svg"
                alt="BloomIntel"
                width={30}
                height={30}
                className="drop-shadow-[0_0_8px_rgba(45,212,191,0.4)]"
              />
              <span className="text-[15px] font-bold text-white tracking-tight">
                Bloom<span className="text-[#38bdf8]">Intel</span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm text-zinc-400 hover:text-white font-medium transition-colors duration-150 rounded-lg hover:bg-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="h-9 px-5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-teal-600/20 hover:shadow-teal-500/30 hover:scale-[1.02]"
              >
                Book a Demo
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-zinc-400 hover:text-white p-1 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-[#09090b] border-t border-white/[0.06]">
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-sm text-zinc-400 hover:text-white font-medium rounded-lg hover:bg-white/[0.04] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => { setIsConsultationOpen(true); setIsOpen(false) }}
                  className="w-full h-10 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold transition-colors"
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
      <Toaster />
    </>
  )
}
