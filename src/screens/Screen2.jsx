import { MessageSquare } from 'lucide-react'

export default function Screen2() {
  const quotes = [
    'Pretty much what you did for yourself with your own website — AI agents and full marketing integration',
    'Websites integrated with Zoho CRM for a full sales pipeline, ROI, and analytics',
    'Lead time: ~2 weeks',
    'I will have the Zoho consultant handle the CRM side and instruct you as the web developer',
  ]

  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
        What You Told Us
      </h2>

      <p className="text-body text-[15px] leading-relaxed mb-6">
        Here's what you said you wanted — in your own words:
      </p>

      <div className="space-y-3 mb-8">
        {quotes.map((q, i) => (
          <div key={i} className="bg-card rounded-xl p-4 border border-white/5 flex gap-3">
            <MessageSquare className="w-4 h-4 text-cyan-accent shrink-0 mt-1" />
            <p className="text-body text-sm leading-relaxed italic">"{q}"</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-cyan-accent/10 to-transparent rounded-2xl p-6 border border-cyan-accent/20">
        <p className="text-white font-semibold text-[15px] leading-relaxed">
          Here's exactly how we deliver on all of this.
        </p>
      </div>
    </div>
  )
}
