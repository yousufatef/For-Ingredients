<template>
  <div class="bg-white shadow rounded-xl hover:scale-[1.01] transition-all">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <div class="relative w-full h-48 rounded-t-xl overflow-hidden">
        <img
          v-if="imageLoaded"
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="w-full h-full object-cover"
          loading="lazy"
        />
        <AnimatedPlaceholder v-else class="w-full h-full bg-gray-300" />
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="hidden"
          @load="imageLoaded = true"
        />
      </div>
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
import { ref } from "vue";
import YouTubeBtn from "./YouTubeBtn.vue";
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";

const imageLoaded = ref(false);
// To Trunc the description of meal to 20 words only
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
