import { useState, useCallback } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

function getCountryColor(incidentCount, isHovered, isNew) {
  if (incidentCount === 0) return isHovered ? '#2d3a4a' : '#1e2a3a'
  if (isNew) return '#ff1744'
  const colors = ['#c62828', '#8b0000', '#5c0000']
  const base = colors[Math.min(incidentCount - 1, 2)]
  if (isHovered) return '#ef5350'
  return base
}

export default function WorldMap({ countryData, newlyAdded, onCountryHover, onCountryLeave }) {
  const [position, setPosition] = useState({ coordinates: [0, 20], zoom: 1 })

  const handleMove = useCallback((pos) => {
    if (pos.zoom >= 1) setPosition(pos)
  }, [])

  return (
    <div className="map-wrapper">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 140, center: [0, 20] }}
        style={{ width: '100%', height: '100%' }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMove}
          minZoom={1}
          maxZoom={8}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const id = String(geo.id)
                const data = countryData[id]
                const count = data ? data.incidents.length : 0
                const isNew = newlyAdded.has(id)

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={(e) => {
                      if (data) {
                        onCountryHover(data, { x: e.clientX, y: e.clientY })
                      }
                    }}
                    onMouseMove={(e) => {
                      if (data) {
                        onCountryHover(data, { x: e.clientX, y: e.clientY })
                      }
                    }}
                    onMouseLeave={onCountryLeave}
                    style={{
                      default: {
                        fill: getCountryColor(count, false, isNew),
                        stroke: '#0d1117',
                        strokeWidth: 0.5,
                        outline: 'none',
                        transition: 'fill 0.4s ease',
                      },
                      hover: {
                        fill: count > 0 ? '#ef5350' : '#2d3a4a',
                        stroke: count > 0 ? '#ff8a80' : '#3a4a5a',
                        strokeWidth: count > 0 ? 1 : 0.5,
                        outline: 'none',
                        cursor: count > 0 ? 'pointer' : 'default',
                        transition: 'fill 0.15s ease',
                      },
                      pressed: {
                        fill: '#ef5350',
                        outline: 'none',
                      },
                    }}
                  />
                )
              })
            }
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
        <div className="legend-hint">Scroll to zoom · Drag to pan</div>
      </div>
    </div>
  )
}
