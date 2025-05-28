<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="vue-router">Vue Router</h1>
<p>adalah extension Vue yang dapat membantu kita untuk berpindah-pindah component sesuai dengan Route path (Link url kita)</p>
<p>Contoh Hasil Vue Router ada disini: <a href="https://play.vuejs.org/#eNqFVVtv2zYU/itn6gArmC05btEHTXXTFcWyYZeiLfYy7UGWji02EsmRlOPA8H/fIambnaRD4Fg61++c7yN9DJqc8eirDpKANVIoA0coFOYG30kJJ9gq0cBs3+Is412AEq1B1Xmi2L+ObpvX+3IpI5+b8aFqSJ+rjANErcbQp/v3RrTchLMXlDa7CuZBl07YUoONrCl/bQPT6np9i3UtbLPv0phenVm6L3rQRgm+W79vlULeIQaZmypJ484HxyN87xzRtq3rj+SE08mViX2dlOf7vuAnh/I3xu/AiDdZEGfB+mdBz3ArGkzj0f9sRr4hy5D2zr49ykvjvmdqeTmv9RfDe4i7uM6dxsNiaF9+l0+y+Ts2Qj3cMm3oa94Zfd0py4uBzYFPO6Br3ZPaGzpme9rtQGdxg2WUgOC6Y0PDG/jbjnL0vMAsnhEsQcU4UZaMbU/z8zC3x/PYsbcN/ueilaJW03nDoy1Y+VUkT+0nvHI9PVB6PJE8M44HN2iJ27yt+9q09ek+rFR1oZg0RM5FgmvboKlEqRP/BrATX4SDH171JgBD4CIvThXJVldhP7Y7J9DtxP4nxZKk+470cnFQVuseHh2TlTduWmMEh5uiZsUdSXPAcKlOH/hIZmfEjhODRtPaozNKjyiiGcqn75Ej0Pl3lMyHp2fFeMHnEB/SRia+ict6ep/GXBWV1UGHyGtgh5O1K0KvuC8T/duieoi6tLdvYUYg+rXTmKH3jLmeKoW0owLDI7h8IrnvfAKrIargxfQ/lA0LHjmr8w3W3X3w2dVMIGWchoH9ohEl1pFRrCE2fccsgCY/1Mh3piLjaknc+pujr3TOqedk0eSSrg/BiVU3WtY5dBYMks2CkRtrzoLKGKmTOG65vNtFtON4jLh5Fb2MlnFJJ2tijVA3i40S99rdV1ngNmtr31BQXOLeCFHrRS7Zcy0eBd68jl5H13HNNjFVjxkv8eBq94unMY0mQWzZ7mJIKwtWo/pTGkaCORs2p9+Z+1+dzagWB6BFhcXdE/av+uAhf1RI0+1xMpzJFWnOuz98/gMP9Dw4icW2puhvOD+hFnVrMfqwn1peEuxJnEP7i+OM8d0X/eFgkOt+KAt0FLIj8v03Rh/hvoxeTbaozUONOiq0/aGhX6w5aY1xn7cRqkSVwEoegMCyEl4sl8sf3d1H5RhfbATdKk0C10t5cHaZlyWBHSzUJeNUFtaQww/08Tenz65xSzf+NLJaTTuP5UcARVFMACSwpL9VVyE4/QesCg/V">https://play.vuejs.org/#eNqFVVtv2zYU/itn6gArmC05btEHTXXTFcWyYZeiLfYy7UGWji02EsmRlOPA8H/fIambnaRD4Fg61++c7yN9DJqc8eirDpKANVIoA0coFOYG30kJJ9gq0cBs3+Is412AEq1B1Xmi2L+ObpvX+3IpI5+b8aFqSJ+rjANErcbQp/v3RrTchLMXlDa7CuZBl07YUoONrCl/bQPT6np9i3UtbLPv0phenVm6L3rQRgm+W79vlULeIQaZmypJ484HxyN87xzRtq3rj+SE08mViX2dlOf7vuAnh/I3xu/AiDdZEGfB+mdBz3ArGkzj0f9sRr4hy5D2zr49ykvjvmdqeTmv9RfDe4i7uM6dxsNiaF9+l0+y+Ts2Qj3cMm3oa94Zfd0py4uBzYFPO6Br3ZPaGzpme9rtQGdxg2WUgOC6Y0PDG/jbjnL0vMAsnhEsQcU4UZaMbU/z8zC3x/PYsbcN/ueilaJW03nDoy1Y+VUkT+0nvHI9PVB6PJE8M44HN2iJ27yt+9q09ek+rFR1oZg0RM5FgmvboKlEqRP/BrATX4SDH171JgBD4CIvThXJVldhP7Y7J9DtxP4nxZKk+470cnFQVuseHh2TlTduWmMEh5uiZsUdSXPAcKlOH/hIZmfEjhODRtPaozNKjyiiGcqn75Ej0Pl3lMyHp2fFeMHnEB/SRia+ict6ep/GXBWV1UGHyGtgh5O1K0KvuC8T/duieoi6tLdvYUYg+rXTmKH3jLmeKoW0owLDI7h8IrnvfAKrIargxfQ/lA0LHjmr8w3W3X3w2dVMIGWchoH9ohEl1pFRrCE2fccsgCY/1Mh3piLjaknc+pujr3TOqedk0eSSrg/BiVU3WtY5dBYMks2CkRtrzoLKGKmTOG65vNtFtON4jLh5Fb2MlnFJJ2tijVA3i40S99rdV1ngNmtr31BQXOLeCFHrRS7Zcy0eBd68jl5H13HNNjFVjxkv8eBq94unMY0mQWzZ7mJIKwtWo/pTGkaCORs2p9+Z+1+dzagWB6BFhcXdE/av+uAhf1RI0+1xMpzJFWnOuz98/gMP9Dw4icW2puhvOD+hFnVrMfqwn1peEuxJnEP7i+OM8d0X/eFgkOt+KAt0FLIj8v03Rh/hvoxeTbaozUONOiq0/aGhX6w5aY1xn7cRqkSVwEoegMCyEl4sl8sf3d1H5RhfbATdKk0C10t5cHaZlyWBHSzUJeNUFtaQww/08Tenz65xSzf+NLJaTTuP5UcARVFMACSwpL9VVyE4/QesCg/V</a> </p>
<h2 id="penggunaan">Penggunaan</h2>
<h3 id="instalasi">Instalasi</h3>
<p><code>npm install vue-router@4</code></p>
<p>Install vue extension</p>
<h3 id="router-js">Router Js</h3>
<p>Buat File baru didalam folder &#39;src&#39; dengan nama &#39;router.js&#39;</p>
<pre><code class="lang-HTML"><span class="hljs-comment">// src/router.js</span>
<span class="hljs-keyword">import</span> { createRouter, createWebHistory } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue-router'</span>;
<span class="hljs-keyword">import</span> Readme <span class="hljs-keyword">from</span> <span class="hljs-string">'./components/README.vue'</span>; <span class="hljs-comment">// &lt;== Sesuaikan sesuai kebutuhan</span>
<span class="hljs-keyword">import</span> Httml <span class="hljs-keyword">from</span> <span class="hljs-string">'./components/HTML.vue'</span>; <span class="hljs-comment">// &lt;== Sesuaikan sesuai kebutuhan </span>

<span class="hljs-keyword">const</span> routes = [
  { <span class="hljs-attr">path</span>: <span class="hljs-string">'/'</span>, <span class="hljs-attr">component</span>: Readme }, <span class="hljs-comment">// &lt;== Sesuaikan sesuai kebutuhan</span>
  { <span class="hljs-attr">path</span>: <span class="hljs-string">'/html'</span>, <span class="hljs-attr">component</span>: Httml }, <span class="hljs-comment">// &lt;== Sesuaikan sesuai kebutuhan</span>
];

<span class="hljs-keyword">const</span> router = createRouter({
  <span class="hljs-attr">history</span>: createWebHistory(),
  routes,
});

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> router;
</code></pre>
<p>Lakukan configurasi ulang pada code diatas, sesuai kebutuhan.</p>
<p>Konfigurasi bagian ini:</p>
<ul>
<li>&#39;Readme&#39;</li>
<li>&#39;Httml&#39;</li>
</ul>
<h3 id="main-js">Main js</h3>
<p>Didalam folder &#39;src&#39;, lakukan configurasi pada file &#39;Main.js&#39;</p>
<pre><code class="lang-Html"><span class="hljs-comment">// src/main.js</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'./style.css'</span>
<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">'./App.vue'</span>
<span class="hljs-keyword">import</span> router <span class="hljs-keyword">from</span> <span class="hljs-string">'./router'</span>; <span class="hljs-comment">// Import router</span>


createApp(App).use(router).mount(<span class="hljs-string">'#app'</span>) <span class="hljs-comment">// Jalankan Route dan mount bersama CSS</span>
</code></pre>
<p>Seharusnya configurasi diatas sudah cukup, tidak perlu ada tambahan lagi kecuali jika menggunakan ekstension lain.</p>
<h2 id="app-js">App js</h2>
<p>Pada halaman utama, cukup beri configurasi didalam &#39;template&#39;</p>
<pre><code class="lang-Html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nav</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">RouterLink</span> <span class="hljs-attr">to</span>=<span class="hljs-string">"/"</span>&gt;</span>Go to Home<span class="hljs-tag">&lt;/<span class="hljs-name">RouterLink</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">RouterLink</span> <span class="hljs-attr">to</span>=<span class="hljs-string">"/html"</span>&gt;</span>Go to HTML<span class="hljs-tag">&lt;/<span class="hljs-name">RouterLink</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nav</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">main</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">RouterView</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre>
<p>Yang dimana item didalam Nav adalah Link untuk berpindah komponent, sedangkan Item didalam Main adalah bagian yang akan menampilkan component.</p>
<h3 id="catatan-tambahan">Catatan tambahan</h3>
<p>Konsep pada &#39;App js&#39; juga bisa diaplikasikan kepada component lainnnya juga, tampa ada konfigurasi lain.</p>
<p>Hanya saja &quot;RouteView&quot; tidak akan dipakai pada kompoennt lain, oleh karena itu selain file &quot;Main.js&quot; tidak perlu ada container &#39;Main&#39; dan item didalamnya. </p>
<h3 id="penjelasan-breakdown">Penjelasan breakdown</h3>
<p><em>RouterLink</em> adalah Sebuah tools yang akan membantu kita melakukan perpindahan komponent. </p>
<p><em>RouterView</em> adalah tools yang akan menampilkan perpindahan komponent tersebut, semisal dari &#39;readme&#39; ke &#39;HTML&#39; komponent. </p>
<h2 id="reference">Reference</h2>
<ul>
<li><a href="https://router.vuejs.org/guide/">https://router.vuejs.org/guide/</a> </li>
</ul>




<!-- biarkan code dibawah ini -->
<nav>
    <RouterLink to="/">Go to Home</RouterLink>
</nav>
<!-- 000000000000000000000000000000000000000000000000000000 Template area end  000000000000000000000000000000000000000000 -->
</template>






<style scoped>

/* ============================================== Style area start ======================================= */


/* ============================================== Style area end ======================================= */
</style>