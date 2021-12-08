import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: "/Notebooks",
    component: () => import("../components/Notebooks.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/note",
    component: () => import("../components/NoteDetail.vue"),
  },
  {
    path: "/trash",
    component: () => import("../components/Trash.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
