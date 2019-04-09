<template>
  <div class="layout">
    <project-navbar/>
    <div>
      <nuxt/>
    </div>
  </div>
</template>

<script>
import ProjectNavbar from '~/components/projects/navbar/ProjectNavbar'

export default {  
  components: {
    ProjectNavbar
  }
}
</script>
