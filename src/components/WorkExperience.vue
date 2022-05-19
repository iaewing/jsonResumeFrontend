<script setup lang="ts">
import { defineProps, ref } from "vue";
const props = defineProps<{
  company: string;
}>();

const shouldDisplay = ref<boolean>(false);

const toggleDisplay = () => {
  shouldDisplay.value = !shouldDisplay.value;
};
</script>

<template>
  <div>
    <button @click="toggleDisplay">Toggle</button>
    <div v-if="shouldDisplay">{{ company }}</div>
  </div>
</template>
