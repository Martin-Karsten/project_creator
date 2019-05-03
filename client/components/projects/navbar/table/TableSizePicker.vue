<template>
    <div class="columns is-multiline table-size-picker" @mouseleave="resetPicker">
        <div class="column table-size-picker-column is-1" v-for="(column, index) in columns" :key="index" 
        @mouseleave="hover = false"
        @mouseover="selectColumn(index)"
        :class="{'table-size-picker-column-selected': column}"
        >
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            columns: Array.apply(null, new Array(100)).map(function(){return false}),
            girdY: 0,
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
                if(y < this.girdY){
                 for(let i=this.girdY; i>=y; i--){
                    for(let j=this.gridX; j>=0; j--){
                        newArr[parseInt( i.toString() + j.toString() )] = false
                        }
                    }                     
                }
                else{
                for(let i=this.girdY; i>=0; i--){
                    for(let j=this.gridX; j>=x; j--){
                            newArr[parseInt( i.toString() + j.toString() )] = false
                    }
                }  
                }              
            }
            this.girdY = y
            this.gridX = x
            // console.log('oldY', this.girdY, 'newY', y, 'oldX', this.gridX, 'newX', x)
            this.columns = newArr
        },
        resetPicker(){
            this.columns = Array.apply(null, new Array(100)).map(function(){return false})
        }
    }
}
</script>

<style>
div.table-size-picker{
    background-color: lightgray;
    padding: 1.5rem;
}
div.table-size-picker-column{
    border: black solid 1px;
    background-color: blanchedalmond;
}

div.table-size-picker-column-selected{
    background-color: green;
}

</style>
