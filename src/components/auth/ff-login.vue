<template>
  <div class="ff-login">
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem">
              <form class="card-body p-5 text-center" @submit="login">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                  <p class="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="loginEmail"
                      class="form-control form-control-lg"
                      placeholder="Email"
                      v-model="loginEmail"
                    />
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="loginPassword"
                      class="form-control form-control-lg"
                      placeholder="Password"
                      v-model="loginPassword"
                    />
                  </div>

                  <p class="small mb-5 pb-lg-2">
                    <a class="text-white-50" href="#!">Forgot password?</a>
                  </p>

                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Login
                  </button>

                  <div
                    class="d-flex justify-content-center text-center mt-4 pt-1"
                  >
                    <a href="#!" class="text-white"
                      ><i class="fab fa-facebook-f fa-lg"></i
                    ></a>
                    <a href="#!" class="text-white"
                      ><i class="fab fa-twitter fa-lg mx-4 px-2"></i
                    ></a>
                    <a href="#!" class="text-white"
                      ><i class="fab fa-google fa-lg"></i
                    ></a>
                  </div>
                </div>

                <div>
                  <p class="mb-0">
                    Don't have an account?
                    <router-link to="/signup" class="text-white-50 fw-bold"
                      >Sign Up</router-link
                    >
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
    };
  },
  methods: {
    async login(event) {
      event.preventDefault();
      try {
        const response = await axios.post(
          "https://c482-46-53-248-45.eu.ngrok.io/auth/login",
          {
            email: this.loginEmail,
            password: this.loginPassword,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
.gradient-custom {
  background: #6a11cb;

  background: -webkit-linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );

  background: linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );
}
.navbar-nav {
  margin-top: 10px;
}

.navbar-nav li {
  margin-right: 20px;
  margin-left: 20px;
}

.navbar-nav.mx-auto {
  display: flex;
  justify-content: center;
  width: 100%;
}
.container-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>
