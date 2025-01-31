<template>
  <div class="test">
    Think to do Page
    <router-link to="/">Go home</router-link>
    <my-toast></my-toast>
  </div>
</template>

<script setup lang="ts">
import MyToast from '@/components/MyToast.vue'
</script>

<style lang="scss" scoped>
.test {
  color: red;
  margin-top: 150px;
}
</style>
