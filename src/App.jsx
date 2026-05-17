import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import WorldMap from './components/WorldMap'
import Tooltip from './components/Tooltip'
import Timeline from './components/Timeline'
import { events } from './data/events'
import './App.css'

const MIN_YEAR = 1830
const MAX_YEAR = 2024

export default function App() {
  const [viewMode, setViewMode] = useState('all')
  const [animationYear, setAnimationYear] = useState(MIN_YEAR)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(2)
  const [hoveredCountry, setHoveredCountry] = useState(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const [newlyAdded, setNewlyAdded] = useState(new Set())
  const prevYearRef = useRef(MIN_YEAR)
  const intervalRef = useRef(null)

  const countryData = useMemo(() => {
    const cutoff = viewMode === 'timeline' ? animationYear : MAX_YEAR
    const result = {}
    Object.entries(events).forEach(([id, data]) => {
      const visible = data.incidents.filter(i => i.year <= cutoff)
      if (visible.length > 0) {
        result[id] = { ...data, incidents: visible }
      }
    })
    return result
  }, [viewMode, animationYear])

  // Track newly-appearing countries to flash them
  useEffect(() => {
    if (viewMode !== 'timeline') return
    const prev = prevYearRef.current
    const newIds = new Set()
    Object.entries(events).forEach(([id, data]) => {
      const wasVisible = data.incidents.some(i => i.year <= prev)
      const isVisible = data.incidents.some(i => i.year <= animationYear)
      if (!wasVisible && isVisible) newIds.add(id)
    })
    prevYearRef.current = animationYear
    if (newIds.size > 0) {
      setNewlyAdded(newIds)
      setTimeout(() => setNewlyAdded(new Set()), 800)
    }
  }, [animationYear, viewMode])

  useEffect(() => {
    if (!isPlaying) {
      clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setAnimationYear(prev => {
        if (prev >= MAX_YEAR) {
          setIsPlaying(false)
          return MAX_YEAR
        }
        return prev + 1
      })
    }, Math.round(120 / speed))
    return () => clearInterval(intervalRef.current)
  }, [isPlaying, speed])

  const handlePlay = useCallback(() => {
    if (viewMode !== 'timeline') {
      setViewMode('timeline')
      setAnimationYear(MIN_YEAR)
      prevYearRef.current = MIN_YEAR
    } else if (animationYear >= MAX_YEAR) {
      setAnimationYear(MIN_YEAR)
      prevYearRef.current = MIN_YEAR
    }
    setIsPlaying(true)
  }, [viewMode, animationYear])

  const handlePause = useCallback(() => setIsPlaying(false), [])

  const handleReset = useCallback(() => {
    setIsPlaying(false)
    setAnimationYear(MIN_YEAR)
    prevYearRef.current = MIN_YEAR
  }, [])

  const handleShowAll = useCallback(() => {
    setIsPlaying(false)
    setViewMode('all')
  }, [])

  const handleYearChange = useCallback((year) => {
    prevYearRef.current = animationYear
    setAnimationYear(year)
  }, [animationYear])

  const handleCountryHover = useCallback((data, pos) => {
    setHoveredCountry(data)
    setTooltipPos(pos)
  }, [])

  const handleCountryLeave = useCallback(() => {
    setHoveredCountry(null)
  }, [])

  const totalCountries = Object.keys(countryData).length
  const totalIncidents = Object.values(countryData).reduce((n, d) => n + d.incidents.length, 0)

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <h1 className="app-title">Empire's Reach</h1>
          <p className="app-subtitle">Foreign-backed coups, assassinations &amp; interventions · 1830–2024</p>
        </div>
        <div className="header-stats">
          <div className="stat">
            <span className="stat-num">{totalCountries}</span>
            <span className="stat-label">countries</span>
          </div>
          <div className="stat">
            <span className="stat-num">{totalIncidents}</span>
            <span className="stat-label">interventions</span>
          </div>
        </div>
      </header>

      <main className="map-container">
        <WorldMap
          countryData={countryData}
          newlyAdded={newlyAdded}
          onCountryHover={handleCountryHover}
          onCountryLeave={handleCountryLeave}
        />
        {hoveredCountry && (
          <Tooltip country={hoveredCountry} position={tooltipPos} />
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
