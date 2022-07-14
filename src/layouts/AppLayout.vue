<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue';
import { findLast } from 'lodash';
import { RouteRecord } from 'vue-router';

const DEFAULT_LAYOUT = 'AppLayoutDefault';

export default Vue.extend({
  name: 'AppLayout',
  computed: {
    layout() {
      const lastRouteRecordWithLayout = findLast(
        this.$route.matched,
        (record: RouteRecord) => record.meta.layout,
      ) as RouteRecord | undefined;

      const layout = this.$route.meta?.layout
        // Get the last defined layout from parent routes
        || lastRouteRecordWithLayout?.meta?.layout
        || DEFAULT_LAYOUT;

      return () => import(`@/layouts/${layout}.vue`);
    },
  },
});
</script>
