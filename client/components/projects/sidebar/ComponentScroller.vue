<template>
    <!-- <el-aside class="component-scroller"> -->
        <!-- <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"> -->
            <draggable
                v-model="layout"
                class="scroll-group"
                ghost-class="ghost"
                handle=".scroll-handle"
            >
                <a
                v-for="element in layout"
                :key="element.id"
                :href="'#item' + element.id"
                class="scroll-item"
                >
                <div class="scroll-handle" />
                </a>
            </draggable>
        <!-- </el-menu>  -->
    <!-- </el-aside> -->
</template>


<script>
import draggable from 'vuedraggable'
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
export default {
    props: ['newItem'],
    components: {
        draggable
    },
    data (){
        return{
            isCollapse: false
        }
    },  
    computed: {
        layout: {
        get() {
            return this.$store.getters['Layout/getLayoutList']
        },
        set(value) {
            this.$store.commit('Layout/UPDATE_LAYOUT', value)
            }
        },
    },
    async mounted() {
    // if(this.$route.params != null){
        await this.$store.dispatch('Layout/initialize', this.$route.params)
        // .then((res) =>{
        //     console.log('res', res)
        // })
    // }
    // await this.$store.dispatch('Textfield/fetchTextfields', this.$route.params)
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    } 
}
</script>

<style>

.component-scroller{
    /* margin-top: 1rem; */
    border-right: 1px solid black;
}

div.scroll-group{
    height: 640px;
}

a.scroll-item {
    background: lightgray;
    height: 22%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: block;
    position:relative;
}

div.scroll-handle {
  background: black;
  opacity: 0.25;
  width: 2.2rem;
  height: 2.2rem;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: move;
}

</style>
