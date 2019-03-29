<template>
    <div class="sidebar-textfield">
        <div class="columns is-centered is-vcentered">
            <div class="column is-3 is-offset-3 is-gapless">
                <b><p>Height</p></b>
                <input class="input" type="number" min="1" max="100" value="42">
            </div>
            <div class="column is-3 is-gapless">
                <b><p>Width</p></b>
                <input class="input" type="number" min="1" max="100" value="42">
            </div>
            <div class="column is-1">
                <div class="add-box" data-tooltip="Add new Textfield">
                    <a class="add-icon" @click="activateTextfieldBlockCreator">
                        <fa icon="plus-circle"/>
                    </a>
                </div>               
            </div>
        </div>
        <div class="columns is-variable is-3">
            <div class="column is-2 is-offset-4 "><button class="button is-light" @click="activateBold"> <fa icon="bold"/></button></div>
            <div class="column is-2 "> <button class="button is-light"><fa icon="italic"/></button> </div>
            <div class="column is-2 "> <button class="button is-light" @click="activateUnderline"><fa icon="underline"/></button> </div>
        </div>
        <div class="test columns is-gapless">
            <div class="column is-4">
                <h1 class="title is-3">Title:</h1>
            </div>
            <div class="column is-6">
                <input class="input" type="text" v-model="title">
            </div>
        </div>
        <div class="test columns is-gapless">
            <div class="column is-4">
                <h1 class="title is-3">Font:</h1>
            </div>
            <div class="column is-6">
                <input class="input" type="text" :value="fontType" @change="changeFontType">
            </div>
        </div>
        <div class="test columns is-gapless">
            <div class="column is-4">
                <h1 class="title is-5">Font Size:</h1>
            </div>
            <div class="column is-6">
                <!-- <input class="input" type="text" v-model="textfieldData[0].fontSize" @change="changeFontSize"> -->
                <input class="input" type="text" :value="fontSize" @change="changeFontSize">
            </div>
        </div>
        <div class="test columns is-gapless">
            <div class="column is-4">
                <h1 class="title is-5">Font Color:</h1>
            </div>
            <div class="column is-6">
                <input class="input" type="text" :value="fontColor" @change="changeFontColor">
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
    data(){
        return {
            fontSize: '',
            fontType: '',
            fontColor: 'black',
            title: '',
            font: ''
        }
    },
  created() {
    this.fontType = this.textfieldData[this.index].fontType
    this.fontSize = this.textfieldData[this.index].fontSize
    this.fontColor = this.textfieldData[this.index].fontColor
  },
    computed: {
    ...mapGetters({
    textfieldData : 'SidebarTextfield/getSidebarTextfield',
    index: 'SidebarTextfield/getIndex'
    }),
  },
    methods:{
        activateTextfieldBlockCreator(){
            let payload = {activated: true, boxName: 'projectTextfield'}
            this.$store.commit('box-current/SET_SIDEBAR_BOX_CREATOR', payload)
        },
        changeFontType(e){
            this.fontType = e.target.value
            let payload = e.target.value
            // this.$store.commit('editor-settings/SET_FONTSIZE', payload)
            this.$store.commit('SidebarTextfield/SET_FONTTYPE', payload)
        },
        changeFontSize(e){
            this.fontSize = e.target.value
            let payload = e.target.value
            // this.$store.commit('editor-settings/SET_FONTSIZE', payload)
            this.$store.commit('SidebarTextfield/SET_FONTSIZE', payload)
        },
        changeFontColor(e){
            this.fontColor = e.target.value
            let payload = e.target.value
            // this.$store.commit('editor-settings/SET_FONTSIZE', payload)
            this.$store.commit('SidebarTextfield/SET_FONTCOLOR', payload)
        },
        activateBold(){
            this.$store.commit('EditorSettings/ACTIVATE_BOLD', true)
        },
        activateCursive(){

        },
        activateUnderline(){
            this.$store.commit('editor-settings/ACTIVATE_UNDERLINE', true)
        }
    },
  watch: {
    index: function(newValue, oldValue) {
      this.fontType = this.textfieldData[newValue].fontType
      this.fontSize = this.textfieldData[newValue].fontSize
      this.fontColor = this.textfieldData[newValue].fontColor
    }
  }
}
</script>

<style>

a.add-icon{
    margin-left: 90%;
    font-size: 30px;
    z-index: 10;
}

h1{
    margin-top: 0.25rem;
}

div.add-box:after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 700%;
  left: 50%;
  background: #ffcb66;
  padding: 5px 15px;
  color: black;
  -webkit-border-radius: 10px;
  -moz-border-radius : 10px;
  border-radius : 10px;
  white-space: nowrap;
  opacity: 0;
  -webkit-transition: all 0.4s ease;
  -moz-transition : all 0.4s ease;
  transition : all 0.4s ease;
}
div.add-box:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-top: 20px solid #ffcb66;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  -webkit-transition: all 0.4s ease;
  -moz-transition : all 0.4s ease;
  transition : all 0.4s ease;
  opacity: 0;
  left: 30%;
  bottom: 90%;
}
div.add-box:hover:after {
  bottom: 77%;
}
div.add-box:hover:before {
  bottom: 74%;
}
div.add-box:hover:after, a:hover:before {
  opacity: 0.8;
}

div.icon-background{
    border-style: solid;
    border-radius: 4px;
    background: grey

}
</style>
