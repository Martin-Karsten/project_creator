<template>
    <div class="columns">
        <div class="column bar-chart">
            <bar-chart :option="option"  /> 
        </div>
        <div class="column bar-chart-input">
            <bar-chart-input @chartTitleChanged = "option.title.text = $event"
                             @chartSubtextChanged = "option.title.subtext = $event"
                             @yAxisTypeChanged = "option.yAxis[0].type = $event"
                             @xAxisTypeChanged = "option.xAxis[0].type = $event"
                             @xAxis = "option.xAxis[0].data = $event"
                             @plots = "option.series[0].data = $event"
            />
        </div>
    </div>
</template>

<script>
import BarChart from '../../components/charts/barChart.vue'
import BarChartInput from '../../components/charts/chartInput/barChartInput.vue'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/brush'
import 'echarts/lib/langEN'


export default {
    components: {
    'bar-chart': BarChart,
    'bar-chart-input': BarChartInput
    },
    data: function (){
        return {
            option: {
                title: {
                    text: '堆叠区域图',
                    subtext: 'subtext'
                },
                toolbox: {
                    feature: {
    magicType: {
      title: {
        line: 'Switch to Line Chart',
        bar: 'Switch to Bar Chart',
        stack: 'Stack',
        tiled: 'Tile'
      },
      type: ['stack']
    },
                            dataView: {
      title: 'Data View',
      lang: ['Data View', 'Close', 'Refresh']
    },
        saveAsImage: {
      title: 'Save as Image',
      lang: ['Right Click to Save Image']
    }
                    }
                    
                },
                
                tooltip: {},
                xAxis : [   
                {
                    type : 'category',
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
                ],
                yAxis : [
                    {
                        type : 'value',
                       
                    }
                ],
                series: [
                    {
                            name:'直接访问',
                            type:'bar',
                            barWidth: '25%',
                            data:[10, 52, 200, 334, 390, 330, 220]
                    },
                    {
                            name:'NO',
                            type:'bar',
                            barWidth: '25%',
                            data:[10, 52, 200, 334, 390, 330, 220]
                    },
                    {
                            name:'YES',
                            type:'bar',
                            barWidth: '25%',
                            data:[10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            }
        }
    }
}

</script>