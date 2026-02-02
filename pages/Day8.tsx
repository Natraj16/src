import { Link } from 'react-router-dom'
import './Days.css'

export default function Day8() {
  return (
    <div className="day-container" style={{ background: 'linear-gradient(135deg, #FFB6D9 0%, #FFC0CB 100%)' }}>
      <div className="day-content">
        <div className="day-header">
          <h1 className="day-number">Day 8</h1>
          <p className="day-subtitle">Feb 9 - Kiss Day 😘 | 5 Days Until 💕</p>
        </div>

        <div className="card" style={{ borderLeft: '5px solid #FF69B4' }}>
          <h2>Beautiful Chunnu 🌸</h2>
          <p>I love all the little things about you that make you, YOU.</p>
          <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '15px' }}>From your laugh to your little quirks—everything is perfect. You're the angel who completely transformed my life and made it extraordinary. Discover all the beautiful things I love about you! 💐</p>
          
          <div className="interactive-element">
            <div className="flower-emoji">🌸</div>
            <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
              Discover all the beautiful things I love about you! 💐
            </p>
          </div>
        </div>

        <div className="navigation">
          <Link to="/day/7" className="btn btn-prev" style={{ background: '#9B59B6' }}>
            ← Previous
          </Link>
          <Link to="/day/9" className="btn btn-next" style={{ background: '#FF1493' }}>
            Next Day →
          </Link>
        </div>
      </div>
    </div>
  )
}
