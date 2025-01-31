<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderApp from './components/HeaderApp.vue'
import FooterApp from './components/FooterApp.vue'
</script>

<template>
  <div class="wrapper">
    <header-app></header-app>
    <main class="main"><RouterView /></main>
    <footer-app></footer-app>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main {
  flex: 1 0 auto;
}
</style>
