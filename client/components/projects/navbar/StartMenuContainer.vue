<template>
   <component :is="startMenu.name"></component> 
</template>

<script>
import StartMenuDefault from './StartMenuDefault'
import StartMenuAnimations from './StartMenuAnimations'
import { mapGetters } from 'vuex';
export default {
    components:{
        StartMenuDefault,
        StartMenuAnimations
    },
    data(){
        return{
        }
    },
    computed:{
        ...mapGetters({
            startMenu: 'StartMenus/StartMenu/getStartMenu'
        })
    }
}
</script>

<style>

</style>
