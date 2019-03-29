<template>
  <!-- Side navigation -->
  <div>
    <!-- <sidebar-header></sidebar-header> -->
    <aside class="columns is-gapless container sidebar" id="sidebar" ref="sidebar">
      <div class="column sidebar-content">
        <div class="buffer"></div>
        <component :is="comp[index].name"></component>
      </div>
      <div class="column is-4" id="component-scroller" v-show="showScroller">
          <no-ssr>
          <grid-layout :layout.sync="layout" id="side-grid" 
            :col-num="1"
            :row-height="10"
            :is-overlappable="false"
            :is-draggable="true"
            :is-resizable="false"
            :vertical-compact="true"
            :use-css-transforms="true"
            :responsive="false"
            :margin="[10, 10]"
                         
            >
                <grid-item v-for="item in layout" :key="item.i" class="side-grid-item" 
                           :x="item.x"
                           :y="item.y"
                           :w="item.w"
                           :h="item.h"
                           :i="item.i"
                           v-bind:id="item.i"
                >
                {{item.i}}  
                </grid-item>
              </grid-layout>
          </no-ssr>
      </div>
        <div class="colum scroller-arrow" @click="showComponentScroller">
          <fa icon="chevron-right" class="arrow-right"/>
        </div>
    </aside>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import SidebarHeader from './SidebarHeader'
import SidebarDefault from './SidebarDefault'
import SidebarTextfield from './SidebarTextfield'
import SidebarImage from './SidebarImage'
import SidebarCharts from './SidebarCharts'
import SidebarTables from './SidebarTables'
import SidebarLayouts from './SidebarLayouts'
import ComponentScroller from './ComponentScroller'
export default {
  components: {
    'sidebarHeader' : SidebarHeader,
    'sidebarDefault' : SidebarDefault,
    'sidebarTextfield' : SidebarTextfield,
    'sidebarImage' : SidebarImage,
    'sidebarCharts' : SidebarCharts,
    'sidebarTables' : SidebarTables,
    'sidebarLayouts' : SidebarLayouts,
    'componentScroller' : ComponentScroller,
  },
  data: function(){
    return{
        margin: [10, 10],
        layout: [  
                {"x":0,"y":0,"w":5,"h":5,"i":"0"},
                {"x":0,"y":5,"w":5,"h":5,"i":"1"},
                ],
        newY: 5,
        showScroller: false,
    }
  },
  computed: {
    ...mapGetters({
    comp: 'sidebar-default/getSidebar',
    index: 'sidebar-default/getIndex',
    SidebarScroller: 'sidebar-default/getSidebarScroller',
    }),
    count () {
      return this.SidebarScroller.length
    }
  },

methods: {
    showComponentScroller(){
    if(!this.showScroller){
    this.showScroller = true
    document.getElementById("sidebar").style.width = "550px";
    document.getElementById("project").style.marginLeft = "550px";
    }else{
      this.showScroller = false
    document.getElementById("sidebar").style.width = "350px";
    document.getElementById("project").style.marginLeft = "350px";
    }
    }
  },
  watch: {
    count: function(newCount, oldCount) {
      this.layout.push({"x":0, "y":this.layout[this.layout.length-1].y + 5, "w":5, "h":5, "i":"2"},)
      console.log(this.layout)
    }
  }
}
</script>

<style>
/* The sidebar menu */

.sidebar{
  height: 100%;
  width: 340px;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  /* padding-top: 80px; */
  margin-right: 1rem;
  transition: 0.3s;
  border-right: 2px solid black;
}

div.buffer {
  margin-top: 160px;
}

#component-scroller {
  margin-top: 163px;
  /* border-left: 2px solid black; */
  border: 1px solid black;
  border-bottom: none;
}
div.scroller-arrow {
  cursor: pointer;
}

.arrow-right {
  font-size: 20px;
  margin-top: 300px;
}

#side-grid {
  margin-left: 0.75rem;
}

div .sidebar-item {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
  cursor: pointer;
}

.div .open-sidebar {
  background-color: beige
}

.outer {
  display: table;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 350px;
}

.middle {
  display: table-cell;
  vertical-align: middle;
}

.project {
    transition: margin-left .5s;
    padding: 20px;
}
</style>
