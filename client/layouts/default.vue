<template>
  <div class="layout">
    <navbar/>
    <project-navbar/>
    <div class="container is-fluid">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar,
  }
}
</script>
