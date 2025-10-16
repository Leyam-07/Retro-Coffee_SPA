import React, { useState } from "react";
import { Card, PixelBorder, Button } from "../components";

const Rewards = () => {
  const [currentLevel, setCurrentLevel] = useState(2);
  const [currentPoints, setCurrentPoints] = useState(750);
  const [totalPoints, setTotalPoints] = useState(2450);

  const levels = [
    { level: 1, name: "Coffee Noob", minPoints: 0, color: "green" },
    { level: 2, name: "Bean Hunter", minPoints: 500, color: "blue" },
    { level: 3, name: "Brew Master", minPoints: 1000, color: "purple" },
    { level: 4, name: "Caffeine Legend", minPoints: 2000, color: "yellow" },
    { level: 5, name: "Coffee God", minPoints: 5000, color: "red" },
  ];

  const achievements = [
    {
      id: 1,
      name: "First Sip",
      description: "Make your first purchase",
      icon: "🏆",
      unlocked: true,
      points: 50,
    },
    {
      id: 2,
      name: "Regular Customer",
      description: "Visit 5 times in a month",
      icon: "⭐",
      unlocked: true,
      points: 100,
    },
    {
      id: 3,
      name: "Early Bird",
      description: "Order before 8 AM",
      icon: "🌅",
      unlocked: true,
      points: 75,
    },
    {
      id: 4,
      name: "Adventurer",
      description: "Try 10 different menu items",
      icon: "🗺️",
      unlocked: false,
      points: 150,
    },
    {
      id: 5,
      name: "Social Butterfly",
      description: "Bring 3 friends",
      icon: "🦋",
      unlocked: false,
      points: 200,
    },
    {
      id: 6,
      name: "Coffee Connoisseur",
      description: "Try all coffee blends",
      icon: "☕",
      unlocked: false,
      points: 300,
    },
    {
      id: 7,
      name: "Loyalty Champion",
      description: "Reach 1000 points",
      icon: "👑",
      unlocked: false,
      points: 500,
    },
    {
      id: 8,
      name: "Retro Master",
      description: "Complete the arcade challenge",
      icon: "🎮",
      unlocked: false,
      points: 1000,
    },
  ];

  const rewards = [
    {
      id: 1,
      name: "Free Coffee",
      description: "Any size, any flavor",
      cost: 500,
      icon: "☕",
    },
    {
      id: 2,
      name: "Pastry Combo",
      description: "Coffee + any pastry",
      cost: 750,
      icon: "🥐",
    },
    {
      id: 3,
      name: "Retro Mug",
      description: "Limited edition pixel mug",
      cost: 1000,
      icon: "🏺",
    },
    {
      id: 4,
      name: "VIP Day Pass",
      description: "All drinks 50% off for a day",
      cost: 1500,
      icon: "🎫",
    },
    {
      id: 5,
      name: "Coffee Subscription",
      description: "1 free coffee daily for a week",
      cost: 2000,
      icon: "📅",
    },
    {
      id: 6,
      name: "Ultimate Bundle",
      description: "T-shirt + mug + 5 free coffees",
      cost: 3000,
      icon: "🎁",
    },
  ];

  const getCurrentLevel = () => {
    return levels.find(
      (l) =>
        l.minPoints <= totalPoints &&
        (levels[l.level] === undefined ||
          levels[l.level].minPoints > totalPoints)
    );
  };

  const getNextLevel = () => {
    const current = getCurrentLevel();
    return levels.find((l) => l.level === current.level + 1);
  };

  const getProgressPercentage = () => {
    const current = getCurrentLevel();
    const next = getNextLevel();
    if (!next) return 100;

    const currentLevelPoints = totalPoints - current.minPoints;
    const pointsNeeded = next.minPoints - current.minPoints;
    return Math.floor((currentLevelPoints / pointsNeeded) * 100);
  };

  return (
    <div className="page-rewards">
      {/* Hero Section */}
      <section className="rewards-hero">
        <PixelBorder color="yellow">
          <h1>RETRO REWARDS</h1>
          <p className="subtitle">Level Up Your Coffee Experience!</p>
        </PixelBorder>
      </section>

      {/* Player Status */}
      <section className="player-status">
        <div className="container">
          <Card variant="highlight">
            <div className="status-header">
              <h2>Player Status</h2>
            </div>
            <div className="status-content">
              <div className="level-info">
                <div className="current-level">
                  <span className="level-label">Current Level</span>
                  <div className="level-display">
                    <span className="level-number">{currentLevel}</span>
                    <span className="level-name">{getCurrentLevel().name}</span>
                  </div>
                </div>
                <div className="points-info">
                  <div className="points-row">
                    <span className="points-label">Available Points:</span>
                    <span className="points-value">{currentPoints}</span>
                  </div>
                  <div className="points-row">
                    <span className="points-label">Total Earned:</span>
                    <span className="points-value">{totalPoints}</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="level-progress">
                <div className="progress-label">
                  <span>Level {currentLevel}</span>
                  <span>
                    {getNextLevel() ? `Level ${getNextLevel().level}` : "MAX"}
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${getProgressPercentage()}%` }}
                  >
                    <div className="progress-sparkle"></div>
                  </div>
                </div>
                <div className="progress-points">
                  <span>
                    {totalPoints} /{" "}
                    {getNextLevel() ? getNextLevel().minPoints : totalPoints}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <PixelBorder color="green">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Earn Points</h3>
                <p>Get 1 point for every $1 spent</p>
              </div>
            </PixelBorder>
            <PixelBorder color="blue">
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Level Up</h3>
                <p>Unlock new levels and achievements</p>
              </div>
            </PixelBorder>
            <PixelBorder color="purple">
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Get Rewards</h3>
                <p>Redeem points for awesome prizes</p>
              </div>
            </PixelBorder>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section">
        <div className="container">
          <h2 className="section-title">Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`achievement-card ${
                  achievement.unlocked ? "unlocked" : "locked"
                }`}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <h3 className="achievement-name">{achievement.name}</h3>
                <p className="achievement-description">
                  {achievement.description}
                </p>
                <div className="achievement-points">
                  {achievement.unlocked ? (
                    <span className="earned">+{achievement.points} pts</span>
                  ) : (
                    <span className="potential">{achievement.points} pts</span>
                  )}
                </div>
                {!achievement.unlocked && (
                  <div className="locked-overlay">
                    <span className="lock-icon">🔒</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Store */}
      <section className="rewards-store">
        <div className="container">
          <h2 className="section-title">Rewards Store</h2>
          <p className="store-subtitle">
            Redeem your points for exclusive rewards!
          </p>
          <div className="rewards-grid">
            {rewards.map((reward) => (
              <Card key={reward.id} variant="default">
                <div className="reward-content">
                  <div className="reward-icon">{reward.icon}</div>
                  <h3 className="reward-name">{reward.name}</h3>
                  <p className="reward-description">{reward.description}</p>
                  <div className="reward-footer">
                    <span className="reward-cost">{reward.cost} pts</span>
                    <Button
                      variant={
                        currentPoints >= reward.cost ? "primary" : "secondary"
                      }
                      disabled={currentPoints < reward.cost}
                      className="redeem-btn"
                    >
                      {currentPoints >= reward.cost ? "Redeem" : "Locked"}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Level Benefits */}
      <section className="level-benefits">
        <div className="container">
          <h2 className="section-title">Level Benefits</h2>
          <div className="levels-showcase">
            {levels.map((level) => (
              <div
                key={level.level}
                className={`level-card ${
                  currentLevel >= level.level ? "unlocked" : "locked"
                }`}
              >
                <PixelBorder
                  color={currentLevel >= level.level ? level.color : "white"}
                >
                  <div className="level-content">
                    <div className="level-header">
                      <span className="level-num">Level {level.level}</span>
                      <span className="level-title">{level.name}</span>
                    </div>
                    <div className="level-requirement">
                      {level.minPoints} points required
                    </div>
                    <div className="level-perks">
                      {level.level === 1 && "• Welcome bonus: 50 points"}
                      {level.level === 2 &&
                        "• 5% bonus points on all purchases"}
                      {level.level === 3 &&
                        "• 10% bonus points + birthday reward"}
                      {level.level === 4 &&
                        "• 15% bonus points + exclusive offers"}
                      {level.level === 5 && "• 20% bonus points + VIP events"}
                    </div>
                  </div>
                </PixelBorder>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rewards-cta">
        <div className="container">
          <PixelBorder color="green">
            <div className="cta-content">
              <h2>Ready to Start Earning?</h2>
              <p>Join now and get 100 bonus points!</p>
              <div className="cta-buttons">
                <Button variant="success" className="btn-large">
                  Sign Up Now
                </Button>
                <Button variant="secondary" className="btn-large">
                  Learn More
                </Button>
              </div>
            </div>
          </PixelBorder>
        </div>
      </section>
    </div>
  );
};

export default Rewards;
