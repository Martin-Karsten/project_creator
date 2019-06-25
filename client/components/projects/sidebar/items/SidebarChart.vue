<template>
  <el-row class="sidebar-chart">
    <el-row>
      <el-col>
        <el-input
          :value="currentItem.chart_settings.title.text"
          placeholder="Chart Title"
          @input="updateTitle"
        />
      </el-col>
      <el-col>
        <el-input
          :value="currentItem.chart_settings.title.subtext"
          placeholder="Subtitle"
          @input="updateSubTitle"
        />
      </el-col>

      <el-col :span="18">
        <h3>Legend</h3>
      </el-col>
      <el-col :span="2">
        <el-checkbox class="sidebar-chart-legend-checkbox"
          :checked="currentItem.chart_settings.legend.show"
          @input="showLegend"
        />
      </el-col>

      <el-col>
        <hr class="def" >
      </el-col>
    </el-row>

    <el-row class="y-axis-title">
      <el-col :span="5">
        <h4 class="sidebar-axis-title">
          Y-Axis
        </h4>
      </el-col>
      <el-col :span="15">
        <el-input :value="currentItem.chart_settings.yAxis.name"
        placeholder="Title" @input="updateYAxisTitle" />
      </el-col>
      <el-col :span="4">
        <el-input
          type="number"
          :value="currentItem.chart_settings.yAxis.nameTextStyle.fontSize"
          min="0"
          max="30"
          @input="updateYAxisTitleSize"
        />
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="5">
        <h4 class="sidebar-axis-title">
          X-Axis
        </h4>
      </el-col>
      <el-col :span="15">
        <el-input :value="currentItem.chart_settings.xAxis.name"
        placeholder="Title" @input="updateXAxisTitle" />
      </el-col>
      <el-col :span="4">
        <el-input
          type="number"
          :value="currentItem.chart_settings.xAxis.nameTextStyle.fontSize"
          min="0"
          max="30"
          @input="updateXAxisTitleSize"
        />
      </el-col>
    </el-row>

    <el-collapse class="coordinates-collapse">
      <el-collapse-item title="Coordinates">
        <el-row 
          v-for="(series, index) in currentItem.chart_settings.series"
          :key="index"
        >
          <el-col :span="16" class="chart-line-name-input">
            <el-input 
              :value="currentItem.chart_settings.series[index].name"
              size="small"
              placeholder="Name"
              @input="updateSeriesName(index, $event)"
            />
          </el-col>
          <el-col :span="7" class="chart-line-name-input">
            <el-color-picker
              :value="currentItem.chart_settings.series[index].itemStyle.color"
              size="small"
              @input="updateSeriesColor(index, $event)"
            />
            <!-- <el-input :value="currentItem.chart_settings.series[index].itemStyle.color" size="small" placeholder="Color"></el-input> -->
          </el-col>
          <el-col>
            <el-collapse>
              <el-collapse-item title="Y-Axis">
                <el-row>
                  <el-col
                    v-for="(yItem, yIndex) in series.data"
                    :key="yIndex"
                    :span="4"
                  >
                    <el-input
                      size="small"
                      :value="yItem"
                      @input="updateYAxisValue(index, yIndex, $event)"
                    />
                  </el-col>
                </el-row>
              </el-collapse-item>

              <el-collapse-item title="X-Axis">
                <el-row>
                  <el-col
                    v-for="(xItem, xIndex) in currentItem.chart_settings.xAxis
                      .data"
                    :key="xIndex"
                    :span="4"
                  >
                    <el-input
                      size="small"
                      :value="currentItem.chart_settings.xAxis.data[xIndex]"
                      @input="updateXAxisValue(xIndex, $event)"
                    />
                  </el-col>
                </el-row>
              </el-collapse-item>
            </el-collapse>
          </el-col>
        </el-row>
        <el-col>
          <el-button size="mini" class="el-icon-plus" @click="addSeries" />
        </el-col>
      </el-collapse-item>
    </el-collapse>
  </el-row>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from "vuex"
// import debounce from "../../../../Helper/Project/LayoutHelper.js"
export default {
  data() {
    return {
      chartData: "",
      yAxisValue: "",
      newestSeries: "",
    }
  },
  computed: {
    ...mapGetters({
      currentItem: "Layout/getCurrentItem"
    })
  },
  mounted(){
  },
  methods: {
    updateTitle(event){
      let payload = {
        currentItem: this.currentItem,
        text: event
      }
      this.$store.commit("LayoutItems/Chart/UPDATE_TITLE", payload)
    },

    updateSubTitle(event) {
      let payload = {
        currentItem: this.currentItem,
        subtext: event
      }
      this.$store.commit("LayoutItems/Chart/UPDATE_SUBTITLE", payload)
    },

    showLegend() {
      let payload = {
        currentItem: this.currentItem
      }
      this.$store.commit("LayoutItems/Chart/SHOW_LEGEND", payload)
    },

    updateYAxisTitle(event){
      let payload = {
        currentItem: this.currentItem,
        name: event
      }
      this.$store.commit("LayoutItems/Chart/UPDATE_YAXIS_TITLE", payload)
    },

    updateXAxisTitle(event) {
      let payload = {
        currentItem: this.currentItem,
        name: event
      }
      this.$store.commit("LayoutItems/Chart/UPDATE_XAXIS_TITLE", payload)
    },

    updateYAxisTitleSize(event) {
      let payload = {
        currentItem: this.currentItem,
        fontSize: event
      }
      this.$store.commit("LayoutItems/Chart/UPDATE_YAXIS_TITLE_SIZE", payload)
    },

    updateXAxisTitleSize(event) {
      let payload = {
        currentItem: this.currentItem,
        fontSize: event
      }
      this.$store.commit("LayoutItems/Chart/UPDATE_XAXIS_TITLE_SIZE", payload)
    },

    updateYAxisValue(index, yIndex, event) {
      let payload = {
        currentItem: this.currentItem,
        index: index,
        yIndex: yIndex,
        value: event
      }
      this.$store.commit("LayoutItems/Chart/UPDATE_YAXIS_VALUE", payload)
    },

    updateXAxisValue(index, event) {
      let payload = {
        currentItem: this.currentItem,
        index: index,
        value: event
      }
      this.$store.commit("LayoutItems/Chart/UPDATE_XAXIS_VALUE", payload)
    },

    // updateXAxisValue: debounce(function(index, event) {
    //   let payload = {
    //     currentItem: this.currentItem,
    //     index: index,
    //     value: event
    //   }
    //   this.$store.commit("LayoutItems/Chart/UPDATE_XAXIS_VALUE", payload)
    // }, 250),

    addSeries(index) {
      let payload = {
        type: this.currentItem.chart_settings.series[0].type,
        index: this.currentItem.chart_settings.series.length,
        currentItem: this.currentItem
      }
      this.$store.commit("LayoutItems/Chart/ADD_SERIES", payload)
    },
    updateSeriesColor(index, event) {
      let payload = {
        index: index,
        currentItem: this.currentItem,
        color: event
      }
      this.$store.commit("LayoutItems/Chart/UPDATE_SERIES_COLOR", payload)
    },
    updateSeriesName(index, event) {
      let payload = {
        index: index,
        currentItem: this.currentItem,
        name: event
      }
      this.$store.commit("LayoutItems/Chart/UPDATE_SERIES_NAME", payload)
    },
  }
}
</script>

<style>
.sidebar-chart {
  padding-right: 0.25rem;
  padding-left: 0.25rem;
  height: 77.3vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}

.sidebar-chart-legend-checkbox{
  margin-top: 1.35rem;
}

.chart-line-name-input{
  margin-top: 0.5rem;
}

.el-input__inner {
  padding: 0 5px !important;
}
.sidebar-axis-title {
  margin-top: 15%;
}

.y-axis-title {
  margin-bottom: 0.25rem;
}

.x-axis-title {
  margin-top: 1rem;
  margin-bottom: 0.25rem;
}
</style>
