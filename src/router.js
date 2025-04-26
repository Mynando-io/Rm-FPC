// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Readme from './components/README.vue';
import Httml from './components/HTML.vue';
import lth01 from './note/HTML01.vue' // lth01 (Latihan HTML)
import lth02 from './note/HTML02.vue'
import kuh01 from './Quiz/KuisHTML.vue' // kuh01 (Kuis HTML)

const routes = [
  { path: '/', component: Readme },
  { path: '/html', component: Httml },
  { path: '/latihanHTML01', component: lth01 },
  { path: '/latihanHTML02', component: lth02 }, ///html-kuis-01
  { path: '/html-kuis-01', component: kuh01 }, ///html-kuis-01
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
