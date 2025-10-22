import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { getTotalItems, setShowCart } = useCart();
  const totalItems = getTotalItems();

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  return (
    <header className="retro-header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="brand">
            <div className="logo-container">
              <div className="pixel-logo">
                <div className="coffee-cup"></div>
              </div>
              <h1 className="pixel-text">RETRO CAFE</h1>
            </div>
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
            <a
              href="#"
              onClick={handleCartClick}
              className="nav-link cart-status"
            >
              <span className="cart-icon">🛒</span>
              <span className="cart-count">{totalItems}</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
