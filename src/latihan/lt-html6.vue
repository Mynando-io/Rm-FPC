<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="mengenal-grid-layout">Mengenal Grid layout</h1>
<p>CSS Grid adalah layout sistem 2 dimensi yang digunakn untuk melakukan pengaturan design pada halaman website.
    CSS Grid memberikan kemampuan kepada developer untuk mebuat dan mengatur kolom.
Dengan menggunakan CSS Grid kita bisa membuat suatu sistem komplex dengan mudah.</p>
<p>CSS Grid juga diserta dengan fitur seperti gap dan span, Yang dapat mengatur jarak antara element.</p>
<p>Sebelum kita mulai mempelajari mengenai penggunaan Grid, kita harus paham menggenai konsep dari &quot;Container&quot; dan &quot;Item&quot;.</p>
<ul>
<li><p>Grid Conteiner:</p>
<p>  Untuk menggunakan fungsi layout Grid kita harus mendefinisikan Container terlebih dahulu. </p>
</li>
</ul>
<pre><code>&lt;main <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"container"</span>&gt;

<span class="xml"><span class="hljs-comment">&lt;!-- Masukan item di area container --&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span></span>
</code></pre><ul>
<li>Grid Item:
  Setelah mendefinisikan container. Buat dan masukan element item kedalam conteiner tersebut.
  Di bawah ini adalah contoh element yang akan kita masukan kedalam container.</li>
</ul>
<pre><code>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item item-c"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><ul>
<li><p>Gunakan CSS Untuk mengaktifkan layout &quot;Grid&quot;</p>
<p>  Kita Bisa menggunakan eksternal atau internal CSS untuk melakukan modifikasi. Di contoh ini kita menggunakan Internal CSS.</p>
</li>
</ul>
<pre><code><span class="hljs-selector-class">.container</span> {
<span class="hljs-attribute">display</span>: grid; <span class="hljs-comment">/* Wajib ada */</span>

<span class="hljs-attribute">grid-template-columns</span>: auto auto auto; <span class="hljs-comment">/*Digunakan untuk mebuat kolom pada grid */</span>

<span class="hljs-attribute">gap</span>: <span class="hljs-number">10px</span>; <span class="hljs-comment">/* Digunak untuk mengatur jarak antara baris dan kolom pada grid */</span>

}

<span class="hljs-selector-class">.item</span> {
<span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid red;
}
</code></pre><ul>
<li>Jika ingin mengatur panjang dan lebar kolom (Perhatian)</li>
</ul>
<p>Selain mengatur tata letak, grid juga digunakan untuk mengatur lebar style dari element.</p>
<pre><code><span class="hljs-selector-class">.item-c</span> {
            <span class="hljs-attribute">grid-column-start</span>:<span class="hljs-number">1</span> ;
            <span class="hljs-attribute">grid-column-end</span>: <span class="hljs-number">3</span>;
        }
</code></pre><h2 id="pengaturan-luas-dan-jarak-dengan-grid">Pengaturan luas dan jarak dengan grid</h2>
<p><img src="#" alt="contoh aturan grid"></p>
<p>Didalam mengatur layout pada grid kita harus benar-benar memahami penempatan garis.
Karena garis tersebut akan jadi nilai yang menjadi acuan sistem dalam mengatur layout.</p>
<p>Sebagai contoh gambar diatas terdapat garis berwarna merah dan biru. Garis merah digunakan untuk melambangkan &quot;Baris / row&quot;, Sedangkan garis biru melambangkan &quot;Kolom / column&quot;.</p>
<p>Kotak berwna &quot;grey&quot; tersebut adalah contoh element jika berada di dalam &quot;grida&quot;.</p>
<p>Breakdown dari gambar di atas:</p>
<ul>
<li>Terdapat 3 kolom, dan 4 garis kolom (Garis warna Biru)</li>
<li><p>Terdapat 4 baris / row, dan 5 garis baris (row line) (Garis warna merah)</p>
</li>
<li><p>Kotak persegi panjang memanjang ke kanan. 
Adalah hasil dari code</p>
</li>
</ul>
<pre><code>grid-column-<span class="hljs-keyword">start</span>: <span class="hljs-number">2</span>;
grid-column-<span class="hljs-keyword">end</span>: <span class="hljs-number">4</span>;
</code></pre><pre><code>Yang <span class="hljs-keyword">berfungsi </span>untuk mengatur lebar dari element tersebut. <span class="hljs-keyword">Dimulai </span>dari garis kolom (Garis Warna <span class="hljs-keyword">Biru) </span>ke <span class="hljs-number">2</span> hingga ke garis kolom ke <span class="hljs-number">4</span>.
</code></pre><ul>
<li>Kotak yang memiliki tinggi pada bagian bawah kiri. Memiliki code</li>
</ul>
<pre><code><span class="hljs-built_in">grid</span>-<span class="hljs-built_in">row</span>-start: <span class="hljs-number">3</span>;
<span class="hljs-built_in">grid</span>-<span class="hljs-built_in">row</span>-end: <span class="hljs-number">5</span>;
</code></pre><p>yang berfungsi untuk mengatur tingggi dari style element. Sebagai mana pada contoh tinggi element dimulai dari garis baris(row)(garis warna merah) ke 3 hingga row ke 5.</p>
<p>Contoh grid Dengan pengaturan layout kolom dan baris.</p>
<p><img src="#" alt="contoh"></p>
<h2 id="contoh-instruksi">Contoh instruksi</h2>
<ol>
<li>Buat fondasi HTML </li>
</ol>
<pre><code><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="undefined">

    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre><ol>
<li>Buat container untuk grid </li>
</ol>
<pre><code>&lt;main <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"container"</span>&gt;

<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span></span>
</code></pre><ol>
<li>Masukan Item untuk diatur, Dan menyiapkan class untuk dilakukan pengaturan lebar dengan grid. </li>
</ol>
<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Cell 1<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Cell 2<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Cell 3<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>


        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item item-c"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><ol>
<li>Pada Element &quot;style&quot; kita akan megaktifkan dan mengatur bagaimana grid berfungsi. </li>
</ol>
<pre><code><span class="hljs-selector-class">.container</span> {
            <span class="hljs-attribute">display</span>: grid;
            <span class="hljs-attribute">grid-template-columns</span>: auto auto auto;
            <span class="hljs-attribute">gap</span>: <span class="hljs-number">10px</span>;
            <span class="hljs-attribute">background-color</span>: lightgrey;
            <span class="hljs-attribute">color</span>: white;
            <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;
        }
</code></pre><ol>
<li><p>Mengatur tampilan item.</p>
<pre><code><span class="hljs-selector-class">.item</span> {
         <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid white;
         <span class="hljs-attribute">background-color</span>: grey;
         <span class="hljs-attribute">text-align</span>: center;
     }
</code></pre></li>
<li><p>Mengatur lebar dan tinggi pada &quot;item-c&quot; dengan grid.</p>
<pre><code><span class="hljs-selector-class">.item-c</span> {
         <span class="hljs-attribute">grid-column-start</span>:<span class="hljs-number">1</span> ;
         <span class="hljs-attribute">grid-column-end</span>: <span class="hljs-number">3</span>;

         <span class="hljs-attribute">grid-row-start</span>: <span class="hljs-number">2</span>;
             <span class="hljs-attribute">grid-row-end</span>: <span class="hljs-number">4</span>;
     }
</code></pre></li>
</ol>
<ul>
<li>Contoh Full code:
<a href="./test-grid.html">Masuk ke File HTML</a></li>
</ul>
<hr>
<p>Reference: </p>
<ul>
<li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/">https://css-tricks.com/snippets/css/complete-guide-grid/</a></li>
<li><a href="https://www.w3schools.com/css/css_grid.asp">https://www.w3schools.com/css/css_grid.asp</a></li>
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