import { GlassCard } from "@/components/ui/glass-card"

export function Stats() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by teams across industries</h2>
          <p className="text-xl text-white/80">Avg. 70% reduction in manual tasks</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {["Acme Industries", "Nimbus AI", "Vertex Labs", "Atlas Corp", "Quantum Systems"].map((company) => (
            <GlassCard key={company} className="text-center">
              <div className="h-12 bg-white/20 rounded-lg mb-2 flex items-center justify-center">
                <span className="text-white/80 font-medium">{company}</span>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="text-center">
            <div className="text-4xl font-bold text-white mb-2">70%</div>
            <p className="text-white/80">Reduction in manual tasks</p>
          </GlassCard>
          <GlassCard className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <p className="text-white/80">Uptime with AI-powered maintenance</p>
          </GlassCard>
          <GlassCard className="text-center">
            <div className="text-4xl font-bold text-white mb-2">300%+</div>
            <p className="text-white/80">ROI improvement within 12 months</p>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
