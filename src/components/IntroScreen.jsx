import React from "react"
function IntroScreen({ onNext }) {
    return (
      <div className="intro-screen">
        <h1 className="pixel-text text-4xl text-pink-400 mb-8">Hey Shanice, ready for a surprise?</h1>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/heart-spin-0KvW5Y8LEZGBlOt6pS09nRglwZWixG.gif"
          alt="Bouncing Heart"
          className="bouncing-heart"
        />
        <button onClick={onNext} className="pixel-button">
          <span className="pixel-text">Press Start!</span>
        </button>
      </div>
    )
  }
  
  export default IntroScreen
  
  