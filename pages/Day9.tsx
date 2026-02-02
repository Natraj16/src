import { Link } from 'react-router-dom'
import './Days.css'

export default function Day9() {
  return (
    <div className="day-container" style={{ background: 'linear-gradient(135deg, #FFB6D9 0%, #FFB0CF 100%)' }}>
      <div className="day-content">
        <div className="day-header">
          <h1 className="day-number">Day 9</h1>
          <p className="day-subtitle">Feb 10 - Confession Day 💭 | 4 Days Until 💕</p>
        </div>

        <div className="card" style={{ borderLeft: '5px solid #EE82EE' }}>
          <h2>My darling Sugga 🔒</h2>
          <p>Forever with you feels right, and I want to tell you something...</p>
          <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '15px' }}>You're not just my love, you're my future, my angel, my everything. My heart is locked to yours forever. I'm here for you always, every day, forever and even after that. I love you infinitely! 💕</p>
          
          <div className="interactive-element">
            <div className="lock-emoji">🔒</div>
            <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
              My heart is locked to yours forever! 💕
            </p>
          </div>
        </div>

        <div className="navigation">
          <Link to="/day/8" className="btn btn-prev" style={{ background: '#FF69B4' }}>
            ← Previous
          </Link>
          <Link to="/day/10" className="btn btn-next" style={{ background: '#FF1493' }}>
            Next Day →
          </Link>
        </div>
      </div>
    </div>
  )
}
