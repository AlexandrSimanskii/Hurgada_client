<template>
  <header class="header container">
    <router-link to="/"
      ><img
        @click="heandlerClickLogo"
        class="logo"
        src="/src/assets/images/image/hurghada.png"
        alt="hurghada"
    /></router-link>

    <ul class="navigation">
      <li
        class="navigation__el"
        :class="list[0] == activeLink ? 'navigation__el--active' : ''"
        v-for="list of Object.entries(navList)"
        @click="(e) => heandlerClickList(e, list)"
        :key="list[0]"
      >
        {{ list[0] }}
      </li>
      <li class="decoration" :style="{ left: decorationLeft, width: decorationWidth }"></li>
    </ul>
    <div class="weather">
      <img src="/src/assets/images/icons/wheather.png" alt="cloud" />Hurghada, Red Sea
      {{ temperature }}C
    </div>
    <ul class="icons">
      <li class="icons__el" @click="$emit('showModal', 'signIn')">
        <img src="/src/assets/images/icons/user.svg" />
      </li>
      <li class="icons__el" @click="$emit('showModal', 'menu')">
        <img src="/src/assets/images/icons/Menu.svg" />
      </li>
    </ul>
    <div class="language">
      En
      <div class="img"></div>
    </div>
  </header>
  <Toast />
</template>

<script setup lang="ts">
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import navList from '@/constants/navlist'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSidebarStore } from '@/stores/sidebarStore'

const toast = useToast()

const show = () => {
  toast.add({
    severity: 'warn',
    summary: 'Info',
    detail: 'Этот контент еще в разработке',
    life: 3000
  })
}

defineEmits(['showModal'])

const store = useSidebarStore()
const router = useRouter()
const temperature = ref('')
const activeLink = ref('')
const decorationLeft = ref('0')
const decorationWidth = ref('0')

const rawHeader = sessionStorage.getItem('header')
const storage = rawHeader ? JSON.parse(rawHeader) : ''

activeLink.value = storage.activeLink
decorationLeft.value = storage.decorationLeft
decorationWidth.value = storage.decorationWidth

const getWheather = () => {
  fetch(`https://api.weatherapi.com/v1/current.json?key=69ed7b91ab4b4d4f9f282327242604&q=Hurghada`)
    .then((response) => response.json())
    .then((data) => {
      temperature.value = data.current.temp_c
    })
    .catch((error) => {
      console.error(error)
    })
}
getWheather()

const heandlerClickList = (e: Event, list: string[]) => {
  if (!list[1]) {
    show()
    return
  }

  const target = e.target as HTMLElement
  const targetCoords = target.getBoundingClientRect()
  const width = targetCoords.width
  const left = targetCoords.left
  const navigationLeft = document.querySelector('.navigation')?.getBoundingClientRect().left
  activeLink.value = list[0]
  decorationLeft.value = `${left - (navigationLeft || 0)}px`
  decorationWidth.value = `${width}px`

  router.push(`/${list[1]}`)

  const storage = {
    activeLink: list[0],
    decorationLeft: decorationLeft.value,
    decorationWidth: decorationWidth.value
  }

  sessionStorage.setItem('header', JSON.stringify(storage))
}

function heandlerClickLogo() {
  sessionStorage.setItem('header', '')
  decorationLeft.value = '0'
  decorationWidth.value = '0'
}
</script>

<style scoped lang="css">
@import '@/assets/style/main.css';
.logo {
  cursor: pointer;
}
.weather {
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
  text-wrap: nowrap;
}
.header {
  padding: 16px;
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  top: -100px;
  opacity: 0.5;
  color: #f5f5f5;
  background-color: rgba(53, 53, 53, 0.5);
  backdrop-filter: blur(3px);
  display: flex;
  gap: 80px;
  justify-content: space-between;
  align-items: center;
  animation: headerAnimate ease-in-out forwards;
  animation-duration: calc(var(--main-animation-duration));
  animation-delay: calc(var(--main-animation-delay / 5));
}

.icons {
  display: flex;
}
.icons__el {
  padding: 0 30px;
  cursor: pointer;
}

.icons__el img {
  transition: filter 0.3s;
}

.icons__el:hover img {
  transform: scale(1.1);
  filter: brightness(0) saturate(100%) invert(51%) sepia(89%) saturate(1447%) hue-rotate(333deg)
    brightness(102%) contrast(103%);
  transition: filter 0.3s;
}

.icons__el:not(:last-child) {
  border-right: 1px solid #616161;
}
.navigation {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 20px;
  flex-wrap: wrap;
  height: 24px;
  overflow-y: hidden;
}
.navigation__el {
  padding-bottom: 6px;
  cursor: pointer;
}

.navigation__el:hover {
  transform: translateY(-2px);

  transition: 500ms;
}

.language {
  cursor: pointer;
  display: flex;
  gap: 5px;
}
.img {
  position: relative;
}
.img ::before {
  content: '';
  position: absolute;
  right: -5px;
  top: 50%;
  mask-image: url(@assets/images/icons/language.svg);
  mask-size: cover;
  width: 5px;
  height: 5px;
  background-color: rgb(0, 255, 98);
}
.decoration {
  transition-duration: 500ms;
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;

  height: 3px;
  background-color: var(--primaryMain);
}
@keyframes headerAnimate {
  from {
    top: -100px;
    opacity: 0.5;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
</style>
