<template>
  <v-container>
    <div class="d-flex flex-col gap-3">
      <dashboard-titile />
      <dashboard-card
        :title="currentBalance.title"
        :icon="currentBalance.icon"
        :current="currentBalance.current"
        :income="currentBalance.income"
        :subtitle="currentBalance.subtitle"
        :to="currentBalance.to"
      />
      <dashboard-card
        :title="totalExpenses.title"
        :icon="totalExpenses.icon"
        :current="totalExpenses.current"
        :income="totalExpenses.income"
        :subtitle="totalExpenses.subtitle"
        :to="totalExpenses.to"
      />
      <dashboard-card
        :title="perOfIncomeSpent.title"
        :icon="perOfIncomeSpent.icon"
        :current="perOfIncomeSpent.current"
        :income="perOfIncomeSpent.income"
        :subtitle="perOfIncomeSpent.subtitle"
        :to="perOfIncomeSpent.to"
      />
      <dashboard-card
        :title="activeCards.title"
        :icon="activeCards.icon"
        :current="activeCards.current"
        :income="activeCards.income"
        :subtitle="activeCards.subtitle"
        :to="activeCards.to"
      />
    </div>
  </v-container>
</template>

<script setup>
const currentBalance = {
  title: "Saldo Atual",
  icon: "Wallet",
  current: 0,
  income: 0,
  subtitle: "Renda:",
  to: "/a",
};
const totalExpenses = {
  title: "Total de Gastos",
  icon: "TrendingUp",
  current: 0,
  income: 0,
  subtitle: "Transações:",
  to: "/b",
};
const perOfIncomeSpent = {
  title: "% de Renda Gasto",
  icon: "Percent",
  current: 0,
  income: 0,
  subtitle: "Configure sua renda",
  to: "/a",
};
const activeCards = {
  title: "Cartões Ativos",
  icon: "CreditCardIcon",
  current: 0,
  income: 0,
  subtitle: "Cartões",
  to: "/a",
};
</script>
