import { ArrowRight } from 'lucide-react'

export default function Screen6() {
  const replacements = [
    ['WordPress hosting & maintenance', 'Custom site — you own it, no plugin fees'],
    ['SEO & web development retainer', 'SEO/AEO agent + we own the code'],
    ['Google Business Profile management', 'GBP agent — automated'],
    ['Citation & link building (2-4/mo)', 'Backlink agent — automated'],
    ['Content & PR (blog posts + releases)', 'Content agent — 4+ blogs, 1-2 PRs/mo'],
    ['Social media posting & management', 'Social agent — you approve, it posts'],
    ['AI/LLM strategy', 'This IS the AI strategy'],
  ]

  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
        What This Replaces
      </h2>

      <div className="space-y-3 mb-6">
        {replacements.map(([current, replacement], i) => (
          <div key={i} className="bg-card rounded-xl border border-white/5 overflow-hidden">
            <div className="grid grid-cols-2 divide-x divide-white/5">
              <div className="px-3 py-3">
                <p className="text-[10px] text-red-400 font-medium uppercase mb-1">Now</p>
                <p className="text-xs text-muted leading-snug">{current}</p>
              </div>
              <div className="px-3 py-3">
                <p className="text-[10px] text-green-400 font-medium uppercase mb-1">Replaced By</p>
                <p className="text-xs text-body leading-snug">{replacement}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/5 rounded-xl p-4 border border-white/5 mb-4">
        <p className="text-sm text-muted leading-relaxed">
          The only thing that stays: <span className="text-white font-semibold">your monthly photo/video shoots.</span> We distribute what they produce.
        </p>
      </div>

      <div className="bg-gradient-to-br from-gold/10 to-transparent rounded-2xl p-5 border border-gold/20">
        <p className="text-body text-[15px] leading-relaxed">
          Your current marketing vendors cost <span className="text-red-400 font-semibold">$5,000+/month.</span> <span className="text-white font-semibold">This replaces all of them.</span>
        </p>
      </div>
    </div>
  )
}
