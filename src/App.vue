<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderApp from './components/HeaderApp.vue'
import FooterApp from './components/FooterApp.vue'
</script>

<template>
  <header-app></header-app>
  <main><RouterView /></main>

  <footer-app></footer-app>
</template>

<style scoped></style>
