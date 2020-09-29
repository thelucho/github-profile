<template>
  <div id="app">
    <profile />
  </div>
</template>

<script>
import Profile from "./components/Profile.vue";

export default {
  name: "App",
  components: {
    Profile,
  },
};
</script>

<style lang="scss">
body {
  margin: 0px;
}
</style>

