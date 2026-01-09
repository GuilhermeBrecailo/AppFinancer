<template>
  <div class="d-flex flex-col gap-3">
    <div class="d-flex align-center justify-between">
      <UtilsTitile title="Gastos" subtitle="Gerencie todos os seus gastos" />
      <ExpensesBtn />
    </div>

    <ExpensesFilter />
    <ExpensesCard
      :title="card1.title"
      :date="card1.date"
      :catogorys="card1.catogorys"
      :price="card1.price"
    />
  </div>
</template>

<script setup>
const card1 = {
  title: "title",
  date: "02/09/2003",
  catogorys: ["categoria 1", "categoria 2"],
  price: "2,00",
};
</script>
