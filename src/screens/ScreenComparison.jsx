import { ExternalLink, X, Check, MessageSquare, Calculator } from 'lucide-react'

const CURRENT_URL = 'https://zev330-lab.github.io/bay-state-current/'
const MOCKUP_URL = 'https://zev330-lab.github.io/bay-state-configurator-demo/'

export default function ScreenComparison() {
  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
        Where You Are vs. Where You're Going
      </h2>
      <p className="text-body text-[15px] leading-relaxed mb-6">
        You've already invested in AI for your showroom — that instinct was right. But there's a massive gap between answering questions and closing deals.
      </p>

      {/* CURRENT — the chat bot */}
      <div className="bg-card rounded-2xl p-5 border border-red-500/20 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-red-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-red-400">What You Have Today</h3>
              <p className="text-[10px] text-muted">AI Cabinet Chatbot</p>
            </div>
          </div>
          <a
            href={CURRENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] text-muted hover:text-white transition-colors"
          >
            Open <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Live embed */}
        <div className="relative rounded-xl overflow-hidden border border-red-500/10 mb-4 bg-black">
          <iframe
            src={CURRENT_URL}
            title="Current Bay State Chatbot"
            className="w-full h-[220px] border-0 pointer-events-none"
            loading="lazy"
          />
          <a
            href={CURRENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-end justify-center pb-3"
          >
            <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-black/90 transition-colors">
              Tap to explore <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        </div>

        <div className="space-y-2">
          {[
            'Customer asks a question, gets a text answer',
            'No pricing — no product comparison',
            'No estimate generation or lead capture',
            'Requires $50-200/mo backend hosting',
            'Customer leaves with nothing in hand',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
              <span className="text-muted">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FUTURE — the configurator */}
      <div className="bg-card rounded-2xl p-5 border-2 border-gold mb-4 relative">
        <div className="absolute -top-3 right-4 bg-gold text-navy text-[10px] font-bold px-2.5 py-0.5 rounded-full">
          WHAT WE BUILD
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
              <Calculator className="w-4 h-4 text-gold" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gold">Bay State Kitchen Configurator</h3>
              <p className="text-[10px] text-muted">Interactive Sales Tool</p>
            </div>
          </div>
          <a
            href={MOCKUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] text-gold hover:text-white transition-colors"
          >
            Open <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Live embed */}
        <div className="relative rounded-xl overflow-hidden border border-gold/20 mb-4 bg-black">
          <iframe
            src={MOCKUP_URL}
            title="Bay State Kitchen Configurator Demo"
            className="w-full h-[220px] border-0 pointer-events-none"
            loading="lazy"
          />
          <a
            href={MOCKUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-end justify-center pb-3"
          >
            <span className="bg-black/70 backdrop-blur-sm text-gold text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-black/90 transition-colors">
              Tap to explore the demo <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        </div>

        <div className="space-y-2">
          {[
            'Interactive layout, cabinet, and finish selection',
            'Live pricing across all 5 cabinet lines',
            'Side-by-side brand comparison with real costs',
            '90% accurate estimate in minutes — PDF included',
            'Every interaction is a captured lead',
            'Works on tablet, phone, and website',
            'Customer leaves ready to sign',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <Check className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
              <span className="text-body">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="bg-gradient-to-br from-cyan-accent/10 to-transparent rounded-2xl p-5 border border-cyan-accent/20">
        <p className="text-body text-[15px] leading-relaxed">
          The chatbot answers questions. The configurator <span className="text-white font-semibold">closes deals</span>. One is a cost center. The other is a revenue engine. That's the difference between where you are and where we're taking you.
        </p>
      </div>
    </div>
  )
}
