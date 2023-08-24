/*
 * @LastEditTime: 2023-08-24 16:21:32
 * @Description: 
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./route/index";

createApp(App).use(router).mount("#app");
