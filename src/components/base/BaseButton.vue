<template>
  <b-button
    v-bind="$attrs"
    class="c-button"
    v-on="$listeners"
  >
    <slot />
  </b-button>
</template>

<script lang="ts">
import Vue from 'vue';

/**
 * Default button component.
 */
export default Vue.extend({
  name: 'BaseButton',
});
</script>

<style lang="scss">
.c-button {
  &.button.is-medium {
    padding: theme('padding.4') theme('padding.8');
    font-weight: theme('fontWeight.semibold');
    font-size: theme('fontSize.base');
    line-height: theme('lineHeight.none');
  }
}
</style>

<docs>
```jsx
  <base-button>Default</base-button>
  <base-button type="is-primary">Primary</base-button>
  <base-button type="is-success">Success</base-button>
  <base-button type="is-warning">Warning</base-button>
  <base-button type="is-danger">Danger</base-button>
```
</docs>
