import { Link } from 'react-router-dom'
import './Days.css'

export default function Day12() {
  return (
    <div className="day-container" style={{ background: 'linear-gradient(135deg, #FFB6D9 0%, #FFC0CB 100%)' }}>
      <div className="day-content">
        <div className="day-header">
          <h1 className="day-number">Day 12</h1>
          <p className="day-subtitle">Feb 13 - The Final Day! 🌹 TOMORROW IS VALENTINE'S DAY!</p>
        </div>

        <div className="card" style={{ borderLeft: '5px solid #FF1493' }}>
          <h2>My beautiful Bubu 💑</h2>
          <p>This is it! Tomorrow is Valentine's Day... are you ready?</p>
          <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '15px' }}>One more night until I ask you the most important question... You're the angel who changed my life, who brightened everything, and who I want to annoy for the rest of my life! I love you infinitely! 💍</p>
          
          <div className="interactive-element">
            <div className="final-countdown">🌹</div>
            <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
              One more night until I ask you the most important question... 💍
            </p>
          </div>
        </div>

        <div className="navigation">
          <Link to="/day/11" className="btn btn-prev" style={{ background: '#9B59B6' }}>
            ← Previous
          </Link>
          <Link to="/valentine" className="btn btn-valentine" style={{ background: '#FF1493', fontSize: '18px', padding: '15px 30px' }}>
            Go to Valentine's Day 💕
          </Link>
        </div>
      </div>
    </div>
  )
}
