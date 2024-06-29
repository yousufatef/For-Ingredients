<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-4xl font-bold mb-5 text-primary-color max-md:text-center">
      {{ meal.strMeal }}
    </h1>
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="max-w-[100%] max-md:m-auto pb-3"
    />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
    </div>
    <!-- description -->
    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <!-- Ingredients -->
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(ele, index) of new Array(20)">
            <li v-if="meal[`strIngredient${index + 1}`]" :key="index">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <!-- Measures -->
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(ele, index) of new Array(20)">
            <li v-if="meal[`strMeasure${index + 1}`]" :key="index">
              {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <!-- Links -->
      <div class="pt-10">
        <YouTubeBtn :href="meal.strYoutube" />
        <a
          :href="meal.strSource"
          target="_blank"
          class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
        >
          View Original Source
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import YouTubeBtn from "../components/YouTubeBtn.vue";

const route = useRoute();
const meal = ref({});

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`
    );
    const data = response.data;
    meal.value = data.meals[0] || {};
  } catch (error) {
    console.error("Error fetching meal data:", error);
  }
});
</script>
