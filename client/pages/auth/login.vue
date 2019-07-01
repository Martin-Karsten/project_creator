<template>
  <el-col :offset="6" class="login-form-col">
    <el-form class="login-form" label-position="top" ref="form" :model="form" label-width="120px">
      <el-form-item 
          prop="email"
          label="Email Address"
          :rules="[
            { required: true, message: 'Please input your email address', trigger: 'blur' },
            { type: 'email', message: 'Please input a correct email address', trigger: ['blur', 'change'] }
          ]"    
      >
      <el-col :span="24">
        <el-input 
          v-model="form.email"
          class="input is-medium"
          type="email"
          placeholder="Email"
          name="email"
          autocomplete="on"
        />
        <has-error :form="form" field="email" />
      </el-col>

      </el-form-item
      
      >
      <el-form-item 
        label="Password"
        prop="password"
        :rules="[
          { required: true, message: 'Please input your password', trigger: 'blur' },
        ]"       
      >
        <el-col :span="24">
          <el-input 
            v-model="form.password"
            class="input is-medium"
            :class="{ 'is-invalid': form.errors.has('password') }"
            type="password"
            placeholder="Password"
            name="password"    
          />
            <has-error :form="form" field="password" />
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="remember">
          {{ $t("remember_me") }}
        </el-checkbox>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="submitForm">{{ $t("login") }}</el-button>
      <router-link to="/register"> <el-button type="primary">{{ $t("register") }}</el-button> </router-link>
    </el-form-item>
    </el-form>
  </el-col>
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
    remember: false,
    rules: {
      email: [],
      password: [],
    }
  }),

  methods: {
    submitForm(){
        this.$refs.form.validate((valid) => {
          if (!valid) {
            return false
          } else {
            this.login()
          }
        });
    },
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
.login-form-col {
  margin-top: 9%;
  width: 1000px;
  padding: 1rem;
  /* border: 1px solid black; */
}

.login-form{

}
</style>
