import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/core.scss'
import Images from '../src/assets/imgs/index'
import Components from "@/components/UI"

const app = createApp(App) 

app.config.globalProperties.$img = Images;

Components.forEach(component => {
    app.component(component.name, component)
});

app.use(store)
app.use(router)
app.mount('#app')