<template>
  <b-dropdown
    v-bind="$attrs"
    aria-role="list"
    v-on="$listeners"
  >
    <template #trigger="{ active }">
      <slot
        name="trigger"
        :active="active"
      />
    </template>

    <slot />
  </b-dropdown>
</template>

<docs>
```vue
<template>
  <base-dropdown>
    <template #trigger="{ active }">
      <base-button
        label="Open Dropdown"
        type="is-primary"
        :icon-right="active ? 'caret-up' : 'caret-down'"
      />
    </template>

    <base-dropdown-item>
      Action
    </base-dropdown-item>
    <base-dropdown-item>
      Another action
    </base-dropdown-item>
    <base-dropdown-item>
      Something else
    </base-dropdown-item>
  </base-dropdown>
</template>
```
</docs>
