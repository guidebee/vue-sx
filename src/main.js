import {createApp} from 'vue'
import App from './App.vue'

import './assets/main.css'
import sxStyle from "./index";
import {breakpointThresholds} from "./breakpoints";

createApp(App).use(sxStyle, breakpointThresholds).mount('#app')
