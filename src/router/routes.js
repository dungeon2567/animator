const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue"),
        name: "main",
      },
      {
        path: "/product/:url",
        name: "product",
        component: () => import("pages/Product.vue"),
        props: true
      }
    ],
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
