<template>
  <v-card class="card">
    <v-row>
      <v-col cols="1" class="d-flex align-center justify-center">
        <Receipt size="40" />
      </v-col>
      <v-col>
        <div>
          <p class="title">Total do Mês</p>
          <p class="price">R$ 2,00</p>
          <p class="subtitle">1 contas</p>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
import {
  LayoutDashboard,
  Wallet,
  Receipt,
  CreditCard,
  Upload,
} from "lucide-vue-next";
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
  font-size: 14px;
}
.price {
  font-size: 20px;
}
.subtitle {
  font-size: 14px;
}
</style>
