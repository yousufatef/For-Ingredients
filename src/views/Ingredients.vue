<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-primary-color">Ingredients</h1>
    <div>
      <input
        type="text"
        v-model="keyword"
        class="rounded border-2 bg-white border-gray-200 focus:ring-primary-color focus:border-primary-color mb-3 w-full"
        placeholder="Search for Ingredients"
      />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <a
          @click.prevent="openTheIngredient(ingredient)"
          href="#"
          v-for="ingredient in computedIngredients"
          :key="ingredient.idIngredient"
          class="block bg-white rounded p-3 mb-3 shadow"
        >
          <h3 class="text-2xl font-bold mb-2">
            {{ ingredient.strIngredient }}
          </h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useMealStore } from "../Store/MealStore";

const keyword = ref("");
const ingredients = ref([]);
const router = useRouter();
const mealStore = useMealStore();

// filters ingredients.value based on keyword.value
const computedIngredients = computed(() => {
  if (!keyword.value) return ingredients.value;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

//route to the ingredient
const openTheIngredient = (ingredient) => {
  mealStore.setIngredient(ingredient);
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
};

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    ingredients.value = response.data.meals;
  } catch (error) {
    console.error("Error fetching meal data:", error);
  }
});
</script>
