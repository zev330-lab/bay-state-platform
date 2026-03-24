import { Ruler, LayoutGrid, Palette, Layers, Settings, FileText, Tablet } from 'lucide-react'

export default function Screen4() {
  const steps = [
    {
      icon: Ruler,
      title: 'Kitchen Size & Layout',
      desc: 'Customer selects their kitchen size or enters dimensions. Standard layouts (L-shape, U-shape, galley, island) with visual representations.',
    },
    {
      icon: LayoutGrid,
      title: 'Choose Your Cabinet Line',
      desc: 'Side-by-side comparison of all 5 lines — MasterBrand, Fabuwood, StarMark, Europa, Mid-Continent. Customer instantly sees how the same kitchen costs $12,000 in one line vs. $25,000 in another.',
    },
    {
      icon: Palette,
      title: 'Door Style & Finish',
      desc: 'Select door style, wood species, and finish. Price updates in real time. Painted vs. stained, shaker vs. raised panel — every choice reflected instantly.',
    },
    {
      icon: Layers,
      title: 'Countertops',
      desc: 'Toggle between quartz, granite, marble. See exactly how switching from granite to Cambria quartz changes the total by $2,000.',
    },
    {
      icon: Settings,
      title: 'Fixtures & Finishes',
      desc: 'Add faucets, tile, backsplash, hardware. Each selection updates the running total.',
    },
    {
      icon: FileText,
      title: 'Your Estimate',
      desc: "Complete preliminary estimate with itemized breakdown. PDF generation. 90% accuracy. The customer leaves with a number — not a 'we'll get back to you.'",
    },
  ]

  return (
    <div className="max-w-lg mx-auto px-5">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          The Bay State Kitchen Configurator
        </h2>
        <p className="text-gold font-semibold text-lg">
          From 3 weeks to 30 minutes.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative pl-8 mb-8">
        <div className="absolute left-3 top-3 bottom-3 w-px bg-gradient-to-b from-cyan-accent via-cyan-accent/50 to-cyan-accent/10" />

        {steps.map((s, i) => (
          <div key={i} className="relative mb-6 last:mb-0">
            <div className="absolute -left-5 top-1 w-6 h-6 rounded-full bg-navy border-2 border-cyan-accent flex items-center justify-center">
              <span className="text-[10px] font-bold text-cyan-accent">{i + 1}</span>
            </div>
            <div className="bg-card rounded-xl p-4 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <s.icon className="w-4 h-4 text-cyan-accent shrink-0" />
                <h3 className="text-sm font-semibold">{s.title}</h3>
              </div>
              <p className="text-xs text-muted leading-snug">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Callout */}
      <div className="bg-gradient-to-br from-gold/10 to-transparent rounded-2xl p-5 border border-gold/20 flex gap-3">
        <Tablet className="w-5 h-5 text-gold shrink-0 mt-0.5" />
        <p className="text-body text-sm leading-relaxed">
          This tool works on a tablet in your showroom, on a phone at a customer's kitchen table, or on your website as a lead capture tool. <span className="text-white font-semibold">One build, everywhere.</span>
        </p>
      </div>
    </div>
  )
}
