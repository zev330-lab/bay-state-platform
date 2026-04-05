import { TrendingDown, TrendingUp } from 'lucide-react'

export default function Screen11() {
  const marketCost = [
    ['Two custom websites', '$30,000 - $50,000'],
    ['AI chatbot with product knowledge', '$5,000 - $15,000'],
    ['6 AI marketing agents (or human equivalent)', '$60,000+/year'],
    ['Lead scraping pipeline', '$3,000 - $5,000 + $12,000/year'],
    ['Customer nurture system', '$5,000 - $10,000 + $6,000/year'],
  ]

  const ourCost = [
    ['Full platform build', '$21,000'],
    ['Year 1 monthly service (Option A)', '$22,000'],
  ]

  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
        What This Is Worth
      </h2>

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

      {/* Our pricing */}
      <div className="bg-card rounded-2xl p-5 border-2 border-gold mb-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-green-400" />
          <h3 className="text-sm font-bold text-green-400">With Us</h3>
        </div>
        <div className="space-y-2">
          {ourCost.map(([item, price], i) => (
            <div key={i} className="flex justify-between items-start py-2 border-b border-white/5 last:border-0">
              <span className="text-sm text-body flex-1 mr-3">{item}</span>
              <span className="text-sm font-medium text-white shrink-0">{price}</span>
            </div>
          ))}
        </div>
        <div className="bg-gold/10 rounded-xl p-4 border border-gold/20 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-white">Total Year 1</span>
            <span className="text-xl font-bold text-gold">$43,000</span>
          </div>
        </div>
      </div>

      {/* Savings */}
      <div className="bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl p-6 border border-green-500/20 mb-4">
        <p className="text-center">
          <span className="text-3xl font-bold text-green-400">$60,000 - $97,000</span>
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
