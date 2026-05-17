import { PERP_META } from '../utils/perpetrators'

export default function PerpFlags({ perpCounts }) {
  const sorted = Object.entries(perpCounts)
    .sort(([, a], [, b]) => b - a)
    .filter(([, count]) => count > 0)

  if (sorted.length === 0) return null

  return (
    <div className="perp-flags">
      {sorted.map(([key, count]) => {
        const meta = PERP_META[key]
        if (!meta) return null
        return (
          <div
            key={key}
            className="perp-flag-badge"
            title={`${meta.label}: involved in ${count} documented intervention${count !== 1 ? 's' : ''}`}
          >
            <span className="perp-flag-emoji">{meta.flag}</span>
            <span className="perp-flag-count">{count}</span>
          </div>
        )
      })}
    </div>
  )
}
