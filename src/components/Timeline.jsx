const MIN_YEAR = 1850
const MAX_YEAR = 2024

export default function Timeline({
  isPlaying, animationYear, viewMode,
  onPlay, onPause, onReset, onShowAll, onYearChange, speed, onSpeedChange
}) {
  const progress = ((animationYear - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100

  return (
    <div className="timeline-bar">
      <div className="timeline-top">
        <div className="timeline-controls">
          {viewMode === 'timeline' ? (
            <>
              {isPlaying ? (
                <button className="ctrl-btn" onClick={onPause} title="Pause">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
                  </svg>
                </button>
              ) : (
                <button className="ctrl-btn" onClick={onPlay} title="Play">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21"/>
                  </svg>
                </button>
              )}
              <button className="ctrl-btn secondary" onClick={onReset} title="Restart">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                </svg>
              </button>
              <button className="ctrl-btn secondary" onClick={onShowAll} title="Show all">
                Show All
              </button>
            </>
          ) : (
            <button className="ctrl-btn primary" onClick={onPlay} title="Play timeline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
              View Timeline
            </button>
          )}
        </div>

        {viewMode === 'timeline' && (
          <div className="year-display">{animationYear}</div>
        )}

        <div className="speed-controls">
          <span className="speed-label">Speed</span>
          {[1, 2, 5, 10].map(s => (
            <button
              key={s}
              className={`speed-btn ${speed === s ? 'active' : ''}`}
              onClick={() => onSpeedChange(s)}
            >
              {s}×
            </button>
          ))}
        </div>
      </div>

      {viewMode === 'timeline' && (
        <div className="timeline-scrubber">
          <span className="scrub-year">{MIN_YEAR}</span>
          <div className="scrub-track">
            <div className="scrub-fill" style={{ width: `${progress}%` }} />
            <input
              type="range"
              min={MIN_YEAR}
              max={MAX_YEAR}
              value={animationYear}
              onChange={e => onYearChange(Number(e.target.value))}
              className="scrub-input"
            />
          </div>
          <span className="scrub-year">{MAX_YEAR}</span>
        </div>
      )}

      {viewMode !== 'timeline' && (
        <div className="timeline-hint">
          Showing all documented interventions 1830–2024. Click "View Timeline" to animate chronologically.
        </div>
      )}
    </div>
  )
}
