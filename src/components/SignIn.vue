<template>
  <side-bar @clickClose="clickClose"> <div class="content"></div> </side-bar>
</template>

<script setup lang="ts">
import SideBar from './SideBar.vue'
import { useSidebarStore } from '@/stores/sidebarStore'

const store = useSidebarStore()

function clickClose() {}
</script>

<style scoped></style>
