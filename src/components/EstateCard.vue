<template>
  <div class="card">
    <div class="card__img">
      <my-carousel :images="images"></my-carousel>
      <card-icons class="card-icons"></card-icons>
      <card-category class="card-category">rent</card-category>
    </div>
    <div class="card__content">
      <h2>{{ name }}</h2>

      <p>{{ description }}</p>
      <ul class="lists">
        <li class="list">
          <img src="@/assets/images/icons/estate_icons/MapPinLine.png" />{{ location }}
        </li>
        <li class="list">
          <img src="@/assets/images/icons/estate_icons/bathroom.png" />{{ bathroom }}
          {{ bathroom > 1 ? 'bathrooms' : 'bathroom' }}
        </li>
        <li class="list">
          <img src="@/assets/images/icons/estate_icons/FrameCorners.png " />{{ area }} m2 apartment
        </li>
        <li class="list">
          <img src="@/assets/images/icons/estate_icons/beds.png" />{{ beds }}
          {{ beds > 1 ? 'beds' : 'bed' }}
        </li>
      </ul>
      <div class="price">${{ price }} <span class="price__span">per night</span></div>
      <div class="buttons">
        <my-button class="button">Coll</my-button>
        <my-button>Message</my-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyCarousel from '@/components/MyCarousel.vue'
import CardIcons from './UI/CardIcons.vue'
import CardCategory from './UI/CardCategory.vue'
import { type EstateCardType } from '@/types/types'

const props = defineProps<{
  estate: EstateCardType
}>()

const { name, images, description, price, area, bathroom, beds, rating, location } = props.estate
</script>

<style scoped>
.card {
  display: flex;
  gap: 20px;
}
.card__img {
  position: relative;
  width: 50%;
  height: 420px;
  object-fit: cover;
}
.card__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.price {
  font-size: 28px;
  font-weight: 500;
}
.price__span {
  color: rgb(118, 154, 186);
}
.button {
  margin-right: 20px;
}
.card-icons {
  z-index: 10;
  position: absolute;
  top: 0px;
}
.card-category{
  margin: 20px;
  z-index: 10;
  position: absolute;
  top: 0px;
}
</style>
