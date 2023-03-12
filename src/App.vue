<template>
  <div id="app">
    <ffMainWrapper />
  </div>
</template>

<script>
import ffMainWrapper from "./components/ff-main-wrapper.vue";

export default {
  name: "App",
  components: {
    ffMainWrapper,
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
