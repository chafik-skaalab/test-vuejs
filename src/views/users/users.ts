import { RouteConfig } from 'vue-router';

export default [
  {
    path: '/users',
    component: () => import('@/views/users/index.vue'),
    children: [
      {
        path: '',
        name: 'users_list',
        component: () => import('@/views/users/UsersList.vue'),
      },
      {
        path: ':userId',
        component: () => import('@/views/users/_userId.vue'),
        props: true,
      },
    ],
  },
] as Array<RouteConfig>;
