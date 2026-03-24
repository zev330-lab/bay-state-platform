import { ArrowRight, TrendingDown, TrendingUp } from 'lucide-react'

export default function Screen9() {
  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
        What This Is Costing You Right Now
      </h2>

      {/* Loss framing — primary */}
      <div className="bg-card rounded-2xl p-5 border border-red-500/15 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingDown className="w-5 h-5 text-red-400" />
          <h3 className="text-sm font-bold text-red-400">The Cost of NOT Having This</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-body">Leads per year from Google Ads</span>
            <span className="text-sm font-bold">~120</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-body">Current close rate</span>
            <span className="text-sm font-bold">25%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-body">Deals lost in proposal cycle</span>
            <span className="text-sm font-bold text-red-400">~8-10/year</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-body">Average project value</span>
            <span className="text-sm font-bold">$40,000</span>
          </div>
          <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/15 mt-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-body">Revenue walking out the door annually</span>
              <span className="text-2xl font-bold text-red-400">$320,000+</span>
            </div>
            <p className="text-xs text-muted mt-1">
              Every month without the configurator is another ~$27,000 in deals you could have closed
            </p>
          </div>
        </div>
      </div>

      {/* Gain framing — secondary */}
      <div className="bg-card rounded-2xl p-5 border border-white/5 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-green-400" />
          <h3 className="text-sm font-bold text-green-400">What Changes With the Configurator</h3>
        </div>

        <div className="space-y-3">
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-xs text-muted mb-1">Current</p>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-sm font-semibold">$60,000/yr on ads</span>
              <ArrowRight className="w-3 h-3 text-muted" />
              <span className="text-sm text-body">30 deals</span>
              <ArrowRight className="w-3 h-3 text-muted" />
              <span className="text-sm text-red-400">$0 in owned assets</span>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-3 border border-cyan-accent/10">
            <p className="text-xs text-cyan-accent mb-1">Option A — Configurator</p>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-sm font-semibold">$30,000 once</span>
              <ArrowRight className="w-3 h-3 text-muted" />
              <span className="text-sm text-body">38+ deals</span>
              <ArrowRight className="w-3 h-3 text-muted" />
              <span className="text-sm text-green-400">You own the tool</span>
            </div>
          </div>

          <div className="bg-gold/5 rounded-lg p-3 border border-gold/10">
            <p className="text-xs text-gold mb-1">Option B — Full Platform</p>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-sm font-semibold">~$68,000 Year 1</span>
              <ArrowRight className="w-3 h-3 text-muted" />
              <span className="text-sm text-body">42+ deals</span>
              <ArrowRight className="w-3 h-3 text-muted" />
              <span className="text-sm text-green-400">Complete ecosystem you own</span>
            </div>
          </div>
        </div>
      </div>

      {/* Callout */}
      <div className="bg-gradient-to-br from-gold/10 to-transparent rounded-2xl p-5 border border-gold/20">
        <p className="text-body text-[15px] leading-relaxed">
          <span className="text-white font-semibold">One additional closed project per month pays for the entire engagement.</span> Right now, that deal is walking out of your showroom because the proposal took too long. Everything beyond one deal is pure upside.
        </p>
      </div>
    </div>
  )
}
