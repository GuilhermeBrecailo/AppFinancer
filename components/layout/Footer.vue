<template>
  <v-bottom-navigation class="rounded-t-xl w-100 elevation-10" height="70" grow>
    <VCard
      class="flex w-50"
      :variant="route.path === '/' ? 'tonal' : 'flat'"
      :color="route.path === '/' ? 'green' : 'white'"
      to="/"
    >
      <div
        class="w-100 text-center"
        style="
          height: 100%;
          margin: auto;
          display: flex;
          justify-content: center;
        "
      >
        <div class="d-flex flex-col align-center ma-auto">
          <LayoutDashboard size="20" class="my-auto" />
          <span class="nav-label ma-auto ml-1">Dashboard</span>
        </div>
      </div>
    </VCard>
    <VCard
      class="flex w-50"
      :variant="route.path === '/expenses' ? 'tonal' : 'flat'"
      :color="route.path === '/expenses' ? 'green' : 'white'"
      to="/expenses"
    >
      <div
        class="w-100 text-center"
        style="
          height: 100%;
          margin: auto;
          display: flex;
          justify-content: center;
        "
      >
        <div class="d-flex flex-col align-center ma-auto">
          <Wallet size="20" class="my-auto" />
          <span class="nav-label ma-auto ml-1">Gastos</span>
        </div>
      </div>
    </VCard>
    <VCard
      class="flex w-50"
      :variant="route.path === '/invoice' ? 'tonal' : 'flat'"
      :color="route.path === '/invoice' ? 'green' : 'white'"
      to="/invoice"
    >
      <div
        class="w-100 text-center"
        style="
          height: 100%;
          margin: auto;
          display: flex;
          justify-content: center;
        "
      >
        <div class="d-flex flex-col align-center ma-auto">
          <Receipt size="20" class="my-auto" />
          <span class="nav-label ma-auto ml-1">Contas</span>
        </div>
      </div>
    </VCard>
    <VCard
      class="flex w-50"
      :variant="route.path === '/credit-cards' ? 'tonal' : 'flat'"
      :color="route.path === '/credit-cards' ? 'green' : 'white'"
      to="/credit-cards"
    >
      <div
        class="w-100 text-center"
        style="
          height: 100%;
          margin: auto;
          display: flex;
          justify-content: center;
        "
      >
        <div class="d-flex flex-col align-center ma-auto">
          <CreditCard size="20" class="my-auto" />
          <span class="nav-label ma-auto ml-1">Cartões</span>
        </div>
      </div>
    </VCard>
    <VCard
      class="flex w-50"
      :variant="route.path === '/import' ? 'tonal' : 'flat'"
      :color="route.path === '/import' ? 'green' : 'white'"
      to="/import"
    >
      <div
        class="w-100 text-center"
        style="
          height: 100%;
          margin: auto;
          display: flex;
          justify-content: center;
        "
      >
        <div class="d-flex flex-col align-center ma-auto">
          <Upload size="20" class="my-auto" />
          <span class="nav-label ma-auto ml-1">Importar</span>
        </div>
      </div>
    </VCard>
  </v-bottom-navigation>
</template>

<script setup>
import { useRoute } from "vue-router";
import {
  LayoutDashboard,
  Wallet,
  Receipt,
  CreditCard,
  Upload,
} from "lucide-vue-next";

const route = useRoute();
</script>

<style scoped>
.nav-label {
  font-size: rem;
}

@media (max-width: 375px) {
  .nav-label {
    font-size: 0.65rem;
  }
}
</style>
