<i18n>
{
  "en": {
    "users": "Users"
  },
  "fr": {
    "users": "Utilisateurs"
  }
}
</i18n>

<template>
  <b-sidebar
    position="static"
    :mobile="mobile"
    :expand-on-hover="expandOnHover"
    :reduce="isReduced"
    :fullheight="true"
    type="is-white"
    open
    class="flex border-r border-gray-300"
  >
    <div class="flex-1 flex flex-col">
      <div>
        <router-link
          to="/"
          class="block"
          :class="{
            'px-2 py-6': isReduced,
            'px-6 py-6': !isReduced
          }"
        >
          <img
            src="../assets/images/logo/logo-blue--text-black.png"
            alt="Skaalab"
            class="w-24"
          >
        </router-link>
      </div>

      <div class="flex flex-col items-start py-4">
        <router-link
          v-slot="{ navigate }"
          to="/users"
          custom
        >
          <sidebar-button
            :label="$t('users')"
            icon="user"
            @click.native="navigate"
            @keypress.enter="navigate"
          />
        </router-link>
      </div>

      <div class="flex-1 flex items-start">
        <slot name="sidebar" />
      </div>
    </div>
  </b-sidebar>
</template>

<script lang="ts">
import Vue from 'vue';
import SidebarButton from './SidebarButton.vue';

export default Vue.extend({
  components: { SidebarButton },
  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
    mobile: {
      type: String,
      default: 'reduce',
    },
    /**
     * Show a small sidebar.
     * @values false, true
     */
    reduce: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isReduced() {
      return this.reduce;
    },
  },
});
</script>

<docs>
```jsx
    <sidebar-main />
```
</docs>
