<template>
  <div class="box">
    <form @submit.prevent="register" @keydown="form.onKeydown($event)">
      <div class="columns form form1">
        <div class="column is-3">
          <div class="field">
            <p class="control has-icons-left">
              <input
                v-model="form.first_name"
                class="input is-medium"
                :class="{ 'is-invalid': form.errors.has('name') }"
                type="text"
                placeholder="First Name"
                name="first_name"
              >
              <has-error :form="form" field="name" />
              <span class="icon is-small is-left">
                <fa icon="user" />
              </span>
            </p>
          </div>
        </div>
        <div class="column is-3">
          <div class="field">
            <p class="control has-icons-left">
              <input
                v-model="form.last_name"
                class="input is-medium"
                :class="{ 'is-invalid': form.errors.has('name') }"
                type="text"
                placeholder="Last Name"
                name="last_name"
              >
              <has-error :form="form" field="name" />
              <span class="icon is-small is-left">
                <fa icon="user" />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="columns form">
        <div class="column is-6">
          <div class="field">
            <p class="control has-icons-left">
              <input
                v-model="form.email"
                class="input is-medium"
                :class="{ 'is-invalid': form.errors.has('email') }"
                type="email"
                placeholder="Email"
                name="email"
              >
              <has-error :form="form" field="email" />
              <span class="icon is-small is-left">
                <fa icon="envelope" />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="columns form">
        <div class="column is-6">
          <div class="field">
            <p class="control has-icons-left">
              <input
                v-model="form.password"
                class="input is-medium"
                :class="{ 'is-invalid': form.errors.has('password') }"
                type="password"
                placeholder="Password"
                name="password"
              >
              <has-error :form="form" field="password" />
              <span class="icon is-small is-left">
                <fa icon="shield-alt" />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="columns form">
        <div class="column is-6">
          <div class="field">
            <p class="control has-icons-left">
              <input
                v-model="form.password_confirmation"
                class="input is-medium"
                :class="{
                  'is-invalid': form.errors.has('password_confirmation')
                }"
                type="password"
                placeholder="Confirm Password"
                name="password_confirmation"
              >
              <has-error :form="form" field="password_confirmation" />
              <span class="icon is-small is-left">
                <fa icon="shield-alt" />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="has-text-centered">
        <button class="button is-success">
          {{ $t("register") }}
        </button>
      </div>

      <hr>
      <p class="terms">
        By clicking Register, you agree on our
        <a href="#"> terms and condition</a>.
      </p>
    </form>
  </div>
</template>

<script>
import Form from "vform"

export default {
  layout: "settings",
  head() {
    return { title: this.$t("register") }
  },

  data: () => ({
    form: new Form({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: ""
    })
  }),

  methods: {
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

<style>
div.box {
  margin-top: 2rem;
}

div.form {
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}

div.form1 {
  margin-top: 1rem;
}

button.register-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

p.terms {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}
</style>
