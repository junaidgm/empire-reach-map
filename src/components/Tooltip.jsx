import { useEffect, useState } from 'react'

export default function Tooltip({ country, position }) {
  const [style, setStyle] = useState({})

  useEffect(() => {
    const pad = 16
    const tooltipW = 380
    const tooltipH = 300
    let x = position.x + 14
    let y = position.y - 10

    if (x + tooltipW > window.innerWidth - pad) {
      x = position.x - tooltipW - 14
    }
    if (y + tooltipH > window.innerHeight - pad) {
      y = window.innerHeight - tooltipH - pad
    }
    if (y < pad) y = pad

    setStyle({ left: x, top: y })
  }, [position])

  if (!country) return null

  return (
    <div className="tooltip" style={style}>
      <div className="tooltip-country">{country.country}</div>
      {country.incidents.map((inc, i) => (
        <div key={i} className="tooltip-incident">
          <div className="tooltip-year-title">
            <span className="tooltip-year">{inc.year}</span>
            <span className="tooltip-title">{inc.title}</span>
          </div>
          <div className="tooltip-perpetrators">
            {inc.perpetrators.map((p, j) => (
              <span key={j} className="perp-badge">{p}</span>
            ))}
          </div>
          {inc.leader && (
            <div className="tooltip-leader">
              <span className="tooltip-label">Target: </span>{inc.leader}
            </div>
          )}
          <div className="tooltip-summary">{inc.summary}</div>
          <div className="tooltip-citations">
            {inc.citations.map((c, j) => (
              <div key={j} className="citation">— {c}</div>
            ))}
          </div>
          {i < country.incidents.length - 1 && <div className="tooltip-divider" />}
        </div>
      ))}
    </div>
  )
}
