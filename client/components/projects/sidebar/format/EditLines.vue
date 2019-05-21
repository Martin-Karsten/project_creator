<template>
    <el-row class="sidebar-format-edit">
        <el-collapse class="border-collapse">
            <el-collapse-item title="Border" class="border-collapse">
                <el-col class="sidebar-format-column" :span="21">
                    <h3 class="sidebar-format-title">No Border</h3>
                </el-col>
                <el-col class="sidebar-format-column" :span="1">
                    <el-checkbox :checked="currentItem.border_width === 0" @input="activateBorder"/>
                </el-col>
                <el-col class="sidebar-format-column" :span="20">
                    <h3 class="sidebar-format-title">Border Color</h3>
                </el-col>
                <el-col class="sidebar-format-column" :span="1">
                    <el-color-picker :value="currentItem.border_color" @change="updateBorderColor"></el-color-picker>
                </el-col>
                <el-col class="sidebar-format-column" :span="10">
                    <h3 class="sidebar-format-title">Border Width</h3>
                </el-col>
                <el-col class="sidebar-format-column" :span="10">
                    <el-input-number :value="currentItem.border_width" @change="updateBorderWidth" :min="0" :max="30"/>
                </el-col>
                <el-col class="sidebar-format-column" :span="11">
                    <h3 class="sidebar-format-title">Border Style</h3>
                </el-col>
                <el-col class="sidebar-format-column" :span="13">
                    <el-select :value="currentItem.border_style" @change="updateBorderStyle" placeholder="Select">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col class="sidebar-format-column" :span="10">
                    <h3 class="sidebar-format-title">Border Radius</h3>
                </el-col>
                <el-col class="sidebar-format-column" :span="10">
                    <el-input-number :value="currentItem.border_radius" @change="updateBorderRadius" :min="0" :max="30"/>
                </el-col>
            </el-collapse-item>
        </el-collapse>
    </el-row>
</template>

<script>
import { mapGetters } from 'vuex';
import debounce from '../../../../Helper/Project/LayoutHelper.js'
export default {
    data() {
      return {
        options: [{
          value: 'solid',
          label: 'Solid'
        }, {
          value: 'dotted',
          label: 'Dotted'
        }, {
          value: 'dashed',
          label: 'Dashed'
        }]
      }
    },
    computed:{
        ...mapGetters({
            currentItem: 'Layout/getCurrentItem'
        })
    },
    methods:{
        activateBorder(){
            let width = 0
            if(this.currentItem.border_width === 0)
                width = 1
            else
                width = 0

            let payload = 
            {
                currentItem: this.currentItem,
                event: width
            }
            this.$store.commit('Layout/UPDATE_BORDER_WIDTH', payload)
        },
        updateBorderWidth: debounce(function (event){
            let payload =
            {
                currentItem: this.currentItem,
                event: event
            }
            this.$store.commit('Layout/UPDATE_BORDER_WIDTH', payload)
        },200),
        updateBorderColor(event){
            let payload =
            {
                currentItem: this.currentItem,
                event: event
            }
            this.$store.commit('Layout/UPDATE_BORDER_COLOR', payload)
        },
        updateBorderStyle(event){
            let payload =
            {
                currentItem: this.currentItem,
                event: event
            }
            this.$store.commit('Layout/UPDATE_BORDER_STYLE', payload)
        },
        updateBorderRadius: debounce(function(event){
            let payload =
            {
                currentItem: this.currentItem,
                event: event
            }
            this.$store.commit('Layout/UPDATE_BORDER_RADIUS', payload)
        }, 200)
    }
}
</script>

<style>
.sidebar-format-edit{
    padding-right: 0.25rem;
    padding-left: 0.25rem;
    background-color: #edeeef;
}


h3.sidebar-format-title{
    padding: 0 0.25rem;
    font-size: 16px;
}
</style>
