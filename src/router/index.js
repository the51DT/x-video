import { createRouter, createWebHistory } from 'vue-router'
import home from "@/views/main/main.vue";
import shots from "@/views/shots/Shots.vue";
// import subscriptions from "@/views/shots/Subscriptions.vue";
// import library from "@/views/shots/Library.vue";

// 라우터 
const routes = [
    {
        path: "/",
        name: "home",
        component: home,
    }, 
    {
        path: "/shots",
        name: "shots",
        component: shots,
    }, 
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
    routes
});

// 라우터 추출 (main.js에서 import)
export {router}