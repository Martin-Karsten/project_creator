<template>
    <div>
        <div class="tabs sidebar-header">
            <!-- <div class="close" /> -->
            <fa class="show-scroller-chevron" ref="showScrollerChevron" icon="chevron-right" @click="showScroller" />
            <ul>
                <li @click="showStart" :class="{'is-active' : defaultTabActive}"><a> <span> <fa icon="stream"></fa> </span> </a></li>
                <li @click="showColorEdit" :class="{'is-active' : colorTabActive}"><a> <span> <fa icon="fill-drip"></fa> </span> </a></li>
                <li @click="showLinesEdit" :class="{'is-active' : linesTabActive}"><a> <span> <img class="sidebar-tab-image" src="../navbar/border-style.svg"> </span> </a></li>
                <li @click="showAnimation" :class="{'is-active' : animationTabActive}"> <a> <span> <fa icon="play-circle"></fa> </span> </a> </li>
            </ul>
        </div>    

        <component :is="currentComponoent"></component>
        
    </div>
</template>

<script>
import { Sketch } from 'vue-color'
import { mapGetters } from 'vuex'
import SidebarDefault from './SidebarDefault'
import EditColor from './format/EditColor'
import EditLines from './format/EditLines'
import SidebarAnimation from './animation/SidebarAnimation'

export default {
 components: {
     'sketch-picker': Sketch,
     'sidebar-default' : SidebarDefault,
     'edit-color': EditColor,
     'edit-lines' : EditLines,
     'sidebar-animation' : SidebarAnimation
 },
 data(){
     return{
         currentComponoent: 'sidebar-default',
         sidebarDefault: 'sidebar-default',
         editColor: 'edit-color',
         editLines: 'edit-lines',
         sidebarAnimation: 'sidebar-animation',
         scrollerActivated: false,
         defaultTabActive: true,
         colorTabActive: false,
         linesTabActive: false,             //lines not line !
         animationTabActive: false,
     }
 },
 computed:{
    ...mapGetters({
        col: 'Layout/getCurrentItem'
    })
 },
  methods:{
    showScroller(){
        this.scrollerActivated = !this.scrollerActivated
        if(this.scrollerActivated)
            this.$refs.showScrollerChevron.style.transform = "rotate(45deg)"
        else
            this.$refs.showScrollerChevron.style.transform = "rotate(0deg)"
        this.$store.commit('Sidebar/ACTIVATE_SCROLLER')
    },
    showStart(){
        this.currentComponoent = this.sidebarDefault
        this.defaultTabActive = true
        this.colorTabActive = false
        this.linesTabActive = false
        this.animationTabActive = false
    },
    showColorEdit(){
        this.currentComponoent = this.editColor
        this.defaultTabActive = false
        this.colorTabActive = true
        this.linesTabActive = false
        this.animationTabActive = false
    },
    showLinesEdit(){
        this.currentComponoent = this.editLines
        this.defaultTabActive = false
        this.colorTabActive = false
        this.linesTabActive = true
        this.animationTabActive = false
    },
    showAnimation(){
        this.currentComponoent = this.sidebarAnimation
        this.defaultTabActive = false
        this.colorTabActive = false
        this.linesTabActive = false
        this.animationTabActive = true      
    }
  }
}
</script>

<style>
    .show-scroller-chevron{
        position: absolute !important;
        right: 10px;
        top: 10px;
        width: 30px;
        height: 30px;
        opacity: 1;
    }
    img.sidebar-tab-image{
        width: 22px;
        height: 22px;
    }
    div.sidebar-header{
        position: relative;
        font-size: 20px !important;
        margin-bottom: 0.5rem !important;
    }
    aside.sidebar-header-content{
        font-size: 20px !important;
    }
    div.sidebar-content-item{
        padding-bottom: 0 !important;
    }
    div.sidebar-header-radios{
        padding-left: 2rem;
    }
    div.sidebar-header-radio-item1{
        padding-bottom: 0
    }
    div.sidebar-header-radio-item2{
        padding-top:0;
    }
    div.sidebar-color-settings {
        margin-top: 1rem;
        padding-left: 2rem;
        font-size: 18px !important;
    }
</style>
