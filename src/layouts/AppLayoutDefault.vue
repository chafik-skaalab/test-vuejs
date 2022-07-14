<template>
  <div
    class="flex-1 flex"
    style="max-width: 100vw;"
  >
    <div
      class="flex flex-col"
    >
      <sidebar-main
        :mobile="mobile"
        :expand-on-hover="expandOnHover"
        :reduce="false"
        class="flex-auto overflow-auto h-0"
      >
        <template #sidebar>
          <router-view name="sidebar" />
        </template>
      </sidebar-main>
    </div>

    <div class="flex-1 flex flex-col overflow-auto">
      <ui-navbar />

      <div
        class="py-12 px-16 flex-auto overflow-auto h-0"
      >
        <div class="container">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SidebarMain from '@/components/SidebarMain.vue';

export default Vue.extend({
  components: {
    SidebarMain,
  },

  data() {
    return {
      expandOnHover: false,
      mobile: 'reduce',
    };
  },
});
</script>

<style lang="scss">
.p-1 {
  padding: 1em;
}

.sidebar-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  // min-height: 100%;
  min-height: 100vh;

  .sidebar-layout {
    display: flex;
    flex-direction: row;
    // min-height: 100%;
    min-height: 100vh;
  }
}

.is-mini-expand {
  .menu-list a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
