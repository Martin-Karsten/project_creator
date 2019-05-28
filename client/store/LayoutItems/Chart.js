import Vue from "vue"

export const state = () => ({
  charts: {},
  colors: [
    "#c23531",
    "#2f4554",
    "#61a0a8",
    "#d48265",
    "#91c7ae",
    "#749f83",
    "#ca8622",
    "#bda29a",
    "#6e7074",
    "#546570",
    "#c4ccd3"
  ],
  lineColorIndex: [0]
})

// getters
export const getters = {
  getCharts: state => state.charts
}

// mutations
export const mutations = {
  SET_CHARTS(state, payload) {
    state.charts = payload
  },

  ADD_LINE_CHART(state, payload) {
    let length = Object.keys(state.charts).length

    let id = length + 1

    let obj = {
      [payload.layoutId]: {
        id: id,
        project_id: payload.projectId,
        name: "chart",
        background_color: "none",
        border_color: "black",
        border_style: "solid",
        animations: {},
        itemName: "charts",
        chart_settings: {
          id: id,
          chart_id: id,
          title: { text: "Your Chart", subtext: "Your Subtext", x: "center" },
          legend: {
            show: true,
            orient: "vertical",
            left: "right",
            data: ["1"]
          },
          // tooltip : {
          // },
          series: [
            {
              name: "1",
              type: "line",
              stack: "",
              itemStyle: { color: state.colors[state.lineColorIndex] },
              data: [0, 20, 40, 60, 80, 100, 0]
            }
          ],
          xAxis: {
            name: "",
            type: "category",
            nameGap: 25,
            nameTextStyle: { fontWeight: "bold", fontSize: 14 },
            nameLocation: "center",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          },
          yAxis: {
            name: "",
            nameGap: 25,
            nameTextStyle: { fontWeight: "bold", fontSize: 14 },
            type: "value",
            nameLocation: "center"
          }
        },
        border_width: 1,
        border_radius: 0,
        opacity: 1.0,
        top: 0,
        z_index: 1,
        left: 0,
        width: 400,
        height: 200
      }
    }

    console.log(state.charts)
    Vue.set(state.charts, id, obj[payload.layoutId])
  },

  ADD_BAR_CHART(state, payload) {
    let length = Object.keys(state.charts).length

    let id = length + 1

    let obj = {
      [payload.layoutId]: {
        id: id,
        project_id: state.projectId,
        name: "chart",
        background_color: "none",
        border_color: "black",
        border_style: "solid",
        animations: {},
        itemName: "charts",
        chart_settings: {
          id: id,
          chart_id: id,
          title: { text: "Your Chart", subtext: "Your Subtext", x: "center" },
          legend: {
            show: true,
            orient: "vertical",
            left: "left",
            data: ["1"]
          },
          tooltip: {},
          series: [
            {
              name: "1",
              type: "bar",
              stack: "",
              itemStyle: { color: state.colors[state.lineColorIndex] },
              data: [0, 20, 40, 60, 80, 100, 0]
            }
          ],
          xAxis: {
            name: "",
            type: "category",
            nameGap: 25,
            nameTextStyle: { fontWeight: "bold", fontSize: 14 },
            nameLocation: "center",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          },
          yAxis: {
            name: "",
            nameGap: 25,
            nameTextStyle: { fontWeight: "bold", fontSize: 14 },
            type: "value",
            nameLocation: "center"
          }
        },
        border_width: 1,
        border_radius: 0,
        opacity: 1.0,
        top: 0,
        left: 0,
        width: 400,
        height: 200
      }
    }

    Vue.set(state.charts, id, obj[payload.layoutId])
  },
  ADD_PIE_CHART() {},

  UPDATE_CHART(state, payload) {
    Object.entries(payload).forEach(([key, value]) => {
      if (
        state.charts[1].chart_settings[key] != null &&
        Object.keys(state.charts[1].chart_settings[key]).length === 0
      )
        state.charts[1].chart_settings[key] = {
          ...state.charts[1].chart_settings[key],
          ...payload[key]
        }
    })
  },
  UPDATE_TITLE(state, payload) {
    payload.currentItem.chart_settings.title.text = payload.text
  },
  UPDATE_SUBTITLE(state, payload) {
    payload.currentItem.chart_settings.title.subtext = payload.subtext
  },
  SHOW_LEGEND(state, payload) {
    if (payload.currentItem.chart_settings.legend.data.length === 0) {
      for (let i of payload.currentItem.chart_settings.series) {
        payload.currentItem.chart_settings.legend.data.push(i.name)
      }
      payload.currentItem.chart_settings.legend.data.show = false
    } else {
      payload.currentItem.chart_settings.legend.data = []
      payload.currentItem.chart_settings.legend.show = true
    }
  },
  UPDATE_YAXIS_TITLE(state, payload) {
    payload.currentItem.chart_settings.yAxis.name = payload.name
  },
  UPDATE_XAXIS_TITLE(state, payload) {
    payload.currentItem.chart_settings.xAxis.name = payload.name
  },
  UPDATE_YAXIS_TITLE_SIZE(state, payload) {
    payload.currentItem.chart_settings.yAxis.nameTextStyle.fontSize =
      payload.fontSize
  },
  UPDATE_XAXIS_TITLE_SIZE(state, payload) {
    payload.currentItem.chart_settings.xAxis.nameTextStyle.fontSize =
      payload.fontSize
  },
  UPDATE_YAXIS_VALUE(state, payload) {
    payload.currentItem.chart_settings.series[0].data.splice(
      payload.index,
      1,
      payload.value
    )
  },
  UPDATE_XAXIS_VALUE(state, payload) {
    payload.currentItem.chart_settings.xAxis.data.splice(
      payload.index,
      1,
      payload.value
    )
  },
  ADD_SERIES(state, payload) {
    state.lineColorIndex++
    if (state.lineColorIndex === 10) state.lineColorIndex = 0

    let series = {
      name: payload.index + 1 + "",
      type: payload.type,
      stack: "",
      itemStyle: { color: state.colors[[state.lineColorIndex]] },
      data: [30, 50, 90, 300, 100, 120, 10]
    }

    payload.currentItem.chart_settings.series.push(series)

    if (payload.currentItem.chart_settings.legend.show)
      payload.currentItem.chart_settings.legend.data.push(series.name)
  },
  UPDATE_SERIES_COLOR(state, payload) {
    payload.currentItem.chart_settings.series[payload.index].itemStyle.color =
      payload.color
  },
  UPDATE_SERIES_NAME(state, payload) {
    payload.currentItem.chart_settings.series[payload.index].name = payload.name
  }
}

export const actions = {
  initialize({ state, commit }, payload) {
    commit("SET_CHARTS", payload)
  },

  // push obj key to charts ids array
  addLineChart({ state, commit }, payload) {
    //this is the id that is going to be assigned to the newly created table
    let id = Object.keys(state.charts).length + 1

    commit("ADD_LINE_CHART", payload)
    commit(
      "Layout/ADD_CHART",
      { layoutId: payload.layoutId, id: id },
      { root: true }
    )
  },
  addBarChart({ state, commit }, payload) {
    //this is the id that is going to be assigned to the newly created table
    let id = Object.keys(state.charts).length + 1

    commit("ADD_BAR_CHART", payload)
    commit(
      "Layout/ADD_CHART",
      { layoutId: payload.layoutId, id: id },
      { root: true }
    )
  }
}
