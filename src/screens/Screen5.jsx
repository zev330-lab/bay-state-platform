import { ArrowDownToLine, RefreshCw, Check } from 'lucide-react'

export default function Screen5() {
  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
        Lead Pipeline & Customer Nurture
      </h2>

      {/* Inbound */}
      <div className="bg-card rounded-2xl p-5 border border-white/5 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-accent/10 flex items-center justify-center">
            <ArrowDownToLine className="w-5 h-5 text-cyan-accent" />
          </div>
          <div>
            <h3 className="text-base font-bold">Inbound: Lead Capture</h3>
          </div>
        </div>
        <div className="space-y-2">
          {[
            'Every form submission, chat interaction, and phone inquiry flows into Zoho CRM automatically',
            'Google Ads integration tracks which campaigns produce revenue (GCLID attribution you\'ve already designed)',
            'Your Zoho consultant connects the CRM side — we provide the API endpoints',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <Check className="w-3.5 h-3.5 text-cyan-accent shrink-0 mt-0.5" />
              <span className="text-body">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Outbound */}
      <div className="bg-card rounded-2xl p-5 border border-gold/20 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
            <RefreshCw className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h3 className="text-base font-bold">Outbound: The Flywheel</h3>
          </div>
        </div>
        <div className="space-y-2">
          {[
            'Your entire 5-year customer database loaded into a nurture system',
            'Every closed deal automatically enters the nurture program',
            'AI drafts personalized outreach — project anniversaries, check-ins, referral requests',
            'You review and approve each message before it sends',
            'Referrals become your #1 lead source over time',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
              <span className="text-body">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Flywheel callout */}
      <div className="bg-gradient-to-br from-cyan-accent/10 to-transparent rounded-2xl p-5 border border-cyan-accent/20">
        <p className="text-body text-[15px] leading-relaxed">
          Instead of a funnel where leads come in and fall out, this is a <span className="text-white font-semibold">flywheel</span> — every client you've ever served becomes a source of new business.
        </p>
      </div>
    </div>
  )
}
