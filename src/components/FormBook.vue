<template>
  <template v-if="isSubmit">
    <form action="">
      <label>
        <span>Name</span>

        <div class="custom-input">
          <img class="input-image" src="@/assets/images/icons/person.svg" />
          <InputText placeholder="Name" /></div
      ></label>

      <label
        ><span>How many person</span>
        <div class="custom-select">
          <img class="input-image" src="@/assets/images/icons/users.svg" />
          <Select
            class="my-select"
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            placeholder="Select"
          >
            <template #dropdownicon>
              <img src="@/assets/images/icons/select.svg" alt="" />
            </template>
          </Select></div
      ></label>

      <label>
        <span>Language</span>
        <div class="custom-select">
          <img class="input-image" src="@/assets/images/icons/earth.svg" />
          <Select
            class="my-select"
            v-model="selectedLanguage"
            :options="languages"
            optionLabel="name"
            placeholder="Select Language"
          >
            <template #dropdownicon>
              <img src="@/assets/images/icons/select.svg" alt="" />
            </template>
          </Select>
        </div>
      </label>
      <label>
        <span>Date</span>
        <div class="custom-picker">
          <img class="input-image" src="@/assets/images/icons/earth.svg" />
          <DatePicker
            class="my-picker"
            placeholder="Date"
            v-model="date"
            showIcon
            fluid
            iconDisplay="input"
          >
            <template #inputicon="slotProps">
              <img
                src="@/assets/images/icons/select.svg"
                alt=""
                @click="slotProps.clickCallback"
              /> </template
          ></DatePicker></div
      ></label>
      <label>
        <span>Pickup location</span>

        <div class="custom-input">
          <img class="input-image" src="@/assets/images/icons/person.svg" />
          <InputText placeholder="Enter adress" /></div
      ></label>
      <label>
        <span>Phone</span>

        <div class="custom-input">
          <img class="input-image" src="@/assets/images/icons/person.svg" />
          <InputText placeholder="Enter phone" /></div
      ></label>
      <label>
        <span>Email</span>

        <div class="custom-input">
          <img class="input-image" src="@/assets/images/icons/person.svg" />
          <InputText placeholder="Enter email" /></div
      ></label>
      <my-button @click.prevent="formSubmit" :image="CalendarCheck" class="buttonColored"
        >Submit</my-button
      >
    </form></template
  >
  <div v-else class="side">
    Thanks for Your application
    <p>Our manager will contact you</p>
  </div>
  >
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import DatePicker from 'primevue/datepicker'

import CalendarCheck from '@/assets/images/icons/CalendarCheck.svg'

const name = ref('')
const date = ref()
const selectedCity = ref()
const selectedLanguage = ref()
const isSubmit = ref(true)
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])

const languages = ref([
  { name: '1', code: 'NY' },
  { name: '2', code: 'RM' },
  { name: '3', code: 'LDN' },
  { name: '4', code: 'IST' },
  { name: 'group', code: 'PRS' }
])

const emit = defineEmits(['hideModal'])

function hideModal() {
  emit('hideModal')
}
function formSubmit() {
  isSubmit.value = false
  const el = document.querySelector('.sidebar')
  el.style.height = `${document.body.getBoundingClientRect().height}px`
  setTimeout(hideModal, 3000)
}

onMounted(() => {
  const inputs = document.querySelectorAll('.p-inputtext')
  inputs.forEach((el) => {
    el.style.border = 'none'
  })

  const el = document.querySelector('.sidebar')
  if (el) {
    const height = el.getBoundingClientRect().height
    document.body.style.height = `${height}px`
  }
  document.body.style.overflow = 'hidden'
})
</script>

<style scoped>
@import '@/assets/style/variable.css';
.shadow {
  position: fixed;
  z-index: 5;
  height: 100vh;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.sidebar {
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  width: 340px;
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(10px);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
}
.side {
  margin: 160px 40px;
  color: var(--lightText);
  font-size: 36px;
  font-family: 'Oswald', sans-serif;

  font-weight: 600;
}
.side p {
  font-size: 20px;
  font-weight: 400;
}

.close-button {
  position: absolute;
  right: 16px;
  top: 16px;
}
form {
  display: flex;
  flex-direction: column;
  margin: 30px 20px;
  gap: 10px;
}
label span {
  font-size: 20px;
  color: var(--lightText);
  font-family: 'Oswald', sans-serif;
  margin-bottom: 16px;
}

.custom-input {
  height: 40px;
  border-radius: 4px;
  padding-left: 40px;
  position: relative;
  background-color: white;
}

.custom-input input {
  width: 100%;
  height: 100%;
  border: none;
}
.custom-select {
  position: relative;
  width: 100%;
  background-color: white;
  border-radius: 4px;
}
.my-select {
  border: none;
  width: 100%;
  padding-left: 40px;
}

.custom-picker {
  border-radius: 4px;
  padding-left: 40px;
  position: relative;
  background-color: white;
}

.input-image {
  position: absolute;
  z-index: 5;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.buttonColored {
  padding: 10px;
  margin-top: 20px;
  justify-content: center;
}
</style>
