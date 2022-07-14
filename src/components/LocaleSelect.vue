<template>
  <base-select v-model="currentLocale">
    <option
      v-for="(locale, index) in locales"
      :key="index"
      :value="locale"
    >
      {{ locale }}
    </option>
  </base-select>
</template>

<script lang="ts">
import Vue from 'vue';
import { locales } from '@/plugins/i18n';

export default Vue.extend({
  data() {
    return { locales };
  },
  computed: {
    currentLocale: {
      get() {
        return this.$store.state.i18n.locale;
      },
      set(newLocale) {
        this.$store.dispatch('i18n/changeLocale', newLocale);
      },
    },
  },
});
</script>
