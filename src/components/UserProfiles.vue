<script setup lang="ts">
import { Profile } from "@/types";
import { defineProps } from "vue";

const props = defineProps<{
  profiles: Profile[];
}>();
</script>

<template>
  <div v-for="profile in profiles" :key="profile.network">
    <div>{{ profile.network }}</div>
    <div>{{ profile.url }}</div>
    <div>{{ profile.username }}</div>
  </div>
</template>
