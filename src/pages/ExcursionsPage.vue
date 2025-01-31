<template>
  <top-section
    class="top"
    :img="'https://firebasestorage.googleapis.com/v0/b/hurghada-7bbca.appspot.com/o/excursions%2Fsecond_photo.png?alt=media&token=20b903a4-e534-4e48-bb27-fb8dea7c965f'"
  >
    Foods</top-section
  >
  <content-section :categories="allCategories" :cards="cards">choose how you fexdfsdf</content-section>
 <my-pagination  @page="changePage" :limit="limit" :totalCount="totalCount"></my-pagination>
 
 <description-section></description-section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MyPagination from '@/components/MyPagination.vue'
import type { Ref } from 'vue'
import TopSection from '@/components/sections/TopSection.vue'
import ContentSection from '@/components/sections/ContentSection.vue'
import DescriptionSection from '@/components/sections/DescriptionSection.vue'
import { EXCURSION } from '@/constants'

import { type CardsType,  } from '@/types/types'

const cards: Ref<CardsType[]> = ref([])
const allCategories = ref([])
const limit = 6
const page = ref(1)
const category = ref('')
let totalCount = ref(0)

const getExcursionCards = async () => {
  const queryParams = new URLSearchParams({
    limit: String(limit),
    page: String(page.value),
    category: category.value
  }).toString()

  try {
    const response = await fetch(`${EXCURSION}?${queryParams}`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const newCards = await response.json()
totalCount.value= newCards.totalCount
    cards.value = newCards.data
  } catch (error) {
    console.log("Ошибка при получении 'foodCards'")
  }
}
getExcursionCards()

async function getCategories(url: string) {
  try {
    const fetchCategory = await fetch(`${url}/categories`)

    allCategories.value = await fetchCategory.json()
  } catch (error) {
    console.log(error)
  }
}
getCategories(EXCURSION)

function changePage(newPage:number){
  page.value=newPage
  getExcursionCards()

}
</script>

<style scoped></style>
