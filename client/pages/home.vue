<template>
  <el-container>
    <el-aside>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
      >
        <template v-if="projectsClicked.length === 0">
          <el-submenu index="create">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Create Project</span>
              </template>
                <el-menu-item
                  index="create-input"
                >
                  <el-input
                  placeholder="Project Name"
                  @keyup.enter.native="createProject"
                  />
                </el-menu-item>
              </el-submenu>
            </template>
        <template v-else-if="projectsClicked.length === 1">
          <el-menu-item
            index="rename"
          >
          Rename
          </el-menu-item>
          <el-menu-item
            index="delete"
          >
          Delete
          </el-menu-item>
        </template>
        <template v-else-if="projectsClicked.length > 1">
          <el-menu-item
            index="deleteMultiple"
          >
          Delete
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>

    <el-main>
      <el-row class="home-content-row">
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
            <img src="http://lorempixel.com/350/263/" alt="" />
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
                  <el-input :value="project.project_name" @keyup.enter.native="changeProjectName($event, index)" />
                </template>
              </div>
              <a @click="viewProject(project.id)">
                <fa class="fa" icon="arrow-right" />
              </a>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-pagination
        background
        layout="prev, pager, next"
        :hide-on-single-page="true"
        :total="projects.length"
      />
    </el-main>
  </el-container>
</template>

<script>
import { mapGetters } from "vuex"
import axios from "axios"
import Form from "vform"
// import HomeSidebar from '../components/home/HomeSidebar'
import Checkbox from "../components/global/Checkbox"
import Pagination from "../components/global/Pagination"

export default {
  layout: "default",
  middleware: "auth",

  components: {
    // HomeSidebar,
    Checkbox,
    Pagination
  },

  head() {
    return { title: this.$t("home") }
  },
  data: () => ({
    checked: false,
    projectsClicked: [],
    editable: false,
    ready: false,
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

    this.ready = true
  },
  methods: {
    showEditable(index) {
      this.$store.commit("Project/SHOW_EDITABLE", index)
    },
    hideEditable(index) {
      this.$store.commit("Project/HIDE_EDITABLE", index)
    },
    selectProject(index) {
      if(!this.projectsClicked.includes(this.projects[index].id)){
        this.$store.commit("Project/SELECT_PROJECT", index)
        this.projectsClicked.push(this.projects[index].id)
      }
      else{
        const newI = this.projectsClicked.indexOf(this.projects[index].id)
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

    },
    handleSelect(key){
      switch(key){
        case 'rename':
          const newI = this.projectsClicked.indexOf(this.projects[0].id)
          this.$store.commit('Project/MAKE_RENAMEABLE', newI)
          break;

        case 'delete':
          this.deleteProject()
          break;
        
        case 'deleteMultiple':
          this.deleteProjects()
          break;
      }
    },
    async changeNumber() {
      axios
        .get("user/projects?page=" + this.pagination.current_page)
        .then(response => {
          this.$store.dispatch("Project/changeNumber", response)
          this.pagination = response.data.pagination
        })
        .catch(error => {
          console.log(error.response.data)
        })
    },
    async createProject(event) {
      this.form.user_id = this.user.id
      this.form.project_name = event.target.value
      const { data } = await this.form.post("user/project/create")

      this.$store.commit("Layout/CREATE_LAYOUT")
      this.$store.dispatch("Project/createProject", {
        project_id: data.id,
        project_name: data.project_name,
        user_id: data.user_id,
        private: data.private
      })

      // Redirect to project creation.
      this.$router.push({ name: "project.create", params: data })
    },
    async viewProject(id) {
      // Redirect to project
      this.$router.push({ name: "project.view", params: { id: id } })
    },
    async deleteProject() {
      const id = this.projectsClicked[0]
      this.deleteForm.id = this.projectsClicked[0]
      this.projectsClicked.splice(0, 1)
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
      this.$store.commit("Project/DELETE_PROJECT", id)

      this.$message({
        message: 'Project Deleted',
        type: 'success'
      });
    },
    async deleteProjects(){
      this.deleteMultipleForm.projects = [...this.projectsClicked]
      try{
        await this.deleteMultipleForm.post('user/projects/delete')
      } catch (e) {
          console.log(e)
          this.$message({
          message: 'Sorry something went wrong!',
          type: 'error'
        });
          return
      }
      this.$store.commit('Project/DELETE_PROJECTS', this.projectsClicked)
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
.el-menu-vertical-demo {
  margin-left: 1.4rem;
  height: 88vh;
  margin-top: 1.4rem;
}
.home-content-row {
  margin-bottom: 20px;
  min-height: 86%;
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
  background: #545c64;
  width: 100%;
  height: 23%;
  position: absolute;
  left: 0;
  overflow: auto;
  padding: 0 15px;
  border-radius: 4px;
  opacity: 0.75;
  top: 214px;
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
</style>
