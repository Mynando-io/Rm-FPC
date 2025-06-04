<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<p><img src="#" alt="image02"></p>
<p>HTML ( HyperText Markup Language )  adalah suatu instruksi untuk menulis document agar bisa ditampilkan ke dalam web browser. web browser akan mengambil file HTML dari penyimpanan local dan akan diubah menjadi halaman website.</p>
<p>Dalam Pembuatan website terdapat setidaknya 3 komponen Pembangun:</p>
<ul>
<li>Kerangka tubuh: HTML</li>
<li>Fungsi Tubuh: JavaScript</li>
<li>Bagian paling luar tubuh : CSS</li>
</ul>
<p>Secara garis besar kita dapat bayangkan HTML adalah bagian yang akan menjadi penompang dari text dan gambar, JavaScript adalah bagian yang menghasilkan suatu respon akan sesuatu, dan CSS adalah bagian yang akan mengatur tampilan mereka.</p>
<h2 id="agar-dapat-menguasai">Agar dapat menguasai</h2>
<p>Dalam penggunaan html, css terdapat opsi untuk menggunakan framework untuk mempercepat proses pembuatan. 
bagi yang baru mulai belajar diharapkan jangan terlalu mengandalkan framework dalam pembuatan halaman website karena itu akan menghasilkan kebiasaan yang buruk dalam problem solving (Programing Unpas).</p>
<p>Contoh mudahnya: Dalam matematika terdapat banyak trick cepat dalam penyelesaian suatu masalah, akan tetapi itu tidak baik karena jika ketemu masalah yang berbeda akan menjadi sulit nanti.</p>
<p>Bagi yang masih belum tau Framework. Framework adalah adalah bentuk pondasi yang telah jadi dalam membangun sistem. 
Dengan framework kita tidak perlu membangun sistem sepenuhnya dari awal (<a href="https://www.codecademy.com/resources/blog/what-is-a-framework/#:~:text=A%20framework%20is%20a%20structure,you%27re%20building%20a%20house">https://www.codecademy.com/resources/blog/what-is-a-framework/#:~:text=A%20framework%20is%20a%20structure,you%27re%20building%20a%20house</a>.).</p>
<p>Selain itu kita juga harus berani mencoba dan berlatih dalam pembuatan website. Sebuah kesalahan dalam berusaha adalah hal yang mutlak tidak ada yang bisa lari dari itu. Oleh karena itu jika ingin menguasai Pembuatan website maka harus berani mencoba.</p>
<h2 id="peralatan-membantu">Peralatan membantu</h2>
<p>Dalam Pemrograman seperti website diperlukan alat untuk membantu pembuatan website. Alat tersebut terkadang berbentuk sabagai hardware maupun software.</p>
<p>Tetapi perlu kita wajib pahami adalah sebuah alat hanyalah alat, yang terpenting adalah brainware yang akan menggunakan alat tersebut. </p>
<p>Contoh software yang sering digunakan adalah:</p>
<ul>
<li>Vscode</li>
<li>Atom text editor</li>
<li>Notepad ++</li>
</ul>
<p>Software Browser:</p>
<ul>
<li>Google Chrome</li>
<li>Opera</li>
<li>Mozila Firefox</li>
</ul>
<p>Hardware Pendukung:</p>
<ul>
<li>Monitor dengan minimal resolusi 1920 * 1080</li>
<li>2 Monitor untuk mempermudah pengerjaan</li>
</ul>
<p>Dalam pengerjaan halaman website alangkah baiknya untuk membuka halaman website dan text editor secara continue. Setiap kali kita telah melakukan perubahan bisa langsung di lihat hasilnya di web browser. </p>
<h2 id="structur-html">Structur HTML</h2>
<p>Dalam pembuatan style document website, terdapat suatu structur yang paling populer.</p>
<p>SRC: <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure">https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure</a></p>
<ul>
<li><p>Header:
Adalah garis besar yang berada di tempat paling atas document. Biasannya berisi dengan logo dan menu.</p>
</li>
<li><p>Navigation Bar: 
adalah bagian yang berfungsi untuk menjadi peta petunjuk pada website. Biasannya berbentuk menu yang menyediakan fitur dan layanan website tersebut. </p>
</li>
<li><p>main content: </p>
</li>
</ul>
<p>Adalah bagian paling penting dalam sebuah website, yang berisi mengenai layanan atau topic yang dibahas pada website. </p>
<p>Sebagai contoh: pada youtube main content adalah bagian dimana kita melihat video yang sedang berjalan.</p>
<ul>
<li>Sidebar :</li>
</ul>
<p>Adalah bagian yang berisi informasi tambahan ataupun pilihan layanan lainnya. Biasannya sidebar berada di sebelah main content.</p>
<p>Sebagai contoh: pada youtube sidebar adalah bagian kanan video. Sidebar tersebut berisi pilihan video lainnya yang bisa kita tonton.</p>
<ul>
<li>footer:</li>
</ul>
<p>Biasannya footer berupa garis paling bawah didalam halaman website. Footer berisi mengenai informasi kepimilikan dan informasi kontak dari pemilik website. </p>
<h2 id="table-pada-html">Table pada HTML</h2>
<table>
<thead>
<tr>
<th>NIM</th>
<th>Name</th>
<th>Major</th>
</tr>
</thead>
<tbody>
<tr>
<td>0123</td>
<td>Rangga</td>
<td>Bahasa inggris</td>
</tr>
<tr>
<td>0124</td>
<td>Wahyu</td>
<td>Sistem Informasi</td>
</tr>
<tr>
<td>0125</td>
<td>Atmoko</td>
<td>Pendidikan matematika</td>
</tr>
</tbody>
</table>
<p>Diatas adalah contoh dari table. Didalam table terdapat kolom dan baris. </p>
<p>Kolom adalah bagian content yang vertical dari atas ke bawah, Contoh: Nim, Name, Major. </p>
<p>Baris adalah bagian conten yang horizontal lurus ke kanan, Contoh: rangga, wahyu, atmoko.</p>
<p>COntoh code table pada HTML</p>
<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">table</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span> 
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span> NIM <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span> Name <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span> Major <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span> 0123 <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span> Rangga <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span> Bahasa INggris <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span> 
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span> 0124 <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span> wahyu <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span> Sistem Informasi <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span> 
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span> 0125 <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span> Atmoko <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span> Pendidikan Matematika <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
</code></pre><h2 id="form-pada-html">Form pada html</h2>
<h2 id="pentingnya-semantic-pada-html">Pentingnya semantic pada html</h2>
<p>Semantic element pada HTML digunakan untuk memberikan makna pada content yang dimiliki.
Fungsi utama adalah untuk memberi tau developer dan user pemahaman lebih mengenai fungsi conten dan tujuannya. Selain itu semantic pada website akan dapat meningkatkan hasil Search Engine Optimization(SEO). </p>
<p>Contoh Element Semantic <a href="https://www.petanikode.com/html-semantik/">https://www.petanikode.com/html-semantik/</a>:</p>
<ul>
<li><code>&lt;article&gt;</code></li>
<li><code>&lt;aside&gt;</code></li>
<li><code>&lt;details&gt;</code></li>
<li><code>&lt;figcaption&gt;</code></li>
<li><code>&lt;figure&gt;</code></li>
<li><code>&lt;footer&gt;</code></li>
<li><code>&lt;main&gt;</code></li>
<li><code>&lt;nav&gt;</code></li>
</ul>
<h2 id="proses-pembuatan">Proses pembuatan</h2>
<p>Fitur HTML:</p>
<ol>
<li>Menulis text</li>
<li>Memberikan ukuran dan ketebalan kedalam text</li>
<li>Membuat table</li>
<li>memanbahkan gambar </li>
<li>Menambahkan Pranala ( lebih kita kenal dengan embedded link  )</li>
<li>Menambahkan data suara</li>
<li>menambahkan Form yang dapat diisi</li>
</ol>
<h5 id="contoh-source-code-html">Contoh source code HTML</h5>
<pre><code><span class="hljs-meta">&lt;!doctype html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Homepage<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Hello, World!<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre><p>Mari kita pahami sedikit. </p>
<ul>
<li><code>&lt;!doctype html&gt;</code> ini bukan HTML tag, dibutuhkan untuk memberi informasi kepada web browser tentang document apa ini.</li>
<li><code>&lt;html lang=&#39;en&gt;</code> Ini untuk membantu mesin pencari dan web browser dalam mengelola. Untuk informasi lebih banyak <a href="https://www.w3schools.com/tags/ref_language_codes.asp">https://www.w3schools.com/tags/ref_language_codes.asp</a>.</li>
<li><code>&lt;head&gt; &lt;/head&gt;</code> data yang biasannya berada di dalamnya adalah title, css-source code, javascript-source code, &#39;META&#39; data, data font style dan lain-lain.</li>
<li><code>&lt;body&gt; &lt;/body&gt;</code> TAG ini digunakan untuk menyimpan informasi atau data sebelum di olah menjadi halaman website.</li>
<li><code>&lt;p&gt; &lt;/p&gt;</code> TAG ini digunakan untuk menulis paragraph biasa didalam document.</li>
</ul>
<h2 id="apa-itu-html-element-">Apa itu HTML Element?</h2>
<p>Html element dimulai dari tag pertama, beberapa content, dan diakhiri dengan tag penutup.
Html <strong>element</strong> adalah semua yang berada dari tag pembuka dan penutup.</p>
<p><strong>nested HTML  Elment</strong> adalah sebuah element yang memiliki element lain didalam nya. 
Contoh: </p>
<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>My First Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>My first paragraph.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
</code></pre><blockquote>
<p>Untuk beberapa element, terkadang dipanggil sebagai empty element &quot;<br>&quot; karena tidak memiliki content dan tag penutup </p>
</blockquote>
<p>HTML tidak melakukan &quot;CaseSensitive&quot;, Anda bisa menggunakan huruf besar atau kecil sesuka hati, tetapi usahakan untuk 
consistent, agar code terlihat rapih.</p>
<p>Pada structur page HTML, semua yang berada didalam ; akan ditampilkan pada halaman browser. Sedangkan 
semua content yang berada didalam element  akan muncul pada browser title</p>
<h2 id="html-attribute">HTML attribute</h2>
<p>Semua element HTML bisa memiliki attribute, untuk memberikan instruksi tambahan atau informasi tambahan. </p>
<ul>
<li>Attribute selalu ditambahkan pada tag pembuka </li>
<li>attribute biasannya ber format <code>attribute_name = &quot;value&quot;</code>
Contoh attribute pada HTML<pre><code>&lt;<span class="hljs-selector-tag">img</span> src=<span class="hljs-string">"img_mountain.jpg"</span> alt=<span class="hljs-string">"this is himalaya mountain"</span>&gt;
</code></pre></li>
</ul>
<p>Dalam SRC secara online, URL memiliki dua tipe:</p>
<ul>
<li>Absolute URL - adalah link yang didapatkan dari platfrom hosted atau website yang bukan milik kita
  Contoh: saya mengunakan link gambar yang berada di wikipedia untuk menjadi sampul halaman website blogspot saya </li>
<li>Relative URL - adalah link yang image / data yang sudah ada di dalam website kita sendiri</li>
</ul>
<h4 id="breakdown-struktur-link">BreakDown Struktur link</h4>
<p><code>https://github.com/playmakermz/warkop-website/blob/main/document/html.md</code></p>
<ul>
<li>Schema : &quot;https://&quot;</li>
<li>Domain : &quot;github.com&quot;</li>
<li>Path   : &quot;/playmakermz/warkop-website/blob/main/document/html.md&quot;</li>
</ul>
<h2 id="penggunaan-css">Penggunaan CSS</h2>
<ul>
<li><strong>inline</strong> - dengan menggunakan <code>style</code> attribute didadalam element HTML</li>
<li><strong>Internal</strong>  - dengan menggunakan element <code>&lt;style&gt;</code> didalam <code>&lt;head&gt;</code></li>
<li><strong>External</strong> - dengan menggunakan element <code>&lt;link&gt;</code> pada <code>&lt;head&gt;</code> untuk merujuk ke source file css</li>
</ul>
<pre><code><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"styles.css"</span>&gt;</span> <span class="hljs-comment">&lt;!-- Exsternal CSS --&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css"> &lt;!<span class="hljs-selector-tag">--</span> <span class="hljs-selector-tag">Internal</span> <span class="hljs-selector-tag">CSS</span> <span class="hljs-selector-tag">--</span>&gt;
    <span class="hljs-selector-tag">body</span> {<span class="hljs-attribute">background-color</span>: powderblue;}
    <span class="hljs-selector-tag">h1</span>   {<span class="hljs-attribute">color</span>: blue;}
    <span class="hljs-selector-tag">p</span>    {<span class="hljs-attribute">color</span>: red;}
  </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color:blue;"</span>&gt;</span>This is a heading<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span> <span class="hljs-comment">&lt;!-- Inline CSS--&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This is a paragraph.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre><h2 id="border">Border</h2>
<p>Border adalah bagian tepi dari element. Dengan menggunakan property border kita bisa menampilkan gari tepi element dan 
melakukan pengubahan pada tampilan border. </p>
<pre><code><span class="hljs-keyword">border: </span><span class="hljs-number">1</span>px solid red<span class="hljs-comment">;</span>
</code></pre><h2 id="html-block-dan-inline-element">HTML BLock dan inline Element</h2>
<p>Pada HTML terdapat berabagai macam display value kita akan melihat yang paling sering digunakan yaitu: Block, dan inline</p>
<p><strong>Block-level Elements</strong></p>
<p>block level element akan selalu membuat baris baru setelah kita declarasi. Block level element akan menggambil penuh 
width/lebar yang tersedia. Ketinggian border dari Block level adalah berdasarkan content yang dimiliki. Contoh dari block level element <code>&lt;p&gt;</code> dan <code>&lt;div&gt;</code></p>
<p><strong>Inline Elements</strong></p>
<p>Inline element tidak akan membuat baris baru seperti block level. Lebar dari inline element akan sama dengan content yang ada didalamannya, Oleh karena itu kita tidak bisa menggatur <strong>width dan Height</strong> dari element yang memeiliki inline. Contoh inline element <code>&lt;em&gt;</code>, <code>&lt;span&gt;</code>, dan <code>&lt;strong&gt;</code></p>
<p><strong>inline-block</strong></p>
<p>Selain dari block dan inline, ada juga inline-block. Element yang memiliki display inline-block bisa kita atur &quot;width&quot; dan &quot;height&quot; mereka. Secara mudahnnya ini adalah pergabungan antara block dan inline. </p>
<p><strong>display: none</strong></p>
<p>Jika kita menambahkan property ini pada element, maka elemnt tersebut akan menghilang dari halaman website. </p>
<h2 id="pohon-keluarga-pada-document-html">Pohon keluarga pada document HTML</h2>
<p>Pada pembuatan halaman website, alangkah baiknya untuk bisa memahami struktur pohon keluarga document. </p>
<p>Konsep ini sangat penting untuk mempermudah kita menyusun kerangka html yang lebih kompleks (<a href="http://web.simmons.edu/~grabiner/comm244/weekfour/document-tree.html">http://web.simmons.edu/~grabiner/comm244/weekfour/document-tree.html</a>).</p>
<pre><code class="lang-&lt;body&gt;">
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"content"</span>&gt;</span> <span class="hljs-comment">&lt;!-- parent --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>  <span class="hljs-comment">&lt;!-- child --&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> item 1 <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span> <span class="hljs-comment">&lt;!-- sibling from on e parent --&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> item 2 <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span> <span class="hljs-comment">&lt;!-- sibling --&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
<hr>
<h1 id="cheatsheet-area">CheatSheet Area</h1>
<h2 id="penulisan-unordered-list">Penulisan Unordered List</h2>
<p>Dengan Menggunakan Element <code>&lt;ul&gt;</code> sebagai container dan element <code>&lt;li&gt;</code> sebagai item kita bisa membuat Unordered list sama seperti dengan yang ada di microsoft word </p>
<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span> Judul <span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> List item 1 <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span> 
<span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> list item 2 <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
</code></pre><h2 id="penulisan-ordered-list">Penulisan Ordered List</h2>
<p>Dengan penulisan ber-urut. itu sama membuat list dengan angka secara otomatis.</p>
<p><code>&lt;ol&gt;</code> adalah sebagai container dan <code>&lt;li&gt;</code> sebagai element untuk item</p>
<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span> Judul <span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ol</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> Item 1 <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> item 2 <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ol</span>&gt;</span>
</code></pre><h2 id="font-style">Font style</h2>
<ul>
<li><p>Menulis dengan huruf tebal</p>
<pre><code>  &lt;<span class="hljs-keyword">strong</span>&gt; <span class="hljs-literal">Text</span> akan lebih tebal &lt;<span class="hljs-keyword">strong</span>&gt;
</code></pre></li>
<li><p>Menulis Huruf miring</p>
<pre><code>  <span class="hljs-tag">&lt;<span class="hljs-name">i</span>&gt;</span> Huruf garis miring <span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
</code></pre></li>
<li>Menulis Paragraf <pre><code>  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> Ini adalah Paragraf <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
</code></pre></li>
<li>Menulis Judul atau heading<pre><code>  <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span> Judul terbesar <span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span> Judul ke dua <span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
</code></pre></li>
<li>Garis Horizontal<pre><code>  <span class="hljs-tag">&lt;<span class="hljs-name">hr</span>/&gt;</span>
  <span class="hljs-comment">&lt;!-- Atau tanpa menggunakan garis miring --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">hr</span>&gt;</span>
</code></pre></li>
</ul>
<h2 id="element-cheatsheet">Element CheatSheet</h2>
<table>
<thead>
<tr>
<th>Tag</th>
<th>Element</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>h1 - h6</td>
<td><code>&lt;h1&gt; judul &lt;/h1&gt;</code></td>
<td>Heading </td>
</tr>
<tr>
<td>p</td>
<td><code>&lt;p&gt; paragraf &lt;/p&gt;</code></td>
<td>Paragraph</td>
</tr>
<tr>
<td>a</td>
<td><code>&lt;a href=&quot;#&quot;&gt;</code></td>
<td>Link `</td>
</tr>
<tr>
<td>img</td>
<td><code>&lt;img src=&quot;#&quot; alt=&quot;text&quot;&gt;</code></td>
<td>Image </td>
</tr>
<tr>
<td>hr</td>
<td><code>&lt;hr&gt;</code></td>
<td>Horizontal Rule, memberikan gari luru secara horizontal</td>
</tr>
<tr>
<td>br</td>
<td><code>&lt;br&gt;</code></td>
<td>Sebagai line break</td>
</tr>
<tr>
<td>pre</td>
<td><code>&lt;pre&gt; this is line &lt;/pre&gt;</code></td>
<td>akan menghasilkan fixed text, sama persis dengan content yang didalamnya. jarak tulisan tidak akan diataur oleh komputer</td>
</tr>
</tbody>
</table>
<h2 id="menambahkan-gambar-pada-document-">Menambahkan gambar pada document.</h2>
<p>Gambar berformat adalah object yang berada di luar document. Untuk menambahkan gambar ke document kita bisa panggil mereka melalui path yang tepat. Path bisa berasal dari internal source ataupun external source.</p>
<p>Contoh menambahkan gambar dari sumber internal.</p>
<pre><code><span class="hljs-comment">&lt;!-- &lt;img src=''/&gt; --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">'folder/gambar.jpg'</span>/&gt;</span>

<span class="hljs-comment">&lt;!-- atau mendefinisikan lebar default --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">'folder/gambar.jpg'</span> <span class="hljs-attr">width</span>=<span class="hljs-string">'100'</span>/&gt;</span>

<span class="hljs-comment">&lt;!-- text pengganti gambar jika gambar tidak berhasil di render --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">'folder/gambar.jpg'</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">'ini gambar'</span>/&gt;</span>
</code></pre><p>Pada dasarnya jika kita memanggil gambar, maka ukuran tinggi dan panjang akan diambil dari sumber aslinya.</p>
<h2 id="attribute-cheatsheet">attribute Cheatsheet</h2>
<table>
<thead>
<tr>
<th>attribute</th>
<th>Description </th>
</tr>
</thead>
<tbody>
<tr>
<td><code>href=&quot;#&quot;</code></td>
<td>Digunakan untuk menambahkan hyperlink / path ke sumber tujuan</td>
</tr>
<tr>
<td><code>src=&quot;#&quot;</code></td>
<td>Digunakan untuk memberi tau hyperlink / path yang menuju sumbur gambar</td>
</tr>
<tr>
<td><code>width=&quot;#&quot;</code></td>
<td>Menujukan ukuran Lebar</td>
</tr>
<tr>
<td><code>height=#</code></td>
<td>menujukan ukuran tinggi</td>
</tr>
<tr>
<td><code>alt=&quot;this is text&quot;</code></td>
<td>Biasannya digunakan untuk element &quot;img&quot;, jika gambar gagal dimunculkan text ini akan muncul </td>
</tr>
<tr>
<td><code>style=&quot;#&quot;</code></td>
<td>Digunakan untuk  menambahkan style pada element, dengan css </td>
</tr>
<tr>
<td><code>title=&quot;this is title&quot;</code></td>
<td>Ini akan memunculkan pop-up kecil saat anda mengarahkan mouse ke element tersebut</td>
</tr>
<tr>
<td><code>class=&quot;class_name&quot;</code></td>
<td>ini adalah untuk pengelompokan untuk diberi instruksi dari css ke element tersebut</td>
</tr>
<tr>
<td><code>id=&quot;id_name&quot;</code></td>
<td>ini adalah pengelompokan untuk diberi instruksi dari css ke element tersebut, dan juga hyperlink </td>
</tr>
</tbody>
</table>
<h2 id="menghubungkan-file-css-dengan-document-html">Menghubungkan file css dengan document HTML</h2>
<p>Masuk ke file latihan html 01 di repository ini: <a href="../latihan/html01.md">panduan menghubungkan document dan css</a></p>
<blockquote>
<p>Selamat telah menyelesaikan dasar HTML
Materi Selanjutnya akan kita bahas pada bagian CSS
Klik untuk lanjut ke halaman <a href="../document/css.md">klik ini</a></p>
</blockquote>
<hr>
<h1 id="latihan-html">Latihan HTML</h1>
<ul>
<li>Menghubungkan file CSS ke dalam document HTML
<a href="../latihan/html01.md">Latihan 1 HTML</a></li>
<li>Membuat Halaman website berisi puisi <a href="../latihan/lt-puisi.md">Latihan Puisi</a></li>
<li>Latihan Float <a href="../latihan/lt-float.md">latihan float</a></li>
<li>Membuat Standart Template Website <a href="../latihan/lt-standart-web.md">Latihan Standart</a></li>
<li>Latihan penggunaan box model <a href="../latihan/html02.md">Latihan 2 HTML</a></li>
<li>Membuat website dengan grid <a href="../latihan/lt-grid.md">Latihan_3</a></li>
<li>Membuat website dengan Flexbox <a href="../latihan/lt-flexbox.md">Flexbox</a></li>
<li>Contoh CSS position <a href="../latihan/lt-css-position.md">Contoh CSS</a></li>
<li>Membuat landing page website makanan</li>
<li>Membuat portofolio pribadi</li>
</ul>
<h4 id="refrensi">Refrensi</h4>
<ul>
<li><a href="https://id.wikipedia.org/wiki/HTML">https://id.wikipedia.org/wiki/HTML</a></li>
<li><a href="https://www.w3schools.com/tags/tag_doctype.asp">https://www.w3schools.com/tags/tag_doctype.asp</a></li>
<li><a href="https://id.wikipedia.org/wiki/Pranala">https://id.wikipedia.org/wiki/Pranala</a></li>
<li><a href="https://html.spec.whatwg.org/multipage/introduction.html#introduction">https://html.spec.whatwg.org/multipage/introduction.html#introduction</a></li>
<li><a href="https://github.com/jgthms/web-design-in-4-minutes">https://github.com/jgthms/web-design-in-4-minutes</a></li>
<li><a href="https://github.com/jgthms/marksheet">https://github.com/jgthms/marksheet</a>
<a href="https://www.internetingishard.com/">https://www.internetingishard.com/</a> <br>
<a href="https://github.com/Asabeneh/30-Days-Of-HTML">https://github.com/Asabeneh/30-Days-Of-HTML</a> <br>
<a href="https://www.w3schools.com/html/">https://www.w3schools.com/html/</a></li>
<li><a href="https://www.freecodecamp.org/news/the-css-display-property-display-none-display-table-inline-block-and-more/">https://www.freecodecamp.org/news/the-css-display-property-display-none-display-table-inline-block-and-more/</a> </li>
<li><a href="https://www.internetingishard.com/html-and-css/css-box-model/">https://www.internetingishard.com/html-and-css/css-box-model/</a></li>
<li><a href="https://www.internetingishard.com/html-and-css/">https://www.internetingishard.com/html-and-css/</a></li>
<li><a href="https://bigshans.github.io/post/css-box/">https://bigshans.github.io/post/css-box/</a> [ css box model ]asic, sample markdown.</li>
</ul>
<h2 id="second-heading">Second Heading</h2>
<ul>
<li>Unordered lists, and:<ol>
<li>One</li>
<li>Two</li>
<li>Three</li>
</ol>
</li>
<li>More</li>
</ul>
<blockquote>
<p>Blockquote</p>
</blockquote>
<p>And <strong>bold</strong>, <em>italics</em>, and even <em>italics and later <strong>bold</strong></em>. Even <del>strikethrough</del>. <a href="https://markdowntohtml.com">A link</a> to somewhere.</p>
<p>And code highlighting:</p>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-string">'bar'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">baz</span><span class="hljs-params">(s)</span> </span>{
   <span class="hljs-keyword">return</span> foo + <span class="hljs-string">':'</span> + s;
}
</code></pre>
<p>Or inline code like <code>var foo = &#39;bar&#39;;</code>.</p>
<p>Or an image of bears</p>
<p><img src="http://placebear.com/200/200" alt="bears"></p>
<p>The end ...</p>

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