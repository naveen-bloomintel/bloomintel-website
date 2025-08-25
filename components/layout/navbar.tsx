"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ConsultationModal } from "@/components/booking/consultation-modal"
import { Toaster } from "@/components/ui/toaster"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              BloomIntel
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/solutions"
                className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="/pricing"
                className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={() => setIsConsultationOpen(true)}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
            >
              Book Strategy Session
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-white/80">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/10 border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/solutions" className="text-white block px-3 py-2 text-base font-medium">
              Solutions
            </Link>
            <Link href="/pricing" className="text-white block px-3 py-2 text-base font-medium">
              Pricing
            </Link>
            <Link href="/about" className="text-white block px-3 py-2 text-base font-medium">
              About
            </Link>
            <Link href="/contact" className="text-white block px-3 py-2 text-base font-medium">
              Contact
            </Link>
            <div className="pt-4 pb-3 border-t border-white/20">
              <Button 
                onClick={() => setIsConsultationOpen(true)}
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 w-full"
              >
                Book Strategy Session
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
      <Toaster />
    </nav>
  )
}
