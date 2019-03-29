<template>
    <div class="sidebar-default">
      <a id="sidebarTextfield" class="sidebar-item" @click="switchToComponent">SAVE</a>
      <a id="sidebarTextfield" class="sidebar-item" @click="switchToComponent">Text</a>
      <a id="sidebarImages" class="sidebar-item" @click="switchToComponent">Images</a>
      <a id="sidebarCharts" class="sidebar-item" @click="switchToComponent">Charts</a>
      <a id="sidebarTables" class="sidebar-item" @click="switchToComponent">Tables</a>
      <a id="sidebarLayouts" class="sidebar-item" @click="switchToComponent">Layouts</a>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default{
    data: function() {
        return{
            components: ['sidebarTextfield', 'sidebarImages', 'sidebarCharts', 'sidebarTables', 'sidebarLayouts']
        }
    },
    methods: {
        switchToComponent(e){
            this.$store.commit('sidebar-default/SWITCH_COMPONENT',  e.currentTarget.id)
        }
    }
}
</script>