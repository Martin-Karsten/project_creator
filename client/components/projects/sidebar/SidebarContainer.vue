<template>
<div>
    <el-tabs class="sidebar-tabs" type="card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane class="sidebar-tab" v-for="item in tabItems" :key="item.componentName"
            :label="item.name"
            :name="item.name">
            <!-- <span slot="label"><i class="el-icon-date"></i> Route</span> -->
            <span slot="label"> 
                <fa v-if="item.icon != 'sidebar-tab-image'" :icon="item.icon" /> 
                <img v-else class="custom-sidebar-tag-image" src="../navbar/border-style.svg">
            </span>
            <el-menu 
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#edeeef"
            text-color="#fff"
            active-text-color="#ffd04b"
            >
                <component :is="currentComponent"></component>
            </el-menu>
        </el-tab-pane>
    </el-tabs>

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
         test: 'font',
         activeName: 'first',
         currentComponent: 'sidebar-default',
         tabItems: [{name: 'first', componentName: 'sidebar-default', icon: 'stream'},
                    {name: 'second', componentName: 'edit-color', icon: 'fill-drip'},
                    {name: 'third', componentName: 'edit-lines', icon: 'sidebar-tab-image'}],
         tabIcon: ''
     }
 },
 computed:{
    ...mapGetters({
        currentItem: 'Layout/getCurrentItem'
    }),
    iconClass: function(obj){
        switch(obj.name){
            case 'font':
                return obj.name
            case 'chart-bar':
                return obj.name
        }
    }
 },
 watch: {
     currentItem: function (newVal) {
         let newArr = [...this.tabItems]
         switch(newVal.itemName){
             //tab items does not exist yet -> push new item to tabs
             case 'textfields':
             if(this.tabItems[1].icon === 'fill-drip'){
                this.tabItems.splice(1, 0,{name: 'forth', componentName: 'SidebarTextfield', icon: 'font'})
                break;
             }
            //tab item already exists -> replace with current item
            else{
                newArr[1].icon = 'font'
                this.tabItems = newArr
                break;
            }
         }
         switch(newVal.itemName){
             case 'charts':
             if(this.tabItems[1].icon ==='fill-drip'){
                this.tabItems.splice(1, 0, {name: 'forth', componentName: 'ChartdSidebar', icon: 'chart-bar'})
                break;
             }

            else{
                newArr[1].icon = 'chart-bar'
                this.tabItems = newArr
                break;
            }
         }
     }
},
  methods:{
    handleClick(tab){
        console.log(tab.name)
        switch(tab.name){
            case "first":
            this.currentComponent = 'sidebar-default'
            break;

            case 'second':
            this.currentComponent = 'edit-color'
            break;

            case 'third':
            this.currentComponent ='edit-lines'

            case 'forth':
        }
    },
    showScroller(){
        this.scrollerActivated = !this.scrollerActivated
        if(this.scrollerActivated)
            this.$refs.showScrollerChevron.style.transform = "rotate(45deg)"
        else
            this.$refs.showScrollerChevron.style.transform = "rotate(0deg)"
        this.$store.commit('Sidebar/ACTIVATE_SCROLLER')
    },
  }
}
</script>

<style lang="scss">
.el-menu-vertical-demo{
    height: 77.1vh;
}
.sidebar-tabs{
    border-right: 1px solid black;
    background: #f4f5f5;
}

.el-tabs__nav-scroll{
    background-color:#edeeef;
}

.custom-sidebar-tag-image{
    width: 15.75px;
    height: 14px;
}
</style>
