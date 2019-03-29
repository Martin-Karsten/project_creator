<template>
    <interact-panel class="textfield"
    :drag="true"
    :isSnappable="false"
    >
    <div class="text-editor interact"
    v-for="text in textfields[index]" :key="text[index]" 
         v-bind:id="text.id" v-bind:dim="index"
    >
        <div id="the-ribbon">
            <button id="bold-button" class="button" title="Bold" @click="makeBold">Bold</button>
            <button id="italic-button" class="button" title="Italic" @click="makeItalic">Italic</button>
            <button id="sub-button" class="button" title="Sub" @click="makeSub">X</button>
            <button id="strike-button" class="button" title="Strike trough??" @click="makeStrike">X</button>
            <input id="font-color-button" class="input" title="Change Font Color" type="color">
            <input id="highlight-button" class="input" title="Highlight Text" type="color">
        </div>
        <div id="rich-text-area">
            <iframe v-bind:ref="'editor' + text.id"  name="editor" frameborder="0"></iframe>
        </div>
    </div> 
    </interact-panel>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import InteractPanel from '/home/martin/nuxt/larvel-nuxt/client/components/projects/interactPanel/InteractPanel.vue'
import interact from 'interactjs';
export default {
components: {
      'interactPanel': InteractPanel,
  },
props: ['index'],
data() {
    return {
        
    }
},
computed: {
    ...mapGetters({
    textfields: 'Textfield/getTextfields',
    })
  },
mounted() {
    this.activateEditor();
},
methods : {
    activateEditor() {
        console.log(this.$refs)
        editor.document.designMode = "on"
    },
    makeBold() {
        editor.document.execCommand("Bold")
    },
    makeItalic() {
        editor.document.execCommand("Italic")
    },
    makeSub() {
        editor.document.execCommand("Sub")
    },
    makeStrike() {
        editor.document.execCommand("Strike")
    }
}
}
</script>

<style>
div.text-editor {
    margin: 0 auto;
    width: 500px;
    height: 250px;
    position: absolute;
}
div#the-ribbon {
    border-bottom: none;
    padding: 10px;
    background-color: darkgreen;
    color: white;
}
div#rich-text-area {
    border: 2px solid;
    height: 100%;
    width: 490;
}
iframe#the-editor {
    width: 100%;
    height: 100%;
}

div#the-ribbon > button:hover {
    background-color: blanchedalmond;
    transition: all 0.3 s linear 0s;
}

input[type="color"]{
    border: none;
    outline: none;
    background-color: transparent;
}
</style>
