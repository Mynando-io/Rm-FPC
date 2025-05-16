<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="mengenal-lebih-dalam-menggenai-css-box-model">Mengenal lebih dalam menggenai CSS Box model</h1>
<p>&quot;CSS box model&quot; adalah set aturan yang berfungsi untuk mengatur bagaimana suatu element pada halaman website di tampilkan. CSS menganggap semua komponent yang ada pada document HTML adalah sebuah kotak (box) dengan beberapa &quot;properties&quot; yang akan menentukan lokasi penempatan.</p>
<p>Secara garis besar semuanya yang ada pada halaman website adalah urutan dimana &quot;element&quot; ditampilkan satu demi satu. Tetapi dengan fungsi &quot;box model&quot; kita dapat mengatur penempatan &quot;element&quot;.</p>
<p>Memahami Konsep &quot;CSS box model&quot; itu sangat penting untuk mempermudah pembelajaran kita nanti menggenai grid, flexbox, dll. </p>
<h2 id="mengenal-block-element-dan-inline-element">Mengenal Block Element dan Inline element</h2>
<p>Setidaknnya terdapat dua pondasi layout yang 
akan dipilih untuk membangun halaman website.</p>
<p>Yang terdiri dari: </p>
<ul>
<li>Block</li>
<li>inline</li>
</ul>
<p>kedua tipe itu adalah standart layout yang sudah dipasang pada element HTML. Semisal element &quot;p&quot; memiliki layout &quot;Block&quot;.</p>
<p>Kebanyakan element HTML yang sudah kita pelajari sebelumnya merupakan tipe layout &quot;block&quot;. </p>
<p>Kita dapat mencari tau layout yang diapakai oleh &quot;element HTML&quot; dengan cara Mebuka fitur &quot;inspeksi&quot;&quot; dan ambil fitur &quot;computed&quot; </p>
<p><a href="../aset/contoh in-bl.png">Contoh inline dan block</a></p>
<blockquote>
<p>Teman-teman bisa lihat code gambar diatas di sini <a href="./bl-in.html">Klik-okay</a></p>
</blockquote>
<p>Seperti pada gambar yang berada di atas. Kita dapat melihat perbedaan dari prilaku mereka pada penempatan layout.</p>
<p>Perbedaan yang sangat terlihat:</p>
<ul>
<li>&quot;Block&quot; jika yang dipakai adalah element block, maka element selanjutnya akan mengambil posisi di bawah element tersebut.</li>
<li><p>&quot;Inline&quot; Jika yang dipakai adalah tipe element inline maka element selanjutnya bisa berada di samping element tersebut.</p>
</li>
<li><p>&quot;BLock&quot; Lebar dari element block adalah lebar keseluruhan dari container parent.</p>
</li>
<li>&quot;Inline&quot; Lebar dari element inline akan menyesuaikan secara otomatis dengan content yang dia bawa.</li>
</ul>
<h2 id="menggenal-div-dan-span">Menggenal div dan span</h2>
<p>Selain menggunakan semantic yang sudah tersedia nama dan fungsinnya kita juga bisa menambahkan semantic dengan model kita sendiri, dengan cara menggunakan div atau span.</p>
<p>Semisal kita ingin membuat container yang berisi 2 semantic &quot;main&quot; dan &quot;aside&quot; kita bisa menggunakan &quot;div&quot; sebagai container.</p>
<blockquote>
<p>Contoh untuk kondisi diatas <a href="../code/latihan-html/index-LT-03.html">klik-okay</a></p>
</blockquote>
<p>oleh karena itu kita perlu memahami fungsi dan gimana mereka bekerja.</p>
<p>&quot;div&quot; dan &quot;span&quot; mereka berdua adalah element HTML yang digunakan untuk mengatur layout dan design, tapi memiliki perbedaan cara penyelesaian.</p>
<ul>
<li><p>&quot;div&quot; adalah layout &quot;BLock&quot; yang bisa digunakan untuk mengelompokan banyak element menjadi satu. Perlu diketahui &quot;div&quot; akan berlaku seperti layout &quot;Block&quot; menggambil seluruh lebar dari parent.</p>
</li>
<li><p>&quot;span&quot; adalah layout &quot;inline&quot; yang bisa digunakan untuk menyatukan element tanpa merebut seluruh jarak lebar dari parent. &quot;span&quot; biasannya digunakan untuk mengatur bagian kecil tanpa harus menggangu element / content di sampingnnya.</p>
</li>
</ul>
<p>Kesimpulan, &quot;div&quot; akan dipakai jika ingin mengatur layout besar, sedangkan &quot;span&quot; akan digunakan untuk mengatur style pada bagian kecil.</p>
<h2 id="menggenal-content-padding-border-dan-margin">Menggenal Content. Padding, Border, dan Margin</h2>
<p><a href="../aset/co-padding.png">Contoh</a></p>
<p>pada pengaturan ukuran element terdapat setidaknya empat property dasar:content,  padding, border, dan margin.</p>
<p>Property:</p>
<ul>
<li><p>Content adalah tulisan, gambar ataupun media yang barada didalam content.</p>
</li>
<li><p>padding adalah jarak dari content didalam element ke bagian border.
<code>padding: 1px 1px 1px 1px;</code></p>
</li>
<li><p>Border adalah batas luar dari content. Kita dapat melihat border, dengan mendefinisikan border ke dalam element tersebut.
<code>border: 1px solid red;</code></p>
</li>
<li><p>Sedangkan margin adalah jarak antara element satu dengan yang lainnya.
<code>margin: 1px 1px 1px 1px;</code></p>
</li>
</ul>
<p>kita bisa mengatur jarak atas, bawah, kanan, dan kiri pada property padding dan margin.</p>
<p>Dibawah ini adalah format untuk value padding dan margin:</p>
<pre><code> padding: <span class="hljs-number">40</span>px <span class="hljs-number">20</span>px <span class="hljs-number">20</span>px <span class="hljs-number">40</span>px;
  // Format penempatan : padding-<span class="hljs-built_in">top</span>, padding-<span class="hljs-built_in">right</span>, padding-<span class="hljs-built_in">bottom</span>, and padding-<span class="hljs-built_in">left</span>
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