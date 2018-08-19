import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from '@/pages/LoginPage';
import TodoPage from '@/pages/TodoPage';
import MessagePage from '@/pages/MessagePage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/todos',
      name: 'TodoPage',
      component: TodoPage,
    },
    {
      path: '/notify',
      name: 'MessagePage',
      component: MessagePage,
    },

  ],
});
