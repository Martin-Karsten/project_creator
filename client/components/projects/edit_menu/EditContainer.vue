<template>
        <div class="edit-container">
            <component :is="currentContainer.name"></component>
        </div>
</template>

<script>
import { mapGetters } from 'vuex'
import unsplash from '../../../apis/unsplash/unsplash.js'
import WebImageContainer from './web_image/WebImageContainer'
import ChartContainer from './chart/ChartContainer'
import WebVideoContainer from './web_video/WebVideoContainer'
export default {
    components: {
        WebImageContainer,
        ChartContainer,
        WebVideoContainer
    },
    data(){
        return {
            webImageComponent: 'WebImageContainer',
            WebVideoComponent: 'WebVideoContainer',
            chartContainer: 'ChartContainer'
        }
    },
    computed:{
        ...mapGetters({
            currentContainer: 'EditContainer/getEditContainer'
        })
    },
    methods:{
        closeUrlInput(){
            
        }
    }
}
</script>

<style>
div.edit-container {
    width: 55rem;
    height: 39.5rem;
    position: fixed;
    top: 33%; 
    left: 42%;
    margin-top: -100px;
    margin-left: -150px;
    background-color: #efeded;
    border-radius: 5px;
    text-align: center;
    z-index: 11; /* 1px higher than the overlay layer */
    padding-top: 0rem;
    padding-bottom: 1.5rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
}


</style>
