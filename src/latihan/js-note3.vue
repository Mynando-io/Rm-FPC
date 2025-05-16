<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="fundamental-concept-of-javascript">Fundamental concept of Javascript</h1>
<ul>
<li>Nodejs </li>
<li>NPM</li>
<li>Data type </li>
<li>variabel</li>
<li>Expression</li>
<li>comment</li>
<li>operator</li>
<li>if statement</li>
<li>array</li>
<li>loop</li>
<li>function </li>
<li>object</li>
<li>export import </li>
</ul>
<h2 id="node-js">Node js</h2>
<p>Node.js adalah salah satu open-source, cross-platform, back-end Javascript runtime einvronment yang dapat membantu kita untuk membuat aplikasi bagian server dengan Javascript. Node js Dibangun pada 2009 oleh Ryan Dahl, Node.js Sekarang mendapatkan kepopuleran karena diantara para developer merasa architecture dan aplikasi ini sangat mudah digunakan dan menjadi support dalam pengembangan aplikasi. </p>
<p>Salah satu Kelebihan dari Node.js adalah kemampuan untuk mengatur dan menerima perintah. Node Js dapat menerima berbagai macam perintah secara bersamaan tanpa harus menghentikan perintah lainnya. Dengan kelebihan tersebiut node js sangat dapat membantu dalam aplikasi yang bekerja secara real time dengan user yang banyak, seperti aplikasi komunikasi atau online game. </p>
<p>Node js memiliki aplikasi untuk melakukan pengaturan dan pengelolahan package module yang bernama NPM, adalah salah satu open source library yang besar di dunia, yang memiliki lebih dari satu juta package yang dapat kita gunakan.</p>
<p>Sebagai tambahan Node.js adalah salah satu penyedia bantuan yang paling populer dalam pembangunan API, dikarenakan kemampuannya dalam mengatur permintaan dan respon didalam format JSON. Ini akan sangat membantu dalam melakukan integrasi dengan aplikasi lain dan service, sebagai mana JSON yang sangat diandalkan dalam melakukan pertukaran data. </p>
<h2 id="api">Api</h2>
<p>API (Application Programming Interface) adalah sebuah set protokol, dan alat untuk membantu dalam pengembangan software. Dengan API kita dapat Membuat dua software atau lebih bekerja bersamaan dengan mudah dan effisient.</p>
<p>Beberapa Bentuk API:</p>
<ul>
<li><p>Web APIs: Adalah Bentuk API yang menggunakan web protokol seperti HTTP untuk mendapatkan data. Contoh API google maps, atau twitter.</p>
</li>
<li><p>Operating System API: Adalah penghubung antara operating system dan software agar mereka bisa menggunakan resource computer system.  Contohnya adalah data dari docs dihubungkan dengan printer. </p>
</li>
<li>Library API: Ini adalah API yang berada didalam library software dan dapat memberikan akses untuk menggunakan library function dan feature. Contoh React API, Dengan React library kita bisa membuat user interface dengan mudah. API tersebut menyediakan set komponent dan method dalam membuat dan melakukan management pada Element UI.</li>
</ul>
<h2 id="variabel">Variabel</h2>
<p>Javascript adalah salah satu baha pemrogramman yang dynamic, dengan kata lain variabel bisa menyimpan berbagai macam data type dengan mudah. Oleh karena itu javascript dikatakan sebagai bahasa yang flexibel, namun kita juga harus berhati-hati dalam penggunaan variabel tersebut.</p>
<p>Pada awal dari javascript, cara untuk melakukan deklarasi variabel hanya bisa dilakukan dengan &quot;var&quot;, setelah berkembang mucul &quot;let&quot;, dan sekarang pada ES6 ditambahkan &quot;const&quot;. </p>
<p>Contoh deklarasi variabel </p>
<pre><code><span class="hljs-keyword">var</span> x = <span class="hljs-number">10</span>
<span class="hljs-keyword">let</span> y = <span class="hljs-string">'10'</span>
<span class="hljs-keyword">const</span> = <span class="hljs-string">'string'</span>
</code></pre><p>Data didalam var dan let dapat kita ubah sesuai dengan kebutuhan, Sedangkan const data tidak dapat dirubah. </p>
<p>Perbedaan dari var dan let:</p>
<ul>
<li>Var memiliki function scope. </li>
<li>let memiliki block scope.</li>
</ul>
<p>Contoh code error untuk var </p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">loop</span> <span class="hljs-params">(par)</span> {</span>
    <span class="hljs-keyword">for</span> (var <span class="hljs-built_in">i</span> = <span class="hljs-number">0</span>; <span class="hljs-built_in">i</span> &lt; <span class="hljs-number">4</span> ; <span class="hljs-built_in">i</span>++) {
        console.log(par[i])
    }

    console.<span class="hljs-built_in">log</span>(<span class="hljs-string">'ini adalah dari var'</span> + <span class="hljs-built_in">i</span>)
}

let ar = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]

loop(ar)
</code></pre><h2 id="data-type">Data Type</h2>
<p>Javascript support banyak tipe data, yang didalamnnya:</p>
<ul>
<li>String: Digunakan sebagai representasi dari text dan ditandai dengan tanda kutip.</li>
<li>Number: Digunakan sebagai representasi dari nilai numeric.</li>
<li>Booleans: Digunakan sebagai representasi nilai benar atau salah. </li>
<li>Null: Digunakahn sebagai representasi dari bentuk kosong. </li>
<li>Undefined: digunakan untuk tipe data yang tidak dikenali.</li>
<li>Objects: digunakan sebagai representasi dari collection data yang berhubgan dengan data atau function.</li>
<li>Array: Digunakan sebagai representasi dari koleksi data dalam bentuk list.</li>
<li>Symbol: Sebagai representasi dari penanda unique </li>
</ul>
<pre><code><span class="hljs-keyword">let</span> myString = <span class="hljs-string">'Hello, world!'</span>; <span class="hljs-comment">// a string</span>
<span class="hljs-keyword">let</span> myNumber = <span class="hljs-number">42</span>; <span class="hljs-comment">// a number</span>
<span class="hljs-keyword">let</span> myBoolean = <span class="hljs-literal">true</span>; <span class="hljs-comment">// a boolean</span>
<span class="hljs-keyword">let</span> myNull = <span class="hljs-literal">null</span>; <span class="hljs-comment">// null</span>
<span class="hljs-keyword">let</span> myUndefined; <span class="hljs-comment">// undefined</span>
<span class="hljs-keyword">let</span> myObject = { <span class="hljs-attr">name</span>: <span class="hljs-string">'John'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">30</span> }; <span class="hljs-comment">// an object</span>
<span class="hljs-keyword">let</span> myArray = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]; <span class="hljs-comment">// an array</span>
<span class="hljs-keyword">let</span> mySymbol = <span class="hljs-built_in">Symbol</span>(<span class="hljs-string">'foo'</span>); <span class="hljs-comment">// a symbol</span>
</code></pre><p>Mencari tau tipe data gunakan function <code>typeof</code>.</p>
<pre><code>typeof myNumber<span class="hljs-comment">;</span>
</code></pre><p>Mencari tau apa itu adalah array</p>
<pre><code>let a = [1,2,3];
a instanceof<span class="hljs-built_in"> array </span>// true
</code></pre><h2 id="operator">Operator</h2>
<p>Javascript Menyediakan beberapa tipe operator yang dapat membantu kita dalam melakukan berbagai macam operasi data. Operator adalah simbol yang menjadi representasi dari suatu kalkulasi. </p>
<p>Bebrapa tipe operator pada Javascript:</p>
<ul>
<li>Addition (+)</li>
<li>Subtraction (-)</li>
<li>Multiplication (*)</li>
<li>Division (/)</li>
<li>Modulus (%)</li>
</ul>
<pre><code><span class="hljs-keyword">let</span> <span class="hljs-attr">x</span> = <span class="hljs-number">5</span>;
<span class="hljs-keyword">let</span> <span class="hljs-attr">y</span> = <span class="hljs-number">10</span>;
<span class="hljs-keyword">let</span> <span class="hljs-attr">z</span> = x + y; // z equals <span class="hljs-number">15</span>
</code></pre><p>comparison operator di javascript:</p>
<ul>
<li>Equal to (==)</li>
<li>Not equal to (!=)</li>
<li>Strict equal to (===)</li>
<li>Strict not equal to (!==)</li>
<li>Greater than &#39;&gt;&#39;</li>
<li>Less than <code>&lt;</code></li>
<li>Greater than or equal to <code>&gt;=</code></li>
<li>Less than or equal to <code>&lt;=</code></li>
</ul>
<h2 id="expression">Expression</h2>
<pre><code><span class="hljs-keyword">let</span> <span class="hljs-attr">x</span> = <span class="hljs-number">5</span>
<span class="hljs-keyword">let</span> <span class="hljs-attr">y</span> = <span class="hljs-number">10</span> 

<span class="hljs-keyword">let</span> <span class="hljs-attr">z</span> = x + y 
<span class="hljs-keyword">let</span> <span class="hljs-attr">i</span> = (x * y) - x
</code></pre><p>Expression adalah kombinasi dari operator dan nilai, yang akan menghasilkan suatu nilai yang baru.</p>
<h2 id="if-statement">if statement</h2>
<p>If statement adalah fondasi kontrol struktur dalam pemrogramman yang dapat membantu kita dalam melakukan ekseskusi program. If statement digunakan untuk membuka suatu pilihan didalam algoritma, Jika hasil eksekusi adalah true maka akan diamnil jalan 1, jika hasil eksekusiadalah false maka diambil jalan terakhir. </p>
<p>Format dari if statement</p>
<pre><code>if (condition) {
    //<span class="hljs-built_in"> execute </span>prompt
}
</code></pre><p>If statement bekerja dengan cara memastikan apakah &quot;condition&quot; tersebut bernilai true atau tidak. Jika &quot;condition&quot; bernilai true maka akan di eksekusi pada blok if, Jika &quot;condition&quot; bernilai false maka akan di eksekusi pada blok lainnya. </p>
<p>Contoh format dengan blok lainnya.</p>
<pre><code>if (condition) {
 //<span class="hljs-built_in"> execute </span>prompt
}

else {
 //<span class="hljs-built_in"> execute </span>prompt
}
</code></pre><p>Jika &quot;condition&quot; adalah false maka blok &quot;else&quot; akan di eksekusi.</p>
<p>Pada if statement kita bisa menambahkan blok lagi untuk membuat sistem if statement yang lebih complex. </p>
<p>Contoh if statement yang lebih complex:</p>
<pre><code>if (condition) {
    //<span class="hljs-built_in"> execute </span>prompt
}

else<span class="hljs-built_in"> if </span>(condition02) {
    //<span class="hljs-built_in"> execute </span>prompt
}

else {

}
</code></pre><p>Didalam &quot;condition&quot; kita bisa menambahkan comparison agar bisa menjadi persyaratan true and false. </p>
<p>comparison operator di javascript:</p>
<ul>
<li>Equal to (==)</li>
<li>Not equal to (!=)</li>
<li>Strict equal to (===)</li>
<li>Strict not equal to (!==)</li>
<li>Greater than &#39;&gt;&#39;</li>
<li>Less than <code>&lt;</code></li>
<li>Greater than or equal to <code>&gt;=</code></li>
<li>Less than or equal to <code>&lt;=</code></li>
</ul>
<p>Setelah condition kita juga bisa mengatur agar ada dua &quot;condition&quot; yang harus dipenuhi agar bisa menjadi true. </p>
<p>Contoh logical operator untuk melakukan combinasi:</p>
<ul>
<li>&amp;&amp; : digunakan untuk menjadikan dua condition harus terpenuhi agar menghasilkan true. </li>
<li>|| : akah menghasilkan true jika salah satu dari 2 &quot;condition&quot; terpenuhi. </li>
<li>!  : akan merubah hasil nilai dari condition menjadi bentuk boolean yang sebaliknnya.</li>
</ul>
<p>Contoh logical operator not (!)</p>
<pre><code>x = <span class="hljs-literal">false</span>

<span class="hljs-keyword">if</span> (!x) {
    console.log(<span class="hljs-symbol">'X</span> adalah ' + x + <span class="hljs-symbol">'tetapi</span> menjadi <span class="hljs-literal">true</span> karena  !')
}

<span class="hljs-keyword">else</span> {
    console.log(<span class="hljs-symbol">'Ini</span> adalah laporan dari blok <span class="hljs-keyword">else</span>')
}
</code></pre><p>Kesimpulan:
If statement adalah sebuah fungsi yang dapat digunakan untuk membuat program menggambil suatu pilihan tertentu sesuai dengan hasil boolean yang dihasilkan oleh &quot;condition&quot;.</p>
<h2 id="loop">Loop</h2>
<p>Loops adalah komponent penting dalam program, dengan loop kita bisa membuat program itu selalu berjalan hingga akhirnya dimatikan. Ada beberapa tipe loop: for, while, dan do-while. Setiap tipe loop memiliki cara pengerjaannya sendiri-sendiri, tetapi mereka semua memiliki tujuan yang sama yaitu melakukan penggulanggan pada blok code. </p>
<p>Tipe loop yang paling sering digunakan adalah bentuk for loop. Yang terdiri dari tiga bagian:
Initialization, condition, dan increment. Contoh code:</p>
<pre><code>for (Initialization; condition; increment) {
    //<span class="hljs-built_in"> execute </span>prompt
}
</code></pre><p>Initialization adalah bagian dimana kita menentukan nilai awal ( initial value for loop counter ). Condition adalah persyaratan yang harus dipenuhi agar loop bisa bergerak. Bagian increment adalah tempat dimana kita menghitung sudah berapa banyak putaran pada loop. </p>
<p>contoh code for loop:</p>
<pre><code><span class="hljs-keyword">for</span> (let <span class="hljs-built_in">i</span> = <span class="hljs-number">1</span>; <span class="hljs-built_in">i</span> &lt;=<span class="hljs-number">5</span>; <span class="hljs-built_in">i</span>++){
    console.log(i)
}
</code></pre><p>Tipe loop selanjutnnya adalah while loop. While loop memiliki bentuk yang lebih simple yaitu hanya berisi condition yang spesifik saja. Contoh code:</p>
<pre><code>while (condition) {
    //<span class="hljs-built_in"> execute </span>prompt
}
</code></pre><p>Kita bisa membuat loop yang serupa dengan formloop diatas dengan cara:</p>
<pre><code>let <span class="hljs-selector-tag">i</span> = <span class="hljs-number">1</span> 

while (<span class="hljs-selector-tag">i</span> &lt;= <span class="hljs-number">5</span>){
    console.log(i)
    i++
}
</code></pre><p>Sedangkan bentuk loop terakhir yaitu do-while, yaitu dimana loop akan berjalan terlebih dahulu lalu akan dilakukan check pada condition, jika sesuai dengan condition maka loop akan dijalankan lagi. Bentuk do-while menyerupai while loop. </p>
<p>Format do-while </p>
<pre><code>do {
    //<span class="hljs-built_in"> execute </span>prompt
}
while (condition)
</code></pre><p>Contoh code do-while </p>
<pre><code><span class="hljs-keyword">let</span> i = <span class="hljs-number">1</span>;

<span class="hljs-keyword">do</span> {
  console.<span class="hljs-built_in">log</span>(i);
  i++;
} <span class="hljs-keyword">while</span> (i &lt;= <span class="hljs-number">5</span>);
</code></pre><h2 id="insert-variabel-to-string-masukan-variabel-">Insert variabel to string ( masukan variabel )</h2>
<p>back tick</p>
<p><code>String text ${expression}</code></p>
<p><a href="https://stackoverflow.com/questions/3304014/how-to-interpolate-variables-in-strings-in-javascript-without-concatenation">https://stackoverflow.com/questions/3304014/how-to-interpolate-variables-in-strings-in-javascript-without-concatenation</a></p>
<h2 id="reference-">Reference:</h2>
<ul>
<li><a href="https://www.golinuxcloud.com/javascript-if-not/">https://www.golinuxcloud.com/javascript-if-not/</a> </li>
<li><a href="https://www.w3schools.com/js/js_comparisons.asp">https://www.w3schools.com/js/js_comparisons.asp</a></li>
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