<template>
  <top-section
    class="top-section"
    :img="'https://firebasestorage.googleapis.com/v0/b/hurghada-7bbca.appspot.com/o/excursions%2Fmain%20photo.png?alt=media&token=0c271488-fc42-47e3-8df9-eee15daaafbc'"
    >DuPort Pool Club El Gounain
  </top-section>
  <div class="container">
    <bread-crumbs></bread-crumbs>
    <card-info class="info" v-if="card?._id" :card="card" :page="'excursion'"></card-info>
    <reviews-section
      v-if="card?._id"
      :title="card.name"
      :reviews="card.reviews"
      :rating="card.rating"
    ></reviews-section>
    
  </div>
</template>

<script setup lang="ts">
import TopSection from '@/components/sections/TopSection.vue'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import CardInfo from '@/components/info_card/CardInfo.vue'
import ReviewsSection from '@/components/info_card/ReviewsSection.vue'

import { type CardsType } from '@/types/types'
import { computed, ref, watch } from 'vue'
import { useFetchCard } from '@/composables/useFetchCard'
import { useRoute } from 'vue-router'
import { EXCURSION } from '@/constants'

const route = useRoute()
const id = ref(`${EXCURSION}/${route.params.id}` as string)

const { loading, error, card } = useFetchCard<CardsType>(id)
</script>

<style scoped>
@import '@/assets/style/variable.css';
.top-section {
  color: var(--primaryHeader);
}
.info {
  margin-bottom: 80px;
}
</style>
