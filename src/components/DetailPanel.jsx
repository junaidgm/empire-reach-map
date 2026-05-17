export default function DetailPanel({ country, onClose }) {
  if (!country) return null

  const isUrl = (str) => /^https?:\/\//.test(str)

  return (
    <div className="detail-panel">
      <div className="dp-header">
        <span className="dp-country-name">{country.country}</span>
        <button className="dp-close" onClick={onClose} aria-label="Close">✕</button>
      </div>

      <div className="dp-scroll">
        <div className="dp-timeline">
          {country.incidents.map((inc, i) => (
            <div key={i} className="dp-timeline-item">
              <div className="dp-timeline-dot"></div>
              {i < country.incidents.length - 1 && <div className="dp-timeline-line"></div>}

              <div className="dp-incident">
                <div className="dp-year">{inc.year}</div>
                <div className="dp-title">{inc.title}</div>

                <div className="dp-badges">
                  {inc.perpetrators.map((p, j) => (
                    <span key={j} className="perp-badge">{p}</span>
                  ))}
                </div>

                {inc.leader && (
                  <div className="dp-leader">
                    <strong>Target:</strong> {inc.leader}
                  </div>
                )}

                <ul className="dp-summary">
                  {inc.summary
                    .split(/\.\s+/)
                    .filter(s => s.trim())
                    .slice(0, 4)
                    .map((sentence, j) => (
                      <li key={j}>{sentence.trim()}.</li>
                    ))}
                </ul>

                <div className="dp-citations">
                  {inc.citations.map((c, j) => (
                    <div key={j} className="citation">
                      {isUrl(c) ? (
                        <a href={c} target="_blank" rel="noopener noreferrer">{c}</a>
                      ) : (
                        <span>{c}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
