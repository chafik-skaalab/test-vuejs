<template>
  <button
    :title="label"
    class="w-full flex items-center bg-white py-2 overflow-hidden
      hover:bg-gray-100
      focus:outline-none focus:bg-gray-200"
  >
    <div class="w-20 flex-shrink-0">
      <b-icon
        :icon="icon"
        size="is-medium"
      />
    </div>
    <span class="pr-4 whitespace-no-wrap">{{ label }}</span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
  },
});
</script>
