import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/HelloWorld";
import Login from "../components/Login.vue";
import Notebooks from "../components/Notebooks.vue";
import Note from "../components/NoteDetail.vue";
import Trash from "../components/Trash.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/Notebooks",
    component: Notebooks,
  },
  {
    path: "/note",
    component: Note,
  },
  {
    path: "/trash",
    component: Trash,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
