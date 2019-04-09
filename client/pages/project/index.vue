<template>
    <div class="columns container-fluid create-project">
    
            <sidebar class="column side is-2" @clicked="activateScroller"/>
            <transition name="fade-enter" mode="out-in">
            <div class="column is-1 scroller"  v-show="activated">
                <component-scroller></component-scroller>
            </div>
            </transition>
            <project class="column"/>

    </div> 
</template>

<script>
import Project from '../../components/projects/Project'
import Sidebar from '../../components/projects/sidebar/Sidebar'
import ComponentScroller from '../../components/projects/sidebar/ComponentScroller'

export default {
    layout: 'project/project-default',
    middleware: 'auth',

    components: {
    'project': Project,
    'sidebar': Sidebar,
    ComponentScroller
    },
    data(){
        return {
            activated : false,
        }
    },
    created(){
        console.log(this.$route.params.id)
        console.log('test');
    },
    methods: {
        activateScroller(value) {
            this.activated = value
        }
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
