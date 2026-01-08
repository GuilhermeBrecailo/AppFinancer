<template>
  <v-card class="card" elevation="0">
    <p class="title">Distribuição por Marketplace</p>

    <div class="mt-7">
      <VueApexCharts
        type="pie"
        height="300"
        :options="pieChartOptions"
        :series="pieChartSeries"
      />
    </div>
  </v-card>
</template>

<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";

/**
 * Labels fixos
 */
const pieChartOptions = {
  labels: ["Shopee", "Mercado Livre", "Amazon", "Magalu"],
  legend: {
    position: "bottom",
  },
  dataLabels: {
    formatter: (_val: number, opts: any) => {
      const value = opts.w.globals.series[opts.seriesIndex];
      return `R$ ${value.toLocaleString("pt-BR")}`;
    },
  },
  tooltip: {
    y: {
      formatter: (value: number) => `R$ ${value.toLocaleString("pt-BR")}`,
    },
  },
};

/**
 * Valores fixos
 */
const pieChartSeries = [4200, 2800, 1500, 900];
</script>

<style scoped>
.card {
  padding: 30px;
  width: auto;
  height: 430px;
  border: 0.5px solid #ededef;
}

.title {
  font-size: 18px;
  font-weight: 700;
  color: black;
}
</style>
