<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="context">Context</h1>
<p>context adalah konsep atau tool yang dapat memudahkan kita untuk melakukan export import dari <code>state</code> dan <code>event</code> didalam suatu component. </p>
<p>sekenario penggunaan. Kita membuat banyak component, dan hanya ada satu component yang menyediakan <code>state</code> dan <code>event</code>. Kita bisa membagikan itu ke component lain dengan tool <code>Context</code>. </p>
<h2 id="contoh">contoh</h2>
<p>disini ada dua compoennt, <code>App.js</code> dan <code>item00.js</code>. kita ingin mengirim state dan event dari <code>App.js</code> ke <code>item00.js</code>. </p>
<h3 id="tahap-awal">tahap awal</h3>
<pre><code><span class="hljs-comment">// App.js </span>

<span class="hljs-keyword">import</span> logo <span class="hljs-keyword">from</span> <span class="hljs-string">'./logo.svg'</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">'./App.css'</span>;
<span class="hljs-keyword">import</span> React, { useState, createContext } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>
<span class="hljs-keyword">import</span> Item00 <span class="hljs-keyword">from</span> <span class="hljs-string">'./item00'</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> TodoContext = createContext()
</code></pre><p>break: </p>
<ul>
<li>kita import <code>createContext</code> - adalah tool &quot;Context&quot; itu sendiri. </li>
<li>kita import <code>Item00</code> yang akan dipangil lagi ke App.js. </li>
</ul>
<pre><code><span class="hljs-comment">//App.js </span>
<span class="hljs-keyword">let</span> [<span class="hljs-built_in">count</span>, setCount] = useState(<span class="hljs-number">0</span>)
</code></pre><p>selanjutnya </p>
<pre><code> <span class="hljs-tag">&lt;<span class="hljs-name">TodoContext.Provider</span> <span class="hljs-attr">value</span>=<span class="hljs-string">\{\{</span> <span class="hljs-attr">count</span>, <span class="hljs-attr">setCount</span> \}\}&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Item00</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">TodoContext.Provider</span>&gt;</span>
</code></pre><p>break :</p>
<ul>
<li><code>TodoContext.Provider value={{}}</code> - adalah mendaftarkan, state atau event apa saja yang akan kita kirim. </li>
<li>maka semua compoennt yang terbungkus oleh <code>TodoContext</code> akan bisa akses state tersebut. </li>
</ul>
<h3 id="tahap-selanjutnya">tahap selanjutnya</h3>
<pre><code><span class="hljs-comment">//item00.js </span>

<span class="hljs-keyword">import</span> React, {useContext} <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>
<span class="hljs-keyword">import</span> { TodoContext } <span class="hljs-keyword">from</span> <span class="hljs-string">'./App'</span>

<span class="hljs-keyword">let</span> {count, setCount} = useContext(TodoContext)
</code></pre><p>dengan begini maka component file <code>item00.js</code> bisa melakukan akses kepada state dan event yang dikirim oleh <code>App.js</code></p>
<hr>
<h1 id="note-context">Note Context</h1>
<hr>
<h2 id="pada-file-utama-export-">Pada file utama ( export )</h2>
<p>harus ada </p>
<ul>
<li><code>{createContext}</code></li>
<li><code>export let TodoContext = createContext()</code> - tempatkan pada luar function</li>
<li><code>&lt;TodoContext.Provider value={{ state, setState }}&gt;</code> - Masukan component didalam provider</li>
<li><code>&lt;/TodoContext.Provider&gt;</code></li>
</ul>
<h2 id="pada-file-secondary-import-">pada file secondary ( import )</h2>
<p>harus ada: </p>
<ul>
<li><code>import {useContext} from &#39;react&#39;</code></li>
<li><code>import {TodoContext} from &#39;./App&#39;</code></li>
<li><code>let {state, setState} = useContext(TodoContext)</code></li>
</ul>
<hr>
<h1 id="note-tanpa-context">note Tanpa context</h1>
<hr>
<h2 id="file-utama-export-">file utama (Export)</h2>
<ul>
<li><p><code>function Header(){}</code> - Contoh data yang dikirim </p>
</li>
<li><p><code>&lt;NewItem Header={Header}/&gt;</code> - cara mengirim </p>
</li>
</ul>
<h2 id="file-secondary-import-">File secondary (import)</h2>
<ul>
<li><code>function NewItem({Header}) { Header() }</code> - cara menerima</li>
</ul>
<hr>
<h1 id="aturan-dasar">Aturan dasar</h1>
<hr>
<ul>
<li>Nama component wajib huruf besar diawal!.</li>
</ul>
<h2 id="hasil-akhir">Hasil akhir</h2>
<p><a href="../../code/jsPro/context-ts">context sc</a></p>




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