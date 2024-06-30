<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-primary-color">Meals by Letter</h1>
    <div class="flex flex-wrap justify-center gap-3 p-8 mb-6">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter"
        class="w-8 h-8 flex items-center justify-center font-semibold text-primary-color hover:scale-150 transition-all"
      >
        {{ letter }}
      </router-link>
    </div>
    <Meals :meals="meals" />
  </div>
</template>
<script setup>
import { computed, watch } from "vue";
import { useMealStore } from "../Store/MealStore";
import Meals from "../components/Meals.vue";
import { useRoute } from "vue-router";

const mealStore = useMealStore();
const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

watch(
  () => route.params.letter,
  (newLetter) => {
    mealStore.searchByLetter(newLetter);
    console.log(route.params.letter);
  },
  { immediate: true }
);

const meals = computed(() => mealStore.mealsByLetter);
</script>
