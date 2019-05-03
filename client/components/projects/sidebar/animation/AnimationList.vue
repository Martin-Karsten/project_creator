<template>
<div class="list is-hoverable">
        <draggable>
              <a class="list-item is-active" v-for="(animation, index) in animationList" :key="index">
                  {{animation.animations.animation_order}}{{animation.animations.animation_name}}
            </a>
        </draggable>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import draggable from 'vuedraggable'
export default {
    components:{
        draggable
    },
    data(){
        return{
            list: []
        }
    },
    computed: {
        ...mapGetters({
            animationList: 'PresentationMode/getAnimationItmes'
        })
    },
    mounted(){
        this.$store.subscribe((mutation, state) => {
            switch(mutation.type){
                case 'Layout/ANIMATE':
                this.$store.commit('PresentationMode/ADD_ANIMATIONS',state.Layout.currentItem)
            }
        })
    },
    methods:{
    }
}
</script>

<style>

</style>
