'use client'

import { useEffect, useRef, useState } from 'react'

const QUOTES = [
  { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
  { text: "The key is not to prioritize what's on your schedule, but to schedule your priorities.", author: "Stephen Covey" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "Well begun is half done.", author: "Aristotle" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "It's not about having time. It's about making time.", author: "Unknown" },
  { text: "Clarity is the counterbalance of profound thoughts.", author: "Luc de Clapiers" },
  { text: "Do the hard jobs first. The easy jobs will take care of themselves.", author: "Dale Carnegie" },
]

const WEATHER_ICONS: Record<number, string> = {
  0: '☀️', 1: '🌤', 2: '⛅', 3: '☁️',
  45: '🌫', 48: '🌫', 51: '🌦', 61: '🌧',
  71: '🌨', 80: '🌦', 95: '⛈',
}
const WEATHER_DESCS: Record<number, string> = {
  0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
  45: 'Foggy', 51: 'Light drizzle', 61: 'Rain',
  71: 'Snow', 80: 'Showers', 95: 'Thunderstorm',
}

type TimeOfDay = 'dawn' | 'morning' | 'midday' | 'afternoon' | 'sunset' | 'dusk' | 'night'

interface Palette {
  sky: string[]
  text: string
  widget: string
  pill: string
  quote: string
  celestialColor: string
  celestialType: 'sun' | 'moon'
  celestialY: number
}

const PALETTES: Record<TimeOfDay, Palette> = {
  dawn:      { sky: ['#1a1a3e','#3b2a5a','#7b4a6a','#e8805a','#f4b97a'], text: '#fff',     widget: 'rgba(255,255,255,0.15)', pill: 'rgba(255,255,255,0.2)',  quote: 'rgba(255,255,255,0.1)',  celestialColor: '#fde68a', celestialType: 'sun',  celestialY: 0.82 },
  morning:   { sky: ['#fde8c8','#f9c47a','#fdda8a','#a8d8f0','#6ab4e8'], text: '#1a2a4a', widget: 'rgba(255,255,255,0.45)', pill: 'rgba(255,255,255,0.6)',  quote: 'rgba(255,255,255,0.35)', celestialColor: '#fcd34d', celestialType: 'sun',  celestialY: 0.25 },
  midday:    { sky: ['#1e90e8','#3aa8f0','#60bef8','#90d4fb','#c0e8fd'], text: '#0a1a3a', widget: 'rgba(255,255,255,0.35)', pill: 'rgba(255,255,255,0.55)', quote: 'rgba(255,255,255,0.25)', celestialColor: '#fef9c3', celestialType: 'sun',  celestialY: 0.08 },
  afternoon: { sky: ['#2e9ee0','#5ab8f0','#80ccf8','#b0e0fa','#d0eefe'], text: '#0a1a3a', widget: 'rgba(255,255,255,0.35)', pill: 'rgba(255,255,255,0.55)', quote: 'rgba(255,255,255,0.25)', celestialColor: '#fcd34d', celestialType: 'sun',  celestialY: 0.22 },
  sunset:    { sky: ['#0a0a2a','#3a1a4a','#8a3050','#e05030','#f4924a','#f9c87a'], text: '#fff', widget: 'rgba(0,0,0,0.3)', pill: 'rgba(255,255,255,0.2)', quote: 'rgba(255,255,255,0.1)', celestialColor: '#fb923c', celestialType: 'sun', celestialY: 0.78 },
  dusk:      { sky: ['#0a0520','#1a0a38','#2e1048','#6a2858','#c05848'], text: '#f0d8f0', widget: 'rgba(255,255,255,0.1)',  pill: 'rgba(255,255,255,0.15)', quote: 'rgba(255,255,255,0.08)', celestialColor: '#e879f9', celestialType: 'moon', celestialY: 0.65 },
  night:     { sky: ['#020410','#060820','#0a0c28','#0e1035','#141840'], text: '#c8d8f8', widget: 'rgba(255,255,255,0.07)', pill: 'rgba(255,255,255,0.12)', quote: 'rgba(255,255,255,0.06)', celestialColor: '#e2e8f0', celestialType: 'moon', celestialY: 0.18 },
}

function getTimeOfDay(h: number): TimeOfDay {
  if (h >= 5 && h < 7)  return 'dawn'
  if (h >= 7 && h < 11) return 'morning'
  if (h >= 11 && h < 15) return 'midday'
  if (h >= 15 && h < 18) return 'afternoon'
  if (h >= 18 && h < 20) return 'sunset'
  if (h >= 20 && h < 22) return 'dusk'
  return 'night'
}

function drawSky(canvas: HTMLCanvasElement, tod: TimeOfDay) {
  const p = PALETTES[tod]
  const W = canvas.width, H = canvas.height
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, W, H)

  const grad = ctx.createLinearGradient(0, 0, 0, H)
  p.sky.forEach((c, i) => grad.addColorStop(i / (p.sky.length - 1), c))
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, W, H)

  if (tod === 'night' || tod === 'dusk') {
    const count = tod === 'night' ? 80 : 30
    for (let i = 0; i < count; i++) {
      const sx = (Math.sin(i * 137.5) * 0.5 + 0.5) * W
      const sy = (Math.sin(i * 97.3) * 0.5 + 0.5) * H * 0.7
      const sr = i % 7 === 0 ? 1.5 : 0.8
      ctx.fillStyle = `rgba(255,255,255,${0.5 + (i % 3) * 0.2})`
      ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2); ctx.fill()
    }
  }

  if (['morning', 'midday', 'afternoon'].includes(tod)) {
    ctx.fillStyle = 'rgba(255,255,255,0.55)'
    const clouds: [number, number, number, number][] = [[0.15, 0.35, 60, 22], [0.35, 0.2, 90, 18], [0.6, 0.42, 70, 20], [0.75, 0.28, 50, 16]]
    clouds.forEach(([cx, cy, w, h]) => {
      ctx.beginPath(); ctx.ellipse(cx * W, cy * H, w, h, 0, 0, Math.PI * 2); ctx.fill()
      ctx.beginPath(); ctx.ellipse(cx * W - 20, cy * H + 8, w * 0.6, h * 0.7, 0, 0, Math.PI * 2); ctx.fill()
      ctx.beginPath(); ctx.ellipse(cx * W + 25, cy * H + 6, w * 0.5, h * 0.65, 0, 0, Math.PI * 2); ctx.fill()
    })
  }

  const cx = W * 0.82, cy = H * p.celestialY, r = p.celestialType === 'sun' ? 28 : 22
  if (p.celestialType === 'sun') {
    const glow = ctx.createRadialGradient(cx, cy, r * 0.3, cx, cy, r * 2.5)
    glow.addColorStop(0, 'rgba(255,220,100,0.35)')
    glow.addColorStop(1, 'rgba(255,180,50,0)')
    ctx.fillStyle = glow
    ctx.beginPath(); ctx.arc(cx, cy, r * 2.5, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = p.celestialColor
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill()
  } else {
    ctx.fillStyle = p.celestialColor
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = p.sky[1] ?? '#0a0c28'
    ctx.beginPath(); ctx.arc(cx + r * 0.35, cy - r * 0.1, r * 0.82, 0, Math.PI * 2); ctx.fill()
  }
}

interface WeatherData { temp: number; windspeed: number; icon: string; desc: string }
interface HeroSectionProps {
  city?: string
  latitude?: number
  longitude?: number
}

const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']

export function HeroSection({ city = 'Cape Town', latitude = -33.9249, longitude = 18.4241 }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef   = useRef<HTMLDivElement>(null)
  const [tod, setTod]     = useState<TimeOfDay>('midday')
  const [time, setTime]   = useState('')
  const [secs, setSecs]   = useState('')
  const [dayStr, setDayStr]   = useState('')
  const [dateStr, setDateStr] = useState('')
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [wError, setWError]   = useState(false)

  const today = new Date()
  const quote = QUOTES[today.getDate() % QUOTES.length]
  const p = PALETTES[tod]

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const h = now.getHours()
      const mm = String(now.getMinutes()).padStart(2,'0')
      const s  = String(now.getSeconds()).padStart(2,'0')
      setTime(`${String(h).padStart(2,'0')}:${mm}`)
      setSecs(s)
      setDayStr(DAYS[now.getDay()])
      setDateStr(`${DAYS[now.getDay()]}, ${MONTHS[now.getMonth()]} ${now.getDate()}`)
      setTod(getTimeOfDay(h))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const draw = () => {
      if (!canvasRef.current || !wrapRef.current) return
      canvasRef.current.width  = wrapRef.current.offsetWidth
      canvasRef.current.height = wrapRef.current.offsetHeight
      drawSky(canvasRef.current, tod)
    }
    draw()
    window.addEventListener('resize', draw)
    return () => window.removeEventListener('resize', draw)
  }, [tod])

  useEffect(() => {
    const fetch_ = async () => {
      try {
        const res  = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`)
        const data = await res.json()
        const code: number = data.current_weather.weathercode
        const mc = WEATHER_ICONS[code] ? code : Math.floor(code / 10) * 10
        setWeather({ temp: Math.round(data.current_weather.temperature), windspeed: Math.round(data.current_weather.windspeed), icon: WEATHER_ICONS[mc] ?? '🌡', desc: WEATHER_DESCS[mc] ?? 'Variable' })
      } catch { setWError(true) }
    }
    fetch_()
    const id = setInterval(fetch_, 10 * 60 * 1000)
    return () => clearInterval(id)
  }, [latitude, longitude])

  const widgetStyle: React.CSSProperties = {
    background: p.widget,
    backdropFilter: 'blur(12px)',
    border: '0.5px solid rgba(255,255,255,0.18)',
    color: p.text,
    borderRadius: '12px',
    padding: '0.85rem 1rem',
  }

  return (
    <div ref={wrapRef} className="relative rounded-xl overflow-hidden min-h-[220px]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      <div className="relative z-10 p-6 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start" style={{ color: p.text }}>

        {/* Left */}
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-widest mb-4" style={{ opacity: 0.7 }}>
            Priority Workspace
          </div>
          <h1 className="text-2xl font-bold mb-3 max-w-lg leading-snug">
            A calmer place to rank the work that{' '}
            <span className="italic font-normal" style={{ opacity: 0.75 }}>matters first.</span>
          </h1>
          <p className="text-sm leading-relaxed mb-4 max-w-xl" style={{ opacity: 0.8 }}>
            Mail, WhatsApp, Telegram, and texts land in one view so urgent communication,
            tasks, and project pressure stay connected without feeling noisy.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: p.pill, color: p.text }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            {dateStr}
          </div>

          <div className="mt-3 max-w-xl py-2 px-3" style={{ background: p.quote, borderLeft: '2px solid rgba(255,255,255,0.3)', borderRadius: '0 8px 8px 0', color: p.text }}>
            <div className="text-[9px] uppercase tracking-widest mb-1" style={{ opacity: 0.55 }}>Quote of the day</div>
            <p className="text-xs italic leading-relaxed" style={{ opacity: 0.85 }}>"{quote.text}"</p>
            <p className="text-[10px] uppercase tracking-wide mt-1" style={{ opacity: 0.5 }}>— {quote.author}</p>
          </div>
        </div>

        {/* Right widgets */}
        <div className="flex flex-col gap-2.5 min-w-[165px]">
          <div style={widgetStyle}>
            <div className="text-[9px] uppercase tracking-widest mb-1" style={{ opacity: 0.55 }}>Local time</div>
            <div className="text-4xl font-bold leading-none tracking-tight">{time || '--:--'}</div>
            <div className="text-[10px] mt-1" style={{ opacity: 0.5 }}>{dayStr} · {secs}s</div>
          </div>

          <div style={widgetStyle}>
            <div className="text-[9px] uppercase tracking-widest mb-2" style={{ opacity: 0.55 }}>Weather · {city}</div>
            {wError ? (
              <p className="text-xs" style={{ opacity: 0.6 }}>Unavailable</p>
            ) : weather ? (
              <div className="flex items-center gap-3">
                <span className="text-2xl">{weather.icon}</span>
                <div>
                  <div className="text-2xl font-bold leading-none">{weather.temp}°C</div>
                  <div className="text-[10px] mt-1" style={{ opacity: 0.7 }}>{weather.desc}</div>
                  <div className="text-[9px] mt-0.5" style={{ opacity: 0.45 }}>Wind {weather.windspeed} km/h</div>
                </div>
              </div>
            ) : (
              <p className="text-xs animate-pulse" style={{ opacity: 0.6 }}>Fetching...</p>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}