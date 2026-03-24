import { Clock, Zap } from 'lucide-react'

export default function Screen11() {
  const timeline = [
    { week: 'Days 1-22', label: 'Configurator MVP delivered and usable in your showroom', highlight: true },
    { week: 'Days 12-30', label: 'Zoho CRM rebuilt and operational', optionB: true },
    { week: 'Days 22-45', label: 'New website live — no WordPress, AI-search optimized', optionB: true },
    { week: 'Days 35-55', label: 'Lead pipeline flowing into Zoho', optionB: true },
    { week: 'Days 45-65', label: 'Marketing automation active', optionB: true },
  ]

  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
        Let's Talk Timeline
      </h2>

      <p className="text-body text-[15px] leading-relaxed mb-6">
        The configurator is the priority. We start building the day the agreement is signed and your pricing data is in hand. Every day without it is revenue walking out the door.
      </p>

      {/* Timeline */}
      <div className="relative pl-8 mb-8">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-gold via-cyan-accent to-cyan-accent/20" />

        {timeline.map((t, i) => (
          <div key={i} className="relative mb-5 last:mb-0">
            <div className={`absolute -left-5 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              t.highlight ? 'border-gold bg-gold/20' : 'border-cyan-accent bg-navy'
            }`}>
              {t.highlight && <Zap className="w-2.5 h-2.5 text-gold" />}
            </div>
            <div className={`rounded-xl p-3 ${
              t.highlight ? 'bg-gold/10 border border-gold/20' : 'bg-card border border-white/5'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  t.highlight ? 'bg-gold/20 text-gold' : 'bg-cyan-accent/10 text-cyan-accent'
                }`}>
                  {t.week}
                </span>
                {t.optionB && (
                  <span className="text-[10px] text-muted">(Option B)</span>
                )}
              </div>
              <p className="text-sm text-body">{t.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Availability */}
      <div className="bg-card rounded-2xl p-5 border border-white/5">
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-cyan-accent shrink-0 mt-0.5" />
          <div>
            <p className="text-body text-[15px] leading-relaxed">
              I take on 2-3 active builds at a time. Bay State is the type of engagement I prioritize — clear vision, owner-involved, real business impact.
            </p>
            <p className="text-body text-[15px] leading-relaxed mt-3">
              My current availability allows me to start immediately. <span className="text-white font-semibold">The sooner we begin, the sooner the configurator is closing deals in your showroom.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
