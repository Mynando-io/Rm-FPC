// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Readme from './components/README.vue';

import lth01 from './note/HTML01.vue' // lth01 (Latihan HTML 01)
import lth02 from './note/HTML02.vue'
import lth03 from './note/HTML03.vue'
import kuh01 from './Quiz/KuisHTML.vue' // kuh01 (Kuis HTML 01)
import kuh02 from './Quiz/Template.vue' // kuh01 (Kuis HTML 01)
import quizTest from './Quiz/Template.vue' // Template design 


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

import qzCss from './Quiz/css.vue' // qz = Quiz
import qzGit from './Quiz/git.vue'
import qzRuby from './Quiz/ruby.vue'
import qzVim from './Quiz/vim.vue'


// ================ Latihan =========================


import js1 from './latihan/js-note1.vue'
import js2 from './latihan/js-note2.vue'
import js3 from './latihan/js-note3.vue'
import js4 from './latihan/js-note4.vue'
import js5 from './latihan/js-note5.vue'

import EN1 from './latihan/expo-note1.vue'
import EN2 from './latihan/expo-note2.vue'
import EN3 from './latihan/expo-note3.vue'

import reactNote1 from './latihan/react-note1.vue'
import reactNote2 from './latihan/react-note2.vue'
import reactNote3 from './latihan/react-note3.vue'
import reactNote4 from './latihan/react-note4.vue'
import reactNote5 from './latihan/react-note5.vue'
import reactNote6 from './latihan/react-note6.vue'
import reactNote7 from './latihan/react-note7.vue'
import reactNote8 from './latihan/react-note8.vue'


import ltHTML1 from './latihan/lt-html1.vue'
import ltHTML2 from './latihan/lt-html2.vue'
import ltHTML3 from './latihan/lt-html3.vue'
import ltHTML4 from './latihan/lt-html4.vue'
import ltHTML5 from './latihan/lt-html5.vue'
import ltHTML6 from './latihan/lt-html6.vue'
import ltHTML7 from './latihan/lt-html7.vue'
import ltHTML8 from './latihan/lt-html8.vue'

import ltPy from './latihan/python.vue'
import ltR from './latihan/r.vue'
import ltRuby from './latihan/ruby.vue'
import ltSql from './latihan/sql.vue'
import ltVue from './latihan/vuejs.vue'

// =========================== Test ==============
import testAndri from './Quiz/ContohApp.vue'

const routes = [
  // =============== Homepage Url ==================
  { path: '/', component: Readme }, // Adalah Halaman utama pada website
  // =============== Test Url ==================
  { path: '/testDesign', component: testAndri },
  { path: '/kuis1', component: kuh01},
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

  // ====================== Latihan ======================

  { path: '/js1', component: js1},
  { path: '/js2', component: js2},
  { path: '/js3', component: js3},
  { path: '/js4', component: js4},
  { path: '/js5', component: js5},

{ path: '/expo-note1', component: EN1},
  { path: '/expo-note2', component: EN2},
  { path: '/expo-note3', component: EN3},

  { path: '/react-note1', component: reactNote1},
  { path: '/react-note2', component: reactNote2},
  { path: '/react-note3', component: reactNote3},
  { path: '/react-note4', component: reactNote4},
  { path: '/react-note5', component: reactNote5},
  { path: '/react-note6', component: reactNote6},
  { path: '/react-note7', component: reactNote7},
  { path: '/react-note8', component: reactNote8},

  // ===================== HTMl Latihan 
  { path: '/latihan-html1', component: ltHTML1},
  { path: '/latihan-html2', component: ltHTML2},
  { path: '/latihan-html3', component: ltHTML3},
  { path: '/latihan-html4', component: ltHTML4},
  { path: '/latihan-html5', component: ltHTML5},
  { path: '/latihan-html6', component: ltHTML6},
  { path: '/latihan-html7', component: ltHTML7},
  { path: '/latihan-html8', component: ltHTML8},

  { path: '/ltPython', component: ltPy},
  { path: '/ltR', component: ltR},
  { path: '/ltRuby', component: ltRuby},
  { path: '/ltSql', component: ltSql},
  { path: '/ltVue', component: ltVue},

  // ============================= Quiz =======================

  { path: '/qzVim', component: qzVim},
  { path: '/qzRuby', component: qzRuby},
  { path: '/qzGit', component: qzGit},
  { path: '/qzCss', component: qzCss},
  
  // ================= Random ==================
  { path: '/latihanHTML01', component: lth01 },
  { path: '/latihanHTML02', component: lth02 }, ///html-kuis-01
  { path: '/latihanHTML03', component: lth03 },
  { path: '/html-kuis-01', component: kuh01 }, ///html-kuis-01
  { path: '/html-kuis-02', component: kuh02 }, ///html-kuis-01
  { path: '/quiz', component: quizTest}, // Test Quiz
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// INi komen testing
