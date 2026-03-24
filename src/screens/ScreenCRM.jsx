import { Check, X, Database, RefreshCw } from 'lucide-react'

export default function ScreenCRM() {
  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
        About That Zoho Rebuild...
      </h2>

      <p className="text-body text-[15px] leading-relaxed mb-2">
        You told me you're starting Zoho from scratch. I want to ask you something:
      </p>
      <p className="text-white font-semibold text-[17px] leading-relaxed mb-6 italic">
        "If Zoho didn't work the way you needed it to the first time — why would rebuilding on the same platform give you a different result?"
      </p>

      {/* The problem with Zoho */}
      <div className="bg-card rounded-2xl p-5 border border-white/10 mb-4">
        <h3 className="text-sm font-bold text-muted uppercase tracking-wide mb-3">The Zoho Reality</h3>
        <div className="space-y-2 mb-4">
          {[
            '$14-$40/user/month — forever. That adds up.',
            'Your data lives on their servers, by their rules',
            'Configurator integration requires middleware and workarounds',
            'When Zoho changes pricing or drops a feature, you adapt to them',
            'Every customization works within Zoho\'s constraints, not yours',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
              <span className="text-muted">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted">
          It seems like what you really want is a system that works YOUR way — not a system where you have to work Zoho's way.
        </p>
      </div>

      {/* The custom CRM option */}
      <div className="bg-card rounded-2xl p-5 border-2 border-gold relative mb-4">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-[10px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap">
          OPTION B UPGRADE — SAVES YOU MONEY
        </div>

        <div className="flex items-center gap-3 mt-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
            <Database className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h3 className="text-base font-bold">Custom Bay State CRM</h3>
            <p className="text-sm text-muted">Built for your showroom, not Silicon Valley</p>
          </div>
        </div>

        {/* Price comparison */}
        <div className="bg-white/5 rounded-xl p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted">Zoho CRM Rebuild</span>
            <span className="text-sm text-muted line-through">$6,000</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted">+ Zoho subscription (Year 1)</span>
            <span className="text-sm text-muted line-through">~$1,200</span>
          </div>
          <div className="border-t border-white/10 pt-2 mt-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gold">Custom Bay State CRM</span>
              <span className="text-lg font-bold text-green-400">$5,000</span>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-sm text-muted">+ Subscription</span>
              <span className="text-sm font-semibold text-green-400">$0 — forever</span>
            </div>
          </div>
          <div className="bg-green-400/10 rounded-lg p-2 mt-3 text-center">
            <span className="text-sm font-bold text-green-400">You save $2,200+ in Year 1 alone</span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {[
            'Leads from the configurator flow directly into your pipeline — zero integration',
            'Deal pipeline built around YOUR sales process, not a template',
            'Mobile notifications when a new lead comes in — instant response',
            'Estimate history tied to every customer record',
            'You own the data. You own the system. No vendor lock-in.',
            'We can modify anything, anytime — because we built it',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <Check className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
              <span className="text-body">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* The Voss close */}
      <div className="bg-gradient-to-br from-cyan-accent/10 to-transparent rounded-2xl p-5 border border-cyan-accent/20">
        <div className="flex items-start gap-3">
          <RefreshCw className="w-5 h-5 text-cyan-accent shrink-0 mt-0.5" />
          <div>
            <p className="text-body text-[15px] leading-relaxed">
              What happens in two years when Zoho changes their pricing or discontinues a feature you depend on? You start over — again.
            </p>
            <p className="text-body text-[15px] leading-relaxed mt-3">
              With a custom CRM, your system grows with your business. <span className="text-white font-semibold">It costs less to build, nothing to subscribe to, and it's the last CRM decision you'll ever have to make.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
