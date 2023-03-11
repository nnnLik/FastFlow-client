<template>
  <nav
    class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light"
  >
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/images/ff-flat.png" alt="Logo" width="20%" />
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a
          class="btn btn-outline-secondary btn-lg"
          href="Login"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-right-to-bracket"></i>Login
        </a>

        <a
          class="btn btn-outline-secondary btn-lg"
          href="Safety"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-shield"></i>Safety
        </a>

        <a
          class="btn btn-outline-secondary btn-lg"
          href="Support"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-headset"></i>Support
        </a>

        <a
          class="btn btn-outline-secondary btn-lg"
          href="blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-blog"></i>Blog
        </a>

        <a
          class="btn btn-outline-secondary btn-lg"
          href="https://github.com/nnnLik/FastFlow-server"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>GitHub
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  import: "../assets/css/navBar.css",
};
</script>

<style scoped>
.btn {
  margin-right: 10px;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
