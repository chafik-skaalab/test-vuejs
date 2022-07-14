<template>
  <b-notification
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </b-notification>
</template>

<docs>
```jsx
<b-notification
  type="is-info"
  has-icon
  aria-close-label="Close notification"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit.
</b-notification>
```
</docs>
