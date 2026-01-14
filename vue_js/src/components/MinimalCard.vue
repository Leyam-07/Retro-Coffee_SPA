<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: null
  },
  price: {
    type: [Number, String],
    default: null
  }
})
</script>

<template>
  <div class="minimal-card">
    <div v-if="image" class="card-image">
      <img :src="image" :alt="title">
    </div>
    
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <div class="card-body">
        <slot></slot>
      </div>
      
      <div v-if="price || $slots.footer" class="card-footer">
        <span v-if="price" class="price">${{ price }}</span>
        <div class="footer-actions">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: var(--spacing-md);
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.minimal-card:hover .card-image img {
  transform: scale(1.05);
}

.card-title {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  color: var(--accent-primary);
  margin-bottom: var(--spacing-sm);
}

.card-body {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--border-color);
}

.price {
  font-family: var(--font-code);
  font-size: 1.2rem;
  color: var(--accent-secondary);
  font-weight: bold;
}

.footer-actions {
  display: flex;
  gap: 0.5rem;
}
</style>