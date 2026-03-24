import { Clock, Zap } from 'lucide-react'

export default function Screen11() {
  const timeline = [
    { week: 'Week 1-4', label: 'Configurator MVP delivered and usable', highlight: true },
    { week: 'Week 3-6', label: 'Zoho CRM rebuilt and operational', optionB: true },
    { week: 'Week 5-10', label: 'New website live', optionB: true },
    { week: 'Week 8-12', label: 'Lead pipeline flowing', optionB: true },
    { week: 'Week 10-14', label: 'Marketing automation active', optionB: true },
  ]

  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
        Let's Talk Timeline
      </h2>

      <p className="text-body text-[15px] leading-relaxed mb-6">
        The configurator is the priority. We start building the moment the agreement is signed and your pricing data is in hand. Here's the delivery schedule:
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
              My consulting practice operates on a limited-engagement model — I take on a small number of active projects at a time to ensure the quality you've seen in every deliverable so far.
            </p>
            <p className="text-body text-[15px] leading-relaxed mt-3">
              I'm currently in a position to make Bay State a priority engagement, but my availability is narrowing as other projects progress. <span className="text-white font-semibold">The sooner we start, the sooner the configurator is in your showroom closing deals.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
