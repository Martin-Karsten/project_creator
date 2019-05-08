<template>
    <chart :options="pie" ref="pie" @click="setCurrentItem" @contextmenu="openContextMenu" autoresize></chart>
</template>

<script>
    import ECharts from 'vue-echarts/components/ECharts.vue'
    import 'echarts/lib/chart/pie'
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/title'
    
    import { mapGetters } from 'vuex';

    export default {
        props: ['width', 'height', 'layoutRow', 'row'],
        name: 'piechart',
        components: {
            chart: ECharts
        },
        data () {
            return {
                w: this.width,
                h: this.height,
                pie: {
                    title: {
                        text: '某站点用户访问来源',
                        subtext: '纯属虚构',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 335, name: '直接访问'},
                            {value: 310, name: '邮件营销'},
                            {value: 234, name: '联盟广告'},
                            {value: 135, name: '视频广告'},
                            {value: 1548, name: '搜索引擎'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                    ]
                }
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
              this.$refs.pie.resize(opts)
            },
            setCurrentItem(){
                let payload = {
                layoutRow: this.layoutRow,
                itemRow: this.row,
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
                layoutRow: this.layoutRow,
                itemRow: this.row,
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