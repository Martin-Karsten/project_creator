<template>
  <div class="layout">
    <navbar/>
    <project-navbar/>
    <div>
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import ProjectNavbar from '~/components/projects/navbar/ProjectNavbar'

export default {  
  components: {
    Navbar,
    ProjectNavbar
  }
}
</script>
