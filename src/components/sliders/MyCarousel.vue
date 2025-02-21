<template>
 
  <div class="swiper">
   
    <div class="swiper-wrapper">
    
      <div
        class="swiper-slide"
        v-for="image of props.images"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
    </div>
  
    <div class="swiper-pagination"></div>

   
    <div class="swiper-button-prev button"></div>
    <div class="swiper-button-next button"></div>
  </div>
</template>

<script setup lang="ts">
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { onMounted } from 'vue'

const props = defineProps<{
  images: string[]
}>()

onMounted(() => {
  new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    speed: 400,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 1000
    },
    loop: true
  })
})
</script>

<style scoped>
@import '@/assets/style/main';
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-pagination-bullet {
  border-radius: 1px !important;
}
.swiper {
  --swiper-navigation-size: 14px;
  --swiper-pagination-bullet-inactive-opacity: 0.7;
  --swiper-pagination-bullet-inactive-color: #ffffff;
  --swiper-navigation-color: var(--primaryMain);
  --swiper-pagination-color: var(--primaryMain);
}
</style>
