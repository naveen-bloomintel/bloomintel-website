import Image from "next/image"

const links = [
  { label: "Services",  href: "#services"  },
  { label: "Process",   href: "#process"   },
  { label: "About",     href: "#about"     },
  { label: "Insights",  href: "#insights"  },
]

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <Image
                src="/bloomintel-logo.svg"
                alt="BloomIntel"
                width={32}
                height={32}
                className="drop-shadow-[0_0_8px_rgba(45,212,191,0.4)]"
              />
              <span className="text-sm font-bold text-white tracking-tight">
                Bloom<span className="text-[#38bdf8]">Intel</span>
              </span>
            </a>
            <p className="text-xs text-zinc-600 max-w-xs leading-relaxed">
              Custom AI systems for enterprise operations. Built for your business,
              governed by design, operated with your approval at every step.
            </p>
            <div className="flex flex-col gap-1.5">
              <a href="mailto:business@bloomintelai.com" className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors">
                business@bloomintelai.com
              </a>
              <a href="tel:9092062727" className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors">
                909-206-2727
              </a>
              <span className="text-xs text-zinc-800">Ontario, CA</span>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-800">© {new Date().getFullYear()} BloomIntel, Inc. All rights reserved.</p>
          <p className="text-xs text-zinc-800">Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
