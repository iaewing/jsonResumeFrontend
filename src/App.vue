<script setup lang="ts">
import WorkExperience from "./components/WorkExperience.vue";
import resume from "./assets/resume.json";
import UserBasics from "./components/UserBasics.vue";
import UserProfiles from "./components/UserProfiles.vue";
import UserLocation from "./components/UserLocation.vue";
</script>

<template>
  <div aria-label="Application Title">Application Title</div>
  <UserBasics :user="resume.basics" />
  <UserLocation :location="resume.basics.location" />
  <UserProfiles :profiles="resume.basics.profiles" />
  <div
    v-for="workExperience in resume.work"
    :key="workExperience.name"
    class="w-1/2"
  >
    <WorkExperience :company="workExperience" />
  </div>
</template>
