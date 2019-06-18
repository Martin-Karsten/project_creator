<template>
  <chart
    :ref="'chart' + id"
    :options="chart"
    autoresize
  />
</template>

<script>
import ECharts from "vue-echarts/components/ECharts.vue"
import "echarts/lib/chart/line"
import "echarts/lib/chart/bar"
import "echarts/lib/chart/pie"
import "echarts/lib/component/tooltip"
import "echarts/lib/component/legend"
import "echarts/lib/component/title"

import { mapGetters } from "vuex"

export default {
  components: {
    chart: ECharts
  },
  props: ["width", "height", "settings", "layoutId", "id"],
  data() {
    return {
      w: this.width,
      h: this.height,
      chart: this.settings
    }
  },
  computed: {},
  mounted() {
    this.$store.subscribe((mutation, state) => {
      // TODO triggers everytime, even if chart is another layout_item
      switch (mutation.type) {
        case "Layout/RESIZE_CHART_CONTAINER":
          if(mutation.payload.currentItem.id === this.id){
            this.w = mutation.payload.width
            this.h = mutation.payload.height
            this.resize(mutation.payload.width, mutation.payload.height, 'chart' + mutation.payload.currentItem.id)
            break
        }
          break
      }
    })
  },
  methods: {
    resize(w, h, id) {
      let opts = { width: w, height: h }
      this.$refs[id].resize(opts)
    },
  }
}
</script>

<style>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
