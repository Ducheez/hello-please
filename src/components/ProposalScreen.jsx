import React from "react"
function ProposalScreen({ noButtonPosition, onMoveNo, onYes, noButtonRef }) {
    return (
      <div className="proposal-screen">
        <h2 className="pixel-text text-3xl text-pink-400 mb-8">Look, I could hire a skywriter, release 100 balloons, or train a parrot to ask you… but let’s keep it simple...</h2>
        <div className="heart-container">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gif-30UAvQxRrufuGgJk37HxSyDLmsVydg.gif"
            alt="Pixel Heart"
            className="pixel-heart"
          />
        </div>
        <h1 className="pixel-text text-4xl text-white mb-12">Will you be my Valentine?</h1>
        <div className="button-container">
          <button onClick={onYes} className="pixel-button yes-button">
            <span className="pixel-text">YES!</span>
          </button>
          <button
            ref={noButtonRef}
            className="pixel-button no-button"
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
            }}
            onMouseEnter={onMoveNo}
            onClick={onMoveNo}
          >
            <span className="pixel-text">No, thanks!</span>
          </button>
        </div>
      </div>
    )
  }
  
  export default ProposalScreen
  
  