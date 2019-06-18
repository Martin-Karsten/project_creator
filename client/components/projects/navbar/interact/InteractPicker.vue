<template>
    <el-row class="interact-picker">
        <el-col class="interact-picker-column" :span="2">
            <button @mousedown="createButton" class="interact-picker-icon" >B</button>
        </el-col>
    </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: ['currentLayout'],
    data(){
        return {
            cursor: 'url(' + 'http://localhost:8000/storage/images/button-icon.png), auto'
        }
    },
  computed: {
  },
    methods: {
        createButton() {
            this.$store.commit("Layout/SET_CURSOR_ICON", {cursor: this.cursor, item: 'button'})
            this.$store.commit("LayoutItems/Interact/Button/ACTIVATE_BUTTON_CREATOR")
        },

    }
}
</script>

<style>
.interact-picker{
    background-color: lightgray;
    width: 200px;
    height: 50px;
    z-index: 15;
    padding-left: 0.75rem;
}

.interact-picker-column {
  font-size: 30px;
  height: 1.5rem;
}

.interact-picker-icon {
    margin-top: 0.3rem;
}
</style>
