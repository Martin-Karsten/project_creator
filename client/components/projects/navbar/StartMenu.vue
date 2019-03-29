<template>
  <div class="columns is-multiline start-menu">
      <div class="column is-1 menu-section first-menu-section">
        <div class="columns is-multiline">
          <div class="column is-4"> <fa class="component-icon" icon="image"/> </div>
          <div class="column is-4"> <fa class="component-icon" icon="font" @click="activateTextfieldCreator" v-bind:class="[creatorActivated ? menuItemActivated : '']"/> </div>
          <div class="column is-4"> <fa class="component-icon" icon="table"/> </div>
          <div class="column is-4"> <fa class="component-icon" icon="chart-bar"/> </div>
          <div class="column is-4"> <fa class="component-icon" icon="shapes" @click="fieldActivated = true"/> </div>
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
          <div class="column is-6 font-type-input"> <input type="text" class="input font-type-input" v-model.lazy="fontType" > </div>
          <div class="column is-0 font-size-input"> <input type="number" class="input" v-model.lazy="fontSize"> </div>
          <div class="column is-1"> <fa class="component-icon font-size-input-icon" icon="font"/> </div>
          <div class="column is-1"> <fa class="component-icon font-size-input-icon" icon="font"/> </div>
          <div class="column is-1"> <fa class="component-icon font-size-input-icon" icon="font"/> </div>
          <div class="column is-2"> <fa class="component-icon" icon="bold"/> </div>
          <div class="column is-2"> <fa class="component-icon" icon="italic"/> </div>
          <div class="column is-2"> <fa class="component-icon" icon="underline"/> </div>
        </div>
      </div>
    </div>  
</template>

<script>
import { Editor, EditorMenuBar, EditorContent } from 'tiptap'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'
export default {
    components: {
      EditorContent,
      EditorMenuBar,
    },
    data(){
      return{
      editor: null,
        menuItemActivated: 'menu-section-activated',
        creatorActivated: false,
        fieldActivated: false,
      }
    },
    computed: {
    ...mapGetters({
    textfields: 'Textfield/getTextfields', //not needed??
    currentTextfield: 'Textfield/getCurrentTextfield', //not needed??
    }),
    //update fontType the vuex way
    fontType: {
    get () {
      return this.$store.getters["Textfield/getCurrentTextfield"].font
      },
    set (value) {
      this.$store.commit('Textfield/UPDATE_FONT_TYPE', value)
      }
    },
    //update fontSize the vuex way
    fontSize: {
    get () {
      return this.$store.getters["Textfield/getCurrentTextfield"].size
      },
    set (value) {
      this.$store.commit('Textfield/UPDATE_FONT_SIZE', value)
      }
    }
  },

  mounted() {
    this.test()
  },
    methods: {
      activateTextfieldCreator(){
        this.creatorActivated = true
        this.$store.commit('LayoutItem/SET_ITEM_CREATOR', true)
      },
      test() {
this.editor = new Editor({
        extensions: [
          new Blockquote(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new BulletList(),
          new OrderedList(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
        ]
      })
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
