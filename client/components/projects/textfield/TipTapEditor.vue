<template>
<<<<<<< HEAD
  <div class="editor-textfield" @mousedown="setCurrentItem" @contextmenu.prevent="openContextMenu">
    <editor-menu-bubble :editor="ed">
=======
  <div
   class="textfield-content editor"
  :drag="true"
  :isSnappable="false"
  >
    <editor-menu-bar :editor="editor">
>>>>>>> 425dac3511d2a7e837f64e3ee1e448bf79d38ad6
      <div
        slot-scope="{ commands, isActive, menu }"
        class="menububble"
        :class="{ 'is-act': menu.isActive }"
        :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
      >
        <button :class="{ 'is-act': isActive.bold() }" @click="commands.bold">
          <fa icon="bold"></fa>
        </button>
        <button :class="{ 'is-act': isActive.bold() }" @click="commands.italic">
          <fa icon="italic"></fa>
        </button>

        <button
          :class="{ 'is-act': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>
        <button
          :class="{ 'is-act': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>
      </div>
<<<<<<< HEAD
    </editor-menu-bubble>
    <editor-content class="textfield editor__content" :editor="ed" />
=======
    </editor-menu-bar>
    <editor-content class="textfield editor__content" :editor="editor"/>

    <div>
      <pre><code>{{ html }}</code></pre>
    </div>
>>>>>>> 425dac3511d2a7e837f64e3ee1e448bf79d38ad6
  </div>
</template>

<script>
<<<<<<< HEAD
import { Editor, EditorContent, EditorMenuBubble } from "tiptap"
import { Heading, Bold, Italic, Code, CodeBlock, Underline,
          OrderedList, BulletList, 
        } from "tiptap-extensions"
import { mapGetters } from "vuex"
=======
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

>>>>>>> 425dac3511d2a7e837f64e3ee1e448bf79d38ad6
export default {
  components: {
    EditorContent,
<<<<<<< HEAD
    EditorMenuBubble
=======
>>>>>>> 425dac3511d2a7e837f64e3ee1e448bf79d38ad6
  },
  props: ["text", "opacity", "layoutRow", "row", "layoutId", "id"],
  data() {
    return {
      ed: new Editor({
        content: this.text,
        extensions: [
           new Heading({ levels: [1, 2] }),
          new Bold(),
          new Italic(),
          new Underline(),
          new Code(),
          new CodeBlock()
        ],
        // editable: false,
        onUpdate: ({ getJSON, getHTML }) => {},
        onFocus: () => {
          this.setCurrentItem()
          this.clicked()
        },
        onBlur: ({ event, state, view }) => {
          this.$store.commit(
            "Layout/UPDATE_TEXTFIELD",
            this.ed.getHTML()
          )
        },
      })
    }
  },
  computed: {
    ...mapGetters({
      computedEditor: "StartMenus/StartMenuDefault/getEditor",
      addToSomethingActivated: "Layout/getAddToSomethingActivated"
    })
  },
  methods: {
    setCurrentItem() {
      let payload = {
        id: this.id,
        layoutId: this.layoutId,
        itemName: "textfields"
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
    setEditor() {
      this.$store.commit("StartMenus/StartMenuDefault/SET_EDITOR", this.ed)
    },
    openContextMenu() {
      let payload = {
        name: "TextfieldContextMenu",
        x: (event.pageX + 100) + "px",
        y: (event.pageY + 100) + "px",
        row: this.row
      }

      let payload2 = {
        id: this.id,
        layoutId: this.layoutId,
        itemName: "textfields"
      }
      this.$store.commit("Layout/SET_CURRENT_ITEM", payload2)
      this.$store.dispatch("ContextMenus/ContextMenu/openContextMenu", payload)
    },
    clicked(){
      this.$emit('clicked')
    },
  }
}
</script>
