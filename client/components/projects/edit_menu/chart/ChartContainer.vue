<template>
    <div>
        <div class="tabs">
            <div class="close" @click="closeEditContainer" />
        <ul>
            <li :class="{ 'is-active': chartDefaultComponent.isActive }" @click="toChartDefault"><a>Chart</a></li>
        </ul>
        </div>
        
        <component :index="editContainer.row" :is="currentTab"></component>

    </div>
</template>

<script>
import ChartDefaultComponent from './ChartDefaultComponent'
import { mapGetters } from 'vuex';
export default {
    components:{
        ChartDefaultComponent
    },
    computed:{
        ...mapGetters({
            editContainer: 'EditContainer/getEditContainer'
        })
    },
    data(){
        return{
            currentTab: 'chartDefaultComponent',
            chartDefaultComponent: {name: 'chartDefaultComponent', isActive: true},
        }
    },
    methods:{
        toChartDefault(){

        },
        closeEditContainer(){
            this.$store.commit('EditContainer/CLOSE_EDIT_CONTAINER')
            this.currentTab = this.chartDefaultComponent.name
            this.chartDefaultComponent.isActive = true
        }
    }
}
</script>

<style>
.close {
  position: absolute !important;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
</style>
