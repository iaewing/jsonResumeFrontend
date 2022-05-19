<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  company: string;
}>();
</script>

<template>
  <div>{{ company }}</div>
</template>
