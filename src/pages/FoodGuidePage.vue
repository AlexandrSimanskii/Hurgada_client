<template>
  <top-section
    class="top"
    :img="'https://firebasestorage.googleapis.com/v0/b/hurghada-7bbca.appspot.com/o/food%2Fmain_photo.png?alt=media&token=c8a20eec-c640-42d9-8e81-087dcf090276'"
  >
    Foods</top-section
  >
  <content-section :categories="allCategories" :cards="cards"
    >choose how you foods
  </content-section>

  <my-pagination @page="changeCards" :limit="limit" :totalCount="totalCount"></my-pagination>
  <description-section v-bind="descriptionsAttr"></description-section>
</template>

<script setup lang="ts">
import MyPagination from '@/components/MyPagination.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'
import TopSection from '@/components/sections/TopSection.vue'
import ContentSection from '@/components/sections/ContentSection.vue'
import DescriptionSection from '@/components/sections/DescriptionSection.vue'
import descriptionsAttr from '@/utils/descriptionsAttr'
import { FOODS } from '@/constants'
import { type CardsType } from '@/types/types'

const cards: Ref<CardsType[]> = ref([])
const allCategories = ref([])
const limit = 6
const page = ref(1)
const category = ref('')
const totalCount = ref(0)

const getFoodCards = async () => {
  try {
    const queryParams = new URLSearchParams({
      limit: String(limit),
      page: String(page.value),
      category: category.value
    }).toString()

    const response = await fetch(`${FOODS}?${queryParams}`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const newData = await response.json()

    totalCount.value = newData.totalCount

    cards.value = newData.data

    console.log(cards.value)
  } catch (error) {
    console.error("Ошибка при получении 'foodCards':", error)
  }
}
getFoodCards()

async function getCategories(url: string) {
  try {
    const fetchCategory = await fetch(`${url}/categories`)

    allCategories.value = await fetchCategory.json()
  } catch (error) {
    console.log(error)
  }
}
getCategories(FOODS)

function changeCards(newPage: number) {
  page.value = newPage
  getFoodCards()
}


</script>

<style scoped>
@import '@/assets/style/variable';
.top {
  color: var(--lightText);
}
</style>
