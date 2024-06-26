import { defineStore } from "pinia";

export const useMealStore = defineStore("meal", {
  state: () => ({
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredient: [],
    ingredient: {},
  }),

  getters: {},
  actions: {},
});
