// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Readme from './components/README.vue';
import lth01 from './note/HTML01.vue' // lth01 (Latihan HTML)
import lth02 from './note/HTML02.vue'
import lth03 from './note/HTML03.vue'
import kuh01 from './Quiz/KuisHTML.vue' // kuh01 (Kuis HTML)
import mphtml1 from './mapel/html1.vue'

const routes = [
  { path: '/', component: Readme }, // Adalah Halaman utama pada website
  { path: '/latihanHTML01', component: lth01 },
  { path: '/latihanHTML02', component: lth02 }, ///html-kuis-01
  { path: '/latihanHTML03', component: lth03 },
  { path: '/html-kuis-01', component: kuh01 }, ///html-kuis-01
  { path: '/HTML-Mapel', component: mphtml1 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// INi komen testing