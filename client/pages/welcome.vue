<template>
  <div class="welcome">
    <div class="ribbon ribbon-top-left">
      <span> ALPHA </span>
    </div>
    <div class="top-right links">
      <template v-if="authenticated">
        <router-link :to="{ name: 'home' }">
          {{ $t("home") }}
        </router-link>
      </template>
      <template v-else>
        <router-link :to="{ name: 'login' }">
          {{ $t("login") }}
        </router-link>
        <router-link :to="{ name: 'register' }">
          {{ $t("register") }}
        </router-link>
      </template>
    </div>

    <div class="container">
      <div class="columns is-multiline landingpage-content">
        <div class="column is-6 landingpage-column title-column">
          <h1 class="title is-1">
            Create Beautfil Presentations
          </h1>
          <h2 class="subtitle is-1">
            <a @click="scrollToEnd">Learn More</a>
          </h2>
        </div>

        <div class="column is-6 landingpage-column sign-up-box">
          <form @submit.prevent="register" @keydown="form.onKeydown($event)">
            <div class="field">
              <label class="label">First Name</label>
              <div class="control">
                <input
                  v-model="form.first_name"
                  class="input is-large"
                  :class="{ 'is-invalid': form.errors.has('name') }"
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                />
                <has-error :form="form" field="name" />
              </div>
            </div>

            <div class="field">
              <label class="label">Last Name</label>
              <div class="control">
                <input
                  v-model="form.last_name"
                  class="input is-medium"
                  :class="{ 'is-invalid': form.errors.has('name') }"
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                />
                <has-error :form="form" field="name" />
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  v-model="form.email"
                  class="input is-medium"
                  :class="{ 'is-invalid': form.errors.has('email') }"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <has-error :form="form" field="email" />
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  v-model="form.password"
                  class="input is-medium"
                  :class="{ 'is-invalid': form.errors.has('password') }"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <has-error :form="form" field="password" />
                <p>Your Password has to be at least 8 Characters long</p>
              </div>
            </div>

            <div class="field">
              <label class="label">Password Confirmation</label>
              <div class="control">
                <input
                  v-model="form.password_confirmation"
                  class="input is-medium"
                  :class="{
                    'is-invalid': form.errors.has('password_confirmation')
                  }"
                  type="password"
                  placeholder="Confirm Password"
                  name="password_confirmation"
                />
                <has-error :form="form" field="password_confirmation" />
              </div>
            </div>

            <div class="field terms-of-service-field">
              <div class="control">
                <button class="button is-large is-success">
                  Sign Up
                </button>
                <p>
                  By clicking <b>"Sign up"</b> you are agreeing to our
                  <a>"Terms of Service"</a>
                </p>
              </div>
            </div>
          </form>
        </div>

        <div ref="section1" class="column is-6 landingpage-column">
          text her
        </div>

        <div class="column is-6 landingpage-column">
          <img :src="image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import twice from "/home/martin/nuxt/larvel-nuxt/storage/app/images/twice.jpg"
import Form from "vform"

export default {
  layout: "simple",

  head() {
    return { title: this.$t("home") }
  },

  data: () => ({
    title: process.env.appName,
    image: twice,

    form: new Form({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: ""
    }),
    remember: false
  }),

  computed: mapGetters({
    authenticated: "auth/check"
  }),

  methods: {
    scrollToEnd() {
      this.$refs.section1.scrollIntoView()
    },
    async register() {
      console.log(this.form)
      // Register the user.
      const { data } = await this.form.post("/register")

      // Log in the user.
      const {
        data: { token }
      } = await this.form.post("/login")

      // Save the token.
      this.$store.dispatch("auth/saveToken", { token })

      // Update the user.
      await this.$store.dispatch("auth/updateUser", { user: data })

      // Redirect home.
      this.$router.push({ name: "home" })
    }
  }
}
</script>

<style scoped>
.ribbon {
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
}
.ribbon::before,
.ribbon::after {
  position: absolute;
  z-index: -1;
  content: "";
  display: block;
  border: 5px solid rgb(244, 66, 66);
}
.ribbon span {
  position: absolute;
  display: block;
  width: 225px;
  padding: 15px 0;
  background-color: rgb(244, 66, 66);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  font: 700 18px/1 "Lato", sans-serif;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-align: center;
}

/* top left*/
.ribbon-top-left {
  top: -10px;
  left: -10px;
}
.ribbon-top-left::before,
.ribbon-top-left::after {
  border-top-color: transparent;
  border-left-color: transparent;
}
.ribbon-top-left::before {
  top: 0;
  right: 0;
}
.ribbon-top-left::after {
  bottom: 0;
  left: 0;
}
.ribbon-top-left span {
  right: -25px;
  top: 30px;
  transform: rotate(-45deg);
}

.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.title {
  font-size: 85px;
}

div.welcome {
  background-image: url(background-image.png);
  min-height: 100%;
}

div.landingpage-content {
  padding-top: 10rem;
}

div.landingpage-column {
  margin-bottom: 10rem;
  /* margin-bottom: 50vh; */
}

div.title-column {
  padding-top: 9rem;
  text-align: center;
}

div.sign-up-box {
  border: rgb(197, 197, 197) solid 1px;
  background: rgb(247, 247, 247, 0.8);
}

div.terms-of-service-field {
  padding: 1rem;
}
</style>
