<template>
  <div class="field">
    <div class="boll"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'


</script>

<style scoped>
.field {
  border: 2px solid black;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: aquamarine;
}
.boll {
  border: 10px solid rebeccapurple;
  padding: 20px;
  position: absolute;
  top: 300px;
  left: 200px;
  width: 100px;
  height: 100px;
  background-color: brown;
}
</style>
