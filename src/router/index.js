import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/main/main.vue'
import layoutBody from '@/bchoi/layout/layoutBody.vue'
// import layoutBottom from '@/bchoi/layout/layoutBottom.vue'
// import layoutTop from '@/bchoi/layout/layoutTop.vue'
// import layoutBottom from '@/bchoi/layout/layoutBottom.vue'
// import test from '@/bchoi/page/test.vue'
import main from '@/bchoi/page/main.vue'

// 라우터
const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/main',
    name: 'main',
    component: main,
    meta: { layout: layoutBody },
  },
]
// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 라우터 추출 (main.js에서 import)
export { router }
