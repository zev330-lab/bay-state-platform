import { AlertTriangle } from 'lucide-react'

export default function Screen2() {
  const stats = [
    { value: '$80K', label: 'Lost annually if just 2 deals/month walk because proposals took too long', loss: true },
    { value: '78%', label: 'Of jobs go to the first contractor to present a professional proposal' },
    { value: '4-6 quotes', label: 'Number of estimates homeowners request before deciding — you need to be first' },
    { value: '28%', label: 'Sales cycle reduction when companies use configure-price-quote tools' },
  ]

  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
        The Bottleneck That's Costing You Money
      </h2>

      {/* Accusation audit */}
      <div className="bg-white/5 rounded-xl p-4 border border-white/5 mb-5">
        <p className="text-muted text-sm leading-relaxed italic">
          "You might be thinking — I've heard pitches like this before. Big promises, big price tag, uncertain delivery. I've already spent money on tech that didn't work the way I expected. I get it. That skepticism is what makes you a smart business owner. So let me just show you the numbers."
        </p>
      </div>

      <p className="text-body text-[15px] leading-relaxed mb-6">
        You told me the biggest challenge is the time between when a customer walks in with ideas and when you can present something they like within their budget. Here's what that gap is actually costing you:
      </p>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {stats.map((s, i) => (
          <div key={i} className={`bg-card rounded-xl p-4 border ${s.loss ? 'border-red-500/20' : 'border-white/5'}`}>
            <div className={`text-2xl font-bold mb-2 ${s.loss ? 'text-red-400' : 'text-cyan-accent'}`}>{s.value}</div>
            <p className="text-xs text-muted leading-snug">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-2xl p-6 border border-white/5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
          <div>
            <p className="text-body text-[15px] leading-relaxed">
              Every week a proposal takes is a week the customer is shopping competitors. Every meeting spent reviewing cabinet options is a meeting that <span className="text-red-400 font-semibold">could have been a signed contract.</span>
            </p>
            <p className="text-body text-[15px] leading-relaxed mt-4">
              You're spending $60,000 a year driving leads through the door with Google Ads — then losing them in a 3-week proposal cycle. <span className="text-white font-semibold">That's not a marketing problem. It's a conversion problem. And it's solvable.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
