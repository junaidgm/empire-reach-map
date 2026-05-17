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

  const extractAct = (title, summary) => {
    // Extract a concise description of the act (1-2 sentences max, ~60 chars)
    if (title.includes(' — ')) {
      const action = title.split(' — ')[1]
      return action.length > 70 ? action.slice(0, 67) + '…' : action
    }
    // Fallback to first sentence of summary
    const firstSentence = summary.split(/[.!?]+/)[0]
    if (firstSentence.length > 100) return firstSentence.slice(0, 97) + '…'
    return firstSentence
  }

  const extractReason = (summary) => {
    // Extract motivation/reason from summary (look for keywords like "for", "to", "because")
    const reasonPatterns = [
      /for (?:control of |access to |strategic |economic )?([^.]{20,60})/i,
      /to (?:prevent |support |install |remove |block )([^.]{15,50})/i,
      /because (?:of |the )([^.]{20,60})/i
    ]
    for (const pattern of reasonPatterns) {
      const match = summary.match(pattern)
      if (match) return match[1].trim()
    }
    // Fallback: look for oil, resources, strategic, communist, etc.
    if (/oil|gas|mineral|resource|strategic|communist|authoritarian|democratic/i.test(summary)) {
      return 'Strategic/economic interests'
    }
    return null
  }

  return (
    <div className="tooltip-hover" style={style}>
      <div className="th-country">{country.country}</div>
      <div className="th-incidents-list">
        {country.incidents.map((inc, i) => {
          const perps = parsePerpetrators(inc.perpetrators)
          const flags = perps.map(k => PERP_META[k]?.flag).filter(Boolean).join(' ')
          const act = extractAct(inc.title, inc.summary)
          const reason = extractReason(inc.summary)
          return (
            <div key={i} className="th-incident-block">
              <div className="th-act-year">{inc.year}</div>
              <div className="th-act-flags">{flags}</div>
              <div className="th-act-text">{act}</div>
              {reason && <div className="th-act-reason">{reason}</div>}
            </div>
          )
        })}
      </div>
      <div className="th-hint">Click for full details →</div>
    </div>
  )
}
