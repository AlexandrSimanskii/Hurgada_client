<template>
  <header class="header container">
    <router-link to="/"
      ><img class="logo" src="/src/assets/images/image/hurghada.png" alt="hurghada"
    /></router-link>

    <ul class="navigation">
      <li
        class="navigation__el" 
        v-for="list of Object.entries(navList)"
        @click="$router.push(list[1])"
        :key="list[0]"                                    
      >
        {{ list[0] }}
      </li>
    </ul>
    <div class="weather">
      <img src="/src/assets/images/icons/wheather.png" alt="cloud" />Hurghada, Red Sea
      {{ temperature }}C
    </div>
    <ul class="icons">
      <li class="icons__el"><img src="/src/assets/images/icons/search.png" /></li>
      <li class="icons__el"><img src="/src/assets/images/icons/user.png" /></li>
      <li class="icons__el"><img src="/src/assets/images/icons/menu.png" /></li>
    </ul>
    <div class="language">
      En
      <div class="img"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const navList: {
  'Thinks to do': string
  Excursions: string
  News: string
  'Night life': string
  'Food guide': string
  'Real estate': string
  Jobs: string
  'Airport transfer': string
  'Contact us': string
} = {
  'Thinks to do': 'think',
  Excursions: 'excursions',
  News: 'news',
  'Night life': 'nightlife',
  'Food guide': 'foodguide',
  'Real estate': 'realestate',
  Jobs: 'jobs',
  'Airport transfer': 'airport',
  'Contact us': 'contacts'
}

const temperature = ref('')
const isAnimate = ref(false)

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

  &__el {
    padding: 0 30px;
    cursor: pointer;
    &:not(:last-child) {
      border-right: 1px solid #616161;
    }
  }
}

.navigation {
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 20px;
  flex-wrap: wrap;
  height: 20px;
  overflow-y: hidden;
  &__el {
    cursor: pointer;
  }
}

.language {
  cursor: pointer;
  display: flex;
  gap: 5px;
}
.img {
  position: relative;
  &::before {
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
