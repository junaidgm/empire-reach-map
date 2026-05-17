import { useEffect, useState } from 'react'
import { parsePerpetrators, PERP_META } from '../utils/perpetrators'

export default function Tooltip({ country, position }) {
  const [style, setStyle] = useState({})

  useEffect(() => {
    const pad = 12
    const w = 280
    const h = 160
    let x = position.x + 14
    let y = position.y - 10
    if (x + w > window.innerWidth - pad) x = position.x - w - 14
    if (y + h > window.innerHeight - pad) y = window.innerHeight - h - pad
    if (y < pad) y = pad
    setStyle({ left: x, top: y })
  }, [position])

  if (!country) return null

  const extractEthos = (title, summary) => {
    // Try to extract a short, vivid context from title or summary
    if (title.includes(' — ')) {
      const action = title.split(' — ')[1]
      return action.length > 60 ? action.slice(0, 57) + '…' : action
    }
    // Otherwise, extract first compelling phrase from summary
    const phrases = [
      /assassinated|murdered|killed|overthrown|ousted|arrested|executed/i,
      /regime change|coup|intervention|invasion|deposed/i
    ]
    for (const phrase of phrases) {
      const match = summary.match(phrase)
      if (match) return match[0].toLowerCase()
    }
    return 'Intervention'
  }

  return (
    <div className="tooltip-hover" style={style}>
      <div className="th-country">{country.country}</div>
      {country.incidents.map((inc, i) => {
        const perps = parsePerpetrators(inc.perpetrators)
        const flags = perps.map(k => PERP_META[k]?.flag).filter(Boolean).join(' ')
        const short = inc.title.includes(' — ')
          ? inc.title.split(' — ')[1]
          : inc.title.length > 48 ? inc.title.slice(0, 46) + '…' : inc.title
        const ethos = extractEthos(inc.title, inc.summary)
        const leaderLine = inc.leader && ethos ? `${inc.leader} – ${ethos}` : inc.leader || ethos
        return (
          <div key={i} className="th-incident">
            <div className="th-year-row">{inc.year}</div>
            <div className="th-flags-title">
              <span className="th-flags">{flags}</span>
              <span className="th-title">{short}</span>
            </div>
            {leaderLine && <div className="th-ethos">{leaderLine}</div>}
          </div>
        )
      })}
      <div className="th-hint">Click to open full details →</div>
    </div>
  )
}
