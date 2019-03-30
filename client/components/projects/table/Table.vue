<template>
  <div
   class="table-content editor"
  >
    <editor-menu-bar :editor="editor">
      <div
        class="menubar is-hide"
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
    <editor-content class="textfield editor__content" :editor="editor"/>

    <!-- <div>
      <pre><code>{{ html }}</code></pre>
    </div> -->
  </div>
</template>

<script>
import { Editor, EditorMenuBar, EditorContent } from 'tiptap'
import {
  HardBreak,
  Bold,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Table,
  TableHeader,
  TableCell,
  TableRow,
} from 'tiptap-extensions'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  props: ['content'],
  components: {
    EditorMenuBar,
    EditorContent,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new HardBreak(),
          new Bold(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
          new Table(),
          new TableHeader(),
          new TableCell(),
          new TableRow(),
        ],
		 content: `
            <table>
              <tr>
                <th colspan="3" data-colwidth="100,0,0">Wide header</th>
              </tr>
              <tr>
                <td>One</td>
                <td>Two</td>
                <td>Three</td>
              </tr>
              <tr>
                <td>Four</td>
                <td>Five</td>
                <td>Six</td>
              </tr>
            </table>
          `,
        onUpdate: ({ getJSON, getHTML }) => {
          this.json = getJSON()
          this.html = getHTML()
        },
        onBlur: () => {
        //   this.$store.commit('Textfield/UPDATE_TEXT', this.html)  
        },
      }),
      json: content,
      html: content,
    }
  },
  mounted() {
    // this.content
    this.json = this.content
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  methods: {
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

<style>
.table-content {
  width: 25%;
  height: 20%;
  position: absolute;
  pointer-events: auto;
  resize: none;
  background: transparent;
  overflow: hidden;
}

</style>
