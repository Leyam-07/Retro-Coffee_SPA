import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, PixelBorder } from "../components";

const NotFound = () => {
  const [score, setScore] = useState(0);
  const [blink, setBlink] = useState(true);
  const [particles, setParticles] = useState([]);

  // Animated score counter
  useEffect(() => {
    const timer = setInterval(() => {
      setScore((prev) => {
        if (prev < 404) {
          return prev + Math.floor(Math.random() * 50) + 10;
        }
        return 404;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Blinking effect
  useEffect(() => {
    const timer = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearInterval(timer);
  }, []);

  // Generate particles
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="not-found-page">
      {/* Floating particles */}
      <div className="particle-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.speed}s`,
            }}
          />
        ))}
      </div>

      <div className="container py-5">
        <div className="game-over-container">
          {/* Pixel art skull */}
          <div className="pixel-skull mb-4">
            <div className="skull-row">
              <span></span>
              <span></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span></span>
              <span></span>
            </div>
            <div className="skull-row">
              <span></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span></span>
            </div>
            <div className="skull-row">
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="eye"></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="eye"></span>
              <span className="filled"></span>
              <span className="filled"></span>
            </div>
            <div className="skull-row">
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="filled"></span>
            </div>
            <div className="skull-row">
              <span className="filled"></span>
              <span className="filled"></span>
              <span></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span></span>
              <span className="filled"></span>
              <span className="filled"></span>
            </div>
            <div className="skull-row">
              <span></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span className="filled"></span>
              <span></span>
            </div>
            <div className="skull-row">
              <span></span>
              <span></span>
              <span className="teeth"></span>
              <span className="teeth"></span>
              <span className="teeth"></span>
              <span className="teeth"></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Game Over Title */}
          <h1 className="game-over-title mb-4">
            <span className="game-text">GAME</span>
            <span className="over-text">OVER</span>
          </h1>

          {/* Score Display */}
          <div className="score-display mb-4">
            <PixelBorder color="red">
              <div className="score-content">
                <div className="score-label">ERROR SCORE</div>
                <div className="score-value">
                  {score.toString().padStart(3, "0")}
                </div>
              </div>
            </PixelBorder>
          </div>

          {/* Error Message */}
          <div className="error-message mb-5">
            <p className="mb-3">
              <span className="error-code">404</span> - Page Not Found
            </p>
            <p className={`blink-text ${blink ? "" : "hidden"}`}>
              The page you're looking for doesn't exist in this dimension
            </p>
          </div>

          {/* Retro Terminal */}
          <div className="retro-terminal mb-5">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">system.error</span>
            </div>
            <div className="terminal-body">
              <p>&gt; Searching for page...</p>
              <p>&gt; ERROR: Resource not found</p>
              <p>&gt; Attempting recovery...</p>
              <p>&gt; FAILED</p>
              <p className={`terminal-cursor ${blink ? "" : "hidden"}`}>
                &gt; _
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <Link to="/">
              <Button variant="primary" className="mx-2">
                <span className="pixel-icon">🏠</span> Return to Home
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="success" className="mx-2">
                <span className="pixel-icon">☕</span> View Menu
              </Button>
            </Link>
          </div>

          {/* Insert Coin */}
          <div className="insert-coin mt-5">
            <p className={`coin-text ${blink ? "" : "hidden"}`}>
              INSERT COIN TO CONTINUE
            </p>
            <div className="coin-slot">
              <div className="coin"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
