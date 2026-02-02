import { Link } from 'react-router-dom'
import './Days.css'

export default function Day3() {
  return (
    <div className="day-container" style={{ background: 'linear-gradient(135deg, #FFB6D9 0%, #FFB0CF 100%)' }}>
      <div className="day-content">
        <div className="day-header">
          <h1 className="day-number">Day 3</h1>
          <p className="day-subtitle">Feb 4 - Propose Day 💍 | 10 Days Until 💕</p>
        </div>

        <div className="card" style={{ borderLeft: '5px solid #FF6B9D' }}>
          <h2>Sweet Sugga 😊</h2>
          <p>Your smile makes everything better, even on my worst days.</p>
          <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '15px' }}>You're the brightness in my life. My guardian angel who came down to make me the happiest person alive. I'm never letting you go, and I'll be right here annoying you and loving you forever! 💕</p>
          
          <div className="interactive-element">
            <div className="smile-emoji">😊</div>
            <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
              Click the emoji and spread the joy! 🎉
            </p>
          </div>
        </div>

        <div className="navigation">
          <Link to="/day/2" className="btn btn-prev" style={{ background: '#FF6B9D' }}>
            ← Previous
          </Link>
          <Link to="/day/4" className="btn btn-next" style={{ background: '#FF1493' }}>
            Next Day →
          </Link>
        </div>
      </div>
    </div>
  )
}
