<template>
<div>
  <div class="home-card">

  <h1 class="title is-1 home-title" v-if="projects.length < 1">Looks like you haven't created any Projects yet</h1>
  <h1 class="title is-1 home-title" v-else>{{ $t("your_projects") }}</h1>
  </div>
    <div class="columns  is-multiline project-list" >

      <div class="column is-3" >
        <div class="project-item  project-empty has-text-centered is-vertical-center">
            <div class="column is-11 project-name ">
              <input class="input title is-3" type="text" placeholder="Project Name..." v-model="form.project_name">
              <button class="button is-success" @click="createProject">{{ $t('create_project') }}</button>
              <button class="button is-danger" @click="cancelProject">{{ $t('cancel') }}</button>
            </div>
        </div>
      </div>

      <div class="column is-3"  v-for="project in projects" :key="project.id">
        <div class="project-item  project-empty has-text-centered is-vertical-center">
            <div class="column is-11 project-name ">
              <input class="input title is-3" type="text" v-bind:placeholder="project.project_name" v-model="form.project_name">
              <router-link :to="{name: 'project.view', params: { id: project.id }}">
                <button class="button" @click="viewProject">View</button>
                </router-link>
                
            </div>
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
      // projects: [null,{name:1, isActive: false},{name: 2, isActive: false}],
      projectsExist: false,
      iconAcitvated: true,
      inputActivated: false,
      inputName: 'column is-2 input-big has-text-centered is-3 project-container',
      form: new Form({
            project_name: '',
            user_id: '',
            private: true
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
  },
  methods:{
    showProjectNameInput(){
      this.inputName = 'column has-text-centered is-6 project-container'
      this.projects[0] = null
      this.iconAcitvated = false;
      this.inputActivated = true
    },
    async createProject () {
      this.form.user_id = this.user.id
      console.log(this.form)
      const { data } = await this.form.post('user/project/create')
      console.log(data)
      this.$store.dispatch('project/createProject', {
        project_name: data.project_name,
        user_id : data.user_id,
        private : data.private
      })

      // // Fetch the project.
      // await this.$store.dispatch('auth/fetchProject')

      // Redirect to project creation.
      this.$router.push({ name: 'project.create' })
    },
    viewProject() {
    },
    changeProjectName() {
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

