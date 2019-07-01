<template>
  <el-menu mode="vertical" @select="handleSelect">
    <el-menu-item index="save" style="background-color: rgba(244, 83, 66, 0.25)">{{ $t('save') }}</el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex"
import { mapMutations } from "vuex"
import axios from 'axios'
import domtoimage from 'dom-to-image';
export default {
  data: function() {
    return {}
  },
  computed: {
    ...mapGetters({
      projectId: "Layout/getProjectId",
    }),
    layout: {
      get() {
        return this.$store.getters["Layout/getLayoutList"]
      },
    }
  },
  methods: {
    handleSelect(key, path){
      const that = this
      switch(key){
        case 'save':
        this.layout.forEach(function (l, i){
          let element = document.getElementById('item' + l)
          domtoimage.toPng(element)
          .then(function (dataUrl) {
            if(i === 0){
              that.$store.commit('Project/SET_PROJECT_IMAGE', {id: that.projectId, image: dataUrl})
              axios({
                method: 'put',
                url: 'projectimage/project',
                data: {
                  id: that.projectId,
                  image: dataUrl
                }
              })
            }
            that.$store.commit('Layout/SET_LAYOUT_SCROLL_IMAGES', {id: l, scrollImage: dataUrl})
          })
          .catch(function (error) {
              console.error('domtoimage error!', error);
          });
        })
        this.$store.dispatch('Layout/saveToDB')
        .then(function (response){
          that.$message({
            message: 'Project Saved',
            type: 'success'
          });
        })
          .catch(function (error) {
          that.$message({
            message: 'Project could not be saved',
            type: 'error'
          });
          });
      }
    }
  }
}
</script>

<style>
a.default-menu-list-item {
  background-color: rgba(220, 0, 0, 0.5);
}
a.default-menu-list-item:hover {
  background-color: rgba(255, 0, 0, 0.8);
}
</style>
