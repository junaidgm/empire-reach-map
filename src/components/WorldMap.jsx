import React, { useState, useCallback } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from 'react-simple-maps'
import { geoCentroid } from 'd3-geo'
import { COUNTRY_NAMES } from '../data/countryNames'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

// Fallback coordinates for countries where geoCentroid may fail [lon, lat]
const FALLBACK_COORDS = {
  4: [67, 33],      // Afghanistan
  12: [2, 28],      // Algeria
  24: [-100, 37],   // Angola (check - might be wrong)
  32: [-63, -38],   // Argentina
  36: [133, -27],   // Australia
  40: [14, 48],     // Austria
  50: [90, 24],     // Bangladesh
  56: [4, 50],      // Belgium
  68: [-63, -17],   // Bolivia
  76: [-51, -10],   // Brazil
  124: [-106, 56],  // Canada
  156: [105, 35],   // China
  170: [-74, 4],    // Colombia
  180: [-24, -4],   // Congo
  192: [-77, 21],   // Cuba
  196: [33, 35],    // Cyprus
  203: [15, 49],    // Czech Republic
  218: [-77, -9],   // Ecuador
  222: [-89, 13],   // El Salvador
  231: [39, 10],    // Ethiopia
  250: [2, 46],     // France
  262: [42, 11],    // Djibouti
  268: [44, 42],    // Georgia
  276: [10, 51],    // Germany
  288: [-2, 7],     // Ghana
  300: [22, 39],    // Greece
  320: [-90, 15],   // Guatemala
  328: [-10, 10],   // Guinea
  340: [-86, 15],   // Honduras
  348: [19, 47],    // Hungary
  352: [-18, 65],   // Iceland
  356: [78, 20],    // India
  360: [113, -2],   // Indonesia
  364: [53, 32],    // Iran
  368: [44, 33],    // Iraq
  372: [-8, 53],    // Ireland
  376: [35, 31],    // Israel
  380: [12, 42],    // Italy
  384: [-5, 7],     // Côte d'Ivoire
  392: [138, 36],   // Japan
  400: [35, 31],    // Jordan
  404: [37, -1],    // Kenya
  408: [127, 40],   // North Korea
  410: [127, 37],   // South Korea
  414: [47, 29],    // Kuwait
  422: [35, 33],    // Lebanon
  426: [28, -30],   // Lesotho
  434: [17, 27],    // Libya
  450: [47, -20],   // Madagascar
  458: [102, 4],    // Malaysia
  466: [-8, 17],    // Mali
  484: [-102, 23],  // Mexico
  504: [-5, 32],    // Morocco
  508: [35, -19],   // Mozambique
  512: [55, 21],    // Oman
  516: [18, -22],   // Namibia
  524: [84, 28],    // Nepal
  528: [5, 52],     // Netherlands
  554: [174, -41],  // New Zealand
  558: [-86, 12],   // Nicaragua
  562: [2, 17],     // Niger
  566: [8, 9],      // Nigeria
  578: [8, 60],     // Norway
  586: [69, 30],    // Pakistan
  591: [-79, 9],    // Panama
  604: [-75, -12],  // Peru
  608: [121, 12],   // Philippines
  616: [19, 52],    // Poland
  620: [-8, 40],    // Portugal
  642: [25, 46],    // Romania
  643: [100, 60],   // Russia
  682: [45, 24],    // Saudi Arabia
  686: [-14, 14],   // Senegal
  688: [21, 44],    // Serbia
  704: [107, 16],   // Vietnam
  710: [22, -30],   // South Africa
  716: [30, -19],   // Zimbabwe
  724: [-4, 40],    // Spain
  728: [30, 4],     // South Sudan
  729: [30, 15],    // Sudan
  736: [30, 15],    // Sudan (alt code)
  740: [-56, -4],   // Suriname
  752: [15, 60],    // Sweden
  756: [8, 47],     // Switzerland
  760: [38, 35],    // Syria
  762: [71, 38],    // Tajikistan
  764: [101, 15],   // Thailand
  788: [9, 34],     // Tunisia
  792: [35, 39],    // Turkey
  800: [32, 1],     // Uganda
  804: [24, 48],    // Ukraine
  818: [31, 26],    // Egypt
  826: [-3, 54],    // United Kingdom
  840: [-95, 45],   // United States
  860: [64, 41],    // Uzbekistan
  862: [-66, 6],    // Venezuela
  887: [48, 15],    // Yemen
}

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

                  const countryName = COUNTRY_NAMES[parseInt(geo.id)] || COUNTRY_NAMES[geo.id] || `Country ${geo.id}`
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
                  const data = countryData[id]
                  const isHovered = hoveredGeoId === id
                  const name = COUNTRY_NAMES[parseInt(geo.id)]
                  if (!name) return null

                  // Show label if: has incidents (any zoom) OR hovered (any zoom) OR zoom >= 3
                  if (!data && !isHovered && zoom < 3) return null

                  // Get coordinates: try geoCentroid, fall back to hardcoded
                  let coords = geoCentroid(geo)
                  if (!coords || !Array.isArray(coords) || coords.some(isNaN)) {
                    coords = FALLBACK_COORDS[geo.id] || [0, 0]
                  }

                  return (
                    <Marker key={`lbl-${geo.id}`} coordinates={coords}>
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
