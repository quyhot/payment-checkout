import {createApp} from 'vue'
import App from './App.vue'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faCheck, faUserSecret} from "@fortawesome/free-solid-svg-icons";
library.add(faCheck, faUserSecret)
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
