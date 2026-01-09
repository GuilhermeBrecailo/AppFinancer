<template>
  <v-card class="card">
    <div class="d-flex align-center justify-between">
      <p class="title">{{ title }}</p>
      <div class="d-flex align-center gap-2">
        <v-btn variant="tonal" color="blue" icon elevation="0" class="btn">
          <Pencil
        /></v-btn>
        <v-btn variant="tonal" color="red" icon elevation="0" class="btn"
          ><Trash2
        /></v-btn>
      </div>
    </div>
    <div class="d-flex align center justify-between">
      <div class="d-flex flex-col gap-2">
        <p class="time">{{ date }}</p>

        <div class="d-flex gap-1">
          <div v-for="category in catogorys" :key="category">
            <v-chip color="green" class="chip" variant="tonal">
              <p>{{ category }}</p>
            </v-chip>
          </div>
        </div>
      </div>
      <div class="d-flex align-center jutify-center">
        <p class="price">R$ {{ price }}</p>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { Pencil } from "lucide-vue-next";
import { Trash2 } from "lucide-vue-next";

interface Props {
  title: string;
  date: number;
  income: number;
  catogorys: string[];
  price: string;
}
const props = defineProps<Props>();
</script>

<style scoped>
.card {
  position: relative;
  border-radius: 14px;
  padding: 20px;
  background: #ffffff;
  overflow: hidden;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.title {
  font-size: 20px;
  font-weight: 600;
}
.btn {
  width: 40px;
  height: 40px;
}
.chip {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
}
.price {
  font-size: 20px;
  font-weight: 600;
  color: red;
}
.time {
  font-size: 14px;
}
</style>
