<template>
    <el-main class="project-container">
    <el-row class="grid">
        <el-button @click="addCol">Add Col</el-button>
        <el-col :span="24" class="grid-items">
            <draggable
                :disabled="true"
                :list="layout"
                class="item-group"
                ghost-class="ghost"
            >
                <div
                v-for="(element, index) in layout"
                :key="index"
                class="item"
                >
                
              <div class="item-container" @click.self="layoutItemClicked(index)">
                    <el-row class="toolbox" v-show="toolboxes[index].isEmpty">

                        <el-tooltip class="tooltip-item" effect="dark" content="Text" placement="top-start">
                            <el-col :span="4">
                                <fa class="tooltip-icon" icon="font" @click="toTextfield(index)"/>
                            </el-col>
                        </el-tooltip>

                        <el-tooltip class="tooltip-item" effect="dark" content="Web Image" placement="top-start">
                            <el-col :span="4">
                                <fa class="tooltip-icon" icon="image" @click="toWebImage(index)"/>
                            </el-col>
                        </el-tooltip>

                        <el-tooltip class="tooltip-item" effect="dark" content="Chart" placement="top-start">
                            <el-col :span="4">
                                <fa class="tooltip-icon" icon="chart-bar" @click="toChart(index)"/>
                            </el-col>
                        </el-tooltip>

                        <el-tooltip class="tooltip-item" effect="dark" content="Table" placement="top-start">
                            <el-col :span="4">
                                <fa class="tooltip-icon" icon="table" @click="toTable(index)"/>
                            </el-col>
                        </el-tooltip>

                        <el-tooltip class="tooltip-item" effect="dark" content="Web Video" placement="top-start">
                            <el-col :span="4">
                                <fa class="tooltip-icon" icon="video" @click="toWebVideo(index)"/>
                            </el-col>
                        </el-tooltip>

                        <el-tooltip class="tooltip-item" effect="dark" content="Shape" placement="top-start">
                            <el-col :span="4">
                                <fa class="tooltip-icon" icon="shapes" @click="toShapes(index)"/>
                            </el-col>
                        </el-tooltip>

                    </el-row>

                    <url-input v-show="toolboxes[index].urlInputActivated" :index="index"></url-input>

               
                <vue-draggable-resizable
                    v-for="(textfield, textfieldIndex) in element.textfields" :key="textfieldIndex+'t'"
                    :w="textfield.width" :h="textfield.height" :x="textfield.left" :y="textfield.top" :z="textfield.z_index"
                    :parent="true" :grid="[5,5]"
                    class-name="project-textfield-container"
                    :class="{'bounce animated': textfield.animated}" 
                    :style="{borderStyle: textfield.border_style, borderColor: textfield.border_color, borderWidth: textfield.border_width + 'px', 
                    borderRadius: textfield.border_radius + 'px', backgroundColor: textfield.background_color}"
                    @contextmenu="openContextMenu"
                >
                <!-- <div class="animation-number">{{}}</div> -->
                    <textfield-editor :text="textfield.text" :opacity="textfield.opacity" :layoutRow="index" :row="textfieldIndex"/>

                </vue-draggable-resizable>

                <vue-draggable-resizable
                    v-for="image in element.images" :key="image.name"
                    :w="image.width" :h="image.height" :x="image.left" :y="image.top" :z="image.z_index"
                    :parent="true" :grid="[5,5]" :lock-aspect-ratio="true" 
                    class-name-active="selected" :class="[image.animation_name, 'animated']"
                    :style="{borderStyle: image.border_style, borderColor: image.border_color, borderWidth: image.border_width + 'px', borderRadius: image.border_radius + 'px'}"
                >
                    <project-image :id="image.id" :imageData="imageData" />
                </vue-draggable-resizable>

                <vue-draggable-resizable
                    v-for="(web_image, webImageIndex) in element.web_images" :key="webImageIndex+'wE'"
                    :w="web_image.width" :h="web_image.height" :x="web_image.left" :y="web_image.top" :z="web_image.z_index"
                    :parent="true" :grid="[5,5]"
                    class-name=project-web-image-container 
                    class-name-active="selected" :class="{'animated':web_image.animated,[web_image.animation_name]:web_image.animation_name}"
                    :style="{borderStyle: web_image.border_style, borderColor: web_image.border_color, borderWidth: web_image.border_width + 'px', borderRadius: web_image.border_radius + 'px'}"
                >
                <div class="animation-number"></div>
                    <web-image :id="web_image.id" :url="web_image.url" :radius="web_image.border_radius" :opacity="web_image.opacity" :layoutRow="index" :row="webImageIndex"/>
                </vue-draggable-resizable>

                <vue-draggable-resizable
                    class-name="project-table-container"
                    v-for="(table, tableIndex) in element.tables" :key="tableIndex+'table'"
                    :w="table.width" :h="table.height" :x="table.left + 100" :y="table.top + 100" :z="table.z_index"
                    :parent="true" :grid="[5,5]" 
                    class-name-active="selected" :class="[{'animated': table.animated}, table.animation_name]"
                    :style="{borderStyle: table.border_style, borderColor: table.border_color, borderWidth: table.border_width + 'px',
                     borderRadius: table.border_radius + 'px', backgroundColor: table.background_color}"
                >
                        <table-editor :text="table.text"></table-editor>
                </vue-draggable-resizable>

                <vue-draggable-resizable
                    v-for="web_video in element.web_videos" :key="web_video.id"
                    :w="web_video.width" :h="web_video.height" :x="web_video.left" :y="web_video.top" :z="web_video.z_index"
                    :parent="true" :grid="[5,5]" :lock-aspect-ratio="true"
                    class-name-active="selected" :class="{'wobble animated': web_video.animated}"
                >
                    <web-video :videoId="web_video.video_id"></web-video>
                </vue-draggable-resizable>

                <vue-draggable-resizable
                    class-name="project-table-container"
                    v-for="(chart, chartIndex) in element.charts" :key="chartIndex+'chart'"
                    :w="chart.width" :h="chart.height" :x="chart.left + 100" :y="chart.top + 100" :z="chart.z_index"
                    :parent="true" :grid="[5,5]" 
                    class-name-active="selected" 
                    :style="{borderStyle: chart.border_style, borderColor: chart.border_color, borderWidth: chart.border_width + 'px',
                     borderRadius: chart.border_radius + 'px', backgroundColor: chart.background_color}"
                     @resizing="chartResizing"
                     @contextmenu="openContextMenu"
                     :draggable="isDraggable"
                >
                <div class="cont" @contextmenu.prevent="openContextMenu(index, chartIndex)">
                    <chart :width="chart.width" :height="chart.height" :layoutRow="index" :row="chartIndex"></chart>
                </div>
                </vue-draggable-resizable>

                <!-- <vue-draggable-resizable
                    v-for="(web_image, index) in element.web_images" :key="index+'shape'"
                    :w="web_image.width" :h="web_image.height" :x="web_image.left + 100" :y="web_image.top + 100" :z="web_image.z_index"
                    :parent="true" :grid="[5,5]" :lock-aspect-ratio="true"
                    class-name-active="selected" :class="[{'animated': web_image.animated}, web_image.animation_name]"
                >
                    <shapes :width="web_image.width" :height="web_image.height"></shapes>
                </vue-draggable-resizable> -->


                </div>
                </div>
            </draggable>
            <context-menu></context-menu>
        </el-col>

        <fa class="new-page-chevron" icon="chevron-down" @click="addItem"/>

    </el-row>
</el-main>
</template>

<script>
import { mapGetters } from 'vuex'
//Items
import TextfieldEditor from './textfield/TipTapEditor'
import TableEditor from './table/Table'
import ProjectImage from './project_image/Image'
import WebImage from './project_image/WebImage'
import Chart from './chart/Chart'
import WebVideo from './video/WebVideo'
import Shapes from './shapes/Shapes'
//General
import UrlInput from './general/UrlInput'
import ContextMenu from '../../components/projects/context_menu/ContextMenu'
//Draggables
import draggable from 'vuedraggable'
import VueDraggableResizable from 'vue-draggable-resizable'
import Form from 'vform'

// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

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
        ContextMenu
    },
    data () {
        return {
            isEmpty: true,
            dragging: false,
            imageData: '',
            isDraggable: true,
        }
    },
    computed: {
        ...mapGetters({
            layout: 'Layout/getLayout',
            currentLayout: 'Layout/getCurrentLayout',
            currentItem: 'Layout/getCurrentItem',
            currentSelectedItem: 'Layout/getCurrentSelectedItem',
            toolboxes:'LayoutHelpers/getToolboxes',
            startMenuIcons: "StartMenu/getStartMenuIcons",
            currentMode: 'PresentationMode/getCurrentMode',
            animationList: 'PresentationMode/getAnimationItmes',
        })
    },
    mounted(){
        this.$store.dispatch('StartMenus/StartMenu/initialize', this.$route.params)
    },
    beforeDestroy(){
        this.$store.dispatch('Layout/resetLayout')
    },
    methods: {
        addCol(){
            this.$store.commit('Layout/CREATE_TABLE', {rows:5, columns:6})
        },
        activatePresentationMode(event){
            console.log(event.keyCode)
        },
        animationObject(obj){
            return {
                animated: obj.animated,
                fadeIn: obj.animation_name
            }
        },
        layoutItemClicked(row){
        if(this.currentSelectedItem != ''){
            this.$store.commit('Layout/DESELECT_ITEM')
        }
        //check if item creation icon was selected, if yes create new item
        for( let i = 0; i < this.startMenuIcons.length; i++){ 
        if ( this.startMenuIcons[i].activated === true && i === 0) {
            this.$store.commit('Layout/ADD_TEXTFIELD', {row: row, icon: i})
            this.$store.commit('StartMenu/SET_ICON_TO_FALSE',{row: row, icon: i})
            return
            }
        else if (this.startMenuIcons[i].activated === true && i === 1){
            this.$store.commit('Layout/SET_CURRENT_LAYOUT', row)
            this.$store.commit('EditContainer/OPEN_EDIT_CONTAINER', row)
            // this.$store.commit('Layout/ADD_WEB_IMAGE', {row: row, icon: i})
            this.$store.commit('StartMenu/SET_ICON_TO_FALSE',{row: row, icon: i})
            return
            }
        else if (this.startMenuIcons[i]. activated === true && i === 2){
            
        }
            }
        },
        openContextMenu(layoutRow, row){
            let payload = {
                name: 'ChartContextMenu',
                x: event.pageX + 'px',
                y: event.pageY + 'px',
                row: row}

            let payload2 = {
                layoutRow: layoutRow,
                itemRow: row,
                itemName: 'charts'
            }
            this.$store.commit('Layout/SET_CURRENT_ITEM', payload2)
            this.$store.dispatch('ContextMenus/ContextMenu/openContextMenu', payload)

        },
        chartResizing(left, top, width, height){
            this.$store.commit('Layout/RESIZE_CHART_CONTAINER', {width, height})
        },
        toTextfield(row){
            this.$store.dispatch('Layout/addTextfield', {name: 'TextfieldContainer', row: row})
        },
        toChart(row) {
            this.$store.commit('EditContainer/OPEN_EDIT_CONTAINER', {name: 'ChartContainer', row: row})
        },
        toImage(row, $event) {
          this.imageData = event.target;
          // create a new FileReader to read this image and convert to base64 format
          let reader = new FileReader();
          // Define a callback function to run, when FileReader finishes its job
          reader.onload = (e) => {
              // Read image as base64 and set to imageData
              this.imageData = e.target.result;
          }
         reader.readAsDataURL(this.imageData.files[0]);
         
          this.$store.commit('Layout/ADD_IMAGE', {
            row: row,
            file: this.imageData.files[0],
            name: this.imageData.files[0].name})         
        },
        toWebImage(row){
            this.$store.commit('Layout/SET_CURRENT_LAYOUT', row)
            this.$store.commit('EditContainer/OPEN_EDIT_CONTAINER', {name: 'WebImageContainer', row: row})

        },
        toWebVideo(row){
            this.url = 'video'
            this.$store.commit('LayoutHelpers/HIDE_TOOLBAR', row)
            this.$store.commit('LayoutHelpers/SHOW_URL_INPUT', row)
        },
        toTable(row) {
            this.$store.commit('Layout/ADD_TABLE', {layoutRow: row, rows: 2,  columns: 3})
        },
        addItem() {
            this.$store.commit('Layout/ADD_ITEM', this.layout.length)
            this.$store.commit('LayoutHelpers/ADD_TOOLBOX', this.layout.length)
        },
        hideOrShowToolbar(row){
            this.urlInputActivated = false
            // this.$store.commit('Layout/HIDE_OR_SHOW_TOOLBAR', row)
        }
    }
}
</script>

<style>
@import '/home/martin/nuxt/larvel-nuxt/client/assets/sass/_animations.scss';

.project-container{
    padding: 20px 20px 5px 20px !important;
}
div.cont{
    width: 100%;
    height: 100%;
}
div.gird {
    /* background: lightgrey; */
    padding-top: 0rem !important;
}
div.grid-items {
    padding: 0;
}
div.item-group {
    height: 667px;
    overflow-y: scroll;
    overflow-x: hidden;
}
div.item-container {
    height: 659px;
    width: 100%; border: 1px solid black; 
    position: relative;
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
}

div.animation-number{
    width: 10px;
    height: 15px;
    z-index: 500;
    border: black 1px dotted;
    position: relative;
    top: -16px;
    font-size: 10px;
    align-content: center
}

.project-textfield-container{
      display: table;
}

.project-web-image-container{
    display: table;
}

.project-table-container{
    display: table;
}

.selected {
    border: rgb(4, 131, 173) dotted;
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

.tooltip-icon{
    cursor: pointer;
}

.file-input {
  position: absolute;
  left: 70%;
  top: 0;
  width: 30%;
  height: 50%;
  cursor: pointer;
  opacity: 0;
}
.file-input:focus {
  outline: none;
}

.new-page-chevron {
    margin: 0;
    padding: 0;
    cursor: pointer;
}


</style>
