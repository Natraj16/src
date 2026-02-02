import { Link } from 'react-router-dom'
import './Days.css'

export default function Day10() {
  return (
    <div className="day-container" style={{ background: 'linear-gradient(135deg, #FFB6D9 0%, #FFC0CB 100%)' }}>
      <div className="day-content">
        <div className="day-header">
          <h1 className="day-number">Day 10</h1>
          <p className="day-subtitle">Feb 11 - Cuddle Day 🛏️ | 3 Days Until 💕</p>
        </div>

        <div className="card" style={{ borderLeft: '5px solid #FF69B4' }}>
          <h2>My precious Bachha 💞</h2>
          <p>I can't imagine my life without you—you're my everything.</p>
          <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '15px' }}>You're my beginning, my middle, and my end. The angel who brightened my world completely. Spin this heart like my world spins around you! I'll annoy you, love you, and be with you forever! 🌍</p>
          
          <div className="interactive-element">
            <div className="spinning-heart">💞</div>
            <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
              Spin this heart like my world spins around you! 🌍
            </p>
          </div>
        </div>

        <div className="navigation">
          <Link to="/day/9" className="btn btn-prev" style={{ background: '#EE82EE' }}>
            ← Previous
          </Link>
          <Link to="/day/11" className="btn btn-next" style={{ background: '#9B59B6' }}>
            Next Day →
          </Link>
        </div>
      </div>
    </div>
  )
}
