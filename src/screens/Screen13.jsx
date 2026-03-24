import { useState } from 'react'
import { Star, Send, CheckCircle, Database, BarChart3 } from 'lucide-react'

const FORMSPREE = 'https://formspree.io/f/xvzbbrpb'
const MAILTO_FALLBACK = 'mailto:zev330@gmail.com?subject=Bay%20State%20Digital%20Platform%20%E2%80%94%20Commitment%20from%20Zion'

export default function Screen13() {
  const [selected, setSelected] = useState(null)
  const [customCRM, setCustomCRM] = useState(false)
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const crmPrice = customCRM ? 10000 : 6000
  const buildTotal = customCRM ? 36000 : 32000
  const deposit = selected === 'A' ? '$15,000' : selected === 'B' ? `$${(16000 + (customCRM ? 4000 : 0)).toLocaleString()}` : '—'
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  const optionBLabel = customCRM
    ? `Option B — Full Digital Platform + Custom CRM: $${buildTotal.toLocaleString()} build + $4,000/month`
    : `Option B — Full Digital Platform: $${buildTotal.toLocaleString()} build + $4,000/month`

  const handleSubmit = async () => {
    if (!selected || !name.trim()) return
    setSubmitting(true)

    const payload = {
      _subject: 'Bay State Digital Platform — Commitment from Zion',
      name: name.trim(),
      date: today,
      selectedOption: selected === 'A'
        ? 'Option A — Kitchen Configurator: $30,000'
        : optionBLabel,
      crmChoice: selected === 'B' ? (customCRM ? 'Custom CRM ($10,000)' : 'Zoho Rebuild ($6,000)') : 'N/A',
      depositAmount: deposit,
    }

    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Formspree error')
      setSubmitted(true)
    } catch {
      const body = Object.entries(payload)
        .filter(([k]) => k !== '_subject')
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n')
      window.location.href = `${MAILTO_FALLBACK}&body=${encodeURIComponent(body)}`
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-5 pt-12">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Thank you, Zion.</h2>
          <p className="text-body text-[15px] leading-relaxed mb-6">
            We'll send the onboarding document within 24 hours and begin work immediately upon receipt of the deposit. This is going to be something special.
          </p>
          <div className="text-sm text-muted">
            <p>Zev Steinmetz</p>
            <p>Technology Consulting</p>
            <p className="text-cyan-accent mt-1">zev330@gmail.com</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-3">
        Let's Build This
      </h2>
      <p className="text-center text-body text-[15px] mb-6">
        Is there any reason we shouldn't start building this before your busy season?
      </p>

      {/* Option selection */}
      <div className="space-y-3 mb-6">
        <button
          onClick={() => setSelected('A')}
          className={`w-full text-left rounded-xl p-4 border-2 transition-all ${
            selected === 'A' ? 'border-cyan-accent bg-cyan-accent/5' : 'border-white/10 bg-card'
          }`}
        >
          <div className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded-full border-2 mt-0.5 shrink-0 flex items-center justify-center ${
              selected === 'A' ? 'border-cyan-accent' : 'border-white/30'
            }`}>
              {selected === 'A' && <div className="w-2.5 h-2.5 rounded-full bg-cyan-accent" />}
            </div>
            <div>
              <h3 className="text-base font-bold">Option A — Kitchen Configurator: $30,000</h3>
              <p className="text-sm text-muted mt-1">The tool that changes your showroom. Delivered in 22 business days.</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => setSelected('B')}
          className={`w-full text-left rounded-xl p-4 border-2 transition-all relative ${
            selected === 'B' ? 'border-gold bg-gold/5' : 'border-white/10 bg-card'
          }`}
        >
          <div className="absolute -top-2.5 right-4 bg-gold text-navy text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
            <Star className="w-2.5 h-2.5" /> RECOMMENDED
          </div>
          <div className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded-full border-2 mt-0.5 shrink-0 flex items-center justify-center ${
              selected === 'B' ? 'border-gold' : 'border-white/30'
            }`}>
              {selected === 'B' && <div className="w-2.5 h-2.5 rounded-full bg-gold" />}
            </div>
            <div>
              <h3 className="text-base font-bold">Option B — Full Digital Platform: ${buildTotal.toLocaleString()} + $4,000/mo</h3>
              <p className="text-sm text-muted mt-1">Everything — including the configurator FREE. Your complete digital transformation.</p>
            </div>
          </div>
        </button>
      </div>

      {/* CRM toggle — only shows when Option B selected */}
      {selected === 'B' && (
        <div className="bg-card rounded-xl p-4 border border-white/10 mb-6">
          <p className="text-[10px] text-muted uppercase tracking-wide font-bold mb-2">Choose your CRM</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setCustomCRM(false)}
              className={`flex items-center gap-2 rounded-lg p-3 border-2 transition-all text-left ${
                !customCRM
                  ? 'border-cyan-accent bg-cyan-accent/5'
                  : 'border-white/10 bg-transparent'
              }`}
            >
              <BarChart3 className={`w-4 h-4 shrink-0 ${!customCRM ? 'text-cyan-accent' : 'text-muted'}`} />
              <div>
                <p className="text-xs font-semibold">Zoho Rebuild</p>
                <p className="text-sm font-bold">$6,000</p>
              </div>
            </button>
            <button
              onClick={() => setCustomCRM(true)}
              className={`flex items-center gap-2 rounded-lg p-3 border-2 transition-all text-left ${
                customCRM
                  ? 'border-gold bg-gold/5'
                  : 'border-white/10 bg-transparent'
              }`}
            >
              <Database className={`w-4 h-4 shrink-0 ${customCRM ? 'text-gold' : 'text-muted'}`} />
              <div>
                <p className="text-xs font-semibold">Custom CRM</p>
                <p className="text-sm font-bold">$10,000</p>
              </div>
            </button>
          </div>
          {customCRM && (
            <p className="text-[10px] text-gold mt-2 leading-snug">
              No Zoho subscription. Direct configurator integration. You own everything.
            </p>
          )}
        </div>
      )}

      {/* Form */}
      <div className="bg-card rounded-2xl p-5 border border-white/10 mb-6">
        <div className="space-y-4">
          <div>
            <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Zion Yehoshua"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-accent transition-colors"
            />
          </div>
          <div>
            <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Date</label>
            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-body">
              {today}
            </div>
          </div>
          <div>
            <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Selected Option</label>
            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-body">
              {selected === 'A'
                ? 'Option A — Kitchen Configurator'
                : selected === 'B'
                ? `Option B — Full Platform ${customCRM ? '+ Custom CRM' : '(Zoho)'}`
                : 'Select an option above'}
            </div>
          </div>
          <div>
            {selected === 'B' && (
              <>
                <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Build Total</label>
                <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-semibold text-white mb-4">
                  ${buildTotal.toLocaleString()}
                </div>
              </>
            )}
            <label className="text-xs text-muted uppercase tracking-wide block mb-1.5">Deposit Due Today</label>
            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-semibold text-white">
              {deposit}
            </div>
          </div>
        </div>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={!selected || !name.trim() || submitting}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-accent to-cyan-dark text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed min-h-[52px]"
      >
        {submitting ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            I'm Ready — Let's Go
          </>
        )}
      </button>

      {/* Footer */}
      <div className="text-center mt-8 text-sm text-muted">
        <p>Zev Steinmetz | Technology Consulting</p>
        <p className="text-cyan-accent">zev330@gmail.com</p>
      </div>
    </div>
  )
}
