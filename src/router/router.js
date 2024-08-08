import { createRouter, createWebHistory } from "vue-router";
import Question from "../components/Question.vue";
import Summary from "../components/Summary.vue";
import Home from "../components/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/question/:id", component: Question },
  { path: "/summary", component: Summary },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
