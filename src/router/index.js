import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/HomeView.vue";
import { getUserState } from "../firebase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
      meta: { requiresUnauth: true },
    },
    {
      path: "/registro",
      name: "registro",
      component: () => import("../views/RegisterView.vue"),
      meta: { requiresUnauth: true },
    },
    {
      path: "/resetPassword",
      name: "resetPassword",
      component: () => import('../views/RecoveryPasswordView.vue')
    },
    {
      path: "/dashboard/",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
      children: [
        {
          path: "",
          name: "status",
          component: () => import("../views/StatusView.vue"),
        },
        {
          path: "config",
          name: "config",
          // component: () => import("../views/GatewaysConfigurationsView.vue"),
          children: [
            {
              path: "gateway",
              name: "gateway",
              component: () =>
                import("../views/GatewaysConfigurationsView.vue"),
            },
            {
              path: "dispositivos",
              name: "dispositivos",
              component: () => import("../views/DevicesConfigurationsView.vue"),
            },
          ],
        },
      ],
      meta: { requiresAuth: true },
    },
  ],
});


router.beforeEach(async (to, from, next) => {
  const isAuth = await getUserState();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresUnauth = to.matched.some(
    (record) => record.meta.requiresUnauth
  );

  if (requiresAuth && !isAuth) next("/");
  else if (requiresUnauth && isAuth) next("/dashboard");
  else next();
});
export default router;
