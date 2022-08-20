import { createRouter, createWebHistory } from '@ionic/vue-router';


const routes = [
  {
    path: '/page/:id',
    component: () => import ('../views/Home.vue')
    //redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
