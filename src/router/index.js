import { createRouter, createWebHistory } from '@ionic/vue-router';


const routes = [
  {
    path: '/',
    component: () => import ('../views/Index.vue')
    //redirect: '/folder/Inbox'
  },
  {
    path: '/page/:id',
    component: () => import ('../views/Home.vue')
    //redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/page/receitas',
    component: () => import ('../views/pages/Receitas.vue')
    //redirect: '/folder/Inbox'
  },
  {
    path: '/page/despesas',
    component: () => import ('../views/pages/Despesas.vue')
    //redirect: '/folder/Inbox'
  },
  {
    path: '/page/restante',
    component: () => import ('../views/pages/Restante.vue')
    //redirect: '/folder/Inbox'
  },
  {
    path: '/page/adiciona',
    component: () => import ('../views/pages/ADicionaItem.vue')
    //redirect: '/folder/Inbox'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
