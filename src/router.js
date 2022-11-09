import vue from 'vue'
import vueRouter from 'vue-router'

import Ingresos from './Componentes/Ingresos.vue'

vue.use(vueRouter)

export const router = new vueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/ingresos' },
        { path: '/ingresos', component: Ingresos },
    ]
})


