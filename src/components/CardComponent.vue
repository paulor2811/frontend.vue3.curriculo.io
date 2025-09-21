<!-- CardComponent.vue -->
<script setup lang="ts">
import { FwbCard } from 'flowbite-vue'
import InputComponent from '@/components/InputComponent.vue'
import SelectComponent from '@/components/SelectComponent.vue'

interface FieldOption {
  value: string
  name: string
}

interface Field {
  type: 'input' | 'select'
  label: string
  placeholder?: string
  model: string
  options?: FieldOption[]
  required?: boolean
}

const props = defineProps<{
  fields: Field[]
  formData: Record<string, string>
}>()

const emit = defineEmits<{
  (e: 'update:formData', value: Record<string, string>): void
}>()

function updateField(key: string, value: string) {
  emit('update:formData', { ...props.formData, [key]: value })
}
</script>

<template>
  <fwb-card class="w-full p-4 space-y-4">
    <div v-for="(field, idx) in fields" :key="idx">
      <InputComponent
        v-if="field.type === 'input'"
        :model-value="formData[field.model]"
        @update:model-value="updateField(field.model, $event)"
        :label="field.label"
        :placeholder="field.placeholder"
        :required="field.required"
      />
      <SelectComponent
        v-else-if="field.type === 'select'"
        :model-value="formData[field.model]"
        @update:model-value="updateField(field.model, $event)"
        :options="field.options || []"
        :label="field.label"
        :required="field.required"
      />
    </div>

    <slot name="footer" />
  </fwb-card>
</template>
