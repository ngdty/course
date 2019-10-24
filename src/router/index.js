import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/MachineVision",
    name: "MachineVision",
    component: () => import("../views/MachineVision.vue")
  },
  {
    path: "/VoiceTechnology",
    name: "VoiceTechnology",
    component: () => import("../views/VoiceTechnology.vue")
  },
  {
    path: "/KnowledgeGraph",
    name: "KnowledgeGraph",
    component: () => import("../views/KnowledgeGraph.vue")
  },
  {
    path: "/ARVR",
    name: "ARVR",
    component: () => import("../views/ARVR.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
