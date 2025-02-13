<template>
  <div class="card" v-if="card?._id">
    <excursion-carousel :slides="slides" class="slide" v-if="isExcursionPage"></excursion-carousel>
    <card-slider :slides="slides" class="slide" v-else></card-slider>
    <div class="card-info">
      <h3 class="info__title">{{ card.name }}</h3>
      <div v-if="isExcursionPage" class="rating">
        <my-rating :rating="card.rating"></my-rating>
        <p>( 216 reviews)</p>
      </div>

      <div class="info__reviews"></div>

      <div class="info__text">{{ card.description }}</div>

      <div v-if="isExcursionPage" class="lists">
        <ul class="first__list">
          <li class="first-element" v-for="list of card.program">{{ list }}</li>
        </ul>

        <ul v-if="card.group" class="second-list">
          <li class="group second-element">{{ card.group }}</li>
          <li class="pickup second-element">Pickup available</li>
          <li class="duration second-element">{{ durationText }}</li>
        </ul>
      </div>
      <ul v-else class="first__list">
        <li class="first-element" v-for="list of card.highlights">{{ list }}</li>
      </ul>

      <p class="info__location">
        Location: <span>{{ location }}</span>
      </p>

      <p v-if="card.price" class="info__price">
        $ {{ card.price }} <span class="price-span">per person</span>
      </p>

      <div class="info__btns">
        <my-button @click="showModal()" :image="CalendarCheck" class="buttonColored"
          >Book now</my-button
        >
        <my-button class="info-btn" :image="PhoneCall"></my-button>
        <my-button class="info-btn" :image="Message"></my-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExcursionCarousel from '@/components/sliders/ExcursionCarousel.vue'
import CardSlider from '../sliders/CardSlider.vue'
import MyRating from '@/components/MyRating.vue'

import MyButton from '@/components/UI/MyButton.vue'
import CalendarCheck from '@/assets/images/icons/CalendarCheck.svg'
import Message from '@/assets/images/icons/message.svg'
import PhoneCall from '@/assets/images/icons/PhoneCall.svg'
import { type CardsType } from '@/types/types'
import { computed, ref } from 'vue'

const props = defineProps<{
  card: CardsType
  page?: string
  slides: string[]
}>()

const emit = defineEmits(['showModal'])

function showModal() {
  emit('showModal')
}

const isExcursionPage = computed(() => {
  return props.page === 'excursion'
})

const location = computed(() => {
  return card.location || 'Caduceus Lane - Hurghada, Red Sea, Egypt'
})

const card = props.card

const durationText = computed(() => {
  const num = card.duration || 0
  if (!num) return ''

  return Number(num) === 1 ? `${num} hour` : `${num} hours`
})
</script>

<style scoped>
.card {
  width: 100%;
  display: flex;
  gap: 20px;
}
.slide {
  width: 50%;
}

.card-info {
  width: 50%;
}

.info__title {
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 500;
  font-family: 'Oswald', sans-serif;
}

.rating {
  display: flex;
  align-items: center;

  gap: 16px;
  margin-bottom: 20px;
}
.info__text {
  margin-bottom: 20px;
}

.first__list {
  font-weight: 500;
  margin-bottom: 30px;
  font-family: 'Montserrat', sans-serif;
}
.first-element {
  position: relative;
  padding-left: 20px;
  font-size: 14px;
}
.first-element::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--primaryMain);
}

.second-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}
.second-element {
  position: relative;
  padding-left: 30px;
}
.group::before,
.pickup::before,
.duration::before {
  content: '';
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
}
.group::before {
  background-image: url('@/assets/images/icons/users.svg');
}
.pickup::before {
  background-image: url('@/assets/images/icons/car.svg');
}

.duration::before {
  background-image: url('@/assets/images/icons/Timer.svg');
}
.info__location {
  font-weight: 500;
}
.info__location span {
  color: var(--primaryMain);
}

.info__price {
  font-size: 28px;
  font-weight: 500;
  font-family: 'Oswald', sans-serif;
  margin-bottom: 20px;
}
.info__price span {
  text-transform: uppercase;
  color: var(--primaryHeader);
}
.info__btns {
  display: flex;
  gap: 20px;
}
.info-btn {
  padding: 20px;
}
</style>
