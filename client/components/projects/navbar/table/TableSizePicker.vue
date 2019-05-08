<template>
    <ul class="table-size-picker-grid" @mouseleave="resetPicker">
        <li class="table-size-picker-item" v-for="(item, index) in columns" :key="index" 
        @mouseleave="hover = false"
        @mouseover="selectColumn(index)"
        :class="{'table-size-picker-item-selected': item}"
        >
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            columns: Array.apply(null, new Array(100)).map(function(){return false}),
            gridY: 0,
            gridX: 0
        }
    },
    methods:{
        selectColumn(index){
            let y = 0
            if(index >= 10)
                y = (index+'').charAt(0)
            else
                y = 0

            let x = 0
            if(index < 10) 
                x = (index+'').charAt(0)
            else
                x = (index+'').charAt(1)

            let newArr = [...this.columns]
            if(!this.columns[index]){
                for(let i=0; i<=y; i++){
                    for(let j=0; j<=x; j++){
                            newArr[parseInt( i.toString() + j.toString() )] = true
                    }
                }
            }
            else{
                if(y < this.gridY){
                 for(let i=this.gridY; i>y; i--){
                    for(let j=this.gridX; j>=0; j--){
                        newArr[parseInt( i.toString() + j.toString() )] = false
                        }
                    }                     
                }
                else{
                for(let i=this.gridY; i>=0; i--){
                    for(let j=this.gridX; j>x; j--){
                            newArr[parseInt( i.toString() + j.toString() )] = false
                    }
                }  
                }              
            }
            this.gridY = y
            this.gridX = x
            this.columns = newArr

            this.$store.commit('Layout/CREATE_TABLE', {rows: this.gridY, columns: this.gridX})
        },
        resetPicker(){
            this.gridY = ''
            this.gridX = ''
            this.columns = Array.apply(null, new Array(100)).map(function(){return false})
        }
    }
}
</script>

<style>
ul.table-size-picker-grid{
    background-color: lightgray;
    width: 250px;
    display: grid;
   grid-auto-flow: column;
   grid-template-rows: repeat(10, 2fr);
   z-index: 110;
    padding: 0.2rem;
}

li.table-size-picker-item{
    border: black solid 1px;
    background-color: blanchedalmond;
    height: 20px;
    width: 20px;
    z-index: 110;
    margin: 0.1rem;
}

li.table-size-picker-item-selected{
    background-color: green;
}
</style>
