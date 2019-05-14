<template>
    <div>
        <form class="form-input" @submit.prevent="searchImage">
            <input type="text" class="input" placeholder="Search for Image by Keyword" v-model="searchInput">
        </form>

        <div class="columns web-images-search-columns is-multiline">
            <div class="column web-image-search-column is-3" v-for="(image, index) in images" :key="index">
                <img :src="image.urls.small" class="web-image-search-image" @click="selectImage(image.urls.regular)">
            </div>
        </div>

        <web-pagination class="web-search-pagination">
            <a class="pagination-previous" :disabled="disabled" @click="previousPage">Previous</a>
            <a class="pagination-next" @click="nextPage">Next page</a>
        </web-pagination>

    </div>
</template>

<script>
import unsplash from '../../../../apis/unsplash/unsplash.js'
import WebPagination from '../WebPagination'
require('es6-promise').polyfill();
require('isomorphic-fetch');
import Unsplash, { toJson } from 'unsplash-js';


export default {
props: ['layoutId'],
components: {
    WebPagination
},
data(){
    return {
        unsplash : new Unsplash({
        applicationId: '0e6fb958d59760bc606fdb08d6f5ee9936203aa26cf7f9ba47a1380adc44a03d',
        secret: '05e0b36ff66aa670e542c3add98313480711d40e1c0264f35534c8c92e1f9dd0'
        }),
        searchInput: '',
        images: '',
        page: 1,
        disabled: true
    }
},

methods:{
    searchImage(){
        this.unsplash.search.photos(this.searchInput, this.page, 12)
          .then(toJson)
          .then(json => {
              this.images = json.results
          });
    },
    selectImage(url){
        let payload = {
            url: url,
            layoutId: this.layoutId
        }
        this.$store.dispatch('LayoutItems/WebImage/addWebImage', payload)
    },
    previousPage(){
        if(this.page != 1){
        this.page -= 1
        this.unsplash.search.photos(this.searchInput, this.page, 12)
          .then(toJson)
          .then(json => {
              this.images = json.results
          });
          if(this.page == 1){
              this.disabled = true
          }
        }
    },
    nextPage(){
        this.page += 1
        this.unsplash.search.photos(this.searchInput, this.page, 12)
          .then(toJson)
          .then(json => {
              this.images = json.results
          });
          this.disabled = false
    }
}
}
</script>

<style>
div.web-image-search-column{
    max-height: 10rem;
    transition: transform .2s; 
}
div.web-image-search-column:hover{
    max-height: 10rem;
    transform: scale(1.1);
}
img.web-image-search-image{
    max-height: 9rem;
    cursor: pointer;
}

form.form-input{
margin-bottom: 1.5rem;
}

div.web-images-search-columns{
    margin-bottom: 0!important;
    padding-bottom: 0!important;
}
.web-search-pagination{
    margin-top: 0!important;
    margin-bottom: 5rem;
    padding-bottom: 5rem;
}

</style>
