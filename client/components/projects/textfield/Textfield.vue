<template>
    <div class="textfield"
    :drag="true"
    :isSnappable="false"
    >
        <!-- <textarea name="Text1" class="textfield" cols="40" rows="5"></textarea> -->
        <textarea v-for="text in textfields[index]" :key="text[index]" 
         v-bind:id="text.id" v-bind:dim="index" name="Text1" class="textfield" cols="40" rows="5" @click="selectTextfield"
         :value="text.text" @change="updateText" ></textarea>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  components: {
  },
  props: ['index'],
  data(){
      return{
      }
  },
    computed: {
    ...mapGetters({
    textfields: 'Textfield/getTextfields',
    })
  },
    methods: {
        selectTextfield(event){
            let payload = {dim: event.target.getAttribute('dim'), id: event.currentTarget.id}
            this.$store.commit('Textfield/CURRENT_SELECTION', payload)
        },
        updateText(event){
        this.$store.commit('Textfield/UPDATE_TEXT', event.target.value)
        }
    }

}
</script>

<style>
textarea.textfield {
    pointer-events: auto;
    resize: none;
    background: transparent;
    position: absolute;
    overflow: hidden;
}
</style>
