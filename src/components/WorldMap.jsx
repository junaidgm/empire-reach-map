import React, { useState, useCallback } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from 'react-simple-maps'
import { geoCentroid } from 'd3-geo'
import { COUNTRY_NAMES } from '../data/countryNames'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

function getCountryColor(count, isNew) {
  if (count === 0) return '#1e2a3a'
  if (isNew) return '#ff1744'
  return ['#c62828', '#8b0000', '#5c0000'][Math.min(count - 1, 2)]
}

export default function WorldMap({ countryData, newlyAdded, onCountryHover, onCountryLeave, onCountryClick }) {
  const [position, setPosition] = useState({ coordinates: [0, 20], zoom: 1 })
  const [hoveredGeoId, setHoveredGeoId] = useState(null)

  const handleMove = useCallback((pos) => {
    if (pos.zoom >= 1) setPosition(pos)
  }, [])

  const { zoom } = position

  return (
    <div className="map-wrapper">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 140, center: [0, 20] }}
        style={{ width: '100%', height: '100%' }}
      >
        <ZoomableGroup
          zoom={zoom}
          center={position.coordinates}
          onMoveEnd={handleMove}
          minZoom={1}
          maxZoom={8}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) => (
              <>
                {/* Layer 1: shapes */}
                {geographies.map((geo) => {
                  const id = String(geo.id)
                  const data = countryData[id]
                  const count = data ? data.incidents.length : 0
                  const isNew = newlyAdded.has(id)

                  const countryName = COUNTRY_NAMES[geo.id] || `Country ${geo.id}`
                  const handleMouseEnter = (e) => {
                    setHoveredGeoId(id)
                    if (data) onCountryHover(data, { x: e.clientX, y: e.clientY })
                  }
                  const handleMouseMove = (e) => {
                    if (data) onCountryHover(data, { x: e.clientX, y: e.clientY })
                  }
                  const handleMouseLeave = () => {
                    setHoveredGeoId(null)
                    onCountryLeave()
                  }
                  const handleClick = () => {
                    if (data) {
                      onCountryClick(data)
                    } else {
                      onCountryClick(null)
                    }
                  }

                  return (
                    <g key={geo.rsmKey} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                      <title>{countryName}</title>
                      <Geography
                        geography={geo}
                        style={{
                          default: {
                            fill: getCountryColor(count, isNew),
                            stroke: '#0d1117',
                            strokeWidth: 0.5,
                            outline: 'none',
                            transition: 'fill 0.4s ease',
                          },
                          hover: {
                            fill: count > 0 ? '#ef5350' : '#2d3a4a',
                            stroke: count > 0 ? '#ff8a80' : '#3d4e60',
                            strokeWidth: count > 0 ? 1 : 0.6,
                            outline: 'none',
                            cursor: count > 0 ? 'pointer' : 'default',
                            transition: 'fill 0.15s ease',
                          },
                          pressed: { fill: '#ef5350', outline: 'none' },
                        }}
                      />
                    </g>
                  )
                })}

                {/* Layer 2: name labels */}
                {geographies.map((geo) => {
                  const id = String(geo.id)
                  const isHovered = hoveredGeoId === id
                  const name = COUNTRY_NAMES[geo.id]
                  if (!name) return null

                  // Show label if: hovered (any zoom) OR zoom >= 3
                  if (!isHovered && zoom < 3) return null

                  return (
                    <Marker key={`lbl-${geo.id}`} coordinates={geoCentroid(geo)}>
                      <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={isHovered ? Math.max(2.2, 9 / zoom) : Math.max(1.5, 6 / zoom)}
                        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                        fontWeight={isHovered ? '700' : zoom >= 3 ? '500' : '400'}
                        fill={isHovered ? '#ffffff' : zoom >= 3 ? 'rgba(200,220,240,0.6)' : 'rgba(180,210,235,0.38)'}
                        style={{ pointerEvents: 'none', userSelect: 'none' }}
                      >
                        {name}
                      </text>
                    </Marker>
                  )
                })}
              </>
            )}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      <div className="map-legend">
        <div className="legend-item"><span className="legend-dot" style={{ background: '#c62828' }} /><span>1 event</span></div>
        <div className="legend-item"><span className="legend-dot" style={{ background: '#8b0000' }} /><span>2 events</span></div>
        <div className="legend-item"><span className="legend-dot" style={{ background: '#5c0000' }} /><span>3+ events</span></div>
        <div className="legend-hint">Scroll to zoom · Drag to pan · Zoom 3× for labels</div>
      </div>
    </div>
  )
}
