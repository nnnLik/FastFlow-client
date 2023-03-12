<template>
  <div class="ff-main-wrapper">
    <ffNavigateBar />
    <div>
      <router-view />
    </div>
    <ffFooter />
  </div>
</template>

<script>
import ffNavigateBar from "./layouts/ff-navigate-bar.vue";
import ffFooter from "./layouts/ff-footer.vue";

export default {
  name: "v-main-wrapper",
  components: {
    ffNavigateBar,
    ffFooter,
  },
  props: {},
  data() {
    return {
      title: "Main wrapper",
    };
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
