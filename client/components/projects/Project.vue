<template>
    <div class="colums grid">
        <div class="column is-12 grid-items">
            <draggable
                :list="layout"
                class="item-group"
                ghost-class="ghost"
            >
                <div
                v-for="element in layout"
                :key="element.name"
                class="item"
                v-bind:id="'item' + element.id"
                >
              <div class="item-container">
                <vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true" :grid="[1,1]">
                    {{layout}}
                </vue-draggable-resizable>
                <vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true" :lock-aspect-ratio="false">
                    <img v-bind:src="image" />
                </vue-draggable-resizable>
            </div>
    
                    <!-- <div class="panel-container"> -->
                        <!-- <editor v-for="text in textfields[data.i]" :key="text[data.i]" :content="text.text"/> -->
                        <!-- <table-editor /> -->
                        <!-- <project-image /> -->
                        <!-- <button class="button">button</button> -->
                    <!-- </div> -->
                </div>
            </draggable>
        </div>
        <fa class="new-page-chevron" icon="chevron-down" @click="addItem"/>
    </div>
</template>

<script>
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

.new-page-chevron {
    margin: 0;
    padding: 0;
    cursor: pointer;
}
</style>
