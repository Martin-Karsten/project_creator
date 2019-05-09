<template>
  <el-container>
      <el-aside>
        <el-menu 
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
    </el-aside>

    <el-main>
      <el-row class="home-content-row">
        <el-col projects>
          <el-button @click="createProject">Create Project</el-button>
        </el-col>
        <el-col class="home-content-column wobble" :span="6" v-for="(project, index) in projects" :key="index">
          <div class="cptn03" @mouseover="showEditable(index)" @mouseleave="hideEditable(index)">
            <img src="http://lorempixel.com/350/263/" alt="">
            <el-checkbox class="home-column-checkbox" :value="project.selected" @input="selectProject(index)" v-show="project.editable || project.selected"/>
              <div class="cptn">
                  <div>
                      <h3>{{project.project_name}} ({{user.first_name}},{{user.last_name}})</h3>
                      <p>{{project.created_at}}</p>
                  </div>
                  <a @click="viewProject(project.id)"> <fa class="fa" icon="arrow-right"/> </a>
              </div>
          </div>
        </el-col>
      </el-row>
  {{editable}}
      <el-pagination
        background
        layout="prev, pager, next"
        :hide-on-single-page="true"
        :total="projects.length">
      </el-pagination>
    </el-main>
  </el-container>
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
      checked: false,
      projectsClicked: [],
      editable: false,
      ready: false,
      form: new Form({
            project_name: 'Project 1',
            user_id: '',
            private: true,
          }),
      deleteForm: new Form({
    }),
  }),
    computed: {
    ...mapGetters({
        user: 'auth/user',
        projects: 'Project/getProjects',
    }), 
  },
  async mounted() {
    await this.$store.dispatch('Project/fetchProjects')

    this.ready = true
  },
  methods:{
      showEditable(index){
        this.$store.commit('Project/SHOW_EDITABLE', index)
      },
      hideEditable(index){
        this.$store.commit('Project/HIDE_EDITABLE', index)
      },
    selectProject(index) {
      this.$store.commit('Project/SELECT_PROJECT', index)
    },
    async changeNumber() {
    axios.get('user/projects?page=' + this.pagination.current_page)
    .then(response => {
        this.$store.dispatch('Project/changeNumber', response)
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
        project_name: 'Project 1',
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
      await this.deleteForm.delete(`user/Project/${id}/delete`, id)      
      }
      catch(e){
        console.log(e)
      }
      this.$store.commit('Project/DELETE_PROJECT',id)
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

<style lang="scss">
  .el-menu-vertical-demo{
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

.home-column-checkbox{
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

