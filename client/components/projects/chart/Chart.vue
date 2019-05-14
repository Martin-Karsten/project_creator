<template>
    <chart :options="chart" ref="chart" @click="setCurrentItem" @contextmenu="openContextMenu" autoresize></chart>
</template>

<script>
    import ECharts from 'vue-echarts/components/ECharts.vue'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/chart/bar'
    import 'echarts/lib/chart/pie'
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/title'
    
    import { mapGetters } from 'vuex';

    export default {
        props: ['width', 'height',  'settings','layoutId', 'id'],
        components: {
            chart: ECharts
        },
        data () {
            return {
                w: this.width,
                h: this.height,
                chart: this.settings
            }
        },
        computed:{

        },
        mounted(){
        this.$store.subscribe((mutation, state) => {
            switch(mutation.type){
                case 'Layout/RESIZE_CHART_CONTAINER':
                this.w = mutation.payload.width
                this.h = mutation.payload.height
                this.resize(mutation.payload.width, mutation.payload.height)
                break;
            }
        },)
        },
        methods: {
            resize (w, h) {
              let opts = {width: w, height: h}
              this.$refs.chart.resize(opts)
            },
            setCurrentItem(){
                let payload = {
                layoutId: this.layoutId,
                id: this.id,
                itemName: 'charts'
                }
                this.$store.commit('Layout/SET_CURRENT_ITEM', payload)
            },
            openContextMenu(){
                let payload = {
                    name: 'ChartContextMenu',
                    x: event.pageX + 'px',
                    y: event.pageY + 'px',
                    row: this.row}

                let payload2 = {
                layoutId: this.layoutId,
                id: this.id,
                itemName: 'charts'
                }
                this.$store.commit('Layout/SET_CURRENT_ITEM', payload2)
                this.$store.dispatch('ContextMenus/ContextMenu/openContextMenu', payload)

            }
        }
    }
</script>

<style>
    .echarts {
        width: 100%;
        height: 100%;
    }
</style>