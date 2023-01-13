import { createWebHistory, createRouter } from "vue-router";
import Order from "@/components/Order"
import Success from "@/components/Success"
import Invoice from "@/components/invoice/Invoice";

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
    },
    {
        path: '/invoice',
        component: Invoice,
        name: 'invoice',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
