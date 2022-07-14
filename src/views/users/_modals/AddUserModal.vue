<i18n>
{
  "en": {
    "title": "Add user"
  },
  "fr": {
    "title": "Ajouter un utilisateur"
  }
}
</i18n>

<template>
  <div
    class="modal-card rounded-lg"
  >
    <header class="modal-card-head">
      <p class="modal-card-title">
        {{ $t('title') }}
      </p>
      <button
        type="button"
        class="delete"
        @click="$emit('close')"
      />
    </header>
    <section class="modal-card-body">
      <user-add-form @submit="handleSubmit" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserAddForm from '../_partials/UserAddForm.vue';

export default Vue.extend({
  components: {
    UserAddForm,
  },

  methods: {
    handleSubmit() {
      this.$emit('submit');
      this.$emit('close');
    },
  },
});
</script>
