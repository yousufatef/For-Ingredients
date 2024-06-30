<template>
  <div>
    <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-primary-color">
        Meals for {{ ingredient.strIngredient }}
      </h1>
    </div>

    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import { computed, onMounted } from "vue";
import { useMealStore } from "../Store/MealStore";

const route = useRoute();
const mealStore = useMealStore();

// Computed properties
const ingredient = computed(() => mealStore.ingredient); // Gets the current ingredient from the meal store
const meals = computed(() => mealStore.mealsByIngredient); // Gets meals filtered by the current ingredient

// Fetch meals when component is mounted
onMounted(() => {
  mealStore.searchByIngredient(route.params.ingredient);
});
</script>
