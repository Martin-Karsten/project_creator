<template>
    <form class="form" submit.prevent>
        <div class="field">
            <label class="label is-4" for="formGroupExampleInput">Chart Name</label>
            <input id="formGroupExampleInput" type="text" class="input" placeholder="Set the name of yout Chart here" @input="setChartTitle">
            </div>
            <div class="field">
            <label class="label is-4" for="formGroupExampleInput2">Subtext</label>
            <input id="formGroupExampleInput2" type="text" class="input" placeholder="Set the subtext of your Chart here" @input="setChartSubtext">
        </div>

    <div class="columns">
      <div class="coloumn">      
        <label class="label">x Axis</label>
        <div class="control">
          <div class="select is-dark" @change="set_xAxisType">
            <select>
              <option>Value</option>
              <option>Category</option>
            </select>
          </div>
          <div class="field is-grouped">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x0" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x1" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x2" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x3" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x4" @blur="xAxis">
          </div>
        </div>
      </div>

      <div class="coloumn">      
        <label class="label">y Axis</label>
        <div class="control">
          <div class="select is-dark" @change="set_yAxisType">
            <select>
              <option>Value</option>
              <option>Category</option>
            </select>
          </div>
          <div class="field is-grouped">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y0" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y1" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y2" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y3" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y4" @blur="setAxis">
          </div>
        </div>
      </div>

    </div>

        <div class="columns">
      <div class="coloumn">      
        <div class="control">
          <div class="field is-grouped">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x0" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x1" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x2" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x3" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x4" @blur="xAxis">
          </div>
        </div>
      </div>

      <div class="coloumn">      
        <div class="control">
          <div class="field is-grouped">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y0" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y1" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y2" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y3" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y4" @blur="setAxis">
          </div>
        </div>
      </div>

    </div>

        <div class="columns">
      <div class="coloumn">      
        <div class="control">
          <div class="field is-grouped">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x0" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x1" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x2" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x3" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x4" @blur="xAxis">
          </div>
        </div>
      </div>

      <div class="coloumn">      
        <div class="control">
          <div class="field is-grouped">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y0" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y1" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y2" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y3" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y4" @blur="setAxis">
          </div>
        </div>
      </div>

    </div>

        <div class="columns">
      <div class="coloumn">      
        <div class="control">
          <div class="field is-grouped">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x0" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x1" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x2" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x3" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x4" @blur="xAxis">
          </div>
        </div>
      </div>

      <div class="coloumn">      
        <div class="control">
          <div class="field is-grouped">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y0" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y1" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y2" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y3" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y4" @blur="setAxis">
          </div>
        </div>
      </div>

    </div>

        <div class="columns">
        <div class="coloumn">      
        <div class="control">
          <div class="field is-grouped">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x0" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x1" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x2" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x3" @blur="xAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x4" @blur="xAxis">
          </div>
        </div>
      </div>

      <div class="coloumn">      
        <div class="control">
          <div class="field is-grouped">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y0" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y1" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y2" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y3" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y4" @blur="setAxis">
          </div>
        </div>
      </div>

    </div>

    </form>
</template>

<script>
import HashMap from 'hashmap'

export default {
    data: function(){
        return{
            chartTitle: '',
            chartSubtext: '',
            xAxisType: 'category',
            yAxisType: '',
            data: {
              HashMap: new HashMap,
              HashMapY: new HashMap,
              HashMapX: new HashMap
            },
            x: [],
            count: 0
        }
    },
    methods: {
        setChartTitle (event) {
        this.chartTitle = event.target.value
        this.$emit('chartTitleChanged', this.chartTitle)
        },
        setChartSubtext(event){
        this.chartSubtext = event.target.value
        this.$emit('chartSubtextChanged', this.chartSubtext)
        },

        set_yAxisType(event){
          this.yAxisType = event.target.value.toLowerCase()
          console,console.log((this.yAxisType));          
          this.$emit('yAxisTypeChanged', this.yAxisType)
        },
        set_xAxisType(event){
          this.xAxisType = event.target.value.toLowerCase()
          this.$emit('xAxisTypeChanged', this.xAxisType)
        },
        setAxis(event){
          if(event.target.value === ''){
            return
          }
          let map = this.data.HashMap
          if (this.data.HashMap.has(event.currentTarget.placeholder.charAt(1))) {
          this.data.HashMap.set(parseInt(event.currentTarget.placeholder.charAt(1)), event.target.value)
          } else {
          this.data.HashMap.set(parseInt(event.currentTarget.placeholder.charAt(1)) + 1, event.target.value)
          }
          
          this.$emit('plots', arr)
        },
        xAxis(event){
          if(event.target.value === ''){
            return
          }

          let map = this.data.HashMapX
          if (this.data.HashMapX.has(event.currentTarget.placeholder.charAt(1))) {
          this.data.HashMapX.set(event.currentTarget.placeholder.charAt(1), event.target.value)
          } else {
          this.data.HashMapX.set(parseInt(event.currentTarget.placeholder.charAt(1)) + 1, [event.target.value])
          }
          this.$emit('xAxis', this.data.HashMapX.values())
          
        }
    }
}
</script>