<script setup lang="ts">
import WorkExperience from "./components/WorkExperience.vue";
import resume from "./assets/resume.json";
import UserBasics from "./components/UserBasics.vue";
</script>

<template>
  <div aria-label="Application Title">Application Title</div>
  <UserBasics :user="resume.basics" />
  <div
    v-for="workExperience in resume.work"
    :key="workExperience.name"
    class="w-1/2"
  >
    <WorkExperience :company="workExperience" />
  </div>
</template>
