import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App.vue";
import Login from "../components/Login.vue";
import Notebooks from "../components/Notebooks.vue";
import Note from "../components/NoteDetail.vue";
import Trash from "../components/Trash.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/Notebooks",
    component: Notebooks,
  },
  {
    path: "/Note/:noteId",
    component: Note,
  },
  {
    path: "/Trash/:noteId",
    component: Trash,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
