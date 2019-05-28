<template>
  <div class="box">
    <form @submit.prevent="login" @keydown="form.onKeydown($event)">
      <div class="columns form form1">
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

      <div class="check has-text-centered">
        <checkbox v-model="remember" name="remember">
          {{ $t("remember_me") }}
        </checkbox>
      </div>

      <div class="has-text-centered">
        <button class="button is-success">
          {{ $t("login") }}
        </button>
        <router-link :to="{ name: 'register' }">
          <button class="button is-success">
            {{ $t("register") }}
          </button>
        </router-link>
      </div>
    </form>

    <div class="forgot-pw has-text-centered">
      <router-link :to="{ name: 'password.request' }">
        {{ $t("forgot_password") }}
      </router-link>
    </div>
  </div>
</template>

<script>
import Form from "vform"

export default {
  head() {
    return { title: this.$t("login") }
  },

  data: () => ({
    form: new Form({
      email: "",
      password: ""
    }),
    remember: false
  }),

  methods: {
    async login() {
      // Submit the form.
      const { data } = await this.form.post("/login")

      // Save the token.
      this.$store.dispatch("auth/saveToken", {
        token: data.token,
        remember: this.remember
      })

      // Fetch the user.
      await this.$store.dispatch("auth/fetchUser")

      // Redirect home.
      this.$router.push({ name: "home" })
    }
  }
}
</script>

<style>
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

div.check {
  margin-bottom: 1rem;
}

.forgot-pw {
  margin-top: 1.8rem;
  margin-bottom: 0.5rem;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
</style>
