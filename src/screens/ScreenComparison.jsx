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
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-red-400" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-red-400">What You Have Today</h3>
            <p className="text-[10px] text-muted">AI Cabinet Chatbot</p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {[
            'Customer asks a question, gets a text answer',
            'No pricing information',
            'No product comparison',
            'No estimate generation',
            'No lead capture',
            'Requires backend server ($50-200/mo hosting)',
            'Customer leaves with nothing in hand',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
              <span className="text-muted">{item}</span>
            </div>
          ))}
        </div>

        <a
          href={CURRENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-white transition-colors"
        >
          See the current tool <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* FUTURE — the configurator */}
      <div className="bg-card rounded-2xl p-5 border-2 border-gold mb-4 relative">
        <div className="absolute -top-3 right-4 bg-gold text-navy text-[10px] font-bold px-2.5 py-0.5 rounded-full">
          WHAT WE BUILD
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
            <Calculator className="w-4 h-4 text-gold" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-gold">Bay State Kitchen Configurator</h3>
            <p className="text-[10px] text-muted">Interactive Sales Tool</p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {[
            'Customer selects layout, cabinets, finishes interactively',
            'Live pricing across all 5 cabinet lines',
            'Side-by-side brand comparison with real costs',
            '90% accurate estimate generated in minutes',
            'PDF proposal they take home',
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

        <a
          href={MOCKUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold/10 text-gold font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-gold/20 transition-colors"
        >
          See the configurator demo <ExternalLink className="w-3.5 h-3.5" />
        </a>
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
