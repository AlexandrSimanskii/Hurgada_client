<template>
  <div class="shadow" @click="$emit('clickClose')"></div>
  <aside class="sidebar">
    <button class="close-button" @click="$emit('clickClose')">
      <img src="/images/icons/closed.svg" alt="Close" /></button
    ><slot />
  </aside>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['clickClose'])
</script>

<style scoped>
.shadow {
  position: fixed;
  z-index: 5;
  height: 100vh;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.sidebar {
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  width: 470px;
  min-height: 100vh;
  background: rgba(216, 216, 218, 0.62);
  backdrop-filter: blur(11.8px);
  -webkit-backdrop-filter: blur(11.8px);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
}

.close-button {
  position: absolute;
  right: 16px;
  top: 16px;
}
@media (max-width: 640px) {
  .sidebar {
    width: 320px;
  }
}
</style>
