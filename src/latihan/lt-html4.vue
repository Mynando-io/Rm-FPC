<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="standart-website-format">Standart Website format</h1>
<p>Pada latihan kali ini kita akan berlatih menggunakan HTML dan CSS bersama untuk membuat halaman website Yang berkualitas.</p>
<p>Jangan Khawatir jika masih belum menguasai latihan ini sepenuhnnya, Karena yang paling penting adalah mendapatkan dasar dari pemahaman.</p>
<h2 id="mengenal-css">Mengenal CSS</h2>
<p>CSS atau Cascading Style Sheets adalah teknologi fundamental yang digunakan pada design website.Ini digunakan untuk mengatur layout, warna, fonts, dan element visual lainnya.Dengan adannya CSS kita sebagai developer bisa Membuat halaman website yang dinamis dan responsif untuk berabagai macam perangkat komputasi.</p>
<p>Struktur dari css terdiri dari:</p>
<ul>
<li>Selector, Adalah target alamat dari element HTML </li>
<li>Declaration, adalah definisi / protokol untuk pengaturan tampilan pada element tersebut.</li>
</ul>
<p>CSS Juga menyediakan sebuah sistem untuk memberikan kebebasan kepada developer untuk menampilkan fitur yang sesuai dengan ukuran device.Sebagai contoh, untuk Handphone akan memiliki layout yang berbeda dengan apa yang ada pada komputer.Fitur ini disebut sebagai &quot;CSS media queries&quot;
yang akan jadi fondasi pada halaman website responsif.</p>
<h2 id="persyaratan">Persyaratan</h2>
<ul>
<li>menggunakan semantic dasar halaman</li>
</ul>
<h2 id="instruksi">Instruksi</h2>
<ol>
<li>Membuat Struktur dasar untuk halaman website</li>
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
<li><p>Masukan Semantic element dasar halaman website yang terdiri dari:</p>
</li>
<li><p>header </p>
</li>
<li>navbar </li>
<li>main </li>
<li>aside </li>
<li>footer</li>
</ol>
<p>Pada panduan kali ini element main dan aside akan dimasukan kedalam satu container untuk mempermudah pengaturan tampilan selanjutnnya.(Saran dari author, untuk setiap element tersebut diberi tanda &quot;comment&quot;
    agar mempermudah dalam pengembangan nantinnya).</p>
<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">header</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">header</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nav</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nav</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"main-parent"</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">main</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">aside</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">aside</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">footer</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">footer</span>&gt;</span>
</code></pre><ol>
<li>Menambahkan Judul untuk Header</li>
</ol>
<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span> This is Title<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
</code></pre><ol>
<li>Menambahkan list menu pada navbar</li>
</ol>
<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span> Homepage<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>About Us<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>

        <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
</code></pre><ol>
<li>Menambahkan class kedalam element main untuk dilakukan configurasi nantinnya.<pre><code><span class="hljs-keyword">class</span>=<span class="hljs-string">"main-area-left"</span>
</code></pre></li>
</ol>
<p>Menambahkan konten kedalam element main</p>
<pre><code><span class="hljs-section">&lt;p&gt;</span>
                <span class="hljs-attribute">Amet</span> minima dolorum eos itaque vel. Totam dolores a unde dolor nesciunt? Dignissimos
                <span class="hljs-attribute">nesciunt</span> eos eaque perferendis esse, distinctio asperiores reprehenderit.
                <span class="hljs-attribute">Nemo</span> expedita dolor dicta consectetur beatae. Quam quisquam delectus!
            <span class="hljs-section">&lt;/p&gt;</span>

            <span class="hljs-section">&lt;p&gt;</span>
                <span class="hljs-attribute">Lorem</span> sit dolores dolor odit quaerat. Illo ad accusamus reprehenderit ea necessitatibus
                <span class="hljs-attribute">harum</span> deserunt doloremque animi? Mollitia expedita earum quod minus
                <span class="hljs-attribute">eligendi</span>? Porro asperiores nemo illum voluptate ducimus fugit dolore.
            <span class="hljs-section">&lt;/p&gt;</span>

            <span class="hljs-section">&lt;p&gt;</span>
                <span class="hljs-attribute">Adipisicing</span> at eum nostrum fuga deleniti suscipit. Incidunt adipisci enim distinctio
                <span class="hljs-attribute">voluptates</span> velit Nihil officiis asperiores repellendus voluptatum
                <span class="hljs-attribute">odio</span> Distinctio quibusdam hic quibusdam laborum ea! Nihil beatae
                <span class="hljs-attribute">nostrum</span> ea iusto?
            <span class="hljs-section">&lt;/p&gt;</span>
</code></pre><ol>
<li>Menambahkan kontent kedalam sidebar</li>
</ol>
<p>Sebelum menambahkan kotent tambahkan class terlebih dahulu untuk sidebar. </p>
<pre><code><span class="hljs-keyword">class</span>=<span class="hljs-string">"main-area-right"</span>
</code></pre><p>Tambahkan kotent kedalam sidebar</p>
<pre><code><span class="hljs-section">&lt;p&gt;</span>
<span class="hljs-attribute">Sit</span> cumque iure nostrum omnis nihil nisi Provident perspiciatis rerum sapiente ullam quaerat? Maiores itaque culpa ipsam similique mollitia, quae At quis necessitatibus vitae eos ipsam Molestiae nesciunt eum magnam!
<span class="hljs-section">&lt;/p&gt;</span>
</code></pre><ol>
<li>Menambahkan contoh Kepimilikan pada footer</li>
</ol>
<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>©Copyright 2050 by nobody. All rights reversed.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
</code></pre><ol>
<li>Setelah kita mengisi semua semantic element dengan kontent, kita bisa lanjut untuk melakukan modifkasi pada style dengan css.</li>
</ol>
<p>Configurasi BIsa dilakukan dengan Internal atau eksternal css.Pada latihan kali ini metode yang dipakai adalah internal CSS.</p>
<p>Pastikan Tag &quot;style&quot;
sudah ada pada element &quot;head&quot;.</p>
<p>Untuk selector Kita bisa gunakan metode selector seperti ini <code>.class1 .class2</code>. Dengan cara ini kita bisa menargetkan element &quot;class2&quot; yang berada didalam &quot;class1&quot;.
(<a href="https://www.w3schools.com/cssref/css_selectors.php">https://www.w3schools.com/cssref/css_selectors.php</a>)</p>
<ol>
<li>Buat Selector untuk element &quot;body&quot;.dengan Declaration seperti dibawah ini</li>
</ol>
<pre><code><span class="hljs-selector-tag">body</span> {  
<span class="hljs-attribute">box-sizing</span>: border-box;
            <span class="hljs-attribute">margin</span>: <span class="hljs-number">0px</span>;
            <span class="hljs-attribute">padding</span>: <span class="hljs-number">0px</span>;
            }
</code></pre><p><strong>BreakDown</strong>:</p>
<ul>
<li>box-sizing - Akan digunakan untuk memaksa agar lebar dan tinggi element sesuai dengan permintaan, tanpa ada tambahan dari padding, dll.Untuk lebih jelas bisa dilihat lagi pada chapter HTML<a href=".. / document / html.md">Click okay</a> </li>
<li>Margin - Digunakan agar element tidak memiliki gap / jarak dengan yang lain(optional). </li>
<li>padding - digunakan agar kita dapat mengunakan lebar asli dari element body untuk pengembangan desain nanti.</li>
</ul>
<ol>
<li>Mengatur Desain header.<pre><code><span class="hljs-selector-tag">header</span> {
        <span class="hljs-attribute">padding</span>: <span class="hljs-number">0px</span>;
        <span class="hljs-attribute">background-color</span>: Black;
        <span class="hljs-attribute">Padding</span>: <span class="hljs-number">0px</span>;
        <span class="hljs-attribute">color</span>: white;
        <span class="hljs-attribute">text-align</span>: center;
        <span class="hljs-attribute">height</span>: <span class="hljs-number">50px</span>;
    }
</code></pre><strong>Breakdown</strong> </li>
<li>Background-color - sesuai namannya digunakan untuk mengatur warna backgroud dari element</li>
<li>color - digunakan untuk melakukan configurasi warna pada text</li>
<li>text-align - digunakan untuk mengatur penempatan text. </li>
<li><p>Height - digunakan untuk mengatur tinggi dari element </p>
</li>
<li><p>mengatur agar element h1 tidak membuat jarak dengan element diatasnnya.</p>
</li>
</ol>
<pre><code><span class="hljs-selector-tag">header</span> <span class="hljs-selector-tag">h1</span> {
            <span class="hljs-attribute">margin</span>: <span class="hljs-number">0px</span>;
        }
</code></pre><ol>
<li><p>Mengatur desain pada navbar </p>
<pre><code><span class="hljs-selector-tag">nav</span> {
        <span class="hljs-attribute">padding</span>: <span class="hljs-number">0px</span>;
        <span class="hljs-attribute">margin</span>: <span class="hljs-number">0px</span>;
        <span class="hljs-attribute">background-color</span>: grey;
        <span class="hljs-attribute">padding</span>: <span class="hljs-number">0px</span>;
        <span class="hljs-attribute">height</span>: <span class="hljs-number">30px</span>;
    }
</code></pre></li>
<li><p>Mengatur element &quot;ul&quot; (list) agar sesuai dengan navbar.</p>
</li>
</ol>
<pre><code><span class="hljs-selector-tag">nav</span> <span class="hljs-selector-tag">ul</span> {
            <span class="hljs-attribute">list-style-type</span>: none;
            <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
            <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>;
        }
</code></pre><ol>
<li>Mengatur item untuk menjadi menu button pada navbar.</li>
</ol>
<pre><code><span class="hljs-comment">/*Contoh untuk mendapatkan alamat selector */</span>
<span class="hljs-comment">/* nav ul li {} */</span>

<span class="hljs-selector-tag">nav</span> <span class="hljs-selector-tag">ul</span> <span class="hljs-selector-tag">li</span> {
            <span class="hljs-attribute">display</span>: inline;
            <span class="hljs-attribute">color</span>: white;
            <span class="hljs-attribute">margin</span>: <span class="hljs-number">0px</span> <span class="hljs-number">2%</span> <span class="hljs-number">0px</span> <span class="hljs-number">2%</span>;
        }
</code></pre><ul>
<li><p>display - disini digunakan untuk menggubah dari &quot;block&quot; ke &quot;inline&quot;</p>
</li>
<li><p>Mengatur warna link pada navbar </p>
<pre><code><span class="hljs-selector-tag">nav</span> <span class="hljs-selector-tag">a</span> {
        <span class="hljs-attribute">color</span>: white;
    }
</code></pre></li>
<li><p>Mengatur untuk &quot;main-parent&quot; dan disiapkan untuk kontent utama. </p>
</li>
</ul>
<pre><code><span class="hljs-selector-class">.main-parent</span> {
            <span class="hljs-attribute">padding</span>: <span class="hljs-number">1%</span>;
<span class="hljs-attribute">height</span>: <span class="hljs-number">20%</span>;
            <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
        }
</code></pre><ol>
<li>Mennambahkan clearfix agar ketinggian dari container tidak collapse</li>
</ol>
<pre><code><span class="hljs-comment">/* Menggunakan Clearfix agar container tidak collapse */</span>
        <span class="hljs-selector-class">.clearfix</span><span class="hljs-selector-pseudo">:after</span> {
            <span class="hljs-attribute">content</span>: <span class="hljs-string">""</span>;
                <span class="hljs-attribute">clear</span>: both;
                    <span class="hljs-attribute">display</span>: table;
        }
</code></pre><ul>
<li>clear - digunakan untuk mengembalikan flow pada element menjadi kembali normal. Karena perlu diingat pemakaian float akan mengubah flow element.</li>
</ul>
<ol>
<li>Mengatur layout dan jarak pada element main. Mengatur element &quot;main&quot;</li>
</ol>
<pre><code><span class="hljs-selector-tag">main</span> {
            <span class="hljs-attribute">box-sizing</span>: border-box;
            <span class="hljs-attribute">float</span>: left;
            <span class="hljs-attribute">width</span>: <span class="hljs-number">80%</span>;
        }
</code></pre><p><strong>Breakdown</strong></p>
<ul>
<li><p>float - digunakan untuk mengatur penempatan pada element. Perlu diperhatikan </p>
</li>
<li><p>Mengatur layout dan jarak pada element aside. </p>
<pre><code><span class="hljs-selector-tag">aside</span> {
        <span class="hljs-attribute">box-sizing</span>: border-box;
        <span class="hljs-attribute">width</span>: <span class="hljs-number">20%</span>;
        <span class="hljs-attribute">float</span>: right;
    }
</code></pre></li>
<li><p>Mengatur Area footer agar terlihat formal </p>
<pre><code><span class="hljs-selector-tag">footer</span> {
        <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;
        <span class="hljs-attribute">background-color</span>: Black;
        <span class="hljs-attribute">color</span>: white;
    }
</code></pre></li>
</ul>
<h2 id="contoh-lengkap">COntoh lengkap</h2>
<p><a href="../code/latihan-html/index-LT-03.html">script lengkap</a></p>




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