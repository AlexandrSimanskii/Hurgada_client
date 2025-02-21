<template>
  <div class="wrapper">
    <header-app @showModal="handleClick"></header-app>
    <side-bar v-if="isVisible" @click-close="isVisible = false">
      <GlobalMenu v-if="element === 'menu'" />
      <register-form v-if="element === 'signIn'"
    /></side-bar>
    <main class="main"><RouterView /></main>
    <footer-app></footer-app>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import HeaderApp from './components/HeaderApp.vue'
import FooterApp from './components/FooterApp.vue'
import SideBar from './components/SideBar.vue'
import RegisterForm from './components/globl_sidebar/RegisterForm.vue'
import GlobalMenu from './components/globl_sidebar/GlobalMenu.vue'


const isVisible = ref(false)
const element = ref()

function handleClick(value: string) {
  element.value = value
  isVisible.value = true
}


</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main {
  flex: 1 0 auto;
}

form {
  margin: 60px 20px;
}
</style>
