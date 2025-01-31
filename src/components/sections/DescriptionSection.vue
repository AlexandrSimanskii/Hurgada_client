<template>
  <div class="descriptions">
    <div class="top">
      <h4 class="title">{{ title }}</h4>
      <p v-for="(text,idx) of textTitle" :key="idx"  class="under-title">{{ text }}</p>
    </div>

    <div class="hightlights">
      <h5 class="hightlights-title">hightlights</h5>
      <ul class="list">
        <li class="list-element" v-for="list of hightlights" :key="list">{{ list }}</li>
      </ul>
    </div>
    <div class="bottom">
      <h4 class="subtitle">{{ subTitle }}</h4>
      <p v-for="(text,idx) of textSubTitle" :key="idx" class="under-subtitle">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  textTitle: string[]
  subTitle: string
  textSubTitle: string[]
  hightlights: string[]
}>()
</script>

<style scoped></style>
