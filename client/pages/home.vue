<template>
  <el-container>
    <el-aside>
      <el-menu
        default-active="1"
        class="home-sidebar"
        background-color="#e6e6e6"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
      >
        <template v-if="projectsClicked.length === 0">
          <el-submenu index="create">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ $t("create_project") }}</span>
              </template>
                <el-menu-item
                  index="create-input"
                >
                  <el-input
                  placeholder="Name"
                  @keyup.enter.native="createProject"
                  v-model="projectName"
                  />
                </el-menu-item>
              </el-submenu>
            </template>
        <template v-else-if="projectsClicked.length === 1">
          <el-menu-item
            index="rename"
          >
          {{ $t('rename') }}
          </el-menu-item>
          <el-menu-item
            index="delete"
          >
          {{ $t('delete') }}
          </el-menu-item>
        </template>
        <template v-else-if="projectsClicked.length > 1">
          <el-menu-item
            index="deleteMultiple"
          >
          {{ $t('delete') }}
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>

    <el-main class="home-content">
      <el-row class="home-content-row">
        <p></p>
        <el-col
          v-for="(project, index) in projects"
          :key="index"
          class="home-content-column wobble"
          :span="6"
        >
          <div
            class="cptn03"
            @mouseover="showEditable(index)"
            @mouseleave="hideEditable(index)"
          >
            <img :id="project.id" :src="getImage(index)" alt="" style="height: 215px"/>
            <el-checkbox
              v-show="project.editable || project.selected"
              class="home-column-checkbox"
              :value="project.selected"
              @input="selectProject(index)"
            />
            <div class="cptn">
              <div>
                <template v-if="!project.rename">
                  <h3>
                    {{ project.project_name }} ({{ user.first_name }},{{
                      user.last_name
                    }})
                  </h3>
                  <p>{{ project.updated_at }}</p>
                </template>
                <template v-else>
                  <el-input :placeholder="project.project_name" v-model="projectName" @keyup.enter.native="changeProjectName($event, index)" />
                </template>
              </div>
              <a @click="viewProject(project.id)">
                <fa class="fa" icon="arrow-right" />
              </a>
            </div>
          </div>
        </el-col>
      </el-row>
      <no-ssr>
        <!-- <infinite-loading @infinite="changeNumber"></infinite-loading> -->
      </no-ssr>
    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios'
import { mapGetters } from "vuex"
import Form from "vform"

export default {
  layout: "default",
  middleware: "auth",

  components: {
  },

  head() {
    return { title: this.$t("home") }
  },
  data: () => ({
    apiUrl: process.env.apiUrl,
    checked: false,
    projectsClicked: [],
    editable: false,
    ready: false,
    currentPage: 0,
    projectName: '',
    form: new Form({
      project_name: "Project 1",
      user_id: "",
      private: true
    }),
    patchForm: new Form({id: '', project_name: ''}),
    deleteForm: new Form({id: ''}),
    deleteMultipleForm: new Form({projects: []})
  }),
  computed: {
    ...mapGetters({
      user: "auth/user",
      projects: "Project/getProjects"
    })
  },
  async mounted() {
    await this.$store.dispatch("Project/fetchProjects")
  },
  methods: {
    getImage(index){
        if(this.projects[index].image == undefined)
          return this.apiUrl + '/storage//images/default-project-image.png'
        else
          return this.apiUrl + '/storage/' + this.projects[index].image
    },
    showEditable(index) {
      this.$store.commit("Project/SHOW_EDITABLE", index)
    },
    hideEditable(index) {
      this.$store.commit("Project/HIDE_EDITABLE", index)
    },
    selectProject(index) {
      if(!this.projectsClicked.includes(index)){
        this.projectName = this.projects[index].project_name
        this.$store.commit("Project/SELECT_PROJECT", index)
        this.projectsClicked.push(index)
      }
      else{
        const newI = this.projectsClicked.indexOf(index)
        this.projectsClicked.splice(newI, 1)
        this.$store.commit("Project/DESELECT_PROJECT", index)
      }
    },
    async changeProjectName(event,index){
      const id = this.projects[index].id
      this.patchForm.id = id
      this.patchForm.project_name = event.target.value
      try{
        await this.patchForm.patch(`user/project/${id}/update`)
      }
      catch (e){
        console.log(e)
      }
      this.$store.commit("Project/CHANGE_PROJECT_NAME", {value: event.target.value, index})
      // this.projectsClicked[0].editable = false
      this.projectName = ''
      this.projectsClicked.splice(0, 1)
    },
    handleSelect(key){
      switch(key){
        case 'rename':
          this.$store.commit('Project/MAKE_RENAMEABLE',  this.projectsClicked[0])
          break;

        case 'delete':
          this.deleteProject()
          this.projectName = ''
          break;
        
        case 'deleteMultiple':
          this.deleteProjects()
          this.projectName = ''
          break;
      }
    },
    async changeNumber($state) {
      let last = false
      this.currentPage += 1
      axios.get("user/projects?page=" + this.currentPage)
        .then(response => {
          if(response.data.next_page_url != null){
            this.$store.dispatch("Project/changeNumber", response)
            $state.loaded()
          }
          else{
            $state.complete()
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    async createProject(event) {
      this.form.user_id = this.user.id
      this.form.project_name = event.target.value

      let data = ''
      // try{
      //   data = await this.form.post("user/project/create")
      // }
      // catch(e){
      //   return
      // }
      // data = data.data

      this.$store.dispatch("Project/createProject", {
        project_id: '5945c961-e74d-478f-8afe-da53cf4189e3',
        project_name: this.form.project_name,
        user_id: this.user.id,
        private: this.form.private
      })

      this.$store.dispatch('Layout/initialize', {id: data.project_id})

      // Redirect to project creation.
      this.$router.push({ name: "project.create", params: {id: data.project_id} })
    },
    async viewProject(id) {
      // Redirect to project
      this.$router.push({ name: "project.view", params: { id: id } })
    },
    async deleteProject() {
      const id = this.projects[this.projectsClicked[0]].id
      this.deleteForm.id = id
      try {
        await this.deleteForm.delete(`user/project/${id}/delete`)
      } catch (e) {
        console.log(e)
        this.$message({
          message: 'Sorry something went wrong!',
          type: 'error'
        });
        return
      }
      this.$store.commit("Project/DELETE_PROJECT", this.projectsClicked[0])

      this.$message({
        message: 'Project Deleted',
        type: 'success'
      });

      this.projectsClicked.splice(0, 1)
    },
    async deleteProjects(){
      this.projectsClicked.forEach((i) => this.deleteMultipleForm.projects.push(this.projects[i].id))
      try{
        await this.deleteMultipleForm.post('user/projects/delete')
        this.$message({
          message: 'Projects Deleted',
          type: 'success'
        });
      } catch (e) {
          console.log(e)
          this.$message({
          message: 'Sorry something went wrong!',
          type: 'error'
        });
          return
      }
      this.$store.commit('Project/DELETE_PROJECTS', this.deleteMultipleForm.projects)
      this.projectsClicked.splice(0, this.projectsClicked.length)

        this.$message({
          message: 'Projects Deleted',
          type: 'success'
        });
    }
  }
}
</script>

<style lang="scss">

.home-sidebar {
  height: 88vh;
  margin-top: 1.4rem;
}

.home-content{
  height: 90vh;
  overflow-y: auto;
  padding-bottom: 0
}
.home-content-row {
  margin-bottom: 0rem !important;
  padding-bottom: 0px;
  min-height: 93%;
}
.home-content-column {
  padding: 0 0.5rem 1rem 0.5rem;
  border-radius: 4px;
}

.cptn03 {
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
}
.cptn03 img {
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  position: relative;
}

.home-column-checkbox {
  position: absolute;
  top: 15px;
  left: 345px;
}

.cptn03 .cptn {
  background: rgba(84, 92, 100, 0.5);
  width: 95%;
  height: 30%;
  position: absolute;
  left: 0;
  overflow: auto;
  padding: 0 10px 0 10px;
  border-radius: 4px;
  top: 68%;
}
.cptn03 .cptn div {
  float: left;
  height: 100%;
}
.cptn03 .cptn .fa {
  -wibkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  border: 2px solid #fff;
  -wibkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  color: #fff;
  display: block;
  float: right;
  height: 30px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  width: 30px;
  margin-top: 10px;
  opacity: 0.3;
}
.cptn03 .cptn .fa:hover {
  opacity: 1;
}
.cptn03 .cptn h3 {
  color: #fff;
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: normal;
}
.cptn03 .cptn p {
  color: fff;
  font-size: 14px;
}

.home-pagination{
  margin-top: 1rem;
}

</style>
