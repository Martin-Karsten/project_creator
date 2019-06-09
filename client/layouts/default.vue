<template>
  <el-container direction="vertical">
    <navbar />
    <nuxt />
  </el-container>
</template>

<script>
import "~/plugins/element-ui"
import Navbar from "~/components/Navbar"

export default {
  components: {
    Navbar
  }
}
</script>
