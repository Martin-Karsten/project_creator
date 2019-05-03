<template>
  <div class="editor-textfield" @contextmenu="openContextMenu" @click="setCurrentItem">
    <editor-menu-bar ref="editor" :editor="editor" @contextmenu="openContextMenu">
      <div class="menubar is-hide"
      :class="{ 'is-focused': focused }"
       slot-scope="{ commands, isActive, focused }">
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

        <!-- <button
          class="button menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
        </button>
        <button
          class="button menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
        </button>
        <button
          class="button menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
        </button>
        <button
          class="button menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>
        <button
          class="button menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>
        <button
          class="button menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>
        <button
          class="button menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
        </button>
        <button
          class="button menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
        </button>
        <button
          class="button menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
        </button>
        <button
          class="button menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
        </button> -->

      </div>
    </editor-menu-bar>
    <editor-content ref="editorContent" :id="'textfield-'+id" class="textfield editor__content" :editor="editor" @contextmenu="openContextMenu"/>

  </div>
</template>

<script>
import { Editor, EditorMenuBar, EditorContent } from 'tiptap'
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
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  props: ['id','text', 'opacity', 'layoutRow', 'row'],
  components: {
    EditorMenuBar,
    EditorContent,
  },
  data() {
    return {
      editor: new Editor({
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
        ],
        content: this.text,
        onUpdate: ({ getJSON, getHTML }) => {
          this.json = getJSON()
          this.html = getHTML()
        },
        onBlur: () => {
          // this.$store.commit('Textfield/UPDATE_TEXT', this.html)  
        },
      }),
      json: this.text,
      html: this.text,
      selected: false
    }
  },
  mounted() {
    // this.content
    this.json = this.content
    this.test = this.editor
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  methods: {
    openContextMenu(){
      
    },
    setCurrentItem(){
      let payload = 
      {
        layoutRow: this.layoutRow,
        itemRow: this.row,
        itemName: 'textfields'
      }
      this.$store.commit('Layout/SET_CURRENT_ITEM', payload)
    },
    sendEditor() {
      this.$store.commit('Layout/SET_EDITOR', this.editor)
    },
    clearContent() {
      this.editor.clearContent(true)
      this.editor.focus()
    },
    updateContent(event){
      console.log('hi')
      this.$store.commit('Textfield/UPDATE_TEXT', this.html)
    },
  },
}
</script>

<style scoped>

.editor-textfield{
    display: table;
    width: 100%;
}


.textfield, editor__content{
    display: table;
    width: 100%;
}


</style>