require("es6-promise").polyfill()
require("isomorphic-fetch")
import Unsplash, { toJson } from "unsplash-js"

const unsplash = new Unsplash({
  applicationId:
    "0e6fb958d59760bc606fdb08d6f5ee9936203aa26cf7f9ba47a1380adc44a03d",
  secret: "05e0b36ff66aa670e542c3add98313480711d40e1c0264f35534c8c92e1f9dd0"
})

export default {
  getPhotos(searchInput) {
    return unsplash.search
      .photos(searchInput, 1)
      .then(toJson)
      .then(json => {})
  }
}
