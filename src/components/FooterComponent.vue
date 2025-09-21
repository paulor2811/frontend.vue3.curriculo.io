<!-- FooterComponent.vue -->
<template>
  <div class="fixed bottom-0 left-0 w-full">
    <fwb-footer class="bg-black text-white flex flex-col items-center p-4">
      <!-- Copyright centralizado -->
      <fwb-footer-copyright
        by="paulor2811"
        href="https://github.com/paulor2811/frontend.vue3.curriculo.io"
        copyright-message="All Rights Reserved."
        class="text-white text-center"
      />

      <!-- Links centralizados -->
      <fwb-footer-link-group class="flex space-x-4 mt-4">
        <fwb-footer-link href="#" class="text-white">Sobre</fwb-footer-link>
        <fwb-footer-link href="#" class="text-white">Privacy Policy</fwb-footer-link>
        <fwb-footer-link href="#" class="text-white">Licensing</fwb-footer-link>
        <fwb-footer-link href="#" class="text-white">Contato</fwb-footer-link>
      </fwb-footer-link-group>
    </fwb-footer>
  </div>
</template>


<script setup lang="ts">
import { FwbFooter, FwbFooterCopyright, FwbFooterLink, FwbFooterLinkGroup } from 'flowbite-vue'
</script>
