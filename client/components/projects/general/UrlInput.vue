<template>
  <section class="url-input">
    <div class="field">
      <div class="close" @click="closeUrlInput" />
      <div v-if="url === 'image'" class="control">
        <form @submit.prevent="handleSubmit">
          <input
            v-model="urlInput"
            class="input url-input"
            type="text"
            placeholder="Picture URL"
          />
          <button class="button is-small is-success">
            Submit
          </button>
          <button
            class="button is-small is-danger"
            type="button"
            @click="cancelSubmit"
          >
            Cancel
          </button>
        </form>
      </div>

      <div v-else class="control">
        <form @submit.prevent="handleSubmit">
          <input
            v-model="urlInput"
            class="input url-input"
            type="text"
            placeholder="Youtube URL"
          />
          <button class="button is-small is-success">
            Submit
          </button>
          <button
            class="button is-small is-danger"
            type="button"
            @click="cancelSubmit"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import getYouTubeID from "get-youtube-id"
export default {
  props: ["index", "url"],
  data() {
    return {
      inputActivated: false,
      urlInput: "",
      submitButton: true
    }
  },
  computed: {},
  methods: {
    handleSubmit() {
      if (this.url === "image") {
        this.$store.commit("Layout/ADD_WEB_IMAGE", {
          layoutRow: this.index,
          imageRow: 0,
          url: this.urlInput
        })
      } else {
        this.$emit("test", this.urlInput)
        this.$store.commit("Layout/ADD_WEB_VIDEO", {
          layoutRow: this.index,
          imageRow: 0,
          video_id: getYouTubeID(this.urlInput)
        })
      }
      this.$store.commit("LayoutHelpers/HIDE_URL_INPUT", this.index)
    },
    cancelSubmit() {
      this.$store.commit("LayoutHelpers/SHOW_TOOLBAR", this.index)
      this.$store.commit("LayoutHelpers/HIDE_URL_INPUT", this.index)
      this.urlInput = ""
    },
    closeUrlInput() {
      this.$store.commit("LayoutHelpers/SHOW_TOOLBAR", this.index)
      this.$store.commit("LayoutHelpers/HIDE_URL_INPUT", this.index)
    }
  }
}
</script>

<style>
section.url-input {
  border-color: #000000;
  border: 1px solid;
  width: 30%;
  margin: 0;
  padding-top: 50px;
  padding-bottom: 40px;
  padding-left: 50px;
  padding-right: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
input.url-input {
  margin-bottom: 0.25rem;
}
.close {
  position: absolute !important;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
</style>
