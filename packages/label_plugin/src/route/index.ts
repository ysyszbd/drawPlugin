import { createRouter, createWebHashHistory } from "vue-router";
const text_demo = () => import("../pages/text_demo.vue");
const routes = [
  { path: "/", redirect: "/text_demo" },
  {
    path: "/text_demo",
    name: "text_demo",
    component: text_demo
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router