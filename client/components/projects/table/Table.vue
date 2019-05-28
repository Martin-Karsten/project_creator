<template>
  <div class="table-editor">
    <editor-menu-bar :editor="editor">
      <div
        slot-scope="{ commands, isActive, focused }"
        class="menubar"
        :class="{ 'is-focused': focused }"
      >
        <div class="toolbar">
          <button class="menubar__button" @click="commands.undo">
            <h1>Undo</h1>
          </button>

          <button class="menubar__button" @click="commands.redo">
            <h1>Redo</h1>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <h1>Bold</h1>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <h1>Italic</h1>
          </button>

          <button
            class="menubar__button"
            @click="
              commands.createTable({
                rowsCount: 3,
                colsCount: 3,
                withHeaderRow: false
              })
            "
          >
            <fa icon="table" />
          </button>

          <span v-if="isActive.table()">
            <button class="menubar__button" @click="commands.deleteTable">
              <h1>Delete Table</h1>
            </button>
            <button class="menubar__button" @click="commands.addColumnBefore">
              <h1>Add Col</h1>
            </button>
            <button class="menubar__button" @click="commands.addColumnAfter">
              <h1>Add After</h1>
            </button>

            <button class="menubar__button" @click="commands.addRowBefore">
              <h1>Delete Col</h1>
            </button>
            <button class="menubar__button" @click="commands.addRowAfter">
              <h1>Add Row After</h1>
            </button>
            <button class="menubar__button" @click="commands.deleteRow">
              <h1>Delete Row</h1>
            </button>
          </span>
        </div>
      </div>
    </editor-menu-bar>

    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap"
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
  Strike,
  Underline,
  History
} from "tiptap-extensions"
export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  props: ["text"],
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
          new Table(),
          new TableHeader(),
          new TableCell(),
          new TableRow()
        ],
        onUpdate: ({ getJSON, getHTML }) => {},
        content: `
					${this.text}
					`
      })
    }
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
