import { Zap, Check } from 'lucide-react'

export default function Screen9() {
  const weeks = [
    {
      week: 'Week 1',
      title: 'Kickoff',
      highlight: false,
      items: [
        'Kickoff meeting — collect all assets and access',
        'Scaffold both websites',
        'Automated content migration (scrape all pages, photos, blog posts from WordPress)',
        'Set up your GitHub, Vercel, and Supabase accounts',
      ],
    },
    {
      week: 'Week 2-3',
      title: 'Websites Live',
      highlight: true,
      milestone: 'Payment milestone: Sites live',
      items: [
        'Both sites built, tested, responsive',
        'Lead capture forms working → Zoho CRM',
        'Portfolio, blog, testimonials, services — everything migrated',
        'DNS cutover to new sites',
      ],
    },
    {
      week: 'Week 4',
      title: 'Agents Online',
      highlight: false,
      items: [
        'All 6 AI agents built and calibrated',
        'Social media APIs connected',
        'Google Business Profile API connected',
        'Lead scraping pipeline operational',
        'Nurture flywheel system built and loaded with your customer database',
      ],
    },
    {
      week: 'Week 5',
      title: 'Polish & Handoff',
      highlight: true,
      milestone: 'Payment milestone: System operational',
      items: [
        'Full QA and testing',
        'Performance optimization',
        'Handoff meeting — walk through your dashboard, agent controls, approval workflows',
      ],
    },
  ]

  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
        5 Weeks to Live
      </h2>
      <p className="text-body text-[15px] leading-relaxed mb-6">
        From signing to fully operational.
      </p>

      <div className="relative pl-8 mb-8">
        <div className="absolute left-3 top-3 bottom-3 w-px bg-gradient-to-b from-cyan-accent via-cyan-accent/50 to-cyan-accent/10" />

        {weeks.map((w, i) => (
          <div key={i} className="relative mb-6 last:mb-0">
            <div className={`absolute -left-5 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              w.highlight ? 'border-gold bg-gold/20' : 'border-cyan-accent bg-navy'
            }`}>
              {w.highlight ? (
                <Zap className="w-3 h-3 text-gold" />
              ) : (
                <span className="text-[10px] font-bold text-cyan-accent">{i + 1}</span>
              )}
            </div>
            <div className={`rounded-xl p-4 ${
              w.highlight ? 'bg-gold/10 border border-gold/20' : 'bg-card border border-white/5'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  w.highlight ? 'bg-gold/20 text-gold' : 'bg-cyan-accent/10 text-cyan-accent'
                }`}>
                  {w.week}
                </span>
                <h3 className="text-sm font-bold">{w.title}</h3>
              </div>
              <div className="space-y-1.5">
                {w.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2 text-xs">
                    <Check className="w-3 h-3 text-muted shrink-0 mt-0.5" />
                    <span className="text-muted leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              {w.milestone && (
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="text-xs font-semibold text-green-400 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    {w.milestone}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-cyan-accent/10 to-transparent rounded-2xl p-5 border border-cyan-accent/20">
        <p className="text-white font-semibold text-[15px] leading-relaxed">
          From signing to fully operational: 5 weeks.
        </p>
      </div>
    </div>
  )
}
