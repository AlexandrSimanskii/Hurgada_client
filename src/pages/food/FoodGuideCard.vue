<template>
  <top-section
    :img="'https://firebasestorage.googleapis.com/v0/b/hurghada-7bbca.appspot.com/o/food%2Fsecond_photo.png?alt=media&token=da46ebd2-90fa-4105-8bef-5404858c52bd'"
    >DuPort Pool Club El Gounain
  </top-section>
  <card-info :slides="slides" class="info" v-if="card?._id" :card="card"></card-info>
  <reviews-section
    v-if="card?._id"
    :title="card.name"
    :reviews="card.reviews"
    :rating="card.rating"
  ></reviews-section>
</template>

<script setup lang="ts">
import TopSection from '@/components/sections/TopSection.vue'
import CardInfo from '@/components/info_card/CardInfo.vue'
import ReviewsSection from '@/components/info_card/ReviewsSection.vue'
import foodsImages from '@/constants/foodsImages'
import { computed, ref } from 'vue'
import { type CardsType } from '@/types/types'
import { useFetchCard } from '@/composables/useFetchCard'
import { useRoute } from 'vue-router'
import { FOODS } from '@/constants'

const route = useRoute()
const id = ref(`${FOODS}/${route.params.id}` as string)

const { loading, error, card } = useFetchCard<CardsType>(id)

const slides = computed(() => {
  const slide = []
  if (card.value?.images) slide.push(card.value?.images)
  return slide.concat(foodsImages)
})
</script>

<style scoped>
.info {
  margin: 80px 0;
}
</style>
