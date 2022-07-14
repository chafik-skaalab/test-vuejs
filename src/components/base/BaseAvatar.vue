<template>
  <img
    :src="src"
    class="rounded-full object-cover"
    :class="customClass"
  >
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: false,
      default: 'http://placekitten.com/200/200',
    },

    customClass: {
      type: Array,
      required: false,
      default: () => ['h-auto w-auto'],
    },
  },
});
</script>
