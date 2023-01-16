import { createWebHistory, createRouter } from "vue-router";
import Order from "@/components/Order"
import Success from "@/components/Success"
import Invoice from "@/components/invoice/Invoice";
import Payment from "@/components/Payment";

const routes = [
    {
        path: '/order',
        component: Order,
        name: 'order',
    },
    {
        path: '/payment/:id',
        component: Payment,
        name: 'payment',
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
