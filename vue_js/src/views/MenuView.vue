<script setup>
import { ref } from 'vue'
import MinimalCard from '../components/MinimalCard.vue'
import RetroBtn from '../components/RetroBtn.vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

const categories = ['All', 'Coffee', 'Tea', 'Pastries']
const activeCategory = ref('All')

const menuItems = [
  { id: 1, name: 'Pixel Espresso', category: 'Coffee', price: 3.50, description: 'Strong, dark, and full of energy.' },
  { id: 2, name: 'Glitch Latte', category: 'Coffee', price: 4.50, description: 'A smooth blend with a hint of chaos.' },
  { id: 3, name: 'Binary Brew', category: 'Coffee', price: 3.00, description: '01000011 01101111 01100110 01100110 01100101 01100101' },
  { id: 4, name: 'Neon Matcha', category: 'Tea', price: 5.00, description: 'Glowing green tea latte.' },
  { id: 5, name: 'Cyber Croissant', category: 'Pastries', price: 3.75, description: 'Flaky, buttery, and futuristic.' },
  { id: 6, name: 'Data Donut', category: 'Pastries', price: 2.50, description: 'Round, sweet, and hole-y.' },
]

const filteredItems = ref(menuItems)

function filterCategory(category) {
  activeCategory.value = category
  if (category === 'All') {
    filteredItems.value = menuItems
  } else {
    filteredItems.value = menuItems.filter(item => item.category === category)
  }
}
</script>

<template>
  <div class="menu-view section">
    <div class="container">
      <h1 class="text-center">MENU</h1>
      
      <div class="categories">
        <button 
          v-for="category in categories" 
          :key="category"
          class="category-btn"
          :class="{ active: activeCategory === category }"
          @click="filterCategory(category)"
        >
          {{ category }}
        </button>
      </div>

      <div class="grid grid-3">
        <MinimalCard 
          v-for="item in filteredItems" 
          :key="item.id"
          :title="item.name"
          :price="item.price"
        >
          <p>{{ item.description }}</p>
          <template #footer>
            <RetroBtn variant="primary" @click="cartStore.addItem(item)">Add</RetroBtn>
          </template>
        </MinimalCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.category-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 0.5rem 1.5rem;
  font-family: var(--font-code);
  cursor: pointer;
  transition: all 0.2s;
}

.category-btn:hover, .category-btn.active {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.category-btn.active {
  background: rgba(255, 179, 0, 0.1);
}

.text-center {
  text-align: center;
}
</style>