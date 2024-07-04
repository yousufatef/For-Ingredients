<template>
  <div>
    <div class="p-8 pb-0 text-primary-color">
      <h1 class="text-4xl font-bold mb-2">Random Meals</h1>
    </div>
    <Meals :meals="meals" :loading="loading" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import Meals from "../components/Meals.vue";

const meals = ref([]);
const loading = ref(true);

onMounted(() => {
  setTimeout(async () => {
    for (let i = 0; i < 10; i++) {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        meals.value.push(response.data.meals[0]);
        loading.value = false;
      } catch (error) {
        console.error("Error fetching meal data:", error);
      }
    }
  }, 2000);
});
</script>
