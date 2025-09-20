<template>
  <div class="flex flex-col min-h-screen">
    <!-- Conteúdo centralizado -->
    <div class="flex flex-col items-center justify-center flex-grow">
      <h2 class="text-3xl text-gray-600 font-bold text-center mb-20 w-full max-w-xs">
        Crie seu currículo rápido e fácil
      </h2>
      <BotaoComponent text="Começar" color="green" class="w-full max-w-xs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BotaoComponent from '../components/ButtonComponent.vue'
</script>
