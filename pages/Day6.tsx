import { Link } from 'react-router-dom'
import './Days.css'

export default function Day6() {
  return (
    <div className="day-container" style={{ background: 'linear-gradient(135deg, #FFB6D9 0%, #FFC0CB 100%)' }}>
      <div className="day-content">
        <div className="day-header">
          <h1 className="day-number">Day 6</h1>
          <p className="day-subtitle">Feb 7 - Promise Day 🤝 | 7 Days Until 💕</p>
        </div>

        <div className="card" style={{ borderLeft: '5px solid #FF69B4' }}>
          <h2>My lovely Bubu 🏠</h2>
          <p>Being with you feels like home, because YOU are my home.</p>
          <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '15px' }}>You're my safe place, my comfort, my reason for everything. Since you came into my life, it's been brighter, warmer, and more beautiful. You're my angel, and I promise I'm here for you always—even to annoy you forever! 💕</p>
          
          <div className="interactive-element">
            <div className="home-icon">🏠</div>
            <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
              Build our love story together! 💑
            </p>
          </div>
        </div>

        <div className="navigation">
          <Link to="/day/5" className="btn btn-prev" style={{ background: '#EE82EE' }}>
            ← Previous
          </Link>
          <Link to="/day/7" className="btn btn-next" style={{ background: '#FF1493' }}>
            Next Day →
          </Link>
        </div>
      </div>
    </div>
  )
}
