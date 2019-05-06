<template>
<div>
    <no-ssr>
    <component :is="startMenu.name" v-show="true"></component> 
    </no-ssr>
</div>
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
