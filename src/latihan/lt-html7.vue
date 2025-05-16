<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="latihan-flexbox">Latihan Flexbox</h1>
<p>Flexbox adalah &quot;layout System&quot; pada CSS yang dapat membantu untuk membuat flexibel dan responsive &quot;layout&quot; dengan mudah. Flexbox sudah diperkenalkansejak CSS3 dan menjadi &quot;layout System&quot; yang populer untuk membuat website dinamis. </p>
<p>Flexbox bekerja dengan cara Menyelaraskan dan mendistribusikan jarak diantara item didalam container.
Container didefinisikan dengan property <code>display: flex</code>
, dan &quot;child item&quot; yang berada didalam container. Flex item bisa kita atur bisa kita atur dengan berbagai macam properti yang telah ada pada flexbox. </p>
<p>Konsep utama dari flexbox adalah kemampuan untuk mempermudah pekerjaan dalam mengatur &quot;width&quot; dan &quot;height&quot; pada item didalam container. Dengan ini kita bisa mengatur item berdasarkan tersediannya jarak didalam container. Sebagai tambahan kita juga bisa mengatur penempatan dan distribusi properti untuk mengatur jarak item didalam container. </p>
<p>Properti yang terkenal pada flexbox yang paling sering digunakan :</p>
<ul>
<li><code>Justify-content</code>
digunakan untuk mengatur element pada garis / sumbu x (main-axis / horizontal).</li>
</ul>
<p>src: <a href="https://www.w3schools.com/cssref/css3_pr_justify-content.php">https://www.w3schools.com/cssref/css3_pr_justify-content.php</a></p>
<ul>
<li><code>align-items</code>
digunakan untuk mengatur element pada garis / sumbu y (cross-axis / vertical).</li>
</ul>
<p>flexbox juga menyediakan properti untuk megatur urutan dari item, mengautr jarak antara item, mengatur ukuran dari individual item pada container. </p>
<p>Salah satu kelebihan dari flexbox adalah kemampuan untuk membuat dan mengatur layout html dengan sangat mudah. Dengan flexbox kita bisa menyiapkan berbagai macam skema layout untuk berbagai macam device. Klebihan ini adalah salah satu alasan besar kenapa flexbox sangat digemari. </p>
<h2 id="persyaratan">Persyaratan</h2>
<h2 id="instruksi">Instruksi</h2>
<ol>
<li>Buat fondasi dari halaman website.</li>
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
<li>Buat element container untuk flexbox nanti.</li>
</ol>
<pre><code>&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"menu-container"</span>&gt;

<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
</code></pre><ol>
<li>Buat element container ke dua untuk flexbox. </li>
</ol>
<pre><code>&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"menu"</span>&gt;


<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
</code></pre><ol>
<li>Buat element child dan salash satu sibling adalah container </li>
</ol>
<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'date'</span>&gt;</span>Aug 14, 2016<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-comment">&lt;!-- 02 item --&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'links'</span>&gt;</span>
                <span class="hljs-comment">&lt;!-- 03 container &amp; 02 item --&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'signup'</span>&gt;</span>Sign Up<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-comment">&lt;!-- item 03 --&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'login'</span>&gt;</span>Login<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-comment">&lt;!-- item 03 --&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><p><strong>CSS Phase</strong> </p>
<ol>
<li>Pastikan element body dan element lainnya memiliki standart format tanpa padding, dan margin.</li>
</ol>
<pre><code>* {
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">box-sizing</span>: border-box;
}
</code></pre><p><strong>Breakdown</strong>
box-sizing - digunakan untuk memastikan agar lebar dan tinggi element sesuai dengan permintaan. </p>
<ol>
<li>mengatur &quot;main-container&quot;. Mengaktifkan flexbox dan mengatur tampilan</li>
</ol>
<pre><code><span class="hljs-selector-class">.menu-container</span> {
            <span class="hljs-attribute">display</span>: flex;
            <span class="hljs-attribute">justify-content</span>: center;
            <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
            <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#5995DA</span>;
            <span class="hljs-comment">/* Blue */</span>
            <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span> <span class="hljs-number">0</span>;
        }
</code></pre><p><strong>Breakdown</strong> </p>
<ul>
<li>display flex - digunakan untuk mengaktifkan flexbox pada container. </li>
<li><p>justify-content center - disini digunakan untuk mengatur letak item yang berada didalam container. </p>
</li>
<li><p>Mengatur flexbox dan tampilan pada container &quot;menu&quot;</p>
</li>
</ul>
<pre><code><span class="hljs-selector-class">.menu</span> {
            <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#fff</span>;
            <span class="hljs-comment">/* For debugging */</span>
            <span class="hljs-attribute">width</span>: <span class="hljs-number">900px</span>;
            <span class="hljs-comment">/* height: 50px; */</span>
            <span class="hljs-attribute">display</span>: flex;
            <span class="hljs-attribute">justify-content</span>: space-between;
            <span class="hljs-comment">/* Space-between akan memberikan jarak antar element, tidak termasuk border */</span>
            <span class="hljs-comment">/* space-around akan memberikan jarak antar element dan border  */</span>
            <span class="hljs-comment">/* align-items: center; */</span>
        }
</code></pre><ul>
<li>Space-between akan memberikan jarak antar element, tidak termasuk border.</li>
<li><p>space-around akan memberikan jarak antar element dan border</p>
</li>
<li><p>pada element link diubah menjadi display flex. Dengan begitu item didalamnnya akan berubah menjadi display &quot;inline&quot;.</p>
</li>
</ul>
<pre><code><span class="hljs-selector-class">.links</span> {
            <span class="hljs-attribute">display</span>: flex;
            <span class="hljs-comment">/* border: 1px solid red; */</span>
        }
</code></pre><ol>
<li>mengatur jarak pada element &quot;login&quot;<pre><code><span class="hljs-selector-class">.login</span> {
         <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">20px</span>;
     }
</code></pre></li>
</ol>
<h3 id="command-wrap-up">Command Wrap Up</h3>
<ul>
<li><code>display: flex;</code>  // wajib untuk container</li>
<li><code>justify-content: [ flex-start, center, flex-end, space-around, space-between ];</code> //  mengatur koordinate dari element didalam container ( horizontal ).</li>
<li><code>align-items: [ flex-start, center, flex-end, stretch ];</code> // Sama seperti justify content, tetapi digunakan untuk mengatur secara vertikal.</li>
<li><code>flex-wrap: wrap;</code>  // digunakan untuk memastikan element pada container tidak keluar dari batas. dengan kata lain bisa merapikan element otomatis.</li>
<li><code>gap: 10px 20px; /* row-gap | column gap */</code> // digunakan untuk memberikan jarak antara element, tidak termasuk border. </li>
<li><code>flex-direction: [ column, row, row-reverse, column-reverse ];</code> // default yang dipakai adalah horizontal. dengan property ini kita bisa mengubah menjadi row ( vertikal )</li>
<li><code>flex: 1;</code> // digunakan untuk mengatur lebar dari element. &lt; <strong>Yang bisa pakai: child element!</strong> &gt;</li>
<li><code>align-self: [ auto | flex-start | flex-end | center | baseline | stretch ];</code> // Untuk mengatur penempatan pada element spesifik. &lt; <strong>Yang bisa pakai: child element!</strong> &gt;</li>
</ul>
<h2 id="contoh-source-code">Contoh Source code</h2>
<p><a href="../code/flexbox-test/index.html">Click Source Code</a></p>
<h2 id="reference">Reference</h2>
<ul>
<li><a href="https://internetingishard.netlify.app/html-and-css/flexbox/">https://internetingishard.netlify.app/html-and-css/flexbox/</a></li>
<li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">https://css-tricks.com/snippets/css/a-guide-to-flexbox/</a> </li>
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