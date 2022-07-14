<template>
  <b-modal
    v-bind="$attrs"
    has-modal-card
    v-on="$listeners"
  >
    <template #default="props">
      <base-modal-card
        @close="props.close"
      >
        <template #header>
          <slot name="header" />
        </template>
        <slot />
        <template #footer>
          <slot name="footer" />
        </template>
      </base-modal-card>
    </template>
  </b-modal>
</template>

<script lang="ts">
import Vue from 'vue';

/**
 * Default modal component.
 */
export default Vue.extend({
  data() {
    return {
      isModalActive: false,
    };
  },
});
</script>

<docs>
```vue
<template>
  <div>
    <base-button @click="openModal">Open Modal</base-button>
    <base-modal :active="isModalActive" @close="onClose">
      <template #header>
        Modal
      </template>

      <div>Custom modal content.</div>

      <template #footer>
        <b-button
          label="Close"
          @click="onClose"
        />
        <b-button
          label="Ok"
          type="is-primary"
          @click="onClose"
        />
      </template>
    </base-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalActive: false,
     }
  },
  methods: {
    openModal() {
      this.isModalActive = true
    },
    onClose() {
      this.isModalActive = false
    }
  }
}
</script>
```
</docs>
