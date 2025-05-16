<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="java-fundamental">Java Fundamental</h1>
<p>disini akan merangkum mengenai point penting mendasar pada java.
menyelimuti var, tipe data, array, if statement, loop</p>
<hr>
<h3 id="variabel">Variabel</h3>
<p>Variabel adalah sebuah konsep dimana kita menyimpan data kedalam memory, dengan name address. Bisa diumpamakan menyimpan barang kedalam laci umum di perpustakaan, Dimana setiap laci memiliki nomor.</p>
<pre><code><span class="hljs-comment">// String: sequence of characters</span>
<span class="hljs-keyword">let</span> greeting = <span class="hljs-string">"Hello, World!"</span>;

<span class="hljs-comment">// Number: numeric data type</span>
<span class="hljs-keyword">let</span> age = <span class="hljs-number">25</span>;
<span class="hljs-keyword">let</span> price = <span class="hljs-number">99.99</span>;

<span class="hljs-comment">// BigInt: large integers beyond the safe integer limit for Numbers</span>
<span class="hljs-keyword">let</span> bigNumber = <span class="hljs-number">1234567890123456789012345678901234567890</span>n;

<span class="hljs-comment">// Boolean: true or false</span>
<span class="hljs-keyword">let</span> isAvailable = <span class="hljs-literal">true</span>;

<span class="hljs-comment">// Undefined: a variable that has not been assigned a value</span>
<span class="hljs-keyword">let</span> user;

<span class="hljs-comment">// Null: a variable with a null value</span>
<span class="hljs-keyword">let</span> empty = <span class="hljs-literal">null</span>;

<span class="hljs-comment">// Symbol: a unique and immutable primitive value</span>
<span class="hljs-keyword">let</span> sym = <span class="hljs-built_in">Symbol</span>(<span class="hljs-string">'description'</span>);

<span class="hljs-comment">// Object: key-value pairs of collection of data</span>
<span class="hljs-keyword">let</span> person = {
  <span class="hljs-attr">name</span>: <span class="hljs-string">"Alice"</span>,
  <span class="hljs-attr">age</span>: <span class="hljs-number">30</span>
};

<span class="hljs-comment">// Array: list-like objects</span>
<span class="hljs-keyword">let</span> colors = [<span class="hljs-string">"red"</span>, <span class="hljs-string">"green"</span>, <span class="hljs-string">"blue"</span>];

<span class="hljs-comment">// Function: block of code designed to perform a particular task</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">greet</span>(<span class="hljs-params">name</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello "</span> + name + <span class="hljs-string">"!"</span>;
}
</code></pre><blockquote>
<p>contoh mengubah value didalam variabel </p>
</blockquote>
<pre><code>int myNumber = <span class="hljs-number">10</span>; <span class="hljs-comment">// Initial declaration and assignment</span>
myNumber = <span class="hljs-number">15</span>;     <span class="hljs-comment">// Changing the value of the variable</span>
</code></pre><hr>
<h3 id="string">String</h3>
<pre><code><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> Main {
  <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> main(<span class="hljs-keyword">String</span>[] args) {
    <span class="hljs-keyword">String</span> name = <span class="hljs-string">"John"</span>;
    name = <span class="hljs-string">"Bukan John"</span>; <span class="hljs-comment">// menimpa data sebelumnya</span>
    System.out.<span class="hljs-built_in">println</span>(<span class="hljs-string">"Hallo"</span> + name); <span class="hljs-comment">// text dan variabel</span>
  }
}
</code></pre><hr>
<h3 id="integer">integer</h3>
<pre><code><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Main</span> {
  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span>(<span class="hljs-params">String[] args</span>) </span>{
    <span class="hljs-keyword">int</span> myNum = <span class="hljs-number">100000</span>;
    System.<span class="hljs-keyword">out</span>.println(myNum);
  }
}
</code></pre><hr>
<h3 id="switch">Switch</h3>
<pre><code><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Main</span> {
  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span>(<span class="hljs-params">String[] args</span>) </span>{
    <span class="hljs-keyword">int</span> day = <span class="hljs-number">4</span>;
    <span class="hljs-keyword">switch</span> (day) {
      <span class="hljs-keyword">case</span> <span class="hljs-number">6</span>:
        System.<span class="hljs-keyword">out</span>.println(<span class="hljs-string">"Today is Saturday"</span>);
        <span class="hljs-keyword">break</span>;
      <span class="hljs-keyword">case</span> <span class="hljs-number">7</span>:
        System.<span class="hljs-keyword">out</span>.println(<span class="hljs-string">"Today is Sunday"</span>);
        <span class="hljs-keyword">break</span>;
      <span class="hljs-keyword">default</span>:
        System.<span class="hljs-keyword">out</span>.println(<span class="hljs-string">"Looking forward to the Weekend"</span>);
    }
  }
}
</code></pre><hr>
<h3 id="datetime-current-time">Datetime current time</h3>
<pre><code><span class="hljs-meta"><span class="hljs-meta-keyword">import</span> java.time.LocalDateTime;</span>  <span class="hljs-comment">// import the LocalDateTime class</span>

<span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Main</span> </span>{
  <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> main(String[] args) {
    LocalDateTime myObj = LocalDateTime.now();
    System.out.println(myObj);
  }
}
</code></pre><hr>
<h3 id="float">float</h3>
<pre><code><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Main</span> {
  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span>(<span class="hljs-params">String[] args</span>) </span>{
    <span class="hljs-keyword">float</span> myNum = <span class="hljs-number">5.75</span>f;
    System.<span class="hljs-keyword">out</span>.println(myNum);  
  }
}
</code></pre><hr>
<h3 id="array">Array</h3>
<pre><code>public class Main {
 <span class="hljs-keyword"> public</span><span class="hljs-keyword"> static</span> void main(String[] args) {
    String[] cars = {<span class="hljs-string">"Volvo"</span>, <span class="hljs-string">"BMW"</span>, <span class="hljs-string">"Ford"</span>, <span class="hljs-string">"Mazda"</span>};
    // Create<span class="hljs-built_in"> array </span>cars
    cars[0] = <span class="hljs-string">"Opel"</span>;
    // overwrite index 0 from arrays cars
    System.out.println(cars[0]);

    for (String i<span class="hljs-keyword"> :</span> cars) {
      System.out.println(i);
    }
    // print each item on<span class="hljs-built_in"> array
</span>  }
}
</code></pre><hr>
<h3 id="boolean">Boolean</h3>
<pre><code><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Main</span> {
  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span>(<span class="hljs-params">String[] args</span>) </span>{
    boolean isJavaFun = <span class="hljs-literal">true</span>;
    boolean isFishTasty = <span class="hljs-literal">false</span>;
    System.<span class="hljs-keyword">out</span>.println(isJavaFun);
    System.<span class="hljs-keyword">out</span>.println(isFishTasty);

    System.<span class="hljs-keyword">out</span>.println(isJavaFun == <span class="hljs-literal">true</span>);
    <span class="hljs-comment">// simple if statement</span>
  }
}
</code></pre><hr>
<h3 id="comment">comment</h3>
<pre><code><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Main</span> {
  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span>(<span class="hljs-params">String[] args</span>) </span>{
    <span class="hljs-comment">// This is single line a comment</span>

    <span class="hljs-comment">/* The code below will print the words Hello World
    to the screen, and it is amazing */</span>

    System.<span class="hljs-keyword">out</span>.println(<span class="hljs-string">"Hello World"</span>);
  }
}
</code></pre><hr>
<h3 id="expression">Expression</h3>
<p>Ekspresi adalah sebuah kondisi kombinasi dari variabel, opertaor, dan juga method yang akan menghasilkan sebuah nilai. Contoh ekspresi:</p>
<ul>
<li>Perhitungan Matematika</li>
<li>Perbandingan (co: x &gt; 10 )</li>
<li>Memangil method (co: <code>Math.sqrt(16)</code>)</li>
<li>Operasi logika (co: <code>isTrue &amp;&amp; isFalse</code>)</li>
</ul>
<p>Contoh ekpresi sederhana:</p>
<pre><code><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">ContohEkspresi</span> {
    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span>(<span class="hljs-params">String[] args</span>) </span>{
        <span class="hljs-keyword">int</span> angka = <span class="hljs-number">10</span>; <span class="hljs-comment">// Deklarasi variabel</span>
        <span class="hljs-keyword">int</span> hasil = angka * <span class="hljs-number">2</span> + <span class="hljs-number">5</span>; <span class="hljs-comment">// Ekspresi matematika</span>
        System.<span class="hljs-keyword">out</span>.println(<span class="hljs-string">"Hasil ekspresi: "</span> + hasil); <span class="hljs-comment">// Ekspresi dengan method</span>
    }
}
</code></pre><p>Breakdown:</p>
<ul>
<li>Public class ContohEkspresi - adalah nama kelas utama, dan file JS harus sesuai dengan itu</li>
<li>Public static void main(String[] args) - Titik mulai eksekusi program</li>
<li>int hasil = angka * 2 + 5; - adalah bentuk ekspresi</li>
<li>System.out.println(&#39;hasil ekspresi: &#39; + hasil); - adalah ekspresi dengan method</li>
</ul>
<p>Contoh code ekpresi lain:</p>
<pre><code><span class="hljs-keyword">boolean</span> isGenap = (hasil % <span class="hljs-number">2</span> == <span class="hljs-number">0</span>); <span class="hljs-comment">// Ekspresi perbandingan (hasil: true/false)</span>
<span class="hljs-keyword">boolean</span> <span class="hljs-built_in">isValid</span> = (angka &gt; <span class="hljs-number">0</span> &amp;&amp; hasil &lt; <span class="hljs-number">30</span>); <span class="hljs-comment">// Ekspresi logika (AND)</span>
<span class="hljs-keyword">double</span> akar = Math.<span class="hljs-built_in">sqrt</span>(hasil); <span class="hljs-comment">// Ekspresi dengan method (akar kuadrat)</span>
</code></pre><hr>
<h3 id="if-statement">if statement</h3>
<pre><code><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Main</span> {
  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span>(<span class="hljs-params">String[] args</span>) </span>{
    <span class="hljs-keyword">int</span> time = <span class="hljs-number">22</span>;
    <span class="hljs-keyword">if</span> (time &lt; <span class="hljs-number">10</span>) {
      System.<span class="hljs-keyword">out</span>.println(<span class="hljs-string">"Good morning."</span>);
    } <span class="hljs-function"><span class="hljs-keyword">else</span> <span class="hljs-title">if</span> (<span class="hljs-params">time &lt; <span class="hljs-number">18</span></span>) </span>{
      System.<span class="hljs-keyword">out</span>.println(<span class="hljs-string">"Good day."</span>);
    }  <span class="hljs-keyword">else</span> {
      System.<span class="hljs-keyword">out</span>.println(<span class="hljs-string">"Good evening."</span>);
    }
  }
}
</code></pre><hr>
<h3 id="loop">loop</h3>
<ul>
<li>while loop </li>
</ul>
<pre><code><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Main</span> {
  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span>(<span class="hljs-params">String[] args</span>) </span>{
    <span class="hljs-keyword">int</span> i = <span class="hljs-number">0</span>;
    <span class="hljs-keyword">while</span> (i &lt; <span class="hljs-number">5</span>) {
      System.<span class="hljs-keyword">out</span>.println(i);
      i++;
    }  
  }
}
</code></pre><ul>
<li><p>For loop 
```
public class Main {
public static void main(String[] args) {
  for (int i = 0; i &lt; 5; i++) {</p>
<pre><code><span class="hljs-selector-tag">System</span><span class="hljs-selector-class">.out</span><span class="hljs-selector-class">.println</span>(<span class="hljs-selector-tag">i</span>);
</code></pre><p>  String[] cars = {&quot;Volvo&quot;, &quot;BMW&quot;, &quot;Ford&quot;, &quot;Mazda&quot;};
  for (String i : cars) {</p>
<pre><code><span class="hljs-selector-tag">System</span><span class="hljs-selector-class">.out</span><span class="hljs-selector-class">.println</span>(<span class="hljs-selector-tag">i</span>);
</code></pre><p>  }<br>}
}</p>
</li>
</ul>
<pre><code>
- <span class="hljs-built_in">break</span> a <span class="hljs-built_in">loop</span>
</code></pre><p>public class Main {
  public static void main(String[] args) {
    for (int i = 0; i &lt; 10; i++) {
      if (i == 4) {
        break;
      }
      System.out.println(i);
    }<br>  }
}</p>
<pre><code>
- <span class="hljs-built_in">continue</span> a <span class="hljs-built_in">loop</span>
</code></pre><p>public class Main {
  public static void main(String[] args) {
    for (int i = 0; i &lt; 10; i++) {
      if (i == 4) {
        continue;
      }
      System.out.println(i);
    }<br>  }
}
```</p>
<hr>
<h1 id="reference">Reference</h1>
<ul>
<li><a href="https://www.w3schools.com/java/java_examples.asp">https://www.w3schools.com/java/java_examples.asp</a> (fundamental command) </li>
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