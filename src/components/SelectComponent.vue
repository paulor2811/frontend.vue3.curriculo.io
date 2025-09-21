<!-- SelectComponent.vue -->
<template>
  <FwbSelect
    v-model="model"
    :options="props.options"
    :label="props.label"
    :required="props.required"
  />
</template>

<script setup lang="ts">
import { FwbSelect } from 'flowbite-vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  modelValue: string
  label?: string
  options: { value: string; name: string }[]
  required?: boolean
}>(), {
  label: '',
  required: true
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

// v-model bridge
const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
})
</script>
