<template>
  <v-card class="card">
    <div class="d-flex align-center justify-between">
      <p class="title">title</p>
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
        <p>02/09/2003</p>
        <div>
          <v-chip color="green" class="chip" variant="tonal">
            <p>categorias</p>
          </v-chip>
        </div>
      </div>
      <div>
        <p>value</p>
      </div>
    </div>
    <div>tags</div>
  </v-card>
</template>

<script setup>
import { Pencil } from "lucide-vue-next";
import { Trash2 } from "lucide-vue-next";
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
</style>
