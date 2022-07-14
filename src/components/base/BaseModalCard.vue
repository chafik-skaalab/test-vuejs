<template>
  <div
    class="modal-card"
  >
    <header class="modal-card-head">
      <p
        v-if="!!this.$slots.header"
        class="modal-card-title"
      >
        <slot name="header" />
      </p>
      <button
        type="button"
        class="delete"
        @click="$emit('close')"
      />
    </header>
    <section class="modal-card-body">
      <slot />
    </section>
    <footer class="modal-card-foot justify-end">
      <slot name="footer">
        <b-button
          label="Close"
          @click="$emit('close')"
        />
      </slot>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

/**
 * Default modal card component.
 *
 * This component can be used as a wrapper component for generic programmatic modals.
 */
export default Vue.extend({
  name: 'BaseModalCard',
});
</script>

<docs>
```vue
<template>
  <div>
    <base-button @click="openModal">Open Programmatic Modal</base-button>
  </div>
</template>

<script>
import BaseModalCard from '@/components/base/BaseModalCard.vue';

export default {
  methods: {
    openModal() {
      this.$buefy.modal.open({
        parent: this,
        component: BaseModalCard,
        hasModalCard: true,
        trapFocus: true,
      });
    },
  },
};
</script>
```
</docs>
