<template>
  <header
    class="bg-primary-color px-6 shadow h-16 flex justify-between items-stretch"
  >
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-2 text-2xl font-bold text-[#EADBC8]"
    >
      <span class="text-[#97BE5A] text-3xl">For</span>-Ingredients
    </router-link>
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full text-[#EADBC8] transition-colors hover:text-white"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full text-[#EADBC8] transition-colors hover:text-white"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full text-[#EADBC8] transition-colors hover:text-white"
      >
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>
