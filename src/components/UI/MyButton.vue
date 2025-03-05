<template>
  <button class="button">
    <img v-if="image" :src="image" />
    <slot />
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'my-button'
})

const props = defineProps<{
  image?: string
}>()
</script>

<style scoped>
@import '@/assets/style/main.css';

.button {
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid var(--primaryMain);
  font-size: 20px;
  font-weight: 500;
  padding: 20px 86px;
}

@media (max-width: 1240px) {
  .button {
    padding: 10px 64px;
  }
}

@media (max-width: 720px) {
  .button {
    padding: 10px 44px;
  }
}@media (max-width: 480px) {
  .button {
    padding: 6px 12px;
  }
}
</style>
