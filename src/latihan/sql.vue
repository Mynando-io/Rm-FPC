<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="-latihan-sql-untuk-pemula-dan-menengah"> Latihan SQL untuk Pemula dan Menengah</h1>
<p>Dokumen ini berisi kumpulan latihan SQL yang dirancang untuk membantu pemula hingga pengguna tingkat menengah dalam memahami dasar-dasar hingga konsep penting dalam SQL. Contoh data menggunakan tabel <code>karyawan</code>, <code>departemen</code>, dan <code>gaji</code>.</p>
<h2 id="-struktur-tabel-contoh"> Struktur Tabel Contoh</h2>
<h3 id="1-tabel-karyawan-">1. Tabel <code>karyawan</code></h3>
<table>
<thead>
<tr>
<th>id_karyawan</th>
<th>nama</th>
<th>usia</th>
<th>id_departemen</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Andi Setiawan</td>
<td>28</td>
<td>101</td>
</tr>
<tr>
<td>2</td>
<td>Budi Hartono</td>
<td>35</td>
<td>102</td>
</tr>
<tr>
<td>3</td>
<td>Clara Lestari</td>
<td>30</td>
<td>101</td>
</tr>
<tr>
<td>4</td>
<td>Dodi Santoso</td>
<td>25</td>
<td>103</td>
</tr>
</tbody>
</table>
<h3 id="2-tabel-departemen-">2. Tabel <code>departemen</code></h3>
<table>
<thead>
<tr>
<th>id_departemen</th>
<th>nama_departemen</th>
</tr>
</thead>
<tbody>
<tr>
<td>101</td>
<td>IT</td>
</tr>
<tr>
<td>102</td>
<td>HRD</td>
</tr>
<tr>
<td>103</td>
<td>Keuangan</td>
</tr>
</tbody>
</table>
<h3 id="3-tabel-gaji-">3. Tabel <code>gaji</code></h3>
<table>
<thead>
<tr>
<th>id_karyawan</th>
<th>gaji_pokok</th>
<th>bonus</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>6000000</td>
<td>500000</td>
</tr>
<tr>
<td>2</td>
<td>7000000</td>
<td>1000000</td>
</tr>
<tr>
<td>3</td>
<td>6500000</td>
<td>750000</td>
</tr>
<tr>
<td>4</td>
<td>5500000</td>
<td>250000</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="-dasar-dasar-sql"> Dasar-Dasar SQL</h2>
<h3 id="1-menampilkan-semua-data">1. Menampilkan Semua Data</h3>
<pre><code class="lang-sql"><span class="hljs-keyword">SELECT</span> * <span class="hljs-keyword">FROM</span> karyawan;
</code></pre>
<h3 id="2-menampilkan-nama-dan-usia-karyawan">2. Menampilkan Nama dan Usia Karyawan</h3>
<pre><code class="lang-sql"><span class="hljs-keyword">SELECT</span> nama, usia <span class="hljs-keyword">FROM</span> karyawan;
</code></pre>
<h3 id="3-menampilkan-karyawan-usia-di-atas-30">3. Menampilkan Karyawan Usia di Atas 30</h3>
<pre><code class="lang-sql"><span class="hljs-keyword">SELECT</span> * <span class="hljs-keyword">FROM</span> karyawan <span class="hljs-keyword">WHERE</span> usia &gt; <span class="hljs-number">30</span>;
</code></pre>
<h3 id="4-mengurutkan-data-berdasarkan-usia-menurun-">4. Mengurutkan Data Berdasarkan Usia (Menurun)</h3>
<pre><code class="lang-sql"><span class="hljs-keyword">SELECT</span> * <span class="hljs-keyword">FROM</span> karyawan <span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> usia <span class="hljs-keyword">DESC</span>;
</code></pre>
<hr>
<h2 id="-join-antar-tabel"> JOIN Antar Tabel</h2>
<h3 id="5-menampilkan-nama-karyawan-dan-nama-departemennya">5. Menampilkan Nama Karyawan dan Nama Departemennya</h3>
<pre><code class="lang-sql"><span class="hljs-keyword">SELECT</span> k.nama, d.nama_departemen
<span class="hljs-keyword">FROM</span> karyawan k
<span class="hljs-keyword">JOIN</span> departemen d <span class="hljs-keyword">ON</span> k.id_departemen = d.id_departemen;
</code></pre>
<h3 id="6-menampilkan-nama-karyawan-gaji-pokok-dan-bonus">6. Menampilkan Nama Karyawan, Gaji Pokok, dan Bonus</h3>
<pre><code class="lang-sql"><span class="hljs-keyword">SELECT</span> k.nama, g.gaji_pokok, g.bonus
<span class="hljs-keyword">FROM</span> karyawan k
<span class="hljs-keyword">JOIN</span> gaji g <span class="hljs-keyword">ON</span> k.id_karyawan = g.id_karyawan;
</code></pre>
<hr>
<h2 id="-agregasi-dan-grouping"> Agregasi dan Grouping</h2>
<h3 id="7-menghitung-jumlah-karyawan-per-departemen">7. Menghitung Jumlah Karyawan per Departemen</h3>
<pre><code class="lang-sql"><span class="hljs-keyword">SELECT</span> d.nama_departemen, <span class="hljs-keyword">COUNT</span>(*) <span class="hljs-keyword">AS</span> jumlah_karyawan
<span class="hljs-keyword">FROM</span> karyawan k
<span class="hljs-keyword">JOIN</span> departemen d <span class="hljs-keyword">ON</span> k.id_departemen = d.id_departemen
<span class="hljs-keyword">GROUP</span> <span class="hljs-keyword">BY</span> d.nama_departemen;
</code></pre>
<h3 id="8-menghitung-gaji-total-setiap-karyawan">8. Menghitung Gaji Total Setiap Karyawan</h3>
<pre><code class="lang-sql"><span class="hljs-keyword">SELECT</span> k.nama, (g.gaji_pokok + g.bonus) <span class="hljs-keyword">AS</span> total_gaji
<span class="hljs-keyword">FROM</span> karyawan k
<span class="hljs-keyword">JOIN</span> gaji g <span class="hljs-keyword">ON</span> k.id_karyawan = g.id_karyawan;
</code></pre>
<hr>
<h2 id="-latihan-lanjutan"> Latihan Lanjutan</h2>
<h3 id="9-tampilkan-nama-karyawan-dengan-gaji-total-tertinggi">9. Tampilkan Nama Karyawan dengan Gaji Total Tertinggi</h3>
<pre><code class="lang-sql"><span class="hljs-keyword">SELECT</span> k.nama, (g.gaji_pokok + g.bonus) <span class="hljs-keyword">AS</span> total_gaji
<span class="hljs-keyword">FROM</span> karyawan k
<span class="hljs-keyword">JOIN</span> gaji g <span class="hljs-keyword">ON</span> k.id_karyawan = g.id_karyawan
<span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> total_gaji <span class="hljs-keyword">DESC</span>
<span class="hljs-keyword">LIMIT</span> <span class="hljs-number">1</span>;
</code></pre>
<h3 id="10-tampilkan-nama-departemen-yang-memiliki-rata-rata-gaji-tertinggi">10. Tampilkan Nama Departemen yang Memiliki Rata-rata Gaji Tertinggi</h3>
<pre><code class="lang-sql"><span class="hljs-keyword">SELECT</span> d.nama_departemen, <span class="hljs-keyword">AVG</span>(g.gaji_pokok + g.bonus) <span class="hljs-keyword">AS</span> rata_rata_gaji
<span class="hljs-keyword">FROM</span> karyawan k
<span class="hljs-keyword">JOIN</span> gaji g <span class="hljs-keyword">ON</span> k.id_karyawan = g.id_karyawan
<span class="hljs-keyword">JOIN</span> departemen d <span class="hljs-keyword">ON</span> k.id_departemen = d.id_departemen
<span class="hljs-keyword">GROUP</span> <span class="hljs-keyword">BY</span> d.nama_departemen
<span class="hljs-keyword">ORDER</span> <span class="hljs-keyword">BY</span> rata_rata_gaji <span class="hljs-keyword">DESC</span>
<span class="hljs-keyword">LIMIT</span> <span class="hljs-number">1</span>;
</code></pre>
<hr>
<h2 id="-tips-belajar-sql"> Tips Belajar SQL</h2>
<ul>
<li>Gunakan tools seperti <strong>DB Fiddle</strong>, <strong>SQL Fiddle</strong>, atau <strong>SQLiteStudio</strong> untuk eksperimen langsung.</li>
<li>Pahami konsep JOIN, GROUP BY, dan subquery secara mendalam.</li>
<li>Biasakan membaca dokumentasi SQL resmi untuk tiap DBMS (MySQL, PostgreSQL, dll).</li>
</ul>
<hr>
<p> <strong>Selamat berlatih dan semoga sukses dalam perjalanan belajar SQL Anda!</strong></p>




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