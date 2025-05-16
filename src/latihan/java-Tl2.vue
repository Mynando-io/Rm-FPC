<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="array">Array</h1>
<p>Array adalah sebuah kumpulan data yang dapat kita kelola dan gunakan untuk melakukan perhitungan.</p>
<p>Kriteria array adalah:</p>
<ul>
<li>Index based: yang berarti bahwa semua elemen yang dimasukan kedalam array akan terhitung mulai dari nol</li>
<li>Tipe data harus seragam</li>
<li>Ukuran nilai yang dapat ditampung array akan sesuai dengan deklarasi yang kita buat</li>
</ul>
<h2 id="integer-array">Integer array</h2>
<pre><code>public class ContohArray {
   <span class="hljs-keyword"> public</span><span class="hljs-keyword"> static</span> void main(String[] args) {
        // Deklarasi<span class="hljs-built_in"> array
</span>        int[] angka;

        // Inisialisasi<span class="hljs-built_in"> array </span>dengan ukuran 5
        angka =<span class="hljs-built_in"> new </span>int[5];

        // Mengisi nilai ke<span class="hljs-built_in"> array
</span>        angka[0] = 10;
        angka[1] = 20;
        angka[2] = 30;
        angka[3] = 40;
        angka[4] = 50;

        // Mengakses elemen<span class="hljs-built_in"> array
</span>        System.out.println(<span class="hljs-string">"Elemen ke-2: "</span> + angka[1]);

        // Loop melalui<span class="hljs-built_in"> array
</span>        for (int i = 0; i &lt; angka.length; i++) {
            System.out.println(<span class="hljs-string">"Indeks "</span> + i + <span class="hljs-string">": "</span> + angka[i]);
        }
    }
}
</code></pre><p>Breakdown:</p>
<ul>
<li>int[] angka; - </li>
<li>angka = new int[5] - adalah menentukan ukuran array</li>
<li><p>angka[0] = 10; - adalah menun</p>
<p>Code  | Penjelasan
--- | ---
int[] angka; | untuk memberikan kriteria bahwa array tersebut bertipe int
angka = new int[5] | adalah menentukan ukuran array
angka[0] = 10; | adalah memasukan nilai 10 kedalam index array ke 0
System.out.println(&quot;Elemen ke-2: &quot; + angka[1]); | adalah untuk menampilkan dan melakukan akses terhadap elemen pada indeks ke &quot;1&quot;
for (int i = 0; i &lt; angka.length; i++) { ... } | adalah loop yang mengakses elemen, dan menampilkan</p>
</li>
</ul>
<h2 id="array-dengan-inisialisasi-langsung">Array dengan inisialisasi langsung</h2>
<pre><code><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> ContohArray2 {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> main(<span class="hljs-keyword">String</span>[] args) {
        <span class="hljs-comment">// Deklarasi + inisialisasi langsung</span>
        <span class="hljs-keyword">String</span>[] names = {<span class="hljs-string">"Alice"</span>, <span class="hljs-string">"Bob"</span>, <span class="hljs-string">"Charlie"</span>};

        <span class="hljs-comment">// Mengakses elemen</span>
        System.out.<span class="hljs-built_in">println</span>(<span class="hljs-string">"Nama pertama: "</span> + names[<span class="hljs-number">0</span>]);

        <span class="hljs-comment">// Mengubah nilai elemen</span>
        names[<span class="hljs-number">1</span>] = <span class="hljs-string">"Bobby"</span>;
        System.out.<span class="hljs-built_in">println</span>(<span class="hljs-string">"Nama kedua: "</span> + names[<span class="hljs-number">1</span>]);
    }
}
</code></pre><p>Breakdown:
code | Penjelasan
--- | ---
String[] names = {&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;}; | Deklarasi dan inisialisasi 
names[1] = &quot;Bobby&quot;; | Menimpa nilai pada index ke 1 menjadi &quot;Bobby&quot;</p>
<p>========================================== Note tambahan untuk array =========================</p>
<h2 id="mencari-panjan-array">Mencari panjan array</h2>
<pre><code><span class="hljs-attribute">int panjang</span> = angka.length;
</code></pre><h2 id="loop-dengan-for-each-menampilkan-setiap-item-pada-array-angka-">Loop dengan for-each ( Menampilkan setiap item pada array angka )</h2>
<pre><code><span class="hljs-keyword">for</span> (int nilai : angka) {
  System<span class="hljs-selector-class">.out</span><span class="hljs-selector-class">.println</span>(niali) 
}
</code></pre><h2 id="array-multidimensi-">Array multidimensi:</h2>
<pre><code>int[][] matrix = {{<span class="hljs-number">1</span>, <span class="hljs-number">2</span>}, {<span class="hljs-number">3</span>, <span class="hljs-number">4</span>}};
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