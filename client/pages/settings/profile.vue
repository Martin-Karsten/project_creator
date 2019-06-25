<template>
  <div>
    <el-main class="profile-container">
        <h3>Profile</h3>
      <el-row class="profile-items">
        <el-col :span="13" :offset="4">
          Profile Picture
        </el-col>
        <el-col :span="12">
          <el-row class="profile-items-inner">
            <el-col :span="4" :offset="1"> 
              <img :src="this.apiUrl + '/storage/' + this.user.avatar" class="profile-photo">
            </el-col>
            <el-col :span="12">
              <el-button class="profile-edit-button" @click="showModal('imageModal')">Edit</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <el-row class="profile-items">
        <el-col :span="13" :offset="4">
          Name
        </el-col>
        <el-col :span="12">
          <el-row class="profile-items-inner">
            <el-col :span="5">
              {{user.first_name}} {{user.last_name}}
            </el-col>
            <el-col :span="12">
              <el-button class="profile-edit-button" @click="showModal('nameModal')">Edit</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <el-row class="profile-items">
        <el-col :span="13" :offset="4">
          Email Address
        </el-col>
        <el-col :span="12">
          <el-row class="profile-items-inner">
            <el-col :span="4" :offset="1"> 
              {{user.email}}
            </el-col>
            <el-col :span="12">
              <el-button class="profile-edit-button" @click="showModal('emailModal')">Edit</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>

    <modal v-if="modalName === 'imageModal'"
      v-show="isModalVisible"
      @close="closeModal"
    >
      <template v-slot:header>
        <h3>Edit Your Profile Image</h3>
      </template>

      <template v-slot:body>
        <el-upload
          class="avatar-uploader"
          action="`http://localhost:8000/users/1`"
          :show-file-list="false"
          :before-upload="beforeAvatarUpload"
          :drag="true"
          :auto-upload="true"
          :http-request="updateImage"
          >
          <img :src="getProfileImage()" class="modal-avatar-photo">
        </el-upload>
      </template>
    </modal>

    <modal v-else-if="modalName === 'nameModal'"
      v-show="isModalVisible"
      @close="closeModal"
      @showModal="showModal"
    >
      <template v-slot:header>
        <h3>Edit you Username</h3>
      </template>

      <template v-slot:body>
        <el-form class="modal-buttons" @submit.prevent="updateName"
        >
        <el-form-item
        >
          <el-input v-model="form.first_name" :placeholder="user.first_name" />
        </el-form-item>
        <el-form-item
          class="last-name-modal-input"
        >
          <el-input v-model="form.last_name" :placeholder="user.last_name" />    
        </el-form-item>
        </el-form>
      </template>

    <template v-slot:footer>
      <div>

      </div>
      <el-button type="success" @click="updateName">Submit</el-button>
      <el-button type="danger" @click="closeModal">Cancel</el-button>
    </template>
    </modal>

    <modal v-else-if="modalName === 'emailModal'"
      v-show="isModalVisible"
      @close="closeModal"
      @showModal="showModal"
    >
      <template v-slot:header>
        <h3>Edit you Email Address</h3>
      </template>

      <template v-slot:body>
        <el-form @submit.prevent="updateEmail" class="modal-buttons"
        >
        <el-form-item
        >
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        </el-form>
      </template>

      <template v-slot:footer>
        <el-button type="success" @click="updateName">Submit</el-button>
        <el-button type="danger" @click="closeModal">Cancel</el-button>
      </template>
    </modal>
    

  </div>
</template>

<script>
import  Modal from '../../components/global/Modal.vue'
import Form from 'vform'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  components: {
    Modal
    },
  scrollToTop: false,

  head () {
    return { title: this.$t('settings') } 
  },

  data: () => ({
    apiUrl: process.env.apiUrl,
    isModalVisible: false,
    modalName: 'imageModal',
    avatar: '',
    profileImage: '',
    form: new Form({
      first_name: '',
      last_name: '',
      email: '',
      avatar: ''
    }),
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  created () {
    // Fill the form with user data.
    this.form.keys().forEach(key => {
      this.form[key] = this.user[key]
    })
  },

  methods: {
    showModal(name) {
      this.isModalVisible = true;
      switch(name){
        case 'imageModal':
          this.modalName = name
          return;
        case 'nameModal':
          this.modalName = name
          return;
        case 'emailModal':
          this.modalName = name
          return;
      }
    },
    closeModal() {
      this.isModalVisible = false;
      this.modalName = ''
    },
      getProfileImage(){
        console.log(this.user, 'upateProfile')
        return this.apiUrl + '/storage/' + this.user.avatar
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG && !isPNG) {
          this.$message.error('Avatar picture must be JPG or PNG format!');
        }
        if (!isLt2M) {
          this.$message.error('Avatar picture size can not exceed 2MB!');
        }
        this.avatar = file
      },
      updateImage () {
        let that = this
        var myFormData = new FormData()
        myFormData.append('image', this.avatar, this.avatar.name)
        axios({
            method: 'post',
            url: '/settings/avatar',
            data: myFormData,
            config: { headers: {'Content-Type': 'application/json' }},
        }).then(function (response) {
          that.$store.dispatch('auth/updateUser', { user: response.data })
        });

        this.closeModal()
    },

    async updateName(){
      try{
        const { data }  = await this.form.patch(`users/${this.user.id}`)
        this.$store.commit('auth/UPDATE_USER', data)
      }
      catch(e){
      }
      this.isModalVisible = false
      this.modalName = ''
    },

    async updateEmail(){

    }
  }
}


</script>

<style>
.profile-container{
  margin-left: 12rem;
  margin-right: 12rem;
}

.profile-items{
    display: flex;
    align-items: center;
    height: 10rem;
}

.profile-items:nth-child(odd){
  background-color: #f4f5f5;
}

.profile-items:nth-child(even){
  background-color: #e6e6e6;
}

.profile-items-inner{
    display: flex;
    align-items: center;
}

img.profile-photo{
  width: 75px;
  height: 75px;
  border-radius: 30px;
}

.modal-inputs{
    padding-left: 3rem;
    padding-right: 3rem;
}

.last-name-modal-input{
  margin-bottom: 0!important;
}

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: table;
    margin: 0 auto;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .modal-avatar-photo {
    width: 100%;
    height: 100%;
    display: block;
  }


</style>

