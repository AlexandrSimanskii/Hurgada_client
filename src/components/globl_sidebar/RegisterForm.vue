<template>
  <h1 v-if="error">{{ error }}</h1>
  <div class="register">
    <button class="register-prev nav-btn">SignIn</button>
    <button class="register-next nav-btn">SignUp</button>

    <div class="swiper registerSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <form>
            <InputText type="text" v-model="signInData.email" placeholder="Enter email*" />
            <p class="middle-text">or</p>
            <InputText type="text" v-model="signInData.number" placeholder="Number phone*" />
            <InputText type="password" v-model="signInData.password" placeholder="Password*" />
            <p class="">forgot password</p>

            <IconField>
              <InputText placeholder="Search" />
              <InputIcon class="pi pi-search"></InputIcon>
            </IconField>

            <my-button @click.prevent="handlerSignIn" class="buttonColored submit-btn"
              >Login</my-button
            >
            <my-button class="buttonGlass submit-btn">Sign up with google</my-button>
          </form>
        </div>
        <div class="swiper-slide">
          <form>
            <InputText type="text" v-model="signUpData.name" placeholder="Name*" />
            <InputText type="text" v-model="signUpData.email" placeholder="Email*" />
            <InputText type="text" v-model="signUpData.number" placeholder="Number phone*" />
            <InputText type="password" v-model="signUpData.password" placeholder="Password*" />
            <InputText
              type="password"
              v-model="signUpData.confirm"
              placeholder="Confirm password*"
            />

            <my-button @click.prevent="handlerSignUp" class="buttonColored submit-btn"
              >Register</my-button
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

import { onMounted, ref } from 'vue'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const isPasswordEmpty = ref(true)
const error = ref('')
const signUpData = ref({ name: '', email: '', number: '', password: '', confirm: '' })
const signInData = ref({ email: '', number: '', password: '' })

const handlerSignUp = () => {
  console.log(signUpData.value)
}
const handlerSignIn = () => {
  error.value = ''
  const { email, number, password } = signInData.value

  if (!email && !number) {
    error.value = 'Enter Email or number'
    return
  }

  if (!password) {
    error.value = 'Enter password'
    return
  }
  if (!/\+\d\(\d{3}\) \d{3} \d{2} \d{2}/.test(number)) {
    error.value = 'Wrong number'
  }
}

onMounted(() => {
  new Swiper('.registerSwiper', {
    modules: [Navigation],
    speed: 400,
    navigation: {
      nextEl: '.register-next',
      prevEl: '.register-prev'
    },

    autoplay: {
      delay: 1000
    }
  })
})
</script>

<style scoped>
@import '@/assets/style/variable.css';
.register {
  padding: 40px;
}
.nav-btn,
.middle-text {
  font-size: 20px;
  font-family: 'Oswald', sans-serif;
  color: var(--lightText);
  margin-right: 50px;
}
.middle-text {
  color: var(--primaryMain);
}

.register .submit-btn {
  display: block;
  padding: 10px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.swiper {
  margin-top: 40px;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  /* text-align: center;
  font-size: 18px;
  background: #8b2222;
  display: flex;
  justify-content: center;
  align-items: center; */
}
</style>
