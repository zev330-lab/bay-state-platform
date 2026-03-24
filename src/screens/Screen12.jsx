import { CreditCard, FileText } from 'lucide-react'

export default function Screen12() {
  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
        How It Works
      </h2>

      {/* Option A */}
      <div className="bg-card rounded-2xl p-5 border border-white/5 mb-4">
        <h3 className="text-sm font-bold text-cyan-accent mb-4 uppercase tracking-wide">
          Option A Payment Schedule
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-white/5">
            <div>
              <p className="text-sm font-medium">Contract signed</p>
            </div>
            <span className="text-sm font-bold">$15,000</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/5">
            <div>
              <p className="text-sm font-medium">Configurator delivered</p>
              <p className="text-xs text-muted">Week 3-4</p>
            </div>
            <span className="text-sm font-bold">$15,000</span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm font-bold">Total</span>
            <span className="text-lg font-bold text-cyan-accent">$30,000</span>
          </div>
        </div>
      </div>

      {/* Option B */}
      <div className="bg-card rounded-2xl p-5 border-2 border-gold mb-6">
        <h3 className="text-sm font-bold text-gold mb-4 uppercase tracking-wide">
          Option B Payment Schedule
        </h3>
        <div className="space-y-3">
          {[
            { when: 'Contract signed', amount: '$12,000', what: 'Configurator + Zoho build begins immediately' },
            { when: 'Week 3-4', amount: '$8,000', what: 'Configurator delivered + Zoho complete' },
            { when: 'Week 5', amount: '$7,000', what: 'Website build begins' },
            { when: 'Week 9-10', amount: '$5,000', what: 'Website live + lead pipeline + marketing automation' },
            { when: 'Month 4+', amount: '$4,000/mo', what: 'Full platform retainer begins' },
          ].map((row, i) => (
            <div key={i} className="py-2 border-b border-white/5 last:border-0">
              <div className="flex justify-between items-start">
                <div className="flex-1 mr-3">
                  <p className="text-sm font-medium">{row.when}</p>
                  <p className="text-xs text-muted mt-0.5">{row.what}</p>
                </div>
                <span className="text-sm font-bold shrink-0">{row.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Onboarding note */}
      <div className="bg-gradient-to-br from-cyan-accent/10 to-transparent rounded-2xl p-5 border border-cyan-accent/20 flex gap-3">
        <FileText className="w-5 h-5 text-cyan-accent shrink-0 mt-0.5" />
        <p className="text-body text-sm leading-relaxed">
          Once you sign, we'll send a brief onboarding document with exactly what we need from you to get started — primarily your dealer price sheets for the 5 cabinet lines and your countertop pricing from First Class Marble. <span className="text-white font-semibold">That's it. We handle everything else.</span>
        </p>
      </div>
    </div>
  )
}
