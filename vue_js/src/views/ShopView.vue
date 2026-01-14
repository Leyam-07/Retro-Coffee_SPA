<script setup>
import MinimalCard from '../components/MinimalCard.vue'
import RetroBtn from '../components/RetroBtn.vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

const products = [
  { id: 101, name: 'Retro Mug', price: 15.00, description: 'Ceramic mug with pixel art logo.' },
  { id: 102, name: '8-Bit Hoodie', price: 45.00, description: 'Cozy hoodie for late night coding.' },
  { id: 103, name: 'Pixel Beans', price: 18.00, description: '1lb bag of our signature roast.' },
  { id: 104, name: 'Glitch Sticker Pack', price: 5.00, description: 'Decorate your laptop with chaos.' },
]
</script>

<template>
  <div class="shop-view section">
    <div class="container">
      <h1 class="text-center">SHOP MERCH</h1>
      
      <div class="grid grid-3">
        <MinimalCard 
          v-for="product in products" 
          :key="product.id"
          :title="product.name"
          :price="product.price"
        >
          <p>{{ product.description }}</p>
          <template #footer>
            <RetroBtn variant="secondary" @click="cartStore.addItem(product)">Add to Cart</RetroBtn>
          </template>
        </MinimalCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-center {
  text-align: center;
}
</style>