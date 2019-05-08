<template>
  <el-container class="layout">
    <el-header>
      <navbar/>
    </el-header>
      <nuxt/>
  </el-container>
</template>

<script>
import '~/plugins/element-ui'
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar,
  }
}
</script>
