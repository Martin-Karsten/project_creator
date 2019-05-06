<template>
    <div class="columns">
        <div class="column is-2 chart-default-component-list">
            <div class="list is-hoverable">
                <a class="list-item" @click="showLineChart">
                    LineChart
                </a>
                <a class="list-item" @click="showBarChart">
                    BarChart
                </a>
            </div>    
        </div>

        <div class="column chart-default-component-image-column is-8" @click="createChart">
            <img :src="currentChart">
        </div>
    </div>
</template>

<script>
import LineChart from '/home/martin/nuxt/larvel-nuxt/client/assets/Images/lineChart.png'
import BarChart from '/home/martin/nuxt/larvel-nuxt/client/assets/Images/barChart.png'

export default {
    props: ['index'],
    data(){
        return{
            currentChart: LineChart,
            lineChart: LineChart,
            barChart: BarChart
        }
    },
    methods: {
        createChart(){
            let payload = 
            {
                layoutRow: this.index
            }
            this.$store.commit('Layout/ADD_CHART', payload)
        },
        showLineChart(){
            this.currentChart = this.lineChart
            
        },
        showBarChart(){
            this.currentChart = this.barChart
        }
    },
}
</script>

<style>
div.chart-default-component-list{
    margin-top: 2rem;
    height: 38rem;
}
div.chart-default-component-image-column{
    transition: transform .2s; 
}
div.chart-default-component-image-column:hover{
    transform: scale(1.1);
}
</style>
