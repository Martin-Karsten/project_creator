<template>
<div class="home">

  <!-- <h1 class="title is-1 home-title" v-if="projects.length < 1">Looks like you haven't created any Projects yet</h1>
  <h1 class="title is-1 home-title" v-else>{{ $t("your_projects") }}</h1> -->

<div class="columns is-multiline">

  <!-- <home-sidebar class="column is-1">
      <li>
        <fa class="show-scroller-chevron" icon="chevron-right" />
      </li>
      <li>
          <div></div>
      </li>
  </home-sidebar> -->
  
    <div class="column is-11 columns  is-multiline project-list" >
      <div class="column is-2" >
        <div class="project-item  project-empty has-text-centered is-vertical-center">
            <div class="column is-11 project-name ">
              <input class="input title is-5 project-name-input" type="text" placeholder="Project Name..." v-model="form.project_name">
              <button class="button is-success" @click="createProject">{{ $t('create_project') }}</button>
              <button class="button is-danger" @click="cancelProject">{{ $t('cancel') }}</button>
            </div>
        </div>
      </div>
      
      <div class="column is-2" v-show="ready" v-for="project in projects" :key="project.id">
        <div class="project-item  project-empty has-text-centered is-vertical-center">
        <div class="dropdown is-right project-dropdown" :class="{ 'is-active': project.clicked}" >
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="selectProject(project.id)">
              <span class="icon is-small">
                <fa icon="ellipsis-h"/>
              </span>
            </button>
          </div>
          <!-- <checkbox @click="project.clicked = !project.clicked" ></checkbox> -->
          <div class="dropdown-menu" role="menu">
            <ul class="box dropdown-items">
              <li class="dropdown-item">Rename</li>
              <li class="dropdown-item">Download</li>
              <li class="dropdown-item" @click="deleteProject(project.id)">Delete</li>
            </ul>
          </div>
        </div>
            <div class="column is-11 project-name ">
              <input class="input title is-5 project-name-input" type="text" v-bind:placeholder="project.project_name" v-model="form.project_name">
              <!-- <router-link :to="{name: 'project.view', params: { id: project.id }}"> -->
                <!-- <p>{{ $t('created_at') }}</p> -->
                <b>
                  <p>{{project.created_at}}</p>
                </b>
                <button class="button" @click="viewProject(project.id)">View</button>
              <!-- </router-link> -->
            </div>
        </div>
      </div>

  </div>

  <div class="column is-half is-offset-one-quarter">
    <pagination :pagination="pagination" :offset="3" @paginate="changeNumber()"></pagination>
  </div>
</div>
  
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import Form from 'vform'
// import HomeSidebar from '../components/home/HomeSidebar'
import Checkbox from '../components/global/Checkbox'
import Pagination from '../components/global/Pagination'
export default {
  layout:'default',
  middleware: 'auth',

  components: {
    // HomeSidebar,
    Checkbox,
    Pagination
  },

  head () {
    return { title: this.$t('home') }
  },
  data: () => ({
      projectsClicked: [],
        pagination: {
            'current_page': 1
        },
      inputName: 'column is-2 input-big has-text-centered is-3 project-container',
      ready: false,
      form: new Form({
            project_name: '',
            user_id: '',
            private: true,
          }),
      deleteForm: new Form({
        id: ''
    }),
  }),
    computed: {
    ...mapGetters({
        user: 'auth/user',
        projects: 'project/getProjects',
    }), 
  },
  async mounted() {
    await this.$store.dispatch('project/fetchProjects')

    this.ready = true
  },
  methods:{
    showProjectNameInput(){
      this.inputName = 'column has-text-centered is-6 project-container'
      this.projects[0] = null
      this.iconAcitvated = false;
      this.inputActivated = true
    },
    selectProject(id) {
      this.$store.commit('project/SELECT_PROJECT', id)
    },
    async changeNumber() {
    axios.get('user/projects?page=' + this.pagination.current_page)
    .then(response => {
        this.$store.dispatch('project/changeNumber', response)
        this.pagination = response.data.pagination;
    })
    .catch(error => {
      console.log(error.response.data)
    });

    },
    async createProject () {
      this.form.user_id = this.user.id
      const { data } = await this.form.post('user/project/create')

      this.$store.commit('Layout/CREATE_LAYOUT')
      this.$store.dispatch('project/createProject', {
        project_id: data.id,
        project_name: data.project_name,
        user_id : data.user_id,
        private : data.private
      })

      // Redirect to project creation.
      this.$router.push({ name: 'project.create', params: data })
    },
    async viewProject(id) {
      // Redirect to project
      this.$router.push({name: 'project.view', params: { id: id }})
    },
    changeProjectName() {
    },
    async deleteProject(id) {
      this.deleteForm.id = id
      try{
      await this.deleteForm.delete(`user/project/${id}/delete`, id)      
      }
      catch(e){
        console.log(e)
      }
      this.$store.commit('project/DELETE_PROJECT',id)
    },
    cancelProject() {
      this.form.project_name = ''
      this.inputActivated = false
      this.iconAcitvated = true
      this.inputName = 'column has-text-centered is-3 project-container'
    }
  }
}
</script>

<style>

div.home{
}

h1.home-title {
  margin-bottom: 0.5rem;
}

.is-vertical-center {
display: flex;
justify-content: center;
align-items: center;
}

div.project-container{
  position: relative;
  min-width: 10rem;
}

div.project-list {
  margin-top: 1rem;
  padding-bottom: 0;
  min-height: 82vh;
}

input.project-name-input {
  margin-bottom: 0!important;
}

div.project-item{
  position: relative;
  border-style: solid;
  border-radius: 4px;
  min-height: 13rem;
}

div.project-empty{
  background: #c7d9e8;
}

div.project-empy:hover{
  border-color: pink;
}

.project-dropdown{
  position: absolute;
  top: 14px;
  right: 22px;
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

