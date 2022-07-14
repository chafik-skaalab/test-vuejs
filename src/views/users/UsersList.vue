<i18n>
{
  "en": {
    "users": "Users",
    "add_user": "Add user"
  },
  "fr": {
    "users": "Utilisateurs",
    "add_user": "Ajouter un utilisateur"
  }
}
</i18n>

<template>
  <page-basic :title="$t('users')">
    <template #actions>
      <base-button
        type="is-primary"
        @click="openAddUserModal"
      >
        {{ $t('add_user') }}
      </base-button>
    </template>

    <ui-section>
      <users-table />
    </ui-section>
  </page-basic>
</template>

<script lang="ts">
import Vue from 'vue';
import UsersTable from '@/views/users/_partials/UsersList/UsersTable.vue';
import AddUserModal from './_modals/AddUserModal.vue';

export default Vue.extend({
  components: {
    UsersTable,
  },

  methods: {
    openAddUserModal() {
      this.$buefy.modal.open({
        parent: this,
        component: AddUserModal,
        hasModalCard: true,
        trapFocus: true,
        fullScreen: false,
        canCancel: ['escape', 'outside'],
        events: {
          submit: () => {
            this.$store.commit('users/setNeedUpdate', true);
          },
        },
      });
    },
  },
});
</script>
