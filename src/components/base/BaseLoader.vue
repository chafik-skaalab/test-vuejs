<template>
  <b-loading
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<docs>
```vue
<div class="relative h-12">
  <base-loader :is-full-page="false" :active="true" :can-cancel="true" />
</div>
```
</docs>
