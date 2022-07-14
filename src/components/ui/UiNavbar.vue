<template>
  <nav class="navbar bg-gray-200 border-b border-gray-300">
    <div class="navbar-menu">
      <div class="navbar-end">
        <b-navbar-item>
          <div class="h-full flex items-center">
            <locale-select />
          </div>
        </b-navbar-item>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import LocaleSelect from '@/components/LocaleSelect.vue';

export default Vue.extend({
  components: {
    LocaleSelect,
  },
});
</script>
