import React from "react";
import { Button, PixelBorder } from "../components";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const timelineEvents = [
    {
      year: "2022",
      title: "GAME START",
      description:
        "Retro Cafe was born from a love of coffee and classic gaming",
    },
    {
      year: "2023",
      title: "LEVEL UP",
      description:
        "Expanded menu with specialty drinks and retro-themed treats",
    },
    {
      year: "2024",
      title: "NEW ACHIEVEMENT",
      description: "Launched rewards program and mobile ordering",
    },
    {
      year: "2025",
      title: "POWER-UP",
      description: "Opened second location and started roasting our own beans",
    },
  ];

  const teamMembers = [
    {
      name: "ALVIN",
      role: "LEAD BARISTA",
      bio: "Energetic and passionate about crafting the perfect espresso",
    },
    {
      name: "SIMON",
      role: "ROAST MASTER",
      bio: "The genius behind our scientifically perfect coffee blends",
    },
    {
      name: "THEODORE",
      role: "PASTRY CHEF",
      bio: "Sweet treats and warm hugs with every baked good",
    },
  ];

  return (
    <div className="page-about">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>OUR STORY</h1>
        <div className="mascot-container">
          <div className="pixel-mascot">
            <div className="mascot-body"></div>
            <div className="mascot-steam"></div>
          </div>
        </div>
        <p className="about-intro">
          Welcome to Retro Cafe, where nostalgia meets coffee culture. We're on
          a mission to serve the perfect blend of premium coffee and retro
          gaming vibes.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <PixelBorder color="yellow" thickness={4}>
          <h2 className="section-title">OUR JOURNEY</h2>
        </PixelBorder>

        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <span className="timeline-year">{event.year}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>OUR VALUES</h2>
        <div className="values-grid">
          <PixelBorder color="green">
            <div className="value-card">
              <div className="pixel-icon coffee-icon"></div>
              <h3>QUALITY FIRST</h3>
              <p>Every cup is crafted with care using only the finest beans</p>
            </div>
          </PixelBorder>

          <PixelBorder color="blue">
            <div className="value-card">
              <div className="pixel-icon community-icon"></div>
              <h3>COMMUNITY</h3>
              <p>Creating a space where coffee lovers and gamers unite</p>
            </div>
          </PixelBorder>

          <PixelBorder color="pink">
            <div className="value-card">
              <div className="pixel-icon sustainability-icon"></div>
              <h3>SUSTAINABILITY</h3>
              <p>Ethically sourced beans and eco-friendly practices</p>
            </div>
          </PixelBorder>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <PixelBorder color="purple" thickness={4}>
          <h2 className="section-title">MEET THE TEAM</h2>
        </PixelBorder>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-avatar">
                <div className={`pixel-avatar avatar-${index + 1}`}></div>
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>JOIN OUR QUEST</h2>
        <p>Experience the perfect blend of coffee and nostalgia</p>
        <div className="cta-buttons">
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
            onClick={() => navigate("/shop")}
          >
            VISIT SHOP
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
