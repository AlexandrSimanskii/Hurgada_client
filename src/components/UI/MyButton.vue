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
</style>
