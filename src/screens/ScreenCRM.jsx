import { Check, X, Database, RefreshCw, Plus } from 'lucide-react'

export default function ScreenCRM() {
  return (
    <div className="max-w-lg mx-auto px-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
          <Plus className="w-4 h-4 text-gold" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            One More Option
          </h2>
        </div>
      </div>

      <p className="text-body text-[15px] leading-relaxed mb-2">
        You told me you're starting Zoho from scratch. That tells me something important:
      </p>
      <p className="text-white font-semibold text-[15px] leading-relaxed mb-6">
        Zoho wasn't built for how you work. So here's a question — why rebuild on a platform that already didn't fit?
      </p>

      {/* What Zoho means */}
      <div className="bg-card rounded-2xl p-5 border border-white/10 mb-4">
        <h3 className="text-sm font-bold text-muted uppercase tracking-wide mb-3">What Staying on Zoho Looks Like</h3>
        <div className="space-y-2">
          {[
            '$14-$40/user/month subscription — every month, forever',
            'Configurator needs middleware to talk to Zoho',
            'When Zoho changes pricing or drops a feature, you adapt to them',
            'Your customer data lives on their servers, their terms',
            'Every customization works within Zoho\'s constraints',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
              <span className="text-muted">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* The add-on */}
      <div className="bg-card rounded-2xl p-5 border-2 border-gold relative mb-4">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-[10px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap">
          OPTION B ADD-ON
        </div>

        <div className="flex items-center gap-3 mt-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
            <Database className="w-5 h-5 text-gold" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold">Custom Bay State CRM</h3>
            <p className="text-sm text-muted">Replaces Zoho entirely</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gold">+$5,000</div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {[
            'Configurator estimates flow directly into your deal pipeline — zero middleware',
            'Deal board built around YOUR sales process, not a Zoho template',
            'Mobile push notifications the instant a new lead comes in',
            'Full customer history — every estimate, every interaction, every note',
            'You own the data. You own the code. No vendor lock-in. Ever.',
            'We built it, so we can change anything — anytime, no limitations',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <Check className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
              <span className="text-body">{item}</span>
            </div>
          ))}
        </div>

        {/* ROI callout */}
        <div className="bg-white/5 rounded-xl p-4">
          <h4 className="text-xs font-bold text-muted uppercase tracking-wide mb-2">What the +$5,000 gets you</h4>
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span className="text-body">Zoho subscription eliminated</span>
              <span className="text-green-400 font-medium">-$600-$1,500/yr</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-body">Integration middleware eliminated</span>
              <span className="text-green-400 font-medium">$0 ongoing</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-body">Configurator-to-CRM connection</span>
              <span className="text-green-400 font-medium">Native, instant</span>
            </div>
            <div className="border-t border-white/10 pt-2 mt-2">
              <div className="flex justify-between text-sm">
                <span className="text-body font-semibold">Pays for itself in</span>
                <span className="text-gold font-bold">3-4 years — then it's pure savings</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Updated pricing */}
      <div className="bg-card rounded-xl p-4 border border-white/5 mb-4">
        <h4 className="text-xs font-bold text-muted uppercase tracking-wide mb-3">Option B With Custom CRM</h4>
        <div className="space-y-1.5 text-sm">
          <div className="flex justify-between">
            <span className="text-body">Platform build (as quoted)</span>
            <span className="font-medium">$32,000</span>
          </div>
          <div className="flex justify-between text-gold">
            <span className="font-medium">Custom CRM add-on</span>
            <span className="font-bold">+$5,000</span>
          </div>
          <div className="border-t border-white/10 pt-2 mt-2 flex justify-between">
            <span className="font-bold text-white">New Build Total</span>
            <span className="font-bold text-gold text-lg">$37,000</span>
          </div>
          <div className="flex justify-between text-muted text-xs">
            <span>Monthly retainer unchanged</span>
            <span>$4,000/mo</span>
          </div>
        </div>
      </div>

      {/* The close */}
      <div className="bg-gradient-to-br from-cyan-accent/10 to-transparent rounded-2xl p-5 border border-cyan-accent/20">
        <div className="flex items-start gap-3">
          <RefreshCw className="w-5 h-5 text-cyan-accent shrink-0 mt-0.5" />
          <p className="text-body text-[15px] leading-relaxed">
            This is completely optional — Option B works great with Zoho. But if you want a system that's <span className="text-white font-semibold">truly yours, fully integrated, and costs nothing to maintain</span> — this is how we do it. No pressure, just a better path if you want it.
          </p>
        </div>
      </div>
    </div>
  )
}
