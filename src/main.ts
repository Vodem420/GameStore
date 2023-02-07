import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// import Images from '../public/images/index'

import "uno.css";
import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/sanitize/forms.css";
import "@unocss/reset/sanitize/typography.css";
import "./assets/styles/core.scss";


const app = createApp(App);

// app.config.globalProperties.$img = Images;
app.use(createPinia());
app.use(router);

app.mount("#app");
