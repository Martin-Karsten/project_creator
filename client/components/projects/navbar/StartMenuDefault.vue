<template>
  <el-row :gutter="3" class="start-menu-row">
    <el-col :span="3" class="start-menu-presentation-column">
      <router-link
        :to="{ name: 'project.show', params: { id: projectId }  }"
        target="_blank"
      >
        <el-button @click="showPreview">
          Preview
        </el-button>
      </router-link>
    </el-col>
    <el-col class="start-menu-column" :span="6" :offset="6">
      <el-row class="start-menu-icon-columns">
        <el-col class="start-menu-icon-column" :span="4">
          <fa
            id="menu-icon-0"
            class="start-menu-icon"
            icon="font"
            :class="[creatorActivated ? menuItemActivated : '']"
            @click="activateTextfieldIcon"
          />
        </el-col>
        <el-col class="start-menu-icon-column" :span="4">
          <fa
            id="menu-icon-1"
            class="start-menu-icon"
            icon="image"
            :class="[creatorActivated ? menuItemActivated : '']"
            @click="activateWebImageIcon"
          />
        </el-col>
        <el-col class="start-menu-icon-column" :span="4">
          <fa
            id="menu-icon-2"
            class="start-menu-icon"
            icon="chart-bar"
            :class="[creatorActivated ? menuItemActivated : '']"
            @click="activateChartIcon"
          />
        </el-col>
        <el-col class="start-menu-icon-column" :span="4">
          <fa
            id="menu-icon-0"
            class="start-menu-icon"
            icon="table"
            :class="[creatorActivated ? menuItemActivated : '']"
            @click="activateTableIcon"
          />
          <!-- <table-size-picker v-show="tableSizePickerActivated" /> -->
          <!-- <table-size-picker-input v-show="tableSizePickerActivated"  @clicked="tableSizePickerActivated = false"/> -->
        </el-col>
        <el-col class="start-menu-icon-column" :span="4">
          <fa
            id="menu-icon-1"
            class="start-menu-icon"
            icon="video"
            :class="[creatorActivated ? menuItemActivated : '']"
            @click="activateWebVideoIcon"
          />
        </el-col>
        <el-col class="start-menu-icon-column" :span="4">
          <fa
            id="menu-icon-2"
            class="start-menu-icon"
            icon="shapes"
            :class="[creatorActivated ? menuItemActivated : '']"
            @click="activateShapesIcon"
          />
          <shape-picker
            v-show="shapePickerActivated"
            @clicked="shapePickerActivated = !shapePickerActivated"
            :currentLayout="currentLayout"
          />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { Editor, EditorMenuBar } from "tiptap"
import { Heading, Bold, Italic, Underline } from "tiptap-extensions"
import { mapGetters } from "vuex"
import TableSizePicker from "./table/TableSizePicker"
import TableSizePickerInput from "./table/TableSizePickerInput"
import ShapePicker from "./shapes/ShapePicker"
import UrlInput from "./general/UrlInput"
export default {
  components: {
    EditorMenuBar,
    TableSizePicker,
    TableSizePickerInput,
    ShapePicker,
    UrlInput
  },
  data() {
    return {
      menuItemActivated: "menu-section-activated",
      creatorActivated: false,
      fieldActivated: false,
      tableSizePickerActivated: false,
      shapePickerActivated: false
    }
  },
  computed: {
    ...mapGetters({
      projectId: "Layout/getProjectId",
      currentLayout: "Layout/getCurrentLayout"
    })
  },

  methods: {
    showPreview() {
      this.$store.commit("PresentationMode/SET_EDIT_MODE")
    },
    activateTextfieldIcon() {
      this.$store.dispatch('LayoutItems/Textfield/addTextfield', {layoutId: this.currentLayout, id: ''})
    },
    activateWebImageIcon() {
      this.$store.commit("EditContainer/OPEN_EDIT_CONTAINER", {
        name: "WebImageContainer",
        layoutId: this.currentLayout,
        id: ''
      })
    },
    activateChartIcon() {
      this.$store.commit("EditContainer/OPEN_EDIT_CONTAINER", {
        name: "ChartContainer",
        layoutId: this.currentLayout,
        id: ''
      })
    },
    activateTableIcon() {
      this.$store.dispatch('LayoutItems/Table/addTable', {layoutId: this.currentLayout, id: ''})
    },
    activateWebVideoIcon() {
      this.$store.commit("EditContainer/OPEN_EDIT_CONTAINER", {
        name: "WebVideoContainer",
        layoutId: this.currentLayout,
        id: ''
      })
    },
    activateShapesIcon() {
      this.shapePickerActivated = !this.shapePickerActivated
    },
    startPresentationMode() {
      this.$store.commit("PresentationMode/SET_EDIT_MODE")
    }
  }
}
</script>

<style>
div.start-menu {
  top: 0;
  left: 0;
  border-bottom: 1px solid black;
  position: relative;
  z-index: 10;
}

.start-menu-presentation-column{
  padding: 1.2rem;
  padding-left: 0.5rem !important;
}

.start-menu-icon-columns {
  padding: 1.4rem 0.5rem 0.5rem 1.8rem;
}

.start-menu-column {
  border-right: 1px solid black;
  border-left: 1px solid black;
  height: 100%;
}

.start-menu-icon-colum {
  height: 100%;
  font-size: 20px !important;
}

.start-menu-icon {
  font-size: 30px;
  cursor: pointer;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 1;
}
</style>
