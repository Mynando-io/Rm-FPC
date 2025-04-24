// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Readme from './components/README.vue';
import Httml from './components/HTML.vue';
import lth01 from './note/HTML01.vue'
import lth02 from './note/HTML02.vue'

const routes = [
  { path: '/', component: Readme },
  { path: '/html', component: Httml },
  { path: '/latihanHTML01', component: lth01 },
  { path: '/latihanHTML01', component: lth02 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
