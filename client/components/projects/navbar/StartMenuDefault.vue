<template>
  <div class="columns is-multiline start-menu">
      <div class="column is-1 menu-section first-menu-section">
        <div class="columns is-multiline">
          <div class="column is-4 "> <fa id="menu-icon-0" class="component-icon start-menu-button" icon="font" @click="activateTextfieldIcon" v-bind:class="[creatorActivated ? menuItemActivated : '']"/> </div>
          <div class="column is-4"> <fa id="menu-icon-1" class="component-icon" icon="image" @click="activateImageIcon" /> </div>          
          <div class="column is-4"> <fa id="menu-icon-2" class="component-icon" icon="table" @click="activateTableIcon" /> </div>
          <div class="column is-4"> <fa id="menu-icon-3" class="component-icon" icon="chart-bar" @click="activateChartIcon" /> </div>
          <div class="column is-4"> <fa id="menu-icon-4" class="component-icon" icon="shapes" @click="fieldActivated = true"/> </div>
          <div v-show="fieldActivated">
            <div class="box">
              <div class="columns">
                <div class="column is-4"> <fa class="component-icon" icon="square"/> </div>
                <div class="column is-4"> <fa class="component-icon" icon="circle"/> </div>
                <div class="column is-4"> <fa class="component-icon" icon="arrow-right"/> </div>   
              </div>         
            </div>
          </div>
        </div>
      </div>
      <div class="column is-2 menu-section second-menu-section">
        <div class="columns is-multiline is-gapless">
          <table-size-picker v-show="tableSizePickerActivated" />
        </div>
      </div>

      <div class="column is-2 menu-section second-menu-section">
        <div class="columns is-multiline is-gapless">

    <editor-menu-bar :editor="ed"> 
      <div
        class="menubar"
        :class="{ 'is-focused': focused }"
        slot-scope="{ commands, isActive, focused }"
      >
        <button
          class="button is-small menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <fa class="component-icon" icon="bold"/>
        </button>

        <button
          class="button is-small menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <fa class="component-icon" icon="italic"/>
        </button>

        <button
          class="button is-small menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <fa class="component-icon" icon="underline"/>
        </button>

      </div>
    </editor-menu-bar>
        </div>
      </div>

    </div>  
</template>

<script>
import { Editor, EditorMenuBar} from "tiptap";
import { Heading, Bold, Italic, Underline } from "tiptap-extensions";
import { mapGetters } from 'vuex'
import TableSizePicker from './table/TableSizePicker'
import UrlInput from './general/UrlInput'
export default {
    components: {
      EditorMenuBar,
      TableSizePicker,
      UrlInput
    },
    data(){
      return{
        ed: new Editor({
          content: this.content,
          extensions: [
            new Heading({ levels: [1, 2, 3] }),
            new Bold(),
            new Italic(),
            new Underline()
          ],
          onUpdate: ({ getJSON, getHTML }) => {
            
          },
          onFocus: ({event, state, view}) => {
            this.setCurrentItem()
            // this.$store.commit("StartMenus/StartMenuDefault/SET_EDITOR", this.ed);
          }
        }),
        menuItemActivated: 'menu-section-activated',
        creatorActivated: false,
        fieldActivated: false,
        tableSizePickerActivated: false,
      }
    },
    computed: {
    ...mapGetters({
      content: 'StartMenus/StartMenuDefault/getEditor'

    }),
  },

    methods: {
      activateTextfieldIcon(){
        this.creatorActivated = true
        this.$store.commit('StartMenu/ACTIVATE_ICON', 0)
      },
      activateImageIcon(){
        this.creatorActivated = true
        this.$store.commit('StartMenu/ACTIVATE_ICON', 1)
      },
      activateTableIcon(){
        this.tableSizePickerActivated = !this.tableSizePickerActivated
        this.creatorActivated = true
        this.$store.commit('StartMenu/ACTIVATE_ICON', 2)
      },
      activateChartIcon(){
        this.creatorActivated = true
        this.$store.commit('StartMenu/ACTIVATE_ICON', 3)
      },
      activateShapeIcon(){
        this.creatorActivated = true
        this.$store.commit('StartMenu/ACTIVATE_ICON', 0)
      },
    
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

div.menu-section {
  height: 120px;
  border-left: 1px black dashed;
  border-right: 1px black dashed;
  z-index: 10;
  background-color: white;
}

div.first-menu-section {
  margin-left: 0.75rem;
  border-left: none !important;
  font-size: 26px;
  z-index: 10;
}

div.second-menu-section {
  border-left: none !important;
}

div.font-size-input {
  margin-right: 1rem !important;
}

.font-size-input-icon {
  margin: 0.25rem;
  font-size: 20px !important;
  border-style: solid;
  border-width: 0.1px;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button {  
   opacity: 1;
}

.component-icon{
  cursor: pointer;
}

</style>
