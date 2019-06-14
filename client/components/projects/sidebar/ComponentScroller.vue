<template>
  <draggable
    v-model="layout"
    class="scroll-group"
    handle=".scroll-handle"
    id="test"
  >
    <a
      v-for="(element, index) in layout"
      :key="element"
      :class="[layoutSet[index].active ? activeClass : '', notActiveClass]"
      @contextmenu.prevent="openContextMenu(element)"
      @click="setCurrentLayout(element, index)"
      v-scroll-to="{ element: '#item' + element, duration: 75 , container: '.grid-items', easing: 'ease',}"
    >
      
      <img :src="layoutSet[index].scrollImage" alt="" class="layout-item-image">
      <div class="scroll-handle" />
    </a>
  </draggable>
</template>

<script>
import ScrollTo from '~/plugins/vue-scrollto'
import axios from 'axios'
import draggable from "vuedraggable"
import domtoimage from 'dom-to-image';
import { mapGetters } from "vuex"
import defImage from './new-page.png'
export default {
  components: {
    draggable
  },
  props: ["newItem"],
  data() {
    return {
      layoutReady: "LayoutHelpers/getReady",
      activeClass: 'scroll-item-active',
      notActiveClass: 'scroll-item',
      defaualtImage: defImage,
      images: [],
      updateImage: ''
    }
  },
  computed: {
    ...mapGetters({
      projectId: "Layout/getProjectId",
      layoutSet: "Layout/getLayoutSet"
    }),
    layout: {
      get() {
        return this.$store.getters["Layout/getLayoutList"]
      },
      set(value) {
        this.$store.commit("Layout/UPDATE_LAYOUT", value)
      }
    }
  },
  async mounted (){
      let that = this
      await this.$store.dispatch("Layout/initialize", this.$route.params)
      .then((response) =>{
        for(let l of response){
          let element = document.getElementById('item' + l)
          domtoimage.toPng(element)
          .then(function (dataUrl) {
            that.$store.commit('Layout/SET_LAYOUT_SCROLL_IMAGES', {id: l, scrollImage: dataUrl})
          })
          .catch(function (error) {
              console.error('domtoimage error!', error);
          });
        }
      })

    this.$store.subscribe((mutation, state) => {
      switch(mutation.type){
        case 'Layout/ADD_ITEM' :
          this.$store.commit('Layout/ADD_SCROLL_IMAGE', this.defaualtImage)
      }
    })
  },
  methods: {
    setCurrentLayout(el, index){
      this.$store.commit('Layout/SET_CURRENT_LAYOUT', el)

      let that = this
      for(let l of this.layout){
        let element = document.getElementById('item' + l)
        domtoimage.toPng(element)
        .then(function (dataUrl) {
          that.$store.commit('Layout/SET_LAYOUT_SCROLL_IMAGES', {id: l, scrollImage: dataUrl})
        })
        .catch(function (error) {
            console.error('domtoimage error!', error);
        });
      }
    },
    openContextMenu(element){
      let payload = {
        name: "SidebarScrollerContextMenu",
        x: event.pageX + 50 + "px",
        y: event.pageY + 50 + "px",
        element: element
      }
      this.$store.commit('Layout/SET_CURRENT_LAYOUT', element)
      this.$store.dispatch('ContextMenus/ContextMenu/openSidebarScrollerContextMenu', payload)
    }
  }
}
</script>

<style>
.component-scroller {
  /* margin-top: 1rem; */
  border-right: 1px solid black;
}

div.scroll-group {
  height: 640px;
}

a.scroll-item {
  /* background: lightgray; */
  height: 22%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: block;
  position: relative;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

a.scroll-item-active {
  /* background: lightgray; */
  height: 22%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: block;
  position: relative;
  border: 5px solid lightblue;
}

.layout-item-image{
  width: 100%;
  height: 100%;
}

div.scroll-handle {
  background: black;
  opacity: 0.25;
  width: 2.2rem;
  height: 2.2rem;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: move;
}
</style>
