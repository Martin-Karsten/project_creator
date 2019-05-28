<template>
  <div>
    <project-show />
  </div>
</template>

<script>
import ProjectShow from "../../components/projects/ProjectShow"
export default {
  layout: "project/project-show",
  middleware: "auth",
  components: {
    ProjectShow
  }
}
</script>

<style></style>
