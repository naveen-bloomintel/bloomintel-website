import Link from "next/link"

export const metadata = { title: "Privacy Policy — BloomIntel" }

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-300">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-teal-400 transition-colors mb-12">
          ← Back to BloomIntel
        </Link>

        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 mb-4">Legal</p>
          <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-sm text-zinc-500">Last updated: June 2025</p>
        </div>

        <div className="space-y-10 text-sm leading-[1.9] text-zinc-400">
          <section>
            <h2 className="text-base font-semibold text-white mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us — such as your name, email address, company name, and any other information you choose to share when you contact us, book a strategy call, or subscribe to our newsletter.</p>
            <p className="mt-3">We do not collect, store, or process any operational data from your business systems. Any AI system we build for your organization is architected so that your data remains within your infrastructure.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to respond to your inquiries, schedule and conduct strategy calls, send our monthly intelligence brief (if you have subscribed), and improve our services. We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">3. Your Data in AI Systems We Build</h2>
            <p>This is a structural commitment, not a policy clause: any AI system we design and deploy for your organization is built so that your inputs do not train any third-party model. Your operational data does not leave your environment unless you explicitly authorize it. This is architectural — it is not a configurable setting that can be changed without your knowledge.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">4. Data Retention</h2>
            <p>We retain contact information for as long as our business relationship is active or as needed to provide services. You may request deletion of your information at any time by contacting us at the address below.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">5. Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">6. Contact</h2>
            <p>If you have any questions about this Privacy Policy or your personal data, please contact us at <a href="mailto:business@bloomintelai.com" className="text-teal-400 hover:text-teal-300 transition-colors">business@bloomintelai.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
