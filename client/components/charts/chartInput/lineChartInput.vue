<template>

  <form class="form" @submit.prevent>

    <div class="field">
      <label class="label is-4" for="formGroupExampleInput">Chart Name</label>
      <input id="formGroupExampleInput" type="text" class="input" placeholder="Set the name of yout Chart here" @input="setChartTitle">
    </div>
    <div class="field">
      <label class="label is-4" for="formGroupExampleInput2">Subtext</label>
      <input id="formGroupExampleInput2" type="text" class="input" placeholder="Set the subtext of your Chart here" @input="setChartSubtext">

      <div class="control">
        <label class="checkbox">
          <input type="checkbox" @click="stackLines">
          {{data.linesStacked}}
          Stack Lines
        </label>

        <label class="checkbox">
          <input type="checkbox" @click="fillLines">
          Fill Lines
        </label>

        <label class="checkbox">
          <input type="checkbox" @click="smoothLines">
          Smooth Lines
        </label>
      </div>

    </div>

    <div class="columns">
      <div class="coloumn">      
        <label class="label">x Axis</label>
        <div class="control">
          <div class="select is-dark">
            <select>
              <option>Number</option>
              <option>Category</option>
            </select>
          </div>
          <div class="field is-grouped">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x0" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x1" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x2" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x3" @blur="setAxis">
              <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x4" @blur="setAxis">
          </div>
        </div>
      </div>

      <div class="coloumn">      
        <label class="label">y Axis</label>
        <div class="control">
          <div class="select is-dark">
            <select>
              <option>Number</option>
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

    <div class="field">
      <div class="columns">
        <div class="coloumn">      
          <div class="control">
            <div class="field is-grouped">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x0" @blur="setAxis1">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x1" @blur="setAxis1">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x2" @blur="setAxis1">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x3" @blur="setAxis1">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x4" @blur="setAxis1">
            </div>
          </div>
        </div>

        <div class="coloumn">      
          <div class="control">
            <div class="field is-grouped">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y0" @blur="setAxis1">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y1" @blur="setAxis1">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y2" @blur="setAxis1">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y3" @blur="setAxis1">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y4" @blur="setAxis1">
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="field">
      <div class="columns">
        <div class="coloumn">      
          <div class="control">
            <div class="field is-grouped">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x0" @blur="setAxis2">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x1" @blur="setAxis2">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x2" @blur="setAxis2">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x3" @blur="setAxis2">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x4" @blur="setAxis2">
            </div>
          </div>
        </div>

        <div class="coloumn">      
          <div class="control">
            <div class="field is-grouped">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y0" @blur="setAxis2">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y1" @blur="setAxis2">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y2" @blur="setAxis2">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y3" @blur="setAxis2">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y4" @blur="setAxis2">
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="field">
      <div class="columns">
        <div class="coloumn">      
          <div class="control">
            <div class="field is-grouped">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x0" @blur="setAxis3">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x1" @blur="setAxis3">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x2" @blur="setAxis3">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x3" @blur="setAxis3">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x4" @blur="setAxis3">
            </div>
          </div>
        </div>

        <div class="coloumn">      
          <div class="control">
            <div class="field is-grouped">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y0" @blur="setAxis3">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y1" @blur="setAxis3">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y2" @blur="setAxis3">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y3" @blur="setAxis3">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y4" @blur="setAxis3">
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="field">
      <div class="columns">
        <div class="coloumn">      
          <div class="control">
            <div class="field is-grouped">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x0" @blur="setAxis4">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x1" @blur="setAxis4">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x2" @blur="setAxis4">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x3" @blur="setAxis4">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="x4" @blur="setAxis4">
            </div>
          </div>
        </div>

        <div class="coloumn">      
          <div class="control">
            <div class="field is-grouped">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y0" @blur="setAxis4">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y1" @blur="setAxis4">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y2" @blur="setAxis4">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y3" @blur="setAxis4">
                <input id="formGroupExampleInput2" type="text" class="input is-2" placeholder="y4" @blur="setAxis4">
            </div>
          </div>
        </div>

      </div>
    </div>

  </form>
</template>

<script>
import HashMap from 'hashmap'
export default {

  data: function () {
    return {
      chartTitle: '',
      chartSubtext: '',
      data: {
        HashMap: new HashMap(),
        HashMap1: new HashMap(),
        HashMap2: new HashMap(),
        HashMap3: new HashMap(),
        HashMap4: new HashMap()
      },
      linesStacked: false,
      linesFiled: false,
      linesSmoothed: false
    }
  },
  methods: {
    setChartTitle (event) {
      this.chartTitle = event.target.value
      this.$emit('chartTitleChanged', this.chartTitle)
    },
    setChartSubtext (event) {
      this.chartSubtext = event.target.value
      this.$emit('chartSubtextChanged', this.chartSubtext)
    },
    setAxis (event) {
      if (event.currentTarget.value === '') {
        return
      }

      let map = this.data.HashMap

      if (event.currentTarget.placeholder.charAt(0) === 'x') {
        if (this.data.HashMap.has(event.currentTarget.placeholder.charAt(1))) {
          this.data.HashMap.set(event.currentTarget.placeholder.charAt(1), [event.target.value, this.data.HashMap.get(event.currentTarget.placeholder.charAt(1))[1]])
        } else {
          this.data.HashMap.set(event.currentTarget.placeholder.charAt(1), [event.target.value, 0])
        }
      } else {
        if (this.data.HashMap.has(event.currentTarget.placeholder.charAt(1))) {
          this.data.HashMap.set(event.currentTarget.placeholder.charAt(1), [this.data.HashMap.get(event.currentTarget.placeholder.charAt(1))[0], event.target.value])
        } else {
          this.data.HashMap.set(event.currentTarget.placeholder.charAt(1), [0, event.target.value])
        }
      }
      this.$emit('AxisChanged', map.values())
    },
    setAxis1 (event) {
      if (event.currentTarget.value === '') {
        return
      }

      let map = this.data.HashMap1

      if (event.currentTarget.placeholder.charAt(0) === 'x') {
        if (this.data.HashMap1.has(event.currentTarget.placeholder.charAt(1))) {
          console.log('true!')
          this.data.HashMap1.set(event.currentTarget.placeholder.charAt(1), [event.target.value, this.data.HashMap1.get(event.currentTarget.placeholder.charAt(1))[1]])
        } else {
          this.data.HashMap1.set(event.currentTarget.placeholder.charAt(1), [event.target.value, 0])
        }
      } else {
        if (this.data.HashMap1.has(event.currentTarget.placeholder.charAt(1))) {
          this.data.HashMap1.set(event.currentTarget.placeholder.charAt(1), [this.data.HashMap1.get(event.currentTarget.placeholder.charAt(1))[0], event.target.value])
        } else {
          this.data.HashMap1.set(event.currentTarget.placeholder.charAt(1), [0, event.target.value])
        }
      }
      this.$emit('Axis1Changed', map.values())
    },
    setAxis2 (event) {
      if (event.currentTarget.value === '') {
        return
      }

      let map = this.data.HashMap2

      if (event.currentTarget.placeholder.charAt(0) === 'x') {
        if (this.data.HashMap2.has(event.currentTarget.placeholder.charAt(1))) {
          this.data.HashMap2.set(event.currentTarget.placeholder.charAt(1), [event.target.value, this.data.HashMap2.get(event.currentTarget.placeholder.charAt(1))[1]])
        } else {
          this.data.HashMap2.set(event.currentTarget.placeholder.charAt(1), [event.target.value, 0])
        }
      } else {
        if (this.data.HashMap2.has(event.currentTarget.placeholder.charAt(1))) {
          this.data.HashMap2.set(event.currentTarget.placeholder.charAt(1), [this.data.HashMap2.get(event.currentTarget.placeholder.charAt(1))[0], event.target.value])
        } else {
          this.data.HashMap2.set(event.currentTarget.placeholder.charAt(1), [0, event.target.value])
        }
      }
      this.$emit('Axis2Changed', map.values())
    },
    setAxis3 (event) {
      if (event.currentTarget.value === '') {
        return
      }

      let map = this.data.HashMap3

      if (event.currentTarget.placeholder.charAt(0) === 'x') {
        if (this.data.HashMap3.has(event.currentTarget.placeholder.charAt(1))) {
          console.log('true!')
          this.data.HashMap3.set(event.currentTarget.placeholder.charAt(1), [event.target.value, this.data.HashMap3.get(event.currentTarget.placeholder.charAt(1))[1]])
        } else {
          this.data.HashMap3.set(event.currentTarget.placeholder.charAt(1), [event.target.value, 0])
        }
      } else {
        if (this.data.HashMap3.has(event.currentTarget.placeholder.charAt(1))) {
          this.data.HashMap3.set(event.currentTarget.placeholder.charAt(1), [this.data.HashMap1.get(event.currentTarget.placeholder.charAt(1))[0], event.target.value])
        } else {
          this.data.HashMap3.set(event.currentTarget.placeholder.charAt(1), [0, event.target.value])
        }
      }
      this.$emit('Axis3Changed', map.values())
    },
    setAxis4 (event) {
      if (event.currentTarget.value === '') {
        return
      }

      let map = this.data.HashMap4

      if (event.currentTarget.placeholder.charAt(0) === 'x') {
        if (this.data.HashMap4.has(event.currentTarget.placeholder.charAt(1))) {
          this.data.HashMap4.set(event.currentTarget.placeholder.charAt(1), [event.target.value, this.data.HashMap4.get(event.currentTarget.placeholder.charAt(1))[1]])
        } else {
          this.data.HashMap4.set(event.currentTarget.placeholder.charAt(1), [event.target.value, 0])
        }
      } else {
        if (this.data.HashMap4.has(event.currentTarget.placeholder.charAt(1))) {
          this.data.HashMap4.set(event.currentTarget.placeholder.charAt(1), [this.data.HashMap4.get(event.currentTarget.placeholder.charAt(1))[0], event.target.value])
        } else {
          this.data.HashMap4.set(event.currentTarget.placeholder.charAt(1), [0, event.target.value])
        }
      }
      this.$emit('Axis4Changed', map.values())
    },
    stackLines(){
      this.data.linesStacked = event.target.checked;
      this.$emit('linesStacked', this.data.linesStacked)
    },
    fillLines(){
      if(this.data.linesFiled == null){
        this.data.linesFiled = {};
      }else{
        this.data.linesFiled = null;
      }
      this.$emit('linesFiled', this.data.linesFiled)
      console.log(this.data.linesFiled)
    },
    smoothLines(){
      this.data.linesSmoothed = event.target.checked
      this.$emit('linesSmoothed', event.target.checked)
    }
  }
}
</script>
