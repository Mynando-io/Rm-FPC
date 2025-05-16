<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="synchronous-dan-asynchronous">Synchronous dan Asynchronous</h1>
<p>Synchronous adalah proses dasar yang kita gunakan dalam pembuatan program dengan javascript. Yaitu dimana semua baris perintah akan dijalankan secara bergantian. </p>
<p>contoh sederhana adalah seperti ini </p>
<pre><code>console.<span class="hljs-built_in">log</span>(<span class="hljs-string">'a'</span>)
console.<span class="hljs-built_in">log</span>(<span class="hljs-string">'b'</span>)
</code></pre><p>Sedangkan <strong>Asynchronous</strong> adalah kebalikannya, yaitu dimana kita bisa menjalankan dua proses atau lebih secara bersamaan.</p>
<p>sebagai contoh code dengan mengunakan fungsi </p>
<pre><code>setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'hai'</span>)}, <span class="hljs-number">300</span>)
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'hai juga'</span>)

<span class="hljs-comment">// hai juga</span>
<span class="hljs-comment">// hai</span>
</code></pre><p>dimana pada code diatas, perintah baris kedua akan menghasilkan output, lalu dilanjutkan dengan perintah baris pertama.</p>
<p>proses tersebut dilakukan pada waktu yang sama.</p>
<hr>
<h2 id="promise">Promise</h2>
<p>Mari kita membuat perumpamaan sederhana.</p>
<p>terdapat suatu band musik yang memiliki banyak pengemar. para pengemar band musik tersebut setiap hari mengirim surat untuk ingin mendengarkan album baru band.</p>
<p>untuk meredakan antusiasme dari pengemar, perwakilan band memberikan formulir kepada para pengemar, yang dimana pada pada formulir tersebut pengemar bisa menuliskan alamat email, dan address mereka. Jika terdapat perkembangan kita bisa mendapatkan informasi dari mereka.</p>
<p>semisal album baru telah rilis, atau tertunda karena beberapa hal.</p>
<p>sekarang kita hubungkan dengan code: </p>
<ul>
<li>&quot;Producing code&quot; adalah band musik </li>
<li>&quot;Consuming code&quot; adalah pengemar </li>
<li>&quot;Promise&quot; adalah yang menghubungkan mereka semua</li>
</ul>
<p>selanjutnya terdapat dua fungsi dasar promise.</p>
<ul>
<li><code>resolve(value)</code> - jika proses sukses</li>
<li><code>reject(error)</code> - jika proses gagal</li>
</ul>
<p>detail identitas pada promise.</p>
<ul>
<li><p><code>state</code></p>
<ul>
<li>&quot;pending&quot; adalah default</li>
<li>&quot;fullfilled&quot; adalah karena resolve</li>
<li>&quot;rejected&quot; adalah karena reject </li>
</ul>
</li>
<li><p><code>result</code></p>
<ul>
<li>&quot;undefined&quot; adalah default </li>
<li>&quot;value&quot; adalah karena resolve </li>
<li>&quot;error&quot; adalah karena reject</li>
</ul>
</li>
</ul>
<h3 id="promise-code">Promise code</h3>
<p>perhitakian callback function berikut ini.</p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">tampilkan</span>(<span class="hljs-params">item</span>)</span>{
    <span class="hljs-built_in">console</span>.log(item)
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">math</span>(<span class="hljs-params">x,y</span>)</span>{
    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
        <span class="hljs-keyword">return</span> x ** y
}, <span class="hljs-number">1000</span>)
}

<span class="hljs-keyword">let</span> abc = math(<span class="hljs-number">1</span>,<span class="hljs-number">2</span>)
tampilkan(abc)
</code></pre><p>Tidak ada error, tetapi kita tidak juga mendapatkan output yang diharapkan. </p>
<p>karena function <code>tampilkan()</code>telah selesai melakukan proses terlebih dahulu sebelum proses dari <code>math()</code>. Mereka berjalan secara bersamaan.</p>
<p><strong>dengan mengunakan promise</strong> kita bisa menyelesaikan masalah tersebut. </p>
<pre><code>function tampilkan(data) {
    <span class="hljs-built_in">console</span>.log(data)
}

function proses(a,b){
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> Promise(<span class="hljs-function"><span class="hljs-params">(resolve, reject)</span> =&gt;</span> {
        setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
            resolve(a + b)
        }, <span class="hljs-number">1000</span>)
    })
}

proses(<span class="hljs-number">1</span>,<span class="hljs-number">1</span>)

.<span class="hljs-keyword">then</span>(
        <span class="hljs-function"><span class="hljs-params">(result)</span> =&gt;</span> {<span class="hljs-built_in">console</span>.log(result)},
        <span class="hljs-function"><span class="hljs-params">(error)</span> =&gt;</span> {<span class="hljs-built_in">console</span>.log(error)}
    )
</code></pre><p><strong>atau ditulis seperti ini</strong></p>
<pre><code>function tampilkan(data) {
    <span class="hljs-built_in">console</span>.log(data)
}

function proses(a,b){
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> Promise(<span class="hljs-function"><span class="hljs-params">(resolve, reject)</span> =&gt;</span> {
        setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
            resolve(a + b)
        }, <span class="hljs-number">1000</span>)
    })
}


proses(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>).<span class="hljs-keyword">then</span>(
        <span class="hljs-function"><span class="hljs-params">(result)</span> =&gt;</span> {tampilkan(result)},
        <span class="hljs-function"><span class="hljs-params">(error)</span> =&gt;</span> {<span class="hljs-built_in">console</span>.log(error)}
    )
</code></pre><h2 id="promise-code-sukses-">promise code (sukses)</h2>
<pre><code>let promise = <span class="hljs-keyword">new</span> Promise(<span class="hljs-function"><span class="hljs-params">(resolve, reject)</span> =&gt;</span> {
    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> resolve(<span class="hljs-string">'its done'</span>), <span class="hljs-number">1000</span>)
})

promise.<span class="hljs-keyword">then</span>(
    <span class="hljs-function"><span class="hljs-params">(result)</span> =&gt;</span> {<span class="hljs-built_in">console</span>.log(result)}, <span class="hljs-regexp">//</span> Akan menghasilkan
    (error) =&gt; {<span class="hljs-built_in">console</span>.log(error)} <span class="hljs-regexp">//</span> tidak jalan
)
</code></pre><h2 id="promise-code-reject-">promise code (reject)</h2>
<pre><code><span class="hljs-keyword">let</span> promise = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> reject(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">'upss'</span>)) , <span class="hljs-number">1000</span>)
})

promise.then(
    <span class="hljs-function">(<span class="hljs-params">result</span>) =&gt;</span> {<span class="hljs-built_in">console</span>.log(result)}, <span class="hljs-comment">// </span>
    (error) =&gt; {<span class="hljs-built_in">console</span>.log(error)} <span class="hljs-comment">// akan jalan</span>
)
</code></pre><h2 id="finally">finally</h2>
<p>Finally tidak terpengaruh dengan hasil dari promise.</p>
<pre><code>let promise = <span class="hljs-keyword">new</span> Promise(<span class="hljs-function"><span class="hljs-params">(resolve, reject)</span> =&gt;</span> {
    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> reject(<span class="hljs-keyword">new</span> Error(<span class="hljs-string">'upss'</span>)) , <span class="hljs-number">1000</span>)
})

promise.<span class="hljs-keyword">finally</span>(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'saya hanya pemberitahuan, tidak terpengaruh dengan result atau error'</span>)})

promise.<span class="hljs-keyword">then</span>(
    <span class="hljs-function"><span class="hljs-params">(result)</span> =&gt;</span> {<span class="hljs-built_in">console</span>.log(result)}, <span class="hljs-regexp">//</span> Akan menghasilkan
    (error) =&gt; {<span class="hljs-built_in">console</span>.log(error)} <span class="hljs-regexp">//</span> tidak jalan
)
</code></pre><h2 id="contoh-code-promise">Contoh code Promise</h2>
<pre><code><span class="hljs-keyword">let</span> promise = loadScript(<span class="hljs-string">"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"</span>);

promise.then(
  <span class="hljs-function"><span class="hljs-params">script</span> =&gt;</span> alert(<span class="hljs-string">`<span class="hljs-subst">${script.src}</span> is loaded!`</span>),
  error =&gt; alert(<span class="hljs-string">`Error: <span class="hljs-subst">${error.message}</span>`</span>)
);

promise.then(<span class="hljs-function"><span class="hljs-params">script</span> =&gt;</span> alert(<span class="hljs-string">'Another handler...'</span>));
</code></pre><p>ref: <a href="https://javascript.info/promise-basics">https://javascript.info/promise-basics</a></p>
<p><strong>contoh lainnya:</strong></p>
<p><a href="../../code/asyc.js">Asyc code</a>
<a href="../../code/jsPro/classPromise.js">class and Promise</a></p>
<h3 id="reference">Reference</h3>
<ul>
<li><a href="https://javascript.info/promise-basics">https://javascript.info/promise-basics</a></li>
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