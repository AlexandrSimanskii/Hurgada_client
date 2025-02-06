<template>
  <div class="swiper cardSwiper">
    <div class="swiper-wrapper">
      <div
        v-for="slide of slides"
        class="swiper-slide"
        :style="{ backgroundImage: `url(${slide})` }"
      ></div>
    </div>

    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>

    <div class="swiper-pagination"></div>
  </div>
</template>

<script setup lang="ts">
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { onMounted } from 'vue'

onMounted(() => {
  new Swiper('.cardSwiper', {
    modules: [Navigation, Pagination],
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 100
    },
    loop: true
  })
})

const props = defineProps<{
  slides: string[]
}>()
</script>

<style scoped>
.swiper {
  width: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cardSwiper .swiper-button-next,
.cardSwiper .swiper-button-prev {
  top: 100%;
  transform: translateY(-110%);
  border-radius: 50%;
  padding: 20px;
  background-color: aliceblue;
}

.swiper {
  --swiper-navigation-size: 14px;
  --swiper-pagination-bullet-inactive-opacity: 0.7;
  --swiper-pagination-bullet-inactive-color: #ffffff;
  --swiper-navigation-color: var(--primaryMain);
  --swiper-pagination-color: var(--primaryMain);
}
</style>
