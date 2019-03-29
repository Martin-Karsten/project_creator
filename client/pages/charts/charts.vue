<template>

  <div class="columns">
    <div class="column">
      <line-chart/>
    </div>
    <div class="column">
      <bar-chart/>
    </div>
    <div class="column">
      <pie-chart/>
    </div>

  </div>

</template>

</script>

<style scoped>
div.echarts{

}
</style>

<script>
import LineChart from '../../components/charts/lineChart.vue'
import BarChart from '../../components/charts/barChart.vue'
import PieChart from '../../components/charts/pieChart'

export default {
  components: {
    'line-chart': LineChart,
    'bar-chart': BarChart,
    'pie-chart': PieChart

  },
  data: function () {
    let data = []

    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI
      let r = Math.sin(2 * t) * Math.cos(2 * t)
      data.push([r, i])
    }

    return {

    }
  },
  methods: {
  }
}
</script>
