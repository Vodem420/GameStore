import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/core.scss'
import Images from '../src/assets/imgs/index'
import Components from "@/components/UI"

import VueAgile from 'vue-agile'

const app = createApp(App) 

app.config.globalProperties.$img = Images;

app.use(VueAgile)

Components.forEach(component => {
    app.component(component.name, component)
});

app.use(store)
app.use(router)
app.mount('#app')