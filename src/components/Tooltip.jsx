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

  return (
    <div className="tooltip-hover" style={style}>
      <div className="th-country">{country.country}</div>
      {country.incidents.map((inc, i) => {
        const perps = parsePerpetrators(inc.perpetrators)
        const flags = perps.map(k => PERP_META[k]?.flag).filter(Boolean).join(' ')
        // Shorten title: take the part after ' — ' if present, else first 48 chars
        const short = inc.title.includes(' — ')
          ? inc.title.split(' — ')[1]
          : inc.title.length > 48 ? inc.title.slice(0, 46) + '…' : inc.title
        return (
          <div key={i} className="th-row">
            <span className="th-year">{inc.year}</span>
            <span className="th-flags">{flags}</span>
            <span className="th-title">{short}</span>
          </div>
        )
      })}
      <div className="th-hint">Click to open full details →</div>
    </div>
  )
}
