<template>
    <aside class="is-hidden-mobile sidebar-header-content">
        <ul class="menu-list">
            <li :class="{'not-allowed': !currentItem.selected}">
                <a @click="rotateceratFilling()" :class="{'not-allowed': !currentItem.selected}">
                    <span class="icon"> <fa ref="sidebarHeaderContentCaretRight1" class="caret-right" icon="caret-right"> </fa> </span> Filling
                </a>
                <template v-if="ceratFilling">
                    <div class="columns sidebar-header-radios is-multiline">
                        <div class="column is-12 sidebar-header-radio-item1">
                            <input type="radio" name="fillFilling" @change="fillFilling = !fillFilling">
                            <label for="fillFilling" class="radio">No Filling</label>
                        </div>
                        <div class="column is-12 sidebar-header-radio-item2">
                            <input type="radio" name="fillFilling" @change="fillFilling = !fillFilling">
                            <label for="filFilling" class="radio">Filling</label>
                        </div>
                    </div>
                </template>
            </li>
            <transition name="component-fade" mode="out-in">
            <template v-if="fillFilling && ceratFilling">
                <div class="columns is-multiline sidebar-color-settings">
                    <div class="column is-9">
                        <p>Color</p>
                    </div>
                    <div class="column is-1">
                        <div class="dropdown is-right" :class="{'is-active': colorPickerFill}">
                            <div class="dropdown-trigger">
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="showColorPickerFill">
                                <span></span>
                                <span class="icon is-small">
                                    <fa icon="fill-drip"></fa>
                                </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">
                                        <no-ssr>
                                            <sketch-picker :value="currentItem.background_color" @input="changeBackgroundColor"/>
                                        </no-ssr>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-narrow">
                        <p>Opacity</p>
                    </div>
                    <div class="column is-10">
                        <input min="0.00" max="1.00" step="0.01" :value="currentItem.opacity" type="range" class="input" @input="changeBackgroundOpacity">                        
                    </div>
                </div>
            </template>
            </transition>
            <hr>
            <li>
                <a @click="rotateceratLine()">
                    <span class="icon"> <fa ref="sidebarHeaderContentCaretRight2" class="caret-right" icon="caret-right"> </fa> </span> Line or Stroke
                </a>
                    <template v-if="ceratLine">
                        <div class="columns sidebar-header-radios is-multiline">
                            <div class="column is-12 sidebar-header-radio-item1">
                                <input type="radio" name="fillLine" @change="fillLine = !fillLine">
                                <label for="fillLine" class="radio">No Filling</label>
                            </div>
                            <div class="column is-12 sidebar-header-radio-item2">
                                <input type="radio" name="fillLine" @change="fillLine = !fillLine">
                                <label for="fillLine" class="radio">Filling</label>
                            </div>
                        </div>
                    </template>
            </li>
            <transition name="component-fade" mode="out-in">
            <template v-if="fillLine && ceratLine">
                <div class="columns is-multiline sidebar-color-settings">
                    <div class="column is-9">
                        <p>Color</p>
                    </div>
                    <div class="column is-1">
                        <div class="dropdown is-right" :class="{'is-active': colorPickerLine}">
                            <div class="dropdown-trigger">
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="showColorPickerLine">
                                <span></span>
                                <span class="icon is-small">
                                    <fa icon="fill-drip"></fa>
                                </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">
                                        <no-ssr>
                                            <sketch-picker :value="currentItem.border_color" @input="changeBorderColor" />
                                        </no-ssr>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-narrow">
                        <p>Opacity</p>
                    </div>
                    <div class="column is-9">
                        <input type="range" class="input">                        
                    </div>
                </div>
            </template>
            </transition>
        </ul>
        
    </aside>
</template>

<script>
import { mapGetters } from 'vuex';
import { Sketch } from 'vue-color'
export default {
 components: {
    'sketch-picker': Sketch,
 },
 data(){
     return{
         scrollerActivated: false,
         colorTabActive: true,
         lineTabActive: false,
         ceratFilling: false,
         ceratLine: false,
         noFill: true,
         fillFilling: false,
         fillLine: false,
         colorPickerFill: false,
         colorPickerLine: false,
     }
 },
  computed:{
    ...mapGetters({
        currentItem: 'Layout/getCurrentItem'
    })
 },
  methods:{
     /*
        Due to limitations in JavaScript, Vue cannot detect the following changes to an array:
        When you directly set an item with the index, e.g. vm.items[indexOfItem] = newValue
        When you modify the length of the array, e.g. vm.items.length = newLength
     */
    changeBorderColor(event){
        this.$store.commit('Layout/CHANGE_BORDER_COLOR', event.hex)
    },
    changeBackgroundColor(event){
        this.$store.commit('Layout/CHANGE_BACKGROUND_COLOR', event.hex)
    },
    changeBackgroundOpacity(event){
        this.$store.commit('Layout/CHANGE_BACKGROUND_OPACITY', event.target.value)
    },
     rotateceratFilling(){
         if(this.currentItem.selected){
            if(!this.ceratFilling){
                this.$refs.sidebarHeaderContentCaretRight1.style.transform = "rotate(45deg)"
                this.ceratFilling = !this.ceratFilling
            }
            else{
                this.$refs.sidebarHeaderContentCaretRight1.style.transform  = "rotate(0deg)"
                this.ceratFilling = !this.ceratFilling
            }
         }
     },
     rotateceratLine(){
         if(this.currentItem.selected){
            if(!this.ceratLine){
                this.$refs.sidebarHeaderContentCaretRight2.style.transform = "rotate(45deg)"
                this.ceratLine = !this.ceratLine
            }
            else{
                this.$refs.sidebarHeaderContentCaretRight2.style.transform = "rotate(0deg)"
                this.ceratLine = !this.ceratLine
            }
         }
     },
     showColorPickerFill(){
         this.colorPickerFill = !this.colorPickerFill
         if(this.colorPickerLine)
            this.colorPickerLine = !this.colorPickerLine
     },
     showColorPickerLine(){
         this.colorPickerLine = !this.colorPickerLine
         if(this.colorPickerFill)
            this.colorPickerFill = !this.colorPickerFill
     },
        changeColor(color) {
            const {rgba: {r, g, b, a}} = color
            this.color = `rgba(${r, g, b, a})`

            this.$store.commit('Layout/CHANGE_COLOR', color.rgba.toHexString())
        },
 }
}
</script>

<style>

</style>
