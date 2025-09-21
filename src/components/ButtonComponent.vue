<!-- ButtonComponent.vue -->
<template>
  <FwbButton class="text-sm" :color="props.color" @click="navigate">
    {{ props.text }}
  </FwbButton>
</template>

<script setup lang="ts">
import { FwbButton } from 'flowbite-vue'
import { useRouter } from 'vue-router'

const props = withDefaults(defineProps<{
  text: string
  color?: 'green' | 'blue' | 'red' | 'yellow'
  to?: string // rota de destino
}>(), {
  color: 'green'
})

const router = useRouter()

function navigate() {
  if (props.to) {
    router.push(props.to)
  }
}
</script>
