import { createRouter, createWebHistory } from 'vue-router'
// import main from '@/views/main/main.vue'
// import home from '@/views/shots/Home.vue'
import home from '@/views/shots/Shots.vue'
import Library from '@/views/shots/Library.vue'
import Subscriptions from '@/views/shots/Subscriptions.vue'
import Update from '@/views/shots/Update.vue'
import Signup from '@/views/member/Login.vue'
import Register from '@/views/member/Join.vue'
// import subscriptions from "@/views/shots/Subscriptions.vue";
// import library from "@/views/shots/Library.vue";

// 라우터
const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/views/shots/Shots.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/Library',
    name: 'Library',
    component: Library,
  },
  {
    path: '/Subscriptions',
    name: 'Subscriptions',
    component: Subscriptions,
  },
  {
    path: '/Update',
    name: 'Update',
    component: Update,
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
  }
  // {
  //     path: "/subscriptions",
  //     name: "subscriptions",
  //     component: subscriptions,
  // },
  // {
  //     path: "/library",
  //     name: "library",
  //     component: library,
  // }
]
// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 라우터 추출 (main.js에서 import)
export { router }
