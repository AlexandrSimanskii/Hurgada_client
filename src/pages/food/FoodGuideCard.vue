<template>
  <top-section
    :img="'https://firebasestorage.googleapis.com/v0/b/hurghada-7bbca.appspot.com/o/food%2Fsecond_photo.png?alt=media&token=da46ebd2-90fa-4105-8bef-5404858c52bd'"
    >DuPort Pool Club El Gounain
  </top-section>
  <card-info
    :slides="slides"
    class="info"
    v-if="card?._id"
    :card="card"
    @show-modal="showModal"
  ></card-info>
  <reviews-section
    v-if="card?._id"
    :title="card.name"
    :reviews="card.reviews"
    :rating="card.rating"
  ></reviews-section>

  <side-bar  @clickClose="hideModal"> <form-book></form-book></side-bar>
</template>

<script setup lang="ts">
import TopSection from '@/components/sections/TopSection.vue'
import CardInfo from '@/components/info_card/CardInfo.vue'
import FormBook from '@/components/FormBook.vue'
import ReviewsSection from '@/components/info_card/ReviewsSection.vue'
import SideBar from '@/components/SideBar.vue'
import foodsImages from '@/constants/foodsImages'
import { useSidebarStore } from '@/stores/sidebarStore'
import { useModal } from '@/composables/useModal'
import { computed, ref } from 'vue'
import { type CardsType } from '@/types/types'
import { useFetchCard } from '@/composables/useFetchCard'
import { useRoute } from 'vue-router'
import { FOODS } from '@/constants'

const store = useSidebarStore()

const route = useRoute()
const id = ref(`${FOODS}/${route.params.id}` as string)

const { loading, error, card } = useFetchCard<CardsType>(id)

const slides = computed(() => {
  const slide = []
  if (card.value?.images) slide.push(card.value?.images)
  return slide.concat(foodsImages)
})
const { showModal, hideModal } = useModal()
</script>

<style scoped>
.info {
  margin: 80px 0;
}
</style>
