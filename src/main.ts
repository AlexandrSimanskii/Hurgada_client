import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { definePreset } from '@primevue/themes'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'
import componentos from './components/UI'
import '@/assets/style/main.css'

const vuetify = createVuetify({
  components,
  directives
})

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{amber.50}',
      100: '{amber.100}',
      200: '{amber.200}',
      300: '{amber.300}',
      400: '{amber.400}',
      500: '{amber.500}',
      600: '{amber.600}',
      700: '{amber.700}',
      800: '{amber.800}',
      900: '{amber.900}',
      950: '{amber.950}'
    }
  },
  components: {
    paginator: {
      color: 'black',
      nav: {
        button: {
          color: '#424242',
          borderRadius: '3px',
          selected: { color: 'white', background: '#ff703e' }
        }
      }
    }
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: MyPreset
  }
})
app.use(vuetify)

app.use(ToastService)

componentos.forEach((component) => {
  app.component(component.name as string, component)
})

app.mount('#app')
