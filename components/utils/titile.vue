<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <p class="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
});
</script>

<style scoped>
.title {
  font-size: 20px;
  font-weight: 600;
}
.subtitle {
  font-size: 14px;
  color: #858585;
}
</style>
