<script setup lang="ts">
import { Address } from "@/types";
import { defineProps } from "vue";

const props = defineProps<{
  location: Address;
}>();
</script>

<template>
  <div>{{ location.address }}</div>
  <div>{{ location.postalCode }}</div>
  <div>{{ location.city }}</div>
  <div>{{ location.countryCode }}</div>
  <div>{{ location.region }}</div>
</template>
