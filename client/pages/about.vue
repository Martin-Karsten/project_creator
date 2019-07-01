<template>
    <el-main class="general-container">
        <div v-if="locale === 'en'" class="about-en">
        <h1>Notable Features</h1>
        <div>
            <ul>
                <li>Laravel PHP Backend</li>
                <li>Vue, Vuex, Nuxt Frontend</li>
                <li>Server Side Rendering</li>
                <li>Textfields, Online Image search, Tables, Charts, Online Videos, Shapes, Interactive Buttons</li>
                <li>Every Object is draggable, resizable or editable in some other way</li>
                <li>Draggable sidebar that is coresponds to the project and takes a screenshot of the elemnts inside the project</li>
                <li>Infinite Scroll feature on the Home Page</li>
            </ul>
        </div>

        <h1>How does this project work?</h1>
        <div class="about-description">
            There are currently two existing versions of this project. One version with a fully functional backend that allows a user to login and save their projects.
            And this version, which showcases the functionality of this projects, but is not able to save created projects.

            There are currently 7 "Data Objects" that can be created and modified in a user's project. After creating a new project a user can create 
            <p><strong>Textfields, Images, Tables, Charts, Videos, Shapes and interactive buttons</strong></p>
            All of these objects can be edited. That means that the user is able to move these objects around freely, change their colors or resize them.
            <p></p>
            Images can be searched by keywords and be selected via the <a href="" target="_blank">unsplash image api</a> and videos can be embeded via youtube. These 
            images and vidoes are fully draggable and resizable.
        </div>
        <h1>How was this project built?</h1>
        <div class="about-description">
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
                    This approach makes it possible to reference data objetcs directly
                </p>
        </div>
        </div>

        <div v-else class="about-de">
        <h1>Nennenswerte Features</h1>
        <div>
            <ul>
                <li>Laravel PHP Backend</li>
                <li>Vue, Vuex, Nuxt Frontend</li>
                <li>Server Side Rendering</li>
                <li>Textfelder, Online Bilder suche, Tabellen, Graphen, Online Videos, Formen, Interaktive Buttons</li>
                <li>Jedes Objekt is beweglich, skalierbar oder in einer andern Art veränderbar</li>
                <li>Sidebar bei der Projekterstellung ist beweglich und entspricht der Reihung des Projects und erstellt Screenshots</li>
                <li>Infinite Scroll feature auf der Home Seite</li>
            </ul>
        </div>

        <h1>Wie funktioniert dieses Projekt?</h1>
        <div class="about-description">
            Momentant gibt es zwei versionen dieses Projektes. Eine Version mit einer voll funktionierenden Backend dies es Nutzern erlaubt sich einzulogen und ihre Project zu speicern.
            Und diese version, welche die Funktionalität dieses Projektes zeigt. Nutzer können jedoch keine Project speichern.

            Momentan git es sieben Datenobjekte die ein Nutzer erstellen und modifizieren kann. Nachdem ein Nutzer ein neues Projekt erstellt hat kann dieser
            <p><strong>Textfelder, Bilder, Tabellen, Graphen, Videos, Formen und interaktive Buttons</strong> in das Projekt einfügen.</p>
            All diese Objekte können verändert werden. Das heißt ein Nutzer kann Objekte bewegen, sie in ihrer Größe verändern oder ihre Farbe ändern.
            <p></p>
            Bilder können mit Hilfe der <a href="" target="_blank">unsplash image api</a> in ein Projekt eingefügt werden, und Videos können mit Hilfe von Youtube in ein Projekt eingebettet werden.
        </div>
        <h1>Wie wurde dieses Projet erstellt?</h1>
        <div class="about-description">
            <h2>Backend</h2>
            Das Backend ist eine <strong>Restful Api gebaut in PHP Laravel und MySQL Datenbank</strong>. Warum habe ich PHP Laravel und nicht irgendeine andere Sprache oder
            Framkework verwendet? Als ich angefangen habe dieses Projekt zu erstellen war ich mit PHP in der Backend am vertrautesten und eine Sprache wie Java wäre für eine Person
            wahrscheinlich zu viel gewesen.
            <h3>Ist PHP Laravel und ein MySQL Datenbank die beste wahl für diese Projekt?</h3>
            <p>
                Wahrscheinlich nicht. Eine NodeJs Backend und eine NoSQL Datenbank hätten einiges vielleicht einfacher gemacht, da große JSON Objekte an den Server gesendet werden.
                Aus diesem Grund werden viele Spalten in einer SQL Datenbank benötigt. Ich habe versucht diese großen JSON Objekte in kleinere Objekte bestehend aus den sieben Datenobjekten
                aufzuteilen. Dies hat sich aber als unpraktisch herausgestellt. Diese beste Lösung für mich war es ein von einm Nutzer gespeichert Projekt als JSON Datei bestehend aus
                den Datenobjekten an den Server zu senden diese seperate als JSON in ihren eignen Tabellen zu speichern.
                zu senden 
            </p>
            <h2>Frontend</h2>
            <p>
                Die Frontend ist eine Vue Single Page Applikation in Verbindung mit vuex für zentrales state management und nuxt.js für server-side-rendering. Dies hat den Vorteil, dass
                von Nutzern erstellte Projekte auch server side rendering verwenden und somit besser von Suchmaschinen gefunden werden können als einfache Single Page Applikationen. Ein 
                vom Nutzer erstelltes Projekt wird als "project" bestehend aus den 7 Datenobjekten als JSON Objekt im vuex store gespeichert. Da der Server bei GET project requests komplexe JSON
                Objekte bestehende aus Objekten und Arrays zurück gibt habe ich diese normalisiert. Objekte die von dem Server kommen wurden in Javascript Objekte mit folgender Struktur umgewandelt: 
                <pre>
                    {
                        50d6f2fe-818b-4a04-9773-6ce009052733:  //Object
                        tables: ([table_id_i, table_id_1])
                        textfields: ([textfield_id_1, textfield_id_2])
                        (...)
                    }
                </pre> 
                und Datenkobjekte haben entsprechend folgende Form:
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
                    Diese Herangehensweise erlaubt es Datenobjekte direkt zu referenzieren.
                </p>
        </div>
        </div>
    </el-main>
</template>

<script>

import { mapGetters } from "vuex"
import { loadMessages } from "~/plugins/i18n"

export default {
  computed: mapGetters({
    locale: "lang/locale",
    locales: "lang/locales"
  }),
}
</script>

<style>
    .about-description{
        padding-left: 1rem;
        padding-right: 1rem;
    }
</style>
