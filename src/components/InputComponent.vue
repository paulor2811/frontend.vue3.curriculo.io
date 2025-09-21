<template>
  <FwbInput
    v-model="model"
    :placeholder="props.placeholder"
    :label="props.label"
    required
  />
</template>

<script setup lang="ts">
import { FwbInput } from 'flowbite-vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  modelValue: string
  placeholder?: string
  label?: string
  required?: boolean
}>(), {
  placeholder: '',
  label: '',
  required: false,
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
