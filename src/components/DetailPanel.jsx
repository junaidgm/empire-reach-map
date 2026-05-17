export default function DetailPanel({ country, onClose }) {
  if (!country) return null

  const isUrl = (str) => /^https?:\/\//.test(str)

  const citationUrl = (citation) => {
    // Map known sources to URLs
    const urlMap = {
      'UN Panel of Experts': 'https://www.un.org/securitycouncil/sanctions/yemen/',
      'Amnesty International': 'https://www.amnesty.org/',
      'Human Rights Watch': 'https://www.hrw.org/',
      'UN Human Rights Council': 'https://www.ohchr.org/en',
      'BBC News': 'https://www.bbc.com/news',
      'The Guardian': 'https://www.theguardian.com',
      'The Intercept': 'https://theintercept.com',
      'AP News': 'https://apnews.com',
      'Reuters': 'https://www.reuters.com',
      'NPR': 'https://www.npr.org',
      'NY Times': 'https://www.nytimes.com',
      'Washington Post': 'https://www.washingtonpost.com',
      'CEPR': 'https://cepr.net',
      'The Economist': 'https://www.economist.com'
    }

    // If citation starts with http, return as-is
    if (isUrl(citation)) return citation

    // Try to match known sources
    for (const [source, url] of Object.entries(urlMap)) {
      if (citation.toLowerCase().includes(source.toLowerCase())) {
        return url
      }
    }
    return null
  }

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
                  {inc.citations.map((c, j) => {
                    const url = citationUrl(c)
                    return (
                      <div key={j} className="citation">
                        {url ? (
                          <a href={url} target="_blank" rel="noopener noreferrer">{c}</a>
                        ) : (
                          <span>{c}</span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
