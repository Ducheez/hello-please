import React, { useState, useEffect, useRef } from "react";
import LoadingScreen from "./components/LoadingScreen";
import GameScreen from "./components/GameScreen";
import BounceTails from "./assets/BounceTails.mp3";
import MainMenu from "./assets/MainMenu.mp3";
import LevelComplete from "./assets/LevelComplete.mp3";
import "./App.css";

function App() {
  const [gameState, setGameState] = useState("loading");
  const [loadingProgress, setLoadingProgress] = useState(0);
  const backgroundMusicRef = useRef(null);
  const loadingSoundRef = useRef(null);
  const successSoundRef = useRef(null);

  useEffect(() => {
    // Load background music
    backgroundMusicRef.current = new Audio(BounceTails);
    backgroundMusicRef.current.loop = true;
    backgroundMusicRef.current.volume = 0.5;
    
    // Load loading screen sound
    loadingSoundRef.current = new Audio(MainMenu);
    loadingSoundRef.current.volume = 0.0;

    // Load success sound
    successSoundRef.current = new Audio(LevelComplete);
    successSoundRef.current.volume = 1.0;
    
    // Start background music on user interaction (to prevent autoplay restrictions)
    const playBackgroundMusic = () => {
      backgroundMusicRef.current.play().catch(err => console.error("Autoplay blocked:", err));
      document.removeEventListener("click", playBackgroundMusic);
    };
    document.addEventListener("click", playBackgroundMusic);

    // Start loading sound
    loadingSoundRef.current.play();
    
    const interval = setInterval(() => {
      setLoadingProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setGameState("intro"), 500);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleYesClick = () => {
    successSoundRef.current.play();
    setGameState("final");
  };

  return (
    <div className="App">
      <div className="pixel-clouds" />
      {gameState === "loading" ? (
        <LoadingScreen progress={loadingProgress} />
      ) : (
        <GameScreen gameState={gameState} onStateChange={setGameState} onYesClick={handleYesClick} />
      )}
    </div>
  );
}

export default App;
