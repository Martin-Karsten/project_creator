<template>
  <el-menu>
    <div class="is-hoverable">
      <draggable>
        <a
          v-for="(animation, index) in animationList"
          :key="index"
          class="list-item is-active"
        >
          {{ animation.animations.animation_order
          }}{{ animation.animations.animation_name }}
        </a>
      </draggable>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex"
import draggable from "vuedraggable"
export default {
  components: {
    draggable
  },
  data() {
    return {
      list: []
    }
  },
  computed: {
    ...mapGetters({
      animationList: "PresentationMode/getAnimationItmes"
    })
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case "Layout/ANIMATE":
          this.$store.commit(
            "PresentationMode/ADD_ANIMATIONS",
            state.Layout.currentItem
          )
      }
    })
  },
  methods: {}
}
</script>

<style>
.animation-list {
  margin-top: 1rem;
  border-right: 1px black solid;
}
</style>
