/*
 * @LastEditTime: 2023-09-07 11:17:34
 * @Description: 
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./route/index";
import publicContorl from "./contorls/public_contorl";

const app: any = createApp(App).use(router);

app.config.globalProperties.$publicContorl = new publicContorl();

app.mount("#app")
