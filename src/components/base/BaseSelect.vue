<template>
  <b-select
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </b-select>
</template>

<docs>
```vue
<template>
  <b-select placeholder="Select a name">
    <option
      v-for="option in data"
      :key="option.id"
      :value="option.id"
    >
      {{ option.user.firstName }}
    </option>
  </b-select>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: '1',
          user: {
            firstName: 'Tony',
          },
        },
        {
          id: '2',
          user: {
            firstName: 'Bruce',
          },
        },
      ],
    };
  },
};
</script>
```
</docs>
