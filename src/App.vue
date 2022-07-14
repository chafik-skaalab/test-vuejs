<template>
  <div id="app">
    <AppLayout>
      <router-view />
    </AppLayout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { mapState } from 'vuex';

export default Vue.extend({
  components: {
    AppLayout,
  },

  computed: {
    ...mapState('i18n', ['locale']),
  },

  created() {
    // Change locale if locale from localStorage is different from the default locale
    if (this.locale !== this.$i18n.locale) {
      this.$store.dispatch('i18n/changeLocale', this.locale);
    }
  },
});
</script>

<style>
html {
  overflow: visible !important;
  height: 100%;
}

body {
  display: flex;
  min-height: 100%;

  background: theme('colors.gray.100');
}

#app {
  display: flex;
  flex: 1 1 0%;

  /* IE11 */
  min-height: 100vh;
}
</style>
