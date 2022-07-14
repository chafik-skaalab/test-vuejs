<template>
  <div>
    <ValidationObserver
      v-slot="{ handleSubmit }"
      mode="passive"
    >
      <form @submit.prevent="handleSubmit(submit)">
        <section>
          <base-field
            label="Email"
          >
            <base-validated-input
              v-model="formData.email"
              name="email"
              :placeholder="$t('fields.email')"
              rules="required|email"
            />
          </base-field>

          <base-field
            :label="$t('fields.name')"
          >
            <div class="flex space-x-2">
              <base-validated-input
                v-model="formData.firstname"
                class="flex-1"
                name="firstname"
                :placeholder="$t('fields.firstname')"
              />

              <base-validated-input
                v-model="formData.lastname"
                class="flex-1"
                name="lastname"
                :placeholder="$t('fields.lastname')"
              />
            </div>
          </base-field>

          <base-field>
            <!-- Label left empty for spacing -->
            <p class="control text-right">
              <base-button
                :label="$t('actions.add')"
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
import { Api } from '@/common/api';
import { mapGetters } from 'vuex';

export default Vue.extend({
  data() {
    return {
      isLoading: false,

      formData: {
        email: '',
        firstname: '',
        lastname: '',
      },
    };
  },

  computed: {
    ...mapGetters('user', {
      organizationUuid: 'organizationUuid',
    }),
  },

  methods: {
    async submit() {
      this.isLoading = true;
      try {
        await Api.post('users', {
          ...this.formData,
        });
        this.$emit('submit');
      } finally {
        this.isLoading = false;
      }
    },
  },
});
</script>
