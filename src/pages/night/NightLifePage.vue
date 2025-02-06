<template>
  <top-section
    class="top"
    :img="'https://firebasestorage.googleapis.com/v0/b/hurghada-7bbca.appspot.com/o/night%2Fmain_photo.png?alt=media&token=31625894-f103-4db1-917d-ecc447701438'"
  >
    Night life</top-section
  >

  <div ref="content" class="content-wrapper">
    <content-section :categories="categories" :cards="data"
      >choose how you want to spend the night</content-section
    >
  </div>

  <my-pagination
    class="a"
    @page="curentPage = $event"
    :limit="limit"
    :totalCount="totalCount"
  ></my-pagination>

  <description-section :descriptionsAttr="descriptionsAttr"></description-section>
</template>

<script setup lang="ts">
import { useFetchData } from '@/composables/useFetchData'
import TopSection from '@/components/sections/TopSection.vue'
import ContentSection from '@/components/sections/ContentSection.vue'
import MyPagination from '@/components/MyPagination.vue'
import descriptionsAttr from '@/constants/descriptionsAttr'
import DescriptionSection from '@/components/sections/DescriptionSection.vue'
import { NIGHTS, NIGHTS_CATEGORIES } from '@/constants'
import { type CardsType } from '@/types/types'
import { ref, computed, watch } from 'vue'
import { useFetchCategories } from '@/composables/useFetchCategories'

const limit = 6
const curentPage = ref(1)
const category = ref('')
const content = ref(null)

const queryParams = computed(() =>
  new URLSearchParams({
    limit: String(limit),
    page: String(curentPage.value),
    category: category.value
  }).toString()
)

const { data, totalCount, loading, error, fetchData } = useFetchData<CardsType>(NIGHTS, queryParams)

const { categories } = useFetchCategories<string>(`${NIGHTS_CATEGORIES}`)

watch([curentPage], () => {
  const el = content.value as HTMLElement | null
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY + 120
    window.scrollTo({ top, behavior: 'smooth' })
  }
})
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
