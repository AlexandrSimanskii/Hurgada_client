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
          <img src="/images/icons/estate_icons/MapPinLine.png" />{{ location }}
        </li>
        <li class="list">
          <img src="/images/icons/estate_icons/bathroom.png" />{{ bathroom }}
          {{ bathroom > 1 ? 'bathrooms' : 'bathroom' }}
        </li>
        <li class="list">
          <img src="/images/icons/estate_icons/FrameCorners.png " />{{ area }} m2 apartment
        </li>
        <li class="list">
          <img src="/images/icons/estate_icons/beds.png" />{{ beds }}
          {{ beds > 1 ? 'beds' : 'bed' }}
        </li>
      </ul>
      <div class="price">${{ price }} <span class="price__span">per night</span></div>
      <div class="buttons">
        <my-button class="btn button">Coll</my-button>
        <my-button class="btn">Message</my-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyCarousel from '@/components/sliders/MyCarousel.vue'
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

.list {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}
.price {
  font-size: 28px;
  font-weight: 500;
}
.price__span {
  text-transform: uppercase;
  color: rgb(118, 154, 186);
}
.buttons {
  display: flex;
}
.button {
  margin-right: 20px;
}
.card-icons {
  z-index: 10;
  position: absolute;
  top: 0px;
}
.card-category {
  margin: 20px;
  z-index: 10;
  position: absolute;
  top: 0px;
}

@media (max-width: 1024px) {
  .card {
    flex-direction: column;
  }
  .card__img {
    object-fit: contain;
    width: 100%;
    background-repeat: no-repeat;
  }
}
@media (max-width: 580px) {
  .btn {
    padding: 1;
  }
}
</style>
