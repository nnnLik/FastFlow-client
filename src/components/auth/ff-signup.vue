<template>
  <div class="ff-signup">
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem">
              <form class="card-body p-5 text-center" @submit="signup">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Sign Up</h2>
                  <p class="text-white-50 mb-5">
                    Please enter your registration information!
                  </p>
                  <div class="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="signUpUsername"
                      v-model="signUpUsername"
                      class="form-control form-control-lg"
                      placeholder="Username"
                    />
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="signUpEmail"
                      v-model="signUpEmail"
                      class="form-control form-control-lg"
                      placeholder="Email"
                    />
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="signUpPassword"
                      v-model="signUpPassword"
                      class="form-control form-control-lg"
                      placeholder="Password"
                    />
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="signUpRePassword"
                      v-model="signUpRePassword"
                      class="form-control form-control-lg"
                      placeholder="Repeat password"
                    />
                  </div>

                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Sign Up
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
                    Have an account?
                    <router-link to="/login" class="text-white-50 fw-bold"
                      >Login</router-link
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
  name: "SignUpForm",
  data() {
    return {
      signUpUsername: "",
      signUpEmail: "",
      signUpPassword: "",
      signUpRePassword: "",
    };
  },
  methods: {
    async signup(event) {
      event.preventDefault();
      try {
        const response = await axios.post("/auth/login", {
          username: this.signUpUsername,
          email: this.signUpEmail,
          password: this.signUpPassword,
          repassword: this.signUpRePassword,
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
