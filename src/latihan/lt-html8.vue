<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="css-position">CSS Position</h1>
<p>terdapat 5 tipe penempatan:</p>
<ul>
<li>static</li>
<li>relative</li>
<li>fixed</li>
<li>absolute</li>
<li>sticky</li>
</ul>
<p>Setiap penempatan memiliki fitur yang berbeda, tetapi memiliki cara configurasi properti css yang hampir sama.</p>
<p>Dengan fitur css position kita bisa mengatur dimana element tersbut diletakan dengan spesifik. Kita juga bisa menggatur agar element tersebut tidak hilang kalau kita scroll ke bawah.</p>
<p>Secara default tipe position yang akan dipakai adalah static. </p>
<h2 id="relative-absolute">Relative &amp; Absolute</h2>
<p>Relative property bisa kita gunakan untuk mengatur penempatan element sesuai dengan koordinat yang kita inginkan. Relative position tidak akan menghilangkan element tersbut dari flow website. Secara simple, tempat tinggal relative element masih ada, dan tidak akan dipakai oleh element lainnya. </p>
<p>Sedangkan Property absolute akan kehilangan tempat dia tinggal dan tempat tinggal dari absolute element akan dipakai oleh element lainnya. 
Fungsi absolute hampir sama dengan relative. Perbedaan ada di mana acuan koordinasi mereka. </p>
<p>Relativ position akan menggunakan container sebagai acuan awal untuk koordinasi tempat. </p>
<p>Absolute position akan menggunakan element body sebagai acuan awal.</p>
<p>seperti pada contoh.</p>
<p><a href="../code/latihan-html/index-lt-position.html">contoh code</a></p>
<h2 id="sticky-dan-fixed">Sticky dan fixed</h2>
<p>sticky dan fixed bisa kita gunakan untuk mengatur agar element tersebut tidak hilang jika kita scroll kebawah ataupun ke atas.</p>
<p>Meskipun memiliki tujuan fungsi yang sama, tetapi mereka memiliki cara kerja yang berbeda. </p>
<p>Fixed, memiliki chiri khas seperti &quot;absolute&quot;. karena jika kita pakai ini maka element akan kehilangan tempat tinggalnya, dan akan diisi oleh element lainnya. 
Pengaturan top, bottom, left, right dari fixed sama seperti absolute yang menggunakan element body sebagai acuan. </p>
<p>Sticky, bisa dikatakan gabungan dari fixed dan relative. Awal pergerakan sticky akan menggunakan chiri khas dari relative. Setelah mencapai titik tertentu akan berubah menjadi fixed. </p>
<h2 id="referensi-">Referensi:</h2>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position#try_it">https://developer.mozilla.org/en-US/docs/Web/CSS/position#try_it</a> </p>




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