<template>
  <top-section
    class="in-development"
    :img="'https://firebasestorage.googleapis.com/v0/b/hurghada-7bbca.appspot.com/o/estate%2FAirport.jpg?alt=media&token=42363ab3-1e93-4a7d-9519-d756aea6f076'"
    >in development...</top-section
  >
</template>

<script setup lang="ts">
import TopSection from '@/components/sections/TopSection.vue'
</script>

<style scoped>
@import '@/assets/style/variable.css';
.in-development {
  color: var(--lightText);
}
</style>
