import {createApp} from 'vue'
import './style.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faCheck, faUserSecret} from "@fortawesome/free-solid-svg-icons";
import App from "./App";
import router from "@/router";

library.add(faCheck, faUserSecret)

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')

