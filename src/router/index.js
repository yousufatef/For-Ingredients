import { createRouter, createWebHistory } from "vue-router";

// component with import for lazy loading == component: () => import("../views/Home.vue")

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/by-name/:name?",
    name: "byName",
    component: () => import("../views/MealsByName.vue"),
  },
  {
    path: "/by-letter/:letter?",
    name: "byLetter",
    component: () => import("../views/MealsByLetter.vue"),
  },
  {
    path: "/by-ingredient/:ingredient",
    name: "byIngredient",
    component: () => import("../views/MealsByIngredient.vue"),
  },
  {
    path: "/ingredients",
    name: "ingredients",
    component: () => import("../views/Ingredients.vue"),
  },
  {
    path: "/meal/:id",
    name: "mealDetails",
    component: () => import("../views/MealDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
