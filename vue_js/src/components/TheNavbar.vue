<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <nav class="navbar">
    <div class="nav-content">
      <RouterLink to="/" class="brand glitch-text">RETRO CAFE</RouterLink>
      
      <div class="nav-links">
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/about">ABOUT</RouterLink>
        <RouterLink to="/menu">MENU</RouterLink>
        <RouterLink to="/shop">SHOP</RouterLink>
        <RouterLink to="/rewards">REWARDS</RouterLink>
      </div>

      <button class="cart-btn" @click="cartStore.toggleCart">
        CART [{{ cartStore.totalItems }}]
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: var(--spacing-md);
  z-index: 100;
  background: linear-gradient(to bottom, rgba(253, 246, 227, 0.95), rgba(253, 246, 227, 0));
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: var(--accent-primary);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
  background: rgba(238, 232, 213, 0.8);
  padding: 0.8rem 2rem;
  border-radius: 100px;
  border: 1px solid var(--border-color);
  backdrop-filter: blur(10px);
}

.nav-links a {
  font-family: var(--font-code);
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
}

.nav-links a:hover, .nav-links a.router-link-active {
  color: var(--text-primary);
}

.nav-links a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--accent-secondary);
}

.cart-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--accent-primary);
  padding: 0.5rem 1rem;
  font-family: var(--font-code);
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;
}

.cart-btn:hover {
  border-color: var(--accent-primary);
  background: rgba(255, 179, 0, 0.1);
  box-shadow: 0 0 10px rgba(255, 179, 0, 0.2);
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    justify-content: space-around;
    padding: 1rem;
    background: rgba(253, 246, 227, 0.95);
    border: 1px solid var(--border-color);
    z-index: 101;
  }
  
  .navbar {
    background: var(--bg-color);
    padding: 1rem;
    border-bottom: 1px solid var(--border-color);
  }
}
</style>