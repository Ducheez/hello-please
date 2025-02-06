import React from "react"
import { useState, useRef } from "react"
import IntroScreen from "./IntroScreen"
import ProposalScreen from "./ProposalScreen"
import FinalScreen from "./FinalScreen"
import PixelAvatar from "./PixelAvatar"

function GameScreen({ gameState, onStateChange }) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const noButtonRef = useRef(null)

  const moveNoButton = () => {
    if (noButtonRef.current) {
      const maxDistance = 1000
      const buttonRect = noButtonRef.current.getBoundingClientRect()
      const angle = Math.random() * 2 * Math.PI
      const distance = Math.random() * maxDistance

      let newX = Math.cos(angle) * distance
      let newY = Math.sin(angle) * distance

      // Ensure the button stays within the viewport
      if (buttonRect.left + newX < 0) newX = -buttonRect.left
      if (buttonRect.right + newX > window.innerWidth) newX = window.innerWidth - buttonRect.right
      if (buttonRect.top + newY < 0) newY = -buttonRect.top
      if (buttonRect.bottom + newY > window.innerHeight) newY = window.innerHeight - buttonRect.bottom

      setNoButtonPosition({ x: newX, y: newY })
    }
  }

  return (
    <div className="game-screen">
      {gameState === "intro" && <IntroScreen onNext={() => onStateChange("proposal")} />}
      {gameState === "proposal" && (
        <ProposalScreen
          noButtonPosition={noButtonPosition}
          onMoveNo={moveNoButton}
          onYes={() => onStateChange("final")}
          noButtonRef={noButtonRef}
        />
      )}
      {gameState === "final" && <FinalScreen />}
      <div className="fixed bottom-4 left-4">
        <PixelAvatar name="ivy" />
      </div>
      <div className="fixed bottom-4 right-4">
        <PixelAvatar name="darwin" />
      </div>
    </div>
  )
}

export default GameScreen

