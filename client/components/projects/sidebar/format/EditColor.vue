<template>
    <el-row class="sidebar-format-edit">
        <el-collapse>
            <el-collapse-item :title="'Background'">
                <el-col :span="17" class="sidebar-format-column">
                    <h3 class="sidebar-format-title">Background Color</h3>
                </el-col>
                <el-col :span="1" class="sidebar-format-column" >
                    <el-color-picker :value="currentItem.background_color" @change="updateBackgroundColor"/>
                </el-col>
                <el-col class="sidebar-format-column">
                    <h3 class="sidebar-format-title">Opacity</h3>
                </el-col> 
                <el-col class="sidebar-format-column sidebar-format-color-slier">
                    <el-slider :value="currentItem.opacity" show-input :debounce="300" :min="0" :max="1" :step="0.1" 
                    @change="updateBackgroundColorOpacity" class="sidebar-format-color-slider" />
                </el-col>
            </el-collapse-item>
        </el-collapse>

        <el-collapse>
            <el-collapse-item :title="'Background'">
                <el-col :span="21" class="sidebar-format-column">
                    <h3 class="sidebar-format-title">Border Color</h3>
                </el-col>
                <el-col :span="1" class="sidebar-format-column" >
                    <el-color-picker :value="currentItem.background_color" @change="updateBorderColor"/>
                </el-col>
                <!-- <el-col class="sidebar-format-column">
                    <h3 class="sidebar-format-title">Opacity</h3>
                </el-col>
                <el-col class="sidebar-format-column sidebar-format-color-slier">
                    <el-slider :value="currentItem.background_color.opacity" show-input debounce :min="0" :max="1" :step="0.1" 
                    @change="updateBackgroundColorOpacity" class="sidebar-format-color-slider" />
                </el-col> -->
            </el-collapse-item>
        </el-collapse>

    </el-row>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
 components: {
 },
 data(){
     return{
     }
 },
  computed:{
    ...mapGetters({
        currentItem: 'Layout/getCurrentItem'
    })
 },
  methods:{
    updateBorderColor(event){
        let payload =
        {
            currentItem: this.currentItem,
            event: event
        }
        this.$store.commit('Layout/UPDATE_BORDER_COLOR', payload)
    },
    updateBackgroundColor(event){
        let payload = 
        {
            currentItem: this.currentItem,
            event: event
        }
        this.$store.commit('Layout/UPDATE_BACKGROUND_COLOR', payload)
    },
    updateBackgroundColorOpacity(event){
        let payload = 
        {
            currentItem: this.currentItem,
            event: event
        }        
        console.log(event)
        this.$store.commit('Layout/UPDATE_BACKGROUND_COLOR_OPACITY', payload)
    },
 }
}
</script>

<style>
.sidebar-format-color-slider{
    padding: 0 0.6rem;
}
</style>
