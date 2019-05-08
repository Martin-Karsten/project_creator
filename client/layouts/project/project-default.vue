<template>
  <el-container direction="vertical" class="layout" @click.native="closeContextMenu">
      <project-navbar/>
      <nuxt/>
  </el-container>
</template>

<script>

import '~/plugins/element-ui'
import ProjectNavbar from '~/components/projects/navbar/ProjectNavbar'
import { mapGetters } from 'vuex';

export default {  
  components: {
    ProjectNavbar
  },
  computed:{
    ...mapGetters({
      contextMenu: 'ContextMenus/ContextMenu/getContextMenu'
    })
  },
  methods:{
    closeContextMenu(){
      if(this.contextMenu.activated)
        this.$store.commit('ContextMenus/ContextMenu/CLOSE_CONTEXT_MENU')
    }
  }
}
</script>
