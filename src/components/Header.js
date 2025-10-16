import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="retro-header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="brand">
            <h1 className="pixel-text">RETRO CAFE</h1>
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              HOME
            </Link>
            <Link to="/about" className="nav-link">
              ABOUT
            </Link>
            <Link to="/menu" className="nav-link">
              MENU
            </Link>
            <Link to="/shop" className="nav-link">
              SHOP
            </Link>
            <Link to="/rewards" className="nav-link">
              REWARDS
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
