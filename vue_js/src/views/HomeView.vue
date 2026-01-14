<script setup>
import RetroBtn from '../components/RetroBtn.vue'
</script>

<template>
  <div class="home-view">
    <section class="hero section">
      <div class="container">
        <div class="hero-content">
          <h1 class="glitch-text" data-text="RETRO CAFE">RETRO CAFE</h1>
          <p class="hero-subtitle">
            <span class="typing-effect">Where nostalgia meets modern taste.</span>
          </p>
          <div class="hero-actions">
            <RetroBtn to="/menu" variant="primary">View Menu</RetroBtn>
            <RetroBtn to="/about" variant="outline">Our Story</RetroBtn>
          </div>
        </div>
      </div>
    </section>

    <section class="features section">
      <div class="container">
        <div class="grid grid-3">
          <div class="feature-item">
            <div class="icon">☕</div>
            <h3>Premium Coffee</h3>
            <p>Sourced from the finest 8-bit beans.</p>
          </div>
          <div class="feature-item">
            <div class="icon">👾</div>
            <h3>Retro Vibes</h3>
            <p>Immerse yourself in pixel perfection.</p>
          </div>
          <div class="feature-item">
            <div class="icon">🌱</div>
            <h3>Sustainable</h3>
            <p>Eco-friendly brewing for a better world.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: var(--accent-primary);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  font-family: var(--font-code);
  color: var(--text-primary);
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.feature-item {
  text-align: center;
  padding: 2rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.feature-item:hover {
  border-color: var(--accent-secondary);
  transform: translateY(-5px);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero-actions {
    flex-direction: column;
  }
}
</style>