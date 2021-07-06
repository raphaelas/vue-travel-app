import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home,
  },
  {
    path: "/details/:slug",
    name: "DestinationDetails",
    props: true,
    component: () => import(/* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails")
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "vue-school-active-class",
  routes,
});

export default router;
