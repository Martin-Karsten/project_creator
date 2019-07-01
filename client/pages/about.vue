<template>
    <el-main class="general-container">
        <h1>Why does this project exist?</h1>
        <div>
            <p></p>
        </div>

        <h1>How does project work?</h1>
        <div>
            There are currently two existing versions of this project. One version with a fully functional backend that allows a user to login and save their projects.
            And this version, which showcases the functionality of this projects, but is not able to save created projects.

            There are currently 7 "Data Objects" that can be created and modified in a user's project. After creating a new project a user can create 
            <p><strong>Textfield, Images, Tables, Charts, Videos, Shapes and interactive Buttons</strong></p>
            All of these objects can be edited. That means that the user is able to move these objects around freely, change their colors or resize them.
            <p></p>
            Images can be searched by keywords and be selected via the <a href="" target="_blank">unsplash image api</a> and videos can be embeded via youtube. These 
            images and vidoes are fully draggable and resizable.
        </div>
        <h1>How was this project built?</h1>
        <div>
            <h2>Backend</h2>
            The backend is a <strong>Restful Api build in PHP Laravel and my MySQL database</strong>. Why did i choose PHP Laravel and not any other language or
            framework? At the time of building this application i was most familiar with PHP on the backend and a language like Java would have probably been too much 
            setup work for only one person. 
            <h3>Was PHP Laravel, MySQL the best choice for this job?</h3>
            <p>
                Probaly not. A NodeJs backend and a NoSQL database might make things easier because large JSON objects get sent to server. Because of that a lot of table 
                columns are needed in a SQL database. I tried splitting these big JSON objects into smaller objects and save them into seperate tables but turned out to 
                be unpratical. The best solution for me was saving the project as a JSON object consisting of the 7 data objects a user can create and saving them as JSON
                in seperate tables.
            </p>
            <h2>Frontend</h2>
            <p>
                The frontend is a Vue Single Page Application using vuex for state management and nuxt.js for server-side-rendering. That means projects created by a user
                a fully server side rendered and have a better chance of being indexed by a search engine. The project itself is stored as one "project object" in the vuex
                store consisting again off the 7 data objects a user can create. Because the backend's GET project request sends a complex JSON objects consisting of objects
                and arrays i normalized the data. Transforming everything into one big javascript objects in a format like:
            </p>
                <pre>
                    {
                        50d6f2fe-818b-4a04-9773-6ce009052733:  //Object
                        tables: ([table_id_i, table_id_1])
                        textfields: ([textfield_id_1, textfield_id_2])
                        (...)
                    }
                </pre> 
                and data objects are handled in a format like:
                <pre>
                    { 
                        "d75f50be-3318-42ea-beca-f8d19353a63c": { "id": "d75f50be-3318-42ea-beca-f8d19353a63c", "project_id": "b0954b82-9b9d-4224-a691-5d459d29baae", "name": "Textfield 1", "itemName": "textfields", 
                        "text": "", "font": "Calibri", "font_size": 18, "color": "red", "layout_item_id": "50d6f2fe-818b-4a04-9773-6ce009052733", 
                        "row": 0, "class": "", "background_color": "transparent", "background_image": "none", 
                        "border_color": "black", "border_style": "solid", "animations": {}, "border_width": 1, 
                        "border_radius": 0, "opacity": 1, "width": 100, "height": 15, "z_index": 1 } 
                    }
                </pre>
                <p>
                    This approach makes it possible to manipulate data objects without having to always loop trough each and every data object.
                </p>
        </div>
    </el-main>
</template>

<script>
export default {

}
</script>

<style>

</style>
