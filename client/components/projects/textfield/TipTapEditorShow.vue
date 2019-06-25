<template>
  <div class="editor-textfield" @contextmenu.prevent="openContextMenu">
    <editor-content class="textfield editor__content" :editor="ed" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBubble } from "tiptap"
import { Heading, Bold, Italic, Code, CodeBlock, Underline,
          OrderedList, BulletList, 
        } from "tiptap-extensions"
import { mapGetters } from "vuex"
export default {
  components: {
    EditorContent,
    EditorMenuBubble
  },
  props: ["text", "opacity", "layoutRow", "row", "layoutId", "id"],
  data() {
    return {
      ed: new Editor({
        content: this.text,
        editable: false,
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
        x: event.pageX + "px",
        y: event.pageY + "px",
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
