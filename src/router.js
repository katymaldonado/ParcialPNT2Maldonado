import { createRouter, createWebHistory } from 'vue-router'

import Transcripcion from './components/Transcripcion.vue'
import Respuestas from './components/Respuestas.vue'


const routes = [
    { path: '/', redirect: '/transcripcion' },
    { path: '/transcripcion', component: Transcripcion },
    { path: '/respuestas', component: Respuestas },

    { path: '/:pathmatch(.*)*', redirect: '/transcripcion' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router