<template>
  <el-tabs
    v-model="activeName"
    class="sidebar-tabs"
    type="card"
    @tab-click="handleClick"
  >
    <el-tab-pane
      v-for="item in tabItems"
      :key="item.componentName"
      class="sidebar-tab"
      :label="item.name"
      :name="item.name"
    >
      <span slot="label">
        <fa v-if="item.icon != 'sidebar-tab-image'" :icon="item.icon" />
        <img
          v-else
          class="custom-sidebar-tag-image"
          src="../navbar/border-style.svg"
        />
      </span>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#edeeef"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <template v-if="currentComponent">
          <component :is="currentComponent" />
        </template>
      </el-menu>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { Sketch } from "vue-color"
import { mapGetters } from "vuex"
import SidebarDefault from "./SidebarDefault"
import EditColor from "./format/EditColor"
import EditLines from "./format/EditLines"
import SidebarAnimation from "./animation/SidebarAnimation"
import SidebarChart from "./items/SidebarChart"

export default {
  components: {
    "sketch-picker": Sketch,
    "sidebar-default": SidebarDefault,
    "edit-color": EditColor,
    "edit-lines": EditLines,
    "sidebar-animation": SidebarAnimation,
    "sidebar-chart": SidebarChart
  },
  data() {
    return {
      test: "font",
      activeName: "first",
      currentComponent: "sidebar-default",
      tabItems: [
        { name: "first", componentName: "sidebar-default", icon: "stream" },
        { name: "second", componentName: "edit-color", icon: "fill-drip" },
        {
          name: "third",
          componentName: "edit-lines",
          icon: "sidebar-tab-image"
        }
      ],
      tabIcon: ""
    }
  },
  computed: {
    ...mapGetters({
      currentItem: "Layout/getCurrentItem"
    }),
    iconClass: function(obj) {
      switch (obj.name) {
        case "font":
          return obj.name
        case "chart-bar":
          return obj.name
      }
    }
  },
  watch: {
    currentItem: function(newVal) {
      switch (newVal.itemName || newVal.item) {
        // case 'textfields':
        // if(this.tabItems[1].icon === 'fill-drip'){
        //     this.tabItems.splice(1, 0,{name: 'textfield', componentName: 'SidebarTextfield', icon: 'font'})
        //     break;
        // }
        // //tab item already exists -> replace with current item
        // else{
        //     this.$set(this.tabItems, 1,{name: 'textfield', componentName: 'SidebarTextfield', icon: 'font'})
        //     break;
        // }
        // break;

        case "charts":
          if (this.tabItems[1].icon === "fill-drip") {
            this.tabItems.splice(1, 0, {
              name: "chart",
              componentName: "ChartdSidebar",
              icon: "chart-bar"
            })
            this.activeName = "chart"
            this.currentComponent = "sidebar-chart"
            break
          } else {
            this.$set(this.tabItems, 1, {
              name: "chart",
              componentName: "ChartdSidebar",
              icon: "chart-bar"
            })
            this.activeName = "chart"
            this.currentComponent = "sidebar-chart"
            break
          }
        default:
          this.activeName = "first"
          this.currentComponent = "sidebar-default"
      }
    }
  },
  methods: {
    handleClick(tab) {
      switch (tab.name) {
        case "first":
          this.currentComponent = "sidebar-default"
          break

        case "second":
          this.currentComponent = "edit-color"
          break

        case "third":
          this.currentComponent = "edit-lines"
          break

        case "chart":
          this.currentComponent = "sidebar-chart"
          break
      }
    },
    showScroller() {
      this.scrollerActivated = !this.scrollerActivated
      if (this.scrollerActivated)
        this.$refs.showScrollerChevron.style.transform = "rotate(45deg)"
      else this.$refs.showScrollerChevron.style.transform = "rotate(0deg)"
      this.$store.commit("Sidebar/ACTIVATE_SCROLLER")
    }
  }
}
</script>

<style lang="scss">
.el-menu-vertical-demo {
  height: 77.1vh;
}
.sidebar-tabs {
  border-right: 1px solid black;
  background: #f4f5f5;
}

.el-tabs__nav-scroll {
  background-color: #edeeef;
}

.custom-sidebar-tag-image {
  width: 15.75px;
  height: 14px;
}
</style>
