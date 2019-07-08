import Router from "vue-router";
import App from "./app.vue";

export default () => {
  const router = new Router({
    mode: "history",
    routes: [
      {
        component: () => import("./pages/index/index.vue"),
        path: "/",
      },
      {
        component: () => import("./pages/about/index.vue"),
        path: "/about",
      },
      {
        component: () => import("./pages/form-success/index.vue"),
        path: "/form-success",
      },
    ],
  });

  return {
    render: (h) => h(App),
    router,
  };
};
