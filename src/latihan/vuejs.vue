<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="membuat-komponent-kuis-tanya-jawab">Membuat Komponent Kuis tanya jawab</h1>
<p>Pembuatan komponen kuis akan menggunaakan VUE JS</p>
<p>Hasil akhir akan seperti ini:
<img src="https://github.com/playmakermz/warkop-website/blob/main/document/latihan-bahasa/image.png" alt="alt text"></p>
<h2 id="tahapan-pengerjaan">Tahapan pengerjaan</h2>
&lt;ol&gt;
&lt;li&gt;Menyiapkan wadah komponent dasar
```html
&lt;script setup&gt;
// ======================================== Script area start =======================================================&lt;/li&gt;
&lt;/ol&gt;
<p>// ======================================== Script area End =======================================================
</p>&lt;/script&gt;
<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->




<!-- biarkan code dibawah ini -->
<nav>
    <RouterLink to="/">Go to Home</RouterLink>
</nav>
<!-- 000000000000000000000000000000000000000000000000000000 Template area end  000000000000000000000000000000000000000000 -->
</template>






&lt;style scoped&gt;

<p>/<em> ============================================== Style area start ======================================= </em>/</p>
&lt;p&gt;/<em> ============================================== Style area end ======================================= </em>/
&lt;/style&gt;&lt;/p&gt;
<pre><code>
<span class="hljs-number">2</span>. 
Import Package pendukung

`import { ref } <span class="hljs-keyword">from</span> 'vue'`

<span class="hljs-number">3</span>. Buat State sebagai representasi dari setiap jawaban yang ada

Semisal disini ada dua jawaban dari soal kita, maka harus ada dua <span class="hljs-keyword">state</span> boolean jawaban.

```javascript

const kuisTr = ref(false) // adalah <span class="hljs-keyword">state</span> note True | Tr(True) | Penempatan: Jawaban Atas(True)
const kuisFl = ref(false) // adalah <span class="hljs-keyword">state</span> note false | Fl(False) | Penempatan: Jawaban bawah(False)
</code></pre><ol>
<li>Siapkan fungsi onclick</li>
</ol>
<p>dimana disaat button di tekan oleh user, maka function akan  dijalankan. Fungsi disini adalah untuk membalikan nilai boolean</p>
<pre><code class="lang-r"><span class="hljs-comment">// Menimpa nilai awal menjadi nilai baru</span>
function SkuisTr(){ <span class="hljs-comment">// Ini untuk buka catatan kuis True | Skuis(Soal kuis)</span>
  kuisTr<span class="hljs-selector-class">.value</span> = !kuisTr<span class="hljs-selector-class">.value</span>
  kuisFl<span class="hljs-selector-class">.value</span> = false
}

<span class="hljs-comment">// Menimpa nilai awal menjadi nilai baru</span>
function SkuisFl(){ <span class="hljs-comment">// Ini untuk buka catatan kuis False</span>
  kuisFl<span class="hljs-selector-class">.value</span> = !kuisFl<span class="hljs-selector-class">.value</span>
  kuisTr<span class="hljs-selector-class">.value</span> = false
}
</code></pre>
<ol>
<li>Menyiapkan component html kecil yang siap dipakai</li>
</ol>
<p>dimana component ini akan kita panggil jika fungsi button di tekan</p>
<pre><code>let JawA = ref(`<span class="javascript">
&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">""</span>&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>HTTPS<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span></span>
&lt;p&gt;HTTPS memiliki cara kerja yang hampir sama dengan HTTP, perbedaan adalah disana terdapat enkripsi TLS ( Transport Layer Security )tambah untuk meningkatkan keamanan jaringan. Penambahan kemanan salah satunnya berada di sisi server
  &lt;<span class="hljs-regexp">/p&gt;
&lt;/</span>div&gt;
</span>`) <span class="hljs-regexp">//</span> JawA(Jawaban A)

const JawB = ref(`<span class="javascript">
  &lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"alert"</span>&gt;
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Contoh HTML<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span></span>
    &lt;p&gt;Ini HTML dari script setup!<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
  &lt;<span class="hljs-regexp">/div&gt;
</span></span>`);<span class="hljs-regexp">//</span> JawaB(Jawaban B)
</code></pre><ol>
<li>Pada bagian &quot;template&quot; persiapkan soal</li>
</ol>
<p>contoh:</p>
<pre><code class="lang-html">
<span class="hljs-params">&lt;h1&gt;</span>Exercise<span class="hljs-params">&lt;/h1&gt;</span>

<span class="hljs-params">&lt;p&gt;</span>Soal: <span class="hljs-params">&lt;/p&gt;</span>
<span class="hljs-params">&lt;p&gt;</span>Protokol jaringan apa yang digunakan oleh <span class="hljs-string">"FPC(Free Programming Course)"</span>?<span class="hljs-params">&lt;/p&gt;</span>
</code></pre>
<ol>
<li>Persiapkan jawaban pilihan ganda</li>
</ol>
<pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">lu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"SkuisTr"</span>&gt;</span>SSH<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"SkuisFl"</span>&gt;</span>HTTPS<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">lu</span>&gt;</span>
</code></pre>
<ol>
<li>Gunakan state boolean tadi sebagai fondasi dalam mebuat &quot;Note&quot; penjelasan atas pilihan ganda yang dia pilih</li>
</ol>
<pre><code class="lang-html">&lt;<span class="hljs-keyword">div</span> v-<span class="hljs-keyword">if</span>=<span class="hljs-string">"kuisTr"</span>&gt;
  &lt;<span class="hljs-keyword">div</span> v-html=<span class="hljs-string">"JawA"</span>&gt;&lt;/<span class="hljs-keyword">div</span>&gt;
&lt;/<span class="hljs-keyword">div</span>&gt;

&lt;<span class="hljs-keyword">div</span> v-<span class="hljs-keyword">if</span>=<span class="hljs-string">"kuisFl"</span>&gt;
  &lt;<span class="hljs-keyword">div</span> v-html=<span class="hljs-string">"JawB"</span>&gt;&lt;/<span class="hljs-keyword">div</span>&gt;
&lt;/<span class="hljs-keyword">div</span>&gt;
</code></pre>
<ol>
<li>selesai. Dibawah ini adalah contoh hasil jadi komplit</li>
</ol>
<pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>

<span class="hljs-keyword">const</span> kuisTr = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// adalah state note True | Tr(True) | Penempatan: Jawaban Atas(True)</span>
<span class="hljs-keyword">const</span> kuisFl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// adalah state note false | Fl(False) | Penempatan: Jawaban bawah(False)</span>

<span class="hljs-comment">// Menimpa nilai awal menjadi nilai baru</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">SkuisTr</span>(<span class="hljs-params"></span>)</span>{ <span class="hljs-comment">// Ini untuk buka catatan kuis True | Skuis(Soal kuis)</span>
  kuisTr.value = !kuisTr.value
  kuisFl.value = <span class="hljs-literal">false</span>
}

<span class="hljs-comment">// Menimpa nilai awal menjadi nilai baru</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">SkuisFl</span>(<span class="hljs-params"></span>)</span>{ <span class="hljs-comment">// Ini untuk buka catatan kuis False</span>
  kuisFl.value = !kuisFl.value
  kuisTr.value = <span class="hljs-literal">false</span>
}


<span class="hljs-comment">// Membuat component kecil untuk HTML</span>


<span class="hljs-keyword">let</span> JawA = ref(<span class="hljs-string">`
&lt;div class=""&gt;
&lt;h3&gt;HTTPS&lt;/h3&gt;
&lt;p&gt;HTTPS memiliki cara kerja yang hampir sama dengan HTTP, perbedaan adalah disana terdapat enkripsi TLS ( Transport Layer Security )tambah untuk meningkatkan keamanan jaringan. Penambahan kemanan salah satunnya berada di sisi server
  &lt;/p&gt;
&lt;/div&gt;
`</span>) <span class="hljs-comment">// JawA(Jawaban A)</span>

<span class="hljs-keyword">const</span> JawB = ref(<span class="hljs-string">`
  &lt;div class="alert"&gt;
    &lt;h3&gt;Contoh HTML&lt;/h3&gt;
    &lt;p&gt;Ini HTML dari script setup!&lt;/p&gt;
  &lt;/div&gt;
`</span>);<span class="hljs-comment">// JawaB(Jawaban B)</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>



<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-comment">&lt;!-- ======================= Awal  dari Template ======================= --&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Exercise<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Soal: <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Protokol jaringan apa yang digunakan oleh "FPC(Free Programming Course)"?<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>



<span class="hljs-tag">&lt;<span class="hljs-name">lu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"SkuisTr"</span>&gt;</span>SSH<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"SkuisFl"</span>&gt;</span>HTTPS<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">lu</span>&gt;</span>


<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">"kuisTr"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">"JawA"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">"kuisFl"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">"JawB"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>



<span class="hljs-comment">&lt;!-- ======================= Akhir dari Template ======================= --&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>






<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">

<span class="hljs-selector-class">.read-the-docs</span> {

  <span class="hljs-attribute">color</span>: <span class="hljs-number">#888</span>;

}

</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
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