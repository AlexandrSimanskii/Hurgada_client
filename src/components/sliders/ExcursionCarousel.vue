<template>
  <div class="slider">
    <div
      style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
      class="swiper main-swiper"
    >
      <div class="swiper-wrapper">
        <div v-for="slide of slides" class="swiper-slide">
          <img class="slide-image" :src="slide" />
        </div>
      </div>

      <div class="swiper-button-next button"></div>
      <div class="swiper-button-prev button"></div>
    </div>

    <div class="swiper thumbnail-swiper">
      <div class="swiper-wrapper">
        <div v-for="slide of slides" class="swiper-slide">
          <img :src="slide" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import Swiper from 'swiper'
import { Navigation, Thumbs, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'

const props = defineProps<{
  slides: string[]
}>()

onMounted(() => {
  const thumbsSwiper = new Swiper('.thumbnail-swiper', {
    modules: [FreeMode, Thumbs],
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true
  })

  new Swiper('.main-swiper', {
    modules: [Navigation, Thumbs],
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: thumbsSwiper
    }
  })
})
</script>

<style scoped>
@import '@/assets/style/variable';

.swiper {
  --swiper-navigation-size: 16px;
}

.slider {
  width: 100%;
  margin: 0 auto;
}

.main-swiper {
  height: 450px;
  margin-bottom: 20px;
}

.thumbnail-swiper {
  height: 100px;
}

.thumbnail-swiper .swiper-slide {
  opacity: 0.6;
}
.thumbnail-swiper .swiper-slide-thumb-active {
  opacity: 1;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.button {
  border-radius: 50%;
  padding: 20px;
  background-color: aliceblue;
  color: var(--primaryMain);
}
@media (max-width: 640px) {
  .thumbnail-swiper {
    display: none;
  }
}
</style>
