<template>
  <div class="bg-white shadow rounded-xl hover:scale-[1.01] transition-all">
    <router-link :to="{name: 'mealDetails', params: { id: meal.idMeal }}">
      
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
      <a
        :href="meal.strYoutube"
        target="_blank"
        class="px-2 py-2 rounded-md border-2 text-center font-semibold text-white cursor-pointer bg-primary-color"
      >
        YouTube
      </a>
    </div>
  </div>
</template>
<script setup>
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
