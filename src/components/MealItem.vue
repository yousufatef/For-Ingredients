<template>
  <div class="bg-white shadow rounded-xl hover:scale-[1.01] transition-all">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="flex flex-col gap-4 p-2 mt-3">
      <div>
        <h2 class="font-bold">{{ meal.strMeal }}</h2>
        <p class="pt-1">
          {{ truncateWords(meal.strInstructions, 20) }}
        </p>
      </div>
      <YouTubeBtn :href="meal.strYoutube" />
    </div>
  </div>
</template>
<script setup>
import YouTubeBtn from "./YouTubeBtn.vue";

// To Trunc the description of mea ot 20 words only
const truncateWords = (str, count) => {
  if (!str) return str;
  return str.split(" ").slice(0, count).join(" ");
};

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
