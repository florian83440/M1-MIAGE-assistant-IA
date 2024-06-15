import { createRouter, createWebHistory } from 'vue-router';
import Main from './components/Main.vue';
import imagebot from "@/components/Imagebot.vue";
import Speech from "@/components/Speech.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Main
    },
    {
        path: '/chatbot',
        name: 'chatbot',
        component: Main
    },
    {
        path: '/imagebot',
        name: 'imagebot',
        component: imagebot
    },
    {
        path: '/speechbot',
        name: 'speechbot',
        component: Speech
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;