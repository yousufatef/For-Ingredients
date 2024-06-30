import axios from "axios";
import { defineStore } from "pinia";

export const useMealStore = defineStore("meal", {
  state: () => ({
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredient: [],
    ingredient: {},
  }),
  actions: {
    async searchMeals(name) {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
        );
        this.searchedMeals = response.data.meals || [];
      } catch (error) {
        console.error("Error fetching meals:", error);
        this.searchedMeals = []; // Reset in case of error
      }
    },
    async searchByLetter(letter) {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
        );
        this.mealsByLetter = response.data.meals || [];
      } catch (error) {
        console.error("Error fetching meals:", error);
        this.mealsByLetter = []; // Reset in case of error
      }
    },
    async searchByIngredient(ingredient) {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        this.mealsByIngredient = response.data.meals || [];
      } catch (error) {
        console.error("Error fetching meals:", error);
        this.mealsByIngredient = []; // Reset in case of error
      }
    },
    setIngredient(ingredient) {
      this.ingredient = ingredient;
    },
  },
});
