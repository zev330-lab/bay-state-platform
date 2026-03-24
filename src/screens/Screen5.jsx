import { TrendingUp } from 'lucide-react'

export default function Screen5() {
  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
        What This Could Become
      </h2>

      <div className="bg-card rounded-2xl p-6 border border-white/5 mb-6">
        <p className="text-body text-[15px] leading-relaxed">
          Here's what most people won't tell you: this tool doesn't just solve your problem. It solves a problem that every independent kitchen showroom in America has. There are over <span className="text-white font-semibold">7,900 MasterBrand dealers alone.</span> None of them have this.
        </p>
        <p className="text-body text-[15px] leading-relaxed mt-4">
          Once it's built and proven in your showroom — once you can show that it cuts your proposal cycle from weeks to minutes and measurably improves your close rate — there's a real conversation to be had about bringing this to market. A proprietary platform, built on your 15+ years of industry knowledge, that other dealers would pay for.
        </p>
        <p className="text-white font-semibold text-[15px] mt-4">
          That's a partnership worth exploring down the road. But first, it has to exist.
        </p>
      </div>

      {/* Gold callout */}
      <div className="bg-gradient-to-br from-gold/15 to-gold/5 rounded-2xl p-6 border border-gold/30">
        <div className="flex items-start gap-3">
          <TrendingUp className="w-5 h-5 text-gold shrink-0 mt-1" />
          <div>
            <p className="text-body text-[15px] leading-relaxed">
              Building something this valuable requires investment — in the same way that a recipe doesn't become a restaurant without capital. The IP we create together starts with this engagement.
            </p>
            <p className="text-gold font-semibold text-[15px] mt-3">
              Once it's built, proven, and generating revenue for Bay State, we can explore what the next chapter looks like together.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
