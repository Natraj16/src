import { Link } from 'react-router-dom'
import './Days.css'

export default function Day11() {
  return (
    <div className="day-container" style={{ background: 'linear-gradient(135deg, #FFB6D9 0%, #FFB0CF 100%)' }}>
      <div className="day-content">
        <div className="day-header">
          <h1 className="day-number">Day 11</h1>
          <p className="day-subtitle">Feb 12 - Last Day Before 💕 | 2 Days Until!</p>
        </div>

        <div className="card" style={{ borderLeft: '5px solid #9B59B6' }}>
          <h2>My angel Cutu 🎉</h2>
          <p>Tomorrow is the day... I have something special planned just for you.</p>
          <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '15px' }}>You came into my life and changed everything. Every moment with you is pure magic. Get ready for the most special Valentine's Day ever! I'll spend it loving you, annoying you, and cherishing you forever! 🌹</p>
          
          <div className="interactive-element">
            <div className="confetti-animation">🎉✨💕🎊</div>
            <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
              Get ready for the most special day! 🌹
            </p>
          </div>
        </div>

        <div className="navigation">
          <Link to="/day/10" className="btn btn-prev" style={{ background: '#FF69B4' }}>
            ← Previous
          </Link>
          <Link to="/day/12" className="btn btn-next" style={{ background: '#FF1493' }}>
            Last Day →
          </Link>
        </div>
      </div>
    </div>
  )
}
