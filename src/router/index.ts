import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// Toutes les routes ici
export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/auth",
    name: "authInterface",
    component: () => import("@/layout/AuthLayout.vue"),
    children: [
      {
        path: "signup",
        name: "signup",
        component: () => import("@/views/SignUp.vue"),
      },
      {
        path: "signin",
        name: "signin",
        component: () => import("@/views/Login.vue"),
      },
      {
        path: "activate-account",
        name: "activateAccount",
        component: () => import("@/views/ActivateAccount.vue"),
      },
    ],
  },
  {
    path: "/user",
    name: "UserInterface",
    component: () => import("@/layout/UserLayout.vue"),
    children: [
      {
        path: "",
        name: "userHome",
        component: () => import("@/views/user/UserInterface.vue"),
      },
      {
        path: "logout",
        name: "Logout",
        component: () => import("@/views/user/Logout.vue"),
      },
      {
        path: "historique",
        name: "Historique",
        component: () => import("@/views/user/Historique.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: () => import("@/views/ErrorPage.vue"),
  },
];

// Création du router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;