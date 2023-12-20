import { createRouter, createWebHistory } from 'vue-router'
import home from "@/views/main/main.vue";

// 라우터 
const routes = [
    {
        path: "/",
        name: "home",
        component: home,
    }   
]
// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export {router}