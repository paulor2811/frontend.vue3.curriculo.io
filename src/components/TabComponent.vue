<template>
  <fwb-tabs v-model="activeTabLocal" variant="underline" class="p-5">
    <fwb-tab
      v-for="tab in tabs"
      :key="tab.name"
      :name="tab.name"
      :title="tab.title"
      :disabled="tab.disabled || false"
    >
      <slot :name="tab.slotName"></slot>
    </fwb-tab>
  </fwb-tabs>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'

interface Tab {
  name: string
  title: string
  slotName: string
  disabled?: boolean
}

// Declarando props corretamente
const props = defineProps<{
  tabs: Tab[]
  activeTab: string
}>()

const emit = defineEmits<{ (e: 'update:activeTab', value: string): void }>()

// Variável interna reativa
const activeTabLocal = ref<string>(props.activeTab || props.tabs[0].name)

// Sincroniza mudanças internas para o pai
watch(activeTabLocal, (val) => emit('update:activeTab', val))

// Se o pai atualizar a prop activeTab, refletir localmente
watch(() => props.activeTab, (val) => {
  if (val) activeTabLocal.value = val
})
</script>
