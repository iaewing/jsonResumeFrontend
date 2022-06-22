<script setup lang="ts">
import { WorkInterface } from "@/types";
import { defineProps, ref } from "vue";

const props = defineProps<{
  company: WorkInterface;
}>();

const shouldDisplay = ref<boolean>(false);

const toggleDisplay = () => {
  shouldDisplay.value = !shouldDisplay.value;
};
</script>

<template>
  <div class="bg-red-200">
    <button @click="toggleDisplay">Toggle {{ company.name }}</button>
    <div v-if="shouldDisplay" aria-label="Company Name">{{ company }}</div>
  </div>
</template>
