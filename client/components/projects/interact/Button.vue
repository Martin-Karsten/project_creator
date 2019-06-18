<template>
    <div @click="setCurrentItem" :style="{zIindex: 1}">
        <el-button :style="{height: height + 'px', zIndex: 1}" @click="action" class="interact-button">Button</el-button> 
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    props: ['id', 'layoutId', 'height'],
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({
            currentItem: "Layout/getCurrentItem",
            addToSomethingList: "Layout/getAddToSomethingList",
        })
    },
    methods: {
        action(){
            if(this.currentItem.function != "" && this.currentItem.function != undefined){
                if(this.currentItem.function === 'formatFunction')
                    this.formatFunction(this.currentItem.function_items)

                else if(this.currentItem.function === 'hideFunction')
                    this.hideFunction(this.currentItem.function_items)
            }
        },
        setCurrentItem() {
        let payload = {
            id: this.id,
            layoutId: this.layoutId,
            itemName: "buttons"
        }
        this.$store.commit("Layout/SET_CURRENT_ITEM", payload)
        },
        formatFunction(arr){
            arr.forEach(x => {
                this.$store.dispatch("LayoutItems/Interact/Button/formatAction", {currentItem: x, event: this.currentItem.sidebarColor})
            })
        },
        borderStyleFunction(arr){
            arr.forEach(x => {
                this.$store.dispatch("LayoutItems/Interact/Button/borderStyleAction", {currentItem: x, event: this.currentItem.sidebarColor})
            })
        },
        hideFunction(arr){
            arr.forEach(x => {
                this.$store.dispatch("LayoutItems/Interact/Button/hideAction", {currentItem: x, event: 'is-hidden'})
            })
        }
    }
}
</script>

<style>
button.interact-button {
    width: 100%;
}
</style>
