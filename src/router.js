import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Single from "./views/Single.vue";
import Category from "./views/Category.vue";
import Archives from "./views/Archives.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/single/:id",
      name: "Single",
      component: Single
    },
    {
      path: "/category/:category",
      name: "Category",
      component: Category
    },
    {
      path: "/archives",
      name: "Archives",
      component: Archives
    }
  ]
});
