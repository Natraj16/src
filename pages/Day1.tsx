import { Link } from 'react-router-dom'
import './Days.css'

export default function Day1() {
  return (
    <div className="day-container" style={{ background: 'linear-gradient(135deg, #FFB6D9 0%, #FFC0CB 100%)' }}>
      <div className="day-content">
        <div className="day-header">
          <h1 className="day-number">Day 1</h1>
          <p className="day-subtitle">Feb 2 - The Beginning 💕 | 12 Days Until Valentine's!</p>
        </div>

        <div className="card">
          <div className="heart-animation">💕</div>
          <h2>My dearest Sona 💕</h2>
          <p>I can't wait to spend Valentine's Day with you, my beautiful angel who changed my entire life.</p>
          <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '15px' }}>Since you came into my life, everything became brighter. You're the reason I smile, the reason my heart beats faster, and the light that guides me through everything. I promise I'll be here for you always—annoying you every single day! ✨</p>
          
          <div className="interactive-element">
            <div className="floating-heart">💗</div>
            <div className="floating-heart">💖</div>
            <div className="floating-heart">💝</div>
          </div>
        </div>

        <div className="navigation">
          <Link to="/day/2" className="btn btn-next" style={{ background: '#FF69B4' }}>
            Next Day →
          </Link>
          <Link to="/valentine" className="btn btn-valentine" style={{ background: '#9B59B6' }}>
            Jump to Valentine 💕
          </Link>
        </div>
      </div>
    </div>
  )
}
