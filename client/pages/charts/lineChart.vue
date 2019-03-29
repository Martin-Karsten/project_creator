<template>

  <div class="columns">
    <div class="column line-chart">
      <line-chart :option="option"/>
    </div>
    <div class="column line-chart-input">
      <line-chart-input @chartTitleChanged = "option.title.text = $event"
                        @chartSubtextChanged = "option.title.subtext = $event"
                        @AxisChanged = "option.series[0].data = $event"
                        @Axis1Changed = "option.series[1].data = $event"
                        @Axis2Changed = "option.series[2].data = $event"
                        @Axis3Changed = "option.series[3].data = $event"
                        @Axis4Changed = "option.series[4].data = $event"
                        @linesStacked = "option.series[0].stack = option.series[1].stack = option.series[2].stack = option.series[3].stack = option.series[4].stack = $event"
                        @linesFiled = "option.series[0].areaStyle = option.series[1].areaStyle = option.series[2].areaStyle = option.series[3].areaStyle = option.series[4].areaStyle = $event"
                        @linesSmoothed = "option.series[0].smooth = option.series[1].smooth = option.series[2].smooth = option.series[3].smooth = option.series[4].smooth = $event"/>
    </div>

  </div>

</template>

<script>
import LineChart from '../../components/charts/lineChart.vue'
import LineChartInput from '../../components/charts/chartInput/lineChartInput.vue'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'

export default {
  components: {
    'line-chart': LineChart,
    'line-chart-input': LineChartInput
  },
  data: function () {
    return {

      option: {
        title: {
          text: '堆叠区域图'
        },
        xAxis: {
          type: 'value',
          data: [0]
          //    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
        
        },
        toolbox: {
        show: true,
        feature: {
            saveAsImage: {show: true}
        }
    },
        series: [{
          data: [0],
          type: 'line',
          stack: false,
          smooth: false,
          areaStyle: null
        },
        {
          data: [0],
          type: 'line',
          stack: true,
          smooth: false,
          areaStyle: {}
        },
        {
          data: [0],
          type: 'line',
          stack: false,
          smooth: false,
          areaStyle: {}
        },
        {
          data: [0],
          type: 'line',
          stack: false,
          smooth: false,
          areaStyle: {}
        },
        {
          data: [0],
          type: 'line',
          stack: false,
          smooth: false,
          areaStyle: {}
        }
        ]
      }
    }
  }
}
</script>
