<template>
  <div>
    <div class="close" @click="closeEditContainer" />
    <el-tabs v-model="currentTab" @tab-click="handleClick">
      <el-tab-pane label="URL" name="urlInput"></el-tab-pane>
    </el-tabs>
    <component
      :is="currentTab"
      :index="editContainer.row"
      :layout-id="editContainer.layoutId"
    />
  </div>
</template>

<script>
import UrlInput from "./UrlInput"
import { mapGetters } from "vuex"
export default {
  components: {
    UrlInput
  },
  computed: {
    ...mapGetters({
      editContainer: "EditContainer/getEditContainer"
    })
  },
  data() {
    return {
      currentTab: "urlInput",
    }
  },
  methods: {
    handleClick(key){

    },
    closeEditContainer() {
      this.$store.commit("EditContainer/CLOSE_EDIT_CONTAINER")
      this.currentTab = this.urlInput.name
    }
  }
}
</script>

<style >
.close {
  position: absolute !important;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  opacity: 0.3;
  z-index: 1;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}


</style>
