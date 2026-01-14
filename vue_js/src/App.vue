<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import { onMounted, ref } from 'vue'

const showCrt = ref(true)

onMounted(() => {
  // Simulate CRT turn-on effect
  setTimeout(() => {
    showCrt.value = false
  }, 1500)
})
</script>

<template>
  <div class="app-container">
    <div class="crt-overlay"></div>
    <div v-if="showCrt" class="crt-turn-on"></div>
    
    <TheNavbar />
    
    <main class="main-content">
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

<style>
@import './assets/minimal.css';

.app-container {
  min-height: 100vh;
  position: relative;
}

.main-content {
  padding-top: 80px; /* Space for fixed navbar */
  min-height: calc(100vh - 80px);
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* CRT Turn On Effect */
.crt-turn-on {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  z-index: 10000;
  animation: turn-on 1.5s linear forwards;
  pointer-events: none;
}

@keyframes turn-on {
  0% {
    transform: scale(1, 0.002);
  }
  50% {
    transform: scale(0.2, 0.002);
    opacity: 1;
  }
  60% {
    transform: scale(1, 1);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}
</style>
