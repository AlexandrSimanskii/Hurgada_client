<template>
  <top-section
    class="top"
    :img="'https://firebasestorage.googleapis.com/v0/b/hurghada-7bbca.appspot.com/o/food%2Fmain_photo.png?alt=media&token=c8a20eec-c640-42d9-8e81-087dcf090276'"
  >
    Foods
  </top-section>

  <content-section :categories="allCategories" :cards="data">
    choose how you foods
  </content-section>

  <my-pagination @page="page = $event" :limit="limit" :totalCount="totalCount"></my-pagination>
  <description-section v-bind="descriptionsAttr"></description-section>
</template>

<script setup lang="ts">
import { useFetchData } from '@/composables/useFetchData'
import MyPagination from '@/components/MyPagination.vue'
import { ref, computed, onMounted } from 'vue'
import type { Ref } from 'vue'
import TopSection from '@/components/sections/TopSection.vue'
import ContentSection from '@/components/sections/ContentSection.vue'
import DescriptionSection from '@/components/sections/DescriptionSection.vue'
import descriptionsAttr from '@/constants/descriptionsAttr'
import { FOODS } from '@/constants'
import { type CardsType } from '@/types/types'

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

const { data, totalCount, loading, error, fetchData } = useFetchData<CardsType>(
  FOODS,
  queryParams
)

async function getCategories(url: string) {
  try {
    const response = await fetch(`${url}/categories`)
    if (!response.ok) throw new Error('Ошибка загрузки категорий')

    allCategories.value = await response.json()
  } catch (err) {
    console.error('Ошибка при загрузке категорий:', err)
  }
}

onMounted(() => {
  getCategories(FOODS)
})


</script>

<style scoped>
@import '@/assets/style/variable';
.top {
  color: var(--lightText);
}
</style>
