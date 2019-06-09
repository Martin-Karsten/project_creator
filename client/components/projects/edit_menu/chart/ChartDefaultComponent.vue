<template>
  <el-row class="chart-default-component-list">
    <el-col :span="4">
      <el-menu mode="vertical" class="chart-default-component-menu">
        <el-menu-item index="1" @click="showLineChart">Line Chart</el-menu-item>
        <el-menu-item index="1" @click="showBarChart">Bar Chart</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20" class="chart-default-component-image-column"
    >
      <img :src="currentChart" class="chart-default-component-image"
      @click="createChart"      
      >
    </el-col>
  </el-row>
</template>

<script>
import LineChart from "/home/martin/nuxt/larvel-nuxt/client/assets/Images/lineChart.png"
import BarChart from "/home/martin/nuxt/larvel-nuxt/client/assets/Images/barChart.png"
import PieChart from "/home/martin/nuxt/larvel-nuxt/client/assets/Images/barChart.png"

export default {
  props: ["layoutId"],
  data() {
    return {
      currentChart: LineChart,
      lineChart: LineChart,
      barChart: BarChart,
      pieChart: PieChart
    }
  },
  methods: {
    createChart() {
      let payload = {
        layoutId: this.layoutId,
        name: "Chart Name?"
      }
      
      switch (this.currentChart) {
        case this.lineChart:
          payload.type = "line"
          payload.yAxis = { type: "category" }
          payload.xAxis = { type: "category" }
          this.$store.dispatch("LayoutItems/Chart/addLineChart", payload)
          break

        case this.barChart:
          payload.type = "bar"
          this.$store.dispatch("LayoutItems/Chart/addBarChart", payload)
          break

        case this.pieChart:
          payload.type = "pie"
          this.$store.dispatch("LayoutItems/Chart/addPieChart", payload)
          break
      }
    },
    showLineChart() {
      this.currentChart = this.lineChart
    },
    showBarChart() {
      this.currentChart = this.barChart
    },
    showPieChart() {
      this.currentChart = this.pieChart
    }
  }
}
</script>

<style>
div.chart-default-component-list {
  margin-top: 2rem;
}
.chart-default-component-menu{
  margin-top: 2rem;
}
div.chart-default-component-image-column {
  transition: transform 0.2s;
}
div.chart-default-component-image-column:hover {
  transform: scale(1.1);
}
img.chart-default-component-image{
  width: 95%;
  margin-bottom: 1rem;
}
</style>
