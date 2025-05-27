<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="latihan-1">Latihan 1</h1>
<p>latihan pertama adalah menghubungkan file CSS (eksternal css) ke dalam document HTMl.
Lakukan latihan di local computer agar dapat memahami materi dengan lebih baik.</p>
<ul>
<li>Buat document HTML dengan kerangka dasar:
```
&lt;!DOCTYPE html&gt;&lt;html lang='en'&gt;

</li>
</ul>
<head>
</head>

<body>
</body>

<p>&lt;/html&gt;</p>
<pre><code>
- Buat <span class="hljs-keyword">file</span> css <span class="hljs-keyword">di</span> samping <span class="hljs-keyword">file</span> html
</code></pre><pre><code><span class="hljs-comment">/* File CSS sederhana */</span>

<span class="hljs-selector-tag">body</span> { 
    <span class="hljs-attribute">color</span>: white; 
}
</code></pre><pre><code>
Breakdown:
    -<span class="ruby"> element <span class="hljs-symbol">Body:</span> untuk melakukan configurasi tampilan pada element body di file HTML.
</span>    -<span class="ruby"> Property <span class="hljs-symbol">color:</span> untuk melakukan configurasi warna pada element tersebut
</span>
-<span class="ruby"> Untuk memanggil file CSS ke dalam <span class="hljs-symbol">document:</span></span>
</code></pre><pre><code><span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"folder/file.css"</span>/&gt;</span>
</code></pre><pre><code>Breakdown:
    - element <span class="hljs-string">"link"</span> berfungsi sebagai definisi antara document, dan sumber luar. Tetapi sebagian besar digunakan untuk memanggil stylesheet dan logo (http<span class="hljs-variable">s:</span>//www.w3schools.<span class="hljs-keyword">com</span>/<span class="hljs-keyword">tags</span>/tag_link.asp)
    - attribute <span class="hljs-string">"rel"</span> berfungsi untuk menjelaskan secara spesifik hubungan antara document dan document yang dipanggil (http<span class="hljs-variable">s:</span>//www.w3schools.<span class="hljs-keyword">com</span>/<span class="hljs-keyword">tags</span>/att_a_rel.asp)

Perlu diperhatikan, element link tersebut harus berada <span class="hljs-keyword">di</span> dalam container `<span class="hljs-symbol">&lt;head&gt;</span>`
</code></pre><p><head>
    <meta charset='UTF-8' />
    <title>Some Web Page</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
</head>
```</p>
<h2 id="kesimpulan">Kesimpulan</h2>
<ul>
<li>Buat file HTML</li>
<li>Buat file CSS</li>
<li>Panggil file css kedalam document HTML.</li>
<li>lakukan improvisasi hingga terlihat bahwa file css dapat terbukti terhubung dengan document.</li>
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