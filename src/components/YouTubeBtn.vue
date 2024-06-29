<template>
  <a
    :href="href"
    target="_blank"
    class="px-2 py-2 rounded-md border-2 text-center font-semibold text-white cursor-pointer bg-primary-color"
  >
    YouTube
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
