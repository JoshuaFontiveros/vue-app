import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import './assets/index.css'
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.use(PrimeVue).mount('#app')
