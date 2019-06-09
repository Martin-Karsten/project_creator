<template>
  <div class="welcome">
    <div class="ribbon ribbon-top-left">
      <span> ALPHA </span>
    </div>

    <el-main class="landingpage">
      <el-row>
        <el-col :span="12" class="title-column">
          <h1 class="title">
            Create Beautfil Presentations
          </h1>
          <h2 class="subtitle">
            <a @click="scrollToEnd">Learn More</a>
          </h2>
        </el-col>

        <el-col :span="12" class="sign-up-box">
          <el-form label-position="top" ref="form" :rules="rules" :model="form">
            <el-row :gutter="12">
              <el-col :span="12">
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
              <el-col :span="12">
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
              <el-col :span="24">
                <el-form-item
                  label="EMail Address"
                  prop="email"
                >
                  <el-input v-model="form.email" type="email" autocomplete="on"/>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
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
              <el-col :span="24">
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
      </el-row>
    </el-main>
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
      title: process.env.appName,
      image: twice,
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


  computed: mapGetters({
    authenticated: "auth/check"
  }),

  methods: {
    scrollToEnd() {
      this.$refs.section1.scrollIntoView()
    },
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
  top: 60px;
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

div.welcome {
  background-image: url(background-image.png);
  min-height: 100vh;
}

.landingpage{
  margin-top: 4rem;
  padding: 3rem;
}

div.title-column {
  padding-top: 3rem;
  text-align: center;
}

.title {
  font-size: 85px;
}

.subtitle {
}

div.sign-up-box {
  border: rgb(197, 197, 197) solid 1px;
  background: rgb(247, 247, 247, 0.8);
  padding: 1rem;
}

</style>
