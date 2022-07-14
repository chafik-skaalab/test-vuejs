<template>
  <b-field
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />

    <template #label>
      <slot name="label" />
    </template>
  </b-field>
</template>

<style>
@screen sm {
  #app .field-label {
    text-align: left;
  }

  #app .field-label.is-normal {
    padding-top: theme('padding.3');
  }
}
</style>

<docs>
```jsx
<base-field label="Name">
  <base-input />
</base-field>
```
</docs>
