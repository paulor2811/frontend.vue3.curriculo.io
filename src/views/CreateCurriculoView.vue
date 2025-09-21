<!-- CreateCurriculoView.vue -->
<template>
  <div class="relative min-h-screen flex flex-col">
    <!-- Barra de progresso fixa no topo -->
    <div class="sticky top-0 z-50 bg-white shadow mt-10">
      <ProgressBar :progress="progress" />
    </div>

    <!-- Conteúdo central (cresce e ocupa espaço) -->
    <div class="flex-1 p-4 pb-24">
      <TabComponent :tabs="tabs" v-model:activeTab="activeTab">
        <!-- Aba 1 -->
        <template #tab1>
          <div class="w-full space-y-4 mt-10">
            <InputComponent v-model="name" placeholder="Digite seu nome" label="Nome completo" />
            <InputComponent
              v-model="email"
              placeholder="Digite seu e-mail"
              label="E-mail"
              :required="false"
            />
            <SelectComponent
              v-model="selectedSexo"
              :options="sexo"
              placeholder="Selecione o sexo"
              label="Sexo"
              required
            />
            <InputComponent
              v-model="dataNasc"
              placeholder="Digite sua data de nascimento"
              label="Data de nascimento"
              :required="false"
            />
          </div>
        </template>

        <!-- Aba 2 -->
        <template #tab2>
          <div class="w-full space-y-4 mt-10">
            <p>proximo</p>

          </div>
        </template>
      </TabComponent>
    </div>

    <!-- Botão fixo acima do footer -->
    <div class="sticky bottom-0 z-50 shadow mb-30">
      <ButtonComponent text="Próximo" color="green" @click="goNextTab" class="w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import InputComponent from '@/components/InputComponent.vue'
import SelectComponent from '@/components/SelectComponent.vue'
import TabComponent from '@/components/TabComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import ProgressBar from '@/components/ProgressBar.vue'

// Campos do formulário
const name = ref('')
const email = ref('')
const dataNasc = ref('')
const selectedSexo = ref('')

// Opções do select
const sexo = [
  { value: 'F', name: 'Feminino' },
  { value: 'M', name: 'Masculino' },
]

// Controle das tabs
const activeTab = ref('first')
const tabs = reactive([
  { name: 'first', title: 'Dados Pessoais', slotName: 'tab1', disabled: false },
  { name: 'second', title: 'Escolaridade/Cursos', slotName: 'tab2', disabled: true },
  { name: 'third', title: 'Experiências', slotName: 'tab3', disabled: true },
  { name: 'forth', title: 'Conhecimentos', slotName: 'tab4', disabled: true },
  { name: 'fifith', title: 'Habilidades', slotName: 'tab5', disabled: true },
  { name: 'sixth', title: 'Gerar PDF', slotName: 'tab6', disabled: true },
])

// Computed para atualizar a barra de progresso
const progress = computed(() => {
  const index = tabs.findIndex((tab) => tab.name === activeTab.value)
  return Math.round(((index + 1) / tabs.length) * 100)
})

// Função para ir para a próxima aba
function goNextTab() {
  const currentIndex = tabs.findIndex((tab) => tab.name === activeTab.value)
  const nextTab = tabs[currentIndex + 1]
  if (nextTab) {
    nextTab.disabled = false // desbloqueia a próxima aba
    activeTab.value = nextTab.name // navega
  }
}
</script>
