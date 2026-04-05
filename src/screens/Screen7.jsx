import { ExternalLink, Wrench, MessageSquare } from 'lucide-react'

const CONFIGURATOR_URL = 'https://zev330-lab.github.io/bay-state-configurator-demo/'
const CHATBOT_URL = 'https://zev330-lab.github.io/bay-state-current/'

export default function Screen7() {
  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
        The Kitchen Configurator
      </h2>
      <p className="text-sm text-muted mb-6">Preview</p>

      <div className="bg-card rounded-2xl p-5 border border-white/5 mb-4">
        <p className="text-body text-[15px] leading-relaxed mb-4">
          The kitchen configurator we demonstrated is being developed as part of a separate joint venture between Bay State and Steinmetz Real Estate. It will live on your website, on ours, and on a shared marketplace platform.
        </p>
        <p className="text-body text-[15px] leading-relaxed">
          This is a partnership project — not part of the website build cost. We'll share a separate brief on scope and structure.
        </p>
      </div>

      {/* Configurator demo link */}
      <a
        href={CONFIGURATOR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-3"
      >
        <div className="bg-card rounded-xl p-4 border-2 border-gold hover:bg-card-hover transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gold">Kitchen Configurator Demo</h3>
                <p className="text-xs text-muted">Interactive prototype</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gold" />
          </div>
        </div>
      </a>

      {/* Chatbot link */}
      <a
        href={CHATBOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-6"
      >
        <div className="bg-card rounded-xl p-4 border border-cyan-accent/30 hover:bg-card-hover transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-accent/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-cyan-accent" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-cyan-accent">Your AI Designer Chatbot</h3>
                <p className="text-xs text-muted">Redeployed and ready for enhancement</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-cyan-accent" />
          </div>
        </div>
      </a>
    </div>
  )
}
