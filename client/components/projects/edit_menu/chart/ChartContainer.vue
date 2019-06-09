<template>
  <div>
    <div class="close" @click="closeEditContainer" />
      <el-tabs v-model="currentTab" @tab-click="handleClick">
        <el-tab-pane label="Chart" name="chartDefaultComponent"></el-tab-pane>
      </el-tabs>
    <component :is="currentTab" :index="editContainer.row" :layout-id="editContainer.layoutId" />
  </div>
</template>
<script>
import ChartDefaultComponent from "./ChartDefaultComponent"
import { mapGetters } from "vuex"
export default {
  components: {
    ChartDefaultComponent
  },
  computed: {
    ...mapGetters({
      editContainer: "EditContainer/getEditContainer"
    })
  },
  data() {
    return {
      currentTab: "chartDefaultComponent",
      chartDefaultComponent: { name: "chartDefaultComponent", isActive: true }
    }
  },
  methods: {
    handleClick(tab, event){
      switch(tab.name){
        case 'chartDefaultComponent':
          this.currentTab = "chartDefaultComponent"
          break;
      }
    },
    closeEditContainer() {
      this.$store.commit("EditContainer/CLOSE_EDIT_CONTAINER")
      this.currentTab = 'chartDefaultComponent'
    }
  }
}
</script>

<style>
</style>
