<template>
  <div>
    <div class="flex justify-between mb-8">
      <div class="flex-1 mr-4">
        <slot name="title">
          <b-skeleton
            v-if="isLoading"
            width="20%"
            height="40px"
          />

          <h1
            v-else-if="title"
            class="title text-4xl tracking-wide font-bold"
          >
            {{ title }}
          </h1>
        </slot>

        <slot name="subtitle">
          <b-skeleton
            v-if="isLoading"
            width="40%"
            height="20px"
          />

          <h2
            v-if="subtitle"
            class="subtitle text-base"
          >
            {{ subtitle }}
          </h2>
        </slot>
      </div>

      <slot name="actions" />
    </div>

    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },

    subtitle: {
      type: String,
      required: false,
      default: '',
    },

    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
</script>
