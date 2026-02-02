import { useState } from 'react'
import './Valentine.css'

export default function Valentine() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [clicks, setClicks] = useState(0)
  const [yesClicked, setYesClicked] = useState(false)

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 300
    const randomY = (Math.random() - 0.5) * 300
    setNoButtonPosition({ x: randomX, y: randomY })
  }

  const handleYesClick = () => {
    setYesClicked(true)
    setClicks(clicks + 1)
  }

  return (
    <div className="valentine-container">
      <div className="valentine-content">
        {!yesClicked ? (
          <>
            <div className="valentine-header">
              <h1>Happy Valentine's Day! 💕</h1>
              <p className="subtitle">Will you be my Valentine?</p>
            </div>

            <div className="hearts-background">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="floating-heart-bg">
                  {['💕', '💖', '💝', '💗', '❤️'][Math.floor(Math.random() * 5)]}
                </div>
              ))}
            </div>

            <div className="buttons-container">
              <button
                className="btn-yes"
                onClick={handleYesClick}
              >
                YES! 💕
              </button>

              <button
                className="btn-no"
                onMouseEnter={handleNoHover}
                style={{
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                NO 😔
              </button>
            </div>

            <p className="teasing-text">
              {clicks > 0 && `You tried to click "No" ${clicks} times! 😄`}
              {clicks === 0 && "Try clicking the 'No' button... if you can catch it! 😉"}
            </p>
          </>
        ) : (
          <div className="celebration">
            <div className="confetti-burst">
              {[...Array(50)].map((_, i) => (
                <div key={i} className="confetti">
                  {['🎉', '✨', '💕', '🌹', '💑', '🎊'][Math.floor(Math.random() * 6)]}
                </div>
              ))}
            </div>
            <h2 className="celebration-text">🎉 YES! I LOVE YOU! 🎉</h2>
            <div className="celebration-emoji">💑💕</div>
            <p className="message">
              I knew you'd say YES! You're my angel, my light, my everything!
              <br />
              <br />
              You changed my life completely since you came into it. You brighten every single day of my life and you're the reason I smile. 
              <br />
              <br />
              I promise you—I'm here for you always, I'll annoy you my whole life, and even after that!
              <br />
              <br />
              Happy Valentine's Day, my beautiful Sona! 💕 Forever yours! ❤️
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
