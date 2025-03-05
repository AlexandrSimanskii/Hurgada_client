<template>
  <main>
    <home-top />

    <cards-section
      v-if="thinkToDoCards.length"
      :name="'Things To Do in Hurghada'"
      :link="'/excursions'"
    >
      <card-app
        @click="
          (e) => {
            handleClick(e, card._id, 'excursions')
          }
        "
        v-for="card of thinkToDoCards"
        :card="card"
        :key="card._id"
      ></card-app
    ></cards-section>

    <div class="new-section">
      <div class="container">
        <h3 class="title">Hurghada News</h3>
        <div class="new-cards">
          <new-card class="new-card" :image="'/images/image/news/new_1.jpg'">
            <template #title
              ><span class="first-title"
                >Egypt- Hurghada receives 1st tourist group from Berlin</span
              ></template
            >
            <template #subtitle
              >Tourist Office of the Egyptian Tourism Promotion Board in Egypt's Red Sea coastal
              city of Hurghada received...</template
            >
            12/20/2022 3:16:06 PM</new-card
          >
          <new-card class="new-card" :image="'/images/image/news/new_2.jpg'">
            <template #title>Egyptian Red Sea province to ban single use plastics</template>
            09/12/2022 2:42:10 PM</new-card
          >
          <new-card class="new-card" :image="'/images/image/news/new_3.jpg'">
            <template #title>Development Lights Up Hurghada with the First Edition</template>
            11/18/2022 6:12:01 PM</new-card
          >
        </div>
      </div>
    </div>

    <cards-section v-if="nightCards.length" :name="'Hurghada night life'" :link="'/nightlife'">
      <card-app
        @click="
          (e: MouseEvent) => {
            handleClick(e, card._id, 'nightlife')
          }
        "
        v-for="card of nightCards"
        :card="card"
        :key="card._id"
      ></card-app
    ></cards-section>

    <div class="partners container">
      <h5>OUR PARTNERS</h5>

      <div class="partners-content">
        <img v-for="(partner, idx) of partners" :src="partner" :key="idx" />
      </div>
    </div>

    <cards-section v-if="foodCards.length" :name="'FOOD & DINING GUIDE In Hurghada'" :link="'/'">
      <card-app
        @click="
          (e: MouseEvent) => {
            useCardClickHandler(e, card._id, 'foodguide')
          }
        "
        :key="card._id"
        v-for="card of foodCards"
        :card="card"
      ></card-app
    ></cards-section>

    <div v-if="estateCards.length" class="estate container">
      <h5>REAL ESTATE in Hurghada</h5>
      <div class="estate__cards">
        <estate-card v-for="estate of estateCards" :estate="estate"></estate-card>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import partners from '@/constants/partners'
import NewCard from '@/components/home_page/NewCard.vue'
import HomeTop from '@/components/home_page/HomeTop.vue'
import CardApp from '@/components/CardApp.vue'
import CardsSection from '@/components/CardsSection.vue'
import EstateCard from '@/components/EstateCard.vue'
import { BASE_URL } from '@/constants'
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useCardClickHandler } from '@/composables/useCardClickHandler'
import { type CardsType, type EstateCardType } from '@/types/types'
import router from '@/router'

const thinkToDoCards: Ref<CardsType[]> = ref([])
const foodCards: Ref<CardsType[]> = ref([])
const nightCards: Ref<CardsType[]> = ref([])
const estateCards: Ref<EstateCardType[]> = ref([])

const getThinkToDoCards = async () => {
  try {
    const newData = await fetch(`${BASE_URL}excursions/get`)
    const cards = await newData.json()

    thinkToDoCards.value = cards.data
  } catch (error) {
    console.log("Ошибка при получении 'ThinkToDoCards'")
  }
}
const getFoodCards = async () => {
  try {
    const data = await fetch(`${BASE_URL}foods/get`)
    const cards = await data.json()
    foodCards.value = cards.data
  } catch (error) {
    console.log("Ошибка при получении 'foodCards'")
  }
}
const getNightCards = async () => {
  try {
    const data = await fetch(`${BASE_URL}nights/get`)
    const cards = await data.json()
    nightCards.value = cards.data
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
const handleClick = (e: MouseEvent, id: string, path: string) => {
  const target = e.target as HTMLElement
  if (target.dataset.icon) return

  router.push(`/${path}/${id}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
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
  margin-bottom: 60px;
}
.estate__cards {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.new-cards {
  height: 600px;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
}
.title {
  text-transform: uppercase;
  font-size: 28px;
  width: 500;
  margin-bottom: 30px;
}
.first-title {
  font-size: 32px;
  font-weight: 600;
}
.new-card:first-child {
  grid-row: span 2;
}

@media (max-width: 980px) {
  .new-cards {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;
  }
  .new-card:nth-child(n + 3) {
    display: none;
  }
  .new-card:first-child {
    grid-row: span 1;
  }
}

@media (max-width: 800px) {
  .partners-content {
  
    justify-content:space-around;
   
  }
}
</style>
