<i18n>
{
  "en": {
    "name": "Nom"
  },
  "fr": {
    "name": "Nom"
  }
}
</i18n>

<template>
  <div>
    <ValidationObserver
      v-slot="{ handleSubmit }"
      mode="passive"
    >
      <form @submit.prevent="handleSubmit(submit)">
        <section>
          <base-field
            horizontal
            label="Email"
          >
            <base-validated-input
              v-model="formData.email"
              name="email"
              :placeholder="$t('fields.email')"
              disabled
            />
          </base-field>

          <base-field
            horizontal
            :label="$t('name')"
          >
            <base-validated-input
              v-model="formData.firstname"
              name="firstname"
              :placeholder="$t('fields.firstname')"
              rules="required"
            />

            <base-validated-input
              v-model="formData.lastname"
              name="lastname"
              :placeholder="$t('fields.lastname')"
              rules="required"
            />
          </base-field>

          <base-field horizontal>
            <!-- Label left empty for spacing -->
            <p class="control text-right">
              <base-button
                :label="$t('actions.update')"
                type="is-primary"
                :loading="isLoading"
              />
            </p>
          </base-field>
        </section>
      </form>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { omit } from 'lodash';
import { Api } from '@/common/api';
import { notifySuccess } from '@/utils/NotificationUtils';

export default Vue.extend({
  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isLoading: false,
      formData: { ...this.user },
    };
  },

  methods: {
    async submit() {
      this.isLoading = true;
      try {
        await Api.instance.patch(`users?id=eq.${this.user.id}`, omit(this.formData, 'id'));
        notifySuccess(this.$t('notifications.success.update_successful') as string);
        this.$emit('submit');
      } finally {
        this.isLoading = false;
      }
    },
  },
});
</script>
