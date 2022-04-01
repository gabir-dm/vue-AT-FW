import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../views/Home.vue'
import AdicionarJogo from '../views/Adicionar.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/adicionar',
        name: 'adicionar',
        component: AdicionarJogo
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router