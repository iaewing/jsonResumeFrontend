<script setup lang="ts">
import { UserInterface } from "@/types";
import { defineProps } from "vue";

const props = defineProps<{
  user: UserInterface;
}>();
</script>

<template>
  <div>{{ user.name }}</div>
</template>
