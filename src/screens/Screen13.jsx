import { CreditCard, Phone, Mail } from 'lucide-react'

// Replace with actual Stripe payment link when ready
const STRIPE_LINK = 'https://buy.stripe.com/cNi3cx7Kx3zPds759E9R60c'

export default function Screen13() {
  return (
    <div className="max-w-lg mx-auto px-5">
      <div className="text-center pt-4 mb-8">
        <div className="inline-block mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-accent to-cyan-dark flex items-center justify-center mx-auto">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
          Ready to Start?
        </h2>
        <p className="text-body text-[15px] leading-relaxed">
          Sign the deposit below and we begin this week.
        </p>
      </div>

      {/* Primary CTA */}
      <a
        href={STRIPE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full mb-6"
      >
        <div className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-gold-dark text-navy font-bold py-5 rounded-xl hover:opacity-90 transition-opacity min-h-[60px] text-lg shadow-lg shadow-gold/20">
          <CreditCard className="w-6 h-6" />
          Pay $7,000 Deposit — Start Building
        </div>
      </a>

      {/* After payment note */}
      <div className="bg-card rounded-2xl p-5 border border-white/5 mb-8">
        <p className="text-body text-[15px] leading-relaxed text-center">
          After payment, we'll send you the full intake checklist. <span className="text-white font-semibold">Kickoff meeting scheduled within 48 hours.</span>
        </p>
      </div>

      {/* Contact */}
      <div className="text-center">
        <p className="text-base font-semibold mb-3">Zev Steinmetz</p>
        <div className="flex flex-col items-center gap-2">
          <a
            href="mailto:zev330@gmail.com"
            className="flex items-center gap-2 text-sm text-cyan-accent hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            zev330@gmail.com
          </a>
          <a
            href="tel:6173352019"
            className="flex items-center gap-2 text-sm text-cyan-accent hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            617-335-2019
          </a>
        </div>
      </div>
    </div>
  )
}
