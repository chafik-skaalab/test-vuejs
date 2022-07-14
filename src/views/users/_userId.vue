<i18n>
{
  "en": {
    "users": "Users"
  },
  "fr": {
    "users": "Utilisateurs"
  }
}
</i18n>

<template>
  <page-basic
    :title="userFullname"
    :subtitle="user ? user.uuid : ''"
    :is-loading="isLoading"
  >
    <ui-section>
      <user-edit-form
        v-if="user"
        :user="user"
        @submit="handleSubmit"
      />
    </ui-section>
  </page-basic>
</template>

<script lang="ts">
import Vue from 'vue';
import { Api } from '@/common/api';
import { User } from '@/models';
import UserEditForm from './_partials/_userId/UserEditForm.vue';

export default Vue.extend({
  components: {
    UserEditForm,
  },

  props: {
    userId: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isLoading: false,
      user: null as User | null,
      groups: [],
    };
  },

  computed: {
    userFullname(): string {
      return this.user?.firstname && this.user?.lastname ? `${this.user.firstname} ${this.user.lastname}` : '';
    },
  },

  mounted() {
    this.loadAsyncData();
  },

  methods: {
    async loadAsyncData() {
      this.isLoading = true;
      try {
        await Promise.all([
          this.loadUser(),
        ]);
      } finally {
        this.isLoading = false;
      }
    },

    async loadUser() {
      const data = await Api.query(`users?id=eq.${this.userId}`);
      this.user = data[0] as User;
    },

    handleSubmit() {
      this.$router.push({ name: 'users_list' });
    },
  },
});
</script>
