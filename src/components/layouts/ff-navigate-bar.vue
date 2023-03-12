<template>
  <div class="ff-navigate-bar">
    <nav
      class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light"
    >
      <div class="container">
        <router-link to="/">
          <a class="navbar-brand" href="#">
            <img src="../../assets/images/ff-flat.png" alt="Logo" width="150" />
          </a>
        </router-link>
        <div class="d-flex align-items-center">
          <div class="mr-auto"></div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <router-link
              class="btn btn-outline-secondary btn-lg"
              to="/login"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-right-to-bracket"></i>Login
            </router-link>
            <router-link
              class="btn btn-outline-secondary btn-lg"
              to="Safety"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-shield"></i>Safety
            </router-link>

            <router-link
              class="btn btn-outline-secondary btn-lg"
              to="Support"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-headset"></i>Support
            </router-link>

            <router-link
              class="btn btn-outline-secondary btn-lg"
              to="blog"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-blog"></i>Blog
            </router-link>

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
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "ff-navigate-bar",
  import: "../assets/styles/main.scss",
};
</script>
<style>
.btn {
  margin-right: 10px;
}
.ff-navigate-bar {
  background-color: rgba(0, 0, 0, 0.2);
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
