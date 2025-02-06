<template>
  <div class="descriptions">
    <div class="container">
      <div class="top">
        <h4 class="title">{{ descriptionsAttr.title }}</h4>

        <p v-for="(text, idx) of descriptionsAttr.textTitle" :key="idx" class="under-title">
          {{ text }}
        </p>
      </div>

      <div class="hightlights">
        <h5 class="hightlights-title">hightlights</h5>
        <ul class="list">
          <li class="list-element" v-for="list of descriptionsAttr.hightlights" :key="list">
            {{ list }}
          </li>
        </ul>
      </div>
      <div class="bottom">
        <h4 class="title">{{ descriptionsAttr.subTitle }}</h4>
        <p v-for="(text, idx) of descriptionsAttr.textSubTitle" :key="idx" class="under-title">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface DescProps {
  title: string
  textTitle: string[]
  subTitle: string
  textSubTitle: string[]
  hightlights: string[]
}

const props = defineProps<{ descriptionsAttr: DescProps }>()
</script>

<style scoped>
@import '@/assets/style/variable.css';
.title {
  font-size: 28px;
  text-transform: uppercase;
  color: var(--primaryMain);
  margin-top: 40px;
}
.under-title {
  margin-bottom: 20px;
}
.hightlights-title {
  margin-bottom: 20px;
}
.list {
  list-style: disc;
  list-style-position: inside;
  font-family: 'Montserrat', sans-serif;
}

.list-element::marker {
  color: var(--primaryMain);
  font-size: 1.2em;
}
</style>
