import React, { useState } from "react";
import { Card, PixelBorder, Button } from "../components";

const Shop = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState("coffee");

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
        price: 380,
        image: "🟫",
        badge: "BEST SELLER",
      },
      {
        id: "c2",
        name: "Game Over Dark Roast",
        description: "Extra bold coffee for serious gamers",
        price: 420,
        image: "⬛",
      },
      {
        id: "c3",
        name: "Level Up Light Roast",
        description: "Bright and energetic morning starter",
        price: 360,
        image: "🟨",
      },
      {
        id: "c4",
        name: "Retro Espresso",
        description: "Classic Italian style, 8-bit approved",
        price: 480,
        image: "🟤",
        badge: "PREMIUM",
      },
      {
        id: "c5",
        name: "Pixel Decaf",
        description: "All the flavor, none of the jitters",
        price: 320,
        image: "🟩",
      },
      {
        id: "c6",
        name: "Arcade Blend Sampler",
        description: "Try all our signature roasts",
        price: 850,
        image: "🎁",
        badge: "VALUE PACK",
      },
    ],
    merch: [
      {
        id: "m1",
        name: "Retro Cafe T-Shirt",
        description: "Classic pixel art logo tee",
        price: 350,
        image: "👕",
        badge: "NEW",
      },
      {
        id: "m2",
        name: "8-Bit Mug",
        description: "Color-changing pixel art mug",
        price: 220,
        image: "☕",
      },
      {
        id: "m3",
        name: "Pixel Hoodie",
        description: "Cozy hoodie with retro graphics",
        price: 450,
        image: "🧥",
      },
      {
        id: "m4",
        name: "Retro Cap",
        description: "Snapback with embroidered logo",
        price: 280,
        image: "🧢",
      },
      {
        id: "m5",
        name: "Arcade Tote Bag",
        description: "Canvas bag for coffee runs",
        price: 250,
        image: "👜",
      },
      {
        id: "m6",
        name: "Pixel Pin Set",
        description: "Collectible enamel pins",
        price: 180,
        image: "📌",
        badge: "LIMITED",
      },
    ],
    accessories: [
      {
        id: "a1",
        name: "Coffee Grinder Pro",
        description: "Manual grinder with pixel grip",
        price: 850,
        image: "⚙️",
      },
      {
        id: "a2",
        name: "8-Bit French Press",
        description: "Retro-styled brewing perfection",
        price: 650,
        image: "🫖",
      },
      {
        id: "a3",
        name: "Pixel Pour Over",
        description: "Precision brewing kit",
        price: 550,
        image: "🔽",
      },
      {
        id: "a4",
        name: "Retro Timer",
        description: "8-bit countdown for perfect brew",
        price: 350,
        image: "⏱️",
      },
      {
        id: "a5",
        name: "Game Coffee Scale",
        description: "Digital scale with retro display",
        price: 950,
        image: "⚖️",
      },
      {
        id: "a6",
        name: "Arcade Thermos",
        description: "Keep coffee hot for hours",
        price: 750,
        image: "🍶",
        badge: "HOT ITEM",
      },
    ],
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
                      <span className="product-price">₱{product.price}</span>
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
                <p>On orders over ₱1500</p>
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
