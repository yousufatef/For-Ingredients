<template>
  <div class="p-8 pb-0 text-primary-color">
    <h1 class="text-4xl font-bold mb-2">Search Meals by Name</h1>
    <div class="py-3">
      <input
        type="text"
        class="rounded border-2 bg-white border-gray-200 focus:ring-primary-color focus:border-primary-color w-full"
        placeholder="Search for Meals"
        v-model="mealName"
        @input="searchMeal"
      />
    </div>

    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useMealStore } from "../Store/MealStore";
import Meals from "../components/Meals.vue";

const mealName = ref("");
const mealStore = useMealStore();

const searchMeal = () => {
  mealStore.searchMeals(mealName.value);
};

// Computed property to get the meals from the store
const meals = computed(() => mealStore.searchedMeals);
</script>
