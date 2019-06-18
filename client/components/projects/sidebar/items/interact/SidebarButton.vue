<template>
    <el-row class="sidebar-button">
        <el-row>
            <el-col>
                <el-collapse>
                    <el-collapse-item :title="'Format Items'">
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox-group v-model="checkedItems" @change="handleCheckedItemsChange">
                            <el-checkbox v-for="item in items" :label="item" :key="item">{{item}}</el-checkbox>
                        </el-checkbox-group>
                        <hr>
                        <div style="margin: 15px 0;"></div>
                        <el-row v-show="checkedItems.length > 0" class="sidebar-animation-buttons">
                            <el-col :span="3">
                                <el-button type="success" @click="addItemsFormat">Add</el-button>
                            </el-col>
                            <el-col class="sidebar-animation-button" :span="3">
                                <el-button type="danger" @click="deleteItemsFormat">Remove</el-button>
                            </el-col>
                            <el-col class="sidebar-animation-button" :span="3">
                                <el-button type="primary" @click="confirmFormat">Confirm</el-button>
                            </el-col>
                        </el-row>
                        <el-row class="sidebar-button-options" v-show="checkedItems.includes('Color')">
                            <el-col :span="18">
                                <h3>Color:</h3>
                            </el-col>
                            <el-col :span="2">
                                <el-color-picker :value="currentItem.sidebarColor" @change="changeColor"></el-color-picker>
                            </el-col>
                        </el-row>
                        <el-row v-show="checkedItems.includes('Border Style')">
                            <el-row class="sidebar-animation-buttons">
                                <el-col :span="3">
                                    <el-button type="success" @click="addItemsBorderStyle">Add</el-button>
                                </el-col>
                                <el-col class="sidebar-animation-button" :span="3">
                                    <el-button type="danger" @click="deleteItemsBorderStyle">Remove</el-button>
                                </el-col>
                                <el-col class="sidebar-animation-button" :span="3">
                                    <el-button type="primary" @click="confirmFormat">Confirm</el-button>
                                </el-col>
                            </el-row>
                            <el-col :span="7">
                                <h3>Border:</h3>
                            </el-col>
                            <el-col :span="16">
                                <el-select v-model="borderStyleValue" placeholder="Select">
                                    <el-option
                                    v-for="style in borderStyles"
                                    :key="style"
                                    :label="style"
                                    :value="style">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                        <el-row v-show="checkedItems.includes('Border Radius')">
                            <el-col :span="17">
                                <h3>Radius:</h3>
                            </el-col>
                            <el-col :span="4">
                                <el-input type="number" :value="29"></el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10">
                                <div v-show="currentItem.function === 'formatFunction'" 
                                v-for="(item, index) in currentItem.function_items" :key="index">
                                    {{item.name}}
                                </div>
                            </el-col>
                        </el-row>
                    </el-collapse-item>
                    <el-collapse-item :title="'Hide Items'">
                        <div style="margin: 15px 0;"></div>
                        <el-row class="sidebar-animation-buttons">
                            <el-col :span="3">
                                <el-button type="success" @click="addHideItems">Add</el-button>
                            </el-col>
                            <el-col class="sidebar-animation-button" :span="3">
                                <el-button type="danger" @click="deleteHideItems">Remove</el-button>
                            </el-col>
                            <el-col class="sidebar-animation-button" :span="3">
                                <el-button type="primary" @click="confirmHide">Confirm</el-button>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col v-show="currentItem.function === 'hideFunction'" :span="10">
                                <div v-for="(item, index) in currentItem.function_items" :key="index">
                                    {{item.name}}
                                </div>
                            </el-col>
                        </el-row>
                    </el-collapse-item>
                </el-collapse>
            </el-col>
        </el-row>

    </el-row>
</template>

<script>
import { mapGetters } from 'vuex';
const itemOptions = ['Color'];
export default {
    data(){
        return {
            checkAll: false,
            checkedItems: [],
            items: itemOptions,
            isIndeterminate: true,
            borderStyles: ["none", "solid", "dashed", "dotted"],
            colorValue: 'red',
            borderStyleValue: "solid",
        }
    },
    computed: {
        ...mapGetters({
            addToSomethingActivated: 'Layout/getAddToSomethingActivated',
            addToSomethingList: 'Layout/getAddToSomethingList',
            currentItem: "Layout/getCurrentItem",
        }) 
    },
    methods:{
        handleCheckAllChange(val) {
        this.checkedItems = val ? itemOptions : [];
        this.isIndeterminate = false;
        },
        handleCheckedItemsChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.items.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.items.length;
        },
        addItemsFormat(){
            let payload =
            {
                function: 'formatFunction',
                class: 'add-to-something',
                action: 'add',
                current: 'formatFunction',
                currentItem: this.currentItem
            }
            this.$store.commit("LayoutItems/Interact/Button/SET_BUTTON_TYPE", payload)
            this.$store.commit("Layout/SET_ADD_TO_SOMETHING_ANIMATION", payload)
        },
        deleteItemsFormat(){
            let payload = 
            {
                function: 'formatFunction',
                class: 'delete-from-something',
                action: 'delete',
                current: 'formatFunction',
                currentItem: this.currentItem
            }
            this.$store.commit("LayoutItems/Interact/Button/SET_BUTTON_TYPE", payload)
            this.$store.commit("Layout/SET_ADD_TO_SOMETHING_ANIMATION", payload)
        },
        addItemsBorderStyle(){
            let payload =
            {
                function: 'borderStyleFunction',
                class: 'add-to-something',
                action: 'add',
                currentItem: this.currentItem
            }
            this.$store.commit("LayoutItems/Interact/Button/SET_BUTTON_TYPE", payload)
            this.$store.commit("Layout/SET_ADD_TO_SOMETHING_ANIMATION", payload)
        },
        deleteItemsBorderStyle(){

        },
        addHideItems(){
            let payload =
            {
                function: 'hideFunction',
                class: 'add-to-something',
                action: 'add',
                current: 'hideFunction',
                currentItem: this.currentItem
            }
            this.$store.commit("LayoutItems/Interact/Button/SET_BUTTON_TYPE", payload)
            this.$store.commit("Layout/SET_ADD_TO_SOMETHING_ANIMATION", payload)
        },
        deleteHideItems(){
            let payload = 
            {
                function: 'hideFunction',
                class: 'delete-from-something',
                action: 'delete',
                current: 'hideFunction',
                currentItem: this.currentItem
            }
            this.$store.commit("LayoutItems/Interact/Button/SET_BUTTON_TYPE", payload)
            this.$store.commit("Layout/SET_ADD_TO_SOMETHING_ANIMATION", payload)
        },
        confirmFormat(){
            let payload = 
            {
                function: 'formatFunction',
                class: '',
                action: '',
                currentItem: this.currentItem
            }
            this.$store.commit("LayoutItems/Interact/Button/SET_BUTTON_TYPE", payload)
            this.$store.commit("Layout/SET_ADD_TO_SOMETHING_ANIMATION", payload)
        },
        confirmHide(){
            let payload = 
            {
                function: 'hideFunction',
                class: '',
                action: '',
                currentItem: this.currentItem
            }
            this.$store.commit("LayoutItems/Interact/Button/SET_BUTTON_TYPE", payload)
            this.$store.commit("Layout/SET_ADD_TO_SOMETHING_ANIMATION", payload)
        },
        changeColor(event) {
            this.$store.commit('LayoutItems/Interact/Button/SET_SIDEBAR_COLOR', {event: event, currentItem: this.currentItem})
        },
    }
}
</script>

<style>
.sidebar-animation-buttons{
    padding-left: 0.7rem;
}
.sidebar-animation-button{
    margin-left: 2.5rem;
    margin-right: 1.9rem;
}
</style>
