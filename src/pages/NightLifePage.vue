<template>
  <top-section
    class="top"
    :img="'https://firebasestorage.googleapis.com/v0/b/hurghada-7bbca.appspot.com/o/night%2Fmain_photo.png?alt=media&token=31625894-f103-4db1-917d-ecc447701438'"
  >
    Night life</top-section
  >
  <content-section :categories="allCategories" :cards="data"
    >choose how you want to spend the night</content-section
  >
  <my-pagination
    class="a"
    @page="page = $event"
    :limit="limit"
    :totalCount="totalCount"
  ></my-pagination>

  <!-- <description-section></description-section> -->
</template>

<script setup lang="ts">
import { useFetchData } from '@/composables/useFetchData'
import TopSection from '@/components/sections/TopSection.vue'
import ContentSection from '@/components/sections/ContentSection.vue'
import MyPagination from '@/components/MyPagination.vue'
import DescriptionSection from '@/components/sections/DescriptionSection.vue'
import { NIGHTS } from '@/constants'
import { type CardsType } from '@/types/types'
import { ref, computed } from 'vue'
import type { Ref } from 'vue'

const allCategories = ref([])
const limit = 6
const page = ref(1)
const category = ref('')

const queryParams = computed(() =>
  new URLSearchParams({
    limit: String(limit),
    page: String(page.value),
    category: category.value
  }).toString()
)

const { data, totalCount, loading, error, fetchData } = useFetchData<CardsType>(NIGHTS, queryParams)

async function getCategories(url: string) {
  try {
    const fetchCategory = await fetch(`${url}/categories`)

    allCategories.value = await fetchCategory.json()
  } catch (error) {
    console.log(error)
  }
}
getCategories(NIGHTS)


</script>

<style scoped>
@import '@/assets/style/main.css';
.a {
  margin-top: 30px;
}
.top {
  text-transform: uppercase;
  color: var(--primaryHeader);
  font-family: 'Oswald';
}
</style>
