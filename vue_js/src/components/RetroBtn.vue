<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  },
  to: {
    type: String,
    default: null
  }
})
</script>

<template>
  <component 
    :is="to ? 'RouterLink' : 'button'" 
    :to="to"
    class="retro-btn"
    :class="`btn-${variant}`"
  >
    <span class="btn-content">
      <slot></slot>
    </span>
    <span class="btn-glitch"></span>
  </component>
</template>

<style scoped>
.retro-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 2rem;
  font-family: var(--font-code);
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease;
  text-decoration: none;
}

/* Primary Variant */
.btn-primary {
  background-color: var(--accent-primary);
  color: var(--bg-color);
  border: 1px solid var(--accent-primary);
}

.btn-primary:hover {
  background-color: transparent;
  color: var(--accent-primary);
  box-shadow: 0 0 15px rgba(255, 179, 0, 0.3);
}

/* Secondary Variant */
.btn-secondary {
  background-color: var(--accent-secondary);
  color: var(--bg-color);
  border: 1px solid var(--accent-secondary);
}

.btn-secondary:hover {
  background-color: transparent;
  color: var(--accent-secondary);
  box-shadow: 0 0 15px rgba(0, 230, 118, 0.3);
}

/* Outline Variant */
.btn-outline {
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid var(--text-secondary);
}

.btn-outline:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  box-shadow: 0 0 10px rgba(255, 179, 0, 0.2);
}

/* Glitch Effect on Hover */
.retro-btn:hover .btn-glitch {
  display: block;
  animation: glitch-anim 0.3s infinite;
}

.btn-glitch {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

@keyframes glitch-anim {
  0% { transform: translate(0) }
  20% { transform: translate(-2px, 2px) }
  40% { transform: translate(-2px, -2px) }
  60% { transform: translate(2px, 2px) }
  80% { transform: translate(2px, -2px) }
  100% { transform: translate(0) }
}
</style>