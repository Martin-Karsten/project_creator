<template>
  <div class="layout">
    <navbar/>
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
