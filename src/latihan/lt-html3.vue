<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="latihan-float">Latihan FLoat</h1>
<p>Float property pada CSS digunakan untuk mendefinisikan bagaimana element harus ditempatkan dengan referensi dari element lainnya. Perlu diperhatikan disaat element bertipe float maka dia akan keluar dari arus / flow normal pada halaman website dan bisa digerakan ke kiri atau ke kanan dari posisi semula.</p>
<p>Informasi dan panduan yang perlu diingat saat menggunakan CSS float:</p>
<ol>
<li><p>Property &quot;float&quot; bisa kita set &quot;value&quot; ke &quot;left&quot; atau &quot;right&quot;, Tergantung dengan arah yang kita inginkan. </p>
</li>
<li><p>Disaat element bertipe &quot;float&quot;, maka element lainnya pada halaman akan mengikuti arah dari element tersbut. Ini bisa menjadi manfaat disaat kita inginkan atau bisa menjadi masalah jika kita salah perhitungan. </p>
</li>
<li><p>Penting untuk memahami teknik &quot;clearfix&quot; saat kita menggunakan element &quot;float&quot;. Disaat semua element pada container menggunakan &quot;float&quot; maka ketinggian dari &quot;container&quot; akan hilang. Biasannya kejadi hilangnnya ketinggian dari container disebut sebagai &quot;element collapsing CSS&quot; (<a href="https://www.geeksforgeeks.org/how-to-prevent-parents-of-floated-elements-from-collapsing-in-css/">https://www.geeksforgeeks.org/how-to-prevent-parents-of-floated-elements-from-collapsing-in-css/</a>). </p>
</li>
</ol>
<p>Untuk menyelesaikan masalah tersebut kita bisa menggunakan teknik &quot;clearfix&quot; untuk memaksa container agar melebar dan menyesuaikan dengan tinggi dan lebar dari &quot;float element&quot;. 
Contoh dan referensi: 
(<a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_layout_clearfix2">https://www.w3schools.com/css/tryit.asp?filename=trycss_layout_clearfix2</a>)</p>
<p>Secara Garis besar CSS float akan sangat dapat membantu kita dalam beberapa kondisi. Tetapi sebagai developer kita juga harus menggunakannya dengan teliti agar kekurangan dari float tidak menjadi halangan. 
Setiap fitur akan memiliki kekurangan dan kelebihan itu adalah hal yang pasti, dan harus kita belajar pertimbangkan.</p>
<h2 id="persyaratan">Persyaratan</h2>
<ul>
<li>Memiliki dua float </li>
<li>Dua float berada didalam main </li>
<li>Menggunakan teknik &quot;clearfix&quot; untuk memperbaiki &quot;container collapse&quot;</li>
</ul>
<h2 id="instruksi">Instruksi</h2>
<ol>
<li><p>Buat Fondasi halaman website
```
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
 <meta charset="UTF-8">
 <title></title></p>
 &lt;style&gt;

&lt;p&gt; &lt;/style&gt;
&lt;head&gt;&lt;/p&gt;
&lt;body&gt;

</li>
</ol>
<p>&lt;/body&gt;
&lt;/html&gt;</p>
<pre><code>
<span class="hljs-number">2.</span> Buat <span class="hljs-keyword">class</span> main untuk meyimpan dua <span class="hljs-keyword">float</span>
</code></pre><main class="clearfix">


</main>

<pre><code>
<span class="hljs-number">3</span>. Float <span class="hljs-keyword">bagian </span>kiri <span class="hljs-keyword">disimpan </span>ke main
</code></pre>&lt;div class="main-text"&gt;

<pre><code>        Float Left

        Adipisicing quia consequatur magnam repellat et voluptatibus sequi Perspiciatis
        commodi cum adipisci asperiores vero. Modi soluta molestiae veritatis
        praesentium nulla modi pariatur veritatis Quas eveniet veritatis excepturi
        velit modi <span class="hljs-built_in">alias</span>!

    &lt;/<span class="hljs-keyword">div</span>&gt;
</code></pre><pre><code>
<span class="hljs-number">4</span>. Float <span class="hljs-keyword">bagian </span>kanan <span class="hljs-keyword">disimpan </span>ke main, dan pastikan <span class="hljs-keyword">berada </span><span class="hljs-keyword">dibawah </span><span class="hljs-string">"main-text"</span>
</code></pre> &lt;div class="side-text"&gt;

<pre><code>        Float Right

        Adipisicing deserunt voluptatibus nisi est suscipit! Nulla unde temporibus sequi
        <span class="hljs-built_in">id</span> officia, distinctio Maiores corporis placeat unde quos iste maxime
        laudantium Suscipit unde adipisci atque et deleniti animi ullam minus.

    &lt;/<span class="hljs-keyword">div</span>&gt;
</code></pre><pre><code>
<span class="hljs-number">5.</span> Mengatur padding pada element main dengan <span class="hljs-keyword">internal</span> css.
</code></pre><p>main {
            padding: 10px;
        }</p>
<pre><code>
*<span class="hljs-keyword">Breakdown* </span>:
- Padding - untuk memberikan <span class="hljs-keyword">jarak </span>dari <span class="hljs-keyword">border </span>ke content

<span class="hljs-number">6</span>. Mengggunakan clearfik teknik untuk memperbaiki <span class="hljs-string">"height"</span> dari container.
</code></pre><p>/<em> clear float </em>/
        .clearfix:after {
            content: &quot;&quot;;
            clear: both;
            display: table;
        }</p>
<pre><code><span class="hljs-keyword">Reference</span> (https://www.w3schools.com/css/tryit.asp?<span class="hljs-attr">filename=</span>trycss_layout_clearfix2)

- <span class="hljs-keyword">Property</span><span class="hljs-title"> </span><span class="hljs-string">"content"</span> akan digunakan untuk menambahkan kontent tambahan, setelah kontent utama yang kita tulis secara manual
- <span class="hljs-keyword">Property</span><span class="hljs-title"> </span><span class="hljs-string">"display:table"</span> <span class="hljs-string">"display"</span> digunakan untuk mengatur tampilan sebuah elemen. Pada selector di atas, nilai dari properti <span class="hljs-string">"display"</span> adalah <span class="hljs-string">"table"</span>, artinya elemen akan ditampilkan seperti tabel pada halaman web.

**Contoh dari <span class="hljs-keyword">property</span><span class="hljs-title"> </span>content**
</code></pre><p><h2>Paperback Best Sellers</h2></p>
<p><ol>
  <li>Political Thriller</li>
  <li class="new-entry">Halloween Stories</li>
  <li>My Biography</li>
  <li class="new-entry">Vampire Romance</li>
</ol></p>
<pre><code><span class="hljs-attribute">Dengan style</span>
</code></pre><p>.new-entry::after {
  content: &quot; New!&quot;; /<em> The leading space creates separation
                       between the added content and the
                       rest of the content </em>/
  color: red;
}</p>
<pre><code>
contoh <span class="hljs-string">langsung:</span> <span class="hljs-string">https:</span><span class="hljs-comment">//developer.mozilla.org/en-US/docs/Web/CSS/content#targeting_classes</span>

<span class="hljs-number">7.</span> Mengatur element <span class="hljs-string">"main-text"</span> menjadi element <span class="hljs-keyword">float</span>.
</code></pre><p> /<em> Pengaturan Float </em>/
        .main-text {
            box-sizing: border-box;
            float: left;
                width: 60%;
                    border: 1px solid red;
        }</p>
<pre><code>
*<span class="hljs-keyword">Breakdown* </span>: 
- <span class="hljs-keyword">box-sizing </span>- <span class="hljs-keyword">digunakan </span>untuk memastikan ukuran element sesuai dengan yang <span class="hljs-keyword">didefinisikan </span>yaitu <span class="hljs-string">"60%"</span>
- float - <span class="hljs-keyword">digunakan </span>untuk menempatkan element sesuai dengan arah yang <span class="hljs-keyword">dipilih. </span>
- width - mengatur lebar dari element 
- <span class="hljs-keyword">border </span>- menampilkan <span class="hljs-keyword">border </span>dari element


<span class="hljs-number">8</span>. Mengatur element <span class="hljs-string">"side-text"</span> menjadi element float.
</code></pre><p>.side-text {
            box-sizing: border-box;
                float: right;
                width: 40%;
                    border: 1px solid blue;
        }
```</p>
<h2 id="source-code">Source Code</h2>
<p>Contoh Lengkap</p>
<p><a href="../code/latihan-html/index-LT-float.html">Source Code</a></p>
<h2 id="referensi">Referensi</h2>
<ul>
<li><a href="https://css-tricks.com/all-about-floats/">https://css-tricks.com/all-about-floats/</a></li>
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