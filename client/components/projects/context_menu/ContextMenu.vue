<template>
    <component :is="contextMenu.name"></component>
</template>

<script>
import { mapGetters } from 'vuex';
import WebImageContextMenu from './WebImageContextMenu' 
import TextfieldContextMenu from './TextfieldContextMenu'
export default {
    components: {
        WebImageContextMenu,
        TextfieldContextMenu
    },
    data(){
        return{
        }
    },
    computed:{
        ...mapGetters({
            contextMenu: 'Contextmenus/ContextMenu/getContextMenu',
        })
    },
    methods:{
        showContextMenu (event) {
              event.preventDefault();
              var menu = document.getElementById("div-context-menu");
              this.$refs.contextMenu.style.left = event.pageX + 'px'
              this.$refs.contextMenu.style.top = event.pageY + 'px'
        }
    }
}
</script>

<style>
aside.context-menu{
    position: fixed;
    top: 50%; 
    left: 50%;
    margin-top: -100px;
    margin-left: -150px;
    border-radius: 5px;
    text-align: center;
    z-index: 11; /* 1px higher than the overlay layer */
    background-color: white;
    border: black solid 1px;
}

ul.context-menu-list{
    border: black solid 1px !important;
    margin: 0 !important;
    margin: 0 !important;
}
</style>
