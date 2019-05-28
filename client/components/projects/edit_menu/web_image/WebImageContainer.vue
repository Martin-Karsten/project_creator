<template>
  <div>
    <div class="close" @click="closeEditContainer" />
    <el-tabs v-model="currentTab" @click="handleClick">
      <el-tab-pane label="URL" name="urlInput"></el-tab-pane>
      <el-tab-pane label="Search Image" name="searchImageComponent"></el-tab-pane>
      <el-tab-pane label="Search Gif" name="searchGifComponent"></el-tab-pane>
    </el-tabs>
    <!-- <div class="tabs">
      <div class="close" @click="closeEditContainer" />
      <ul>
        <li :class="{ 'is-active': urlInput.isActive }" @click="toUrl">
          <a>URL</a>
        </li>
        <li
          :class="{ 'is-active': searchImageComponent.isActive }"
          @click="toSearchImage"
        >
          <a>Search Image</a>
        </li>
        <li
          :class="{ 'is-active': searchGifComponent.isActive }"
          @click="toSearchGif"
        >
          <a>Search Gif</a>
        </li>
      </ul>
    </div> -->

    <component
      :is="currentTab"
      :index="editContainer.row"
      :layout-id="editContainer.layoutId"
    />
  </div>
</template>

<script>
import UrlInput from "./UrlInput"
import SearchImageComponent from "./SearchImageComponent"
import SearchGifComponent from "./SearchGifComponent"
import { mapGetters } from "vuex"
export default {
  components: {
    UrlInput,
    SearchImageComponent,
    SearchGifComponent
  },
  computed: {
    ...mapGetters({
      editContainer: "EditContainer/getEditContainer"
    })
  },
  data() {
    return {
      currentTab: "urlInput",
      urlInput: { name: "urlInput", isActive: true },
      searchImageComponent: { name: "searchImageComponent", isActive: false },
      searchGifComponent: { name: "searchGifComponent", isActive: false }
    }
  },
  methods: {
    handleClick(tab, event){
      switch(tab.name){
        case 'urlInput':
          this.currentTab = 'urlInput'
          break;

        case 'searchImageComponent':
          this.currentTab = 'searchImageComponent'
          break;

        case 'searchGifComponent':
          this.currentTab = 'searchGifComponent'
          break;
      }
    },
    toUrl() {
      this.currentTab = this.urlInput.name
      this.urlInput.isActive = true
      this.searchImageComponent.isActive = false
      this.searchGifComponent.isActive = false
    },
    toSearchImage() {
      this.currentTab = this.searchImageComponent.name
      this.urlInput.isActive = false
      this.searchImageComponent.isActive = true
      this.searchGifComponent.isActive = false
    },
    toSearchGif() {
      this.currentTab = this.searchGifComponent.name
      this.urlInput.isActive = false
      this.searchImageComponent.isActive = false
      this.searchGifComponent.isActive = true
    },
    closeEditContainer() {
      this.$store.commit("EditContainer/CLOSE_EDIT_CONTAINER")
      this.currentTab = this.urlInput.name
      this.urlInput.isActive = true
      this.searchImageComponent.isActive = false
      this.searchGifComponent.isActive = false
    }
  }
}
</script>

<style>
.close {
  position: absolute !important;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  opacity: 0.3;
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
