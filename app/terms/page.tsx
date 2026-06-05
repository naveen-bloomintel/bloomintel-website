import Link from "next/link"

export const metadata = { title: "Terms of Service — BloomIntel" }

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-300">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-teal-400 transition-colors mb-12">
          ← Back to BloomIntel
        </Link>

        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 mb-4">Legal</p>
          <h1 className="text-4xl font-bold text-white mb-3">Terms of Service</h1>
          <p className="text-sm text-zinc-500">Last updated: June 2025</p>
        </div>

        <div className="space-y-10 text-sm leading-[1.9] text-zinc-400">
          <section>
            <h2 className="text-base font-semibold text-white mb-3">1. Services</h2>
            <p>BloomIntel, Inc. ("BloomIntel," "we," "us") provides custom AI system design, development, deployment, and ongoing management services to enterprise clients. The specific scope, deliverables, timelines, and terms of any engagement are defined in a separate Statement of Work or service agreement executed between BloomIntel and the client.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">2. Intellectual Property</h2>
            <p>Unless otherwise specified in a signed agreement, custom systems built for a client are owned by that client upon full payment. BloomIntel retains ownership of its underlying frameworks, tooling, and methodologies developed independently of any client engagement.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">3. Confidentiality</h2>
            <p>Both parties agree to treat non-public information shared during the engagement as confidential. BloomIntel will not disclose client operational data, business processes, or system architecture to any third party without explicit written consent.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">4. Limitation of Liability</h2>
            <p>BloomIntel's liability for any claim arising out of services provided shall not exceed the total fees paid by the client in the three months preceding the claim. BloomIntel is not liable for indirect, incidental, or consequential damages.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">5. Website Use</h2>
            <p>Use of this website is subject to applicable law. Content on this site is provided for informational purposes only and does not constitute a binding offer or guarantee of specific outcomes. All AI system outcomes are dependent on client-specific conditions and data quality.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">6. Governing Law</h2>
            <p>These terms are governed by the laws of the State of California. Any disputes shall be resolved in the courts of San Bernardino County, California.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">7. Contact</h2>
            <p>Questions about these Terms should be directed to <a href="mailto:business@bloomintelai.com" className="text-teal-400 hover:text-teal-300 transition-colors">business@bloomintelai.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
