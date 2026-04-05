import { Check, Star } from 'lucide-react'

export default function Screen10() {
  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-center">
        Your Investment
      </h2>
      <p className="text-center text-body text-[15px] mb-6">
        Project Build: <span className="text-white font-bold text-lg">$21,000</span>
      </p>

      {/* Milestone payments */}
      <div className="bg-card rounded-2xl p-5 border border-white/5 mb-6">
        <h3 className="text-sm font-bold text-muted uppercase tracking-wide mb-4">Three Milestone Payments</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-white/5">
            <div>
              <p className="text-sm font-medium">Deposit — Project Kickoff</p>
              <p className="text-xs text-muted">Today</p>
            </div>
            <span className="text-sm font-bold">$7,000</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/5">
            <div>
              <p className="text-sm font-medium">Websites Live</p>
              <p className="text-xs text-muted">Week 2-3</p>
            </div>
            <span className="text-sm font-bold">$7,000</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <div>
              <p className="text-sm font-medium">Full System Operational</p>
              <p className="text-xs text-muted">Week 5</p>
            </div>
            <span className="text-sm font-bold">$7,000</span>
          </div>
        </div>
      </div>

      {/* Option A */}
      <div className="bg-card rounded-2xl p-5 border-2 border-gold relative mb-4">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3" /> RECOMMENDED
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1">Option A — Full Service</h3>
        <p className="text-2xl font-bold text-gold mb-3">$2,000/month</p>
        <p className="text-sm text-muted mb-4 italic">We run everything. You focus on running your business.</p>
        <div className="space-y-2">
          {[
            'We host, manage, and operate the entire platform',
            'All API and infrastructure costs included',
            'Weekly agent review, content approval, and performance monitoring',
            'Up to 4 hours/month of changes, updates, or new pages included',
            'Additional work beyond 4 hours: $250/hour',
            'You still own all the code and data — always',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
              <span className="text-body">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Option B */}
      <div className="bg-card rounded-2xl p-5 border border-white/5 mb-6">
        <h3 className="text-lg font-bold mb-1">Option B — Self-Managed</h3>
        <p className="text-2xl font-bold text-cyan-accent mb-3">$500/month + $250/hour</p>
        <p className="text-sm text-muted mb-4 italic">You run the day-to-day. We're here when you need us.</p>
        <div className="space-y-2">
          {[
            'You manage the platform using your own GitHub/Vercel/Supabase',
            '$500/month covers infrastructure costs and agent hosting',
            'Changes, updates, new features billed at $250/hour',
            '2-hour minimum per request ($500 minimum)',
            'Full access to codebase and documentation',
            'You still own everything — same as Option A',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <Check className="w-3.5 h-3.5 text-cyan-accent shrink-0 mt-0.5" />
              <span className="text-body">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-cyan-accent/10 to-transparent rounded-2xl p-5 border border-cyan-accent/20">
        <p className="text-body text-[15px] leading-relaxed">
          Either way — <span className="text-white font-semibold">you own the code, the data, and the infrastructure. No lock-in.</span>
        </p>
      </div>
    </div>
  )
}
