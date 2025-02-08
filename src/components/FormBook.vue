<template>
  <aside class="sidebar">
    <form class="form">
      <IconField class="test">
        <InputIcon>
          <img class="material-icons" src="@/assets/images/icons/car.svg" alt="" />
        </InputIcon>
        <InputText v-model="name" placeholder="Search" />
      </IconField>
    </form>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'


const name = ref(null)
</script>

<style scoped>
.test{
    display: flex;
   align-items: center;
}</style>
