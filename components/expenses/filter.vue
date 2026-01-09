<template>
  <v-card class="card">
    <v-row>
      <v-col cols="1" class="d-flex align-center jutify-center">
        <p>Filtros:</p>
      </v-col>
      <v-col cols="4">
        <v-select
          v-model="value"
          :items="items"
          placeholder="Chips"
          hide-details
          density="compact"
          variant="outlined"
        ></v-select>
      </v-col>
      <v-col cols="4">
        <v-select
          v-model="value"
          :items="items"
          placeholder="Chips"
          hide-details
          density="compact"
          variant="outlined"
        ></v-select>
      </v-col>
      <v-col cols="3" class="total d-flex align-center jutify-center">
        <p>Total: <span>R$ 2,00</span></p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { shallowRef } from "vue";
import { Funnel } from "lucide-vue-next";

const items = shallowRef(["foo", "bar", "fizz", "buzz"]);
const value = shallowRef(["foo", "bar", "fizz", "buzz"]);
</script>

<style scoped>
.card {
  position: relative;
  border-radius: 14px;
  padding: 20px;
  background: #ffffff;
  overflow: hidden;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
  cursor: pointer;
}
.total {
  font-size: 18px;
  font-weight: 600;
}
</style>
