<template>
  <el-main class="project-container">
    <el-row class="grid">
      <el-col :span="24">
        <draggable
          :disabled="true"
          :list="layoutSet"
          class="grid-items"
        >
          <div
            v-for="(element, index) in layoutSet"
            :key="index"
            ref="itemContainer" class="item-container" @click.self="layoutItemClicked(index, element.id)"
          >
            <vue-draggable-resizable
              v-for="(textfield, textfieldIndex) in layoutTextfields(element)" :key="textfieldIndex+'t'"
              :w="textfield.width * facWidth" :h="textfield.height * facHeight"
              :x="textfield.left * facLeft" :y="textfield.top * facTop" :z="textfield.z_index"
              :class="textfield.class"
              :resizable="false"
              :draggable="false"
              :parent="true" :grid="[5,5]"
              class-name="project-textfield-container"
              :style="{borderStyle: textfield.border_style, borderColor: textfield.border_color, borderWidth: textfield.border_width + 'px', 
                       borderRadius: textfield.border_radius + 'px', backgroundColor: textfield.background_color}"
              @contextmenu="openContextMenu"
            >
              <textfield-editor :id="textfield.id" :text="textfield.text" :opacity="textfield.opacity" :layout-row="index" :row="textfieldIndex" :layout-id="element.id" />
            </vue-draggable-resizable>

            <vue-draggable-resizable
              v-for="(web_image, webImageIndex) in layoutWebImages(element)" :key="webImageIndex+'wE'"
              :w="web_image.width * facWidth" :h="web_image.height * facHeight" :x="web_image.left * facLeft" :y="web_image.top * facTop"
              :z="webImageIndex"
              :resizable="false"
              :draggable="false"
              :parent="true"
              :class="web_image.class"
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
              :w="table.width * facWidth" :h="table.height * facHeight" :x="table.left * facLeft" :y="table.top * facTop"
              :z="tableIndex"
              :class="table.class"
              :resizable="false"
              :draggable="false"
              :parent="true"
              :style="{borderStyle: 'none', borderColor: table.border_color, borderWidth: table.border_width + 'px',
                       borderRadius: table.border_radius + 'px',}" 
              :handles="['ml', 'mr']"     
              @resizing="containerResizing"
              @dragging="containerDragging"
            >
              <table-editor :text="table.text" :id="table.id" :layoutId="element.id" :row="tableIndex"></table-editor>
            </vue-draggable-resizable>

            <vue-draggable-resizable
              v-for="(web_video, webVideoIndex) in layoutWebVideos(element)" :key="webVideoIndex + 'wV'"
              :w="web_video.width * facWidth" :h="web_video.height * facHeight" :x="web_video.left * facLeft" :y="web_video.top * facTop" :z="web_video.z_index"
              :parent="true" :grid="[5,5]" :lock-aspect-ratio="true"
              :resizable="false"
              :draggable="false"
              :class="web_video.class"
              class-name-active="selected" 
              :style="{borderStyle: web_video.border_style, borderColor: web_video.border_color, borderWidth: web_video.border_width + 'px',
                       borderRadius: web_video.border_radius + 'px', backgroundColor: web_video.background_color}"
            >
              <web-video :video-id="web_video.video_id" />
            </vue-draggable-resizable>

            <vue-draggable-resizable
              v-for="(chart, chartIndex) in layoutCharts(element)"
              :key="chartIndex+'chart'" class-name="project-table-container"
              :w="chart.width * facWidth" :h="chart.height * facHeight" :x="chart.left * facLeft" :y="chart.top * facTop" :z="chart.z_index"
              :class="chart.class"
              :resizable="false"
              :draggable="false"
              :parent="true" :grid="[5,5]" 
              class-name-active="selected" 
              :style="{borderStyle: chart.border_style, borderColor: chart.border_color, borderWidth: chart.border_width + 'px',
                       borderRadius: chart.border_radius + 'px', backgroundColor: chart.background_color, right: '100px'}"
              
              @resizing="chartResizing"
              @contextmenu="openContextMenu"
            >
              <div class="cont" @click="chartClicked(element.id, chart.id)" @contextmenu.prevent="openContextMenu(index, chartIndex)">
                <chart :id="chart.id" :width="chart.width" :height="chart.height" :settings="chart.chart_settings" :layout-id="element.id" />
              </div>
            </vue-draggable-resizable>

            <vue-draggable-resizable
              v-for="(button, buttonIndex) in layoutButtons(element)"
              :key="buttonIndex + 'b'" class-name="project-shape-container"
              :w="button.width * facWidth" :h="button.height * facHeight" :x="button.left * facLeft" :y="button.top * facTop" :z="button.z"
              :class="button.class"
              :resizable="false"
              :draggable="false"
              :parent="true" :grid="[5,5]"
              :min-height="1"
              @resizing="containerResizing"
              @dragging="containerDragging"
              @contextmenu="openContextMenu"
            >
              <interact-button :id="button.id" :width="button.width" :height="button.height" :layout-id="element.id" />
            </vue-draggable-resizable>

            <vue-draggable-resizable
              v-for="(shape, shapeIndex) in layoutShapes(element)"
              :key="shapeIndex + 'c'" class-name="project-shape-container"
              :w="shape.width * facWidth" :h="shape.height * facHeight" :x="shape.left * facLeft" :y="shape.top * facTop" :z="shape.z"
              :resizable="false"
              :draggable="false"
              :parent="true" :grid="[5,5]"
              :max-height="maxWidthForLineShape(shape)"
              :min-height="1"
              @resizing="shapeResizing"
              @dragging="containerDragging"
              @contextmenu="openContextMenu"
            >
              <shapes :id="shape.id" :shape="shape.shape_name" :width="shape.width" :height="shape.height" :layout-id="element.id" />
            </vue-draggable-resizable>
          </div>
        </draggable>
        <context-menu />
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import debounce from "../../Helper/Project/LayoutHelper.js"
//Items
import TextfieldEditor from "./textfield/TipTapEditorShow"
import TableEditor from "./table/TableShow"
import ProjectImage from "./project_image/Image"
import WebImage from "./project_image/WebImageShow"
import Chart from "./chart/ChartShow"
import WebVideo from "./video/WebVideoShow"
import Shapes from "./shapes/ShapesShow"
import InteractButton from "./interact/ButtonShow"
//General
import UrlInput from "./general/UrlInput"
import ContextMenu from "../../components/projects/context_menu/ContextMenu"
import ShapePicker from "./navbar/shapes/ShapePicker.vue"
//Draggables
import draggable from "vuedraggable"
import VueDraggableResizable from "vue-draggable-resizable"
import Form from "vform"

// optionally import default styles
import "vue-draggable-resizable/dist/VueDraggableResizable.css"

export default {
    components: {
        draggable,
        VueDraggableResizable,
        TextfieldEditor,
        TableEditor,
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
      facWidth: 1.42,
      facHeight: 1.28,
      facTop: 1.28,
      facLeft: 1.42
    }
  },
  computed: {
    ...mapGetters({
      currentItem: "Layout/getCurrentItem",
      toolboxes: "LayoutHelpers/getToolboxes",
      startMenuIcons: "StartMenus/StartMenu/getStartMenuIcons",
      currentMode: "PresentationMode/getCurrentMode",
      animationList: "PresentationMode/getAnimationItmes",

      layoutSet: "Layout/getLayoutSet"
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
  async mounted() {
    // await this.$store.dispatch("Layout/initialize", this.$route.params)
  },
  beforeDestroy() {
    this.$store.dispatch("Layout/resetLayout")
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
    imageWidth(width) {
      return 250
    },
    imageHeight(height) {
      return 250
    },
    containerWidth(width, currentItem, index) {
      if (this.editMode) {
        return (width / 1500) * 1000
      } else {
        return (width / 1850) * 1000
      }
    },
    containerHeight(height) {
      if (this.editMode) {
        return (height / 660) * 1000
      } else return (height / 660) * 1000
    },
    containerLeft(left) {
      return (left / 1500) * 100
    },
    containerTop(top) {
      return (top / 660) * 100
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
    layoutItemClicked(row, layoutId) {
      if (this.currentItem != "") {
        this.$store.commit("Layout/DESELECT_ITEM")
      }
      //check if item creation icon was selected, if yes create new item
      if (this.startMenuIcons[0].activated == true) {
        this.$store.dispatch("LayoutItems/Textfield/addTextfield", layoutId)
        this.$store.commit("StartMenus/StartMenu/SET_ICON_TO_FALSE", {
          index: 0
        })
      } else if (this.startMenuIcons[1].activated) {
        this.$store.commit("Layout/SET_CURRENT_LAYOUT", row)
        this.$store.commit("EditContainer/OPEN_EDIT_CONTAINER", row)
        // this.$store.commit('Layout/ADD_WEB_IMAGE', {row: row, icon: i})
        this.$store.commit("StartMenus/StartMenu/SET_ICON_TO_FALSE", {
          index: 1
        })
      } else if (this.startMenuIcons[2].activated) {
      } else if (this.startMenuIcons[3].activated) {
      } else if (this.startMenuIcons[4].activated) {
      } else if (this.startMenuIcons[5].activated) {
        this.$store.dispatch("LayoutItems/Shapes/addShape", {
          layoutId: layoutId,
          shape: this.startMenuIcons[5].shape
        })
        this.$store.commit("StartMenus/StartMenu/SET_ICON_TO_FALSE", {
          index: 5
        })
      }
    },
    openContextMenu(layoutRow, row) {
      let payload = {
        name: "ChartContextMenu",
        x: event.pageX + "px",
        y: event.pageY + "px",
        row: row
      }

      let payload2 = {
        layoutRow: layoutRow,
        itemRow: row,
        itemName: "charts"
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
      this.$store.commit("Layout/SET_CURRENT_ITEM", payload)
    },
    chartResizing(left, top, width, height) {
      this.$store.commit("Layout/RESIZE_CHART_CONTAINER", { width, height })
    },
    shapeResizing: debounce(function(left, top, width, height, shape) {
      this.$store.commit("Layout/RESIZE_SHAPE_CONTAINER", { width, height })
    }, 25),
    toTextfield(index, layoutId) {
      this.$store.dispatch("LayoutItems/Textfield/addTextfield", layoutId)
    },
    toChart(row, layoutId) {
      this.$store.commit("EditContainer/OPEN_EDIT_CONTAINER", {
        name: "ChartContainer",
        row: row,
        layoutId: layoutId
      })
    },
    toImage(row, $event) {
      this.imageData = event.target
      // create a new FileReader to read this image and convert to base64 format
      let reader = new FileReader()
      // Define a callback function to run, when FileReader finishes its job
      reader.onload = e => {
        // Read image as base64 and set to imageData
        this.imageData = e.target.result
      }
      reader.readAsDataURL(this.imageData.files[0])

      this.$store.commit("Layout/ADD_IMAGE", {
        row: row,
        file: this.imageData.files[0],
        name: this.imageData.files[0].name
      })
    },
    toWebImage(row, layoutId) {
      this.$store.commit("Layout/SET_CURRENT_LAYOUT", row)
      this.$store.commit("EditContainer/OPEN_EDIT_CONTAINER", {
        name: "WebImageContainer",
        row: row,
        layoutId: layoutId
      })
    },
    toWebVideo(row, layoutId) {
      this.$store.commit("Layout/SET_CURRENT_LAYOUT", row)
      this.$store.commit("EditContainer/OPEN_EDIT_CONTAINER", {
        name: "WebVideoContainer",
        row: row,
        layoutId: layoutId
      })
    },
    toTable(row) {
      // this.$store.commit('Layout/ADD_TABLE', {layoutRow: row, rows: 2,  columns: 3})
    },
    toShapes(row) {
      console.log("hoho")
    },
    addItem() {
      // this.$store.commit('Layout/ADD_ITEM', this.layout.length)
      // this.$store.commit('LayoutHelpers/ADD_TOOLBOX', this.layout.length)
    },
    hideOrShowToolbar(row) {
      this.urlInputActivated = false
      // this.$store.commit('Layout/HIDE_OR_SHOW_TOOLBAR', row)
    }
  }
}
</script>

<style scoped>
@import "/home/martin/nuxt/larvel-nuxt/client/assets/sass/_animations.scss";

.project-container {
  padding: 0 !important;
  /* overflow: hidden; */
}
div.cont {
  width: 100%;
  height: 100%;
}
div.gird {
  padding: 0rem !important;
  /* overflow: hidden; */
}
div.grid-items {
  padding: 0;
  height: 100%;
  /* overflow: hidden; */
  position: relative;
  padding-bottom: 1rem;
}
div.item-container {
  height: 97.5vh;
  width: 100%;
  margin-bottom: 0.25rem;
  position: relative;
  /* overflow: hidden; */
}


.project-textfield-container {
  display: table;
  width: 100%;
  font-size: 21.8px
}

.project-web-image-container {
  display: table;
}

.project-table-container {
  display: table;
}

.selected {
  border: rgb(4, 131, 173) dotted;
}
</style>
