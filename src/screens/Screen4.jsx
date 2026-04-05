import { FileText, Search, Share2, MapPin, Eye, Link2 } from 'lucide-react'

export default function Screen4() {
  const agents = [
    {
      icon: FileText,
      title: 'Content Agent',
      desc: 'Writes blog posts (4+/mo), press releases (1-2/mo), and website content. You review and approve before anything publishes.',
    },
    {
      icon: Search,
      title: 'SEO & AEO Agent',
      desc: 'Monitors your search rankings, analyzes competitors, optimizes your pages for both traditional search and AI search engines. Replaces your current SEO retainer.',
    },
    {
      icon: Share2,
      title: 'Social Media Agent',
      desc: 'Connects to your Instagram, Facebook, LinkedIn, YouTube. Auto-generates posts from your content and project photos. You approve, it publishes. Replaces manual posting.',
    },
    {
      icon: MapPin,
      title: 'Google Business Profile Agent',
      desc: 'Manages both GBP listings. Creates posts, monitors reviews, alerts you to new reviews to respond to, keeps your profiles active and optimized.',
    },
    {
      icon: Eye,
      title: 'Competitor Analysis Agent',
      desc: 'Tracks what Feinmann, S+H Construction, NEDC, and other top Boston remodelers are doing online. Reports insights weekly. Identifies opportunities.',
    },
    {
      icon: Link2,
      title: 'Backlink & Authority Agent',
      desc: 'Identifies backlink opportunities, drafts outreach emails, builds citation profiles. Replaces the link-building portion of your SEO retainer.',
    },
  ]

  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
        Your AI Agents
      </h2>
      <p className="text-body text-[15px] leading-relaxed mb-6">
        6 agents working 24/7 to grow your business.
      </p>

      <div className="space-y-3 mb-6">
        {agents.map((a, i) => (
          <div key={i} className="bg-card rounded-xl p-4 border border-white/5 flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-cyan-accent/10 flex items-center justify-center">
              <a.icon className="w-5 h-5 text-cyan-accent" />
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-1">{a.title}</h3>
              <p className="text-xs text-muted leading-snug">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-gold/10 to-transparent rounded-2xl p-5 border border-gold/20">
        <p className="text-body text-[15px] leading-relaxed">
          These 6 agents replace your entire current SEO and content vendor — <span className="text-gold font-semibold">saving you $3,000-5,000+/month.</span>
        </p>
      </div>
    </div>
  )
}
