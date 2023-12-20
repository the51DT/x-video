import { createRouter, createWebHistory } from 'vue-router'
import home from "@/views/main/main.vue";
import guide from "@/baejh/views/Guide.vue";
import shots from "@/baejh/views/Shots.vue";

// 라우터 
const routes = [
    {
        path: "/",
        name: "home",
        component: home,
    },
    {
        path: "/guide",
        name: "guide",
        component: guide,
    },   
    {
        path: "/shots",
        name: "shots",
        component: shots,
    }   
]
// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export {router}