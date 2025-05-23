<template>
  <header class="header container">
    <router-link to="/">
      <img @click="handlerClickLogo" class="logo" src="/images/image/hurghada.png" alt="hurghada" />
    </router-link>

    <ul class="navigation">
      <li
        v-for="[key, value] in Object.entries(navList)"
        :data-name="key"
        class="navigation__el"
        :class="key == activeLink ? 'navigation__el--active' : ''"
        @click="(e) => handlerClickList(e, key, value.link)"
        :key="key"
      >
        {{ key }}
      </li>
      <li class="decoration" :style="{ left: decorationLeft, width: decorationWidth }"></li>
    </ul>

    <div class="weather">
      <img src="/images/icons/wheather.png" alt="cloud" /><span>Hurghada, Red Sea</span>
      {{ temperature }}C
    </div>
    <ul class="icons">
      <li class="icons__el" @click="$emit('showModal', 'signIn')">
        <img src="/images/icons/user.svg" />
      </li>
      <li class="icons__el" @click="$emit('showModal', 'menu')">
        <img src="/images/icons/Menu.svg" />
      </li>
    </ul>
    <div class="language">En</div>
  </header>
  <Toast />
</template>

<script setup lang="ts">
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import navList from '@/constants/navlist'
import { ref, nextTick, watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useActiveLink } from '@/stores/activeLink'

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

const linkStore = useActiveLink()
const router = useRouter()
const temperature = ref('')
const { active: activeLink } = storeToRefs(linkStore)
const setLink = linkStore.setActive
const decorationLeft = ref('0')
const decorationWidth = ref('0')
const rawHeader = sessionStorage.getItem('header')
const storage = rawHeader ? JSON.parse(rawHeader) : {}

decorationLeft.value = storage.decorationLeft || '0'
decorationWidth.value = storage.decorationWidth || '0'

const getWeather = async () => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=69ed7b91ab4b4d4f9f282327242604&q=Hurghada`
    )
    const data = await response.json()
    if (data?.current?.temp_c !== undefined) {
      temperature.value = data.current.temp_c
    } else {
      console.error('Invalid weather API response', data)
    }
  } catch (error) {
    console.error('Failed to fetch weather data:', error)
  }
}
getWeather()

const setUnderLine = () => {
  const element = document.querySelector(`[data-name="${activeLink.value}"]`) as HTMLElement | null
  const navigation = document.querySelector('.navigation') as HTMLElement | null
  if (!element || !navigation) return

  const elementRect = element.getBoundingClientRect()
  const navigationRect = navigation.getBoundingClientRect()

  let { width, left } = elementRect
  let navigationLeft = navigationRect.left

  if (elementRect.top - navigationRect.top > 10) {
    decorationLeft.value = `0px`
    width = 0
    left = 0
    navigationLeft = 0
  }

  decorationLeft.value = `${left - navigationLeft}px`
  decorationWidth.value = `${width}px`

  sessionStorage.setItem(
    'header',
    JSON.stringify({
      decorationLeft: decorationLeft.value,
      decorationWidth: decorationWidth.value
    })
  )
}

const handlerClickList = async (e: Event, key: string, value: string) => {
  // if (!value) {
  //   show()
  //   return
  // }

  setLink(key)
  router.push(`/${value}`)
}

function handlerClickLogo() {
  sessionStorage.removeItem('header')
  decorationLeft.value = '0'
  decorationWidth.value = '0'
  setLink('')
}

watch(activeLink, async () => {
  await nextTick()
  setUnderLine()
})
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
  position: relative;
  cursor: pointer;
  display: flex;
  gap: 5px;
}

.decoration {
  transition-duration: 500ms;
  position: absolute;
  bottom: -1px;
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

@media (max-width: 1120px) {
  .header {
    gap: 20px;
  }
  .weather span {
    display: none;
  }
}

@media (max-width: 760px) {
  .navigation {
    display: none;
  }
  .decoration {
    display: none;
  }
  @media (max-width: 520px) {
    .header {
      gap: 8px;
    }
    .logo {
      width: 100px;
    }
    .icons__el {
      padding: 0 10px;
      /* width: 16px; */
    }
  }
  @media (max-width: 360px) {
    .language {
      transform: translateY(-10px);
      gap: 2px;
      font-size: 10px;
    }
  }
}
</style>
