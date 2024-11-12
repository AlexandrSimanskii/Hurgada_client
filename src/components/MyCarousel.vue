<template>
  <!-- Slider main container -->
  <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div
        class="swiper-slide"
        v-for="image of props.images"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>

      ...
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
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
      el: '.swiper-pagination'
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

.swiper {
  --swiper-navigation-size: 14px;
 
  --swiper-pagination-bullet-inactive-color: #ffffff;
  --swiper-navigation-color: var(--primaryMain);
  --swiper-pagination-color: var(--primaryMain);
}

.swiper-pagination-bullet-active {
  background: #f00; 
}
.button {
  border-radius: 50%;
  padding: 20px;
  background-color: aliceblue;
}
</style>
