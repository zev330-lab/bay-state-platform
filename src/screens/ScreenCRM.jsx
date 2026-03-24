import { Check, X, Database, RefreshCw } from 'lucide-react'

export default function ScreenCRM() {
  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
        Before We Talk Pricing — The Zoho Question
      </h2>

      <p className="text-body text-[15px] leading-relaxed mb-2">
        You told me you're starting Zoho from scratch. That raises a real question:
      </p>
      <p className="text-white font-semibold text-[15px] leading-relaxed mb-6">
        If Zoho wasn't built for how you work the first time — why rebuild on a platform that already didn't fit?
      </p>

      {/* Zoho reality */}
      <div className="bg-card rounded-2xl p-5 border border-white/10 mb-4">
        <h3 className="text-sm font-bold text-muted uppercase tracking-wide mb-3">Staying on Zoho</h3>
        <div className="space-y-2">
          {[
            '$14-$40/user/month subscription — every month, forever',
            'Configurator needs middleware to connect to Zoho',
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

      {/* Custom CRM */}
      <div className="bg-card rounded-2xl p-5 border-2 border-gold relative mb-4">
        <div className="absolute -top-3 right-4 bg-gold text-navy text-[10px] font-bold px-2.5 py-0.5 rounded-full">
          THE ALTERNATIVE
        </div>

        <div className="flex items-center gap-3 mt-1 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
            <Database className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h3 className="text-base font-bold">Custom Bay State CRM</h3>
            <p className="text-sm text-muted">Built for your showroom. Owned by you.</p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {[
            'Configurator estimates flow directly into your pipeline — zero middleware',
            'Deal board built around YOUR sales process, not a template',
            'Instant mobile notifications when a lead comes in',
            'Full customer history — every estimate, interaction, and note',
            'You own the data and the code — no vendor lock-in, ever',
            'We built it, so we can modify anything — no limitations',
            'Zero monthly subscription — the system is yours',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <Check className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
              <span className="text-body">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* The close */}
      <div className="bg-gradient-to-br from-cyan-accent/10 to-transparent rounded-2xl p-5 border border-cyan-accent/20">
        <div className="flex items-start gap-3">
          <RefreshCw className="w-5 h-5 text-cyan-accent shrink-0 mt-0.5" />
          <p className="text-body text-[15px] leading-relaxed">
            On the next screen you'll see both options side by side. Zoho works — but if you want a system that's <span className="text-white font-semibold">truly yours, fully integrated, and growing with your business</span> — the custom CRM is how we do it.
          </p>
        </div>
      </div>
    </div>
  )
}
