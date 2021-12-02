import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Schedule',
    name: 'Schedule',
    component: () => import('../views/Schedule.vue')
  },
  {
    path: '/UserInfo',
    name: 'UserInfo',
    component: () => import('../views/UserInfo.vue')
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/Details',
    name: 'Details',
    component: () => import('../views/Details.vue')
  },
  {
    path: '/NewSchedule',
    name: 'NewSchedule',
    component: () => import('../views/NewSchedule.vue')
  },
  {
    path: '/CompanyInfo',
    name: 'CompanyInfo',
    component: () => import('../views/CompanyInfo.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
