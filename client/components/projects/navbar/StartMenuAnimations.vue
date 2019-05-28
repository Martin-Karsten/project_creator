<template>
  <div class="columns start-menu play-animation-button-area">
    <div
      class="column is-1 menu-section start-menu-animation-icons-activated"
      :class="
        currentItem != ''
          ? 'start-menu-animation-icons-activated'
          : 'start-menu-animation-icons-deactivated'
      "
      @click="animate"
    >
      <fa icon="play-circle" />
    </div>

    <div
      class="column is-5 menu-section"
      :class="
        currentItem != ''
          ? 'start-menu-animation-icons-activated'
          : 'start-menu-animation-icons-deactivated'
      "
    >
      <fa
        :class="
          currentItem != ''
            ? 'start-menu-animation-icon-activated'
            : 'start-menu-animation-icon-deactivated'
        "
        icon="envelope"
        @click="addAnimation($event)"
      />
      <fa
        :class="
          currentItem != ''
            ? 'start-menu-animation-icon-activated'
            : 'start-menu-animation-icon-deactivated'
        "
        icon="envelope"
        @click="addAnimation($event)"
      />
    </div>
  </div>
</template>

<script>
import { Editor, EditorMenuBar, EditorContent } from "tiptap"
import { mapGetters } from "vuex"
import { mapMutations } from "vuex"

export default {
  components: {},
  data() {
    return {
      editor: null,
      isActive: false,
      creatorActivated: false,
      fieldActivated: false
    }
  },
  computed: {
    ...mapGetters({
      currentItem: "Layout/getCurrentItem"
    })
  },

  mounted() {},
  methods: {
    animate() {
      let payload = {
        currentItem: "",
        animation: "fadIn"
      }
      this.$store.commit("Layout/ANIMATE", payload)
    },
    addAnimation(event) {
      let payload = {
        animation: "fadIn"
      }
      this.$store.dispatch("Layout/animate", payload)
      // this.$store.dispatch('PresentationMode/addAnimations', payload)
    }
  }
}
</script>

<style>
div.play-animation-button-area {
}

div.start-menu-animation-icons-activated {
  padding-left: 1.5rem;
  font-size: 50px;
  opacity: 1;
  display: flex;
  align-items: center;
}

div.start-menu-animation-icons-deactivated {
  padding-left: 1.5rem;
  font-size: 50px;
  opacity: 0.5;
  display: flex;
  align-items: center;
  pointer-events: none;
}
.start-menu-animation-icon-activated {
  margin: 0.5rem;
  cursor: pointer;
}

.start-menu-animation-icon-deactivated {
  margin: 0.5rem;
  pointer-events: none;
  cursor: not-allowed;
}
</style>
