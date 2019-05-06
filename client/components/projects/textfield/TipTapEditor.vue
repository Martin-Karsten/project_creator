<template>
  <div class="editor-textfield" @contextmenu.prevent="openContextMenu">
      <editor-menu-bubble :editor="ed">
        <div
        slot-scope="{ commands, isActive, menu }"
        class="menububble"
        :class="{ 'is-act': menu.isActive }"
        :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
        >
          <button :class="{ 'is-act': isActive.bold() }" @click="commands.bold">
            Bold
          </button>
          <button :class="{ 'is-act': isActive.heading({ level: 2 }) }" @click="commands.heading({ level: 2 })">
            H2
          </button>
        </div>
      </editor-menu-bubble>
    <editor-content class="textfield editor__content" :editor="ed"/>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBubble } from "tiptap";
import { Heading, Bold, Italic, Underline } from "tiptap-extensions";
import { mapGetters } from 'vuex';
export default {
  props: ['text', 'opacity', 'layoutRow', 'row'],
  components: {
    EditorContent,
    EditorMenuBubble,
  },
  data() {
    return {
      ed: new Editor({
        content: this.text,
        extensions: [
          new Heading({ levels: [1, 2, 3] }),
          new Bold(),
          new Italic(),
          new Underline()
        ],
        onUpdate: ({ getJSON, getHTML }) => {
          
        },
        onFocus: () => {
          this.setCurrentItem()
        },
        onBlur: ({event, state, view}) => {
          this.$store.commit("StartMenus/StartMenuDefault/SET_EDITOR", this.ed.getHTML());
        }
      })
    };
  },
  computed:{
    ...mapGetters({
      computedEditor: 'StartMenus/StartMenuDefault/getEditor'
    })
  },

  mounted(){
    // this.$store.commit("StartMenus/StartMenuDefault/SET_EDITOR", this.ed);
  },
  methods: {
    setCurrentItem(){
      let payload = 
      {
        layoutRow: this.layoutRow,
        itemRow: this.row,
        itemName: 'textfields'
      }
      this.$store.commit('Layout/SET_CURRENT_ITEM', payload)
    },
    setEditor(){
      this.$store.commit("StartMenus/StartMenuDefault/SET_EDITOR", this.ed);
    },
    openContextMenu(){
            let payload = {
                name: 'TextfieldContextMenu',
                x: event.pageX + 'px',
                y: event.pageY + 'px',
                row: this.row}

            let payload2 = {
              layoutRow: this.layoutRow,
              itemRow: this.row,
              itemName: 'textfields'
            }
            this.$store.commit('Layout/SET_CURRENT_ITEM', payload2)
            this.$store.dispatch('ContextMenus/ContextMenu/openContextMenu', payload)
    }
  }
};
</script>
