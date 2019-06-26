<template>
  <el-main class="project-container">
    <el-row class="grid">
      <el-col :span="24"
      >
        <div 
          ref="gridItems"
          class="grid-items-hidden"
        >
        <draggable
          :disabled="true"
          :list="layoutSet"
          class="grid-items"
          :style="{cursor: cursorIcon}"
            @scroll.native="handleScroll($event, layoutSet)"          
        >
          <div
            v-for="(element, index) in layoutSet"
            :key="index"
            class="item-container" @click.self="layoutItemClicked(index, element.id)"
            @mouseup="createLayoutItem"
            :id="'item' + element.id"
          >

            <template v-if="element.isEmpty">
            <el-row class="toolbox">
              <el-tooltip class="tooltip-item" effect="dark" content="Text" placement="top-start">
                <el-col :span="3">
                  <fa class="tooltip-icon" icon="font" @click="toTextfield(index, element.id)" />
                </el-col>
              </el-tooltip>

              <el-tooltip class="tooltip-item" effect="dark" content="Web Image" placement="top-start">
                <el-col :span="3">
                  <fa class="tooltip-icon" icon="image" @click="toWebImage(index, element.id)" />
                </el-col>
              </el-tooltip>

              <el-tooltip class="tooltip-item" effect="dark" content="Chart" placement="top-start">
                <el-col :span="3">
                  <fa class="tooltip-icon" icon="chart-bar" @click="toChart(index, element.id)" />
                </el-col>
              </el-tooltip>

              <el-tooltip class="tooltip-item" effect="dark" content="Table" placement="top-start">
                <el-col :span="3">
                  <fa class="tooltip-icon" icon="table" @click="toTable(index, element.id)" />
                </el-col>
              </el-tooltip>

              <el-tooltip class="tooltip-item" effect="dark" content="Web Video" placement="top-start">
                <el-col :span="3">
                  <fa class="tooltip-icon" icon="video" @click="toWebVideo(index, element.id)" />
                </el-col>
              </el-tooltip>

              <el-tooltip class="tooltip-item" effect="dark" content="Shape" placement="top-start">
                <el-popover
                  placement="top"
                  width="225"
                  trigger="click"
                >
                  <div style="text-align: right; margin: 0">
                    <shape-picker :currentLayout="element.id" />
                  </div>
                  <fa slot="reference" class="tooltip-icon" icon="shapes" />
                </el-popover>
              </el-tooltip>

              <el-tooltip class="tooltip-item" effect="dark" content="Interact" placement="top-start">
                <el-col :span="3">
                  <i class="el-icon-receiving"></i>
                  <!-- <fa class="tooltip-icon" icon="video" @click="toWebVideo(index, element.id)" /> -->
                </el-col>
              </el-tooltip>
            </el-row>
            </template>

            <vue-draggable-resizable
              v-for="(textfield, textfieldIndex) in layoutTextfields(element)" :key="textfieldIndex+'t'"
              :w="textfield.width" :h="textfield.height" :x="textfield.left" :y="textfield.top" :z="textfield.z_index"
              :parent="true" 
              class-name="project-textfield-container"
              :class="textfield.class"
              :style="{borderStyle: textfield.border_style, borderColor: textfield.border_color, borderWidth: textfield.border_width + 'px', 
                       borderRadius: textfield.border_radius + 'px', backgroundColor: textfield.background_color}"
              :handles="['ml', 'mr']"  
              @resizing="containerResizing"
              @dragging="containerDragging"
              drag-handle=".textfield-drag"
            >
              <div class="textfield-drag" @click="setCurrentItem(textfield.id, textfield.layoutId, textfield.itemName)"></div>
              <textfield-editor :id="textfield.id" :text="textfield.text" :opacity="textfield.opacity" :layout-row="index" :row="textfieldIndex" :layout-id="element.id" />
            </vue-draggable-resizable>

            <vue-draggable-resizable
              v-for="image in element.images" :key="image.name"
              :w="imageWidth(image.width)" :h="imageHeight(image.height)" :x="image.left" :y="image.top" :z="image.z_index"
              :parent="true" :grid="[5,5]" :lock-aspect-ratio="true" 
              class-name-active="selected" 
              :style="{borderStyle: image.border_style, borderColor: image.border_color, borderWidth: image.border_width + 'px', borderRadius: image.border_radius + 'px'}"
            >
              <project-image :id="image.id" :image-data="imageData" />
            </vue-draggable-resizable>

            <vue-draggable-resizable
              v-for="(web_image, webImageIndex) in layoutWebImages(element)" :key="webImageIndex+'wE'"
              :w="web_image.width" :h="web_image.height" :x="web_image.left" :y="web_image.top"
              :z="webImageIndex"
              :class="web_image.class"
              :parent="true"
              class-name="project-web-image-container"
              class-name-active="selected"
              :style="{borderStyle: web_image.border_style, borderColor: web_image.border_color, borderWidth: web_image.border_width + 'px',
                       borderRadius: web_image.border_radius + 'px',}" 
              @resizing="containerResizing"
              @dragging="containerDragging"
            >
              <!-- <div class="animation-number"></div> -->
              <web-image :id="web_image.id" :layout-id="element.id" :url="web_image.url" :radius="web_image.border_radius"
                         :opacity="web_image.opacity" :layout-row="index" :row="webImageIndex"
              />
            </vue-draggable-resizable>

            <vue-draggable-resizable
              v-for="(table, tableIndex) in layoutTables(element)"
              :key="tableIndex+'table'" class-name="project-table-container"
              :w="table.width" :h="table.height" :x="table.left" :y="table.top"
              :z="tableIndex"
              :class="table.class"
              :parent="true"
              :style="{borderStyle: table.border_style, borderColor: table.border_color, borderWidth: table.border_width + 'px',
                       borderRadius: table.border_radius + 'px', backgroundColor: table.background_color}" 
              :handles="['ml', 'mr']"     
              @resizing="containerResizing"
              @dragging="containerDragging"
              drag-handle=".table-drag"
            >
              <div class="table-drag" @click="setCurrentItem(table.id, table.layoutId, table.itemName)"></div>
              <table-editor :text="table.text" :id="table.id" :layoutId="element.id" :row="tableIndex" :height="table.height"></table-editor>
            </vue-draggable-resizable>

              <vue-draggable-resizable
                v-for="(web_video, webVideoIndex) in layoutWebVideos(element)" :key="webVideoIndex + 'wV'"
                :w="web_video.width" :h="web_video.height" :x="web_video.left" :y="web_video.top" :z="web_video.z_index"
                :parent="true" :lock-aspect-ratio="true"
                :class="web_video.class"
                class-name-active="selected" 
                :style="{borderStyle: web_video.border_style, borderColor: web_video.border_color, borderWidth: web_video.border_width + 'px',
                        borderRadius: web_video.border_radius + 'px', backgroundColor: web_video.background_color}"
                @resizing="containerResizing"
                @dragging="containerDragging"
              >
                <web-video :videoId="web_video.video_id" :id="web_video.id" :layoutId="element.id" :row="webVideoIndex" 
                            :addToSomethingActivated="addToSomethingActivated"/>
              </vue-draggable-resizable>
              
            <vue-draggable-resizable
              v-for="(chart, chartIndex) in layoutCharts(element)"
              :key="chartIndex+'chart'" class-name="project-table-container"
              :w="chart.width" :h="chart.height" :x="chart.left" :y="chart.top" :z="chart.z_index"
              :class="chart.class"
              :parent="true" :grid="[5,5]" 
              class-name-active="selected" 
              :style="{borderStyle: chart.border_style, borderColor: chart.border_color, borderWidth: chart.border_width + 'px',
                       borderRadius: chart.border_radius + 'px', backgroundColor: chart.background_color}"
              :draggable="isDraggable"
              @resizing="chartResizing"
              @dragging="containerDragging"
            >
              <div class="cont" @click="chartClicked(element.id, chart.id)" @contextmenu.prevent="openContextMenu(index, chartIndex, element.id, chart.id)">
                <chart :id="chart.id" :width="chart.width" :height="chart.height" :settings="chart.chart_settings" :layout-id="element.id" />
              </div>
            </vue-draggable-resizable>

            <vue-draggable-resizable
              v-for="(button, buttonIndex) in layoutButtons(element)"
              :key="buttonIndex + 'b'" class-name="project-shape-container"
              :w="button.width" :h="button.height" :x="button.left" :y="button.top" :z="button.z"
              :parent="true" :grid="[5,5]"
              :min-height="1"
              @resizing="containerResizing"
              @dragging="containerDragging"
              @contextmenu="openContextMenu"
            >
              <interact-button :id="button.id" :width="button.width" :height="button.height" :layout-id="element.id"/>
            </vue-draggable-resizable>

            <vue-draggable-resizable
              v-for="(shape, shapeIndex) in layoutShapes(element)"
              :key="shapeIndex + 'c'" class-name="project-shape-container"
              :w="shape.width" :h="shape.height" :x="shape.left" :y="shape.top" :z="shape.z"
              :class="shape.class"
              :parent="true" :grid="[5,5]"
              :max-height="maxWidthForLineShape(shape)"
              :min-height="1"
              @resizing="containerResizing"
              @dragging="containerDragging"
              @contextmenu="openContextMenu"
            >
              <shapes :id="shape.id" :shape="shape.shape_name" :width="shape.width" :height="shape.height" :layout-id="element.id" 
                       :backgroundColor="shape.background_color"/>
            </vue-draggable-resizable>
          </div>
        </draggable>
        </div>
        <context-menu />
      </el-col>

      <fa class="new-page-chevron" icon="chevron-down" @click="addItem" />
    </el-row>
  </el-main>
</template>

<script>
<<<<<<< HEAD

import { mapGetters, mapState } from "vuex"
import debounce from "../../Helper/Project/LayoutHelper.js"
import domtoimage from 'dom-to-image';
import Form from "vform"
import ScrollTo from '~/plugins/vue-scrollto'
//Items
import TextfieldEditor from "./textfield/TipTapEditor"
import TableEditor from "./table/Table"
import ProjectImage from "./project_image/Image"
import WebImage from "./project_image/WebImage"
import Chart from "./chart/Chart"
import WebVideo from "./video/WebVideo"
import Shapes from "./shapes/Shapes"
import InteractButton from "./interact/Button"
//General
import UrlInput from "./general/UrlInput"
import ContextMenu from "../../components/projects/context_menu/ContextMenu"
import ShapePicker from "./navbar/shapes/ShapePicker.vue"
//Draggables
import draggable from "vuedraggable"
import VueDraggableResizable from "vue-draggable-resizable"
=======
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import draggable from 'vuedraggable'
import Editor from './textfield/TipTapEditor'
import TableEditor from './table/Table'
import ProjectImage from './project_image/Image'
import VueDraggableResizable from 'vue-draggable-resizable'
>>>>>>> 425dac3511d2a7e837f64e3ee1e448bf79d38ad6

// optionally import default styles
import "vue-draggable-resizable/dist/VueDraggableResizable.css"

export default {
    components: {
        draggable,
        VueDraggableResizable,
        TextfieldEditor,
        TableEditor,
<<<<<<< HEAD
        ProjectImage,
        WebImage,
        WebVideo,
        Chart,
        Shapes,
        UrlInput,
        ShapePicker,
        ContextMenu,
        InteractButton
    },
    props: ['editMode'],
  data() {
    return {
      isEmpty: true,
      dragging: false,
      imageData: "",
      isDraggable: true,
      draggable: true,
      resizable: true
=======
    },
    data () {
        return {
            dragging: false,
        }
    },
    computed: {
        ...mapGetters({
            layout: 'Layout/getLayout'
        })
    },
    methods: {
        onResize: function (x, y, width, height) {
            this.x = x
            this.y = y
            this.width = width
            this.height = height
        },
        onDrag: function (x, y) {
            this.x = x
            this.y = y
        },
        addItem() {
            let payload = {name: '', id: this.layout.length}
            this.$store.commit('Layout/ADD_ITEM', payload)
        }
>>>>>>> 425dac3511d2a7e837f64e3ee1e448bf79d38ad6
    }
  },
  computed: {
    ...mapGetters({
      currentItem: "Layout/getCurrentItem",
      currentLayout: "Layout/getCurrentLayout",
      toolboxes: "LayoutHelpers/getToolboxes",
      startMenuIcons: "StartMenus/StartMenu/getStartMenuIcons",
      currentMode: "PresentationMode/getCurrentMode",
      animationList: "PresentationMode/getAnimationItmes",

      layoutSet: "Layout/getLayoutSet",
      itemCreator: "Layout/getItemCreator",

      cursorIcon: "Layout/getCursorIcon",
      addToSomethingActivated: "Layout/getAddToSomethingActivated"

    }),
    ...mapState({
      textfieldObj: state => state.Layout.textfields,
      webImageObj: state => state.Layout.web_images,
      tableObj: state => state.Layout.tables,
      chartObj: state => state.Layout.charts,
      shapesObj: state => state.Layout.shapes,
      webVideoObj: state => state.Layout.web_videos,
      buttonObj: state => state.Layout.buttons
    })
  },
  async beforeCreate(){
  },
  async mounted() {
    // await this.$store.dispatch("Layout/initialize", this.$route.params)
  },
  beforeDestroy() {
    this.$store.commit("Layout/RESET_LAYOUT")
  },
  destroyed(){
  },
  methods: {
    layoutTextfields(layout) {
      return layout.textfields.map(id => this.textfieldObj[id])
    },
    layoutWebImages(layout) {
      return layout.web_images.map(id => this.webImageObj[id])
    },
    layoutTables(layout) {
      return layout.tables.map(id => this.tableObj[id])
    },
    layoutCharts(layout) {
      return layout.charts.map(id => this.chartObj[id])
    },
    layoutWebVideos(layout) {
      return layout.web_videos.map(id => this.webVideoObj[id])
    },
    layoutButtons(layout) {
      return layout.buttons.map(id => this.buttonObj[id])
    },
    layoutShapes(layout) {
      return layout.shapes.map(id => this.shapesObj[id])
    },
    onActivated() {
      this.draggable = false
      this.resizable = false
    },
      setCurrentItem(id, layoutId, itemName) {
      let payload = {
        id: id,
        layoutId: layoutId,
        itemName: itemName
      }
      if(this.addToSomethingActivated.action === 'add'){
        this.$store.commit('Layout/ADD_LAYOUT_ITEM_TO_BUTTON', payload)
      }

      else if(this.addToSomethingActivated.action === 'delete'){
        this.$store.commit('Layout/DELETE_LAYOUT_ITEM_FROM_BUTTON', payload)
      }

      else 
        this.$store.commit("Layout/SET_CURRENT_ITEM", payload)
      
    },
    containerDragging: debounce(function(left, top, index) {
      let payload = {
        left: left,
        top: top,
        currentItem: this.currentItem
      }
      this.$store.commit("Layout/SET_POSITION", payload)
    }, 100),
    containerResizing: debounce(function(left, top, width, height) {
      let payload = {
        currentItem: this.currentItem,
        width: width,
        height: height,
        top: top,
        left: left
      }
      this.$store.commit("Layout/SET_SIZE", payload)
    }, 100),
    activatePresentationMode(event) {
      console.log(event.keyCode)
    },
    animationObject(obj) {
      return {
        animated: obj.animated,
        fadeIn: obj.animation_name
      }
    },
    maxWidthForLineShape(shape) {
      if (shape.shape_name === "line-shape") return 30
      else return 2000
    },
    createLayoutItem(event) {
      switch(this.itemCreator){
        case 'textfield':
          this.$store.dispatch('LayoutItems/Textfield/addTextfield', {
              layoutId: this.currentLayout,
              x: event.offsetX,
              y: event.offsetY,
          })
          break;
        case 'button':
          this.$store.dispatch("LayoutItems/Interact/Button/addButton", {
              layoutId: this.currentLayout,
              x: event.offsetX,
              y: event.offsetY,
          })
          break;
        case 'rectangle':
            this.$store.dispatch("LayoutItems/Shapes/addShape", {
            layoutId: this.currentLayout,
            shape: "rectangle",
            x: event.offsetX,
            y: event.offsetY,
          })
          break;
        case 'circle':
            this.$store.dispatch("LayoutItems/Shapes/addShape", {
            layoutId: this.currentLayout,
            shape: "circle",
            x: event.offsetX,
            y: event.offsetY,
          })
          break;
        case 'triangle':
            this.$store.dispatch("LayoutItems/Shapes/addShape", {
            layoutId: this.currentLayout,
            shape: "triangle",
            x: event.offsetX,
            y: event.offsetY,
          })
          break;
        case 'line':
            this.$store.dispatch("LayoutItems/Shapes/addShape", {
            layoutId: this.currentLayout,
            shape: "line",
            x: event.offsetX,
            y: event.offsetY,
          })
          break;
      }
      this.$store.commit("Layout/SET_CURSOR_ICON", 'auto')
    },
    layoutItemClicked(row, layoutId) {
      if (this.currentItem != "") {
        this.$store.commit("Layout/DESELECT_ITEM")
      }
      this.$store.commit('Layout/SET_CURRENT_LAYOUT', layoutId)
    },
    handleScroll: debounce(function (event, layoutSet) {
      //layout item has height of 663px, we divide the size of all layout items by scrollTop and get position of the current item
      let pos = 0
      let height = 663 * layoutSet.length
      if(event.target.scrollTop % 663 === 0)
        pos = event.target.scrollTop / 663

    this.$store.commit('Layout/SET_CURRENT_LAYOUT_SCROLL', pos)
    },300),
    onDeactivated(){
      console.log('deactivated')
    },
    openContextMenu(layoutRow, row, layoutId, id) {
      let payload = {
        name: "ChartContextMenu",
        x: event.pageX + "px",
        y: event.pageY + "px",
        row: row
      }

      let payload2 = {
        layoutRow: layoutRow,
        itemRow: row,
        itemName: "charts",
        id: id,
        layoutId: layoutId,
      }
      this.$store.commit("Layout/SET_CURRENT_ITEM", payload2)
      this.$store.dispatch("ContextMenus/ContextMenu/openContextMenu", payload)
    },
    chartClicked(layoutId, id) {
      let payload = {
        layoutId: layoutId,
        id: id,
        itemName: "charts"
      }
      if(this.addToSomethingActivated.action === 'add'){
        this.$store.commit('Layout/ADD_LAYOUT_ITEM_TO_BUTTON', payload)
      }

      else if(this.addToSomethingActivated.action === 'delete'){
        this.$store.commit('Layout/DELETE_LAYOUT_ITEM_FROM_BUTTON', payload)
      }

      else 
      this.$store.commit("Layout/SET_CURRENT_ITEM", payload)
    },
    chartResizing(left, top, width, height) {
      this.$store.commit("Layout/RESIZE_CHART_CONTAINER", { width, height, currentItem: this.currentItem })
    },
    shapeResizing: debounce(function(left, top, width, height, shape) {
      this.$store.commit("Layout/RESIZE_SHAPE_CONTAINER", { width, height })
    }, 25),
    toTextfield(index, layoutId) {
      this.$store.dispatch("LayoutItems/Textfield/addTextfield", {layoutId: layoutId, id: ''})
      this.$store.commit('Layout/HIDE_TOOLBAR', layoutId)
    },
    toChart(row, layoutId) {
      this.$store.commit("EditContainer/OPEN_EDIT_CONTAINER", {
        name: "ChartContainer",
        row: row,
        layoutId: layoutId
      })
    },
    toWebImage(row, layoutId) {
      this.$store.commit("EditContainer/OPEN_EDIT_CONTAINER", {
        name: "WebImageContainer",
        row: row,
        layoutId: layoutId
      })
    },
    toWebVideo(row, layoutId) {
      this.$store.commit("EditContainer/OPEN_EDIT_CONTAINER", {
        name: "WebVideoContainer",
        row: row,
        layoutId: layoutId,
        id: 'id'
      })
    },
    toTable(row, layoutId) {
      this.$store.dispatch("LayoutItems/Table/addTable", {layoutId: layoutId, id: ''})
    },
    addItem(row, layoutId) {
      this.$store.dispatch("Layout/addItem")
    },
  }
}
</script>

<style>
@import "/home/martin/nuxt/larvel-nuxt/client/assets/sass/_animations.scss";

.project-container {
  padding: 20px 20px 5px 20px !important;
}
div.cont {
  width: 100%;
  height: 100%;
}
div.gird {
  /* background: lightgrey; */
  padding-top: 0rem !important;
}
div.grid-items {
  padding: 0;
  height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  scroll-snap-type: y mandatory;
}

div.grid-items-hidden{
  padding: 0;
  height: 80vh;
  overflow: hidden;
  position: relative;  
}
div.item-container {
  height: 79vh;
  width: 99.8%;
  border: 1px solid black;
  position: relative;
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
  scroll-snap-align: center;
}

div.animation-number {
  width: 10px;
  height: 15px;
  z-index: 500;
  border: black 1px dotted;
  position: relative;
  top: -16px;
  font-size: 10px;
  align-content: center;
}

.is-hidden{
  display: none !important;
  opacity: 0;
}

.project-textfield-container {
  display: table;
  width: 100%;
  /* font-size: 26px */
}

.textfield-drag{
  position: absolute;
  width: 100%;
  height: 1rem;
  top: -3px;
  padding-bottom: 4px;
  z-index: 100;
}

.table-drag{
  position: absolute;
  width: 100%;
  height: 1rem;
  top: -5px;
  padding-bottom: 5px;
  z-index: 100;
}

.ProseMirror{
  height: 100%;
}

.project-web-image-container {
  display: table;
} 

.project-table-container {
  display: table;
}


.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

div.toolbox {
  border-color: #000000;
  border: 1px solid;
  border-radius: 4px;
  font-size: 30px;
  width: 33%;
  margin: 0;
  padding-top: 0.25rem;
  padding-left: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.tooltip-icon {
  cursor: pointer;
}

.new-page-chevron {
  margin: 0;
  padding: 0;
  cursor: pointer;
}

.adding-button {
  cursor: url('http://localhost:8000/storage/images/button-icon.png'), auto;
}

.add-to-something {
  animation: shake 0.5s; 
  animation-iteration-count: infinite; 
  border: 1px solid green !important;
  box-shadow: 1px 1px 4px 1px green;
}

.delete-from-something{
  animation: shake 0.5s; 
  animation-iteration-count: infinite; 
  border: 1px solid red !important;
  box-shadow: 1px 1px 4px 1px red;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
