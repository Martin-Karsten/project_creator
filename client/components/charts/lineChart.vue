<template>
  <v-chart :options="option"/>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/axisPointer'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'zrender/lib/svg/svg'

export default {
  components: {
    'v-chart': ECharts

  },
  props: {
    option: { default: null }
  },
  data: function () {
    return {

    }
  }
}
</script>
