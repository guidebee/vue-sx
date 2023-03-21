import {createApp} from 'vue'
import App from './App.vue'

import './assets/main.css'
import sxStyle from "./index";

// this is the default options of Vuetify
// you can use this option to overwrite the default breakpoint settings.
const breakpointThresholds = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560,
};

createApp(App).use(sxStyle,/*breakpointThresholds*/).mount('#app')
