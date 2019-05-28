<template>
  <el-menu mode="vertical">
    <el-menu-item index="1">Save</el-menu-item>
    <el-menu-item index="1">Second</el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex"
import { mapMutations } from "vuex"
export default {
  data: function() {
    return {}
  },
  methods: {}
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
