import React from "react"
function FinalScreen() {
    return (
      <div className="final-screen">
        <h1 className="pixel-text text-4xl text-pink-400">Yay! You said YES!</h1>
        <p className="pixel-text text-2xl text-white">I'm so excited to be your Valentine!</p>
        <div className="heart-explosion">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixel%20Heart%20Animation%2016x16-MkX54haQRUHQPJCQJScNs6csRcg9QP.gif"
            alt="Heart Explosion"
            className="exploding-heart"
          />
        </div>
        <div>
          <img src="/Pussy.gif" alt="Cat On Rainbow" className="cat-rainbow" />
        </div>
        <div className="floating-hearts">
          {[...Array(3)].map((_, i) => (
            <img
              key={i}
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Heart-ncNA37P7vH0V8uo9baix2DVE5FqRLr.png"
              alt=""
              className={`floating-heart heart-${i + 1}`}
            />
          ))}
        </div>
      </div>
    )
  }
  
  export default FinalScreen
  
  