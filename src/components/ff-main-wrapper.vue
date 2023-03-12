<template>
  <div class="ff-main-wrapper">
    <ffNavigateBar />
    <router-view />
    <ffFooter />
  </div>
</template>

<script>
import ffNavigateBar from "./layouts/ff-navigate-bar.vue";
import ffFooter from "./layouts/ff-footer.vue";
// import ffMainPage from "./main-page/ff-main-page.vue";

export default {
  name: "v-main-wrapper",
  components: {
    ffNavigateBar,
    // ffMainPage,
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
