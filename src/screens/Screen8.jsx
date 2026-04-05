import { Shield, Check, Code2, Database, Globe, Link2 } from 'lucide-react'

export default function Screen8() {
  const ownItems = [
    { icon: Code2, label: 'Your GitHub repository with all source code' },
    { icon: Database, label: 'Your Supabase database with all your data' },
    { icon: Globe, label: 'Your Vercel account running the sites' },
    { icon: Link2, label: 'Your domains pointing at your infrastructure' },
  ]

  return (
    <div className="max-w-lg mx-auto px-5">
      <div className="text-center mb-6">
        <div className="inline-block mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-accent to-cyan-dark flex items-center justify-center mx-auto">
            <Shield className="w-8 h-8 text-white" />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          No Lock-In. You Own Everything.
        </h2>
      </div>

      <div className="bg-card rounded-2xl p-5 border border-white/5 mb-4">
        <p className="text-body text-[15px] leading-relaxed mb-5">
          Regardless of which support option you choose, you own:
        </p>
        <div className="space-y-3">
          {ownItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="shrink-0 w-9 h-9 rounded-lg bg-cyan-accent/10 flex items-center justify-center">
                <item.icon className="w-4 h-4 text-cyan-accent" />
              </div>
              <span className="text-sm text-body font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-2xl p-5 border border-white/5 mb-4">
        <p className="text-body text-[15px] leading-relaxed">
          If you ever decide to manage everything yourself, you walk away with a fully functional platform. <span className="text-white font-semibold">No hostage situation. No proprietary systems you can't access.</span>
        </p>
      </div>

      <div className="bg-gradient-to-br from-gold/10 to-transparent rounded-2xl p-5 border border-gold/20">
        <p className="text-body text-[15px] leading-relaxed">
          This is the opposite of WordPress agencies, Zoho consultants, and SaaS vendors who make you dependent on them. <span className="text-white font-semibold">We build it. You own it. Period.</span>
        </p>
      </div>
    </div>
  )
}
