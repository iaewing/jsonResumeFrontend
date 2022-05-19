<template>
  <WorkExperience company="Vehikl" />
</template>

<script lang="ts">
import WorkExperience from "./components/WorkExperience.vue";

export default {
  setup() {
    {
      String;
    }
  },
  components: {
    WorkExperience,
  },
};
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
