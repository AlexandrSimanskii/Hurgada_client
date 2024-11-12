import '@/assets/style/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'



import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Material from '@primevue/themes/material'
import components from './components/UI'

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Material
    }
});
app.use(createPinia())
app.use(router)

components.forEach(component => {

   
    app.component((component.name as string), component)
})




app.mount('#app')
