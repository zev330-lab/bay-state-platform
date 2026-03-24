import { ExternalLink, X, Check, MessageSquare, Calculator, ArrowUp } from 'lucide-react'

const CURRENT_URL = 'https://zev330-lab.github.io/bay-state-current/'
const MOCKUP_URL = 'https://zev330-lab.github.io/bay-state-configurator-demo/'

export default function ScreenComparison() {
  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
        You Already Started Building This
      </h2>
      <p className="text-body text-[15px] leading-relaxed mb-6">
        The AI cabinet chatbot you invested in proves you were already thinking the right way — that technology should be working for you on the showroom floor. That instinct is exactly right. The question is how far to take it.
      </p>

      {/* CURRENT — validate first */}
      <div className="bg-card rounded-2xl p-5 border border-white/10 mb-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-body" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Where You Are</h3>
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

        <div className="relative rounded-xl overflow-hidden border border-white/5 mb-4 bg-black">
          <iframe
            src={CURRENT_URL}
            title="Current Bay State Chatbot"
            className="w-full h-[180px] border-0 pointer-events-none"
            loading="lazy"
          />
          <a
            href={CURRENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-end justify-center pb-3"
          >
            <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
              Tap to explore <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        </div>

        <p className="text-sm text-muted leading-relaxed">
          Answers questions about cabinets. Good starting point — but customers still leave without a number, a comparison, or a reason to commit today.
        </p>
      </div>

      {/* Arrow */}
      <div className="flex justify-center py-1">
        <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
          <ArrowUp className="w-4 h-4 text-gold rotate-180" />
        </div>
      </div>

      {/* FUTURE — the configurator */}
      <div className="bg-card rounded-2xl p-5 border-2 border-gold mt-3 relative">
        <div className="absolute -top-3 right-4 bg-gold text-navy text-[10px] font-bold px-2.5 py-0.5 rounded-full">
          WHERE WE TAKE IT
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
              <Calculator className="w-4 h-4 text-gold" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gold">Bay State Kitchen Configurator</h3>
              <p className="text-[10px] text-muted">Interactive Sales Tool + AI Built In</p>
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
            <span className="bg-black/70 backdrop-blur-sm text-gold text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
              Tap to explore the demo <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        </div>

        <div className="space-y-2">
          {[
            'Everything the chatbot does — built in as a feature',
            'Interactive layout, cabinet, and finish selection',
            'Live pricing across all 5 lines in real time',
            '92% accurate estimate in 30 minutes, not 3 weeks',
            'PDF proposal the customer takes home',
            'Every interaction captured as a lead',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <Check className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
              <span className="text-body">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="bg-gradient-to-br from-cyan-accent/10 to-transparent rounded-2xl p-5 border border-cyan-accent/20 mt-5">
        <p className="text-body text-[15px] leading-relaxed">
          The chatbot was a smart first step. The configurator is the destination. One answers questions — the other <span className="text-white font-semibold">closes deals.</span>
        </p>
      </div>
    </div>
  )
}
