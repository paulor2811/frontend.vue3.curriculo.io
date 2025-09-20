<script setup lang="ts">
import { FwbButton } from 'flowbite-vue'

const props = withDefaults(defineProps<{
  text: string
  color?: 'green' | 'blue' | 'red' | 'yellow'
}>(), {
  color: 'green' // valor padrão reativo
})
</script>

<template>
  <FwbButton class="text-sm" :color="props.color">{{ props.text }}</FwbButton>
</template>
