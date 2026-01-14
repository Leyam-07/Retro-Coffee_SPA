<script setup>
import { ref } from 'vue'
import RetroBtn from '../components/RetroBtn.vue'

const currentLevel = ref(2)
const points = ref(1250)
const nextLevelPoints = 2000

const progress = (points.value / nextLevelPoints) * 100

const rewards = [
  { id: 1, name: 'Free Espresso', cost: 500, icon: '☕' },
  { id: 2, name: '10% Off Merch', cost: 1000, icon: '👕' },
  { id: 3, name: 'Bag of Beans', cost: 2500, icon: '🫘' },
]
</script>

<template>
  <div class="rewards-view section">
    <div class="container">
      <h1 class="text-center">PLAYER STATUS</h1>
      
      <div class="status-card">
        <div class="level-info">
          <div class="level-badge">LVL {{ currentLevel }}</div>
          <div class="points-info">
            <span class="current">{{ points }}</span> / <span class="max">{{ nextLevelPoints }} XP</span>
          </div>
        </div>
        
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
        </div>
      </div>

      <div class="rewards-store section">
        <h2 class="text-center">REDEEM LOOT</h2>
        <div class="grid grid-3">
          <div v-for="reward in rewards" :key="reward.id" class="reward-item">
            <div class="reward-icon">{{ reward.icon }}</div>
            <h3>{{ reward.name }}</h3>
            <p class="cost">{{ reward.cost }} XP</p>
            <RetroBtn 
              variant="outline" 
              :disabled="points < reward.cost"
              class="redeem-btn"
            >
              {{ points >= reward.cost ? 'Redeem' : 'Locked' }}
            </RetroBtn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.status-card {
  background: var(--bg-light);
  padding: 2rem;
  border: 1px solid var(--border-color);
  margin-bottom: 4rem;
}

.level-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-family: var(--font-code);
}

.level-badge {
  font-size: 2rem;
  color: var(--accent-primary);
  font-weight: bold;
}

.points-info {
  font-size: 1.2rem;
  color: var(--text-secondary);
}

.progress-bar {
  height: 20px;
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--accent-secondary);
  transition: width 0.5s ease;
}

.reward-item {
  text-align: center;
  padding: 2rem;
  background: var(--bg-light);
  border: 1px solid var(--border-color);
}

.reward-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.cost {
  color: var(--accent-primary);
  font-family: var(--font-code);
  margin-bottom: 1.5rem;
}

.redeem-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  border-color: var(--border-color);
  color: var(--text-secondary);
}

.text-center {
  text-align: center;
}
</style>