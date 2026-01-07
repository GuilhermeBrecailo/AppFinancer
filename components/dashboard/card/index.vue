<template>
  <v-card class="saldo-card" elevation="1" @click="goToRoute">
    <div class="content">
      <div class="d-flex align-center justify-between">
        <div class="icon-box">
          <component :is="IconComponent" :size="20" stroke-width="2" />
        </div>
        <div>
          <component :is="ArrowUpRight" :size="16" stroke-width="2" />
        </div>
      </div>
      <p class="title">{{ title }}</p>
      <p class="value">R$ {{ current.toFixed(2) }}</p>
      <p class="subtitle">{{ subtitle }} R$ {{ income.toFixed(2) }}</p>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import * as LucideIcons from "lucide-vue-next";
import { ArrowUpRight } from "lucide-vue-next";
import { useRouter } from "vue-router";

interface Props {
  title: string;
  icon: keyof typeof LucideIcons;
  current: number;
  income: number;
  subtitle: string;
  to: string;
}

const props = defineProps<Props>();

const IconComponent = LucideIcons[props.icon];
const router = useRouter();

function goToRoute() {
  if (props.to) {
    router.push(props.to);
  }
}
</script>

<style scoped>
.saldo-card {
  position: relative;
  border-radius: 14px;
  padding: 20px;
  background: #ffffff;
  overflow: hidden;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
  cursor: pointer;
}

.saldo-card:hover {
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.content {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.icon-box {
  width: 36px;
  height: 36px;
  background: #00b894;
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.title {
  font-size: 14px;
  color: #6b7280;
}

.value {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
}

.subtitle {
  font-size: 13px;
  color: #6b7280;
}
</style>
