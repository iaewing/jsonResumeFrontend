<script setup lang="ts">
import WorkExperience from "./components/WorkExperience.vue";
import resume from "./assets/resume.json";
</script>

<template>
  <div aria-label="Application Title">Application Title</div>
  <div
    v-for="workExperience in resume.work"
    :key="workExperience.name"
    class="w-1/2"
  >
    <WorkExperience :company="workExperience" />
  </div>
</template>
