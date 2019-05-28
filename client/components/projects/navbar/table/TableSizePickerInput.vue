<template>
  <div class="table-size-picker-input">
    <el-row>
      <el-col class="table-size-picker-input-header-column" :span="24">
        <el-checkbox
          label="Table Header"
          class="table-size-picker-input-header"
        />
      </el-col>
      <el-col :span="13">
        <h3>Rows</h3>
      </el-col>
      <el-col :span="8">
        <h3>Columns</h3>
      </el-col>
      <el-col :span="13">
        <el-input-number
          v-model="height"
          size="small"
          :step="1"
          :min="1"
          :max="10"
        />
      </el-col>
      <el-col :span="8">
        <el-input-number
          v-model="width"
          size="small"
          :step="1"
          :min="1"
          :max="10"
        />
      </el-col>
      <el-col :span="22">
        <el-button
          type="success"
          class="create-table-button"
          size="small"
          @click="createTable"
        >
          Create Table
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 3,
      width: 4
    }
  },
  methods: {
    createTable() {
      this.$store.dispatch("Layout/createTable", {
        layoutId: 2,
        rows: this.height,
        columns: this.width
      })
      this.height = 3
      this.width = 4
      this.$emit("clicked", false)
    }
  }
}
</script>

<style>
.table-size-picker-input {
  background-color: lightgray;
  width: 320px;
  z-index: 15;
  padding: 0.75rem 1rem 1rem 1rem;
}
button.create-table-button {
  margin-top: 0.75rem;
}
</style>
