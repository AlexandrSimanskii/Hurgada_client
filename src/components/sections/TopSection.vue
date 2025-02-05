<template>
  <div
    class="top"
    :style="{
      backgroundImage: `url(${img})`
    }"
  >
    <div class="text">
      <p><slot></slot></p>
      <p class="text-bottom">Hurgada</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  img: String
})
</script>

<style scoped>
.top {
  position: relative;
  height: 520px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
}
.text {
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
}
.text-bottom {
  line-height: 0.7;

  letter-spacing: 6px;
  font-size: 64px;
  font-weight: 900;
  text-transform: uppercase;
  transform: translateX(-3px);
}
</style>
