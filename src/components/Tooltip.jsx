import { useEffect, useState } from 'react'
import { parsePerpetrators, PERP_META } from '../utils/perpetrators'

export default function Tooltip({ country, position }) {
  const [style, setStyle] = useState({})

  useEffect(() => {
    const pad = 12
    const w = 320
    const h = 160
    let x = position.x + 14
    let y = position.y - 10
    if (x + w > window.innerWidth - pad) x = position.x - w - 14
    if (y + h > window.innerHeight - pad) y = window.innerHeight - h - pad
    if (y < pad) y = pad
    setStyle({ left: x, top: y })
  }, [position])

  if (!country) return null

  const generateSummary = (incident) => {
    // Create a single coherent sentence from the title and summary
    const { title, summary, perpetrators } = incident

    // Start with the title as the main action
    let mainAction = title
    if (title.includes(' — ')) {
      mainAction = title.split(' — ')[1]
    }

    // Get first sentence of summary for context
    const firstSentence = summary.split(/[.!?]+/)[0].trim()

    // Combine into one complete sentence
    // Try to synthesize a natural, complete explanation
    const perpsText = perpetrators.length > 0 ? perpetrators[0] : 'Foreign powers'

    // Create variations based on keywords in the title/summary
    if (title.includes('Coup') || title.includes('overthrow')) {
      return `${perpsText} orchestrated a coup to ${mainAction.toLowerCase()}.`
    } else if (title.includes('Assassi') || title.includes('killed') || title.includes('murder')) {
      return `${perpsText} assassinated key leadership to ${mainAction.toLowerCase()}.`
    } else if (title.includes('Invasion') || title.includes('Intervention')) {
      return `${perpsText} intervened militarily to ${mainAction.toLowerCase()}.`
    } else if (title.includes('Campaign')) {
      return `${perpsText} launched a campaign to ${mainAction.toLowerCase()}.`
    } else {
      // Generic fallback - use first sentence and complement with action
      return `${perpsText} carried out ${mainAction.toLowerCase()}.`
    }
  }

  return (
    <div className="tooltip-hover" style={style}>
      <div className="th-title-bar">{country.country}</div>
      <div className="th-incidents-table">
        {country.incidents.map((inc, i) => {
          const perps = parsePerpetrators(inc.perpetrators)
          const flags = perps.map(k => PERP_META[k]?.flag).filter(Boolean).join('')
          const summary = generateSummary(inc)
          return (
            <div key={i} className="th-card">
              <div className="th-card-header">
                <span className="th-card-year">{inc.year}</span>
                <span className="th-card-flags">{flags}</span>
              </div>
              <div className="th-card-body">
                <div className="th-card-summary">{summary}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="th-footer">→ Click for full details</div>
    </div>
  )
}
