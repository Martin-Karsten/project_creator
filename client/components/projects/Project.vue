<template>
    <div class="colums grid">
        <div class="column is-12 grid-items">
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
                @click="layoutItemClicked(index)"
                >
              <div class="item-container">
                    <div class="columns is-multiline toolbox" v-show="toolboxes[index].isEmpty">
                        <div class="column tip"  data-tooltip="Text" @click="toTextfield(index)">
                            <span class="tooltiptext">Text</span>
                            <fa icon="font"/>
                        </div>
                        <div class="column tip" data-tooltip="Chart" >
                            <span class="tooltiptext">Chart</span>
                            <fa icon="chart-bar" @click="toChart(index)"/>
                        </div>
                        <div class="column tip" data-tooltip="Image" @change="toImage(index)">
                            <span class="tooltiptext">Image</span>
                            <input id="upload" class="file-input" type="file" name="file-upload" accept="image/*">
                            <fa icon="image"/>
                        </div>
                        <div class="column tip" data-tooltip="Image" @click="toWebImage(index)">
                            <span class="tooltiptext">Web Image</span>
                            <fa icon="image"/>
                        </div>  
                        <div class="column tip" data-tooltip="Youtube" @click="toWebVideo(index)">
                            <span class="tooltiptext">Youtube Video</span>
                            <fa icon="video"/>
                        </div>  
                        <div class="column tip" data-tooltip="Table" @click="toTable(index)">
                            <span class="tooltiptext">Table</span>
                            <fa icon="table" />
                        </div>  
                    </div>

                    <url-input v-show="toolboxes[index].urlInputActivated" :index="index"></url-input>
               
                <vue-draggable-resizable  v-for="textfield in element.textfields" :key="textfield.id"
                    :w="textfield.width" :h="textfield.height" :x="textfield.left" :y="textfield.top" :z="textfield.z_index"
                    :parent="true" :grid="[2,2]"
                >
                <no-ssr>
                    <editor :id="textfield.id" :text="textfield.text"/>
                </no-ssr>
                </vue-draggable-resizable>

                <vue-draggable-resizable v-for="image in element.images" :key="image.name"
                    :w="image.width" :h="image.height" :x="image.left" :y="image.top" :z="image.z_index"
                    :parent="true" :grid="[2,2]" :lock-aspect-ratio="true"
                >
                    <project-image :id="image.id" :imageData="imageData" />
                </vue-draggable-resizable>

                <vue-draggable-resizable v-for="web_image in element.web_images" :key="web_image.id"
                    :w="web_image.width" :h="web_image.height" :x="web_image.left" :y="web_image.top" :z="web_image.z_index"
                    :parent="true" :grid="[2,2]" :lock-aspect-ratio="true"
                >
                    <web-image :id="web_image.id" :url="web_image.url" />
                </vue-draggable-resizable>

                <vue-draggable-resizable v-for="web_video in element.web_videos" :key="web_video.id"
                    :w="web_video.width" :h="web_video.height" :x="web_video.left" :y="web_video.top" :z="web_video.z_index"
                    :parent="true" :grid="[2,2]" :lock-aspect-ratio="true"
                >
                    <web-video :videoId="web_video.video_id"></web-video>
                </vue-draggable-resizable>
                <!-- <web-video :videoId="web_video.videoId"></web-video> -->

                <!-- <vue-draggable-resizable v-for="cont in container" v-bind:key="cont"
                :w="150" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true" :grid="[1,1]">
                </vue-draggable-resizable> -->
                </div>
                </div>
            </draggable>
        </div>
        <fa class="new-page-chevron" icon="chevron-down" @click="addItem"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
//Items
import Editor from './textfield/TipTapEditor'
import TableEditor from './table/Table'
import ProjectImage from './project_image/Image'
import WebImage from './project_image/WebImage'
import WebVideo from './video/WebVideo'
//General
import UrlInput from './general/UrlInput'
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
        Editor,
        TableEditor,
        ProjectImage,
        WebImage,
        WebVideo,
        UrlInput
    },
    data () {
        return {
            isEmpty: true,
            dragging: false,
            imageData: '',
        }
    },
    computed: {
        ...mapGetters({
            layout: 'Layout/getLayout',
            toolboxes:'LayoutHelpers/getToolboxes',
            startMenuIcons: "StartMenu/getStartMenuIcons",
        })
    },
    beforeDestroy(){
        this.$store.dispatch('Layout/resetLayout')
    },
    methods: {
        layoutItemClicked(row){
        for( let i = 0; i < this.startMenuIcons.length; i++){ 
        if ( this.startMenuIcons[i].activated === true && i === 0) {
            this.$store.commit('Layout/ADD_TEXTFIELD', {row: row, icon: i})
            this.$store.commit('StartMenu/SET_ICON_TO_FALSE',{row: row, icon: i})
            return
            }
        else if (this.startMenuIcons[i].activated === true && i === 1){
            this.$store.commit('Layout/ADD_WEB_IMAGE', {row: row, icon: i})
            this.$store.commit('StartMenu/SET_ICON_TO_FALSE',{row: row, icon: i})
            return
            }
            }
        },
        toTextfield(row){
            this.$store.commit('Layout/ADD_TEXTFIELD', row)
        },
        toChart() {

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
            this.$store.commit('EditContainer/OPEN_EDIT_CONTAINER', row)

        },
        toWebVideo(row){
            this.url = 'video'
            this.$store.commit('LayoutHelpers/HIDE_TOOLBAR', row)
            this.$store.commit('LayoutHelpers/SHOW_URL_INPUT', row)
        },
        toTable() {

        },
        addItem() {
            // console.log(layout.length)
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
div.gird {
    background: lightgrey;
}
div.grid-items {
    padding: 0;
}
div.item-group {
    height: 647px;
    overflow-y: scroll;
    overflow-x: hidden;
}
div.item-container {
    height: 640px;
    width: 100%; border: 1px solid black; 
    position: relative;
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

div.toolbox {
    border-color: #000000;
    border: 1px solid;
    border-radius: 10px;
    font-size: 30px;
    cursor: pointer;
    width: 12%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.tip .tooltiptext {
  visibility: hidden;
  opacity: 0;
  width: 5rem;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  transition: opacity 0.25s;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  margin-bottom: 20px;
  width: 120px;
  bottom: 100%;
  left: 50%; 
  margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
}

.tip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
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
