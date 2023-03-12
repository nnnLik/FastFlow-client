import { createRouter, createWebHistory } from "vue-router";

import ffLoginPage from "../components/auth/ff-login.vue";
import ffMainPage from "../components/main-page/ff-main-page.vue";
import ffSignUp from "../components/auth/ff-signup.vue";

const routes = [
  {
    path: "/",
    name: "mainWrapper",
    component: ffMainPage,
  },
  {
    path: "/login",
    name: "login",
    component: ffLoginPage,
  },
  {
    path: "/signup",
    name: "signup",
    component: ffSignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
