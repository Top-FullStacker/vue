import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout/main.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  base: process.env.BASE_URL,
  routes: [
    { path: '/login', component: () => import('@/views/login.vue') },
    {
      path: '/404',
      name: '',
      component: Layout,
      children: [{
        path: '',
        name: '404',
        component: () => import('@/views/404.vue'),
      }],
    },
    {
      path: '/',
      name: 'home1',
      meta: { text: 'lang.router.home', icon: 'mdi-home' },
      component: Layout,
      children: [{
        path: '',
        name: 'home',
        component: () => import('@/views/dashboard.vue'),
      }],
    },
    {
      path: '/checkout',
      name: '',
      meta: { text: 'lang.router.home', icon: 'mdi-home' },
      component: Layout,
      children: [{
        path: '',
        name: 'home',
        component: () => import('@/views/checkout.vue'),
      }],
    },
    { path: '*', redirect: '/404' },
  ],
});
