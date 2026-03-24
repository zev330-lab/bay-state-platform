export default function Screen10() {
  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
        Your Investment Over Time
      </h2>

      {/* Mobile-friendly card table */}
      <div className="space-y-3 mb-6">
        {/* Current Google Ads */}
        <div className="bg-card rounded-xl p-4 border border-white/5">
          <h3 className="text-sm font-semibold mb-3 text-red-400">Current Google Ads</h3>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-[10px] text-muted uppercase mb-1">Year 1</p>
              <p className="text-sm font-bold">$60,000</p>
            </div>
            <div>
              <p className="text-[10px] text-muted uppercase mb-1">Year 2</p>
              <p className="text-sm font-bold">$60,000</p>
            </div>
            <div>
              <p className="text-[10px] text-muted uppercase mb-1">Year 3</p>
              <p className="text-sm font-bold">$60,000</p>
            </div>
          </div>
        </div>

        {/* Option A */}
        <div className="bg-card rounded-xl p-4 border border-white/5">
          <h3 className="text-sm font-semibold mb-3 text-cyan-accent">Option A (Configurator)</h3>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-[10px] text-muted uppercase mb-1">Year 1</p>
              <p className="text-sm font-bold">$30,000</p>
            </div>
            <div>
              <p className="text-[10px] text-muted uppercase mb-1">Year 2</p>
              <p className="text-[11px] font-medium text-muted">$500/mo</p>
              <p className="text-[9px] text-muted/70">optional</p>
            </div>
            <div>
              <p className="text-[10px] text-muted uppercase mb-1">Year 3</p>
              <p className="text-[11px] font-medium text-muted">$500/mo</p>
              <p className="text-[9px] text-muted/70">optional</p>
            </div>
          </div>
        </div>

        {/* Option B */}
        <div className="bg-card rounded-xl p-4 border border-gold/30">
          <h3 className="text-sm font-semibold mb-3 text-gold">Option B (Full Platform)</h3>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-[10px] text-muted uppercase mb-1">Year 1</p>
              <p className="text-sm font-bold">$68,000</p>
            </div>
            <div>
              <p className="text-[10px] text-muted uppercase mb-1">Year 2</p>
              <p className="text-sm font-bold">$48,000</p>
            </div>
            <div>
              <p className="text-[10px] text-muted uppercase mb-1">Year 3</p>
              <p className="text-sm font-bold">$48,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key insights */}
      <div className="bg-card rounded-2xl p-5 border border-white/5 mb-4">
        <p className="text-body text-[15px] leading-relaxed">
          Option B costs slightly more in Year 1 but delivers <span className="text-white font-semibold">5 major systems</span>. By Year 2, you're saving <span className="text-green-400 font-semibold">$12,000/year</span> compared to Google Ads alone — and you own every piece of the infrastructure.
        </p>
        <p className="text-body text-[15px] leading-relaxed mt-3">
          Over 3 years, Option B saves <span className="text-gold font-semibold">$24,000</span> while delivering dramatically more deals through a system that compounds.
        </p>
      </div>

      <div className="bg-white/5 rounded-xl p-4 border border-white/5">
        <p className="text-sm text-muted leading-relaxed">
          If you choose Option A, you still spend $60,000 on Google Ads. The configurator helps you close more of those leads, but you're still renting every lead from Google.
        </p>
      </div>
    </div>
  )
}
