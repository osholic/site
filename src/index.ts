import Router from "vue-router";

export default () => {
  const router = new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        component: () => import("./app.vue"),
        children: [
          {
            path: "/",
            component: () => import("./pages/index/index.vue"),
          },
          {
            path: "/about",
            component: () => import("./pages/about/index.vue"),
          },
        ],
      },
    ],
  });

  return {
    router,
  };
};
