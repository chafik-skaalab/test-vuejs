<i18n>
{
  "en": {
    "firstname": "Firstname",
    "lastname": "Lastname",
    "lastUpdatedAt": "Updated at",

    "edit": "Edit",

    "empty": "No users"
  },
  "fr": {
    "firstname": "Prénom",
    "lastname": "Nom",
    "lastUpdatedAt": "Modifié le",

    "edit": "Modifier",

    "empty": "Aucuns utilisateurs"
  }
}
</i18n>

<template>
  <section>
    <b-table
      :data="data"
      :loading="loading"

      paginated
      backend-pagination
      :total="total"
      :per-page="perPage"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      backend-sorting

      :default-sort-direction="defaultSortOrder"
      :default-sort="[sortField, sortOrder]"
      @page-change="onPageChange"
      @sort="onSort"
    >
      <b-table-column
        v-slot="props"
        field="avatarUrl"
      >
        <base-avatar
          :src="props.row.avatarUrl"
          :custom-class="['h-8 w-8']"
        />
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="lastname"
        :label="$t('lastname')"
        sortable
      >
        {{ props.row.lastname }}
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="firstname"
        :label="$t('firstname')"
        sortable
      >
        {{ props.row.firstname }}
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="email"
        :label="$t('fields.email')"
        sortable
      >
        {{ props.row.email }}
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="lastUpdatedAt"
        :label="$t('lastUpdatedAt')"
        centered
        sortable
      >
        {{ props.row.lastUpdatedAt ?
          new Date(props.row.lastUpdatedAt).toLocaleDateString() :
          'unknown'
        }}
      </b-table-column>

      <b-table-column
        v-slot="props"
        cell-class="text-right"
      >
        <b-dropdown
          aria-role="list"
          class="is-pulled-right"
          position="is-bottom-left"
        >
          <template #trigger>
            <b-icon icon="ellipsis-v" />
          </template>
          <b-dropdown-item
            aria-role="listitem"
            @click="editUser(props.row.id)"
          >
            {{ $t('edit') }}
          </b-dropdown-item>
        </b-dropdown>
      </b-table-column>

      <template #empty>
        <section class="section">
          <div class="content text-center text-gray-500">
            <p>
              <fa-icon
                class="text-gray-400"
                icon="shapes"
                size="3x"
              />
            </p>
            <p class="text-lg font-semibold">
              {{ $t('empty') }}
            </p>
          </div>
        </section>
      </template>
    </b-table>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Api } from '@/common/api';
import { mapState } from 'vuex';
import { User } from '@/models';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default Vue.extend({
  data() {
    return {
      data: [] as User[],
      total: 0,
      loading: false,
      sortField: '',
      sortOrder: 'desc',
      defaultSortOrder: 'desc',
      page: 1,
      perPage: 10,
    };
  },

  computed: {
    ...mapState('users', {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      needUpdate: (state: any) => state.needUpdate,
    }),
  },

  watch: {
    needUpdate: {
      handler(value) {
        if (value) {
          this.$store.commit('users/setNeedUpdate', false);

          this.loadAsyncData();
        }
      },
      immediate: true,
    },
  },

  mounted() {
    this.loadAsyncData();
  },
  methods: {
    async loadAsyncData() {
      this.loading = true;
      try {
        // Fetch users
        const paramsArray = [
          'select=*',
          // `filter[limit]=${this.perPage}`,
          // `filter[skip]=${(this.page - 1) * this.perPage}`,
        ];
        // if (this.sortField) {
        //   paramsArray.push(`filter[order]=${this.sortField} ${this.sortOrder.toUpperCase()}`);
        // }
        const params = paramsArray.join('&');
        const data = await Api.query(`users?${params}`);
        console.log(data);

        // Assign data
        this.data = data;
        this.total = data.length;
      } catch (error) {
        // TODO: handle error
        console.log(error);

        // Reset data
        this.data = [];
        this.total = 0;
      } finally {
        this.loading = false;
      }
    },

    editUser(userUuid: string) {
      this.$router.push(`/users/${userUuid}`);
    },

    onPageChange(page: number) {
      this.page = page;
      this.loadAsyncData();
    },

    onSort(field: string, order: string) {
      this.sortField = field;
      this.sortOrder = order;
      this.loadAsyncData();
    },
  },
});
</script>
