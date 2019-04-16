<template>
            <draggable
                v-model="layout"
                class="item-group"
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

        }
    },  
    computed: {
        layout: {
        get() {
            return this.$store.getters['Layout/getLayout']
        },
        set(value) {
            console.log(value)
            this.$store.commit('Layout/UPDATE_LAYOUT', value)
        }
        },
    },
    async mounted() {
    // if(this.$route.params != null){
        await this.$store.dispatch('Layout/initialize', this.$route.params)
    // }
    // await this.$store.dispatch('Textfield/fetchTextfields', this.$route.params)
    },
    methods: {

    } 
}
</script>

<style>
div.test {
    width: 100px;
    height: 100px;
    background: blue;
    z-index: 100;
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
