import { ChevronRight } from 'lucide-react'

export default function Screen1({ onNext }) {
  return (
    <div className="max-w-lg mx-auto px-5">
      <div className="pt-12 pb-8 text-center">
        <div className="inline-block mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-accent to-cyan-dark flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Bay State Digital Platform
        </h1>
        <p className="text-base text-cyan-accent font-medium mb-2">
          Built for Bay State Remodeling & Bay State Kitchen Gallery
        </p>
      </div>

      <div className="bg-card rounded-2xl p-6 border border-white/5 mb-8">
        <p className="text-body text-[15px] leading-relaxed">
          Based on our conversation on March 24th, here's exactly what we're building, how long it takes, what it costs, and how we get started.
        </p>
      </div>

      <div className="text-center mb-10">
        <p className="text-sm text-muted">Prepared by</p>
        <p className="text-base font-semibold mt-1">Zev Steinmetz</p>
        <p className="text-sm text-cyan-accent">Technology Consulting</p>
      </div>

      <button
        onClick={onNext}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-accent to-cyan-dark text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity min-h-[52px]"
      >
        Let's Go
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}
