<template>
    <div>
        <aside ref="contextMenu" :style="{top: contextMenu.style.top, left: contextMenu.style.left}" v-show="contextMenu.activated" class="context-menu">
            <ul class="menu-list">
                <li>
                <ul class="context-menu-list">
                    <li><a>Copy</a></li>
                    <li><a>Delete</a></li>
                    <li @click="openStartMenuAnimations"><a>Add Animation</a></li>
                    <li> <a>Format Form</a> </li>
                </ul>
                </li>
            </ul>
        </aside>
    </div>    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
data(){
    return{

    }
},
computed:{
    ...mapGetters({
        contextMenu: 'Contextmenus/WebImageContextMenu/getContextMenu'
    })
},
methods:{
    openStartMenuAnimations(){
        let payload = {name : 'StartMenuAnimations'}
        this.$store.dispatch('StartMenus/StartMenu/openStartMenu', payload)
    }
}
}
</script>

<style>

</style>
