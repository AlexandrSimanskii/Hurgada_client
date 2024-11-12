<template>
  <div class="cards-section container">
    <div class="cards-top">
      <h5>{{ props.name }}</h5>
      <router-link to="/think">See all</router-link>
    </div>
    <div class="cards"><slot></slot></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
</script>

<style scoped lang="scss">
@import '@/assets/style/main.css';

.cards-section {
  margin-bottom: 50px;
  width: 100%;

  overflow: hidden;
}
.cards {
  display: flex;
  gap: 20px;
  &-top {
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
