<template>
  <top-section
    class="top"
    :img="'https://firebasestorage.googleapis.com/v0/b/hurghada-7bbca.appspot.com/o/night%2Fmain_photo.png?alt=media&token=31625894-f103-4db1-917d-ecc447701438'"
  >
    Night life</top-section
  >
  <content-section :categories="allCategories" :cards="cards"
    >choose how you want to spend the night</content-section
  >
  <my-pagination @page="changeCards" :limit="limit" :totalCount="totalCount"></my-pagination>

  <description-section></description-section>
</template>

<script setup lang="ts">
import TopSection from '@/components/sections/TopSection.vue'
import ContentSection from '@/components/sections/ContentSection.vue'
import MyPagination from '@/components/MyPagination.vue'
import DescriptionSection from '@/components/sections/DescriptionSection.vue'
import { NIGHTS } from '@/constants'
import { type CardsType } from '@/types/types'
import { ref } from 'vue'
import type { Ref } from 'vue'

const cards: Ref<CardsType[]> = ref([])
const allCategories = ref([])
const limit = 6
const page = ref(1)
const category = ref('')
let totalCount = ref(0)

async function getNight() {
  const queryParams = new URLSearchParams({
    limit: String(limit),
    page: String(page.value),
    category: category.value
  }).toString()

console.log(queryParams);




  try {
    const response = await fetch(`${NIGHTS}?${queryParams}`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const newData = await response.json()
    totalCount.value = newData.totalCount
    cards.value = newData.data
  } catch (error) {}
}

getNight()

async function getCategories(url: string) {
  try {
    const fetchCategory = await fetch(`${url}/categories`)

    allCategories.value = await fetchCategory.json()
  } catch (error) {
    console.log(error)
  }
}
getCategories(NIGHTS)




function changeCards(newPage: number) {
  page.value = newPage
  getNight()
}
</script>

<style scoped>
@import '@/assets/style/main.css';
.top {
  text-transform: uppercase;
  color: var(--primaryHeader);
  font-family: 'Oswald';
}
</style>
