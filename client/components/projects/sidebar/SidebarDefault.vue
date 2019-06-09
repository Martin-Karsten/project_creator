<template>
  <el-menu mode="vertical" @select="handleSelect">
    <el-menu-item index="save" style="background-color: rgba(244, 83, 66, 0.25)">Save</el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex"
import { mapMutations } from "vuex"
export default {
  data: function() {
    return {}
  },
  methods: {
    handleSelect(key, path){
      switch(key){
        case 'save':
        this.$store.dispatch('Layout/saveToDB')
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
