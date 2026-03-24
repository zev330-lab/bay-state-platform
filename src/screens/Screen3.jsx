import { ShoppingCart, Home, Smartphone, Monitor } from 'lucide-react'

export default function Screen3() {
  const competitors = [
    {
      name: 'IKEA Kitchen Planner',
      desc: '1.75 million projects/year — but locked to IKEA products only',
      icon: ShoppingCart,
    },
    {
      name: 'Home Depot Estimator',
      desc: 'Gives rough budget ranges — no specific product selection or real dealer pricing',
      icon: Home,
    },
    {
      name: "Lowe's Kitchen Design",
      desc: "Invested in Apple Vision Pro AR — but again, only Lowe's inventory",
      icon: Smartphone,
    },
    {
      name: 'Professional Software (2020 Design)',
      desc: '$1,000-$2,000/year — designed for designers, not for closing sales on the showroom floor',
      icon: Monitor,
    },
  ]

  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
        You Saw Something Nobody Else Did
      </h2>

      <p className="text-body text-[15px] leading-relaxed mb-6">
        When you described the kitchen configurator — loading your 5 cabinet lines with real pricing, letting customers toggle finishes and countertops, generating a 92% accurate estimate in a single showroom visit — you weren't describing a feature. You were describing something that <span className="text-white font-semibold">no independent kitchen showroom in the Greater Boston market currently has.</span> Your instinct was right. Here's the proof:
      </p>

      <div className="space-y-3 mb-6">
        {competitors.map((c, i) => (
          <div key={i} className="bg-card rounded-xl p-4 border border-white/5 flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
              <c.icon className="w-5 h-5 text-muted" />
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-1">{c.name}</h3>
              <p className="text-xs text-muted leading-snug">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-cyan-accent/10 to-transparent rounded-2xl p-6 border border-cyan-accent/20">
        <p className="text-body text-[15px] leading-relaxed">
          The big-box retailers built tools for their own inventory. Designers have software for creating plans. But there is <span className="text-cyan-accent font-bold">nothing</span> that lets an independent dealer with multiple cabinet lines show instant price comparisons and close during a single customer visit.
        </p>
        <p className="text-white font-semibold text-[15px] mt-4">
          That's the gap you identified — before anyone else in your market. And that head start matters.
        </p>
      </div>
    </div>
  )
}
