<template>
    <div class="container-fluid create-project" @click="closeContextMenu">
        <div class="columns">
            <sidebar class="column side is-2" @clicked="activateScroller"/>
            <transition name="fade-enter" mode="out-in">
            <div class="column is-1 scroller"  v-show="activated">
                <component-scroller></component-scroller>
            </div>
            </transition>
            <project class="column" />
            
        </div>
            <edit-container v-show="editContainer.activated" ></edit-container>

    </div> 
</template>

<script>
import Project from '../../components/projects/Project'
import EditContainer from '../../components/projects/edit_menu/EditContainer'
import Sidebar from '../../components/projects/sidebar/Sidebar'
import ComponentScroller from '../../components/projects/sidebar/ComponentScroller'

import { mapGetters } from 'vuex'

export default {
    layout: 'project/project-default',
    middleware: 'auth',

    components: {
    Project,
    Sidebar,
    ComponentScroller,
    EditContainer,
    },
    data(){
        return {
            activated : false,
        }
    },
    computed: {
        ...mapGetters({
            editContainer: 'EditContainer/getEditContainer',
        })
    },
    methods: {
        closeContextMenu(){
            this.$store.dispatch('Contextmenus/ContextMenu/closeContextMenu')
        },
        activateScroller(value) {
            this.activated = value
        },
    }
}
</script>

<style>

div.scroller {
    overflow-y: overlay;
    padding-left: 0;
    height: 710px;
}

div.side {
    border-right: 1px solid black;
}

.show-scroller-chevron {
    cursor: pointer;
}

</style>
