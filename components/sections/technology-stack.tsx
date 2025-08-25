import { GlassCard } from "@/components/ui/glass-card"
import { Bot, Shield, Zap, BarChart3, Brain, Cog } from "lucide-react"

export function TechnologyStack() {
  const technologies = [
    {
      icon: Bot,
      title: "Autonomous Business Agents",
      description: "Deploy AI workers that handle complex workflows, make decisions, and optimize operations 24/7.",
      metric: "Average 70% reduction in manual tasks",
    },
    {
      icon: Shield,
      title: "Predictive Infrastructure",
      description: "Self-monitoring systems that prevent problems, not just fix them.",
      metric: "99.9% uptime with AI-powered maintenance",
    },
    {
      icon: Zap,
      title: "AI-Native Applications",
      description: "Purpose-built AI systems that become smarter with every interaction.",
      metric: "ROI improvement of 300%+ within 12 months",
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Turn your data into actionable insights with our advanced analytics platforms.",
      metric: "Real-time data dashboards",
    },
    {
      icon: Brain,
      title: "Business Intelligence",
      description: "Leverage AI to forecast trends and make smarter, data-driven decisions.",
      metric: "AI-powered forecasting",
    },
    {
      icon: Cog,
      title: "Process Automation",
      description: "Automate repetitive business processes to increase efficiency and reduce errors.",
      metric: "Up to 80% faster processing",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Technology Stack</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Deploy AI agents that don&apos;t just automate—they learn, adapt, and transform how your business operates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <GlassCard key={index} className="h-full">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white/20 rounded-lg mr-4">
                  <tech.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{tech.title}</h3>
              </div>
              <p className="text-white/80 mb-4">{tech.description}</p>
              <div className="text-sm text-blue-300 font-medium">{tech.metric}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
