<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="css-introduction">CSS Introduction</h1>
<p>Cascading Style Sheet (CSS) merupakan instruksi penulisan untuk mengatur tata letak dan penampilan document HTML. Dengan adannya Bantuan CSS sebagai pengelola tampilan dari document akan sangat mempermudah penulis menciptakan karyanya. </p>
<p>Beberapa Fitur CSS:</p>
<ol>
<li>Mengubah warna text maupun background</li>
<li>Mengubah ukuran gambar atau text</li>
<li>Membuat animasi atau effect</li>
<li>Mengatur penempatan object</li>
<li>Memberikan border</li>
</ol>
<h2 id="mengenal-css-syntax">Mengenal CSS syntax</h2>
<p>CSS snytax merujuk kepada format aturan dalam pembuatan style. CSS Syntax berisi deklarasi, properties, dan Selector</p>
<h2 id="cara-menghubungkan-css-dengan-document-html">Cara menghubungkan css dengan document html</h2>
<p>Ada tiga cara untuk menghubungkan CSS kedalam document HTML:</p>
<ol>
<li>Inline Style Sheet
Menulis code CSS tepat didalam object yang dituju.
Contoh <code>&lt;p style=&#39;color:red;&#39;&gt; &lt;/p&gt;</code> </li>
<li>Embedded Style sheet
Menulis code CSS didalam TAG HEAD.
contoh:</li>
</ol>
<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
<span class="hljs-selector-tag">p</span> {<span class="hljs-attribute">color</span>: <span class="hljs-string">'red'</span>;}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
</code></pre><ol>
<li>External CSS
Link menuju tempat penyimpanan CSS kita, ditulis didalam TAG <code>&lt;head&gt;</code>.
<code>&lt;link href=&#39;style.css&#39; rel=&#39;stylesheet&#39;&gt;</code></li>
</ol>
<h2 id="css-property">CSS Property</h2>
<pre><code><span class="hljs-selector-tag">p</span> {
    <span class="hljs-attribute">color</span>: red;
}
</code></pre><p>Pada kode diatas, &quot;p&quot; adalah element selector atau disebut selector. Sedangkan &quot;color&quot; adalah property. property adalah yang memberikan instruksi bagian mana dari selector tersebut berubah secara visual. </p>
<h2 id="menggenai-id">Menggenai Id</h2>
<p>Konsep dari attribute id itu sama dengan attribute class, kita dapat menlakukan perubahan pada tampilan mereka.</p>
<p>Tetapi jika ada id dan class yang memiliki style berlawanan maka, style dari id yang akan dipakai.</p>
<p>Dibawah ini adalah contoh mendifinisikan id pada css, dan melakukan pengaturan style:</p>
<pre><code><span class="hljs-selector-id">#div-main</span> {
  <span class="hljs-attribute">background-color</span>: white;
}
</code></pre><h2 id="menggenai-padding">Menggenai padding</h2>
<p>pada pengaturan ukuran element terdapat setidaknya tiga property dasar: padding, border, dan margin.</p>
<p>Kita mulai dari padding, padding adalah jarak dari content didalam element ke bagian border.
<code>padding: 1px 1px 1px 1px;</code></p>
<p>Border adalah batas luar dari content. Kita dapat melihat border, dengan mendefinisikan border ke dalam element tersebut. 
<code>border: 1px solid red;</code></p>
<p>Sedangkan margin adalah jarak antara element satu dengan yang lainnya.
<code>margin: 1px 1px 1px 1px;</code></p>
<p>Dibawah ini adalah format untuk value padding dan margin:</p>
<pre><code>padding: <span class="hljs-number">40</span>px <span class="hljs-number">20</span>px <span class="hljs-number">20</span>px <span class="hljs-number">40</span>px;
  // Format penempatan : padding-<span class="hljs-built_in">top</span>, padding-<span class="hljs-built_in">right</span>, padding-<span class="hljs-built_in">bottom</span>, and padding-<span class="hljs-built_in">left</span>
</code></pre><h2 id="css-selectors">CSS Selectors</h2>
<p>Untuk mempermudah kita dalam melakukan configurasi tampilan halaman, kita bisa mengunakan fungsi <em>CSS Selector</em>. </p>
<p>Dimana kita sebagai brainware / developer, cukup mendefinisikan nama element di dalam style css, lalu melakukan configurasi disana.</p>
<p>Sebagai perumpamaan: 
Terdapat sebuah perumahan yang beriisi banyak blok dan setiap blok memiliki aturan pewarnaan bangunan sendiri-sendiri.
Sebagai contoh blok A terdiri dari bangunan yang memiliki dominan warna merah, sedangkan blok B terdiri dari bangunan yang memiliki dominan warna biru.</p>
<p>Disini adalah pertanyaan nya!</p>
<p>Terdapat seorang kurir yang bertanya kepada kita, Seperti apa penanda bangunan untuk blok B?</p>
<p>Jawaban:</p>
<p>a. kita menjawab dengan memberitahui warna dominan pada blok B.
b. Kita menjawab dengan memberitau blok B berada di dekat blok A.</p>
<p>Penyelesaian:
Jika jawaban kita adalah a. maka itu benar.
Karena konsep dari css selector adalah menuliskan alamat tujuan dari element yang kita tuju (<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors?retiredLocale=id">https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors?retiredLocale=id</a>).</p>
<h2 id="attribute-selector">Attribute selector</h2>
<pre><code><span class="hljs-comment">/*ini akan mendefinisikan alamat yang didalam attribute class terdapat kata "link" */</span>

<span class="hljs-selector-attr">[class~="link"]</span> {
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span> <span class="hljs-number">0px</span> <span class="hljs-number">20px</span> <span class="hljs-number">0px</span>;
}
</code></pre><h2 id="css-box-model">CSS Box Model</h2>
<p>Didalam Sebuah Element HTMl itu terdiri dari:</p>
<ul>
<li>Content - Adalah area utama dimana jika kita menuliskan suatu text, text tersbut berada didalam contetn</li>
<li>Padding - Adalah area kosong yang menjadi jarak antara content dengan border / bagian tepi element </li>
<li>Border - Adalah bagian tepi dari  suatu element. Berada diantara padding dan margin </li>
<li>Margin - adalah bagian luar dari border. Yang memberi jarak antara element satu dengan yang lainnya</li>
</ul>
<h2 id="box-sizing-border-box">Box-sizing:border-box</h2>
<p>&quot;box-sizing: border-box&quot; adalah salah satu properti css yang dapat digunakan untuk mengatur box model dalam suatu element HTML. Secara simple &quot;border-box&quot; adalah digunakan untuk memastikan tinggi dan lebar dari element sesuai dengan keingginan kita. </p>
<p>Cerita:</p>
<ul>
<li><p>Pada dasarnya element akan memiliki tipe &quot;box-sizing: content-box&quot;, yang dimana ukuran element akan dihitung berdasarkan ukuran kontent ditambah padding dan border, Sehingga jika kita menambahkan padding atau border ukuran total element akan membesar. </p>
</li>
<li><p>Jika &quot;box-sizing: border-box&quot; mereka akan mengatur agar ukuran lebar dan tinggi sesuai dengan spesifikasi yang sudah kita tulis.</p>
</li>
</ul>
<p>Pada dasarnya box model mengunakan  perhitungan nilai width x height pada element sperti berikut</p>
<pre><code>Width = width + <span class="hljs-built_in">left</span> padding + <span class="hljs-built_in">right</span> padding + <span class="hljs-built_in">left</span> border + <span class="hljs-built_in">right</span> border

Height = height + <span class="hljs-built_in">top</span> padding + <span class="hljs-built_in">bottom</span> padding + <span class="hljs-built_in">top</span> border + <span class="hljs-built_in">bottom</span> border
</code></pre><p>src: <a href="https://medium.com/@elelvyra/learn-css-box-model-dan-box-sizing-6b19a367478d#:~:text=Box%20sizing%20adalah%20properti%20yang,width%20dan%20height%20suatu%20elemen">https://medium.com/@elelvyra/learn-css-box-model-dan-box-sizing-6b19a367478d#:~:text=Box%20sizing%20adalah%20properti%20yang,width%20dan%20height%20suatu%20elemen</a>.</p>
<p>Mari kita coba untuk membuat box model terlebih dahulu, dengan width 200 px, height 200px, padding kanan-kiri 20px, padding atas-bawah 20px, border kanan-kiri 20px, dan border atas-bawah 20px.</p>
<p>mari kita hitung dengan cara diatas</p>
<pre><code>width = <span class="hljs-number">200</span> + <span class="hljs-number">10</span> + <span class="hljs-number">10</span> + <span class="hljs-number">10</span> + <span class="hljs-number">10</span> = <span class="hljs-number">240</span>
height = <span class="hljs-number">200</span> + <span class="hljs-number">10</span> + <span class="hljs-number">10</span> + <span class="hljs-number">10</span> + <span class="hljs-number">10</span> = <span class="hljs-number">240</span>
</code></pre><p>Total width adalah 240 dan juga height nya. Ada cara jika kita ingin menghasilkan 200px tersebut adalah keseluruhan dari 
width dan height, yaitu menambahkan property <code>box-sizing: border-box;</code>. <strong>border-sizing</strong> akan mengatur agar lebar atau tinggi dari element tersebut sesuai dengan ukuran width dan height yang sudah ada. </p>
<p>Mari kita lihat ukuran total pada gambar sebelum box-sizing.</p>
<p><img src="../aset/box-sizing-before.png" alt="Sebelum box sizing"></p>
<p>Jika semisal Kita menambahkan property box sizing seperti code dibawah</p>
<pre><code><span class="hljs-selector-tag">div</span><span class="hljs-selector-class">.main</span> {
        <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
        <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
        <span class="hljs-attribute">background-color</span>: green;
        <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;
        <span class="hljs-attribute">border</span>: <span class="hljs-number">10px</span> solid black; 
        <span class="hljs-attribute">box-sizing</span>: border-box;
      }
</code></pre><p>Intinya:</p>
<pre><code><span class="hljs-built_in">box</span>-sizing: <span class="hljs-built_in">border</span>-<span class="hljs-built_in">box</span>;

<span class="hljs-comment">/* berbeda dengan */</span>

<span class="hljs-built_in">box</span>-sizing: <span class="hljs-built_in">content</span>-<span class="hljs-built_in">box</span>;
</code></pre><p>hasilnya akan menjadi Seperti gambar dibawah. <code>box-sizing: border-box</code> akan membuat komputer mengatur secara otomatis pembagian dari width dan height untuk membuat hasil total tidak lebih dari yang sudah dideklarasi kan</p>
<p><img src="../aset/box-sizing-after.png" alt="setelah boxsizing"></p>
<h2 id="css-float">CSS float</h2>
<p>Untuk source code bisa dilihat disini: <a href="https://replit.com/@SayaManusia/CSS-Floats#index.html">https://replit.com/@SayaManusia/CSS-Floats#index.html</a></p>
<p>Float adalah property css yang dapat membantu anda untuk mengatur agar element bisa bergerak secara horizontal.
Float tidak hanya untuk mengatur arah gerak element, float akan membuat element disekitarnya bisa berada didalam area element float, tidak bergerak dibawah dari element float </p>
<p>Seperti pada digambar dibawah ini. Kotak kecil berwana merah memiliki property float, tetpai kotak kuning besar tidak memiliki float. Maka kotak kuning besar akan berjalan dibawah kotak merah. </p>
<p><img src="../aset/float test.png" alt="float test"></p>
<p>Ada tiga value float yang sering dipakai: </p>
<ol>
<li>right</li>
<li>left </li>
<li>none, Akan menggubah ke tempat default </li>
</ol>
<p>cara penggunaan <code>float: left;</code></p>
<p>dan ada tiga cara yang biasaanya digunakan untuk memindahkan element</p>
<ol>
<li><code>float: left;</code> untuk memindahkan ke area kiri</li>
<li><code>margin: 0 auto;</code> Untuk memindahkan ke area tengah</li>
<li><code>float: right;</code> untuk memindahkan ke area kanan </li>
</ol>
<h2 id="html-document-tree">HTML document Tree</h2>
<p><a href="http://web.simmons.edu/~grabiner/comm244/weekfour/document-tree.html#:~:text=Parent%20and%20Child,element%20in%20the%20document%20tree">http://web.simmons.edu/~grabiner/comm244/weekfour/document-tree.html#:~:text=Parent%20and%20Child,element%20in%20the%20document%20tree</a>.</p>
<h2 id="flexbox">Flexbox</h2>
<p>Untuk melihat source code kecil menggenai flexbox: 
<a href="../code/flexbox-test">flexbox src</a></p>
<p>Flexbox  memiliki kemiripan dengan float, tetapi disini kita bisa mengatur penuh tata letak element. Mulai dari Posisi, urutan, garis arah dan ukuran dari element. </p>
<p>Untuk memahami penggunaan dari float dan flexbox. Flexbox memiliki fungsi yang lebih lengkap daripada float, flex akan bisa bekerja jika ada minimal &quot;parent&quot;, &quot;child&quot; element. Flexbox sangat disarankan jika ingin mengatur bagian yang besar pada website. </p>
<p>Sedangkan float akan dipakai pada element kecil pada halaman website, yang tidak memerlukan fungsi kompleks. </p>
<p>Istillah bagian kecil float pada halaman  website adalah <strong>Magaine-style  layouts</strong>
istilah bagian besar yang ditanggani oleh flexbox adalah  <strong>overall page structure</strong>
src: <a href="https://www.internetingishard.com/html-and-css/flexbox/">https://www.internetingishard.com/html-and-css/flexbox/</a></p>
<p>Pada Flexbox ada dua tipe box yang perlu kita pahami, yaitu &quot;flex container&quot; dan &quot;flex items&quot;. element HTML yang ada didalam element container itu disebut sebagai item. Kita bisa mengatur setiap item secara individu, tetapi sebagian besar tergantung dengan container untuk mengaturnya bagaimana. </p>
<p>Untuk menggunakan flexbox, kita harus menambahkan property <code>display: flex;</code> kedalam container, karena jika tidak maka semua property flexbox tidak akan dibaca oleh komputer. </p>
<p>FLex vontainer hanya memperhatikan posisi element yang berada di satu level dibawahnya ( element didalam dari container adalah item ). Container tidak akan mengatur element yang berada didalam item.</p>
<p>Untuk melakukan customisasi pada element pada  bidang horizontal, kita akan memakai property <code>justify-content</code> 
ini akan membantu untuk memindahkan element, dan mengatur jarak antar item. </p>
<p>value yang bisa dipilah pada property justify-content:</p>
<ul>
<li>Center  - akan membuat element berada di tengah</li>
<li>Flex-start - akan memindahkan element ke bagian kiri </li>
<li>Flex-end - akan memindahkan element kebagian kanan </li>
<li>Space-between akan memberikan jarak antar element saja, tidak termasuk border</li>
<li>space-around akan memberikan jarak antar element dan border </li>
</ul>
<p>Untuk mengelompokan element pada flexbox, kita cukup buat flexbox lagi didalam container, seperti code dibawah ini</p>
<pre><code>
&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">'menu-container'</span>&gt; <span class="xml"><span class="hljs-comment">&lt;!-- This is main container--&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'menu'</span>&gt;</span> 

            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'date'</span>&gt;</span>Aug 14, 2016<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>    <span class="hljs-comment">&lt;!-- main container item --&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'links'</span>&gt;</span>                     <span class="hljs-comment">&lt;!-- This is second container --&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'signup'</span>&gt;</span>Sign Up<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>   <span class="hljs-comment">&lt;!-- second container item --&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'login'</span>&gt;</span>Login<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>      <span class="hljs-comment">&lt;!-- second container item --&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
</code></pre><p><img src="../aset/flexbox-kelompok.png" alt="flexbox kelompom"></p>
<p>Flexbox juga dapat mengatur pergerakan elementdalam bidang  vertikal, dengan menggunakan property <code>align-items</code>.</p>
<p>Beberapa value yang terdapat pada alig-items:</p>
<ul>
<li>Center - mengatur posisi item ke tengah </li>
<li>flex-start - akan mengatur element ke bagian atas container </li>
<li>flex-end - akan mengatur elemet ke bagian bawah container </li>
<li>stretch- akan mengatur element menjadi memanjang kebawah</li>
</ul>
<h2 id="css-grid">CSS Grid</h2>
<p>CSS grid adalah suatu sistem layout dua dimensi pada website, sama seperti flexbox. </p>
<p>Sistem layout design berfungsi untuk mengontrol pergerakan, ukuran, dan penempatan pada element. Dengan CSS grid kita dapat membuat aturan dalam penempatan element di dalam website.</p>
<p>Penggunaan yang baik untuk grid adalah untuk mengatur bagian kecil pada website. Sedangkan element induk yang mencakup element kecil-kecil dikonfigurasi oleh Flexbox.</p>
<h2 id="css-transform-and-transition">CSS transform and transition</h2>
<p>Adalah suatu protokol untuk melakukan perubahan secara visual yang terdapat pada element web. Kedua transformasi tersebut melakukan bentuk animasi tanpa harus menggunakan javascript.</p>
<ul>
<li><p>CSS Transform
fungsi ini digunakan untuk memanipulasi bentuk visual dari element, dengan cara mengubah posisi, ukuran, rotasi, dan persepktif. Sebagai contoh element akan berotasi sesuai dengan berapa derajat yang diinginkan. </p>
</li>
<li><p>CSS Transition
fungsi ini akan membantu dalam melakukan perubahan kondisi dari element. anda juga dapat menjelaskan detail seberapa cepat durasi effek, dan sebagainnya. 
contoh efek transition adalah mengubah ukuran visual dari element.
Referensi: <a href="https://www.w3schools.com/css/css3_transitions.asp">https://www.w3schools.com/css/css3_transitions.asp</a></p>
</li>
</ul>
<hr>
<h1 id="cheatsheet-area">Cheatsheet area</h1>
<h4 id="contoh-code-css">Contoh code CSS</h4>
<p><code>p { color: red; }</code></p>
<ul>
<li><code>p</code> CSS akan mengambil object bernama &#39;p&#39; dari HTML.</li>
<li><code>color</code> membuat fungsi untuk memilih warna. jika tidak ada &#39;color&#39; maka warna yang dipakai adalah default.</li>
<li><code>red</code> memilih warna merah.</li>
</ul>
<h3 id="css-media-query">CSS media Query</h3>
<p>Adalah teknologi atau tool yang akan membantu kita membuat skenario khusus pada device tertentu.</p>
<ul>
<li><p><code>min-width</code>: Jika yang digunakan adalah ini, maka semua device yang telah melebihi batas minimal akan dilakukan perubahan. </p>
</li>
<li><p><code>max-width</code>: jika yang digunakan adalah ini, maka semua device yang lebih kecil dari batas maksimal akan dilakukan perubahan </p>
</li>
<li><p><code>(min-width) and (max-width)</code>: Jika yang digunakan adalah ini maka hanya device yang telah melewati batas minimal, dan tidak melebihi batas maksimal akan mengalami perubahan. </p>
</li>
</ul>
<p>contoh code </p>
<pre><code>@<span class="hljs-keyword">media</span> (min-width: <span class="hljs-number">400px</span>) and (max-width: <span class="hljs-number">500px</span>) {
  <span class="hljs-selector-tag">body</span> {
    <span class="hljs-attribute">background-color</span>: purple;
  }

<span class="hljs-comment">/* ============= */</span>
@<span class="hljs-keyword">media</span> (min-width: <span class="hljs-number">400px</span>) {

<span class="hljs-selector-tag">body</span> {
<span class="hljs-attribute">background-color</span>: red;
}

}


<span class="hljs-comment">/* ============= */</span>

@<span class="hljs-keyword">media</span> (max-width: <span class="hljs-number">600px</span>){

<span class="hljs-selector-tag">body</span> {
<span class="hljs-attribute">background-color</span>: purple;
}
}

<span class="hljs-comment">/* ============= */</span>
</code></pre><h4 id="refrensi">Refrensi</h4>
<ul>
<li><a href="https://id.wikipedia.org/wiki/Cascading_Style_Sheets">https://id.wikipedia.org/wiki/Cascading_Style_Sheets</a></li>
<li><a href="https://www.w3schools.com/css/css_howto.asp">https://www.w3schools.com/css/css_howto.asp</a></li>
<li><a href="https://www.freecodecamp.org/">https://www.freecodecamp.org/</a></li>
<li><a href="https://css-tricks.com/a-complete-guide-to-css-media-queries/">https://css-tricks.com/a-complete-guide-to-css-media-queries/</a> (media query)</li>
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