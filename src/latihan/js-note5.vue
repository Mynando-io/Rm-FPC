<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="ajax-asynchronous-javascript-and-xml">AJAX Asynchronous JavaScript And XML</h1>
<p>AJAX bukanlah sebuah programming language tetapi sebuah fitur teknologi yang membantu kita untuk membangun aplikasi web dengan lebih interaktif.</p>
<p>Extensible Markup Language (XML) adalah format untuk menyimpan dan mengirim data dari web server.</p>
<h2 id="makna-dari-ajax">Makna dari AJAX</h2>
<p>pada dasarnya Asynchronous adalah konsep dimana aplikasi dapat menjalankan 2 atau lebih proses secara bersamaan.</p>
<p>Sedangkan pada AJAX adalah, Aplikasi dapat mengirim dan menerima data dari webserver tanpa harus melakukan refresh pada halaman aplikasi tersebut.
Proses dibalik background ini yang akan menjadi fitur utama pada AJAX.</p>
<h2 id="cara-kerja-ajax">Cara Kerja AJAX</h2>
<p>AJAX menggunakan tool yang sudah tersedia pada browser untuk melakukan request data kepada web server dan akan menampilkan pada user.</p>
<ul>
<li><code>XMLHttpRequest object</code> : adalah Form API berbentuk Object yang akan membantu dalam transfer data antara web browser dan web browser. </li>
<li><code>HTMLDOM</code> : disaat kita melakukan load pada halaman browser, Browser akan secara otomatis document Object Model dari page tersebut.</li>
</ul>
<p><strong>cara Membuat XMLHttpRequest object:</strong></p>
<pre><code><span class="hljs-keyword">var</span> xhttp = <span class="hljs-function">bew <span class="hljs-title">XMLHttpRequest</span>(<span class="hljs-params"></span>)</span>;
</code></pre><p><strong>cara untuk melakukan request kepada web server, kita gunakan open() dan send() method pada object XMLHttpRequest.</strong></p>
<pre><code>xhttp.open(<span class="hljs-string">"<span class="hljs-keyword">GET</span>"</span>, <span class="hljs-string">"content.txt"</span>, true)
xhttp.send();
</code></pre><p><strong>Buat Function changeContent() menggunakan JavaScript:</strong></p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">changeContent</span>(<span class="hljs-params"></span>) </span>{

    <span class="hljs-keyword">let</span> xhttp = <span class="hljs-keyword">new</span> XMLHttpRequest();
    xhttp.onreadystatechange = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{

    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.readyState == <span class="hljs-number">4</span> &amp;&amp; <span class="hljs-keyword">this</span>.status == <span class="hljs-number">200</span>){
    <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"foo"</span>).innerHTML = <span class="hljs-keyword">this</span>.responseText;
    }
    }

    xhttp.open(<span class="hljs-string">"GET"</span>, <span class="hljs-string">"content.txt"</span>, <span class="hljs-literal">true</span>)
    xhttp.send()
}
</code></pre><h2 id="stutus-code">Stutus code</h2>
<ul>
<li>200: OK </li>
<li>403: Forbidden </li>
<li>404: Not Found</li>
</ul>
<h3 id="source-code">Source code</h3>
<pre><code><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"foo"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>The XMLHttpRequest Object<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">"changeContent()"</span>&gt;</span>Change Content<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">changeContent</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">var</span> xhttp = <span class="hljs-keyword">new</span> XMLHttpRequest();
  xhttp.onreadystatechange = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.readyState == <span class="hljs-number">4</span> &amp;&amp; <span class="hljs-keyword">this</span>.status == <span class="hljs-number">200</span>) {
      <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"foo"</span>).innerHTML =
      <span class="hljs-keyword">this</span>.responseText;
    }
  };
  xhttp.open(<span class="hljs-string">"GET"</span>, <span class="hljs-string">"content.txt"</span>, <span class="hljs-literal">true</span>);
  xhttp.send();
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre><h2 id="reference-">Reference:</h2>
<ul>
<li><a href="https://www.freecodecamp.org/news/ajax-tutorial/">https://www.freecodecamp.org/news/ajax-tutorial/</a></li>
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