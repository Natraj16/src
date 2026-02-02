import { Link } from 'react-router-dom'
import './Days.css'

export default function Day7() {
  return (
    <div className="day-container" style={{ background: 'linear-gradient(135deg, #FFB6D9 0%, #FFB0CF 100%)' }}>
      <div className="day-content">
        <div className="day-header">
          <h1 className="day-number">Day 7</h1>
          <p className="day-subtitle">Feb 8 - Hug Day 🤗 | 6 Days Until 💕</p>
        </div>

        <div className="card" style={{ borderLeft: '5px solid #9B59B6' }}>
          <h2>Sweet Sona 👑</h2>
          <p>You're my favorite person, and you always will be.</p>
          <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '15px' }}>In a world full of people, you're my only choice. You changed my entire life and brighten every single day. I reign supreme in loving you, and I'll hug you with my love forever! ✨</p>
          
          <div className="interactive-element">
            <div className="crown-emoji">👑</div>
            <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
              You reign supreme in my heart! ✨
            </p>
          </div>
        </div>

        <div className="navigation">
          <Link to="/day/6" className="btn btn-prev" style={{ background: '#FF69B4' }}>
            ← Previous
          </Link>
          <Link to="/day/8" className="btn btn-next" style={{ background: '#9B59B6' }}>
            Next Day →
          </Link>
        </div>
      </div>
    </div>
  )
}
