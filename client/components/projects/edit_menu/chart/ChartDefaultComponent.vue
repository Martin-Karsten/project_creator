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

    <div
      class="column chart-default-component-image-column is-8"
      @click="createChart"
    >
      <img :src="currentChart">
    </div>
  </div>
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
  height: 38rem;
}
div.chart-default-component-image-column {
  transition: transform 0.2s;
}
div.chart-default-component-image-column:hover {
  transform: scale(1.1);
}
</style>
