<template>
    <el-row :gutter="3">
      <el-col class="start-menu-presentation-column" :span="2">
        <el-button @click="startPresentationMode">Start Presentation</el-button>
      </el-col>
      <el-col class="start-menu-column" :span="6" :offset="7">
        <el-row class="start-menu-icon-columns">
          <el-col class="start-menu-icon-column" :span="4">
            <fa id="menu-icon-0" class="start-menu-icon" icon="font" @click="activateTextfieldIcon" v-bind:class="[creatorActivated ? menuItemActivated : '']"/>
          </el-col>
          <el-col class="start-menu-icon-column" :span="4">
            <fa id="menu-icon-1" class="start-menu-icon" icon="image" @click="activateWebImageIcon" v-bind:class="[creatorActivated ? menuItemActivated : '']"/>
          </el-col>
          <el-col class="start-menu-icon-column" :span="4">
            <fa id="menu-icon-2" class="start-menu-icon" icon="chart-bar" @click="activateChartIcon" v-bind:class="[creatorActivated ? menuItemActivated : '']"/>
          </el-col>
          <el-col class="start-menu-icon-column" :span="4">
            <fa id="menu-icon-0" class="start-menu-icon" icon="table" @click="activateTableIcon" v-bind:class="[creatorActivated ? menuItemActivated : '']"/>
            <table-size-picker v-show="tableSizePickerActivated" />
            <!-- <table-size-picker-input v-show="tableSizePickerActivated"  @clicked="tableSizePickerActivated = false"/> -->
          </el-col>
          <el-col class="start-menu-icon-column" :span="4">
            <fa id="menu-icon-1" class="start-menu-icon" icon="video" @click="activateWebVideoIcon" v-bind:class="[creatorActivated ? menuItemActivated : '']"/>
          </el-col>
          <el-col class="start-menu-icon-column" :span="4">
            <fa id="menu-icon-2" class="start-menu-icon" icon="shapes" @click="activateShapesIcon" v-bind:class="[creatorActivated ? menuItemActivated : '']"/>
            <shape-picker @clicked="shapePickerActivated = !shapePickerActivated" v-show="shapePickerActivated"></shape-picker>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

</template>

<script>
import { Editor, EditorMenuBar} from "tiptap";
import { Heading, Bold, Italic, Underline } from "tiptap-extensions";
import { mapGetters } from 'vuex'
import TableSizePicker from './table/TableSizePicker'
import TableSizePickerInput from './table/TableSizePickerInput'
import ShapePicker from './shapes/ShapePicker'
import UrlInput from './general/UrlInput'
export default {
    components: {
      EditorMenuBar,
      TableSizePicker,
      TableSizePickerInput,
      ShapePicker,
      UrlInput
    },
    data(){
      return{
        menuItemActivated: 'menu-section-activated',
        creatorActivated: false,
        fieldActivated: false,
        tableSizePickerActivated: false,
        shapePickerActivated: false,
      }
    },
    computed: {
    ...mapGetters({
      content: 'StartMenus/StartMenuDefault/getEditor',
      currentLayout: 'Layout/getCurrentLayout'
    }),
  },

    methods: {
      activateTextfieldIcon(){
        this.creatorActivated = true
        this.$store.commit('StartMenus/StartMenu/ACTIVATE_ICON', {index: 0})
      },
      activateWebImageIcon(){
        this.$store.commit('EditContainer/OPEN_EDIT_CONTAINER', {name: 'WebImageContainer', layoutId: this.currentLayout})
        this.creatorActivated = true
        this.$store.commit('StartMenus/StartMenu/ACTIVATE_ICON', {index: 1})
      },
      activateChartIcon(){
        this.creatorActivated = true
        this.$store.commit('EditContainer/OPEN_EDIT_CONTAINER', {name: 'ChartContainer', layoutId: this.currentLayout})
        this.$store.commit('StartMenus/StartMenu/ACTIVATE_ICON', {index: 2})
      },
      activateTableIcon(){
        this.tableSizePickerActivated = !this.tableSizePickerActivated
        this.creatorActivated = true
        // this.$store.commit('StartMenus/StartMenu/ACTIVATE_ICON', 3)
      },
      activateWebVideoIcon(){
        this.creatorActivated = true
        this.$store.commit('StartMenus/StartMenu/ACTIVATE_ICON', {index: 4})
      },
      activateShapesIcon(){
        this.shapePickerActivated =! this.shapePickerActivated
        this.creatorActivated = true
        this.$store.commit('StartMenus/StartMenu/ACTIVATE_ICON', {index: 5})
      },
      startPresentationMode(){
        this.$store.commit('PresentationMode/SET_EDIT_MODE')
      }
    }
}
</script>

<style>
 div.start-menu {
   top:0;
   left:0;
   border-bottom: 1px solid black;
   position: relative;
   z-index: 10;
 }

.start-menu-icon-columns{
  padding: 1.4rem 0.5rem 0.5rem 1.8rem;
}

.start-menu-column{
  border-right: 1px solid black;
  border-left: 1px solid black;
  height: 100%;
}

.start-menu-icon-colum{
  height: 100%;
  font-size: 20px !important;
}

.start-menu-icon{
  font-size: 30px;
  cursor: pointer;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button {  
   opacity: 1;
}

</style>
