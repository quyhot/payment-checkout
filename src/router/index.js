import { createWebHistory, createRouter } from "vue-router";
import Order from "@/components/Order"
import Success from "@/components/Success"

const routes = [
    {
        path: '/order',
        component: Order,
        name: 'order',
    },
    {
        path: '/success/:id',
        component: Success,
        name: 'success',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
