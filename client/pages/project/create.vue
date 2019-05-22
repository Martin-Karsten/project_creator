<template>
    <el-container class="create-project">
        <template v-if="editMode">
            <el-aside class="project-sidebar" :width="sideBarWidth" :style="{display: dis, width: sideBarWidth}">
                <sidebar class="main-project-sidebar" @clicked="activateAnimationList" :style="{display: dis, width: sideBarWidth}"/>
            </el-aside>         
        </template>

        <transition name="fade" mode="in-out">
            <el-aside  class="animation-list" width="200px" v-show="false">
                <animation-list></animation-list>
            </el-aside>
        </transition>

        <transition name="fade">
            <el-aside class="component-scroller" width="200px" v-show="false">
                <component-scroller></component-scroller>
            </el-aside>
        </transition>

        <project class="project" :editMode="editMode"/>

        <template v-if="editContainer.activated">
            <edit-container v-show="editContainer.activated" ></edit-container>
        </template>
    </el-container>
</template>

<script>
import Project from '../../components/projects/Project'
import EditContainer from '../../components/projects/edit_menu/EditContainer'
import Sidebar from '../../components/projects/sidebar/Sidebar'
import ComponentScroller from '../../components/projects/sidebar/ComponentScroller'
import AnimationList from '../../components/projects/sidebar/animation/AnimationList'

import { mapGetters } from 'vuex'

export default {
    layout: 'project/project-default',
    middleware: 'auth',

    components: {
    Project,
    Sidebar,
    ComponentScroller,
    EditContainer,
    AnimationList
    },
    data(){
        return {
            activated : false,
            showAnimation: false,
            sideBarWidth: '350px',
            dis: 'none'
        }
    },
    computed: {
        ...mapGetters({
            sidebar: 'Sidebar/getSidebar',
            editContainer: 'EditContainer/getEditContainer',
            currentMode: 'PresentationMode/getCurrentMode',
            editMode: 'PresentationMode/getEditMode',
        })
    },
    mounted(){
        // this.dis = 'none'
    },
    watch:{
        editMode: function(newVal){
            if(newVal){
                this.sideBarWidth = '350px'
                this.dis = ''
            }
            else{
                this.sideBarWidth = '0px'
                this.dis = 'none'
            }
        }
    },
    methods: {
        onClickChild(){
        },
        closeContextMenu(){
            this.$store.dispatch('ContextMenus/ContextMenu/closeContextMenu')
        },
        activateScroller(value) {
            this.activated = value
        },
        activateAnimationList(value){
            this.showAnimation = value
        },
    }
}
</script>

<style>

.project{
}

.show-scroller-chevron {
    cursor: pointer;
}

</style>
