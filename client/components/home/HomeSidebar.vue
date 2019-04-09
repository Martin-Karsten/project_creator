<template>
    <aside class="is-fullheight is-hidden-mobile home-sidebar">
    <ul class="menu-list">
        <slot></slot>
    </ul>
  </aside>
</template>

<script>
export default {

}
</script>

<style>
aside.home-sidebar {
    padding-left: 0;
    margin-left: 0;
}

ul.menu-list li a{
    padding-left: 0!important;
    margin-left: 0!important;
}
</style>
