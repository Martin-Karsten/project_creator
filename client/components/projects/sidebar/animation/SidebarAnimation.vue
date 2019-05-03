<template>
    <aside class="menu">
        <div class="columns tot">
            <div class="column is-4">
                Animation
            </div>
            <div class="column">
                <div class="dropdown" :class="{'is-active' : showDropDown}" @click="show">
                    <div class="dropdown-trigger" >
                        <button class="button is-large" aria-haspopup="true" aria-controls="dropdown-menu2">
                        <!-- <span>Content</span> -->
                        <span class="icon">
                            <img src="./FadeIn.svg" alt="">
                        </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                        <div class="dropdown-content animation-icons columns is-multiline">
                            <div class="dropdown-item animation-icon column is-4" v-for="animation in animationList" :key="animation">
                                <img src="./FadeIn.svg" alt="">
                                <h1 class="title is-6 animation-dropdown-title">{{animation}}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default{
    data: function() {
        return{
            animationList: ['fadeIn', 'fadeOut', 'bounce', 'wobble', '5', '6'],
            showDropDown: false,
        }
    },
    computed:{
        ...mapGetters({
            currentItem: 'Layout/getCurrentItem'
        }),
        get(){
            
        }
    },
    watch:{
        currentItem: function(oldVal, newVal){
            if(oldVal.animated != newVal.animated){
                this.animationItems.push(newVal)
            }
        }
    },
    methods: {
        show(){
            this.showDropDown = !this.showDropDown
        }
    }
}
</script>

<style>
    div.tot{
        padding: 0.5em 0.75em !important;
    }
    div.animation-icons{
        width: 250px;
        height: 216px;
        overflow-x: scroll;
    }
    div.animation-icon{
        padding: 0.25rem !important;
        cursor: pointer;
    }
    h1.animation-dropdown-title{
        margin: 0 !important;
    }
</style>
