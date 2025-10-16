import React, { useState } from "react";
import { Card, PixelBorder, Button } from "../components";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("coffee");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const categories = [
    { id: "coffee", name: "Coffee Beans", icon: "☕" },
    { id: "merch", name: "Merchandise", icon: "👕" },
    { id: "accessories", name: "Accessories", icon: "🎮" },
  ];

  const products = {
    coffee: [
      {
        id: "c1",
        name: "8-Bit Blend",
        description: "Medium roast with pixelated flavor notes",
        price: 18.99,
        image: "🟫",
        badge: "BEST SELLER",
      },
      {
        id: "c2",
        name: "Game Over Dark Roast",
        description: "Extra bold coffee for serious gamers",
        price: 19.99,
        image: "⬛",
      },
      {
        id: "c3",
        name: "Level Up Light Roast",
        description: "Bright and energetic morning starter",
        price: 17.99,
        image: "🟨",
      },
      {
        id: "c4",
        name: "Retro Espresso",
        description: "Classic Italian style, 8-bit approved",
        price: 21.99,
        image: "🟤",
        badge: "PREMIUM",
      },
      {
        id: "c5",
        name: "Pixel Decaf",
        description: "All the flavor, none of the jitters",
        price: 16.99,
        image: "🟩",
      },
      {
        id: "c6",
        name: "Arcade Blend Sampler",
        description: "Try all our signature roasts",
        price: 49.99,
        image: "🎁",
        badge: "VALUE PACK",
      },
    ],
    merch: [
      {
        id: "m1",
        name: "Retro Cafe T-Shirt",
        description: "Classic pixel art logo tee",
        price: 24.99,
        image: "👕",
        badge: "NEW",
      },
      {
        id: "m2",
        name: "8-Bit Mug",
        description: "Color-changing pixel art mug",
        price: 15.99,
        image: "☕",
      },
      {
        id: "m3",
        name: "Pixel Hoodie",
        description: "Cozy hoodie with retro graphics",
        price: 45.99,
        image: "🧥",
      },
      {
        id: "m4",
        name: "Retro Cap",
        description: "Snapback with embroidered logo",
        price: 22.99,
        image: "🧢",
      },
      {
        id: "m5",
        name: "Arcade Tote Bag",
        description: "Canvas bag for coffee runs",
        price: 18.99,
        image: "👜",
      },
      {
        id: "m6",
        name: "Pixel Pin Set",
        description: "Collectible enamel pins",
        price: 12.99,
        image: "📌",
        badge: "LIMITED",
      },
    ],
    accessories: [
      {
        id: "a1",
        name: "Coffee Grinder Pro",
        description: "Manual grinder with pixel grip",
        price: 34.99,
        image: "⚙️",
      },
      {
        id: "a2",
        name: "8-Bit French Press",
        description: "Retro-styled brewing perfection",
        price: 29.99,
        image: "🫖",
      },
      {
        id: "a3",
        name: "Pixel Pour Over",
        description: "Precision brewing kit",
        price: 26.99,
        image: "🔽",
      },
      {
        id: "a4",
        name: "Retro Timer",
        description: "8-bit countdown for perfect brew",
        price: 19.99,
        image: "⏱️",
      },
      {
        id: "a5",
        name: "Game Coffee Scale",
        description: "Digital scale with retro display",
        price: 39.99,
        image: "⚖️",
      },
      {
        id: "a6",
        name: "Arcade Thermos",
        description: "Keep coffee hot for hours",
        price: 32.99,
        image: "🍶",
        badge: "HOT ITEM",
      },
    ],
  };

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
    <div className="page-shop">
      {/* Hero Section */}
      <section className="shop-hero">
        <PixelBorder color="purple">
          <h1>RETRO SHOP</h1>
          <p className="subtitle">Level Up Your Coffee Game</p>
        </PixelBorder>
      </section>

      {/* Cart Button */}
      <div className="floating-cart">
        <button className="cart-button" onClick={() => setShowCart(!showCart)}>
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
                        <p className="cart-item-price">${item.price}</p>
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
                  <span className="total-price">${getTotalPrice()}</span>
                </div>
                <Button variant="success" className="checkout-btn">
                  Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <section className="shop-categories">
        <div className="container">
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="shop-products">
        <div className="container">
          <div className="products-grid">
            {products[activeCategory].map((product) => (
              <div key={product.id} className="product-card-wrapper">
                <Card variant="default">
                  {product.badge && (
                    <div className="product-badge">{product.badge}</div>
                  )}
                  <div className="product-image">
                    <div className="pixel-product-icon">{product.image}</div>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-footer">
                      <span className="product-price">${product.price}</span>
                      <Button
                        variant="primary"
                        className="add-to-cart-btn"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="shop-info">
        <div className="container">
          <PixelBorder color="blue">
            <div className="info-grid">
              <div className="info-item">
                <span className="info-icon">📦</span>
                <h3>Free Shipping</h3>
                <p>On orders over $50</p>
              </div>
              <div className="info-item">
                <span className="info-icon">🚚</span>
                <h3>Fast Delivery</h3>
                <p>2-3 business days</p>
              </div>
              <div className="info-item">
                <span className="info-icon">♻️</span>
                <h3>Easy Returns</h3>
                <p>30-day return policy</p>
              </div>
              <div className="info-item">
                <span className="info-icon">🔒</span>
                <h3>Secure Payment</h3>
                <p>SSL encrypted checkout</p>
              </div>
            </div>
          </PixelBorder>
        </div>
      </section>
    </div>
  );
};

export default Shop;
