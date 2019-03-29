<template>
<div>
  <div class="home-card">
{{projectDropdownisActive}}
  <router-link :to="{ name: 'project.create' }">
     <v-button @click="showProjectNameInput">{{ $t('create_project') }}</v-button>
  </router-link>
              <a href="project/create">
<v-button @click="showProjectNameInput">{{ $t('create_project') }}</v-button>
              </a>

       <button class="button" @click="createProject">Create Project!!</button>
  <div>
    <h1 class="title is-1" v-if="projects.length <= 1">Looks like you haven't created any Projects yet</h1>
    <h1 class="title is-1" v-else>{{ $t("your_projects") }}</h1>
  </div>
  </div>
    <div class="columns  is-multiline project-list" >
      <div v-for="project in projects" v-bind:key="project" v-bind:class="inputName" v-if="project == null ">
        <div class="project-item  project-empty has-text-centered is-vertical-center">
          <fa class="plus-icon" icon="plus" @click="showProjectNameInput" v-if="iconAcitvated" />
          <transition name="fade">
            <div class="column is-11 project-name ">
                <div class="field" v-show="inputActivated">
                  <input class="input title is-3" type="text" placeholder="Project Name..." v-model="projectName" @blur="changeProjectName">
                </div>
                <div class="field" v-show="inputActivated">
                  <a href="project/create">
                    <button class="button is-success" @click="createProject"> Create </button>
                  </a>
                <button class="button is-danger" @click="cancelProject">Cancel</button>
                </div>
            </div>
          </transition>
        </div>
      </div>

      <div class="column is-3 project-container" v-else>
        <div class="dropdown is-right project-dropdown" :class="{ 'is-active': project.isActive}" >
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="project.isActive = !project.isActive">
              <span class="icon is-small">
                <fa icon="ellipsis-h"/>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" role="menu">
            <ul class="box dropdown-items">
              <li class="dropdown-item">Rename</li>
              <li class="dropdown-item">Download</li>
              <li class="dropdown-item">Delete</li>
            </ul>
          </div>
        </div>
        <div class="project-item project-empty has-text-centered is-vertical-center">
          {{project.name}}
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Form from 'vform'
export default {
  layout:'default',
  middleware: 'auth',

  head () {
    return { title: this.$t('home') }
  },
  data: () => ({
      projects: [null,{name:1, isActive: false},{name: 2, isActive: false}],
      projectName: '',
      iconAcitvated: true,
      inputActivated: false,
      inputName: 'column is-2 input-big has-text-centered is-3 project-container',
      project: new Form({
            projectName: '',
            userId: '',
            private: true
          }),
  }),
    computed: {
    ...mapGetters({
        user: 'auth/user',
    })
  },
  methods:{
    showProjectNameInput(){
      this.inputName = 'column has-text-centered is-6 project-container'
      this.projects[0] = null
      this.iconAcitvated = false;
      this.inputActivated = true
    },
    async createProject () {
      this.project.userId = this.user.id
      this.project.projectName = this.projectName
      //await this.$store.dispatch('project/createProjejct', this.project)
      //this.projects.splice(1,0, this.projectName)
      this.projectName = ''
    },
    changeProjectName() {
    //  this.projects[0] = this.projectName
    //  this.projects.splice(1, 0, this.projectName);
    },
    cancelProject() {
      this.projectName = ''
      this.projects[0] = null
      this.inputActivated = false
      this.iconAcitvated = true
      this.inputName = 'column has-text-centered is-3 project-container'
    }
  }
}
</script>

<style>

.is-vertical-center {
display: flex;
justify-content: center;
align-items: center;
}

div.project-container{
  position: relative;
  min-width: 22rem;
}

div.project-item{
  border-style: solid;
  border-radius: 4px;
  min-height: 20rem;
}

div.project-empty{
  background: #c7d9e8;
}

div.project-empy:hover{
  border-color: pink;
}

.project-dropdown{
  position: absolute;
  top: 24px;
  right: 32px;
  font-size: 18px;
  cursor: pointer;
}

.plus-icon{
  position: absolute;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  font-size: 65px;
}

.plus-icon:hover{
  background: black;
  border-radius: 40px;
  opacity: 0.6;
  cursor: pointer;
}

.fade-enter,
.fade-leave-to { transition: opacity 5.5s ease-out }

.fade-leave,
.fade-enter-to { transition: opacity 5.5s ease-in }

.fade-enter-active,
.fade-leave-active { transition: opacity 300ms }
</style>

