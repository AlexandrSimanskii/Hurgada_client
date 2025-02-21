<template>
  <form>
    <InputText type="text" v-model="email" v-bind="emailAttrs" placeholder="Enter email*" />
    <div class="error">{{ errors.email }}</div>
    <p class="middle-text">or</p>
    <InputMask
      mask="+7 (999) 999-99-99"
      v-model="phone"
      v-bind="phoneAttrs"
      placeholder="Number phone*"
    />
    <div class="error">{{ errors.phone }}</div>
    <InputText type="password" v-model="password" v-bind="passwordAttrs" placeholder="Password*" />
    <div class="error">{{ errors.password }}</div>
    <p class="">forgot password</p>

    <my-button @click.prevent="" class="buttonColored submit-btn">Login</my-button>
    <my-button @click.prevent="" class="buttonGlass submit-btn">Sign up with google</my-button>
  </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import InputText from 'primevue/inputtext'
import InputMask from 'primevue/inputmask'

const schema = z
  .object({
    name: z.string().min(1, 'Имя обязательно для заполнения'),
    email: z.string().min(1, 'Email обязателен').email('Неверный формат email'),
    phone: z.string().regex(/^\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}/, 'Телефон должен содержать 11 цифр'),
    password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
    confirm: z.string().min(6, 'Подтверждение пароля обязательно')
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Пароли должны совпадать',
    path: ['confirm']
  })

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(schema)
})

const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [phone, phoneAttrs] = defineField('phone')
const [password, passwordAttrs] = defineField('password')
const [confirmPassword, confirmPasswordAttrs] = defineField('confirm')
</script>

<style scoped>
.middle-text {
  font-size: 20px;
  font-family: 'Oswald', sans-serif;
  color: var(--lightText);
  margin-right: 50px;
  color: var(--primaryMain);
}
.error {
  color: var(--primaryMain);
  font-size: 0.875rem;
  margin-top: -20px;
}
.register .submit-btn {
  display: block;
  padding: 10px;
}
</style>
