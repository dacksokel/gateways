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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RegisterView.vue"),
      meta: { requiresUnauth: true },
    },
    {
      path: "/dashboard/",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
      meta: { requiresAuth: true },
      children: [
        {
          path: "jhony",
          component: () => import("../views/GatewaysView.vue"),
        },
      ],
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
