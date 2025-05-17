// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Readme from './components/README.vue';

import lth01 from './note/HTML01.vue' // lth01 (Latihan HTML 01)
import lth02 from './note/HTML02.vue'
import lth03 from './note/HTML03.vue'
import kuh01 from './Quiz/KuisHTML.vue' // kuh01 (Kuis HTML 01)
import kuh02 from './Quiz/Template.vue' // kuh01 (Kuis HTML 01)


// ======================= Mapel ===========================
import mpvim from './mapel/vim.vue' // Mata pelajaran vim
import mpgit from './mapel/git.vue' // Mata pelajaran git
import mphtml1 from './mapel/html1.vue'// HTML
import mpCss from './mapel/css.vue' // css
import mpJava from './mapel/java.vue' // java
import mpJS from './mapel/javascript.vue' // javascript'
import mpPython from './mapel/python.vue' // python
import mpReact from './mapel/react.vue' // react
import mpR from './mapel/r.vue' // r
import mpRX from './mapel/reactexpo.vue' // react expo
import mpRuby from './mapel/ruby.vue' // ruby
import mpSql from './mapel/sql.vue' // sql
import mpTs from './mapel/typescript.vue' // typescript
import mpVue from './mapel/vuejs.vue' // vue
import mpVim from './mapel/vim.vue' // vim


// ===================== Quiz ====================


// ================ Latihan =========================

// =========================== Test ==============
import testAndri from './Quiz/ContohApp.vue'

const routes = [
  // =============== Homepage Url ==================
  { path: '/', component: Readme }, // Adalah Halaman utama pada website
  // =============== Test Url ==================
  { path: '/testDesign', component: testAndri },
  // =============== Mapel Url ==================
  { path: '/HTML-Mapel', component: mphtml1 },
  { path: '/vim', component: mpvim }, // vim
  { path: '/git', component: mpgit }, // git
  { path: '/css', component: mpCss }, // git
  { path: '/java', component: mpJava }, // git
  { path: '/javascript', component: mpJS }, // git
  { path: '/python', component: mpPython }, // git
  { path: '/react', component: mpReact }, // git
  { path: '/r', component: mpR }, // git
  { path: '/reactexpo', component: mpRX }, // git
  { path: '/ruby', component: mpRuby }, // git
  { path: '/sql', component: mpSql }, // git
  { path: '/typescript', component: mpTs }, // git
  { path: '/vue', component: mpVue }, // git
  { path: '/vim', component: mpVim }, // git

  // ================= Random ==================
  { path: '/latihanHTML01', component: lth01 },
  { path: '/latihanHTML02', component: lth02 }, ///html-kuis-01
  { path: '/latihanHTML03', component: lth03 },
  { path: '/html-kuis-01', component: kuh01 }, ///html-kuis-01
  { path: '/html-kuis-02', component: kuh02 }, ///html-kuis-01
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// INi komen testing