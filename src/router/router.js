import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import MoF from "../components/MoF.vue";
import Question from "../components/Question.vue";
import Summary from "../components/Summary.vue";
import Share from "../components/Share.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/MoF", component: MoF },
  { path: "/question/:id", component: Question },
  { path: "/summary", component: Summary },
  { path: "/share", component: Share },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
