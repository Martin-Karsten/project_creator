<template>
    <aside class="is-hidden-mobile sidebar-header-content" :class="{'not-allowed': !currentItem.selected}">
        <ul class="menu-list">
            <li :class="{'not-allowed': !currentItem.selected}">
                <a @click="rotateCeratBorder()" :class="{'not-allowed': !currentItem.selected}">
                    <span class="icon"> <fa ref="sidebarCeratBorder1" class="caret-right" icon="caret-right"> </fa> </span> Border
                </a>
                <template v-if="ceratBorder">
                    <div class="columns sidebar-header-radios is-multiline">
                        <div class="column is-10 sidebar-header-radio-item1">
                            <!-- <input type="radio" name="fillFilling" @change="fillFilling = !fillFilling"> -->
                            <label for="fillFilling" @change="noBorder">No Border</label>
                        </div>
                        <div class="column is-1">
                            <input type="checkbox">
                        </div>
                        <div class="column is-8 sidebar-header-radio-item1">
                            <!-- <input type="radio" name="fillFilling" @change="fillFilling = !fillFilling"> -->
                            <label for="filFilling">Width</label>
                        </div>
                        <div class="column is-3">
                            <input :value="currentItem.border_width" @input="changeBorderWidth" type="number" min="0" max="50" oninput="validity.valid||(value='')" class="input">
                        </div>
                        <div class="column is-7 sidebar-header-radio-item1">
                            <label for="">Color</label>
                        </div>
                        <div class="column is-4">
                            <input :value="currentItem.border_color" @input="changeBorderColor" type="text" class="input">
                        </div>
                        <div class="column is-7 sidebar-header-radio-item1">
                            <label for="">Style</label>
                        </div>
                        <div class="column is-4">
                            <div class="select">
                              <select :value="currentItem.border_style" @input="changeBorderStyle">
                                    <option >None</option>
                                    <option >Solid</option>
                                    <option >Dotted</option>
                                    <option >Dashed</option>
                                </select>
                            </div>
                        </div>
                        <div class="column is-8 sidebar-header-radio-item1">
                            <label for="">Radius</label>
                        </div>
                        <div class="column is-3">
                            <input :value="currentItem.border_radius" @input="changeBorderRadius" type="number" min="0" max="500" oninput="validity.valid||(value='')" class="input">
                        </div>
                        <div class="column is-6 sidebar-header-radio-item1">
                            <label for="">Opacity</label>
                        </div>
                        <div class="column is-5">
                            <input type="range" class="input">
                        </div>
                    </div>
                </template>
            </li>
            <hr>
        </ul>
    </aside>    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return{
           ceratBorder: false,
        }
    },
    computed:{
        ...mapGetters({
            currentItem: 'Layout/getCurrentItem'
        })
    },
    methods:{
        rotateCeratBorder(){
            console.log(this.currentItem.selected)
            if(this.currentItem.selected){
                if(!this.ceratBorder)
                    this.$refs.sidebarCeratBorder1.style.transform = "rotate(45deg)"
                else
                    this.$refs.sidebarCeratBorder1.style.transform = "rotate(0deg)"
                this.ceratBorder = !this.ceratBorder
            }
        },
        noBorder(){
            if(currentItem.border_style === 'none'){

            }
        },
        changeBorderWidth(event){
            this.$store.commit('Layout/CHANGE_BORDER_WIDTH', event.target.value)
        },
        changeBorderColor(event){
            this.$store.commit('Layout/CHANGE_BORDER_COLOR', event.target.value)
        },
        changeBorderStyle(event){
            this.$store.commit('Layout/CHANGE_BORDER_STYLE', event.target.value)
        },
        changeBorderRadius(event){
            this.$store.commit('Layout/CHANGE_BORDER_RADIUS', event.target.value)
        }
    }
}
</script>

<style>

</style>
