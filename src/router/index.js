import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/main/main.vue'
import shots from '@/views/shots/Shots.vue'
import popupLibrary from '@/views/shots/popupLibrary.vue'
import popupSubscriptions from '@/views/shots/popupSubscriptions.vue'
import popupUpdate from '@/views/shots/popupUpdate.vue'
import Signup from '@/views/member/Login.vue'
// import Register from '@/views/member/Join.vue'
// import subscriptions from "@/views/shots/Subscriptions.vue";
// import library from "@/views/shots/Library.vue";

// 라우터
const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/shots',
    name: 'shots',
    component: shots,
  },
  {
    path: '/popupLibrary',
    name: 'popupLibrary',
    component: popupLibrary,
  },
  {
    path: '/popupSubscriptions',
    name: 'popupSubscriptions',
    component: popupSubscriptions,
  },
  {
    path: '/popupUpdate',
    name: 'popupUpdate',
    component: popupUpdate,
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup,
  },
  // {
  //   path: '/Register',
  //   name: 'Register',
  //   component: Register,
  // }
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
