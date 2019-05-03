<template>
  <div>
    <sidebar-container></sidebar-container>
    <a class="clickable-border" @click="showAnimationList"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import SidebarContainer from './SidebarContainer'

export default {
  components: {
    SidebarContainer,

  },
  data: function(){
    return{
        scrollerActivated: false,
        animationListActivated: false,
    }
  },
  computed: {
    ...mapGetters({
        currentMode: 'PresentationMode/getCurrentMode'
    }),

  },

methods: {
    showAnimationList(){
      this.animationListActivated = !this.animationListActivated
      this.$emit('clicked', this.animationListActivated)
    },
  },
}
</script>

<style>
a.clickable-border{
  height: 50%;
  position: absolute;
  right: 0;
  border: black 2px solid;
  width: 1px;
  background-color: black;
  box-shadow: 0px 0px 5px 3px grey;
  cursor: pointer;
}
</style>
