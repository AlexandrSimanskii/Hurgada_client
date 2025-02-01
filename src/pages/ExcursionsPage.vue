<template>
  <top-section
    class="top"
    :img="'https://firebasestorage.googleapis.com/v0/b/hurghada-7bbca.appspot.com/o/excursions%2Fsecond_photo.png?alt=media&token=20b903a4-e534-4e48-bb27-fb8dea7c965f'"
  >
    Foods</top-section
  >
  <content-section :categories="categories" :cards="data">choose how you fexdfsdf</content-section>
  <my-pagination @page="page = $event" :limit="limit" :totalCount="totalCount"></my-pagination>

  <!-- <description-section></description-section> -->
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFetchData } from '@/composables/useFetchData'
import { useFetchCategories } from '@/composables/useFetchCategories'
import MyPagination from '@/components/MyPagination.vue'

import type { Ref } from 'vue'
import TopSection from '@/components/sections/TopSection.vue'
import ContentSection from '@/components/sections/ContentSection.vue'
import DescriptionSection from '@/components/sections/DescriptionSection.vue'
import { EXCURSION } from '@/constants'

import { type CardsType } from '@/types/types'

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

const { categories } = useFetchCategories<string>(`${EXCURSION}/categories`)

const { data, totalCount, loading, error, fetchData } = useFetchData<CardsType>(
  EXCURSION,
  queryParams
)
</script>

<style scoped></style>
