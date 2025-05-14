<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="kumpulan-latihan-javascript">Kumpulan latihan Javascript</h1>
<p>Kerjakan latihan-latihan dibawah ini mengunakan bahasa pemrograman Javascript.</p>
<h2 id="contoh-pengerjaan-latihan">Contoh pengerjaan latihan</h2>
<p>Latihan untuk menampilkan if condition, berdasarkan value yang ada. </p>
<p>Tugas:</p>
<ul>
<li>Buat variabel bernama stokBuah yang berisi integer &quot;10&quot;</li>
<li>Buat If statement yang dimana jika stokBuah lebih dari 15, tampilkan(print) &quot;Buah masih banyak&quot;</li>
<li>lanjutan dari If statement, jika stokBuah kurang dari 15, maka tampilkan &quot;Buah tersisa sedikit&quot;</li>
</ul>
<p>Output yang diharapkan:</p>
<pre><code class="lang-html"><span class="hljs-keyword">buah </span>tersisa sedikit
</code></pre>
<p>Cara pengerjaan:</p>
<ul>
<li>Buka text editor</li>
<li>Kerjakan tahapan yang ada dengan bahasa program javascript</li>
<li>setelah program telah selesai ditulis</li>
<li>jalankan program javascript</li>
<li>pastikan Output dari terminal javascript, sesuai dengan &quot;Output yang diharapkkan&quot; dari tugas yang ada</li>
</ul>
<p>Contoh code:</p>
<pre><code class="lang-r"><span class="hljs-keyword">let</span> stokBuah = <span class="hljs-number">10</span>

<span class="hljs-keyword">if</span>(stokBuah &gt; <span class="hljs-number">15</span>){
    console.<span class="hljs-built_in">log</span>(<span class="hljs-comment">"Buah masih banyak)</span>
}
<span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span>(stokBuah &lt; <span class="hljs-number">15</span>){
    console.<span class="hljs-built_in">log</span>(<span class="hljs-comment">"Buah tersisa sedikit)</span>
}
</code></pre>
<p>Ingat untuk pastikan hasil output dari terminal harus sesuai dengan &quot;Output yang diharapkkan&quot;</p>
<hr>
<h2 id="latihan-pertama">Latihan Pertama</h2>
<hr>
<p>Adalah latihan untuk melakukan akses data dari array dan juga melakukan modifikasi pada data yang ada.</p>
<p>Selesaikan setiap tahapan yang ada dibawah ini!</p>
<p>Tugas:</p>
<ul>
<li><p>Buat array bernama buah yang berisi &quot;Apel&quot;, &quot;Mangga&quot;, &quot;Pisang&quot;, &quot;Jeruk&quot;.</p>
</li>
<li><p>Tampilkan array buah.</p>
</li>
<li><p>Tampilkan elemen pertama dan ketiga.</p>
</li>
<li><p>Ubah elemen kedua menjadi &quot;Anggur&quot;.</p>
</li>
<li><p>Tambahkan &quot;Semangka&quot; ke akhir array.</p>
</li>
<li><p>Tampilkan array buah.</p>
</li>
</ul>
<p>Output yang diharapkan:</p>
<pre><code class="lang-r">[ <span class="hljs-symbol">'Apel</span>', <span class="hljs-symbol">'Mangga</span>', <span class="hljs-symbol">'Pisang</span>', <span class="hljs-symbol">'Jeruk</span>' ]
Apel
Pisang
[ <span class="hljs-symbol">'Apel</span>', <span class="hljs-symbol">'Anggur</span>', <span class="hljs-symbol">'Pisang</span>', <span class="hljs-symbol">'Jeruk</span>', <span class="hljs-symbol">'Semangka</span>' ]
</code></pre>
<hr>
<h2 id="latihan-ke-2">Latihan ke 2</h2>
<hr>
<p>Tujuan: Melatih pemahaman array loop</p>
<p>Tugas:</p>
<ul>
<li>gunakan Loop array buah pada latihan pertama dan tampilkan sertiap elemen yang ada.</li>
<li>Buat loop baru, gunakan <code>forEach</code> untuk menampilkan index elemen dan nilai elemen.</li>
</ul>
<p>Output yang diharapkan:</p>
<pre><code class="lang-r"><span class="hljs-attribute">Indeks 0</span>: Apel
<span class="hljs-attribute">Indeks 1</span>: Mangga
<span class="hljs-attribute">Indeks 2</span>: Pisang
<span class="hljs-attribute">Indeks 3</span>: Jeruk
<span class="hljs-attribute">Indeks 0</span>: Apel
<span class="hljs-attribute">Indeks 1</span>: Mangga
<span class="hljs-attribute">Indeks 2</span>: Pisang
<span class="hljs-attribute">Indeks 3</span>: Jeruk
</code></pre>
<hr>
<h2 id="latihan-ke-3">Latihan ke 3</h2>
<hr>
<p>Tujuan: Melatihan pemahaman mengenai array Map dan array filter</p>
<p>Tugas:</p>
<ul>
<li>Buat array <code>angka</code> dengan nilai [1,3,5,7,9]</li>
<li>Gunakan method <code>map()</code> untuk membuat array baru yang berisi setiap elemen dikali 3</li>
<li>berdasarkan array baru, gunakan method <code>filter()</code> untuk membuat array baru yang hanya berisi elemen dengan nilai lebih besar dari 10</li>
</ul>
<p>Output yang diharapkan:</p>
<pre><code class="lang-r">Hasil map:  <span class="hljs-string">[ 3, 9, 15, 21, 27 ]</span>
Hasil filter:  <span class="hljs-string">[ 15, 21, 27 ]</span>
</code></pre>
<hr>
<h2 id="latihan-ke-4">Latihan ke 4</h2>
<hr>
<p>Tujuan: Melatih pemahaman didalam menganalisa sebuah array</p>
<p>Tugas:</p>
<ul>
<li>Buat array dengan nama &quot;buah&quot; yang berisi &quot;Apel&quot;, &quot;Pisang&quot;, &quot;Jeruk&quot;</li>
<li>Buat algoritma yang akan menganilisa array &quot;buah&quot; untuk mencari elemen dengan value &quot;Pisang&quot;. Jika ada elemen &quot;Pisang&quot; tampilkan pada indeks keberapa elemen tersebut berada</li>
<li>Buat algoritma yang akan menganilisa array &quot;buah&quot; untuk mencari elemen dengan value &quot;Semangka&quot;. Tampilkan &quot;Semangka tidak ada&quot; jika element tersebut tidak ada pada array</li>
</ul>
<p>Output yang diharapkan:</p>
<pre><code class="lang-r">Elemen dengan <span class="hljs-built_in">value</span> pisang berada pada <span class="hljs-built_in">index</span> ke <span class="hljs-symbol">:</span> <span class="hljs-number">1</span>
Semangka tidak ada
</code></pre>




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