import { Wrench, Globe, BarChart3, Mail, Bot } from 'lucide-react'

export default function Screen6() {
  const components = [
    { icon: Wrench, label: 'Kitchen Configurator', desc: 'Your proprietary sales acceleration tool', accent: 'text-gold' },
    { icon: Globe, label: 'Website & AEO', desc: 'Custom-coded, AI-search optimized, no WordPress', accent: 'text-cyan-accent' },
    { icon: BarChart3, label: 'Zoho CRM Rebuild', desc: 'Built from scratch to your exact requirements', accent: 'text-cyan-accent' },
    { icon: Mail, label: 'Lead Scraping Pipeline', desc: 'Exclusive leads delivered weekly into Zoho', accent: 'text-cyan-accent' },
    { icon: Bot, label: 'Marketing Automation', desc: 'AI agents managing social media and ad optimization', accent: 'text-cyan-accent' },
  ]

  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
        The Complete Digital Platform
      </h2>

      <p className="text-body text-[15px] leading-relaxed mb-3">
        The configurator is the crown jewel. But to truly transform how Bay State operates, it needs to live inside a complete digital ecosystem — a new website built for AI search, a CRM that actually works the way you want it to, a lead pipeline feeding your sales team, and marketing that runs itself.
      </p>
      <p className="text-body text-[15px] leading-relaxed mb-6">
        You told me you're done with WordPress. You're starting your Zoho from scratch. You want AI handling your social media and ad optimization. Here's the plan to make all of that happen — with the configurator as the centerpiece.
      </p>

      <div className="space-y-3">
        {components.map((c, i) => (
          <div key={i} className={`bg-card rounded-xl p-4 border ${i === 0 ? 'border-gold/30 bg-gradient-to-r from-gold/5 to-transparent' : 'border-white/5'} flex gap-4`}>
            <div className={`shrink-0 w-10 h-10 rounded-lg ${i === 0 ? 'bg-gold/10' : 'bg-white/5'} flex items-center justify-center`}>
              <c.icon className={`w-5 h-5 ${c.accent}`} />
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-0.5">{c.label}</h3>
              <p className="text-xs text-muted">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
