import { ClipboardList, Check } from 'lucide-react'

export default function Screen12() {
  const items = [
    'Domain access (baystateremodeling.com, baystatekitchengallery.com, houseremodeling.ai)',
    'WordPress admin logins (so we can scrape all your content)',
    'Social media account access',
    'Google Business Profile admin access',
    'Google Ads account access',
    'Your SEO vendor\'s full scope report',
    'Customer database export from Zoho (5 years)',
    'Brand assets (logos, team photos, showroom photos)',
  ]

  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
        What We Need From You
      </h2>

      <p className="text-body text-[15px] leading-relaxed mb-6">
        To hit the 5-week timeline, we need a few things from you within the first week:
      </p>

      <div className="bg-card rounded-2xl p-5 border border-white/5 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-accent/10 flex items-center justify-center">
            <ClipboardList className="w-5 h-5 text-cyan-accent" />
          </div>
          <h3 className="text-sm font-bold">Intake Checklist</h3>
        </div>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              <div className="shrink-0 w-5 h-5 rounded border border-white/20 flex items-center justify-center mt-0.5">
                <span className="text-[10px] text-muted font-bold">{i + 1}</span>
              </div>
              <span className="text-body leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-cyan-accent/10 to-transparent rounded-2xl p-5 border border-cyan-accent/20">
        <p className="text-body text-[15px] leading-relaxed">
          We'll send you a detailed checklist — <span className="text-white font-semibold">most items take 5 minutes each.</span>
        </p>
      </div>
    </div>
  )
}
