import { useState } from 'react'
import { Check, Star, Database, BarChart3 } from 'lucide-react'

export default function Screen7() {
  const [customCRM, setCustomCRM] = useState(false)

  const crmLabel = customCRM ? 'Custom Bay State CRM' : 'Zoho CRM Rebuild'
  const crmPrice = customCRM ? 10000 : 6000
  const buildTotal = 14000 + 7000 + 5000 + crmPrice // website + leads + marketing + CRM
  const year1 = buildTotal + (4000 * 9) // 9 months retainer
  const year2 = 4000 * 12

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
          <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-accent" /> Delivery: 22 business days</div>
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

        {/* CRM Toggle */}
        <div className="bg-white/5 rounded-xl p-3 border border-white/10 mb-4">
          <p className="text-[10px] text-muted uppercase tracking-wide font-bold mb-2">Choose your CRM</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setCustomCRM(false)}
              className={`flex items-center gap-2 rounded-lg p-3 border-2 transition-all text-left ${
                !customCRM
                  ? 'border-cyan-accent bg-cyan-accent/5'
                  : 'border-white/10 bg-transparent'
              }`}
            >
              <BarChart3 className={`w-4 h-4 shrink-0 ${!customCRM ? 'text-cyan-accent' : 'text-muted'}`} />
              <div>
                <p className="text-xs font-semibold">Zoho Rebuild</p>
                <p className="text-sm font-bold">$6,000</p>
              </div>
            </button>
            <button
              onClick={() => setCustomCRM(true)}
              className={`flex items-center gap-2 rounded-lg p-3 border-2 transition-all text-left ${
                customCRM
                  ? 'border-gold bg-gold/5'
                  : 'border-white/10 bg-transparent'
              }`}
            >
              <Database className={`w-4 h-4 shrink-0 ${customCRM ? 'text-gold' : 'text-muted'}`} />
              <div>
                <p className="text-xs font-semibold">Custom CRM</p>
                <p className="text-sm font-bold">$10,000</p>
              </div>
            </button>
          </div>
          {customCRM && (
            <p className="text-[10px] text-gold mt-2 leading-snug">
              No Zoho subscription. Direct configurator integration. You own everything.
            </p>
          )}
        </div>

        {/* Line items */}
        <div className="space-y-2 mb-4">
          {[
            [crmLabel, `$${crmPrice.toLocaleString()}`],
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
            <span className="text-white font-bold transition-all">${buildTotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-body">Monthly Retainer (Month 4+)</span>
            <span className="text-white font-bold">$4,000/mo</span>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-3 mb-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted">Year 1 Investment</span>
            <span className="text-gold font-bold transition-all">~${year1.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-muted">Year 2</span>
            <span className="text-gold font-bold">${year2.toLocaleString()}</span>
          </div>
        </div>

        <p className="text-xs text-muted leading-snug">
          You're currently spending $60,000/year on Google Ads alone and getting 30 deals. Option B gives you an entire digital ecosystem — including a $30,000 configurator tool for free — for a similar annual investment.
        </p>
      </div>
    </div>
  )
}
