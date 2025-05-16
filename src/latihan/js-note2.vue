<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="array">Array</h1>
<p>Pada Javascript, array adalah sebuah object special yang dapat menyimpan nilai / value. Value tersebut bisa berbentuk berbagai macam, Termasuk adalah array itu sendiri, object, function dan lain-lain.</p>
<ul>
<li><p>contoh array:</p>
<pre><code>const myArray = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];
</code></pre></li>
<li><p>untuk menampilkan data di dalam array sesuai dengan index</p>
<pre><code><span class="hljs-attribute">const firstElement</span> = myArray[0];
</code></pre></li>
<li><p>atau menimpa data didalam Array
```
myArray[2] = 10;</p>
</li>
</ul>
<pre><code>
- menambahkan <span class="hljs-meta">data</span> ke <span class="hljs-keyword">bagian </span>akhir dari array
</code></pre><p>myArray.push(6);</p>
<pre><code>
## Tipe <span class="hljs-function"><span class="hljs-keyword">method</span> <span class="hljs-title">didalam</span> <span class="hljs-title">array</span></span>
</code></pre><p>push(), pop(), shift(), unshift(), splice(), concat(), slice(), join(), reverse(), sort(),</p>
<pre><code>
<span class="hljs-comment">## array of objects</span>
<span class="hljs-built_in">
array </span>of object termasuk dalam salah satu bentuk cara penyimpanan data ( relation data ) pada variabel. Yang dimana setiap element didalam<span class="hljs-built_in"> array </span>tersebut adalah object yang berisi propertie dan value. 

contoh code:
</code></pre><p>let students = [
  { name: &#39;Alice&#39;, age: 20, major: &#39;Computer Science&#39; },
  { name: &#39;Bob&#39;, age: 22, major: &#39;Mathematics&#39; },
  { name: &#39;Charlie&#39;, age: 21, major: &#39;Chemistry&#39; }
];</p>
<pre><code>
-<span class="ruby"> object adalah ini {}
</span>-<span class="ruby"> contoh properti, <span class="hljs-string">"name"</span>
</span>-<span class="ruby"> contoh value, <span class="hljs-string">"alice"</span>
</span>
Kita bisa akses setiap properti dari individu pada object dengan cara:

-<span class="ruby"> <span class="hljs-string">`students[0].name`</span>
</span>-<span class="ruby"> <span class="hljs-string">`students[0]['name']`</span>
</span>
Kita juga bisa mengakses semua properti pada array dengan loop:
</code></pre><p>students.forEach(function(student) {
  console.log(student.name + &#39; is &#39; + student.age + &#39; years old.&#39;);
});</p>
<pre><code>
Nilai didalam<span class="hljs-built_in"> array </span>of object bisa kita rubah dengan cara:
</code></pre><p>students[0].name = &#39;Budi&#39;</p>
<pre><code>

<span class="smali">**bentuk simple dari<span class="hljs-built_in"> array </span>of object**</span>
</code></pre><p>let dataDiri = {nama: &#39;budi&#39;, hobby: &#39;memasak&#39;}</p>
<p>dataDiri.nama // Untuk menampilkan value pada properti &quot;nama&quot;</p>
<pre><code>
<span class="hljs-comment">## map()</span>

Pada Javascript <span class="hljs-string">"array map()"</span> method dapat digunakan untuk membuat<span class="hljs-built_in"> array </span>baru dengan menambahkan function didalamnnya. <span class="hljs-string">"map()"</span> method adalah suatu function yang dapat menerima callback function sebagai argument. Callback function yang menjadi argument akan dipanggil pada setiap element didalam array, dan itu akan menghasilkan 'return' value yang akan menjadi<span class="hljs-built_in"> array </span>baru saat sudah selesai.

Contoh format dari map:
</code></pre><p>arr.map(callback(argument)) {
 return argument;
}</p>
<pre><code>
<span class="hljs-string">"map()"</span> method akan menghasilkan<span class="hljs-built_in"> array </span>baru yang berisi hasil dari pemmanggilan <span class="hljs-string">"callback"</span> function pada setiap element didalam original array. 

Sebagai contoh dari <span class="hljs-string">"map()"</span> kita bisa buat function yang akan meghasilkan semua element didalam<span class="hljs-built_in"> array </span>di kali dua:
</code></pre><p>const numbers = [1, 2, 3, 4, 5];</p>
<p>const squaredNumbers = numbers.map(function(number) {
  return number ** 2;
});</p>
<p>console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]</p>
<pre><code>
Pada contoh diatas ini, pada <span class="hljs-string">"map()"</span> method  variabel <span class="hljs-string">"number"</span> akan menggambil setiap element didalam<span class="hljs-built_in"> array </span>dan juga sebagai representasi mereka. Callback function akan memproses element yang diambil dan dipangkat dua. Sedangkan <span class="hljs-string">"map()"</span> method akan menghasilkan<span class="hljs-built_in"> array </span>baru dengan nilai yang sudah dimodifikasi.

Callback pada <span class="hljs-string">"map()"</span> method bisa kita tulis juga seperti ini:
</code></pre><p>const numbers = [1, 2, 3, 4, 5];</p>
<p>const squaredNumbers = numbers.map(number =&gt; number ** 2);</p>
<p>console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]</p>
<pre><code>
Sebagai tambahan <span class="hljs-string">"map()"</span> juga bisa digunakan pada<span class="hljs-built_in"> array </span>of object seperti ini:
</code></pre><p>const persons = [
  { name: &#39;Alice&#39;, age: 23 },
  { name: &#39;Bob&#39;, age: 37 },
  { name: &#39;Charlie&#39;, age: 19 },
];</p>
<p>const personNames = persons.map(function(person) {
  return person.name;
});</p>
<p>console.log(personNames); // Output: [&#39;Alice&#39;, &#39;Bob&#39;, &#39;Charlie&#39;]</p>
<pre><code>
## Fillter
</code></pre><p>let arrayUmur = [20, 18, 17, 16, 21, 23]</p>
<p>let pemilikKTP = arrayUmur.filter(function(param){ return param &gt;= 18  }  )</p>
<p>console.log(pemilikKTP)
```</p>
<h2 id="reference-">Reference:</h2>
<ul>
<li><p><a href="https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/">https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/</a></p>
</li>
<li><p><a href="https://www.w3schools.com/jsref/jsref_filter.asp">https://www.w3schools.com/jsref/jsref_filter.asp</a></p>
</li>
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