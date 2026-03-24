export default function Screen2() {
  const stats = [
    { value: '8.3 months', label: 'Average kitchen remodeling planning phase for homeowners' },
    { value: '78%', label: 'Of jobs go to the first contractor to present a professional proposal' },
    { value: '4-6 quotes', label: 'Number of estimates homeowners request before deciding' },
    { value: '28%', label: 'Sales cycle reduction when companies use configure-price-quote tools' },
  ]

  return (
    <div className="max-w-lg mx-auto px-5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
        The Bottleneck That's Costing You Money
      </h2>

      <p className="text-body text-[15px] leading-relaxed mb-6">
        You told me the biggest challenge in remodeling is the time between when a customer walks in with ideas and when you can present something they like within their budget. You're right — and the numbers back it up.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-card rounded-xl p-4 border border-white/5">
            <div className="text-2xl font-bold text-cyan-accent mb-2">{s.value}</div>
            <p className="text-xs text-muted leading-snug">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-2xl p-6 border border-white/5">
        <p className="text-body text-[15px] leading-relaxed">
          Every week a proposal takes is a week the customer is shopping competitors. Every meeting spent reviewing cabinet options is a meeting that could have been a signed contract.
        </p>
        <p className="text-body text-[15px] leading-relaxed mt-4">
          You've been trying to compress this process for 15 years. Now technology can do it.
        </p>
      </div>
    </div>
  )
}
