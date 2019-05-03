<template>
    <aside class="menu">
        <ul class="menu-list">
            <li class="default-menu-list-item"><a class="default-menu-list-item">SAVE PROJECT</a></li>
            <li><a>Customers</a></li>
        </ul>
    </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default{
    data: function() {
        return{

        }
    },
    methods: {

    }
}
</script>

<style>
    a.default-menu-list-item{
        background-color: rgba(220,0,0,0.5);
    }
    a.default-menu-list-item:hover{
        background-color: rgba(255,0,0,0.8);
    }
</style>
