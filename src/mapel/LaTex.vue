<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->

<h1 id="latex">LaTex</h1>
<p>LaTeX (Pengucapan &quot;Lay-tek&quot; atau &quot;LAH-tek&quot;) adalah sebuah tool untuk typesetting dokumen profesional. </p>
<p>Latex berbdeda dengan aplikasi penulis dokumen biasa, seperti ms word, libre office dan lain-lain. </p>
<p>Pada Latex disini berfokus command line type untuk membuat dokumen, dan akan dikonfersi menjadi PDF setelah selesai. </p>
<h2 id="kenapa-harus-latex">Kenapa Harus LateX</h2>
<p>Latex adalah typesetting yang sangat mendukung dalam penulisan karya ilmiah advacne dan penulisan rumus matematika advance. </p>
<h2 id="contoh-dokumen-minimal">Contoh dokumen minimal</h2>
<p>Dibawah ini adalah contoh dokumen minimal pada Latex</p>
<pre><code><span class="hljs-tag">\<span class="hljs-name">documentclass</span><span class="hljs-string">{article}</span></span>
<span class="hljs-tag">\<span class="hljs-name">begin</span><span class="hljs-string">{document}</span></span>

Dokumen pertama. Ini adalah contoh sederhana, tanpa paramer dan lain-lain. 

<span class="hljs-tag">\<span class="hljs-name">end</span><span class="hljs-string">{document}</span></span>
</code></pre><p>Istilah yang digunakan untuk setiap command dan content diantara <code>\begin{document}</code>  adalah <strong>Preamble</strong></p>
<h2 id="penulisan-identitas-author-dll">Penulisan identitas author dll</h2>
<pre><code><span class="hljs-tag">\<span class="hljs-name">documentclass</span><span class="hljs-string">[12pt, letterpaper]</span><span class="hljs-string">{article}</span></span>
<span class="hljs-tag">\<span class="hljs-name">title</span><span class="hljs-string">{Nama Dokumen Bebas}</span></span>
<span class="hljs-tag">\<span class="hljs-name">author</span><span class="hljs-string">{Anonymus\thanks{
    Referensi panduang dari Overleaf.
}</span></span>}
<span class="hljs-tag">\<span class="hljs-name">date</span><span class="hljs-string">{May 2025}</span></span>
<span class="hljs-tag">\<span class="hljs-name">begin</span><span class="hljs-string">{document}</span></span>
<span class="hljs-tag">\<span class="hljs-name">maketitle</span></span>
Ini adalah paragraph
<span class="hljs-tag">\<span class="hljs-name">end</span><span class="hljs-string">{document}</span></span>
</code></pre><p>breakdown:</p>
<ul>
<li>&#39;maketitle&#39; adalah fungsi yang harus ada dan berfungsi untuk mengikat informasi identitas diatasnya</li>
</ul>
<h2 id="menulis-comment-pada-latex">Menulis comment pada Latex</h2>
<pre><code><span class="hljs-comment">% Ini adalah deklarasi untuk comment</span>
</code></pre><p>Comment disini tidak akan dirender, hanya bisa dilihat dari sisi editor/penulis.</p>
<h2 id="text-style">Text style</h2>
<pre><code>Some <span class="hljs-keyword">of</span> the \textbf{greatest}
discoveries <span class="hljs-keyword">in</span> \underline{science} 
were made <span class="hljs-keyword">by</span> \textbf{\textit{accident}}.
</code></pre><p>Break:</p>
<ul>
<li>Textbf | <strong>Penulisan Bold</strong></li>
<li>Underline | <em>Menulis underline</em></li>
<li>textit | <em>Italic style</em></li>
</ul>
<h2 id="membuat-referensi-untuk-gambar">Membuat referensi untuk gambar</h2>
<pre><code><span class="hljs-tag">\<span class="hljs-name">begin</span><span class="hljs-string">{figure}</span><span class="hljs-string">[h]</span></span>
    <span class="hljs-tag">\<span class="hljs-name">centering</span></span>
    <span class="hljs-tag">\<span class="hljs-name">includegraphics</span><span class="hljs-string">[width=0.75\textwidth]</span><span class="hljs-string">{mesh}</span></span>
    <span class="hljs-tag">\<span class="hljs-name">caption</span><span class="hljs-string">{A nice plot.}</span></span>
    <span class="hljs-tag">\<span class="hljs-name">label</span><span class="hljs-string">{fig:mesh1}</span></span>
<span class="hljs-tag">\<span class="hljs-name">end</span><span class="hljs-string">{figure}</span></span>

<span class="hljs-comment">% Contoh, code menautkan gambar</span>

<span class="hljs-tag">\<span class="hljs-name">ref</span><span class="hljs-string">{fig:mesh1}</span></span>

<span class="hljs-comment">% Memangil nama gambar</span>

<span class="hljs-tag">\<span class="hljs-name">pageref</span><span class="hljs-string">{fig:mesh1}</span></span>.

<span class="hljs-comment">% Memangil halaman berapa gambar tersebut</span>
</code></pre><h2 id="membuat-titik-titik-hitam-untuk-list-unordered-list-">Membuat titik-titik hitam untuk list (Unordered List)</h2>
<pre><code>\begin{itemize}
  \<span class="hljs-built_in">item</span> The individual entries are indicated <span class="hljs-keyword">with</span> a black dot, a so-called bullet.
  \<span class="hljs-built_in">item</span> The <span class="hljs-built_in">text</span> <span class="hljs-keyword">in</span> <span class="hljs-keyword">the</span> entries may be <span class="hljs-keyword">of</span> any <span class="hljs-built_in">length</span>.
\<span class="hljs-keyword">end</span>{itemize}
</code></pre><h2 id="ordered-list">Ordered list</h2>
<pre><code>\begin{enumerate}
  \<span class="hljs-built_in">item</span> This <span class="hljs-keyword">is</span> <span class="hljs-keyword">the</span> <span class="hljs-keyword">first</span> entry <span class="hljs-keyword">in</span> our <span class="hljs-built_in">list</span>.
  \<span class="hljs-built_in">item</span> The <span class="hljs-built_in">list</span> numbers increase <span class="hljs-keyword">with</span> each entry we add.
\<span class="hljs-keyword">end</span>{enumerate}
</code></pre><p>Membuat list dengan penomoran</p>
<h2 id="inline-math">Inline Math</h2>
<pre><code><span class="hljs-symbol">$</span>...<span class="hljs-symbol">$</span>
</code></pre><p>tulis code math didalam &quot;...&quot;</p>
<p>Contoh:</p>
<pre><code><span class="hljs-keyword">In</span> physics, the mass<span class="hljs-params">-energy</span> equivalence is stated 
<span class="hljs-keyword">by</span> the equation $E=mc^<span class="hljs-number">2</span>$, discovered <span class="hljs-keyword">in</span> <span class="hljs-number">1905</span> <span class="hljs-keyword">by</span> Albert Einstein.
</code></pre><h2 id="abstract">Abstract</h2>
<p>Pada karya ilmiah biasannya memiliki bagian absctract. Kita bisa tulis denga latex seperti ini:</p>
<pre><code><span class="hljs-tag">\<span class="hljs-name">documentclass</span><span class="hljs-string">{article}</span></span>
<span class="hljs-tag">\<span class="hljs-name">begin</span><span class="hljs-string">{document}</span></span>


<span class="hljs-tag">\<span class="hljs-name">begin</span><span class="hljs-string">{abstract}</span></span>
This is a simple paragraph at the beginning of the 
document. A brief introduction about the main subject.
<span class="hljs-tag">\<span class="hljs-name">end</span><span class="hljs-string">{abstract}</span></span>


<span class="hljs-tag">\<span class="hljs-name">end</span><span class="hljs-string">{document}</span></span>
</code></pre> <!-- ============ Table of content harus dibawah === -->
<h2 id="table-of-content">Table of content</h2>
<ul>
<li><a href="#kenapa-harus-latex">Kenapa Harus Latex</a></li>
<li><a href="#contoh-dokumen-minimal">Dokumen minmal</a></li>
<li><a href="#penulisan-identitas-author-dll">Penulisan identitas dokumen</a></li>
<li><a href="#menulis-comment-pada-latex">Penulisan comment pada dokumen</a></li>
<li><a href="#text-style">Penulisan Text style(Bold, underline, italic)</a></li>
<li><a href="#membuat-referensi-untuk-gambar">Mencantumkan gambar dan referensi</a></li>
<li><a href="#membuat-titik-titik-hitam-untuk-list-Unordered-list">unordered List</a></li>
<li><a href="#ordered-list">Ordered List</a></li>
<li><a href="#inline-math">Inline Math</a></li>
<li><a href="#abstract">Abstract</a></li>
</ul>
<h2 id="ref">Ref</h2>
<ul>
<li><a href="https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes">https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes</a> </li>
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