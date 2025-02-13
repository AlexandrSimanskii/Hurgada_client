<template>
  <template v-if="store.isOpen">
    <div class="shadow"></div>
    <aside class="sidebar">
      <button class="close-button" @click="$emit('clickClose')">
        <img src="@/assets/images/icons/closed.svg" alt="Close" /></button
      ><slot /></aside
  ></template>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebarStore'
import { defineEmits } from 'vue'


const emit = defineEmits(['clickClose'])
const store = useSidebarStore()
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
  width: 340px;
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(10px);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
}

.close-button {
  position: absolute;
  right: 16px;
  top: 16px;
}
</style>
