<!-- ProgressBar.vue -->
<template>
  <fwb-progress
    :progress="progress"
    label-position="inside"
    label-progress
    size="lg"
    class="w-full"
  />
</template>

<script setup lang="ts">
import { FwbProgress } from 'flowbite-vue'

defineProps<{
  progress: number
}>()
</script>

