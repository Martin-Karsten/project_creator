import { schema } from "normalizr"

// Define a users schema
const textfield = new schema.Entity("textfields")
const webImage = new schema.Entity("web_images")
const table = new schema.Entity("tables")
const image = new schema.Entity("images")
const webVideo = new schema.Entity("web_videos")
const shapes = new schema.Entity("shapes")

const layout = new schema.Entity("layouts", {
  images: [image],
  tables: [table],
  textfields: [textfield],
  web_images: [webImage],
  web_videos: [webVideo],
  shapes: [shapes],
})

export default [layout]
