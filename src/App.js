import React, { useRef } from "react";
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

// Context
import { CartProvider, useCart } from "./context/CartContext";

// Wrapper component to handle transitions
function AnimatedRoutes() {
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
            <Route path="/shop" element={<Shop />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

function App() {
  const {
    cart,
    showCart,
    setShowCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <AnimatedRoutes />
      </main>

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
                        <span className="cart-item-icon">
                          {item.image || item.icon}
                        </span>
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
    </div>
  );
}

// Wrap App with Router to use useLocation hook
const AppWrapper = () => (
  <Router>
    <CartProvider>
      <App />
    </CartProvider>
  </Router>
);

export default AppWrapper;
