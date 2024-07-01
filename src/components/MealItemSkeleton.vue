<template>
  <div class="bg-white shadow rounded-xl hover:shadow-xl transition-all">
    <!-- Placeholder for meal image -->
    <div class="bg-gray-300 rounded-t-xl overflow-hidden">
      <AnimatedPlaceholder class="w-full h-48 object-cover animate-pulse" />
    </div>

    <!-- Placeholder for meal details -->
    <div class="flex flex-col gap-3 p-4">
      <!-- Placeholder for meal title -->
      <div class="bg-gray-300 h-6 rounded animate-pulse"></div>
      <!-- Placeholder for meal description -->
      <div class="bg-gray-300 h-16 rounded animate-pulse"></div>
      <!-- Placeholder for YouTube button -->
      <div class="flex justify-center">
        <AnimatedPlaceholder
          class="w-24 h-8 bg-gray-300 rounded-md animate-pulse"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
</script>

