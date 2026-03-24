import { Wrench, BarChart3, Globe, Mail, Bot } from 'lucide-react'

export default function Screen8() {
  const phases = [
    {
      weeks: 'Weeks 1-4',
      icon: Wrench,
      title: 'Kitchen Configurator',
      tag: 'Priority #1',
      desc: 'Your highest priority, delivered first. 5 cabinet lines with live pricing, countertop toggles, estimate generator. Usable in showroom immediately.',
      accent: 'border-gold/30 bg-gold/5',
      tagColor: 'bg-gold/20 text-gold',
    },
    {
      weeks: 'Weeks 3-6',
      icon: BarChart3,
      title: 'Zoho CRM Rebuild',
      desc: 'Built from scratch on your new account. Your requirements, your workflows, your automation rules. Instant mobile notifications, lead scoring, response templates for your admin team. No new hires needed.',
      accent: 'border-white/5',
      tagColor: 'bg-cyan-accent/20 text-cyan-accent',
    },
    {
      weeks: 'Weeks 5-10',
      icon: Globe,
      title: 'Website & AEO Build',
      desc: 'Custom-coded, no WordPress, no middleware. Optimized for AI search (AEO), not just traditional SEO. Location-specific pages for every target town. B2B section for Kitchen Gallery. Showroom booking tool. The configurator integrates directly into the site.',
      accent: 'border-white/5',
      tagColor: 'bg-cyan-accent/20 text-cyan-accent',
    },
    {
      weeks: 'Weeks 8-12',
      icon: Mail,
      title: 'Lead Scraping Pipeline',
      desc: 'Exclusive homeowner and B2B leads delivered weekly into Zoho. Email outreach to permit holders, new buyers, designers, and contractors across your 13 target towns.',
      accent: 'border-white/5',
      tagColor: 'bg-cyan-accent/20 text-cyan-accent',
    },
    {
      weeks: 'Weeks 10-14',
      icon: Bot,
      title: 'Marketing Automation',
      desc: 'AI agents managing social media content and ad optimization. Content repository, automated posting, performance tracking, improvement suggestions.',
      accent: 'border-white/5',
      tagColor: 'bg-cyan-accent/20 text-cyan-accent',
    },
  ]

  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
        The Full Platform
      </h2>
      <p className="text-body text-[15px] mb-6">Delivered in Phases</p>

      <div className="space-y-4">
        {phases.map((p, i) => (
          <div key={i} className={`bg-card rounded-xl p-4 border ${p.accent}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${p.tagColor}`}>
                {p.weeks}
              </span>
              {p.tag && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold/20 text-gold">
                  {p.tag}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mb-2">
              <p.icon className="w-4 h-4 text-cyan-accent shrink-0" />
              <h3 className="text-sm font-bold">{p.title}</h3>
            </div>
            <p className="text-xs text-muted leading-snug">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
