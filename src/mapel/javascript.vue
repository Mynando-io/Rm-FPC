<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="sample-markdown">Sample Markdown</h1>
<h1 id="javascript">Javascript</h1>
<h2 id="table-of-content">Table of content</h2>
<ul>
<li><a href="#01">comment</a></li>
<li><a href="#02">Variabel</a></li>
<li><a href="#03">if statement</a></li>
<li><a href="#04">Menambahkan variabel ke template string</a></li>
<li><a href="#05">loops and iteration</a></li>
<li><a href="#06">do..while</a></li>
<li><a href="#07">while statement</a></li>
<li><a href="#08">Labeled statement</a></li>
<li><a href="#09">Conver a string to into number</a></li>
<li><a href="#10">function</a></li>
<li><a href="#11">parameters</a></li>
<li><a href="#12">return value</a></li>
<li><a href="#13">get the last element in array</a></li>
<li><a href="#14">function expression</a></li>
<li><a href="#15">function arrow</a></li>
<li><a href="#16">callback function</a></li>
<li><a href="#17">rest parameters</a></li>
<li><a href="#18">object notation</a></li>
<li><a href="#19">class syntax</a></li>
<li><a href="#20">what is a class</a></li>
<li><a href="#21">class expression</a></li>
<li><a href="#22">Getters / stters</a></li>
<li><a href="#23">computed names</a></li>
<li><a href="#24">class fields</a></li>
<li><a href="#25">class inheritance</a></li>
<li><a href="#26">inheritance</a></li>
<li><a href="#27">encapsulation programming</a></li>
<li><a href="#28">For each</a></li>
<li><a href="#29">Array find</a></li>
<li><a href="#30">filter</a></li>
<li><a href="#31">map</a></li>
<li><a href="#32">exports and require</a></li>
<li><a href="#33">Module exports</a></li>
</ul>
<p>file format untuk javascript adalah .js, 
Untuk menjalankan javascript bisa menggunakan:</p>
<ol>
<li>web browser console </li>
<li>Terminal linux ( dengan menggunakan &#39;node&#39; application)</li>
</ol>
<p>“ECMAScript is a standard.”</p>
<p>“JavaScript is a standard.”</p>
<p>“ECMAScript is a specification.”</p>
<p>“JavaScript is an implementation of the ECMAScript standard.”</p>
<p>“ECMAScript is standardized JavaScript.”</p>
<p>“ECMAScript is a language.”</p>
<p>“JavaScript is a dialect of ECMAScript.”</p>
<p>“ECMAScript is JavaScript.”</p>
<p>JavaScript engines are commonly found in web browsers, including V8 in Chrome, SpiderMonkey in Firefox, and Chakra in Edge. Each engine is like a language module for its application, allowing it to support a certain subset of the JavaScript language.</p>
<p>source: <a href="https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/">https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/</a></p>
<h2 id="paradigma-programming">Paradigma programming</h2>
<p>Ada beberapa paradigma pemrograman yang berbeda, masing-masing memiliki ciri khas dan cara pandang yang berbeda dalam mengatasi masalah. Berikut adalah beberapa paradigma pemrograman yang umum:</p>
<p>Paradigma Pemrograman Prosedural: pendekatan yang fokus pada urutan instruksi yang dilakukan pada data.</p>
<p>Paradigma Pemrograman Fungsional: pendekatan yang lebih fokus pada fungsi, atau bagaimana data dimanipulasi dan diproses dalam program.</p>
<p>Paradigma Pemrograman Berorientasi Objek: pendekatan yang mengorganisir program dalam objek yang terdiri dari data dan metode yang dapat memanipulasi data tersebut.</p>
<h2 id="comment">Comment</h2>
<h3 id="01">01</h3>
<p>Penulisan komentar pada Javascript </p>
<pre><code><span class="hljs-comment">// Menulis komentar satu baris </span>
<span class="hljs-comment">/*
Penulisan komentar yang terkelompok,
bisa dua baris ataupun lebih 
*/</span>
</code></pre><h2 id="variabel">Variabel</h2>
<h3 id="02">02</h3>
<p>Varibel adalan sebuah fungsi untuk menyimpan data.
Beberapa cara declarasi variabel </p>
<pre><code><span class="hljs-attr">var_a</span> = <span class="hljs-number">10</span>
<span class="hljs-keyword">let</span> <span class="hljs-attr">var_b</span> = <span class="hljs-number">10</span>
const <span class="hljs-attr">var_c</span> = <span class="hljs-number">10</span>
</code></pre><pre><code><span class="hljs-keyword">let</span> <span class="hljs-attr">user</span> = <span class="hljs-string">"Budi"</span>,
    <span class="hljs-attr">umur</span> = <span class="hljs-number">25</span>
</code></pre><p>Tidak boleh melakukan declarasi 2 kali dalam satu ruang</p>
<pre><code><span class="hljs-keyword">let</span> <span class="hljs-attr">user</span>  = <span class="hljs-string">"budi"</span>

<span class="hljs-keyword">let</span> <span class="hljs-attr">user</span> = <span class="hljs-string">"bambang"</span>

// akan muncul SyntaxError
</code></pre><p>Didalam penamaan variabel, tidak boleh ada angka dipaling depan variabel </p>
<pre><code><span class="hljs-keyword">let</span> <span class="hljs-number">01</span>halo = <span class="hljs-string">"text"</span>

<span class="hljs-comment">// akan ada error</span>
</code></pre><p>Refrence: <a href="https://javascript.info/variables">https://javascript.info/variables</a></p>
<h2 id="if-statement">If statement</h2>
<h3 id="03">03</h3>
<p>Dengan if statement kita bisa membuat instruksi yang akan dijalanakan jika persyaratan sudah terpenuhi</p>
<pre><code>let <span class="hljs-built_in">year</span> = <span class="hljs-number">2022</span>
<span class="hljs-keyword">if</span> (<span class="hljs-built_in">year</span> == <span class="hljs-number">2022</span>) console.<span class="hljs-built_in">log</span>(<span class="hljs-string">"tahun 2022"</span>)
<span class="hljs-comment">// Output tahun 2022</span>
</code></pre><pre><code>let <span class="hljs-built_in">year</span> = <span class="hljs-number">2022</span> 
<span class="hljs-keyword">if</span> (<span class="hljs-built_in">year</span> == <span class="hljs-number">2022</span>) {
    console.<span class="hljs-built_in">log</span>(<span class="hljs-string">"tahun 2022 "</span>)
}

<span class="hljs-comment">// output</span>
<span class="hljs-comment">// tahun 2022</span>
</code></pre><pre><code><span class="hljs-keyword">let</span> var_a = <span class="hljs-number">10</span> 

<span class="hljs-keyword">if</span> (var_a == <span class="hljs-number">10</span>){
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'10'</span>)
} <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (var_a &gt; <span class="hljs-number">10</span>) {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'11'</span>)
} <span class="hljs-keyword">else</span> {
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'9'</span>)
}
</code></pre><h3 id="inline-if-statement-conditional-operator-">Inline if statement(Conditional operator)</h3>
<pre><code><span class="hljs-keyword">let</span> <span class="hljs-attr">var_a</span> = (<span class="hljs-number">2022</span>)

<span class="hljs-keyword">let</span> <span class="hljs-attr">year</span> = ( <span class="hljs-attr">var_a</span> == <span class="hljs-number">2022</span> ) ? <span class="hljs-string">"sekarang tahun 2022"</span> : <span class="hljs-string">"sekarang bukan 2022"</span>

// <span class="hljs-literal">true</span> : <span class="hljs-literal">false</span> 
// sekarang tahun <span class="hljs-number">2022</span>
</code></pre><pre><code><span class="hljs-keyword">let</span> age = <span class="hljs-number">18</span>;

<span class="hljs-keyword">let</span> message = (age &lt; <span class="hljs-number">3</span>) ? <span class="hljs-string">'Hi, baby!'</span> :
  (age &lt; <span class="hljs-number">18</span>) ? <span class="hljs-string">'Hello!'</span> :
  (age &lt; <span class="hljs-number">100</span>) ? <span class="hljs-string">'Greetings!'</span> :
  <span class="hljs-string">'What an unusual age!'</span>;

<span class="hljs-built_in">console</span>.log(message)
<span class="hljs-comment">// Greetings!</span>
</code></pre><p>SOurce: <a href="https://javascript.info/ifelse">https://javascript.info/ifelse</a></p>
<h2 id="menambahkan-variabel-kedalam-string-template-litteral-">Menambahkan variabel kedalam string (Template litteral)</h2>
<h3 id="04">04</h3>
<pre><code><span class="hljs-keyword">let</span> budi = <span class="hljs-string">"nama siswa"</span>
<span class="hljs-keyword">let</span> var_a = `halo ${budi}`
</code></pre><p>src: <a href="https://www.freecodecamp.org/news/javascript-switch-case-js-switch-statement-example/">https://www.freecodecamp.org/news/javascript-switch-case-js-switch-statement-example/</a>
(case statement)</p>
<h2 id="loops-and-iteration">Loops and iteration</h2>
<h3 id="05">05</h3>
<p>Loop dapat membuat sebuah instruksi yang berulang.</p>
<pre><code><span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> langkah = <span class="hljs-number">0</span>; langkah &lt; <span class="hljs-number">5</span>; langkah++){
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'berjalan satu langkah'</span>)
}
</code></pre><h4 id="for-structure">For structure</h4>
<pre><code>for (<span class="hljs-string">[initialExpression]</span>; <span class="hljs-string">[conditionExpression]</span>; <span class="hljs-string">[incrementExpression]</span>)
  statement
</code></pre><ol>
<li>&quot;initialExpression&quot; biasannya sebagai loop counter (jumlah loop)</li>
<li>&quot;conditionExpression&quot; adalah requirement dalam if statement ( jika memenuhi persyaratan maka akan dijalanakan )</li>
<li>&quot;statement&quot; <code>{...}</code></li>
<li>Setelah dijalankan instruksi selanjutnya. dilakukan increment pada literal</li>
<li>kembali ke step conditionExpression</li>
</ol>
<h2 id="do-while">do...while</h2>
<h3 id="06">06</h3>
<pre><code><span class="hljs-keyword">do</span> {<span class="hljs-keyword">statement</span>}
<span class="hljs-keyword">while</span> (condition);
</code></pre><p>Jika condition itu &quot;true&quot; maka statement akan terus dijalankan.</p>
<p>sebagai contoh</p>
<pre><code><span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>;
<span class="hljs-keyword">do</span> {
  i += <span class="hljs-number">1</span>;
  console.<span class="hljs-built_in">log</span>(i);
} <span class="hljs-keyword">while</span> (i &lt; <span class="hljs-number">5</span>);
</code></pre><h2 id="while-statement">While statement</h2>
<h3 id="07">07</h3>
<pre><code><span class="hljs-keyword">while</span> (<span class="hljs-keyword">condition</span>)
{statement}
</code></pre><pre><code>let <span class="hljs-built_in">n</span> = <span class="hljs-number">0</span>;
let x = <span class="hljs-number">0</span>;
while (<span class="hljs-built_in">n</span> &lt; <span class="hljs-number">3</span>) {
  <span class="hljs-built_in">n</span>++;
  x += <span class="hljs-built_in">n</span>;
}
</code></pre><pre><code><span class="hljs-keyword">let</span> main = <span class="hljs-literal">true</span>
<span class="hljs-keyword">let</span> <span class="hljs-keyword">value</span> = <span class="hljs-number">0</span>
<span class="hljs-keyword">while</span> (main) {
  <span class="hljs-keyword">value</span> += <span class="hljs-number">1</span>
  <span class="hljs-keyword">if</span> (<span class="hljs-keyword">value</span> == <span class="hljs-number">5</span>){
    console.log(<span class="hljs-string">'end'</span>)
    main = <span class="hljs-literal">false</span>}
}
</code></pre><h2 id="labeled-statement">Labeled statement</h2>
<h3 id="08">08</h3>
<p>dengan labeled statement kita bisa menutup loop kita tuju dengan lebih spesifik.</p>
<p>tidak harus menggunakan &quot;break&quot;, kita juga bisa gunakan &quot;continue&quot; untuk restart loop dari awal lagi </p>
<p>contoh:</p>
<pre><code><span class="hljs-keyword">let</span> x = <span class="hljs-number">0</span>;
<span class="hljs-keyword">let</span> z = <span class="hljs-number">0</span>;
labelCancelLoops: <span class="hljs-keyword">while</span> (<span class="hljs-literal">true</span>) {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Outer loops: '</span> + x);
  x += <span class="hljs-number">1</span>;
  z = <span class="hljs-number">1</span>;
  <span class="hljs-keyword">while</span> (<span class="hljs-literal">true</span>) {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Inner loops: '</span> + z);
    z += <span class="hljs-number">1</span>;
    <span class="hljs-keyword">if</span> (z === <span class="hljs-number">10</span> &amp;&amp; x === <span class="hljs-number">10</span>) {
      <span class="hljs-keyword">break</span> labelCancelLoops;
    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (z === <span class="hljs-number">10</span>) {
      <span class="hljs-keyword">break</span>;
    }
  }
}
</code></pre><h2 id="for-in">For in</h2>
<pre><code><span class="hljs-keyword">let</span> makanan = [<span class="hljs-string">'nasi'</span>, <span class="hljs-string">'tahu'</span>, <span class="hljs-string">'tempe'</span>]

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i <span class="hljs-keyword">in</span> makanan ){
  <span class="hljs-built_in">console</span>.log(i)
}

<span class="hljs-comment">// 0 1 2</span>
</code></pre><h2 id="for-of">for of</h2>
<pre><code><span class="hljs-keyword">let</span> makanan = [<span class="hljs-string">'nasi'</span>, <span class="hljs-string">'tahu'</span>, <span class="hljs-string">'tempe'</span>]

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i <span class="hljs-keyword">of</span> makanan ){
  <span class="hljs-built_in">console</span>.log(i)
}

<span class="hljs-comment">// nasi tahu tempe</span>
</code></pre><p>source: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration?retiredLocale=id">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration?retiredLocale=id</a></p>
<h2 id="convert-a-string-to-number">Convert a string to number</h2>
<h3 id="09">09</h3>
<ol>
<li><code>parseInt()</code></li>
</ol>
<pre><code>myString = <span class="hljs-string">'140'</span>
<span class="hljs-comment">// 140 </span>

<span class="hljs-selector-tag">a</span> = <span class="hljs-number">34.22</span>
<span class="hljs-comment">// 34</span>
</code></pre><ol>
<li><code>Number()</code></li>
</ol>
<pre><code><span class="hljs-built_in">Number</span>(<span class="hljs-string">"10"</span>);          <span class="hljs-comment">// 10 </span>
<span class="hljs-built_in">Number</span>(<span class="hljs-string">" 10  "</span>);       <span class="hljs-comment">// 10</span>
<span class="hljs-built_in">Number</span>(<span class="hljs-string">"10.33"</span>);       <span class="hljs-comment">// 10.33</span>
</code></pre><p>src: <a href="https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l">https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l</a></p>
<h2 id="function-es5">Function  | ES5</h2>
<h3 id="10">10</h3>
<pre><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">namaFungsi</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'halo'</span>)
}
</code></pre><pre><code><span class="hljs-function"><span class="hljs-title">namaFungsi</span><span class="hljs-params">()</span></span>
</code></pre><p>Dengan menggunakan Function kita bisa menggunakan block code tersebut kapan saja </p>
<p><strong>Local variabel</strong></p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myFunction</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">let</span> var_a = <span class="hljs-string">"hello"</span>
}
</code></pre><p><strong>catatan tambahan function</strong> </p>
<p>Ekspression function dan function biasa telah ada dari versi &#39;ES5&#39;, function versi &#39;ES6&#39; adalah penambahan arrow function. </p>
<p>Pada node js, mereka akan mengutamakan function, oleh karena itu jika kita pangil function lalu tulis function tersebut pada baris terakhir, mereka akan terpangil normal. <strong>Hanya berlaku pada function normal</strong></p>
<p>ref: <a href="https://medium.com/@zac_heisey/es5-vs-es6-functions-cb51536002ee">https://medium.com/@zac_heisey/es5-vs-es6-functions-cb51536002ee</a></p>
<h2 id="parameters">Parameters</h2>
<h3 id="11">11</h3>
<pre><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myFunction</span>(<span class="hljs-params">nama</span>)</span>{
    <span class="hljs-built_in">console</span>.log(nama)
}
</code></pre><p><strong>Parameter default</strong></p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myFunction</span>(<span class="hljs-params">nama = <span class="hljs-string">"budi"</span></span>)</span>{
    <span class="hljs-built_in">console</span>.log(nama)
    <span class="hljs-comment">// budi</span>
}
</code></pre><h2 id="return-value">Return value</h2>
<h3 id="12">12</h3>
<pre><code>function myName(<span class="hljs-selector-tag">a</span>,b){
    return <span class="hljs-selector-tag">a</span> + <span class="hljs-selector-tag">b</span>
}
</code></pre><p>return digunakan untuk menggembalikan nilai </p>
<p>Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.</p>
<p>It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.</p>
<p>For instance, functions that start with &quot;show&quot; usually show something.</p>
<p>Function starting with…</p>
<p>&quot;get…&quot; – return a value,
&quot;calc…&quot; – calculate something,
&quot;create…&quot; – create something,
&quot;check…&quot; – check something and return a boolean, etc.</p>
<p>SRC: <a href="https://javascript.info/function-basics">https://javascript.info/function-basics</a></p>
<h2 id="get-the-last-element-in-array">Get the last element in array</h2>
<h3 id="13">13</h3>
<pre><code>let abc = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]
console.log(abc[abc.length - <span class="hljs-number">1</span>])
<span class="hljs-comment">// 5</span>
</code></pre><p>atau dengan <code>slice()</code></p>
<pre><code>let abc = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]
console.log(abc.slice(<span class="hljs-number">-1</span>))
<span class="hljs-comment">// 5</span>
</code></pre><p>refrence: <a href="https://flexiple.com/get-last-array-element-javascript/">https://flexiple.com/get-last-array-element-javascript/</a></p>
<pre><code>let abc = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]
console.log(Math.max(...abc))
<span class="hljs-comment">// akan mengambil nilai terbesar yaitu: 5</span>
</code></pre><p>refrence: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max?retiredLocale=id">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max?retiredLocale=id</a></p>
<h2 id="function-expressions">Function expressions</h2>
<h3 id="14">14</h3>
<p>cara lain untuk membuat function yaitu dengan function expression. 
Membantu kita untuk membuat sebuah fungsi didalam expressions</p>
<pre><code><span class="hljs-keyword">let</span> myFunction = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'hello'</span>)
}
</code></pre><p><strong>function expression vs function declaration</strong>
src: <a href="https://javascript.info/function-expressions">https://javascript.info/function-expressions</a></p>
<p><strong>Memasukan function declaration kedalam variabel</strong></p>
<pre><code>function hai(){
    console.log(<span class="hljs-string">'hai'</span>)
}

let var_a = hai()

<span class="hljs-function"><span class="hljs-title">var_a</span><span class="hljs-params">()</span></span> <span class="hljs-comment">// hai </span>
<span class="hljs-function"><span class="hljs-title">hai</span><span class="hljs-params">()</span></span> <span class="hljs-comment">// hai</span>
</code></pre><h2 id="function-arrow">Function arrow</h2>
<h3 id="15">15</h3>
<pre><code>let myFunction = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'hallo'</span>)
}
</code></pre><p>Arrow function diatas bisa dijalankan seperti fungsi biasa, tetapi untuk yang dibawah ini adalah coditional, artinya pada konsep tertentu saja bisa berjalan.</p>
<p>Mereka tidak bisa dijalankan karena tidak dipanggil.</p>
<pre><code>() =&gt; {<span class="hljs-keyword">return</span> <span class="hljs-string">'halo'</span>}
</code></pre><p>Ref: <a href="https://www.freecodecamp.org/news/javascript-arrow-functions-in-depth/#:~:text=The%20arrow%20function%20syntax%20offers,not%20bound%20to%20the%20function">https://www.freecodecamp.org/news/javascript-arrow-functions-in-depth/#:~:text=The%20arrow%20function%20syntax%20offers,not%20bound%20to%20the%20function</a>.</p>
<h2 id="callback-function">Callback function</h2>
<h3 id="16">16</h3>
<p>Sebuah konsep untuk memasukan fungsi kedalam argument</p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">konsole</span><span class="hljs-params">(argument)</span>{</span>
    console.<span class="hljs-built_in">log</span>(argument)
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myCal</span><span class="hljs-params">(x, y, tampilkan)</span>{</span>
    let <span class="hljs-built_in">sum</span> = x + y
    <span class="hljs-comment">// memanggil function konsole</span>
    tampilkan(<span class="hljs-built_in">sum</span>)
}

myCal(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>, konsole)
<span class="hljs-comment">// 4</span>
<span class="hljs-comment">// kita menggunkan function dari konsole</span>
</code></pre><p>refrence: <a href="https://www.w3schools.com/js/js_callback.asp">https://www.w3schools.com/js/js_callback.asp</a>
refrence: <a href="https://javascript.info/function-expressions">https://javascript.info/function-expressions</a></p>
<h2 id="rest-parameters">Rest parameters</h2>
<h3 id="17">17</h3>
<p>src: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters</a></p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">abc</span><span class="hljs-params">(<span class="hljs-rest_arg">...My</span>)</span></span>{
  <span class="hljs-keyword">for</span> (i of My){
    console.log(i)
  }
}

abc(<span class="hljs-string">'halo'</span>, <span class="hljs-string">'budi'</span>, <span class="hljs-string">'nice'</span>)

<span class="hljs-comment">// halo</span>
<span class="hljs-comment">// budi </span>
<span class="hljs-comment">// nice</span>
</code></pre><pre><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">efg</span><span class="hljs-params">(<span class="hljs-rest_arg">...My</span>)</span></span>{
  <span class="hljs-keyword">for</span> (i <span class="hljs-keyword">in</span> My){
    console.log(My[i])
  }
}

console.log(efg(<span class="hljs-string">'h'</span>,<span class="hljs-string">'i'</span>, <span class="hljs-string">'o'</span>))
</code></pre><h2 id="object-notation">object notation</h2>
<h3 id="18">18</h3>
<p>src: <a href="https://stackoverflow.com/questions/4908378/javascript-array-of-functions">https://stackoverflow.com/questions/4908378/javascript-array-of-functions</a></p>
<pre><code><span class="hljs-keyword">let</span> myFunct = {

<span class="hljs-attr">functName</span> : <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'halo'</span>)
},

<span class="hljs-attr">name</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'dunia'</span>)
}

}


myFunct.functName() <span class="hljs-comment">// halo </span>

myFunct.name() <span class="hljs-comment">// dunia</span>
</code></pre><h2 id="class-syntax">Class Syntax</h2>
<h3 id="19">19</h3>
<pre><code><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">User</span> </span>{

<span class="hljs-keyword">constructor</span>(name){
    <span class="hljs-keyword">this</span>.name = name;
}

welcome(){
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`selamat datang kembali <span class="hljs-subst">${<span class="hljs-keyword">this</span>.name}</span>`</span>)
}}


<span class="hljs-keyword">let</span> budi = <span class="hljs-keyword">new</span> User(<span class="hljs-string">"budi"</span>) <span class="hljs-comment">// new object is created</span>

budi.welcome();
</code></pre><h2 id="what-is-a-class-">What is a class?</h2>
<h3 id="20">20</h3>
<blockquote>
<p>a class is a kind of function</p>
</blockquote>
<p>Dikutip dari Petanikode</p>
<ul>
<li>class adalah rancangan atau blue print dari sebuah objek</li>
<li>Object dalam pemrograman adalah sebuah variabel yang merupakan instance dari class</li>
<li>instance bisa diartikan sebagai wujud dari class </li>
<li>class berisi definisi variabel dan fungsi yang menggambarkan sebuah objek</li>
</ul>
<p><a href="https://javascript.info/class">https://javascript.info/class</a></p>
<p>Contoh, bayangkan sebuah rumah, didalamnya ada TV, Kursi, Sofa dan alat- alat lainnya. Dalam PBO, rumah adalah class, sedangkan TV, Kursi, Sofa adalah instance.</p>
<p>src: <a href="https://id.quora.com/Dalam-pemrograman-apa-maksud-instance-dari-sebuah-objek">https://id.quora.com/Dalam-pemrograman-apa-maksud-instance-dari-sebuah-objek</a></p>
<p>From stackoverflow <a href="https://stackoverflow.com/questions/2885385/what-is-the-difference-between-an-instance-and-an-object">https://stackoverflow.com/questions/2885385/what-is-the-difference-between-an-instance-and-an-object</a></p>
<p>Intinya <strong>instance</strong> adalah variabel yang bertugas sebagai object, object satu dan yang lainnya itu berbeda</p>
<blockquote>
<p>Answered By Yuval Karmi 
Excellent question.</p>
</blockquote>
<p>I&#39;ll explain it in the simplest way possible: Say you have 5 apples in your basket. Each of those apples is an object of type Apple, which has some characteristics (i.e. big, round, grows on trees).</p>
<p>In programming terms, you can have a class called Apple, which has variables size:big, shape:round, habitat:grows on trees. To have 5 apples in your basket, you need to instantiate 5 apples. Apple apple1, Apple apple2, Apple apple3 etc....</p>
<p>Alternatively: Objects are the definitions of something, instances are the physical things.</p>
<p>Does this make sense?</p>
<pre><code><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">User</span> </span>{
    <span class="hljs-keyword">constructor</span>(name) {<span class="hljs-keyword">this</span>.name = name;}
    welcome() { <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Selamat datang <span class="hljs-subst">${<span class="hljs-keyword">this</span>.name}</span>`</span>) }
}

<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> User) <span class="hljs-comment">// function</span>
</code></pre><h2 id="oop-memiliki-empat-konsep-utama">OOP memiliki empat konsep utama</h2>
<ol>
<li><p>&quot;encapsulation&quot;: digunakan agar code kita lebih private, memberikan informasi kepada developer lain bahwa kode ini tidak boleh dirubah. Bisa berwujud local variabel ( kebalikan dari global variabel )</p>
</li>
<li><p>&quot;inheritance&quot;: adalah proses untuk membuat kelas baru tetapi memiliki karaktersitik dari class yang menjadi parent. </p>
</li>
<li><p>&quot;Polymorphism&quot;: adalah bentuk dari inheritance, tetapi class childer telah melakukan perubahan pada method dari class parent.</p>
</li>
</ol>
<p>contoh:</p>
<pre><code><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Animal</span> </span>{
  sound() {
    console.log(<span class="hljs-symbol">'This</span> animal makes a sound');
  }
}

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Dog</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Animal</span> </span>{
  sound() {
    console.log(<span class="hljs-symbol">'Bark</span>! <span class="hljs-type">Bark</span>!');
  }
}

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Cat</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Animal</span> </span>{
  sound() {
    console.log(<span class="hljs-symbol">'Meow</span>!');
  }
}

const animal1 = <span class="hljs-keyword">new</span> <span class="hljs-type">Animal</span>();
const dog1 = <span class="hljs-keyword">new</span> <span class="hljs-type">Dog</span>();
const cat1 = <span class="hljs-keyword">new</span> <span class="hljs-type">Cat</span>();

animal1.sound(); <span class="hljs-comment">// Output: This animal makes a sound</span>
dog1.sound(); <span class="hljs-comment">// Output: Bark! Bark!</span>
cat1.sound(); <span class="hljs-comment">// Output: Meow!</span>
</code></pre><ul>
<li>&quot;abstration&quot;: Dengan abstration kita bisa lebih fokus ke prosesnya daripada menggenai menulis detail data secara manual. Dengan abstraction kita bisa memasukan parameter ke object secara langsung. Dengan begitu object akan lebih berfariasi daripada tipe diatas </li>
</ul>
<pre><code><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Animal</span> </span>{
  constructor(name, sound) {
    <span class="hljs-keyword">this</span>.name = name;
    <span class="hljs-keyword">this</span>.sound = sound;
  }

  makeSound() {
    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-type">Error</span>(<span class="hljs-string">"makeSound method must be implemented"</span>);
  }
}

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Dog</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Animal</span> </span>{
  makeSound() {
    console.log(`${<span class="hljs-keyword">this</span>.name} barks: ${<span class="hljs-keyword">this</span>.sound}`);
  }
}

const dog = <span class="hljs-keyword">new</span> <span class="hljs-type">Dog</span>(<span class="hljs-string">"Buddy"</span>, <span class="hljs-string">"Woof woof!"</span>);
<span class="hljs-comment">// insert paramter ^</span>
dog.makeSound();
</code></pre><h3 id="konsep-oop-dengan-garbage-collection">Konsep OOP dengan garbage collection</h3>
<p>OOP dan garbage collection itu berbeda. 
Garbage collection digunakan untuk membersihkan penggunaan memory dari aplikasi yang tidak berjalan.</p>
<h2 id="class-expression">Class Expression</h2>
<h3 id="21">21</h3>
<p>sama seperti function class juga bisa dimasukan kedalam expression(variabel)</p>
<pre><code><span class="hljs-keyword">let</span> User = <span class="hljs-class"><span class="hljs-keyword">class</span> </span>{
    Hi(){ <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'halo dunia'</span>) }
}

<span class="hljs-keyword">new</span> User().Hi() <span class="hljs-comment">// ini works</span>
<span class="hljs-comment">// halo dunia</span>
</code></pre><p>kit juga bisa memasukan class kedalam function</p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">makeClass</span>(<span class="hljs-params">abc</span>) </span>{

    <span class="hljs-keyword">return</span> <span class="hljs-class"><span class="hljs-keyword">class</span> </span>{
    Hi() {
    <span class="hljs-built_in">console</span>.log(abc)
    }
}
}

<span class="hljs-keyword">let</span> budi = makeClass(<span class="hljs-string">" selamat datang budi"</span>)

<span class="hljs-keyword">new</span> budi().Hi() <span class="hljs-comment">// selamat datang budi</span>
</code></pre><h2 id="getters-setters">Getters / setters</h2>
<h3 id="22">22</h3>
<pre><code><span class="hljs-keyword">class</span> <span class="hljs-title">User</span> {

  constructor(name){
    <span class="hljs-keyword">this</span>.name = name;
  }

  <span class="hljs-function"><span class="hljs-keyword">get</span> <span class="hljs-title">name</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>._name
  }

  <span class="hljs-function"><span class="hljs-keyword">set</span> <span class="hljs-title">name</span>(<span class="hljs-params"><span class="hljs-keyword">value</span></span>)</span>{
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">value</span>.length &lt; <span class="hljs-number">4</span>){
      console.log(<span class="hljs-string">'the name is to short'</span>)
      <span class="hljs-keyword">return</span>
    }
    <span class="hljs-keyword">this</span>._name = <span class="hljs-keyword">value</span>
  }

}


<span class="hljs-keyword">let</span> budi = <span class="hljs-keyword">new</span> User(<span class="hljs-string">'budi'</span>)
console.log(budi.name)
</code></pre><h2 id="computed-names">Computed names</h2>
<h3 id="23">23</h3>
<pre><code><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">User</span> {</span>

    [<span class="hljs-string">'say'</span>+<span class="hljs-string">'Hi'</span>](){
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'halo dunia'</span>)
    }
}

<span class="hljs-keyword">new</span> User().sayHi()
</code></pre><h2 id="class-fields">Class fields</h2>
<h3 id="24">24</h3>
<p>class property</p>
<pre><code><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">User</span> </span>{
    name = <span class="hljs-string">"budi"</span> <span class="hljs-comment">// property</span>

    Hi(){ <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`selamat datang <span class="hljs-subst">${name}</span>`</span>) }
}

<span class="hljs-keyword">let</span> abc = <span class="hljs-keyword">new</span> User().name

<span class="hljs-built_in">console</span>.log(abc)
</code></pre><h2 id="class-inheritance">Class inheritance</h2>
<h3 id="25">25</h3>
<pre><code><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">NamaBarang</span></span>{
    constructor(name, price){<span class="hljs-keyword">this</span>.name = name, <span class="hljs-keyword">this</span>.price = price}

    showPrice(){console.log(<span class="hljs-keyword">this</span>.price)}
}

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">NamaMakanan</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">NamaBarang</span></span>{
    showName(){console.log(<span class="hljs-keyword">this</span>.name)}

    result(){<span class="hljs-keyword">this</span>.showName(); <span class="hljs-keyword">super</span>.showPrice();}

}

let nasiGoreng = <span class="hljs-keyword">new</span> <span class="hljs-type">NamaMakanan</span>(<span class="hljs-symbol">'nasi</span> goreng', <span class="hljs-number">15</span>)

nasiGoreng.result()

<span class="hljs-comment">// nasi goreng</span>
<span class="hljs-comment">// 15</span>
</code></pre><ul>
<li><code>constructor</code> digunakan untuk menggambil argument seperti halnya function. Karena function itu sudah built in constructor sedangkan class tidak</li>
<li><code>this</code> ini gunakan untuk menggambil method child</li>
<li><code>this</code> juga digunakan untuk menggambil property didalam class</li>
<li><code>super</code> ini digunakan untuk menggambil constructor parent, jika kita ingin melakukan perubahan pada constructor harus ada super()\</li>
<li><code>super</code> scope dari super adalah untuk property pada parent saja, sebagai contoh code diatas akan error jika <code>this</code> diubah ke super</li>
</ul>
<p>contoh: akan terjadi error jika kita tidak pakai super</p>
<pre><code><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Animal</span> </span>{
    <span class="hljs-keyword">constructor</span>(name){
        <span class="hljs-keyword">this</span>.speed = <span class="hljs-number">0</span>;
        <span class="hljs-keyword">this</span>.name = name;
    }
}

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Rabit</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Animal</span> </span>{
    <span class="hljs-keyword">constructor</span>(name, earLength){
        <span class="hljs-keyword">super</span>()
        <span class="hljs-keyword">this</span>.name = <span class="hljs-string">"white rabbit"</span>;
        <span class="hljs-keyword">this</span>.earLength = earLength
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`halo ini adalah <span class="hljs-subst">${<span class="hljs-keyword">this</span>.name}</span>`</span>)
    }
}

<span class="hljs-keyword">let</span> rabbit = <span class="hljs-keyword">new</span> Rabit(<span class="hljs-string">"black rabit"</span>, <span class="hljs-number">10</span>)

<span class="hljs-built_in">console</span>.log()
</code></pre><p>## </p>
<pre><code><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Barang</span> </span>{
    <span class="hljs-keyword">constructor</span>(name, price){
        <span class="hljs-keyword">this</span>.name = name
        <span class="hljs-keyword">this</span>.price = price
    }
}

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Makanan</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Barang</span></span>{
    <span class="hljs-keyword">constructor</span>(name, price, level){
        <span class="hljs-comment">/* super(name, price)
         *Kita bisa memakai cara ini sebagai alternatif yang dibawah
            untuk menggambil constructor parent, jadi tidak perlu this.name.
         */</span>
        <span class="hljs-keyword">super</span>()
        <span class="hljs-keyword">this</span>.name = name
        <span class="hljs-keyword">this</span>.price = price
        <span class="hljs-keyword">this</span>.level = level
    }

    result(){
        <span class="hljs-keyword">return</span> <span class="hljs-string">`
nama makanan : <span class="hljs-subst">${<span class="hljs-keyword">this</span>.name}</span>
harga makanan : <span class="hljs-subst">${<span class="hljs-keyword">this</span>.price}</span>
tingkat pedas : <span class="hljs-subst">${<span class="hljs-keyword">this</span>.level}</span>
        `</span>
    }
}

<span class="hljs-keyword">let</span> bakmie = <span class="hljs-keyword">new</span> Makanan(<span class="hljs-string">'bakmie'</span>, <span class="hljs-number">15</span>, <span class="hljs-number">10</span>)

<span class="hljs-built_in">console</span>.log(bakmie.result())
</code></pre><p>jika kita ingin melakukan perubahan pada constructor di inheritance class pastikan declarasikan <code>super()</code></p>
<p>dan juga jangan lupa untuk argumentnya ditulis ulang juga, jika masih dipakai</p>
<h2 id="inheritance">Inheritance</h2>
<h3 id="26">26</h3>
<p>Ini adalah suatu konsep didalam OOP (object oriented programming) untuk membantu kita membuat sebuah class atau blueprint yang memiliki karakteristik yang sama antara satu dan yang lainnya.</p>
<p>Sebagai gambaran:
ada blueprint untuk kendaraan, kendaran tersebut memiliki ciri-ciri 
ada pintu dan roda 4 </p>
<p>kita bisa membuat sebuah instruksi baru yang memiliki ciri-ciri diatas dengan melakukan inheritance. </p>
<p>ada blueprint yang berasal dari blueprint diatas bernama &quot;mobil kecil&quot;,
ada ciri-ciri baru yaitu ukurannya tidak lebih dari 4 meter</p>
<p>dan juga ada blueprint mobil yang berukuran lebih dari 4 meter.</p>
<p>Kesimpulan: inheritance digunakan untuk membuat sebuah model blueprint yang sama, tanpa harus buat buat dari awal </p>
<pre><code><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Kendaraan</span></span>{
    constructor(nama, pintu, warna){
        <span class="hljs-keyword">this</span>.nama = nama
        <span class="hljs-keyword">this</span>.pintu = pintu
        <span class="hljs-keyword">this</span>.warna = warna
    }

    show(){
        <span class="hljs-keyword">return</span> `ini adalah kendaraan roda empat`
    }
}

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MobilKecil</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Kendaraan</span></span>{
    show(){
        <span class="hljs-keyword">return</span> `
        ini adalah kendaraan kecil
        memiliki ${<span class="hljs-keyword">this</span>.pintu} pintu dan berwarna ${<span class="hljs-keyword">this</span>.warna}
        `
    }
}

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MobilBesar</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Kendaraan</span></span>{
    show(){
        <span class="hljs-keyword">return</span> `
        ini adalah kendaran besar
        memiliki ${<span class="hljs-keyword">this</span>.pintu} pintu dan berwarna ${<span class="hljs-keyword">this</span>.warna}
        `
    }
}


let abc = <span class="hljs-keyword">new</span> <span class="hljs-type">MobilKecil</span>(<span class="hljs-symbol">'ab</span>c', <span class="hljs-number">4</span>, <span class="hljs-symbol">'puti</span>h')
console.log(abc.show())


let abcBesar = <span class="hljs-keyword">new</span> <span class="hljs-type">MobilBesar</span>(`abc <span class="hljs-type">Besar</span>`, <span class="hljs-number">4</span>, <span class="hljs-symbol">'hita</span>m')
console.log(abcBesar.show())
</code></pre><h2 id="encapsulation-programming">Encapsulation programming</h2>
<h3 id="27">27</h3>
<p>adalah sebuah metode pendekatan dalam pembuatan sebuah program agar function maupun variabel tidak bertabrakan antara satu dan yang lainnya.</p>
<p>Misalkan kita ingin membuat sebuah program yang besar, dengan teknik encapulasi kita bisa memastikan bahwa tidak ada variabel atau fungsi duplikat didalam program yang akan menyebabkan error. </p>
<p>Karena encapulasi itu akan memberikan batasan scope untuk variabel dan function. </p>
<p><strong>Carannya</strong>
 Kita bisa menulis functi ataupun variabel didalam suatu class. 
 Maka variabel atau function tersebut hanya bisa dijalankan didalam class tersebut saja. Dengan begitu bisa dipastikan jika kita menulis nama variabel atau fungsi yang sama tidak akan terjadi error</p>
<p>kita juga bisa melakukan encapulasi didalam class yaitu dengan menggunakan function scope. variabel yang didalam function hanya bisa dipakai dan dijalankan didalam function tersebut saja</p>
<p>Kesimpulan: ini adalah pendekatan untuk memastikan tidak ada variabel atau function duplikat yang akan menghasilkan bug.</p>
<p>Karena diprogram yang bersekala besar itu akan mengakibatkan bug yang tidak terlihat</p>
<p>src: <a href="https://www.youtube.com/watch?v=sNKKxc4QHqA&amp;list=PLxvooGgpi4NeugSB4Pk546MXTPmGqPdc4&amp;index=6">https://www.youtube.com/watch?v=sNKKxc4QHqA&amp;list=PLxvooGgpi4NeugSB4Pk546MXTPmGqPdc4&amp;index=6</a></p>
<h2 id="for-each-">For each()</h2>
<h3 id="28">28</h3>
<p>Method forEach ini digunakan untuk memanggil nilai didalam secara berurutan</p>
<pre><code><span class="hljs-keyword">let</span> abc = [<span class="hljs-string">'rangga'</span>, <span class="hljs-string">'wahyu'</span>, <span class="hljs-string">'atmoko'</span>]

abc.forEach(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(item))
</code></pre><p>atau </p>
<pre><code>let abc = [<span class="hljs-string">'rangga'</span>, <span class="hljs-string">'wahyu'</span>, <span class="hljs-string">'atmoko'</span>]

abc.forEach(<span class="hljs-function"><span class="hljs-params">(item)</span> =&gt;</span> {<span class="hljs-built_in">console</span>.log(item)})
</code></pre><p>Atau </p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setList</span>(<span class="hljs-params">name</span>)</span>{
    <span class="hljs-built_in">console</span>.log(name)
}

<span class="hljs-keyword">let</span> var_a = [<span class="hljs-string">'budi'</span>, <span class="hljs-string">'bambang'</span>, <span class="hljs-string">'bagus'</span>]

var_a.forEach(setList)
</code></pre><p>src: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach</a></p>
<h2 id="array-find">Array find</h2>
<h3 id="29">29</h3>
<p>untuk mendapatkan satu nilai yang sesuai permintaan</p>
<pre><code>let varA = [<span class="hljs-number">4</span>,<span class="hljs-number">6</span>,<span class="hljs-number">8</span>,<span class="hljs-number">3</span>,<span class="hljs-number">5</span>]

let result = varA.find(item =&gt; item &gt; <span class="hljs-number">6</span>)

console.log(result)
</code></pre><p>atau </p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params">arg</span>) </span>{
    <span class="hljs-keyword">return</span> arg &gt; <span class="hljs-number">6</span>
}

<span class="hljs-keyword">let</span> varA = [<span class="hljs-number">4</span>,<span class="hljs-number">6</span>,<span class="hljs-number">8</span>,<span class="hljs-number">3</span>,<span class="hljs-number">5</span>]

<span class="hljs-keyword">let</span> result = varA.find(test)

<span class="hljs-built_in">console</span>.log(result)
</code></pre><h2 id="filter">filter</h2>
<h3 id="30">30</h3>
<p>menggambil semua nilai yang sesuai dengan permintaan </p>
<pre><code><span class="hljs-keyword">const</span> words = [<span class="hljs-string">'spray'</span>, <span class="hljs-string">'limit'</span>, <span class="hljs-string">'elite'</span>, <span class="hljs-string">'exuberant'</span>, <span class="hljs-string">'destruction'</span>, <span class="hljs-string">'present'</span>]<span class="hljs-comment">;</span>

<span class="hljs-keyword">const</span> result = words.filter(word =&gt; word.length &gt; <span class="hljs-number">6</span>)<span class="hljs-comment">;</span>

console.<span class="hljs-built_in">log</span>(result)<span class="hljs-comment">;</span>
// expected output: Array [<span class="hljs-string">"exuberant"</span>, <span class="hljs-string">"destruction"</span>, <span class="hljs-string">"present"</span>]
</code></pre><p>atau </p>
<pre><code>function test(arg){
    return arg &gt; <span class="hljs-number">6</span>
}

let varA = [<span class="hljs-number">1</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>,<span class="hljs-number">8</span>,<span class="hljs-number">8</span>,<span class="hljs-number">4</span>,<span class="hljs-number">9</span>,<span class="hljs-number">7</span>]

let result = varA.filter(test)

console.log(result)
</code></pre><h2 id="map">Map</h2>
<h3 id="31">31</h3>
<p>Melakukan perhitungan atau menggelolah data didalam array</p>
<p>src: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map</a></p>
<pre><code><span class="hljs-keyword">const</span> array1 = [<span class="hljs-number">1</span>, <span class="hljs-number">4</span>, <span class="hljs-number">9</span>, <span class="hljs-number">16</span>];

<span class="hljs-comment">// pass a function to map</span>
<span class="hljs-keyword">const</span> map1 = array1.map(<span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x * <span class="hljs-number">2</span>);

<span class="hljs-built_in">console</span>.log(map1);
<span class="hljs-comment">// expected output: Array [2, 8, 18, 32]</span>
</code></pre><p>atau </p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params">arg</span>)</span>{
    <span class="hljs-keyword">return</span> arg * <span class="hljs-number">2</span>
}

<span class="hljs-keyword">let</span> varA = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]

<span class="hljs-keyword">let</span> result = varA.map(test)

<span class="hljs-built_in">console</span>.log(result)
</code></pre><h2 id="export-dan-require">export dan require</h2>
<h3 id="32">32</h3>
<blockquote>
<p>ex.js 
```
let name = &quot;budi&quot;
let age = 28</p>
</blockquote>
<p>exports.name = name
exports.age = age</p>
<pre><code>
&gt; <span class="hljs-selector-tag">im</span><span class="hljs-selector-class">.js</span>
</code></pre><p>let user = require(&#39;./ex&#39;)</p>
<p>console.log(user.name, user.age)</p>
<pre><code>
<span class="hljs-symbol">Sekarang</span> untuk <span class="hljs-keyword">banyak </span>paket 

&gt; ex.js
</code></pre><p>let name = &#39;budi&#39;
let age = 28</p>
<p>exports.name = name
exports.age = age</p>
<pre><code>
&gt; <span class="hljs-selector-tag">im</span><span class="hljs-selector-class">.js</span>
</code></pre><p>const {name, age} = require(&#39;./ex&#39;)</p>
<p>console.log(name, age)</p>
<pre><code>
## Module exports 
### <span class="hljs-number">33</span>

&gt; ex.js
</code></pre><p>let user = &#39;budi&#39;
let age = 28</p>
<p>module.exports = user
module.exports = age
module.exports = &quot;ini bagian terakhir&quot;</p>
<pre><code>
ini <span class="hljs-keyword">digunakan </span>untuk menggambil satu exports saja, yaitu <span class="hljs-keyword">bagian </span>terakhir

&gt; im.<span class="hljs-keyword">js</span>
</code></pre><p>let name = require(&#39;./ex&#39;)</p>
<p>console.log(name)</p>
<pre><code>
### Export <span class="hljs-keyword">module</span> <span class="hljs-keyword">class</span>
</code></pre><p>// Export.js</p>
<p>class Math{
    constructor(a,b){
        this.x = a,
        this.y = b,
    }</p>
<pre><code>Tampilkan {
    console.log(<span class="hljs-keyword">this</span>.x + <span class="hljs-keyword">this</span>.y)
</code></pre><p>}
}</p>
<p>module.exports = Math</p>
<pre><code>
</code></pre><p>// Import.js
let Math = require(&#39;./Export&#39;)</p>
<p>let abc = new Math(1,2)</p>
<p>abc.Tampilkan()</p>
<pre><code>
[<span class="hljs-string">Detail Catatan</span>](<span class="hljs-link">https://github.com/playmakermz/warkop-website/blob/main/code/js-import/catatan.md</span>)

[<span class="hljs-string">Diskusi Export dan Import</span>](<span class="hljs-link">https://stackoverflow.com/questions/49616639/how-can-i-export-all-functions-from-a-file-in-js</span>)

Src: 
<span class="hljs-bullet">- </span>https://www.freecodecamp.org/news/node-module-exports-explained-with-javascript-export-function-examples/
<span class="hljs-bullet">- </span>https://www.sitepoint.com/understanding-module-exports-exports-node-js/
<span class="hljs-bullet">- </span>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export?retiredLocale=id

<span class="hljs-section">## Callback function </span>
<span class="hljs-section">### 34</span>

Disini kita menggunakan function sebagai argumentnya. 
Tidak perlu ada penulisan "()" pada nama function yang dijadikan argument
</code></pre><p>function test(arg){
    return arg * 2
}</p>
<p>let varA = [1,2,3,4,5]</p>
<p>let result = varA.map(test)</p>
<p>console.log(result)</p>
<pre><code>

<span class="crmsh">***
<span class="hljs-comment"># Note kedua </span>
<span class="hljs-comment">## install node </span>

installing <span class="hljs-keyword">node</span> <span class="hljs-title">js</span> <span class="hljs-keyword">in</span> linux. `sudo pacman -S <span class="hljs-keyword">node</span><span class="hljs-title">`

## jalankan</span> <span class="hljs-keyword">node</span> 

<span class="hljs-title">ketik</span> `<span class="hljs-keyword">node</span><span class="hljs-title">` didalam</span> terminal 

<span class="hljs-comment">## aritmatika sederhana</span></span>
</code></pre><p>1 <em> 2
(2+3) </em> (3+2)
14 % 2
14 / 4
2 ** 6</p>
<pre><code>
## Penggunaan underscore 
`_` untuk menyimpan nilai terakhir
</code></pre><p>2 <em> 3 // 6
_ </em> _ // 36</p>
<pre><code>
## Membuat <span class="hljs-keyword">function</span>  <span class="hljs-title">|</span> ES5
</code></pre><p>function tambah(a,b){
  return a + b
}</p>
<pre><code>
## membuat object
</code></pre><p>let obj = new object()
obj.alas = 3
obj.tinggi = 5 
obj.luas = function() { return (obj.alas * obj.tinggi) / 2 }
obj.luas() // 7.5 </p>
<pre><code>
## Variabel
</code></pre><p>let a = &#39;b&#39; // variabel ini masih bisa dirubah
const c = &#39;d&#39; // variabel ini tidak bisa dirubah
let d, e = &#39;d&#39;, &#39;e&#39;</p>
<pre><code>
## readline-sync ( input )
</code></pre><p>// sama bisa seperti input() function di python
let readline = require(&#39;readline-sync&#39;)</p>
<p>let nama = readline.question(&#39;Nama anda?&#39;)
// ambil input dari console</p>
<pre><code>
cara download <span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">readline</span>-<span class="hljs-title">sync</span> <span class="hljs-title">adalah</span> <span class="hljs-title">dengan</span></span>
</code></pre><p>npm install readline-sync</p>
<pre><code><span class="hljs-keyword">Ref</span>: https://medium.com/@quinnfeng26276/getting-<span class="hljs-literal">started</span>-with-readline-sync-building-command-line-applications-<span class="hljs-keyword">in</span>-<span class="hljs-keyword">node</span><span class="hljs-title">-js-81fa3bbaa237</span>

<span class="hljs-comment">## Check tipe data</span>
</code></pre><p>let a = 3
typeof a 
// ouput &#39;number&#39;</p>
<p>let b = new Number(9)
typeof b 
// ouput &#39;object&#39;</p>
<pre><code>
## Mengubah nilai ke string
</code></pre><p>let a = 9
a.toString()
// &#39;9&#39;</p>
<pre><code>## Tipe number
</code></pre><p>// dalam beberapa bahasa program
// ada bilangan int dan float
// javascript tidak membedakan bilangan berikut
// alternative declare number
let number = 255; / 10
let binner = 0b1111; / 2
let oktal = 0o377; // 8
let heksadesimal = 0xff; // 16</p>
<p>let float = 123.123</p>
<pre><code>
## Penulisan string
</code></pre><p>// petik tunggal &#39;&#39;
// petik ganda &quot;&quot;
// tick <code>`
&#39;tunggal&#39;
&quot;ganda&quot;</code>tick`</p>
<pre><code>
## <span class="hljs-built_in">escape</span>, squence, <span class="hljs-keyword">new</span> <span class="hljs-built_in">line</span>, horizontal <span class="hljs-keyword">tab</span>
</code></pre><p>&#39;halo \n halo&#39;
// halo 
// halo </p>
<pre><code>## boolean
</code></pre><p>let betul = true
let salah = false</p>
<pre><code>
## undefined vs null
</code></pre><p>let a
typeof a // undefined</p>
<p>let c = undefined // entah bagaimana dilarang pada komunitas!! <a href="https://www.geeksforgeeks.org/undefined-vs-null-in-javascript/">https://www.geeksforgeeks.org/undefined-vs-null-in-javascript/</a></p>
<p>let b = null
typeof b // null</p>
<p>null == undefined // True ( mereka mempresentasikan konsep yang sama )
null === undefined // False ( tipe nilai mereka berbeda )</p>
<pre><code>
-<span class="ruby"> Undefined
</span>  -<span class="ruby"> adalah bentuk kosong sepenuhnya. Semisal declarasi variabel tetapi tidak ada nilai dialamnya
</span>
-<span class="ruby"> null
</span>    -<span class="ruby"> adalah nilai yang bisa kita masukan kedalam variabel, yang menjadi representasi area nilai belum terisi
</span>
ref: https://www.geeksforgeeks.org/undefined-vs-null-in-javascript/

## Get And Setter
</code></pre><p>class budiFamily {</p>
<pre><code><span class="hljs-keyword">constructor</span>(namaDepan, namaBelakang) {
    <span class="hljs-keyword">this</span>._firstName = namaDepan
    <span class="hljs-keyword">this</span>._lastName = namaBelakang
}

<span class="hljs-keyword">get</span> firstName() {
    console.log(<span class="hljs-string">'aku dari get masuk urutan ke ... dengan '</span> + <span class="hljs-keyword">this</span>._firstName)
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>._firstName
}

<span class="hljs-keyword">set</span> firstName(parameter) {
</code></pre><p>console.log(&#39;aku dari set  masuk urutan ke ... dengan &#39; + this._firstName)
        if (parameter != &quot;budi&quot;) {
            throw new Error(&#39;First Name must be budi!&#39;)
        }</p>
<pre><code>    <span class="hljs-keyword">this</span>._firstName = parameter

}
</code></pre><p>}</p>
<p>let anakBudi = new budiFamily(&quot;budi&quot;, &#39;toni&#39;)
console.log(anakBudi.firstName) // Ini akan mengakses get firstname
console.log(anakBudi._firstName) // ini akan mengakses _firstName langsung
console.log(anakBudi.lastName) // Undefined
// anakBudi.firstName = &#39;wahyu&#39;</p>
<p>// Set Disini akan bekerja saat kita melakukan perubahan pada properti
// anakBudi.firstName = &quot;wahyu&quot;</p>
<pre><code>Atau Pada <span class="hljs-selector-tag">code</span> dibawah ini:
</code></pre><p>class budiFamily {</p>
<pre><code><span class="hljs-keyword">constructor</span>(namaDepan, namaBelakang) {
    <span class="hljs-keyword">this</span>._firstName = namaDepan
    <span class="hljs-keyword">this</span>._lastName = namaBelakang
}

<span class="hljs-keyword">get</span> firstName() {
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>._firstName != <span class="hljs-string">'budi'</span>) {
        <span class="hljs-keyword">throw</span> new Error(<span class="hljs-string">'Parameter default harus Budi!'</span>)
    }
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>._firstName
}

<span class="hljs-keyword">set</span> firstName(parameter) {
    <span class="hljs-keyword">if</span> (parameter != <span class="hljs-string">"budi"</span>) {
        <span class="hljs-keyword">throw</span> new Error(<span class="hljs-string">'Nilai yang dirubah juga harus budi!'</span>)
    }

    <span class="hljs-keyword">this</span>._firstName = parameter

}
</code></pre><p>}</p>
<p>let anakBudi = new budiFamily(&quot;budi&quot;, &#39;toni&#39;)</p>
<p>console.log(anakBudi.firstName) // Ini akan mengakses get firstname
console.log(anakBudi._firstName) // ini akan mengakses _firstName langsung</p>
<p>anakBudi.firstName = &quot;wahyu&quot; // Maka akan terjadi error dari set </p>
<p>let anakOmBudi = new budiFamily(&#39;rangga&#39;, &#39;wahyu&#39;)
// Maka akan terjadi error dari get</p>
<pre><code>
<span class="hljs-attribute">Note</span>: 

<span class="smali">Pada code diatas bercerita tentang keluarga budi. Dengan Semua keturunan harus memiliki nama awalan Wajib budi.

Break down:
- Get Bekerja saat awal kita membuat instance. Mereka akan melakukan pengecekan pada argument yang dimasukan.

- Set akan bekerja saat<span class="hljs-built_in"> instance </span>sudah terbuat dan memiliki parameter. Mereka hanya akan aktif jika Melakukan perubahan pada properti yang ada

- Pola pengerjaan mereka setelah<span class="hljs-built_in"> instance </span>telah dibuat dan dilakukan perubahan adalah, Argument pertama-tama akan diolah pada set dan akan dikirim kepada get untuk menyimpan data tersebut, dan menampilkan data jika dipanggil 

- Get Bekerja juga sebagai argument function. Mereka adalah function tetapi sebenarnnya adalah argument, oleh karena itu tidak ada () pada akhir pemanggilan. 
- Didalam get tidak boleh ada parameter 


<span class="hljs-comment">## Destructuring Array parameter</span>

Tujuan adalah menggunakan value pada<span class="hljs-built_in"> array </span>sebagai parameter.</span>
</code></pre><p>function math({a,b}) {
    console.log({a})
    return a + b 
}</p>
<p>console.log(math({a:1, b:2}))</p>
<pre><code>
-<span class="ruby"> Parmeter dibuat dengan <span class="hljs-string">`{}`</span>
</span>-<span class="ruby"> Menambahkan value dengan <span class="hljs-string">`math({a:1, b:2}))`</span>
</span>

**Contoh Lain Array**
</code></pre><p>// Array dengan setiap item memiliki relasi
let buahDetail = [&#39;Appel&#39;, &#39;Manis&#39;]</p>
<p>// Function dibuat untuk mengambil buahDetail
// Dengan konsep parameter Destructuring</p>
<p>function dapDetail ([nama, rasa]) {
    console.log(<code>Nama buah: ${nama}, rasanya ${rasa}</code>)
}</p>
<p>dapDetail(buahDetail)</p>
<pre><code>
**Contoh lain dengan<span class="hljs-built_in"> array </span>of object**
</code></pre><p>let buah = {
    name: &#39;Appel&#39;,
    id: 1211,
    size: &#39;kecil&#39;
}</p>
<p>// Parmeter yang digunakan adalah alias, bisa pakai alias atau tidak
// merujuk pada property array</p>
<p>function getDetails({name: nama, size: ukuran}) {
    console.log(<code>Nama buah ${nama} ukuran ${ukuran}</code>)
}</p>
<p>getDetails(buah)</p>
<pre><code>
**Contoh lain,<span class="hljs-built_in"> array </span>of object didalam array**
</code></pre><p>let buah = {
    name: &#39;Appel&#39;,
    id: 1211,
    size: &#39;kecil&#39;,
    address: {
        city: &#39;malang&#39;,
        code: 123
    }
}</p>
<p>// Memasukan object kedalam destructured
// untuk mengakses address.city</p>
<p>function getDetails({ name: name, size: size, address: {city} }) {
    let abc = <code>Nama buah ${name}, ukuran ${size}, dari kota: ${city}</code>
    console.log(abc)
}</p>
<p>getDetails(buah)</p>
<pre><code>
## Rest parameter 
`...args | ...parameters`
</code></pre><p>function fun(...arg){
    arg.map((i) =&gt; console.log(i))
}</p>
<p>fun(1,2,3,4,5,6,7)</p>
<pre><code>
## preventDefault()

https:<span class="hljs-comment">//www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_preventdefault</span>

jika pada form, dengan mengunakan tool ini kita bisa memastikan tag `form` tidak akan melakukan refresh halaman. 

Ref: https:<span class="hljs-comment">//www.geeksforgeeks.org/parameter-destructuring/</span>

## Melakukan perubahan pada property object didalam array
melakukan perubahan pada array <span class="hljs-keyword">of</span> object didalam array. 

```Js
<span class="hljs-keyword">let</span> employees_data = [
    {
        employee_id: <span class="hljs-number">1</span>,
        employee_group: <span class="hljs-string">'Alpha'</span>,
        employee_name: <span class="hljs-string">"Aman"</span>,
    },
    {
        employee_id: <span class="hljs-number">2</span>,
        employee_group: <span class="hljs-string">'Alpha'</span>,
        employee_name: <span class="hljs-string">"Bhargava"</span>,
    },
    {
        employee_id: <span class="hljs-number">3</span>,
        employee_group: <span class="hljs-string">'Delta'</span>,
        employee_name: <span class="hljs-string">"Chaitanya"</span>,
    },
];
<span class="hljs-keyword">let</span> new_updated_data =
    employees_data.map((employee) =&gt; {
        <span class="hljs-keyword">if</span> (employee.employee_id === <span class="hljs-number">2</span>) {
            return {
                ...employee,
                employee_name: <span class="hljs-string">"Anthony"</span>,
            };
        }
        return employee;
    });
console.log(<span class="hljs-string">"Updated Data: "</span>);
console.log(new_updated_data);
</code></pre><p>Ref: <a href="https://www.geeksforgeeks.org/how-to-modify-an-objects-property-in-an-array-of-objects-in-javascript/">https://www.geeksforgeeks.org/how-to-modify-an-objects-property-in-an-array-of-objects-in-javascript/</a> | MAP()</p>
<h2 id="switch-case">Switch case</h2>
<pre><code class="lang-Js">
<span class="hljs-keyword">let</span> <span class="hljs-keyword">abc</span> = <span class="hljs-number">3</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Print</span><span class="hljs-params">(item)</span>{</span>
    console.<span class="hljs-built_in">log</span>(item)
}

<span class="hljs-keyword">if</span> (<span class="hljs-keyword">abc</span> === <span class="hljs-number">3</span>){
    <span class="hljs-keyword">Print</span>(<span class="hljs-number">3</span>)
}
<span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (<span class="hljs-keyword">abc</span> === <span class="hljs-number">4</span>){
    <span class="hljs-keyword">Print</span>(<span class="hljs-keyword">abc</span>)
}
<span class="hljs-keyword">else</span> {
    <span class="hljs-keyword">Print</span>(<span class="hljs-keyword">abc</span>)
}
// ================== If Statement


switch(<span class="hljs-keyword">abc</span>){
    case <span class="hljs-number">1</span>:
        <span class="hljs-keyword">Print</span>(<span class="hljs-string">'hi '</span>+ <span class="hljs-keyword">abc</span>)
        <span class="hljs-keyword">break</span>
    case <span class="hljs-number">2</span>:
        <span class="hljs-keyword">Print</span>(<span class="hljs-string">'hi '</span>+ <span class="hljs-keyword">abc</span>)
        <span class="hljs-keyword">break</span>
    case <span class="hljs-number">3</span>:
        <span class="hljs-keyword">Print</span>(<span class="hljs-string">'hi '</span>+ <span class="hljs-keyword">abc</span>)
        <span class="hljs-keyword">break</span>
    defaul<span class="hljs-variable">t:</span>
        <span class="hljs-keyword">Print</span>(<span class="hljs-string">'de'</span>+<span class="hljs-keyword">abc</span>)
}
</code></pre>
<p>Fungsi dan kegunaan sama, tetapi fokus dari mereka berbeda. </p>
<ul>
<li><code>if</code> - mencari nilai true dan false </li>
<li><code>switch</code> - mencari nilai yang sama</li>
</ul>
<p>Ref: <a href="https://medium.com/@michellekwong2/switch-vs-if-else-1d458e7b0711">https://medium.com/@michellekwong2/switch-vs-if-else-1d458e7b0711</a></p>
<hr>
<h1 id="mencari-nilai-bilangan-prima">Mencari Nilai Bilangan Prima</h1>
<hr>
<pre><code class="lang-Js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isPrime</span>(<span class="hljs-params">num</span>) </span>{
  <span class="hljs-keyword">if</span> (num &lt;= <span class="hljs-number">1</span>) <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">2</span>; i &lt;= <span class="hljs-built_in">Math</span>.sqrt(num); i++) {
    <span class="hljs-keyword">if</span> (num % i === <span class="hljs-number">0</span>) <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span> ;
  }
  <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>; <span class="hljs-comment">// Jika bilangan prima, maka return</span>
}


<span class="hljs-keyword">let</span> myArray = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>,<span class="hljs-number">7</span>]

<span class="hljs-keyword">let</span> abc = myArray.filter(<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> { <span class="hljs-keyword">return</span> isPrime(item)})

<span class="hljs-built_in">console</span>.log(abc); <span class="hljs-comment">// Output: true</span>
</code></pre>
<p>Dengan logika:</p>
<ul>
<li>jika nilai adalah &quot;kurang, atau sama&quot; dengan 1 maka bukan. </li>
<li>Lakukan loop </li>
</ul>
<p>Ref: <a href="https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-number-to-determine-if-the-number-is">https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-number-to-determine-if-the-number-is</a> | mengunakan sqrt untuk bilangan prima</p>
<h2 id="mencari-bilangan-genap">Mencari bilangan genap</h2>
<pre><code class="lang-Js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isEven</span>(<span class="hljs-params">num</span>) </span>{
    <span class="hljs-keyword">if</span> ((num % <span class="hljs-number">2</span>) === <span class="hljs-number">0</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>
    }
    <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
    }
}


<span class="hljs-keyword">let</span> myArray = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>,<span class="hljs-number">7</span>,<span class="hljs-number">8</span>]

<span class="hljs-keyword">let</span> abc = myArray.filter(<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> { <span class="hljs-keyword">return</span> isEven(item)} )

<span class="hljs-built_in">console</span>.log(myArray)
<span class="hljs-built_in">console</span>.log(abc); <span class="hljs-comment">// Output: true</span>
</code></pre>
<h2 id="array-sort">Array Sort</h2>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> points = [<span class="hljs-number">40</span>, <span class="hljs-number">100</span>, <span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">25</span>, <span class="hljs-number">10</span>];

<span class="hljs-keyword">let</span> abc = points.sort(<span class="hljs-function">(<span class="hljs-params">a,b</span>) =&gt;</span> {<span class="hljs-keyword">return</span> a - b})

<span class="hljs-built_in">console</span>.log(abc)

<span class="hljs-comment">// [ 1, 5, 10, 25, 40, 100 ]</span>
</code></pre>
<p>Dengan cara kerja:</p>
<ul>
<li>paramater &quot;a&quot; adalah tugas loop 1. Dimana semua item akan dibandingkan dengannya. </li>
<li>Jika ditemukan bahwa &quot;a&quot; lebih kecil dari item yang dibandingkan maka simpan &quot;a&quot; sebagai indikasi nilai paling kecil. </li>
<li>Dan seterusnya. </li>
</ul>
<p>Maka bentuk sebaliknya </p>
<pre><code class="lang-Js">const points = [<span class="hljs-number">40</span>, <span class="hljs-number">100</span>, <span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">25</span>, <span class="hljs-number">10</span>];
points.sort(function(a, b){return b - a});
</code></pre>
<p>ref: <a href="https://www.w3schools.com/js/js_array_sort.asp">https://www.w3schools.com/js/js_array_sort.asp</a></p>
<hr>
<h2 id="additional-note">Additional note</h2>
<ul>
<li>
    <RouterLink to="/js1" class="LFT-Item"> 
    Javascript Class    
    </RouterLink>
</li>
<li>
<RouterLink to="/js2" class="LFT-Item"> 
    Javascript Array
    </RouterLink>
</li>
<li>
<RouterLink to="/js3" class="LFT-Item"> 
    Javascript Fundamental    
    </RouterLink>
</li>
<li>
<RouterLink to="/js4" class="LFT-Item"> 
    Javascript synchronous
    </RouterLink>
</li>
<li>
<RouterLink to="/js5" class="LFT-Item"> 
    Javascript AJAX
    </RouterLink>
</li>
</ul>
<h2 id="latihan-javascript">Latihan Javascript</h2>
<ul>
<li><a href="../document/latihan-bahasa/latihan-js.md">Latihan javascript</a></li>
</ul>
<hr>
<h2 id="reference-">Reference:</h2>
<ul>
<li>internet is hard </li>
<li>freecodecamp </li>
<li>mozzila</li>
<li>chatgpt</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get</a> (get dan set)
This is some basic, sample markdown.</li>
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