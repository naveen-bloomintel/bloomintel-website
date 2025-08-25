import Link from "next/link"

export function Footer() {
  return (
    <footer className="backdrop-blur-md bg-white/5 border-t border-white/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">BloomIntel</h3>
            <p className="text-white/80 mb-4">We Build AI That Thinks Like You Do</p>
            <div className="space-y-2">
              <p className="text-white/80">business@bloomintelai.com</p>
              <p className="text-white/80">909-206-2727</p>
              <p className="text-white/80">Ontario, CA</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/solutions#ai-automation" className="hover:text-white">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions#it-support" className="hover:text-white">
                  IT Support
                </Link>
              </li>
              <li>
                <Link href="/solutions#analytics" className="hover:text-white">
                  Business Analytics
                </Link>
              </li>
              <li>
                <Link href="/solutions#crm" className="hover:text-white">
                  CRM Systems
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/case-studies" className="hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60">© 2025 BloomIntel. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/60 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
