<template>

<div class="content default-box" v-bind:id="content" @click="selectBox">
    <section class="columns content-default is-centered is-vertical-center is-vcentered is-mobile" v-bind:class="boxNumber" id="content">
        <div class="column is-narrow is-mobile toolbox">
            <div class="tip" data-tooltip="Chart" @click="toChart" v-bind:id="boxNumber">
                <fa icon="chart-bar"/>
            </div>
            <div class="tip" data-tooltip="Image" @click="toImage" v-bind:id="boxNumber">
                <fa icon="image"/>
            </div>  
            <div class="tip" data-tooltip="Table" @click="toTable" v-bind:id="boxNumber">
                <fa icon="table" />
            </div>  
            <div class="tip" data-tooltip="Text" @click="toTxtField" v-bind:id="boxNumber">
                <fa icon="font"/>
            </div>
        </div>      
    </section>
</div>
</template>

<script>
export default{
    props:['boxNumber'],
    data(){
        return{
            content: "content",
            imgageAddActivated: false,
            file: ''
        }
    },
    methods: {
    selectBox(){

         let test = event.target.classList
         let n = test[6]
    },
    closeBox(){
        
        },
    toChart(event){
             let payload = {id: event.currentTarget.id, name: 'projectChart'}
             this.$store.commit('box-current/SWITCH_BOX', payload)
             let payload2 = {id: this.boxNumber, name: 'projectImage'}
        },
    toImage(event){
            //  let payload = {i: event.currentTarget.id, name: 'projectImage'}
            //  let payload2 = {id: this.boxNumber, name: 'sidebarImage'}
            //  this.$store.commit('box-current/SWITCH_BOX', payload)
            //  this.$store.commit('sidebar-default/SET_INDEX', this.boxNumber)
            //  this.$store.dispatch('sidebar-default/add_component', payload2)

            let payload = {i: this.boxNumber, name: 'projectImage'}
            // this.$store.commit('sidebar-default/SET_INDEX', this.boxNumber)
            // this.$store.dispatch('sidebar-default/add_component', payload)
            console.log(payload.name)
        },
    toTable(event){
            let payload2 = {id: this.boxNumber, name: 'projectImage'}
        },
    toTxtField(event){
             let payload = {i: event.currentTarget.id, name: 'projectTextfield'}
             this.$store.commit('box-current/add_box', payload)
             this.$store.commit('box-current/SWITCH_BOX', payload)
             this.$store.commit('EditorSettings/ADD_EDITOR', { modules: {toolbar: false} })
             let payload2 = {id: this.boxNumber, name: 'sidebarTextfield'}
             this.$store.commit('sidebar-default/SET_INDEX', this.boxNumber)
             this.$store.dispatch('sidebar-default/add_component', payload2)
        },
    }
} 
</script>

<style>

.is-vertical-center {
    position: absolute;
    top: 0;
    bottom: 0;  
}


div.toolbox {
    border-color: #000000;
    border: 1px solid;
    border-radius: 10px;
    font-size: 30px;
    cursor: pointer;
}

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
  cursor: pointer;
  margin: 0;
}

.upload-btn-wrapper input[type=file] {
  font-size: 38px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.image-button{
    background: red;
    position: relative;
}
</style>

