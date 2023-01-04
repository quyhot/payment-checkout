import {createApp} from 'vue'
import App from './App.vue'
import Success from "@/components/Success";
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faCheck, faUserSecret} from "@fortawesome/free-solid-svg-icons";
library.add(faCheck, faUserSecret)
const routes = [
    {
        path: '',
        name: 'Order',
        component: App
    },
    {
        path: '/success',
        name: 'Success',
        component: Success
    }
]
// eslint-disable-next-line no-undef
const router = VueRouter.createRouter({
    // eslint-disable-next-line no-undef
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = createApp({})
app.use(router)

app.component("font-awesome-icon", FontAwesomeIcon).mount('#app')

