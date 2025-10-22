import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { getTotalItems, setShowCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = getTotalItems();

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="retro-header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="brand" onClick={closeMobileMenu}>
            <div className="logo-container">
              <div className="pixel-logo">
                <div className="coffee-cup"></div>
              </div>
              <h1 className="pixel-text">RETRO CAFE</h1>
            </div>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Navigation Links */}
          <div className={`nav-links ${mobileMenuOpen ? "mobile-active" : ""}`}>
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
              HOME
            </Link>
            <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
              ABOUT
            </Link>
            <Link to="/menu" className="nav-link" onClick={closeMobileMenu}>
              MENU
            </Link>
            <Link to="/shop" className="nav-link" onClick={closeMobileMenu}>
              SHOP
            </Link>
            <Link to="/rewards" className="nav-link" onClick={closeMobileMenu}>
              REWARDS
            </Link>
            <a
              href="#"
              onClick={handleCartClick}
              className="nav-link cart-status"
            >
              <span className="cart-icon">🛒</span>
              <span className="cart-count">{totalItems}</span>
              <span className="cart-label">Cart</span>
            </a>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div
              className="mobile-menu-overlay"
              onClick={closeMobileMenu}
            ></div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
