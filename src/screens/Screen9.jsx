import { ArrowRight, TrendingUp } from 'lucide-react'

export default function Screen9() {
  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
        The Math Is Simple
      </h2>

      {/* Primary ROI */}
      <div className="bg-card rounded-2xl p-5 border border-white/5 mb-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted">Your average kitchen project</span>
            <span className="text-lg font-bold text-white">$40,000</span>
          </div>
          <div className="border-t border-white/5 pt-3">
            <p className="text-sm text-body leading-relaxed">
              If the configurator improves your close rate by just <span className="text-cyan-accent font-semibold">8%</span> (from 25% to 33%)...
            </p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted">On 100 leads per year</span>
            <span className="text-sm text-muted">8 additional projects</span>
          </div>

          <div className="bg-gradient-to-r from-cyan-accent/10 to-transparent rounded-xl p-4 border border-cyan-accent/20">
            <div className="flex items-center justify-between">
              <span className="text-sm text-body">New Annual Revenue</span>
              <span className="text-2xl font-bold text-cyan-accent">$320,000</span>
            </div>
            <p className="text-xs text-muted mt-1">
              Against a $30,000 tool investment (or $0 with Option B)
            </p>
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className="bg-card rounded-2xl p-5 border border-white/5 mb-4">
        <h3 className="text-sm font-semibold mb-4 text-muted uppercase tracking-wide">Year-over-year comparison</h3>

        <div className="space-y-3">
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-xs text-muted mb-1">Current</p>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-sm font-semibold">$60,000/yr</span>
              <ArrowRight className="w-3 h-3 text-muted" />
              <span className="text-sm text-body">30 deals</span>
              <ArrowRight className="w-3 h-3 text-muted" />
              <span className="text-sm text-red-400">$0 in owned assets</span>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-3 border border-cyan-accent/10">
            <p className="text-xs text-cyan-accent mb-1">Option A — Configurator</p>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-sm font-semibold">$30,000</span>
              <ArrowRight className="w-3 h-3 text-muted" />
              <span className="text-sm text-body">38+ deals</span>
              <ArrowRight className="w-3 h-3 text-muted" />
              <span className="text-sm text-green-400">You own the tool</span>
            </div>
          </div>

          <div className="bg-gold/5 rounded-lg p-3 border border-gold/10">
            <p className="text-xs text-gold mb-1">Option B — Year 1</p>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-sm font-semibold">~$68,000</span>
              <ArrowRight className="w-3 h-3 text-muted" />
              <span className="text-sm text-body">42+ deals</span>
              <ArrowRight className="w-3 h-3 text-muted" />
              <span className="text-sm text-green-400">Complete digital platform</span>
            </div>
          </div>

          <div className="bg-gold/5 rounded-lg p-3 border border-gold/10">
            <p className="text-xs text-gold mb-1">Option B — Year 2</p>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-sm font-semibold">$48,000</span>
              <ArrowRight className="w-3 h-3 text-muted" />
              <span className="text-sm text-body">60+ deals</span>
              <ArrowRight className="w-3 h-3 text-muted" />
              <span className="text-sm text-green-400">$12K savings, compounding</span>
            </div>
          </div>
        </div>
      </div>

      {/* Callout */}
      <div className="bg-gradient-to-br from-gold/10 to-transparent rounded-2xl p-5 border border-gold/20 flex gap-3">
        <TrendingUp className="w-5 h-5 text-gold shrink-0 mt-0.5" />
        <p className="text-body text-sm leading-relaxed">
          <span className="text-white font-semibold">One additional closed project per month pays for the entire engagement.</span> Everything beyond that is pure upside.
        </p>
      </div>
    </div>
  )
}
