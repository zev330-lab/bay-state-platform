import { useState, useEffect, useCallback } from 'react'
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Screen3 from './screens/Screen3'
import Screen4 from './screens/Screen4'
import Screen5 from './screens/Screen5'
import Screen6 from './screens/Screen6'
import Screen7 from './screens/Screen7'
import Screen8 from './screens/Screen8'
import Screen9 from './screens/Screen9'
import Screen10 from './screens/Screen10'
import Screen11 from './screens/Screen11'
import Screen12 from './screens/Screen12'
import Screen13 from './screens/Screen13'

const screens = [
  Screen1, Screen2, Screen3, Screen4, Screen5, Screen6, Screen7,
  Screen8, Screen9, Screen10, Screen11, Screen12, Screen13,
]

const TOTAL = screens.length

export default function App() {
  const [current, setCurrent] = useState(0)
  const [animClass, setAnimClass] = useState('fade-active')
  const [touchStart, setTouchStart] = useState(null)

  const goTo = useCallback((idx) => {
    if (idx < 0 || idx >= TOTAL || idx === current) return
    setAnimClass('fade-enter')
    setTimeout(() => {
      setCurrent(idx)
      window.scrollTo({ top: 0, behavior: 'instant' })
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimClass('fade-active'))
      })
    }, 200)
  }, [current])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const back = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next()
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') back()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, back])

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX)
  const handleTouchEnd = (e) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 60) {
      if (diff > 0) next()
      else back()
    }
    setTouchStart(null)
  }

  const Screen = screens[current]

  return (
    <div
      className="min-h-dvh flex flex-col"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Progress dots */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-1.5 py-3 bg-navy/80 backdrop-blur-sm">
        {screens.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to screen ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              i === current
                ? 'bg-cyan-accent w-6'
                : i < current
                ? 'bg-cyan-accent/40'
                : 'bg-white/20'
            }`}
          />
        ))}
      </div>

      {/* Screen content */}
      <main className={`flex-1 pt-12 pb-24 ${animClass}`}>
        <Screen onNext={next} onBack={back} goTo={goTo} />
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-lg mx-auto flex items-center justify-between px-5 py-3">
          <button
            onClick={back}
            disabled={current === 0}
            className="flex items-center gap-1.5 text-sm font-medium text-body disabled:opacity-30 disabled:cursor-not-allowed hover:text-white transition-colors min-h-[44px] px-3"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <span className="text-xs text-muted tabular-nums">
            {current + 1} / {TOTAL}
          </span>

          {current < TOTAL - 1 ? (
            <button
              onClick={next}
              className="flex items-center gap-1.5 text-sm font-medium text-cyan-accent hover:text-white transition-colors min-h-[44px] px-3"
            >
              Next
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <div className="w-16" />
          )}
        </div>
      </nav>
    </div>
  )
}
