import { Check, Globe, Image, FileText, Smartphone, Link } from 'lucide-react'

export default function Screen3() {
  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
        What We're Building
      </h2>

      {/* Bay State Remodeling */}
      <div className="bg-card rounded-2xl p-5 border border-white/5 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-accent/10 flex items-center justify-center">
            <Globe className="w-5 h-5 text-cyan-accent" />
          </div>
          <div>
            <h3 className="text-base font-bold">Bay State Remodeling Site</h3>
            <p className="text-xs text-muted">Complete WordPress replacement</p>
          </div>
        </div>
        <div className="space-y-2">
          {[
            'Complete custom website replacing WordPress',
            '~120 pages migrated (portfolio, blog, services, about, testimonials)',
            '500+ project photos automatically transferred',
            'Mobile-first, fast, SEO-optimized from day one',
            'Lead capture forms → Zoho CRM via API',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <Check className="w-3.5 h-3.5 text-cyan-accent shrink-0 mt-0.5" />
              <span className="text-body">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bay State Kitchen Gallery */}
      <div className="bg-card rounded-2xl p-5 border border-white/5 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
            <Globe className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h3 className="text-base font-bold">Bay State Kitchen Gallery Site</h3>
            <p className="text-xs text-muted">Complete WordPress replacement</p>
          </div>
        </div>
        <div className="space-y-2">
          {[
            'Complete custom website replacing WordPress',
            '~50 pages migrated (portfolio, services, showroom, FAQs)',
            'Net-new blog section (doesn\'t exist on current site)',
            'Cabinet brand showcases (MasterBrand, Fabuwood, StarMark, Europa, Mid-Continent)',
            'Lead capture forms → Zoho CRM via API',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
              <span className="text-body">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ownership callout */}
      <div className="bg-gradient-to-br from-cyan-accent/10 to-transparent rounded-2xl p-5 border border-cyan-accent/20">
        <p className="text-white font-semibold text-[15px] leading-relaxed">
          Both sites: You own the code. You own the data. No WordPress plugins. No vendor lock-in. Ever.
        </p>
      </div>
    </div>
  )
}
