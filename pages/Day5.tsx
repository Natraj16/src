import { Link } from 'react-router-dom'
import './Days.css'

export default function Day5() {
  return (
    <div className="day-container" style={{ background: 'linear-gradient(135deg, #FFB6D9 0%, #FFB0CF 100%)' }}>
      <div className="day-content">
        <div className="day-header">
          <h1 className="day-number">Day 5</h1>
          <p className="day-subtitle">Feb 6 - Teddy Day 🧸 | 8 Days Until 💕</p>
        </div>

        <div className="card" style={{ borderLeft: '5px solid #EE82EE' }}>
          <h2>My precious Cutu 💓</h2>
          <p>You make my heart skip a beat every single time I see you.</p>
          <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '15px' }}>My heart knows you're home. You're the angel who enlightened my life and made everything beautiful. I'm promising you right now—I'll always be here for you, annoying you while doing it! Forever yours. 💕</p>
          
          <div className="interactive-element">
            <div className="heartbeat">💓</div>
            <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
              Can you feel my heart beating for you? 💕
            </p>
          </div>
        </div>

        <div className="navigation">
          <Link to="/day/4" className="btn btn-prev" style={{ background: '#FF69B4' }}>
            ← Previous
          </Link>
          <Link to="/day/6" className="btn btn-next" style={{ background: '#FF1493' }}>
            Next Day →
          </Link>
        </div>
      </div>
    </div>
  )
}
