import React, { useState } from "react";
import { Card, PixelBorder, Button } from "../components";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("hot-drinks");

  const categories = [
    { id: "hot-drinks", name: "Hot Drinks", icon: "☕" },
    { id: "cold-drinks", name: "Cold Drinks", icon: "🧊" },
    { id: "food", name: "Food", icon: "🍕" },
    { id: "desserts", name: "Desserts", icon: "🍰" },
  ];

  const menuItems = {
    "hot-drinks": [
      {
        id: 1,
        name: "Pixel Latte",
        description: "Classic espresso with steamed 8-bit milk art",
        price: "$4.50",
        popular: true,
        icon: "☕",
      },
      {
        id: 2,
        name: "Retro Cappuccino",
        description: "Double shot with vintage foam design",
        price: "$4.00",
        icon: "☕",
      },
      {
        id: 3,
        name: "8-Bit Americano",
        description: "Bold espresso with hot water, served in pixel mug",
        price: "$3.50",
        icon: "☕",
      },
      {
        id: 4,
        name: "Game Over Espresso",
        description: "Triple shot for maximum energy boost",
        price: "$3.00",
        popular: true,
        icon: "⚡",
      },
      {
        id: 5,
        name: "Power-Up Mocha",
        description: "Chocolate and espresso fusion with whipped cream",
        price: "$5.00",
        icon: "🍫",
      },
    ],
    "cold-drinks": [
      {
        id: 6,
        name: "Frost Byte Frappe",
        description: "Iced blended coffee with pixel ice cubes",
        price: "$5.50",
        popular: true,
        icon: "🧊",
      },
      {
        id: 7,
        name: "Cold Brew Quest",
        description: "24-hour steeped coffee, served over ice",
        price: "$4.50",
        icon: "🧊",
      },
      {
        id: 8,
        name: "Iced Level-Up Latte",
        description: "Chilled espresso with cold milk and ice",
        price: "$4.75",
        icon: "🥤",
      },
      {
        id: 9,
        name: "Pixel Punch",
        description: "Fruit blend with energy boost",
        price: "$4.00",
        icon: "🍹",
      },
    ],
    food: [
      {
        id: 10,
        name: "8-Bit Bagel",
        description: "Toasted with cream cheese, pixelated perfection",
        price: "$6.00",
        icon: "🥯",
      },
      {
        id: 11,
        name: "Power Sandwich",
        description: "Turkey, cheese, and power-ups between pixel bread",
        price: "$8.50",
        popular: true,
        icon: "🥪",
      },
      {
        id: 12,
        name: "Retro Wrap",
        description: "Chicken caesar in a geometric tortilla",
        price: "$7.50",
        icon: "🌯",
      },
      {
        id: 13,
        name: "Pixel Pizza Slice",
        description: "Classic margherita in 8-bit style",
        price: "$5.50",
        icon: "🍕",
      },
    ],
    desserts: [
      {
        id: 14,
        name: "Pixel Pie",
        description: "Apple pie with blocky crust design",
        price: "$4.50",
        popular: true,
        icon: "🥧",
      },
      {
        id: 15,
        name: "8-Bit Brownie",
        description: "Chocolate brownie with pixel sugar dust",
        price: "$3.50",
        icon: "🍫",
      },
      {
        id: 16,
        name: "Retro Cookie",
        description: "Giant cookie with arcade game icing",
        price: "$3.00",
        icon: "🍪",
      },
      {
        id: 17,
        name: "Level-Up Cupcake",
        description: "Vanilla cupcake with power-up frosting",
        price: "$4.00",
        icon: "🧁",
      },
    ],
  };

  return (
    <div className="page-menu">
      {/* Hero Section */}
      <section className="menu-hero">
        <PixelBorder color="yellow">
          <h1 className="glitch" data-text="MENU">
            MENU
          </h1>
          <p className="subtitle">Select Your Power-Ups</p>
        </PixelBorder>
      </section>

      {/* Category Tabs */}
      <section className="menu-categories">
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

      {/* Menu Items Grid */}
      <section className="menu-items">
        <div className="container">
          <div className="menu-grid">
            {menuItems[activeCategory].map((item) => (
              <div key={item.id} className="menu-item-wrapper">
                <Card
                  title={
                    <div className="menu-item-header">
                      <span className="menu-item-icon">{item.icon}</span>
                      <span className="menu-item-name">{item.name}</span>
                      {item.popular && (
                        <span className="popular-badge">HOT!</span>
                      )}
                    </div>
                  }
                  variant="default"
                >
                  <div className="menu-item-content">
                    <p className="menu-item-description">{item.description}</p>
                    <div className="menu-item-footer">
                      <span className="menu-item-price">{item.price}</span>
                      <Button variant="primary" className="btn-sm">
                        Order
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="menu-specials">
        <div className="container">
          <PixelBorder color="green">
            <div className="specials-content">
              <h2>Daily Quest Rewards</h2>
              <div className="specials-grid">
                <div className="special-item">
                  <div className="special-icon">🎮</div>
                  <h3>Combo Meal</h3>
                  <p>Any drink + food item</p>
                  <p className="special-price">Save $2.00</p>
                </div>
                <div className="special-item">
                  <div className="special-icon">⭐</div>
                  <h3>Power Hour</h3>
                  <p>2-4 PM: 25% off all drinks</p>
                  <p className="special-price">Limited Time</p>
                </div>
                <div className="special-item">
                  <div className="special-icon">🏆</div>
                  <h3>Achievement Unlocked</h3>
                  <p>Buy 5 drinks, get 1 free</p>
                  <p className="special-price">Join Rewards</p>
                </div>
              </div>
            </div>
          </PixelBorder>
        </div>
      </section>

      {/* Nutritional Info */}
      <section className="menu-info">
        <div className="container">
          <div className="info-content">
            <p className="info-text">
              <span className="pixel-icon">ℹ️</span>
              Nutritional information available upon request. All items made
              fresh daily with retro love.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
