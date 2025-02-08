import React from "react"
function LoadingScreen({ progress }) {
    return (
      <div className="loading-screen">
        <h1 className="pixel-text text-4xl text-pink-400 mb-8">Loading Vanessa's Love Quest...</h1>
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="pixel-text text-white mt-4 text-sm">{progress}% Loaded</p>
      </div>
    )
  }
  
  export default LoadingScreen
  
  