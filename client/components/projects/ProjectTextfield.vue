<template>
  <section class="project-textfield" v-bind:class="boxNumber" id="content" @click="changeSidebarField">
    <div class="quill-editor" v-bind:class="boxNumber" v-for="editor in editorSettings" v-bind:key="editor"
         :disabled="false"
         @change="onEditorChange($event)"
         @blur="onEditorBlur($event)"
         @focus="onEditorFocus($event)"
         @ready="onEditorReady($event)"
         v-quill:myQuillEditor="editor">
        {{editorSettings}}
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    props:['boxNumber'],
    data () {
      return {
        content: '<p>I am Example</p>',
        editorOption: {
          // some quill options
          modules: {
            toolbar: false
          }
        },
        editorSet:[{          modules: {
            toolbar: false
          }},
          {          modules: {
            toolbar: false
          }} ],
        selection: {index: 0, length: 0}
      }
    },
    computed: {
    ...mapGetters({
      editorIndex: 'sidebar-default/getIndex',
      editorSettings: 'EditorSettings/getEditorSettings',
      settings: 'EditorSettings/getSettings',
      ct: 'EditorSettings/getContent',
      fontColor: 'EditorSettings/getFontColor',
      isBold: 'EditorSettings/getIsBold',
      isUnderline: 'EditorSettings/getIsUnderline'
      })
    },
    methods: {
      changeSidebarField(){
        let test = event.currentTarget.classList
        let n = test[1]
        console.log(n)
        //TODO: hier stimmt id=n nicht?
        let payload = {id: n, name: 'sidebarTextfield'}
        this.$store.dispatch('sidebar-default/switch_component', payload)
      },
      onEditorBlur(editor) {

      },
      onEditorFocus(editor) {
        let range = this.myQuillEditor.getSelection();
        this.selection.index = range
        this.selection.length = range.length
        // if(this.isBold){
        //   this.makeBold(range.index, range.length)
        //   console.log(range)
        // }
        console.log(range)
      },
      onEditorReady(editor) {
        //this.myQuillEditor.formatText(0, 5, 'bold', true);
      },
      onEditorChange({ editor, html, text }) {
        this.content = html
      },
      makeBold(index, length, bold){
        this.myQuillEditor.formatText(index, length, 'bold', bold)
        this.$store.commit('EditorSettings/ACTIVATE_BOLD', false)
      }
    },
    watch: {
      isBold: function makeBold(params) {
        console.log(this.myQuillEditor)
        let range = this.myQuillEditor.getSelection()
        console.log(range)
        this.myQuillEditor.formatText(0,1, 'bold', true) 
        this.$store.commit('EditorSettings/ACTIVATE_BOLD', false)
      },
      isCursive: function makeCursive(params){

      },
      isUnderline: function makeUnderlin(params){
        let range = this.myQuillEditor.getSelection()
        this.myQuillEditor.formatText(range.index, range.length, 'underline', true) 
        this.$store.commit('EditorSettings/ACTIVATE_UNDERLINE', false)
      },
      fontColor: function setFontColor(params){
        let range = this.myQuillEditor.getSelection()
        this.myQuillEditor.formatText(range.index, range.length, 'color', this.fontColor) 
        //this.$store.commit('editor-settings/ACTIVATE_UNDERLINE', false)
        console.log(this.fontColor)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .quill-editor {
      max-height: 100%;
      height: 100%; 
      background: red;
      z-index: 10;
    }
</style>