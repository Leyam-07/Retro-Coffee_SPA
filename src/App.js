import React, { useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import { Header, Button } from "./components";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Shop from "./pages/Shop";
import Rewards from "./pages/Rewards";
import NotFound from "./pages/NotFound";

// Wrapper component to handle transitions
function AnimatedRoutes({ addToCart }) {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.pathname}
        nodeRef={nodeRef}
        timeout={200}
        classNames="page"
        unmountOnExit
      >
        <div ref={nodeRef} className="page-wrapper">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/shop" element={<Shop addToCart={addToCart} />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <AnimatedRoutes addToCart={addToCart} />
      </main>

      {location.pathname === "/shop" && (
        <>
          {/* Cart Button */}
          <div className="floating-cart">
            <button
              className="cart-button"
              onClick={() => setShowCart(!showCart)}
            >
              <span className="cart-icon">🛒</span>
              <span className="cart-count">{getTotalItems()}</span>
            </button>
          </div>

          {/* Cart Sidebar */}
          <div className={`cart-sidebar ${showCart ? "active" : ""}`}>
            <div className="cart-header">
              <h2>Your Cart</h2>
              <button className="close-cart" onClick={() => setShowCart(false)}>
                ✕
              </button>
            </div>
            <div className="cart-content">
              {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty!</p>
              ) : (
                <>
                  <div className="cart-items">
                    {cart.map((item) => (
                      <div key={item.id} className="cart-item">
                        <div className="cart-item-info">
                          <span className="cart-item-icon">{item.image}</span>
                          <div>
                            <h4>{item.name}</h4>
                            <p className="cart-item-price">₱{item.price}</p>
                          </div>
                        </div>
                        <div className="cart-item-controls">
                          <button
                            className="quantity-btn"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <span className="quantity">{item.quantity}</span>
                          <button
                            className="quantity-btn"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="cart-footer">
                    <div className="cart-total">
                      <span>Total:</span>
                      <span className="total-price">₱{getTotalPrice()}</span>
                    </div>
                    <Button variant="success" className="checkout-btn">
                      Checkout
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Wrap App with Router to use useLocation hook
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
