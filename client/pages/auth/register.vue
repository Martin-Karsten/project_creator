<template>
  <el-col :offset="6" class="register-form">
    <el-form label-position="top" ref="form" :rules="rules" :model="form">
      <el-row :gutter="12">
        <el-col :span="6">
          <el-form-item
            label="First Name"
            prop="first_name"
          >
            <el-input 
              v-model="form.first_name"
              :class="{ 'is-invalid': form.errors.has('name') }"
              type="text"
              placeholder="First Name"
              name="first_name" 
              autocomplete="on"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item
            label="Last Name"
            prop="last_name"
          >
            <el-input 
              v-model="form.last_name"
              :class="{ 'is-invalid': form.errors.has('name') }"
              type="text"
              placeholder="Last Name"
              name="last_name"
              autocomplete="on"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="EMail Address"
            prop="email"
          >
            <el-input v-model="form.email" type="email" autocomplete="on"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="Password"
            prop="password"
          >
            <el-input v-model="form.password" 
              type="password"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="Confirm Password"
            prop="password_confirmation"
          >
            <el-input v-model="form.password_confirmation" 
              type="password"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-button type="primary" @click="submitForm">Register</el-button>
    </el-form>
  </el-col>
</template>

<script>
import Form from "vform"

export default {
  layout: "settings",
  head() {
    return { title: this.$t("register") }
  },
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.form.password_confirmation !== '') {
            this.$refs.form.validateField('password_confirmation');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.form.password) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
    return{
      form: new Form({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }),
      rules: {
          password: [
            { validator: validatePass, trigger: 'blur' },
            { min: 8, max: 80, message: 'At least 8 Characters', trigger: 'blur' }
          ],
          password_confirmation: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          first_name: [
              { required: true, message: 'First Name required'},
              { max: 80, trigger: 'blur' }
          ],
          last_name: [
              { required: true, message: 'Last Name required'},
              { max: 80, trigger: 'blur' }
          ],
          email: [
                { required: true, message: 'Please input email address', trigger: 'blur' },
                { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
          ]
      }
    }
  },

  methods: {
    submitForm(){
        this.$refs.form.validate((valid) => {
          if (!valid) {
            return false
          } else {
            console.log('register')
            this.register()
          }
        });
    },
    async register() {
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
.register-form{
  margin-top: 7%;
}

</style>
