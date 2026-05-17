export default function DetailPanel({ country, onClose }) {
  if (!country) return null

  return (
    <div className="detail-panel">
      <div className="dp-header">
        <span className="dp-country-name">{country.country}</span>
        <button className="dp-close" onClick={onClose} aria-label="Close">✕</button>
      </div>

      <div className="dp-scroll">
        {country.incidents.map((inc, i) => (
          <div key={i} className="dp-incident">
            <div className="dp-year-row">
              <span className="dp-year">{inc.year}</span>
              <span className="dp-title">{inc.title}</span>
            </div>

            <div className="dp-badges">
              {inc.perpetrators.map((p, j) => (
                <span key={j} className="perp-badge">{p}</span>
              ))}
            </div>

            {inc.leader && (
              <div className="dp-leader">
                <span className="dp-label">Target: </span>{inc.leader}
              </div>
            )}

            <p className="dp-summary">{inc.summary}</p>

            <div className="dp-citations">
              {inc.citations.map((c, j) => (
                <div key={j} className="citation">— {c}</div>
              ))}
            </div>

            {i < country.incidents.length - 1 && (
              <div className="dp-divider" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
