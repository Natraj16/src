import { Link } from 'react-router-dom'
import './Days.css'

export default function Day4() {
  return (
    <div className="day-container" style={{ background: 'linear-gradient(135deg, #FFB6D9 0%, #FFC0CB 100%)' }}>
      <div className="day-content">
        <div className="day-header">
          <h1 className="day-number">Day 4</h1>
          <p className="day-subtitle">Feb 5 - Chocolate Day 🍫 | 9 Days Until 💕</p>
        </div>

        <div className="card" style={{ borderLeft: '5px solid #FF69B4' }}>
          <h2>My beautiful Bachha 💕</h2>
          <p>I love the way you laugh—it's the most beautiful music to my ears.</p>
          <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '15px' }}>You've transformed my life completely. Before you, I didn't know what true happiness was. Now I do—it's YOU. I'll annoy you with my love forever, and that's a promise! 🎵</p>
          
          <div className="interactive-element">
            <div className="bounce-emoji">😄</div>
            <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
              Make me laugh and watch it bounce! 🎵
            </p>
          </div>
        </div>

        <div className="navigation">
          <Link to="/day/3" className="btn btn-prev" style={{ background: '#FF6B9D' }}>
            ← Previous
          </Link>
          <Link to="/day/5" className="btn btn-next" style={{ background: '#FF1493' }}>
            Next Day →
          </Link>
        </div>
      </div>
    </div>
  )
}
