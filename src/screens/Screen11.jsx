import { useState } from 'react'
import { TrendingDown, TrendingUp, Star, Wrench } from 'lucide-react'

export default function Screen11() {
  const [option, setOption] = useState('A')

  const isA = option === 'A'
  const monthlyService = isA ? 22000 : 5500
  const monthlyLabel = isA ? '$2,000/mo × 11 months' : '$500/mo × 11 months'
  const optionLabel = isA ? 'Option A — Full Service' : 'Option B — Self-Managed'
  const yearTotal = 21000 + monthlyService
  const savingsLow = 103000 - yearTotal
  const savingsHigh = 140000 - yearTotal

  const marketCost = [
    ['Two custom websites', '$30,000 - $50,000'],
    ['AI chatbot with product knowledge', '$5,000 - $15,000'],
    ['6 AI marketing agents (or human equivalent)', '$60,000+/year'],
    ['Lead scraping pipeline', '$3,000 - $5,000 + $12,000/year'],
    ['Customer nurture system', '$5,000 - $10,000 + $6,000/year'],
  ]

  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
        What This Is Worth
      </h2>

      {/* Option selector */}
      <div className="bg-card rounded-xl p-3 border border-white/10 mb-5">
        <p className="text-[10px] text-muted uppercase tracking-wide font-bold mb-2">Select your ongoing plan</p>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setOption('A')}
            className={`rounded-lg p-3 border-2 transition-all text-left relative ${
              isA ? 'border-gold bg-gold/5' : 'border-white/10 bg-transparent'
            }`}
          >
            {isA && (
              <div className="absolute -top-2 right-2 bg-gold text-navy text-[8px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                <Star className="w-2 h-2" /> REC
              </div>
            )}
            <p className="text-xs font-semibold">Option A</p>
            <p className="text-[10px] text-muted">Full Service</p>
            <p className="text-sm font-bold mt-1">$2,000/mo</p>
          </button>
          <button
            onClick={() => setOption('B')}
            className={`rounded-lg p-3 border-2 transition-all text-left ${
              !isA ? 'border-cyan-accent bg-cyan-accent/5' : 'border-white/10 bg-transparent'
            }`}
          >
            <p className="text-xs font-semibold">Option B</p>
            <p className="text-[10px] text-muted">Self-Managed</p>
            <p className="text-sm font-bold mt-1">$500/mo</p>
          </button>
        </div>
      </div>

      {/* Market rates */}
      <div className="bg-card rounded-2xl p-5 border border-red-500/15 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingDown className="w-5 h-5 text-red-400" />
          <h3 className="text-sm font-bold text-red-400">Building This Traditionally</h3>
        </div>
        <div className="space-y-2">
          {marketCost.map(([item, price], i) => (
            <div key={i} className="flex justify-between items-start py-2 border-b border-white/5 last:border-0">
              <span className="text-sm text-muted flex-1 mr-3">{item}</span>
              <span className="text-sm font-medium text-white shrink-0">{price}</span>
            </div>
          ))}
        </div>
        <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/15 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-white">Total Year 1</span>
            <span className="text-xl font-bold text-red-400">$103,000 - $140,000+</span>
          </div>
        </div>
      </div>

      {/* Our pricing — dynamic */}
      <div className={`bg-card rounded-2xl p-5 border-2 mb-4 transition-colors ${isA ? 'border-gold' : 'border-cyan-accent'}`}>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-green-400" />
          <h3 className="text-sm font-bold text-green-400">With Us — {optionLabel}</h3>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-start py-2 border-b border-white/5">
            <span className="text-sm text-body flex-1 mr-3">Full platform build</span>
            <span className="text-sm font-medium text-white shrink-0">$21,000</span>
          </div>
          <div className="flex justify-between items-start py-2 border-b border-white/5">
            <div className="flex-1 mr-3">
              <span className="text-sm text-body">Year 1 monthly service</span>
              <p className="text-xs text-muted mt-0.5">{monthlyLabel}</p>
            </div>
            <span className="text-sm font-medium text-white shrink-0 transition-all">${monthlyService.toLocaleString()}</span>
          </div>
          {!isA && (
            <div className="flex justify-between items-start py-2 border-b border-white/5">
              <div className="flex-1 mr-3">
                <span className="text-sm text-body">Hourly work as needed</span>
                <p className="text-xs text-muted mt-0.5">$250/hr, 2-hr minimum per request</p>
              </div>
              <span className="text-sm font-medium text-muted shrink-0">varies</span>
            </div>
          )}
        </div>
        <div className={`rounded-xl p-4 border mt-4 transition-colors ${isA ? 'bg-gold/10 border-gold/20' : 'bg-cyan-accent/10 border-cyan-accent/20'}`}>
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-white">Total Year 1</span>
            <span className={`text-xl font-bold transition-all ${isA ? 'text-gold' : 'text-cyan-accent'}`}>
              ${yearTotal.toLocaleString()}{!isA && '+'}
            </span>
          </div>
        </div>
      </div>

      {/* Savings */}
      <div className="bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl p-6 border border-green-500/20 mb-4">
        <p className="text-center">
          <span className="text-3xl font-bold text-green-400 transition-all">
            ${savingsLow.toLocaleString()} - ${savingsHigh.toLocaleString()}
          </span>
        </p>
        <p className="text-center text-sm text-muted mt-2">saved in Year 1 alone</p>
      </div>

      <div className="bg-white/5 rounded-xl p-4 border border-white/5">
        <p className="text-sm text-muted leading-relaxed">
          And you own everything at the end. <span className="text-white font-semibold">Try getting that from a WordPress agency.</span>
        </p>
      </div>
    </div>
  )
}
