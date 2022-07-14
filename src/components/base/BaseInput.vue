<template>
  <b-input
    v-bind="$attrs"
    class="c-input"
    v-on="$listeners"
  />
</template>

<docs>
```jsx
<base-input />
```
</docs>

<style lang="scss">
.c-input {
  .input {
    padding: theme('padding.3') theme('padding.4');
  }

  &.is-small {
    .input {
      padding: theme('padding.2') theme('padding.4');
    }
  }
}
</style>
