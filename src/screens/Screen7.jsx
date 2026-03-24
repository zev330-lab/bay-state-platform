import { Check, Star } from 'lucide-react'

export default function Screen7() {
  return (
    <div className="max-w-lg mx-auto px-5">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          Two Paths Forward
        </h2>
        <p className="text-body text-[15px]">
          Choose the approach that fits your goals.
        </p>
      </div>

      {/* Option A */}
      <div className="bg-card rounded-2xl p-5 border border-white/10 mb-4">
        <h3 className="text-lg font-bold mb-1">Option A: Kitchen Configurator</h3>
        <p className="text-sm text-muted mb-4">Standalone Build</p>

        <div className="text-3xl font-bold text-white mb-4">$30,000</div>

        <div className="space-y-2 mb-4 text-sm text-body">
          <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-accent" /> 50% deposit to start: $15,000</div>
          <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-accent" /> 50% on delivery: $15,000</div>
          <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-accent" /> Delivery: 3-4 weeks</div>
          <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-accent" /> Complete configurator MVP</div>
          <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-accent" /> 5 cabinet lines, live pricing</div>
          <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-accent" /> Admin panel, mobile responsive</div>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted">Ongoing (optional)</span>
          <span className="text-white">$500/month maintenance</span>
        </div>

        <p className="text-xs text-muted mt-3">
          Market rate for this type of tool: $45,000-$75,000
        </p>
      </div>

      {/* Option B — Recommended */}
      <div className="bg-card rounded-2xl p-5 border-2 border-gold relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3" /> RECOMMENDED
        </div>

        <h3 className="text-lg font-bold mt-2 mb-1">Option B: Full Digital Platform</h3>
        <p className="text-sm text-muted mb-4">Configurator Included FREE</p>

        {/* FREE configurator callout */}
        <div className="bg-gold/10 rounded-xl p-4 border border-gold/20 mb-4">
          <p className="text-sm text-muted mb-1">Kitchen Configurator</p>
          <div className="flex items-baseline gap-3">
            <span className="text-lg text-muted line-through">$30,000</span>
            <span className="text-2xl font-bold text-green-400">$0 — FREE</span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {[
            ['Zoho CRM Rebuild', '$6,000'],
            ['Website & AEO Build', '$14,000'],
            ['Lead Scraping Pipeline', '$7,000'],
            ['Marketing Automation', '$5,000'],
          ].map(([item, price]) => (
            <div key={item} className="flex justify-between items-center text-sm">
              <span className="text-body flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-accent" /> {item}
              </span>
              <span className="text-white font-medium">{price}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-3 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-body">Build Total</span>
            <span className="text-white font-bold">$32,000</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-body">Monthly Retainer (Month 4+)</span>
            <span className="text-white font-bold">$4,000/mo</span>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-3 mb-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted">Year 1 Investment</span>
            <span className="text-gold font-bold">~$68,000</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-muted">Year 2</span>
            <span className="text-gold font-bold">$48,000</span>
          </div>
        </div>

        <p className="text-xs text-muted leading-snug">
          You're currently spending $60,000/year on Google Ads alone and getting 30 deals. Option B gives you an entire digital ecosystem — including a $30,000 configurator tool for free — for a similar annual investment.
        </p>
      </div>
    </div>
  )
}
