<template>
  <ValidationProvider
    v-slot="{ errors }"
    v-bind="$attrs"
    :vid="vid"
    :name="$attrs.name || $attrs.label"
    :rules="rules"
  >
    <base-field
      v-bind="$attrs"
      :type="{ 'is-danger': errors[0] }"
      :message="errors"
    >
      <base-input
        v-model="innerValue"
        v-bind="$attrs"
      />
    </base-field>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue';

/**
 * Base input with form validation provided by vee-validate.
 * @see https://codesandbox.io/s/veevalidate-components-buefy-znj4u?file=/src/components/inputs/BInputWithValidation.vue
 */
export default Vue.extend({
  props: {
    vid: {
      type: String,
      default: '',
    },
    rules: {
      type: [Object, String],
      default: '',
    },

    // eslint-disable-next-line vue/require-default-prop
    value: {
      type: String,
    },
  },

  data() {
    return {
      innerValue: '',
    };
  },

  watch: {
    // Handles internal model changes.
    innerValue(newValue) {
      this.$emit('input', newValue);
    },
    // Handles external model changes.
    value(newValue) {
      this.innerValue = newValue;
    },
  },

  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
});
</script>
