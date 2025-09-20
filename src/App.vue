// App.vue
<template>
  <div id="app" class="border-gray-950 rounded-3xl mx-10">
    <RouterView />
  </div>

  <!-- Footer fixo no final da tela -->
<div class="bg-black text-white w-full fixed bottom-0 left-0 text-center p-4">
  <FooterComponent />
</div>

</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
</script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
</style>
