<template>
  <div>
    <nav-bar></nav-bar>
  </div>
  <div>
    <MainPage></MainPage>
  </div>
  <div>
    <FooterMain></FooterMain>
  </div>
</template>

<script>
import NavBar from "./components/navBar.vue";
import MainPage from "./components/mainPage.vue";
import FooterMain from "./components/footerMain.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MainPage,
    FooterMain,
  },
};
</script>

<style scoped>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
