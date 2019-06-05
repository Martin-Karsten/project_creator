<template>
  <div>
    <h1 class="title edit-container-title">
      Paste image or gif url
    </h1>
    <section class="web-image-url-input">
      <div class="field">
        <div class="control">
          <form @submit.prevent="handleSubmit">
            <el-input
              v-model="urlInput"
              class="url-input"
              placeholder="Image URL"
              type="text"
            />
            <el-button size="small" type="success" @click="handleSubmit">
              Submit
            </el-button>
            <el-button size="small" type="danger" @click="cancelSubmit">
              Cancel
            </el-button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["index", "layoutId"],
  data() {
    return {
      inputActivated: false,
      urlInput: "",
      submitButton: true
    }
  },
  methods: {
    handleSubmit() {
      let payload = {
        url: this.urlInput,
        layoutId: this.layoutId,
        id: ''
      }
      this.$store.dispatch("LayoutItems/WebImage/addWebImage", payload)
      this.$store.commit("EditContainer/CLOSE_EDIT_CONTAINER")
      this.urlInput = ""
    },
    cancelSubmit() {
      this.$store.commit("EditContainer/CLOSE_EDIT_CONTAINER")
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
h1.edit-container-title {
  margin-top: 10%;
}
section.web-image-url-input {
  border-color: #000000;
  border: 1px solid;
  width: 50%;
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
  background-color: gray;
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
