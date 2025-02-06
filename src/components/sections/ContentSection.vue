<template>
  <div class="categories-content">
    <h3 class="title"><slot /></h3>
    <ul class="categories">
      <li
        class="category"
        v-for="category of props.categories"
        @click="
          () => {
            categoryHandler(category)
          }
        "
      >
        {{ category }}
      </li>
    </ul>
  </div>

  <div class="cards container">
    <card-app
      v-for="card of props.cards"
      @click="(e) => useCardClickHandler(e, card._id, path)"
      :card="card"
      :key="card._id"
    ></card-app>
  </div>
  <div class="pagination"></div>
</template>

<script setup lang="ts">
import CardApp from '../CardApp.vue'
import type { CardsType } from '@/types/types'
import { useCardClickHandler } from '@/composables/useCardClickHandler'
import { useRoute } from 'vue-router'

const route = useRoute()
const path = route.path

const props = defineProps<{
  cards: CardsType[]
  categories: string[]
}>()

const categoryHandler = async (category: string) => {}
</script>

<style scoped>
@import '@/assets/style/variable';
.categories-content {
  margin: 40px 0;
  font-family: Oswald inherit;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px 10px;
}
.title {
  color: var(--primaryHeader);
  text-transform: uppercase;
  text-align: center;
  font-size: 28px;
  width: 500;

  margin-bottom: 30px;
}
.categories {
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 15px;
}
.category {
  padding: 7px 32px;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--primaryMain);
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}
</style>
