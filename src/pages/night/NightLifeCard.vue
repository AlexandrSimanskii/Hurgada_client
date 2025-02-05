<template>
  <top-section
    :img="'https://firebasestorage.googleapis.com/v0/b/hurghada-7bbca.appspot.com/o/night%2Fmain_photo.png?alt=media&token=31625894-f103-4db1-917d-ecc447701438'"
    >DuPort Pool Club El Gounain
  </top-section>
  <div class="container">
    <card-info class="info" v-if="card?._id" :card="card"></card-info>
    <reviews-section></reviews-section>
  </div>
</template>

<script setup lang="ts">
import TopSection from '@/components/sections/TopSection.vue'
import CardInfo from '@/components/info_card/CardInfo.vue'
import ReviewsSection from '@/components/info_card/ReviewsSection.vue'
import { type CardsType } from '@/types/types'
import { ref } from 'vue'
import { useFetchCard } from '@/composables/useFetchCard'
import { useRoute } from 'vue-router'
import { NIGHTS } from '@/constants'

const route = useRoute()
const id = ref(`${NIGHTS}/${route.params.id}` as string)

const { loading, error, card } = useFetchCard<CardsType>(id)
</script>

<style scoped>
.info {
  margin-bottom: 80px;
}
</style>
