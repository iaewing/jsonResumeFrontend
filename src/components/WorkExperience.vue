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
  <div class="border-solid border-2">
    <button @click="toggleDisplay">Toggle {{ company.name }}</button>
    <div v-if="shouldDisplay" aria-label="Company Name">
      <div>{{ company.name }}</div>
      <div>{{ company.position }}</div>
      <div>{{ company.url }}</div>
      <div>{{ company.startDate }}</div>
      <div>{{ company.endDate }}</div>
      <div>{{ company.summary }}</div>
      <div v-for="highlights in company.highlights" :key="highlights">
        {{ highlights }}
      </div>
    </div>
  </div>
</template>
