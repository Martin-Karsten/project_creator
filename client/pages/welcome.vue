<template>
  <div class="welcome">
    <div class="ribbon ribbon-top-left">
      <span> ALPHA </span>
    </div>
    <div class="landingpage">
      <div class="landingpage-first">
      <el-row>
        <!-- <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="title-column hidden-sm-only hidden-xs-only">
          <h1 class="title">
            Create Beautiful Presentations
          </h1>
          <h2 class="subtitle">
            <a @click="scrollToEnd">Learn More</a>
          </h2>
        </el-col> -->
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="title-column hidden-sm-only hidden-xs-only">
          <img class="landingpage-image" :src="apiStorage + 'images/MacBookEdited.png'" alt="">
        </el-col>

        <el-col :sm="24" :md="12" :lg="12" :xl="12" class="sign-up-box">
          <el-form label-position="top" ref="form" :rules="rules" :model="form">
            <el-row :gutter="12">
              <el-col :span="12">
                <el-form-item
                  prop="first_name"
                >
                  <span>First Name</span>
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
                  prop="last_name"
                >
                  <span>Last Name</span>
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
                  prop="email"
                >
                  <span>Email</span>
                  <el-input v-model="form.email" type="email" autocomplete="on"/>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item
                  prop="password"
                >
                  <span>Password</span>
                  <el-input v-model="form.password" 
                    type="password"
                  />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item
                  prop="password_confirmation"
                >
                  <span>Confirm Password</span>
                  <el-input v-model="form.password_confirmation" 
                    type="password"
                  />
                </el-form-item>
              </el-col>
            </el-row>
            <el-button type="primary" @click="submitForm('form')">Register</el-button>
          </el-form>
        </el-col>
      </el-row>
      </div>
      <div class="landingpage-gif-container">
        <el-row class="landingpage-row">
          <el-col :sm="24" :md="8" :lg="8" :xl="8" class="landingpage-column">
            <img class="landingpage-gif" :src="apiStorage + 'gifs/text.gif'" alt="">
            <h3 class="landingpage-gif-text">Create draggable and resizable objects</h3>
          </el-col>
            <el-col :sm="24" :md="8" :lg="8" :xl="8" class="landingpage-column">
              <img class="landingpage-gif" :src="apiStorage + 'gifs/image.gif'" alt="">
              <h3 class="landingpage-gif-text">Search for images</h3>
            </el-col>
            <el-col :sm="24" :md="8" :lg="8" :xl="8" class="landingpage-column">
              <img class="landingpage-gif" :src="apiStorage + 'gifs/chart.gif'" alt="">
              <h3 class="landingpage-gif-text">Create complex data objects</h3>
            </el-col>
        </el-row>
        
        <el-row>
          <el-col class="hidden-sm-only hidden-xs-only" :sm="24" :md="24" :lg="24" :xl="24">
            <br>
          </el-col>
        </el-row>

        <el-row>
          <el-col class="hidden-sm-only hidden-xs-only" :sm="4" :md="4" :lg="4" :xl="4">
            <p></p>
          </el-col>
          <el-col :sm="24" :md="8" :lg="8" :xl="8" class="landingpage-column">
            <img class="landingpage-gif" :src="apiStorage + 'gifs/color.gif'" alt="">
            <h3 class="landingpage-gif-text">Modify objects</h3>
          </el-col>
          <el-col :sm="24" :md="8" :lg="8" :xl="8" class="landingpage-column">
            <img class="landingpage-gif" :src="apiStorage + 'gifs/delete.gif'" alt="">
            <h3 class="landingpage-gif-text">Easily delete created objects</h3>
          </el-col>
        </el-row>
      </div>

        <div class="landingpage-bottom-register-background">
          <el-form class="landingpage-bottom-register" ref="formBottom" :rules="rulesBottom">
            <el-row :gutter="12">
              <el-col :sm="24" :md="6" :lg="6" :xl="6">
                <el-form-item
                prop="first_name_bottom">
                  <span>First Name</span>
                  <el-input v-model="formBottom.first_name" placeholder="First Name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="6" :lg="6" :xl="6">
                <el-form-item
                prop="last_name_bottom">
                  <span>Last Name</span>
                  <el-input v-model="formBottom.last_name" placeholder="Last Name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="6" :lg="6" :xl="6">
                <el-form-item
                prop="email_bottom">
                  <span>Email</span>
                  <el-input v-model="formBottom.email" type="email" placeholder="Email"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="6" :lg="6" :xl="6">
                <el-form-item
                prop="password_bottom">
                  <span>Password</span>
                  <el-input v-model="formBottom.password" type="password" placeholder="Password"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
              <el-button class="register-button-bottom" type="success" @click="submitFormBottom('formBottom')">Sign up now</el-button>
          </el-form>
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
      var validatePass2Bottom = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.formBottom.password) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
    return{
      apiStorage: process.env.apiUrl + '/storage/',
      title: process.env.appName,
      image: twice,
      form: new Form({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }),
      formBottom: new Form({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation:""
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
      },
      rulesBottom: {
          password_bottom: [
            { validator: validatePass, trigger: 'blur' },
            { min: 8, max: 80, message: 'At least 8 Characters', trigger: 'blur' }
          ],
          first_name_bottom: [
              { required: true, message: 'First Name required'},
              { max: 80, trigger: 'blur' }
          ],
          last_name_bottom: [
              { required: true, message: 'Last Name required'},
              { max: 80, trigger: 'blur' }
          ],
          email_bottom: [
                { required: true, message: 'Please input email address', trigger: 'blur' },
                { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
          ]
      },
    }
  },

  computed: mapGetters({
    authenticated: "auth/check"
  }),

  methods: {
    scrollToEnd() {
      this.$refs.section1.scrollIntoView()
    },
    submitForm(form){
        this.$refs[form].validate((valid) => {
          if (!valid) {
            return false
          } else {
            this.register()
          }
        });
    },
    submitFormBottom(form){
          console.log(this.formBottom, 'hi')
        this.$refs.formBottom.validate((valid) => {
          if (!valid) {
            return false
          } else {
            this.formBottom.password_confirmation = this.formBottom.password
            this.register()
          }
        });
    },
    async register() {
      if(this.user)
        return
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
    },
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
  background: linear-gradient(to bottom, white 0%,white 34%,rgb(247, 247, 247, 0.8) 34%,rgb(247, 247, 247, 0.8) 50%, rgb(247, 247, 247, 0.8) 100%); /* W3C */
  background-size: 100% 120%;
  background-repeat: no-repeat;
  min-height: 100%;
}

.landingpage{
  max-width: 1600px;
  width: calc(100vw - 2em);
  margin: 0 auto;
}

.landingpage-first{
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  min-height: 90vh;
  margin-bottom: 2rem;
}

img.landingpage-image{
  width: 90%;
  height: auto;
}

div.landingpage-gif-container{
  min-height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img.landingpage-gif{
  width: 90%;
  height: 100%;
  display: table;
  margin: 0 auto;
}

.landingpage-gif-text{
  text-align: center;
}

div.title-column {
  text-align: center;
}

.title{
  font-size: 4vw;
}
.subtitle{
  font-size: 3vw;
}

div.sign-up-box {
  border: rgb(197, 197, 197) solid 1px;
  background: rgb(247, 247, 247, 0.8);
  padding: 0rem 1rem 1rem 1rem;
}

.landingpage-bottom-register-background{
  width: 100vw;
  height: 220px;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: white;
}

.landingpage-bottom-register{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.register-button-bottom{
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}

/* Mobile */

@media (max-width: 768){

}

@media (max-width: 990px){
    div.welcome {
    background: url(background-image.png), rgb(247, 247, 247, 0.8);
    background-size: 100% 88vh;
    background-repeat: no-repeat;
    min-height: 100%;
  }

  .landingpage-bottom-register-background{
  width: 100vw;
  height: 400px;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: white;
}
}

</style>
