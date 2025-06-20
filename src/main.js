import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import './bootstrap'

const app = createApp(App)
app.use(router)
app.mount('#app')
