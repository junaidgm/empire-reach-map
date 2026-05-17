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
    // Search for key action verbs (more specific to avoid false positives like "executed orders")
    const patterns = [
      { regex: /was assassinated|was murdered|was killed/i, text: 'assassinated' },
      { regex: /was overthrown|was ousted|was deposed/i, text: 'ousted' },
      { regex: /was arrested|imprisoned|disqualified/i, text: 'arrested' },
      { regex: /regime change|military coup|coup d'état/i, text: 'coup' },
      { regex: /intervention|invasion|occupation/i, text: 'intervention' }
    ]
    for (const { regex, text } of patterns) {
      if (regex.test(summary)) return text
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
