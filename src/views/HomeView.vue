<!-- HomeView.vue -->
<template>
  <div class="relative min-h-screen">
    <!-- Navbar no topo -->
    <NavbarComponent />

    <!-- Conteúdo centralizado fixo -->
    <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
      <h1 class="text-3xl text-gray-600 font-bold text-center mb-20 w-full max-w-xs pointer-events-auto">
        Crie seu currículo rápido e fácil
      </h1>
      <ButtonComponent 
        text="Começar" 
        color="green" 
        to="/curriculos/novo" 
        class="w-full max-w-xs pointer-events-auto" 
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue';
import ButtonComponent from '../components/ButtonComponent.vue'
</script>
