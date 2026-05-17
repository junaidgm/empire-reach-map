import { PERP_META } from '../utils/perpetrators'

export default function PerpFlags({ perpCounts, selectedPerps = new Set(), onToggle = () => {} }) {
  const sorted = Object.entries(perpCounts)
    .sort(([, a], [, b]) => b - a)
    .filter(([, count]) => count > 0)

  if (sorted.length === 0) return null

  const hasFilter = selectedPerps.size > 0

  return (
    <div className="perp-flags-wrap">
      <div className="perp-flags">
        {sorted.map(([key, count]) => {
          const meta = PERP_META[key]
          if (!meta) return null
          const active = selectedPerps.has(key)
          return (
            <button
              key={key}
              className={`perp-flag-badge ${active ? 'active' : ''}`}
              onClick={() => onToggle(key)}
              title={`${meta.label} (${count} incidents)${active ? ' — click to deselect' : ' — click to filter'}`}
            >
              <span className="perp-flag-emoji">{meta.flag}</span>
              <span className="perp-flag-count">{count}</span>
            </button>
          )
        })}
      </div>
      {hasFilter && (
        <button className="perp-clear" onClick={() => onToggle(null)}>
          ✕ clear filter
        </button>
      )}
    </div>
  )
}
