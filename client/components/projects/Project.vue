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
                v-for="element in layout"
                :key="element.name"
                class="item"
                >
              <div class="item-container">
                    <div class="columns toolbox" v-show="isEmpty">
                        <div class="column tip" :id="element.id" data-tooltip="Text" @click="toTextfield" >
                            <span class="tooltiptext">Text</span>
                            <fa icon="font"/>
                        </div>
                        <div class="column tip" data-tooltip="Chart" @click="toChart" >
                            <span class="tooltiptext">Chart</span>
                            <fa icon="chart-bar"/>
                        </div>
                        <div class="column tip" data-tooltip="Image" @click="toImage" >
                            <span class="tooltiptext">Image</span>
                            <fa icon="image"/>
                        </div>  
                        <div class="column tip" data-tooltip="Table" @click="toTable" >
                            <span class="tooltiptext">Table</span>
                            <fa icon="table" />
                        </div>  
                    </div>
                <vue-draggable-resizable  v-for="textfield in element.textfields" :key="textfield.id"
                :w="textfield.width" :h="textfield.height" :x="textfield.left" :y="textfield.top" :z="textfield.z_index"
                :parent="true" :grid="[2,2]"
                :style="{}">
                <no-ssr>
                    <!-- {{textfield}} -->
                    <editor :id="textfield.id" :text="textfield.text"/>
                </no-ssr>
                </vue-draggable-resizable>

                <!-- <vue-draggable-resizable 
                :w="480" :h="275" @dragging="onDrag" @resizing="onResize" :parent="true" :grid="[2,2]" :lock-aspect-ratio="true">
                    <img :src="image">
                </vue-draggable-resizable> -->

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
import twice from '/home/martin/nuxt/larvel-nuxt/client/Images/twice.jpg'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import draggable from 'vuedraggable'
import Editor from './textfield/TipTapEditor'
import TableEditor from './table/Table'
import ProjectImage from './project_image/Image'
import VueDraggableResizable from 'vue-draggable-resizable'

// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

export default {
    components: {
        draggable,
        'vue-draggable-resizable': VueDraggableResizable,
        Editor,
        TableEditor,
    },
    data () {
        return {
            isEmpty: true,
            image: twice,
            dragging: false,
        }
    },
    computed: {
        ...mapGetters({
            layout: 'Layout/getLayout',
            textfields: 'Textfield/getTextfields'
        })
    },
    beforeDestroy(){
        this.$store.dispatch('Layout/resetLayout')
    },
    methods: {

        toChart() {

        },
        toImage() {

        },
        toTable() {

        },
        toTextfield(event) {
            this.isEmpty = false
            this.$store.commit('Layout/ADD_TEXTFIELD', event.currentTarget.id)
        },
        addItem() {
            let payload = {name: '', id: this.layout.length}
            this.$store.commit('Layout/ADD_ITEM', payload)
        }
    }
}
</script>

<style>
div.gird {
    background: lightgrey;
    /* padding: 0 !important; */
}
div.grid-items {
    padding: 0;
}
div.item-group {
    height: 662px;
    overflow-y: scroll;
    overflow-x: hidden;
}
div.item-container {
    height: 658px;
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
    width: 14%;
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

.new-page-chevron {
    margin: 0;
    padding: 0;
    cursor: pointer;
}
</style>
