<template>
  <!-- Side navigation -->
<div>
    <aside class="is-fullheight is-hidden-mobile sidebar">
    <ul class="menu-list">
      <li>
        <fa class="show-scroller-chevron" icon="chevron-right" @click="showScroller" />
        <a href="#" class="">
          <span class="icon"><i class="fa fa-home"></i></span> Home
        </a>
      </li>
      <li>
        <a href="#" class="is-active">
          <span class="icon"><i class="fa fa-table"></i></span> Links
        </a>
      </li>
      <li>
        <a href="#" class="">
          <span class="icon"><i class="fa fa-info"></i></span> About
        </a>
      </li>
    </ul>
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
        scrollerActivated: false,

    }
  },
  computed: {
    ...mapGetters({

    }),

  },

methods: {
    showScroller() {
      this.scrollerActivated = !this.scrollerActivated
      this.$emit('clicked', this.scrollerActivated)
    },
  },
}
</script>

<style>

aside.sidebar{
  padding: 1.5rem 1.5rem;
  height: 100%;
  width: 310px;
  transition: 0.3s;
}

</style>
