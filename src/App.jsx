import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import WorldMap from './components/WorldMap'
import Tooltip from './components/Tooltip'
import DetailPanel from './components/DetailPanel'
import Timeline from './components/Timeline'
import PerpFlags from './components/PerpFlags'
import { events } from './data/events'
import { computePerpCounts, parsePerpetrators } from './utils/perpetrators'
import './App.css'

const MIN_YEAR = 1830
const MAX_YEAR = 2026

export default function App() {
  const [viewMode, setViewMode] = useState('all')
  const [animationYear, setAnimationYear] = useState(MIN_YEAR)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(2)

  // hover tooltip
  const [hoveredCountry, setHoveredCountry] = useState(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  // click → detail panel
  const [detailCountry, setDetailCountry] = useState(null)

  // perpetrator filter
  const [selectedPerps, setSelectedPerps] = useState(new Set())

  const [newlyAdded, setNewlyAdded] = useState(new Set())
  const prevYearRef = useRef(MIN_YEAR)
  const intervalRef = useRef(null)

  // base country data filtered by year
  const countryData = useMemo(() => {
    const cutoff = viewMode === 'timeline' ? animationYear : MAX_YEAR
    const result = {}
    Object.entries(events).forEach(([id, data]) => {
      const visible = data.incidents.filter(i => i.year <= cutoff)
      if (visible.length > 0) result[id] = { ...data, incidents: visible }
    })
    return result
  }, [viewMode, animationYear])

  // filtered by selected perpetrators
  const filteredCountryData = useMemo(() => {
    if (selectedPerps.size === 0) return countryData
    const result = {}
    Object.entries(countryData).forEach(([id, data]) => {
      const match = data.incidents.some(inc =>
        parsePerpetrators(inc.perpetrators).some(k => selectedPerps.has(k))
      )
      if (match) result[id] = data
    })
    return result
  }, [countryData, selectedPerps])

  const perpCounts = useMemo(() => computePerpCounts(countryData), [countryData])
  const perpNations = Object.keys(perpCounts).length
  const totalIncidents = Object.values(filteredCountryData).reduce((n, d) => n + d.incidents.length, 0)
  const totalCountries = Object.keys(filteredCountryData).length

  // flash new countries during timeline
  useEffect(() => {
    if (viewMode !== 'timeline') return
    const prev = prevYearRef.current
    const newIds = new Set()
    Object.entries(events).forEach(([id, data]) => {
      if (!data.incidents.some(i => i.year <= prev) && data.incidents.some(i => i.year <= animationYear))
        newIds.add(id)
    })
    prevYearRef.current = animationYear
    if (newIds.size > 0) {
      setNewlyAdded(newIds)
      setTimeout(() => setNewlyAdded(new Set()), 800)
    }
  }, [animationYear, viewMode])

  useEffect(() => {
    if (!isPlaying) { clearInterval(intervalRef.current); return }
    intervalRef.current = setInterval(() => {
      setAnimationYear(prev => {
        if (prev >= MAX_YEAR) { setIsPlaying(false); return MAX_YEAR }
        return prev + 1
      })
    }, Math.round(120 / speed))
    return () => clearInterval(intervalRef.current)
  }, [isPlaying, speed])

  const handlePlay = useCallback(() => {
    if (viewMode !== 'timeline') {
      setViewMode('timeline'); setAnimationYear(MIN_YEAR); prevYearRef.current = MIN_YEAR
    } else if (animationYear >= MAX_YEAR) {
      setAnimationYear(MIN_YEAR); prevYearRef.current = MIN_YEAR
    }
    setIsPlaying(true)
  }, [viewMode, animationYear])

  const handlePause = useCallback(() => setIsPlaying(false), [])
  const handleReset = useCallback(() => {
    setIsPlaying(false); setAnimationYear(MIN_YEAR); prevYearRef.current = MIN_YEAR
  }, [])
  const handleShowAll = useCallback(() => { setIsPlaying(false); setViewMode('all') }, [])
  const handleYearChange = useCallback((year) => {
    prevYearRef.current = animationYear; setAnimationYear(year)
  }, [animationYear])

  const handleCountryHover = useCallback((data, pos) => {
    setHoveredCountry(data); setTooltipPos(pos)
  }, [])
  const handleCountryLeave = useCallback(() => setHoveredCountry(null), [])
  const handleCountryClick = useCallback((data) => {
    setDetailCountry(data)
    setHoveredCountry(null)
    // null closes the panel
  }, [])

  const handleFlagToggle = useCallback((key) => {
    if (key === null) { setSelectedPerps(new Set()); return }
    setSelectedPerps(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <h1 className="app-title">Empire's Reach</h1>
          <p className="app-subtitle">Foreign-backed coups, assassinations &amp; interventions · 1830–2026</p>
        </div>

        <div className="header-right">
          <div className="perp-block">
            <PerpFlags
              perpCounts={perpCounts}
              selectedPerps={selectedPerps}
              onToggle={handleFlagToggle}
            />
            <div className="stat stat-perp">
              <span className="stat-num">{perpNations}</span>
              <span className="stat-label">perpetrators</span>
            </div>
          </div>
          <div className="header-divider" />
          <div className="header-stats">
            <div className="stat">
              <span className="stat-num">{totalCountries}</span>
              <span className="stat-label">countries</span>
            </div>
            <div className="stat">
              <span className="stat-num">{totalIncidents}</span>
              <span className="stat-label">events</span>
            </div>
          </div>
        </div>
      </header>

      <main className="map-container">
        <WorldMap
          countryData={filteredCountryData}
          newlyAdded={newlyAdded}
          onCountryHover={handleCountryHover}
          onCountryLeave={handleCountryLeave}
          onCountryClick={handleCountryClick}
        />
        {hoveredCountry && !detailCountry && (
          <Tooltip country={hoveredCountry} position={tooltipPos} />
        )}
        {detailCountry && (
          <DetailPanel country={detailCountry} onClose={() => setDetailCountry(null)} />
        )}
      </main>

      <Timeline
        isPlaying={isPlaying}
        animationYear={animationYear}
        viewMode={viewMode}
        speed={speed}
        onPlay={handlePlay}
        onPause={handlePause}
        onReset={handleReset}
        onShowAll={handleShowAll}
        onYearChange={handleYearChange}
        onSpeedChange={setSpeed}
      />
    </div>
  )
}
