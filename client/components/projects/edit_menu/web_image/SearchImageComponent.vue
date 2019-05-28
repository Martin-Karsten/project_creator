<template>
  <div>
    <form class="form-input" @submit.prevent="searchImage">
      <el-input
        v-model="searchInput"
        type="text"
        placeholder="Search for Image by Keyword"
        suffix-icon="el-icon-search"
         />
    </form>

    <el-row class="t-row">
      <el-col class="web-image-search-column" :span="6"
        v-for="(image, index) in images"
        :key="index"
      >
          <img
            :src="image.urls.small"
            class="web-image-search-image"
            @click="selectImage(image.urls.regular)"
          />
      </el-col>
    </el-row>

      <el-pagination class="web-search-pagination"
        layout="prev, next"
        :hide-on-single-page="true"
        @prev-click="previousPage"
        @next-click="nextPage"
      />

  </div>
</template>

<script>
import unsplash from "../../../../apis/unsplash/unsplash.js"
import WebPagination from "../WebPagination"
require("es6-promise").polyfill()
require("isomorphic-fetch")
import Unsplash, { toJson } from "unsplash-js"

export default {
  components: {
    WebPagination
  },
  props: ["layoutId"],
  data() {
    return {
      unsplash: new Unsplash({
        applicationId:
          "0e6fb958d59760bc606fdb08d6f5ee9936203aa26cf7f9ba47a1380adc44a03d",
        secret:
          "05e0b36ff66aa670e542c3add98313480711d40e1c0264f35534c8c92e1f9dd0"
      }),
      searchInput: "",
      images: "",
      page: 1,
      disabled: false
    }
  },

  methods: {
    searchImage() {
      this.unsplash.search
        .photos(this.searchInput, this.page, 12)
        .then(toJson)
        .then(json => {
          this.images = json.results
        })
    },
    selectImage(url) {
      let payload = {
        url: url,
        layoutId: this.layoutId
      }
      this.$store.dispatch("LayoutItems/WebImage/addWebImage", payload)
    },
    previousPage() {
        this.page -= 1
        this.unsplash.search
          .photos(this.searchInput, this.page, 12)
          .then(toJson)
          .then(json => {
            this.images = json.results
          })
    },
    nextPage() {
      if(this.page > 5)
        return

      this.page += 1
      this.unsplash.search
        .photos(this.searchInput, this.page, 12)
        .then(toJson)
        .then(json => {
          this.images = json.results
        })
    }
  }
}
</script>

<style>
.web-image-search-column {
  height: 10.5rem;
  transition: transform 0.2s;
}
.web-image-search-column:hover {
  transform: scale(1.1);
}
img.web-image-search-image {
  max-height: 95%;
  max-width: 95%;
}

form.form-input {
  margin-bottom: 1rem;
}

.web-search-pagination {
  margin-top: 0 !important;
  margin-bottom: 5rem;
  padding-bottom: 5rem;
}
</style>
