<template>
  <div class="columns is-multiline start-menu">
      <div class="column is-5 menu-section start-menu-animation-icons">
        <fa class="start-menu-animation-icon" icon="envelope"></fa>
        <fa class="start-menu-animation-icon" icon="envelope"></fa>
      </div>

    </div>  
</template>

<script>
import { Editor, EditorMenuBar, EditorContent } from 'tiptap'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    components: {

    },
    data(){
      return{
      editor: null,
        menuItemActivated: 'menu-section-activated',
        creatorActivated: false,
        fieldActivated: false,
      }
    },
    computed: {
    ...mapGetters({
    }),
  },

  mounted() {

  },
    methods: {
      activateTextfieldIcon(){
        this.creatorActivated = true
        this.$store.commit('StartMenu/ACTIVATE_ICON', 0)
      },
      activateImageIcon(){
        this.creatorActivated = true
        this.$store.commit('StartMenu/ACTIVATE_ICON', 1)
      },
      activateTableIcon(){
        this.creatorActivated = true
        this.$store.commit('StartMenu/ACTIVATE_ICON', 2)
      },
      activateChartIcon(){
        this.creatorActivated = true
        this.$store.commit('StartMenu/ACTIVATE_ICON', 3)
      },
      activateShapeIcon(){
        this.creatorActivated = true
        this.$store.commit('StartMenu/ACTIVATE_ICON', 0)
      },
      test() {
      }
    }
}
</script>

<style>
div.start-menu-animation-icons{
  font-size: 50px;
  display: flex;
  align-items: center;
}
.start-menu-animation-icon{
  margin: 1rem;
  cursor: pointer;
}
</style>
