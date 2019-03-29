<template>
    <div class="file-drop-area" v-if="image == ''" v-bind:style="{ backgroundColor: backgroundColor.old }">
        <div class="image-button-border">
            <div class="image-add-button">
                <span v-if="files == ''" class="file-msg">Click or drag and drop file here</span> 
                <input class="image-input" type="file"         @dragenter="OnDragEnter"
                                                                @dragleave="OnDragLeave"
                                                                @dragover.prevent
                                                                @change="onInputChange"
                                                                @drop="onDrop"
                                                                :class="{ dragging: isDragging }">
            </div>
        </div>
    </div>

    <section v-else class="content project-image" v-bind:class="boxNumber" id="content" @click="getBoxNumber">
        <!-- <v-chart :options="option" auto-resize /> -->
        <img v-bind:src="image" />
    </section> 
</template>


<script>
import ECharts from '/home/martin/nuxt/larvel-nuxt/node_modules/vue-echarts/dist/vue-echarts.js'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/graphic'
import 'zrender/lib/svg/svg' 
// import rose from '/home/martin/nuxt/laravel-nuxt/client/Images/blue-rose.jpeg'
// import twice from '/home/martin/nuxt/laravel-nuxt/client/Images/twice.jpg'

export default{
  components: {
    'v-chart': ECharts
  },
  props:['boxNumber'],
  data: function(){
    return{
    isDragging: false,
    dragCount: 0,
    files: [],
    images: [],
    image: '',
    test: new Image(),
    imag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAABFklEQVQY022RoW4CURBFD2ETymYFigRDEEgcFoNBIcAj0AQLH0AVfAEOQ0IgCP6C7L5ZWlpBG5o2paJJ01JR/6aCbrI03GTcmZk7c+GfAkj54PqQDsDhkgSuDNQ3njff5vO7bS4XCgx9KJ2B5gReG9D30UiPy6UeFwt96/X0Nps9+FCNw3UDakCfWy37WKvpU7Npv1cr+zEe600msw/AQyAlMJcTbKMmA3pfLOrPeq0PlYoaaGDAFdgJaLwMaAD6OZnoodvV0HEGCKQFwj/IxmED+jWb2Zd2WyWZ7CPgGBhegjeua187Hb0rFNRAOTqwJHAw51ZsZMXAVBIJJ/7nqsA+mhrbMBXIXQrGE2gYGAj0BcoSS/EXVfKm38k6jyMAAAAASUVORK5CYII=",
    backgroundColor: {old: 'white', new: 'lightgray', temp: '', changed: false},
    size: true,
    option:{
    title: {
        left: 'center',
        text: '大数据量面积图',
    },
    graphic: [
        {
            type: 'image',
            id: 'logo',
            right: 0,
            top: 0,
            z: -10,
            bounding: 'raw',
            origin: [0, 0],
            dragable: false,
            style: {
                image: this.test,
                width: 1920,
                height: 1080,
                opacity: 0.8
            }
        },
    ]
      }
    }
  },
  methods: {
      r(){
     //   this.option.title.text = 'Trends' // setOption(this.options, false)
            console.log(this.option.title.text)
          console.log('hi')
      },
      getBoxNumber(){
          event.target.class
      },
        OnDragEnter(e) {
            e.preventDefault();
            
            this.dragCount++;
            this.isDragging = true;
            return false;
        },
        OnDragLeave(e) {
            e.preventDefault();
            this.dragCount--;
            if (this.dragCount <= 0)
                this.isDragging = false;
        },
        onInputChange(e) {
            const files = e.target.files;
            const img = new Image(),
                reader = new FileReader();
            reader.onload = (e) => this.image = e.target.result;
            // reader.readAsDataURL(file);
            // Array.from(files).forEach(file => this.image = file);
            // console.log(this.image)
        },
        onDrop(e) {
            e.preventDefault();
            e.stopPropagation();
            this.isDragging = false;
            const files = e.dataTransfer.files;
            Array.from(files).forEach(file => this.addImage(file));
        },
        addImage(file) {
            if (!file.type.match('image.*')) {
                this.$toastr.e(`${file.name} is not an image`);
                return;
            }
            this.files.push(file);
            const img = new Image(),
                reader = new FileReader();
            reader.onload = (e) => this.image = e.target.result;
            reader.readAsDataURL(file);
            console.log(reader.result)
        },
  }
}
</script>

<style>
div.image-button-border{
    border-color: black;
    border-style: dashed;
    border-width: 1.2px;
    width: 95%;
    height: 95%;
    align-items: center;
    justify-content: center;
    display: flex;  
}
.file-drop-area {
        background-color: white;
        height: 100%;
        align-items: center;
        justify-content: center;
        display: flex;  
}
.image-input{
    position: absolute;
      left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        cursor: pointer;
        opacity: 0;
}
section.project-image{
  position: relative;
  z-index: 1;
}

section.project-image:after{
  content: "";
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%; 
  height: 100%;  
  opacity: .4; 
  z-index: -1;
}

    .echarts {
        width: 100%;
        height: 1080px; /* or e.g. 400px */
    }
</style>
