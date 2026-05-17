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

export default function WorldMap({ countryData, newlyAdded, onCountryHover, onCountryLeave }) {
  const [position, setPosition] = useState({ coordinates: [0, 20], zoom: 1 })
  const [hoveredGeoId, setHoveredGeoId] = useState(null)

  const handleMove = useCallback((pos) => {
    if (pos.zoom >= 1) setPosition(pos)
  }, [])

  const { zoom } = position
  // labels appear when zoom ≥ 3 (faded) or on hover (full opacity for any country)
  const labelThreshold = 3

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
                {/* Layer 1: country shapes */}
                {geographies.map((geo) => {
                  const id = String(geo.id)
                  const data = countryData[id]
                  const count = data ? data.incidents.length : 0
                  const isNew = newlyAdded.has(id)

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={(e) => {
                        setHoveredGeoId(id)
                        if (data) onCountryHover(data, { x: e.clientX, y: e.clientY })
                      }}
                      onMouseMove={(e) => {
                        if (data) onCountryHover(data, { x: e.clientX, y: e.clientY })
                      }}
                      onMouseLeave={() => {
                        setHoveredGeoId(null)
                        onCountryLeave()
                      }}
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
                          cursor: 'pointer',
                          transition: 'fill 0.15s ease',
                        },
                        pressed: { fill: '#ef5350', outline: 'none' },
                      }}
                    />
                  )
                })}

                {/* Layer 2: country name labels */}
                {geographies.map((geo) => {
                  const id = String(geo.id)
                  const isHovered = hoveredGeoId === id
                  const showFaded = zoom >= labelThreshold
                  if (!isHovered && !showFaded) return null

                  const name = COUNTRY_NAMES[geo.id]
                  if (!name) return null

                  const centroid = geoCentroid(geo)
                  // inverse-scale font so it stays readable regardless of zoom
                  const fontSize = Math.max(1.8, 7 / zoom)
                  const fill = isHovered
                    ? '#ffffff'
                    : 'rgba(180, 210, 235, 0.38)'
                  const fontWeight = isHovered ? '700' : '400'

                  return (
                    <Marker key={`lbl-${geo.id}`} coordinates={centroid}>
                      <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={fontSize}
                        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                        fontWeight={fontWeight}
                        fill={fill}
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
        <div className="legend-item">
          <span className="legend-dot" style={{ background: '#c62828' }} />
          <span>1 intervention</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ background: '#8b0000' }} />
          <span>2 interventions</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ background: '#5c0000' }} />
          <span>3+ interventions</span>
        </div>
        <div className="legend-hint">Scroll to zoom · Drag to pan · Zoom 3× for labels</div>
      </div>
    </div>
  )
}
