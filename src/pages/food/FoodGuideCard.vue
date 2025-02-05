<template>
  <top-section
    :img="'https://firebasestorage.googleapis.com/v0/b/hurghada-7bbca.appspot.com/o/food%2Fsecond_photo.png?alt=media&token=da46ebd2-90fa-4105-8bef-5404858c52bd'"
    >DuPort Pool Club El Gounain
  </top-section>
  <card-info class="info" v-if="card?._id" :card="card"></card-info>
  <reviews-section></reviews-section>
</template>

<script setup lang="ts">
import TopSection from '@/components/sections/TopSection.vue'
import CardInfo from '@/components/info_card/CardInfo.vue'
import ReviewsSection from '@/components/info_card/ReviewsSection.vue'
import { ref } from 'vue'
import { type CardsType } from '@/types/types'
import { useFetchCard } from '@/composables/useFetchCard'
import { useRoute } from 'vue-router'
import { FOODS } from '@/constants'

const route = useRoute()
const id = ref(`${FOODS}/${route.params.id}` as string)

const { loading, error, card } = useFetchCard<CardsType>(id)
</script>

<style scoped>
.info {
  margin-bottom: 80px;
}
</style>
