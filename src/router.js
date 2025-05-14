// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Readme from './components/README.vue';
import lth01 from './note/HTML01.vue' // lth01 (Latihan HTML 01)
import lth02 from './note/HTML02.vue'
import lth03 from './note/HTML03.vue'
import kuh01 from './Quiz/KuisHTML.vue' // kuh01 (Kuis HTML 01)
import kuh02 from './Quiz/Template.vue' // kuh01 (Kuis HTML 01)
import mphtml1 from './mapel/html1.vue'
import mpvim from './mapel/vim.vue' // Mata pelajaran vim
import mpgit from './mapel/git.vue' // Mata pelajaran git

const routes = [
  { path: '/', component: Readme }, // Adalah Halaman utama pada website
  { path: '/latihanHTML01', component: lth01 },
  { path: '/latihanHTML02', component: lth02 }, ///html-kuis-01
  { path: '/latihanHTML03', component: lth03 },
  { path: '/html-kuis-01', component: kuh01 }, ///html-kuis-01
  { path: '/html-kuis-02', component: kuh02 }, ///html-kuis-01
  { path: '/HTML-Mapel', component: mphtml1 },
  { path: '/vim', component: mpvim }, // vim
  { path: '/git', component: git }, // git
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// INi komen testing