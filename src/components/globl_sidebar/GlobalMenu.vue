<template>
  <div class="menu">
    <social-block class="social" />
    <ul class="navigation">
      <li
        v-for="[key, value] in Object.entries(navList)"
        class="navigation__el"
        :class="key == activeLink ? 'navigation__el--active' : ''"
        @click="hendlerClickList(key, value)"
        :key="key"
      >
        {{ key }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useActiveLink } from '@/stores/activeLink'
import router from '@/router'
import { storeToRefs } from 'pinia'
import SocialBlock from '../home_page/SocialBlock.vue'
import navList from '@/constants/navlist'

const store = useActiveLink()
const { active: activeLink } = storeToRefs(store)
const setActive = store.setActive

const hendlerClickList = async (key: string, value: string) => {
  setActive(key)
  router.push(`/${value}`)
}
</script>

<style scoped>
@import '@/assets/style/variable.css';
.menu {
  margin: 20px 40px;
}
.navigation {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--lightText);
}
.navigation__el {
  cursor: pointer;
}
.navigation__el--active {
  color: var(--primaryMain);
}
.social {
  display: flex;
  gap: 10px;
}
</style>
