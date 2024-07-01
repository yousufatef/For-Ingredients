<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <!-- Render MealItem for each meal in meals array -->
    <template v-if="meals.length > 0">
      <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </template>
    <!-- Render skeleton when meals array is empty -->
    <template v-else>
      <MealItemSkeleton v-for="index in 6" :key="index" />
    </template>
  </div>
</template>
<script setup>
import MealItem from "./MealItem.vue";
import MealItemSkeleton from "./MealItemSkeleton.vue";
import { defineProps } from "vue";

const props = defineProps({
  meals: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
