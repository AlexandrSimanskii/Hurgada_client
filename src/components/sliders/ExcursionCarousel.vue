<template>
  <div class="slider">
    <!-- Основной слайдер -->
    <div
      style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
      class="swiper main-swiper"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </div>
      </div>
      <!-- Кнопки навигации -->
      <div class="swiper-button-next button"></div>
      <div class="swiper-button-prev button"></div>
    </div>

    <!-- Слайдер миниатюр -->
    <div class="swiper thumbnail-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
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

onMounted(() => {
  // Инициализация слайдера миниатюр
  const thumbsSwiper = new Swiper('.thumbnail-swiper', {
    modules: [FreeMode, Thumbs],
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true
  })

  // Инициализация основного слайдера
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
</style>
