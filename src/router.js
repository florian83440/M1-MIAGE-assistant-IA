import { createRouter, createWebHistory } from 'vue-router';
import Main from './components/Main.vue';

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;