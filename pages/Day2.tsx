import { Link } from 'react-router-dom'
import './Days.css'

export default function Day2() {
  return (
    <div className="day-container" style={{ background: 'linear-gradient(135deg, #FFB6D9 0%, #FFC0CB 100%)' }}>
      <div className="day-content">
        <div className="day-header">
          <h1 className="day-number">Day 2</h1>
          <p className="day-subtitle">Feb 3 - Rose Day 🌹 | 11 Days Until 💕</p>
        </div>

        <div className="card" style={{ borderLeft: '5px solid #FF1493' }}>
          <h2>Hey Chunnu ✨</h2>
          <p>You light up my world in ways I never thought possible.</p>
          <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '15px' }}>Before you, my life was just existing. Now it's LIVING. You're my angel, my light, my everything. I promise to always be here for you, making you laugh (and annoying you) every single day! 🌹</p>
          
          <div className="interactive-element">
            <div className="pulse-text">✨ ✨ ✨</div>
            <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
              Hover over the stars and feel the magic! ✨
            </p>
          </div>
        </div>

        <div className="navigation">
          <Link to="/day/1" className="btn btn-prev" style={{ background: '#FF69B4' }}>
            ← Previous
          </Link>
          <Link to="/day/3" className="btn btn-next" style={{ background: '#FF1493' }}>
            Next Day →
          </Link>
        </div>
      </div>
    </div>
  )
}
