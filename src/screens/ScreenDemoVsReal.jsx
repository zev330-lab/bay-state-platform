import { Eye, Wrench } from 'lucide-react'

export default function ScreenDemoVsReal() {
  const rows = [
    ['Pricing', 'Sample numbers for demonstration', 'YOUR actual dealer pricing across all 5 cabinet lines'],
    ['Data', 'Static, hardcoded', 'Admin panel where you update prices, add products, toggle lines anytime'],
    ['AI Assistant', '3 canned responses', 'Full AI trained on your complete product catalog and specifications'],
    ['Backend', 'None — frontend only', 'CRM integration, lead capture, customer database, analytics'],
    ['Estimates', 'On-screen total', 'Branded PDF with your logo, terms, itemized breakdown — emailed or printed'],
    ['Platforms', 'Phone browser', 'Tablet in showroom + phone at customer\'s home + embedded on your website'],
  ]

  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
        What You Just Saw vs. What We Build
      </h2>
      <p className="text-body text-[15px] leading-relaxed mb-6">
        The demo proves the concept. 22 business days of development turns it into a revenue machine. Here's the difference:
      </p>

      <div className="space-y-3 mb-6">
        {rows.map(([label, demo, real], i) => (
          <div key={i} className="bg-card rounded-xl border border-white/5 overflow-hidden">
            <div className="px-4 py-2 bg-white/5 border-b border-white/5">
              <span className="text-xs font-semibold text-white uppercase tracking-wide">{label}</span>
            </div>
            <div className="grid grid-cols-2 divide-x divide-white/5">
              <div className="px-3 py-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <Eye className="w-3 h-3 text-muted" />
                  <span className="text-[10px] text-muted font-medium uppercase">Demo</span>
                </div>
                <p className="text-xs text-muted leading-snug">{demo}</p>
              </div>
              <div className="px-3 py-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <Wrench className="w-3 h-3 text-gold" />
                  <span className="text-[10px] text-gold font-medium uppercase">Real Product</span>
                </div>
                <p className="text-xs text-body leading-snug">{real}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-gold/10 to-transparent rounded-2xl p-5 border border-gold/20">
        <p className="text-body text-[15px] leading-relaxed">
          The demo is the blueprint. The real product is the building. What you saw in a few minutes of preview took vision — <span className="text-white font-semibold">what we deliver in 22 business days is the tool that pays for itself.</span>
        </p>
      </div>
    </div>
  )
}
