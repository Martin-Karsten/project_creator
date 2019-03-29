<template>
<div>

  <p class="title is-3">Profile</p>

  <div class="level">
  <!-- Left side -->
  <div class="level-left">
    <div class="level-item">
      <p class="subtitle is-5">
        <strong>Picture</strong>
      </p>
    </div>
  </div>

  <!-- Right side -->
  <div class="level-right">
    <div class="level-item">
      <img :src="user.photo_url" class="profile-photo">
    </div>
    <div class="level-item">
      <div class="field has-addons">
        <p class="control">
          <button class="button" @click="showModal = true, currentModal = 'pictureModal'">
            Edit
          </button>
        </p>
      </div>
    </div>
  </div>
  </div>

  <hr>

  <div class="level">
  <!-- Left side -->
  <div class="level-left">
    <div class="level-item">
      <p class="subtitle is-5">
        <strong>Name</strong>
      </p>
    </div>
  </div>

  <!-- Right side -->
  <div class="level-right">
    <div class="level-item">
      <p class="subtitle is-5"><strong>{{user.name}}</strong></p>
    </div>
    <div class="level-item">
      <div class="field has-addons">
        <p class="control">
          <button class="button" @click="showModal = true, currentModal = 'nameModal'">
            Edit
          </button>
        </p>
      </div>
    </div>
  </div>
  </div>

  <hr>

  <div class="level">
  <!-- Left side -->
  <div class="level-left">
    <div class="level-item">
      <p class="subtitle is-5">
        <strong>E-Mail</strong>
      </p>
    </div>
  </div>

  <!-- Right side -->
  <div class="level-right">
    <div class="level-item">
      <p class="subtitle is-5"><strong>{{user.email}}</strong></p>
    </div>
    <div class="level-item">
      <div class="field has-addons">
        <p class="control">
          <button class="button" @click="showModal = true, currentModal = 'emailModal' ">
            Edit
          </button>
        </p>
      </div>
    </div>
  </div>
  </div>

  <modal v-if="showModal" @close="showModal = false, currentModal = '', file = '', backgroundColor.old = 'white', backgroundColor.changed = false">

    <div v-if="currentModal == 'pictureModal' " slot="form-container">
      <h3 class="title is-3 modal-card-head" slot="header">Edit Profile Picture</h3>

      <div slot="body">
        <div class="file-drop-area" v-bind:style="{ backgroundColor: backgroundColor.old }">
          <div v-if="file == ''">
            <span class="fake-btn">Choose file</span>
            <span v-if="file == ''" class="file-msg">or drag and drop file here</span>
          </div>

          <span v-else class="name" >{{file.name}}</span>
          <input class="file-input" type="file" @dragenter="onDragEnter" @dragleave="onDragLeave" @change="onInputChange">
        </div>
      </div>
    </div>

    <div v-else-if="currentModal == 'nameModal' " slot="form-container">
      
      <h3 class="title is-3 modal-card-head" slot="header">Edit your Name</h3>

      <div slot="body">
        <div class="field">
          <div class="control">
            <input class="input is-medium modal-input-1" type="text" placeholder="First Name" style="width: 495px">
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input class="input is-medium modal-input-2" type="text" placeholder="Last Name" style="width: 495px">
          </div>
        </div>     
      </div>
    </div>
  
    <div v-else-if="currentModal == 'emailModal' " slot="form-container">
      <h3 class="title is-3 modal-card-head" slot="header">Edit {{user.email}}</h3>

      <div slot="body">
        <div class="field">
          <div class="control">
            <input class="input is-medium modal-input-1" type="email" placeholder="New Email address" style="width: 495px">
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input class="input is-medium modal-input-2" type="email" placeholder="Confirm Email address" style="width: 495px">
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input class="input is-medium modal-input-2" type="email" placeholder="Password" style="width: 495px">
          </div>
        </div>       
      </div>
    </div>

  </modal>

</div>
</template>

<script>
import  Modal from '/home/martin/nuxt/larvel-nuxt/client/components/global/Modal.vue'
import Form from 'vform'
import { mapGetters } from 'vuex'

export default {
  components: {
    'modal': Modal,
    },
  scrollToTop: false,

  head () {
    return { title: this.$t('settings') } 
  },

  data: () => ({
    currentModal: '',
    showModal: false,
    dropActive: false,
    file: '',
    backgroundColor: {old: 'white', new: 'lightgray', temp: '', changed: false},
    pictureForm: new Form({
      newPhoto: ''
    }),
    nameForm: new Form({
      name: '',
    }),
    // emailForm: new Form({
    //   oldEmail: '',
    //   newEmail: '',
    //   password: ''
    // })
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  created () {
    // Fill the form with user data.
    this.pictureForm.keys().forEach(key => {
      this.pictureForm[key] = this.user[key]
    })
  },

  methods: {
    acivateNameModal(){
      this.showModal = true
      this.currentModal = 'userNameModal'
    },
    onDragEnter(){
      this.backgroundColor.temp = this.backgroundColor.old
      this.backgroundColor.old = this.backgroundColor.new
      this.dropActive = true
    },
    onDragLeave(){
      if(!this.backgroundColor.changed)
        this.backgroundColor.old = this.backgroundColor.temp

      this.dropActive = false
    },
    onInputChange(event){
      this.backgroundColor.changed = true
      this.backgroundColor.old = this.backgroundColor.new;
      this.file = event.target.files[0]
      console.log(this.file)
    },
    async update () {
      const { data } = await this.form.patch('/settings/profile')

      this.$store.dispatch('auth/updateUser', { user: data })
    }
  }
}


</script>

<style>
img.profile-photo{
  width: 75px;
  height: 75px;
  border-radius: 25px;
}

input.modal-input-1{
  margin: 20px 20px 10px 20px;
}

input.modal-input-2{
  margin: 10px 20px 10px 20px;
}

.file-drop-area {
  margin-left: 24px;
  position: relative;
  display: flex;
  align-items: center;
  width: 500px;
  max-width: 100%;
  padding: 50px;
  border: 1.2px dashed black;
  border-radius: 3px;
  transition: 0.2s;
}
.file-drop-area.is-active {
  background-color: rgba(255, 255, 255, 0.05);
}

.fake-btn {
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  padding: 8px 0px;
  margin-right: 10px;
  font-size: 12px;
  text-transform: uppercase;
}

.file-msg {
  font-size: small;
  font-weight: 300;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-input {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0;
}
.file-input:focus {
  outline: none;
}

</style>

