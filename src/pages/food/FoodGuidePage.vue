<template>
  <top-section
    class="top"
    :img="'https://firebasestorage.googleapis.com/v0/b/hurghada-7bbca.appspot.com/o/food%2Fmain_photo.png?alt=media&token=c8a20eec-c640-42d9-8e81-087dcf090276'"
  >
    Foods
  </top-section>
  <div class="content-wrapper" ref="content">
    <content-section :categories="categories" :cards="data"> choose how you foods </content-section>
  </div>

  <my-pagination @page="page = $event" :limit="limit" :totalCount="totalCount"></my-pagination>
  <description-section
    :descriptionsAttr="descriptionsAttr"
    v-bind="descriptionsAttr"
  ></description-section>
</template>

<script setup lang="ts">
import { useFetchData } from '@/composables/useFetchData'
import { useFetchCategories } from '@/composables/useFetchCategories'
import MyPagination from '@/components/MyPagination.vue'
import { ref, computed, watch } from 'vue'
import descriptionsAttr from '@/constants/descriptionsAttr'
import TopSection from '@/components/sections/TopSection.vue'
import ContentSection from '@/components/sections/ContentSection.vue'
import DescriptionSection from '@/components/sections/DescriptionSection.vue'

import { FOODS, FOODS_CATEGORIES } from '@/constants'
import { type CardsType } from '@/types/types'

const limit = 6
const page = ref(1)
const category = ref('')
const content = ref(null)

const queryParams = computed(() =>
  new URLSearchParams({
    limit: String(limit),
    page: String(page.value),
    category: category.value
  }).toString()
)

const { data, totalCount, loading, error, fetchData } = useFetchData<CardsType>(FOODS, queryParams)

const { categories } = useFetchCategories<string>(`${FOODS_CATEGORIES}`)

watch([page], () => {
  const el = content.value as HTMLElement | null
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY + 120
    window.scrollTo({ top, behavior: 'smooth' })
  }
})
</script>

<style scoped>
@import '@/assets/style/variable';
.top {
  color: var(--lightText);
}
</style>
