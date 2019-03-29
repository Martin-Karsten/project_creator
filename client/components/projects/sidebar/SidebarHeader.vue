<template>
<div class="test">
    <div class="sidebar-header level">
        <a class="box level-left" @click="previousComponent">
        <fa class="sidebar-header-left" icon="chevron-left" ></fa>
        </a>
        <a class="middle box">
          <fa id="sidebar-header-middle" class="sidebar-header-middle" v-bind:icon="i"></fa>
        </a>
        <a class="box level-right" @click="nextComponent">
        <fa class="sidebar-header-left" icon="chevron-right" ></fa>
        </a>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default{
    data: function() {
        return {
            i: 'cogs',
            count: 0,
            currentSidebarComponent: '',
            sidebarItems: ['sidebarDefault', 'sidebarTextfield', 'sidebarImages', 'sidebarCharts', 'sidebarTables', 'sidebarLayouts']
        }
    },
    methods: {
        changeIcon(){
            switch (this.currentSidebarComponent) {
            case 'sidebarDefault':
                this.i = "cogs";
                break;
            case 'sidebarTextfield':
                this.i = "font";
                break;
            case 'sidebarImages':
                this.i = "image";
                break;
            case 'sidebarCharts':
                this.i = "chart-bar";
                break;
            case 'sidebarTables':
                this.i = "table";
                break;
            case 'sidebarLayouts':
                this.i = "file-alt";
                break;
            case 6:
                day = "Saturday";
        }
        
        },
        nextComponent(){
            this.count++
            if(this.count >= this.sidebarItems.length)
                this.count = 0
            this.currentSidebarComponent = this.sidebarItems[this.count]
            this.changeIcon()
            this.$store.commit('sidebar-default/SWITCH_COMPONENT', this.sidebarItems[this.count])
        },
        previousComponent(){
            this.count--
            if(this.count < 0)
                this.count = this.sidebarItems.length-1
            this.currentSidebarComponent = this.sidebarItems[this.count]
            this.changeIcon()
            this.$store.commit('sidebar-default/SWITCH_COMPONENT', this.sidebarItems[this.count])
        }
    }
}
</script>

<style>
div .sidebar-header {
    font-size: 35px;
}

div .level-left {
    margin-left: 0.5rem;
}

div .level-right {
    margin-right: 0.5rem;
    margin-bottom: 1rem;
}


div .middle {
    font-size: 40px;
}

</style>
