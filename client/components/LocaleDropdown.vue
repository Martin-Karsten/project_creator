<template>
  <el-submenu index="">
    <template slot="title">{{ locales[locale] }}</template>
    <el-menu-item index=""
      v-for="(value, key) in locales"
      :key="key"
      @click="setLocale(key)"
      >
        {{value}}
    </el-menu-item>
  </el-submenu>
</template>

<script>
import { mapGetters } from "vuex"
import { loadMessages } from "~/plugins/i18n"

export default {
  computed: mapGetters({
    locale: "lang/locale",
    locales: "lang/locales"
  }),

  methods: {
    setLocale(locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale)

        this.$store.dispatch("lang/setLocale", { locale })
      }
    }
  }
}
</script>
