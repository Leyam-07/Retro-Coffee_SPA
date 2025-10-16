import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, PixelBorder } from "../components";

const Home = () => {
  const navigate = useNavigate();

  const featuredItems = [
    {
      id: 1,
      title: "8-BIT ESPRESSO",
      description: "Double shot of pixelated perfection",
      price: "$4.99",
    },
    {
      id: 2,
      title: "RETRO LATTE",
      description: "Smooth, creamy, nostalgic",
      price: "$5.99",
    },
    {
      id: 3,
      title: "GAME OVER COLD BREW",
      description: "Extra strong for extra lives",
      price: "$4.49",
    },
  ];

  return (
    <div className="page-home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-line1">WELCOME TO</span>
            <span className="hero-line2">RETRO CAFE</span>
          </h1>
          <p className="hero-subtitle">Level up your coffee experience</p>
          <div className="hero-cta">
            <Button
              variant="primary"
              size="large"
              onClick={() => navigate("/menu")}
            >
              VIEW MENU
            </Button>
            <Button
              variant="secondary"
              size="large"
              onClick={() => navigate("/rewards")}
            >
              JOIN REWARDS
            </Button>
          </div>
        </div>
        <div className="hero-animation">
          <div className="coffee-steam">
            <div className="steam-particle"></div>
            <div className="steam-particle"></div>
            <div className="steam-particle"></div>
          </div>
          <div className="pixel-coffee-cup-large"></div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="featured-section">
        <PixelBorder color="yellow" thickness={4}>
          <h2 className="section-title">FEATURED POWER-UPS</h2>
        </PixelBorder>

        <div className="featured-grid">
          {featuredItems.map((item) => (
            <Card key={item.id} title={item.title} variant="highlight">
              <p className="item-description">{item.description}</p>
              <div className="item-footer">
                <span className="item-price">{item.price}</span>
                <Button
                  variant="success"
                  size="small"
                  onClick={() => navigate("/menu")}
                >
                  ORDER
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-grid">
          <PixelBorder color="green" animate>
            <div className="info-card">
              <h3>FRESH ROASTED</h3>
              <p>Our beans are roasted daily for maximum flavor</p>
            </div>
          </PixelBorder>

          <PixelBorder color="blue" animate>
            <div className="info-card">
              <h3>RETRO VIBES</h3>
              <p>Experience nostalgia with every sip in our 8-bit paradise</p>
            </div>
          </PixelBorder>

          <PixelBorder color="pink" animate>
            <div className="info-card">
              <h3>REWARD PROGRAM</h3>
              <p>Collect coins and unlock exclusive achievements</p>
            </div>
          </PixelBorder>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>READY TO START YOUR QUEST?</h2>
        <p>Join us for the ultimate retro coffee experience</p>
        <Button
          variant="primary"
          size="large"
          onClick={() => navigate("/about")}
        >
          LEARN MORE
        </Button>
      </section>
    </div>
  );
};

export default Home;
