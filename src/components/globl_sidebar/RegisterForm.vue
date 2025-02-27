<template>
  <div class="register">
    <div @click="(e) => handlerBtnsClick(e)" class="btns">
      <button ref="prev" data-button="true" class="register-prev nav-btn">SignIn</button>
      <button data-button="true" class="register-next nav-btn">SignUp</button>
      <span ref="underLine" class="under-nav"></span>
    </div>

    <div class="swiper registerSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <sign-in></sign-in>
        </div>
        <div class="swiper-slide">
          <sign-up></sign-up>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SignIn from './SignIn.vue'
import SignUp from './SignUp.vue'
import { onMounted, ref, nextTick } from 'vue'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const prev = ref<HTMLElement | null>(null)
const underLine = ref<HTMLElement | null>(null)

const handlerBtnsClick = (e: MouseEvent) => {
  const element = e.target as HTMLElement | null
  const btns = document.querySelector('.btns')?.getBoundingClientRect().left

  if (!element || !element.dataset.button) return
  const coords = element.getBoundingClientRect()

  if (underLine.value === null) return
  underLine.value.style.width = `${coords.width}px`
  underLine.value.style.left = `${coords.left - (btns || 0)}px`
}
onMounted(async () => {
  new Swiper('.registerSwiper', {
    modules: [Navigation],
    speed: 400,
    navigation: {
      nextEl: '.register-next',
      prevEl: '.register-prev'
    }
  })
  await nextTick()
  document.body.style.overflow = 'hidden'
  underLine.value!.style.width = `${prev.value?.clientWidth}px`
})
</script>

<style scoped>
@import '@/assets/style/variable.css';
.register {
  padding: 40px;
}
.btns {
  position: relative;
}
.nav-btn {
  font-size: 20px;
  font-family: 'Oswald', sans-serif;
  color: var(--lightText);
  margin-right: 50px;
}
.middle-text {
  color: var(--primaryMain);
}

.register .submit-btn {
  display: block;
  padding: 10px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.swiper {
  margin-top: 40px;
  width: 100%;
  height: 100%;
}
.under-nav {
  position: absolute;
  width: 20px;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--primaryMain);
  transition: all 0.3s ease;
}
</style>
