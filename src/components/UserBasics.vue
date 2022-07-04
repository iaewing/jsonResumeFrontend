<script setup lang="ts">
import { UserInterface } from "@/types";
import { defineProps } from "vue";
import UserProfiles from "./UserProfiles.vue";
import UserLocation from "./UserLocation.vue";

const props = defineProps<{
  user: UserInterface;
}>();
</script>

<template>
  <div>{{ user.name }}</div>
  <div>{{ user.label }}</div>
  <div>{{ user.image }}</div>
  <div>{{ user.email }}</div>
  <div>{{ user.phone }}</div>
  <div>{{ user.url }}</div>
  <div>{{ user.summary }}</div>
  <UserLocation :location="user.location" />
  <UserProfiles :profiles="user.profiles" />
</template>
