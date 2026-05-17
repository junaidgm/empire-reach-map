const PERP_PATTERNS = [
  { key: 'USA',          flag: '🇺🇸', label: 'USA',         patterns: ['United States', 'U.S.'] },
  { key: 'UK',           flag: '🇬🇧', label: 'UK',          patterns: ['United Kingdom', 'Britain', 'British', 'MI6'] },
  { key: 'France',       flag: '🇫🇷', label: 'France',      patterns: ['France', 'French', 'SDECE', 'DGSE'] },
  { key: 'Belgium',      flag: '🇧🇪', label: 'Belgium',     patterns: ['Belgium', 'Belgian', 'Leopold'] },
  { key: 'Israel',       flag: '🇮🇱', label: 'Israel',      patterns: ['Israel', 'Mossad', 'Israeli', 'Unit 8200'] },
  { key: 'Saudi Arabia', flag: '🇸🇦', label: 'S. Arabia',   patterns: ['Saudi Arabia', 'Saudi'] },
  { key: 'UAE',          flag: '🇦🇪', label: 'UAE',         patterns: ['UAE', 'Emirati'] },
  { key: 'Qatar',        flag: '🇶🇦', label: 'Qatar',       patterns: ['Qatar'] },
  { key: 'Turkey',       flag: '🇹🇷', label: 'Turkey',      patterns: ['Turkey', 'Turkish'] },
  { key: 'NATO',         flag: '🔷',  label: 'NATO',        patterns: ['NATO coalition', 'NATO ('] },
  { key: 'South Africa', flag: '🇿🇦', label: 'S. Africa',   patterns: ['South Africa'] },
  { key: 'Portugal',     flag: '🇵🇹', label: 'Portugal',    patterns: ['Portugal', 'Portuguese'] },
  { key: 'Spain',        flag: '🇪🇸', label: 'Spain',       patterns: ['Spain', 'Spanish'] },
  { key: 'Australia',    flag: '🇦🇺', label: 'Australia',   patterns: ['Australian intelligence'] },
  { key: 'Pakistan',     flag: '🇵🇰', label: 'Pakistan',    patterns: ['Pakistan (ISI)'] },
  { key: 'Colombia',     flag: '🇨🇴', label: 'Colombia',    patterns: ['Colombia'] },
  { key: 'Brazil',       flag: '🇧🇷', label: 'Brazil',      patterns: ['Brazil (Bolsonaro)'] },
  { key: 'Italy',        flag: '🇮🇹', label: 'Italy',       patterns: ['Italy', 'Italian'] },
]

// Returns array of unique perpetrator keys found in a perpetrators string array
export function parsePerpetrators(perpList) {
  const found = new Set()
  perpList.forEach(p => {
    for (const { key, patterns } of PERP_PATTERNS) {
      if (patterns.some(pat => p.includes(pat))) {
        found.add(key)
        break
      }
    }
  })
  return [...found]
}

// Count incidents per perpetrator key across all visible country data
export function computePerpCounts(countryData) {
  const counts = {}
  Object.values(countryData).forEach(({ incidents }) => {
    incidents.forEach(inc => {
      parsePerpetrators(inc.perpetrators).forEach(key => {
        counts[key] = (counts[key] || 0) + 1
      })
    })
  })
  return counts
}

export const PERP_META = Object.fromEntries(
  PERP_PATTERNS.map(({ key, flag, label }) => [key, { flag, label }])
)
