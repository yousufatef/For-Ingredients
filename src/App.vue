<template>
  <div>
    <header>
      <NavBar />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

