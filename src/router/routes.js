const routes = [
  {
    path: '/',
    name: 'MainLayout',
    component: () => import('@/components/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'ViewHome',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/airconditioner',
        name: 'ViewAirConditioner',
        component: () => import('@/views/AirConditioner.vue'),
      },
      {
        path: '/member',
        name: 'ViewMember',
        component: () => import('@/views/Member.vue'),
      },
    ],
  },
];

export default routes;
