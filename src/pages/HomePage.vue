<template>
  <main>
    <top-section />
    <div class="content container"></div>
    <cards-section :name="'Things To Do in Hurghada'" :link="'/excursions'">
      <card-app v-for="card of thinkToDoCards" :card="card"></card-app
    ></cards-section>
    <cards-section :name="'Hurghada night life'" :link="'/nightlife'">
      <card-app v-for="card of nightCards" :card="card"></card-app
    ></cards-section>

    <div class="partners container">
      <h5>OUR PARTNERS</h5>

      <div class="partners-content">
        <img v-for="(partner, idx) of partners" :src="partner" :key="idx" />
      </div>
    </div>

    <cards-section :name="'FOOD & DINING GUIDE In Hurghada'" :link="'/'">
      <card-app v-for="card of foodCards" :card="card"></card-app
    ></cards-section>

    <div class="estate container">
      <h5>REAL ESTATE in Hurghada</h5>
      <div class="estate__cards">
        <estate-card v-for="estate of estateCards" :estate="estate"></estate-card>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import partners from '@/utils/partners'
import TopSection from '@/components/TopSection.vue'
import CardApp from '@/components/CardApp.vue'

import CardsSection from '@/components/CardsSection.vue'
import EstateCard from '@/components/EstateCard.vue'
import { BASE_URL } from '@/constants'
import { ref } from 'vue'
import type { Ref } from 'vue'
import { type CardsType, type EstateCardType } from '@/types/types'

const thinkToDoCards: Ref<CardsType[]> = ref([])
const foodCards: Ref<CardsType[]> = ref([])
const nightCards: Ref<CardsType[]> = ref([])
const estateCards: Ref<EstateCardType[]> = ref([])

const getThinkToDoCards = async () => {
  try {
    const data = await fetch(`${BASE_URL}excursions/get`)
    const cards = await data.json()
    thinkToDoCards.value = cards
  } catch (error) {
    console.log("Ошибка при получении 'ThinkToDoCards'")
  }
}
const getFoodCards = async () => {
  try {
    const data = await fetch(`${BASE_URL}foods/get`)
    const cards = await data.json()
    foodCards.value = cards
  } catch (error) {
    console.log("Ошибка при получении 'foodCards'")
  }
}
const getNightCards = async () => {
  try {
    const data = await fetch(`${BASE_URL}nights/get`)
    const cards = await data.json()
    nightCards.value = cards
  } catch (error) {
    console.log("Ошибка при получении 'foodCards'")
  }
}
const getEstateCards = async () => {
  try {
    const data = await fetch(`${BASE_URL}estate/get`)
    const estate = await data.json()
    estateCards.value = estate
  } catch (error) {
    console.log('Ошибка при получении Estate')
  }
}

getFoodCards()
getThinkToDoCards()
getNightCards()
getEstateCards()
</script>

<style scoped>
.partners-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  height: 342px;
  overflow: hidden;
}
.estate {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.estate__cards {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

</style>
