// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Readme from './components/README.vue';
import Httml from './components/HTML.vue';

const routes = [
  { path: '/', component: Readme },
  { path: '/html', component: Httml },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
