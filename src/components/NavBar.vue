<template>
  <header
    class="bg-primary-color py-3.5 px-6 shadow md:flex justify-between items-center"
  >
  <!--Logo -->
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center text-2xl font-bold text-[#EADBC8]"
    >
      <span class="text-[#97BE5A] text-3xl">For</span>-Ingredients
    </router-link>
    <!-- Menu Bar -->
    <span
      class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl text-white"
      @click="toggleMenu()"
    >
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>
    <!-- Links -->
    <ul
      class="md:flex md:items-center md:px-0 px-8 md:pb-0 pb-2 md:static absolute bg-primary-color md:w-auto w-full top-14 duration-500 ease-in"
      :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <li class="md:mx-4 md:my-0 my-6" v-for="link in Links" :key="link.link">
        <router-link
          :to="{ name: link.link }"
          @click="closWhenRout()"
          class="text-[#EADBC8] hover:text-white font-semibold"
          >{{ link.title }}</router-link
        >
      </li>
    </ul>
  </header>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const Links = [
      { title: "Search Meals", link: "byName" },
      { title: "Meals By Letter", link: "byLetter" },
      { title: "Meals By Ingredients", link: "ingredients" },
    ];
    const open = ref(false);

    const toggleMenu = () => {
      open.value = !open.value;
    };
    const closWhenRout = () => {
      toggleMenu();
    };

    return {
      Links,
      open,
      toggleMenu,
      closWhenRout,
    };
  },
};
</script>
