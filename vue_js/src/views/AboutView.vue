<script setup>
</script>

<template>
  <div class="about-view section">
    <div class="container">
      <div class="about-hero">
        <h1>OUR STORY</h1>
        <p class="lead">Founded in 2023, Retro Cafe brings the golden age of gaming to your morning cup.</p>
      </div>

      <div class="grid grid-2">
        <div class="about-content">
          <h2>The Mission</h2>
          <p>We believe in two things: high scores and high-quality coffee. Our beans are ethically sourced and roasted to perfection, ensuring every sip powers you up for the day ahead.</p>
          <p>Whether you're a speedrunner or a casual gamer, our space is designed for you to relax, recharge, and reconnect.</p>
        </div>
        <div class="about-image">
          <div class="placeholder-image">
            <span>[ 8-BIT CAFE INTERIOR ]</span>
          </div>
        </div>
      </div>

      <div class="team-section section">
        <h2 class="text-center">THE TEAM</h2>
        <div class="grid grid-3">
          <div class="team-member">
            <div class="avatar">A</div>
            <h3>Alvin</h3>
            <p>Head Barista</p>
          </div>
          <div class="team-member">
            <div class="avatar">S</div>
            <h3>Simon</h3>
            <p>Roaster</p>
          </div>
          <div class="team-member">
            <div class="avatar">T</div>
            <h3>Theodore</h3>
            <p>Pastry Chef</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-hero {
  text-align: center;
  margin-bottom: 4rem;
}

.lead {
  font-size: 1.2rem;
  color: var(--text-primary);
  max-width: 800px;
  margin: 0 auto;
}

.placeholder-image {
  width: 100%;
  height: 300px;
  background: var(--bg-light);
  border: 1px dashed var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-family: var(--font-code);
}

.team-member {
  text-align: center;
  padding: 2rem;
  background: var(--bg-light);
}

.avatar {
  width: 80px;
  height: 80px;
  background: var(--accent-primary);
  color: var(--bg-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-family: var(--font-heading);
  margin: 0 auto 1rem;
}

.text-center {
  text-align: center;
}
</style>