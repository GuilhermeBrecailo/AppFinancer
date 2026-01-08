<template>
  <v-card class="card">
    <div class="d-flex">
      <p>Filtros</p>
      <v-select
        v-model="value"
        :items="items"
        placeholder="Chips"
        hide-details
        density="compact"
        variant="outlined"
      ></v-select>
      <v-select
        v-model="value"
        :items="items"
        placeholder="Chips"
        hide-details
        density="compact"
        chips
        multiple
        variant="outlined"
      ></v-select>
    </div>
  </v-card>
</template>

<script setup>
import { shallowRef } from "vue";

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
</style>
