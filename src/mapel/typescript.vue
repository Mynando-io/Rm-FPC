<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="typescript">Typescript</h1>
<h2 id="instalasi">Instalasi</h2>
<pre><code class="lang-Sh">npm install -g ts-<span class="hljs-keyword">node</span>

<span class="hljs-title">ts-node</span> <span class="hljs-tag">&lt;file-name&gt;</span>

// Setelah itu, pastikan pada file <span class="hljs-string">"package.json"</span> kita tidak menggunakan <span class="hljs-string">"module"</span> import.
</code></pre>
<p>Ref: </p>
<ul>
<li><a href="https://www.geeksforgeeks.org/how-to-execute-typescript-file-using-command-line/">https://www.geeksforgeeks.org/how-to-execute-typescript-file-using-command-line/</a> | Instalasi </li>
<li><a href="https://www.digitalocean.com/community/tutorials/typescript-running-typescript-ts-node">https://www.digitalocean.com/community/tutorials/typescript-running-typescript-ts-node</a> | Instalasi dan contoh </li>
<li><a href="https://stackoverflow.com/questions/62096269/cant-run-my-node-js-typescript-project-typeerror-err-unknown-file-extension">https://stackoverflow.com/questions/62096269/cant-run-my-node-js-typescript-project-typeerror-err-unknown-file-extension</a> | informasi jika error. </li>
</ul>
<h2 id="typescript-memperkuat-javascript-dengan-tipe-data">TypeScript: Memperkuat JavaScript dengan Tipe Data</h2>
<p>Di era modern, pengembangan web telah menjadi semakin kompleks. Aplikasi web modern membutuhkan fungsionalitas yang lebih canggih dan basis kode yang lebih besar. Hal ini dapat menyebabkan berbagai masalah, seperti bug dan inkonsistensi kode.</p>
<p>TypeScript hadir sebagai solusi untuk mengatasi masalah tersebut. TypeScript adalah superset dari JavaScript yang menambahkan sistem tipe data statis. Sistem tipe data ini memungkinkan pengembang untuk mendefinisikan tipe data untuk variabel, fungsi, dan parameter. Hal ini membantu meningkatkan keandalan dan kemudahan pemeliharaan kode JavaScript.</p>
<p><strong>Keuntungan Menggunakan TypeScript:</strong></p>
<ul>
<li><strong>Meningkatkan Keamanan Kode:</strong> TypeScript membantu mencegah bug dengan mendeteksi kesalahan tipe data pada saat kompilasi. Hal ini membantu pengembang untuk menemukan dan memperbaiki bug lebih awal dalam proses pengembangan, sehingga menghemat waktu dan tenaga.</li>
<li><strong>Mempermudah Pemahaman Kode:</strong> Sistem tipe data TypeScript membuat kode JavaScript lebih mudah dipahami dan dibaca. Hal ini membantu pengembang lain untuk memahami maksud dari kode dan meningkatkan kolaborasi dalam proyek pengembangan.</li>
<li><strong>Meningkatkan Refactoring Kode:</strong> TypeScript membantu pengembang untuk melakukan refactoring kode dengan lebih aman. Sistem tipe data memastikan bahwa perubahan yang dilakukan pada kode tidak menyebabkan bug yang tidak terduga.</li>
<li><strong>Mempercepat Pengembangan:</strong> TypeScript dapat membantu mempercepat pengembangan dengan menyediakan fitur autocompletion dan IntelliSense. Fitur-fitur ini membantu pengembang untuk menulis kode dengan lebih cepat dan efisien.</li>
</ul>
<p><strong>Contoh Penggunaan TypeScript:</strong></p>
<p>Berikut adalah contoh bagaimana TypeScript dapat digunakan untuk mendefinisikan tipe data untuk variabel, fungsi, dan parameter:</p>
<pre><code class="lang-typescript">// Mendefinisikan variabel dengan tipe string
let <span class="hljs-keyword">name</span>: string = <span class="hljs-string">"John Doe"</span>;

// Mendefinisikan fungsi dengan <span class="hljs-keyword">parameter</span> bertipe <span class="hljs-keyword">number</span> dan mengembalikan nilai bertipe <span class="hljs-keyword">number</span>
<span class="hljs-function"><span class="hljs-keyword">function</span></span> add(a: <span class="hljs-keyword">number</span>, b: <span class="hljs-keyword">number</span>): <span class="hljs-keyword">number</span> {
  <span class="hljs-keyword">return</span> a + b;
}

// Memanggil fungsi dengan argumen bertipe <span class="hljs-keyword">number</span>
let <span class="hljs-built_in">sum</span> = add(<span class="hljs-number">10</span>, <span class="hljs-number">20</span>);
console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">sum</span>); // Output: <span class="hljs-number">30</span>
</code></pre>
<p><strong>Belajar TypeScript:</strong></p>
<p>TypeScript adalah bahasa pemrograman yang mudah dipelajari bagi para pengembang JavaScript. Banyak sumber daya yang tersedia untuk membantu pengembang mempelajari TypeScript, termasuk:</p>
<ul>
<li><a href="https://www.typescriptlang.org/docs/handbook/intro.html">Dokumentasi Resmi TypeScript</a></li>
<li><a href="https://www.typescriptlang.org/play">Tutorial Interaktif TypeScript</a></li>
<li>Kursus Online TypeScript [URL yang tidak valid dihapus]</li>
</ul>
<p><strong>Kesimpulan:</strong></p>
<p>TypeScript adalah alat yang berharga bagi para pengembang JavaScript yang ingin meningkatkan kualitas dan keandalan kode mereka. Dengan sistem tipe data statisnya, TypeScript membantu mencegah bug, meningkatkan pemahaman kode, mempermudah refactoring kode, dan mempercepat pengembangan. Jika Anda ingin meningkatkan skill pengembangan web Anda, mempelajari TypeScript adalah langkah yang tepat.</p>
<hr>
<h1 id="typescript-fundamental">TypeScript Fundamental</h1>
<hr>
<pre><code class="lang-JavaScript">
<span class="hljs-keyword">let</span> name: <span class="hljs-built_in">string</span> = <span class="hljs-string">"udin"</span>
<span class="hljs-keyword">let</span> age: <span class="hljs-built_in">number</span> = <span class="hljs-number">10</span> 
<span class="hljs-keyword">let</span> isReady: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">true</span> 
<span class="hljs-keyword">let</span> x: <span class="hljs-literal">null</span> = <span class="hljs-literal">null</span> 
<span class="hljs-keyword">let</span> array1: <span class="hljs-built_in">number</span>[] = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>]
<span class="hljs-keyword">let</span> array2: <span class="hljs-built_in">string</span>[] = [<span class="hljs-string">"udin"</span>]
<span class="hljs-keyword">let</span> array3: <span class="hljs-built_in">boolean</span>[] = [<span class="hljs-literal">true</span>, <span class="hljs-literal">false</span>]
<span class="hljs-keyword">let</span> namaku: <span class="hljs-literal">undefined</span> | <span class="hljs-built_in">string</span> = <span class="hljs-string">"udin"</span> <span class="hljs-comment">// Bisa dua tipe data yang masuk</span>

<span class="hljs-keyword">let</span> abc: object = {name:<span class="hljs-string">'udin'</span>,age:<span class="hljs-number">22</span>}
<span class="hljs-keyword">let</span> acc: {name: <span class="hljs-built_in">string</span>, age: <span class="hljs-built_in">number</span>} = {name: <span class="hljs-string">'fatoni'</span>, age: <span class="hljs-number">22</span>}

<span class="hljs-comment">// =============== TS </span>

<span class="hljs-keyword">const</span> hello = (name: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">string</span> =&gt; {
  <span class="hljs-keyword">return</span> <span class="hljs-string">`Hello <span class="hljs-subst">${name}</span>`</span>
}


<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mat</span>(<span class="hljs-params">item: <span class="hljs-built_in">number</span></span>): <span class="hljs-title">number</span> </span>{
  <span class="hljs-keyword">return</span> item + <span class="hljs-number">1</span>;
}

<span class="hljs-comment">// ====================== Eliminate parameter</span>

<span class="hljs-keyword">const</span> findLocationInJakarta = (
  location: <span class="hljs-string">'Utara'</span> | <span class="hljs-string">'Timur'</span> | <span class="hljs-string">'Selatan'</span> | <span class="hljs-string">'Barat'</span>,
): <span class="hljs-built_in">string</span> =&gt; {
  <span class="hljs-keyword">return</span> <span class="hljs-string">`Jakarta <span class="hljs-subst">${location}</span>`</span>
}

findLocationInJakarta(<span class="hljs-string">'Utara'</span>)

findLocationInJakarta(<span class="hljs-string">'Selatan'</span>)

findLocationInJakarta(<span class="hljs-string">'udin'</span>) <span class="hljs-comment">// Error</span>
</code></pre>
<h2 id="if-statement">if statement</h2>
<p>Percabangan </p>
<pre><code class="lang-Js">
<span class="hljs-comment">// Contoh If statement </span>
<span class="hljs-keyword">let</span> <span class="hljs-built_in">data</span>: <span class="hljs-built_in">string</span> | number = <span class="hljs-string">"Hello"</span>;
<span class="hljs-keyword">if</span> (typeof <span class="hljs-built_in">data</span> === <span class="hljs-string">"string"</span>) {
  console.<span class="hljs-keyword">log</span>(<span class="hljs-built_in">data</span>.toUpperCase()); <span class="hljs-comment">// Mengubah huruf kecil ke besar</span>
}
</code></pre>
<h2 id="array">Array</h2>
<pre><code class="lang-js">// Array number
let angka: number[] = [1, 2, 3];
let names: Array&lt;string&gt; = [<span class="hljs-string">"Alice"</span>, <span class="hljs-string">"Bob"</span>];

//<span class="hljs-built_in"> array </span>dibawah ini, tipe datanya tetap
let tuple: [string, number] = [<span class="hljs-string">"Age"</span>, 25];

// Readonly<span class="hljs-built_in"> array
</span>const readOnlyArr: readonly number[] = [1, 2, 3];
</code></pre>
<h2 id="loop">Loop</h2>
<p>Untuk loop sederhana seperti dibawah, tidak ada configurasi tambahan dari typescript.</p>
<pre><code class="lang-js">// Default <span class="hljs-keyword">for</span> loop
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">5</span>; i++) {
  console.log(i);
}

// For loop yang akan mengambil <span class="hljs-keyword">value</span> <span class="hljs-literal">item</span> pada <span class="hljs-keyword">array</span> <span class="hljs-string">'angka'</span>
<span class="hljs-keyword">for</span> (const num <span class="hljs-keyword">of</span> angka) {
  console.log(num * <span class="hljs-number">2</span>); // num otomatis number
}

// <span class="hljs-keyword">for</span> loop yang akan mengambil nomor index sebagai <span class="hljs-keyword">value</span> mereka.
<span class="hljs-keyword">for</span> (const index <span class="hljs-keyword">in</span> angka) {
  console.log(index); // string: <span class="hljs-string">"0"</span>, <span class="hljs-string">"1"</span>, <span class="hljs-string">"2"</span>
}
</code></pre>
<h2 id="function">Function</h2>
<pre><code class="lang-js"><span class="hljs-comment">// Fungsi dasar</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params">a: number, b: number</span>): <span class="hljs-title">number</span> </span>{
  <span class="hljs-keyword">return</span> a + b;
}

<span class="hljs-comment">// Arrow function</span>
<span class="hljs-keyword">const</span> multiply = (x: number, <span class="hljs-attr">y</span>: number): <span class="hljs-function"><span class="hljs-params">number</span> =&gt;</span> x * y;

<span class="hljs-comment">// Parameter opsional</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">greet</span>(<span class="hljs-params">name: string, age?: number</span>): <span class="hljs-title">void</span> </span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Hello <span class="hljs-subst">${name}</span><span class="hljs-subst">${age ? <span class="hljs-string">` (<span class="hljs-subst">${age}</span>)`</span> : <span class="hljs-string">''</span>}</span>`</span>);
}

<span class="hljs-comment">// Function overloading</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">padLeft</span>(<span class="hljs-params">value: string, padding: number | string</span>): <span class="hljs-title">string</span> </span>{
  <span class="hljs-comment">// Implementasi</span>
}
</code></pre>
<h2 id="class">Class</h2>
<pre><code class="lang-js"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Animal</span> </span>{
  <span class="hljs-comment">// Menjabarkan tipe data untuk setiap parameter yang ada</span>
  <span class="hljs-keyword">constructor</span>(public name: string, private age: number) {}

  <span class="hljs-comment">// Method</span>
  speak(): <span class="hljs-keyword">void</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`<span class="hljs-subst">${<span class="hljs-keyword">this</span>.name}</span> makes a noise`</span>);
  }
}

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Dog</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Animal</span> </span>{
  <span class="hljs-keyword">constructor</span>(name: string, age: number, public breed: string) {
    <span class="hljs-keyword">super</span>(name, age);
  }

  <span class="hljs-comment">// Override method</span>
  speak(): <span class="hljs-keyword">void</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Woof!"</span>);
  }
}

<span class="hljs-comment">// Penggunaan</span>
<span class="hljs-keyword">const</span> myDog = <span class="hljs-keyword">new</span> Dog(<span class="hljs-string">"Rex"</span>, <span class="hljs-number">3</span>, <span class="hljs-string">"Husky"</span>);
myDog.speak(); <span class="hljs-comment">// "Woof!"</span>
</code></pre>
<p>Note:</p>
<ul>
<li>Mengenai parameter private, sederhananya parameter terssebut hanya bisa diakses dialam code class saja, oject instance yang tercipta tidak termasuk.</li>
</ul>
<p>contohnya begini:</p>
<pre><code class="lang-js">console.<span class="hljs-built_in">log</span>(myDog.<span class="hljs-built_in">name</span>) <span class="hljs-comment">// Rex</span>
console.<span class="hljs-built_in">log</span>(myDog.age) <span class="hljs-comment">// Error javascript!</span>
</code></pre>
<h2 id="reference">Reference</h2>
<ul>
<li><a href="https://www.typescriptlang.org/">https://www.typescriptlang.org/</a></li>
<li><a href="https://js2ts.com/">https://js2ts.com/</a> | Convert Js to Ts</li>
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