<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
      {{ locales[locale] }}
    </a>

    <div class="navbar-dropdown">
      <a
        v-for="(value, key) in locales"
        :key="key"
        class="navbar-item"
        href="#"
        @click.prevent="setLocale(key)"
      >
        {{ value }}
      </a>
    </div>
  </div>
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
