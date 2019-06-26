<template>
<<<<<<< HEAD
  <div class="table-editor" @contextmenu.prevent="openContextMenu">
    <editor-menu-bubble :editor="editor">
=======
  <div
   class="table-content editor"
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
          Bold
        </button>
					<button
						class="menubar__button"
						:class="{ 'is-act': isActive.heading({ level: 1 }) }"
						@click="commands.heading({ level: 1 })"
					>
						H1
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-act': isActive.heading({ level: 2 }) }"
						@click="commands.heading({ level: 2 })"
					>
						H2
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-act': isActive.heading({ level: 3 }) }"
						@click="commands.heading({ level: 3 })"
					>
						H3
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-active': isActive.bullet_list() }"
						@click="commands.bullet_list"
					>
						<p>Ul</p>
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-active': isActive.ordered_list() }"
						@click="commands.ordered_list"
					>
						<p>Ol</p>
					</button>

					<button
						class="menubar__button"
						:class="{ 'is-active': isActive.blockquote() }"
						@click="commands.blockquote"
					>
						<p>Code</p>
					</button>

<<<<<<< HEAD
					<button
						class="menubar__button"
						:class="{ 'is-active': isActive.code_block() }"
						@click="commands.code_block"
					>
						<p>Code</p>
					</button>

					<button
						class="menubar__button"
						@click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: false })"
					>
						<p>Table</p>
					</button>

					<span v-if="isActive.table()">
						<button
							class="menubar__button"
							@click="commands.addColumnBefore"
						>
							<p>Col Before</p>
						</button>
						<button
							class="menubar__button"
							@click="commands.addColumnAfter"
						>
							<p>Col After</p>
						</button>
						<button
							class="menubar__button"
							@click="commands.deleteColumn"
						>
							<p>Delete Col</p>
						</button>
						<button
							class="menubar__button"
							@click="commands.addRowBefore"
						>
							<p>Row Before</p>
						</button>
						<button
							class="menubar__button"
							@click="commands.addRowAfter"
						>
							<p>Row After</p>
						</button>
						<button
							class="menubar__button"
							@click="commands.deleteRow"
						>
							<p>Delete Row</p>
						</button>
						<button
							class="menubar__button"
							@click="commands.toggleCellMerge"
						>
							<p>Combine</p>
						</button>
					</span>
      </div>
    </editor-menu-bubble>
    <editor-content class="table editor__content" :editor="editor" />
=======
    <!-- <div>
      <pre><code>{{ html }}</code></pre>
    </div> -->
>>>>>>> 425dac3511d2a7e837f64e3ee1e448bf79d38ad6
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { Editor, EditorContent, EditorMenuBubble, EditorMenuBar } from "tiptap"
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
  Table,
  TableHeader,
  TableCell,
  TableRow,
<<<<<<< HEAD
  Strike,
  Underline,
  History
} from "tiptap-extensions"
=======
} from 'tiptap-extensions'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

>>>>>>> 425dac3511d2a7e837f64e3ee1e448bf79d38ad6
export default {
  components: {
    EditorContent,
<<<<<<< HEAD
    EditorMenuBar,
    EditorMenuBubble
=======
>>>>>>> 425dac3511d2a7e837f64e3ee1e448bf79d38ad6
  },
  props: ["text", "id", "layoutId", "row", "height"],
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
          new Table({
            resizable: true,
          }),
          new TableHeader(),
          new TableCell(),
          new TableRow()
        ],
        onUpdate: ({ getJSON, getHTML }) => {},
        onFocus: () => {
          this.setCurrentItem()
        },
        onBlur: ({ event, state, view }) => {
          this.$store.commit(
            "Layout/UPDATE_TABLE",
            this.editor.getHTML()
          )
        },
        content: `
					${this.text}
					`
      })
    }
  },
  computed: {
    ...mapGetters({
      addToSomethingActivated: "Layout/getAddToSomethingActivated"
    })
  },
  methods: {
    setCurrentItem() {
      let payload = {
        id: this.id,
        layoutId: this.layoutId,
        itemName: "tables"
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
    openContextMenu() {
      let payload = {
        name: "TableContextMenu",
        x: event.pageX + "px",
        y: event.pageY + "px",
        row: this.row
      }

      let payload2 = {
        id: this.id,
        layoutId: this.layoutId,
        itemName: "tables"
      }
      this.$store.commit("Layout/SET_CURRENT_ITEM", payload2)
      this.$store.dispatch("ContextMenus/ContextMenu/openContextMenu", payload)
    },
  },
  beforeDestroy() {
    this.editor.destroy()
  }
}
</script>

<style lang="scss">
// th, td{
// 	border: green solid 1px !important;
// }
table {
  border-collapse: collapse !important;
  table-layout: fixed !important;
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  overflow: hidden !important;
  display: table;

  p {
    height: 100%;
  }
  td,
  th {
    min-width: 1em !important;
    border: 2px solid grey !important;
    padding: 3px 5px !important;
    vertical-align: top !important;
    box-sizing: border-box !important;
    position: relative !important;
    height: 100;
    display: table-cell;
    > * {
      margin-bottom: 0 !important;
    }
  }

  th {
    font-weight: bold !important;
    text-align: left !important;
  }

  .selectedCell:after {
    z-index: 2 !important;
    position: absolute !important;
    content: "" !important;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0 !important;
    background: rgba(200, 200, 255, 0.4) !important;
    pointer-events: none !important;
  }

  .column-resize-handle {
    position: absolute !important;
    right: -2px;
    top: 0;
    bottom: 0 !important;
    width: 4px !important;
    z-index: 20;
    background-color: #adf !important;
    pointer-events: none !important;
  }
}
.editor__content table th {
  height: 100%;
}

.tableWrapper {
  margin: 1em 0 !important;
  overflow-x: auto !important;
}

.resize-cursor {
  cursor: ew-resize !important;
  cursor: col-resize !important;
}
.menubar {
  margin: 0;
  padding: 0;
}
.editor__content .tableWrapper {
  margin: 0 !important;
}

.table-editor {
  display: table-row;
}
</style>
