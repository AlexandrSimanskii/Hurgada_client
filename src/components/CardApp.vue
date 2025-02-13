<template>
  <div class="card">
    <div
      class="picture"
      :style="{
        backgroundImage: `url(${images})`
      }"
    >
      <card-category v-if="category">{{ category }}</card-category>
      <card-icons></card-icons>
    </div>
    <div class="rating"></div>
    <div class="description">
      <h2 class="description__title">
        {{ name }}
      </h2>
      <p class="description__text">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type CardsType } from '@/types/types'
import CardCategory from './UI/CardCategory.vue'
const props = defineProps<{
  card: CardsType
  link?: string
}>()

const { _id, name, images, category, description, reviews, rating } = props.card
</script>

<style scoped>
@import '@/assets/style/variable';
.card {cursor: pointer;
  min-width: 480px;
  max-width: 520px;
  border-radius: 8px;
  overflow: hidden;
}
.picture {
  padding: 10px;
  position: relative;
  height: 500px;
  width: 100%;
  margin-bottom: 20px;
  background-size: cover;
  background-position: center;
}

.description__title {
  padding-bottom: 10px;
  display: -webkit-box;
  max-width: 400px;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.description__text {
  display: -webkit-box;
  max-width: 400px;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
