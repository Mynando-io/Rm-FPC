<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="react-js">React Js</h1>
<p>ReactJs adalah salah satu open-source library Javascript yang digunakan untuk membuat user interface (UI) pada halaman website dan aplikasi mobile. ReactJS dibuat dan dibangun oleh Facebook dan ReactJS cukup populer di antara developer.</p>
<p>beberapa contoh pengguna react adalah Netflix, Airbnb, dan uber. </p>
<p>ReactJS Library menggunakan bentuk virtual dari DOM (Document Object Model) yang membantu kita untuk membuat representasi ringan dari DOM asli dan secara tidak langsung mengantikan DOM manual, untuk menjadi proses update UI lebih efisien.</p>
<p>Beberapa Fitur Populer dari ReactJs:</p>
<ul>
<li>JSX: adalah syntax, untuk menambahkan kode html melalui perintah Javascript</li>
<li>Virtual DOM: Reperentasi dari DOM yang lebih ringgan, agar Update UI lebih efisien.</li>
<li>Component-based Architecture: Membantu kita untuk menggunakan komponent UI yang sudah ada (Reusable). </li>
<li>One-way data Binding: menyajikan jalan simple dan efisient untuk mengatur data di dalam aplikasi</li>
<li>Declarative Programming: Memperbolehkan kita sebagai developer untuk mendeskripsikan seperti apa UI itu bekerja</li>
</ul>
<p>ReactJS dapat dikombinasi dengan banyak library, seperti Next.js dan lain-lain. Yang menjadikan reacjs Menjadi lebih populer.</p>
<h2 id="jquery-atau-react-">Jquery atau react?</h2>
<ul>
<li>Menurut chatgpt</li>
</ul>
<p>Tidak harus mempeljarai Jquery sebelum React. Jquery digunakan untuk mengatur DOM dan react juga bisa mengatur DOM oleh karena itu pelajari saja versi teknologi yang lebih baru.</p>
<h3 id="membuat-component">membuat component</h3>
<p><strong>komponent React</strong> adalah suatu blok code dasar dari aplikasi React. komponen adalah sebuah potongan kode yang dapat kita gunakan kemabali yang mewakili bagian dari UI. komponen dapat berupa sebuah element sederhana, atau bentuk yang lebih complex.</p>
<p>Manfaat komponen react:</p>
<ul>
<li>Modularitas: komponen React adalah suatu bagian kecil dari keseluruhan UI. Ini akan sangat memudahkan kita untuk melakukan pemeliharaan code kedepannya.</li>
<li>Dapat digunakan kembali, sama seperti konsep function</li>
<li>Enkapsulasi: semua variabel didalam komponen, hanya bisa diakses oleh komponen tersebut, dan tidak akan mempengaruhi komponen lain.</li>
</ul>
<p>Terdapat dua bentuk componentL:</p>
<ul>
<li>function component</li>
<li>Class component</li>
</ul>
<h2 id="variabel-jsx">Variabel JSX</h2>
<pre><code><span class="hljs-keyword">const</span> buttonText = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span>&gt;</span>Click Me!<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">MyComponent</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      {buttonText}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
}
</code></pre><h2 id="comment-pada-jsx">comment pada JSX</h2>
<pre><code><span class="hljs-comment">// Ini adalah komentar satu baris tentang komponen</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">MyComponent</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      {/* Ini adalah komentar multi-baris
          tentang isi komponen */}
      <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hello, World!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
}
</code></pre><h1 id="aturan-jsx">aturan JSX</h1>
<ul>
<li>untuk beberapa attribute HTML, kita harus menggunakan &quot;camelCase&quot; sebagai penulisan. Contoh: <code>onClick</code>, <code>onChange</code></li>
<li>untuk penamaan attribute class adalah <code>className</code></li>
<li>untuk single tag, gunakan seperti ini <code>&lt;img src=&quot;#&quot; /&gt;</code> harus memiliki penutup akhir. <code>&lt;br /&gt;</code></li>
<li>penulisan inline css <code>Teks merah dengan ukuran 20px&lt;/p&gt;</code></li>
<li>penulisan jika didalam JSX, <code>&lt;button onClick={() =&gt; alert(&quot;Hello, World!&quot;)}&gt;</code> perjelas informasi yang kita berikan itu string. </li>
<li>perhatikan dalam membuat JSX, harus terdapat container!, jika didalam JSX terdapat banyak eleemnt.</li>
</ul>
<p>src: <a href="https://legacy.reactjs.org/docs/introducing-jsx.html">https://legacy.reactjs.org/docs/introducing-jsx.html</a></p>
<h2 id="react-jsx">React JSX</h2>
<p>Fitur untuk menulis kode HTML didalam Javascript. 
Ada beberapa Persyaratan untuk JSX ini: </p>
<h2 id="jsx-javascript-xml-">JSX (Javascript XML)</h2>
<p>adalah sebuah interaksi antara Javascript dengan HTML. dimana kita bisa menambahkan code Javascript dengan HTMl secara bersamaan.</p>
<p>contoh:</p>
<pre><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> </span><span class="hljs-template-variable">{1 + 2}</span><span class="xml"> <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
</code></pre><p>hasilnya adalah 3 </p>
<h2 id="state">State</h2>
<p>state adalah bentuk konsep dimana kita bisa menyimpan suatu data, dan data tersebut bisa kita panggil, dan ubah kapan saja. konsep <code>state</code> itu sama seperti <code>property</code> pada class. </p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">constructor</span><span class="hljs-params">(props)</span><span class="hljs-comment">{
        super(props)
        this.state = {count: 0}</span>
    }</span>
</code></pre><h2 id="event">Event</h2>
<p>Event didalam React adalah suatu fungsi dimana user bisa melakukan interaksi dengan component yang kita buat. untuk melakukannya kita akan menggunakan <code>method</code> untuk menerima interaksi. </p>
<pre><code> <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {this.handleClick()}}&gt; + <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
</code></pre><h2 id="akses-state">akses state</h2>
<p>menampilkkan state kedalam JSX. </p>
<pre><code> <span class="hljs-variable">&lt;h1&gt;</span>{this.<span class="hljs-keyword">state</span>.count}&lt;/h1&gt;
</code></pre><h2 id="perbarui-state">perbarui state</h2>
<pre><code>this.<span class="hljs-built_in">set</span>State({count : this.<span class="hljs-keyword">state</span>.count + <span class="hljs-number">1</span>})
</code></pre><ul>
<li>dimana <code>setState</code> adalah suatu method, yang bisa kita gunakan untuk melakukan perubahan state. </li>
<li><code>count</code> adalah state yang dipilih </li>
<li><code>this.state.count</code> adalah nilai didalam state, dan cara memangil mereka </li>
<li>hasil dari aritmatika tersebut, akan disimpan ke <code>count</code> state</li>
</ul>
<hr>
<h1 id="bagian-2">Bagian 2</h1>
<hr>
<h2 id="membuat-style-inline-css-">Membuat Style ( Inline CSS )</h2>
<pre><code>&lt;p  style={styles.colorP}&gt; Ini berwarna merah &lt;/p&gt;

// Styles bisa kita tempatkan diluar dari class, atau <span class="hljs-keyword">function</span>.
<span class="hljs-keyword">let</span> styles = { 
colorP: {color: <span class="hljs-string">'red'</span>, fontSize: <span class="hljs-string">'40px'</span>},
colorH1: {color: <span class="hljs-string">'red'</span>, fontSize: <span class="hljs-string">'40px'</span>},
}
</code></pre><h2 id="membuat-banyak-component">membuat banyak component</h2>
<p><a href="../code/jsPro/membuat-banyak-component">Source Code</a></p>
<h2 id="method-map-">Method map()</h2>
<pre><code>render(){
        <span class="hljs-keyword">let</span> abc = [{<span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>:<span class="hljs-string">'appel'</span>, <span class="hljs-attr">completed</span>:<span class="hljs-literal">false</span>},
    {<span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>:<span class="hljs-string">'manggo'</span>, <span class="hljs-attr">completed</span>:<span class="hljs-literal">false</span>},
    {<span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>:<span class="hljs-string">'banana'</span>, <span class="hljs-attr">completed</span>:<span class="hljs-literal">false</span>},]

        <span class="hljs-keyword">return</span>(
            <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                {abc.map((item) =&gt; {
                    return(<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{item.name}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>)
                })}
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
        )
    }
</code></pre><h2 id="pemanggilan-jsx">Pemanggilan JSX</h2>
<p>terdapat dua cara pemanggilan JSX:</p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">App</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">let</span> abc = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> Saya Adalah JSX Variabel<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Acc</span>(<span class="hljs-params"></span>)</span>{ <span class="hljs-comment">// untuk render Element JSX wajib huruf besar pada awalan</span>
        <span class="hljs-keyword">return</span>  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span> Saya adalah JSX Function<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span></span>
    }

    <span class="hljs-keyword">return</span>(
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            {abc}
            <span class="hljs-tag">&lt;<span class="hljs-name">Acc</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
}
</code></pre><p>Aturan diatas akan berlaku jika component memiliki bentuk function. </p>
<p>jika component memiliki bentuk class maka cara pemanggilan akan seperti ini: <code>{this.Acc()}</code></p>
<p>method yang dipanggil JSX, harus huruf besar pada awalan. </p>
<h2 id="-statename-">{ stateName ? }</h2>
<pre><code><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">PokeDetail</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
    <span class="hljs-keyword">constructor</span>(props){
        <span class="hljs-keyword">super</span>(props)
        <span class="hljs-keyword">this</span>.state = {<span class="hljs-attr">ch</span>: <span class="hljs-literal">true</span>}
    }

    Acc(){ <span class="hljs-comment">// untuk render Element JSX wajib huruf besar pada awalan</span>
        <span class="hljs-keyword">let</span> abc = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> Saya Adalah JSX Variabel<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
        <span class="hljs-keyword">return</span>  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span> Saya adalah JSX Function<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span></span>
    }

    render(){
        <span class="hljs-keyword">return</span>(
            <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                {this.state.ch? this.Acc() : <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>hi<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span> }
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
        )
    }
}
</code></pre><p>Ini adalah konep sederhana, dimana kita menempatkan dua element, dan salah satu element akan di render jika nilai <code>this.state.ch</code> adalah <code>true</code>. </p>
<p>contoh diatas, yang akan dirender adalaj <code>this.Acc()</code></p>
<hr>
<h1 id="bagian-code">Bagian code</h1>
<hr>
<h2 id="cheatsheet">Cheatsheet</h2>
<h3 id="menambahkan-variabel-jsx">Menambahkan variabel JSX</h3>
<p><code>const CSX = &lt;p&gt; Ini adalah p &lt;/p&gt;;</code>
atau 
<code>const csx = (&lt;ul&gt; &lt;li&gt;ini &lt;/li&gt;  &lt;li&gt;ini &lt;/li&gt;   &lt;/ul&gt;  )</code></p>
<h3 id="menambahkan-comment">Menambahkan Comment</h3>
<p><code>const csx = (&lt;ul&gt; &lt;li&gt;ini &lt;/li&gt; {/*Ini komment*/}  &lt;li&gt;ini &lt;/li&gt;   &lt;/ul&gt;  )</code></p>
<p>Ref: <a href="https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-add-comments-in-jsx/301376">https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-add-comments-in-jsx/301376</a></p>
<h3 id="membuat-component">membuat component</h3>
<p><strong>komponent React</strong> adalah suatu blok code dasar dari aplikasi React. komponen adalah sebuah potongan kode yang dapat kita gunakan kemabali yang mewakili bagian dari UI. komponen dapat berupa sebuah element sederhana, atau bentuk yang lebih complex. </p>
<p>Manfaat komponen react: </p>
<ul>
<li>Modularitas: komponen React adalah suatu bagian kecil dari keseluruhan UI. Ini akan sangat memudahkan kita untuk melakukan pemeliharaan code kedepannya. </li>
<li>Dapat digunakan kembali, sama seperti konsep function </li>
<li>Enkapsulasi: semua variabel didalam komponen, hanya bisa diakses oleh komponen tersebut, dan tidak akan mempengaruhi komponen lain. </li>
</ul>
<p>Terdapat dua bentuk componentL:</p>
<ul>
<li>function component </li>
<li>Class component</li>
</ul>
<h3 id="menimpa-element-lama-render">Menimpa element lama | Render</h3>
<p>Menimpa element lama dengan element dari react </p>
<pre><code><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> ReactDOM <span class="hljs-keyword">from</span> <span class="hljs-string">'react-dom'</span>;

<span class="hljs-keyword">const</span> element = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hello, world!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span></span>;

ReactDOM.render(element, <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">'root'</span>));
</code></pre><h3 id="penempatan-dari-jsx">Penempatan dari JSX</h3>
<p>JSX hanya ditempatkan pada bagian &quot;return&quot;.</p>
<p>atau jika ingin membuat code Javascript, maka mereka harus tetap berada pada bagian method &quot;render().&quot;</p>
<pre><code>
<span class="hljs-comment">// Import React from ''</span>
<span class="hljs-keyword">import</span> <span class="hljs-type">React</span> from <span class="hljs-symbol">'reac</span>t';

let text = <span class="hljs-string">"Halo dunia ini"</span>

<span class="hljs-comment">// lakukan inheritance dari component</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
  render () {
    <span class="hljs-keyword">return</span> (
      &lt;h1&gt; {text} &lt;/h1&gt;
    );
  }
}

export <span class="hljs-keyword">default</span> <span class="hljs-type">App</span>;
</code></pre><p>untuk melakukan export code Javascript kedalam JSX, bisa dilakukan dengan cara tersebut. aturan variabel tetap pada method render().</p>
<pre><code>{ namaVariabel }
</code></pre><h3 id="mengatur-style-dari-jsx-menambahkan-class">mengatur style dari JSX | Menambahkan class</h3>
<pre><code><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">MyComponent</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"my-class"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hello, world!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This is my component.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
}
</code></pre><p>Penggunaan &quot;className&quot; adalah bentuk reserved dari &quot;class&quot; attribute pada html. </p>
<p>pada render JSX hanya diperbolehkan untuk mengirim satu element.
<strong>tidak boleh ada banyak container!</strong>.</p>
<h3 id="untuk-tag-element-yang-tidak-memiliki-kontent-satu-tag">Untuk tag element yang tidak memiliki kontent | satu tag</h3>
<pre><code><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">MyComponent</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"my-class"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hello, world!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span> 
      <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This is my component.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
}
</code></pre><p>yang awalnya seperti ini <code>&lt;br&gt;</code> kita tulis menjadi <code>&lt;br /&gt;</code></p>
<h3 id="contoh-lain-dengan-class">Contoh lain dengan class</h3>
<pre><code>
<span class="hljs-comment">// Import React from ''</span>
<span class="hljs-keyword">import</span> <span class="hljs-type">React</span> from <span class="hljs-symbol">'reac</span>t';

<span class="hljs-comment">// lakukan inheritance dari component</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
  render () {
    <span class="hljs-keyword">return</span> (
      &lt;h1&gt;<span class="hljs-type">React</span> <span class="hljs-type">Berjalan</span>&lt;/h1&gt;
    );
  }
}

export <span class="hljs-keyword">default</span> <span class="hljs-type">App</span>;
</code></pre><h3 id="menulis-komentar-pada-jsx">Menulis komentar pada JSX</h3>
<pre><code>{<span class="hljs-comment">/* Ini adalah Komentar  */</span>}
</code></pre><h3 id="memasukan-attribute-dom-kedalam-jsx">Memasukan attribute DOM kedalam JSX</h3>
<pre><code class="lang-Js"><span class="hljs-keyword">import</span> <span class="hljs-type">React</span> from <span class="hljs-symbol">'reac</span>t';

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{

render(){
    <span class="hljs-keyword">return</span> (

        &lt;div&gt; 

            &lt;h1&gt;test button&lt;/h1&gt;

            &lt;button onClick={()=&gt; {console.log(<span class="hljs-symbol">'halo</span> terminal')}}&gt; click me! &lt;/button&gt;


        &lt;/div&gt;
            )
        }
}
</code></pre>
<h3 id="tool-pada-react">Tool pada React</h3>
<ul>
<li><p>event = Adalah bentuk interaksi dari JSX kepada user. ini memiliki contoh seperti interaksi <code>onClick()</code> pada script.</p>
</li>
<li><p>state = state adalah nilai yang dapat kita ubah berdasarkan adaannya tindakan dari user.</p>
</li>
</ul>
<p>contoh deklarasi state.</p>
<pre><code class="lang-Js">\\ Class React.Component {

<span class="hljs-keyword">constructor</span>(props){
    <span class="hljs-keyword">super</span>(props);
    <span class="hljs-keyword">this</span>.state = {<span class="hljs-attr">name</span>:<span class="hljs-string">'Nama Ku'</span>}
                }

}
</code></pre>
<p><strong>Contoh deklarasi state, didalam JSX</strong></p>
<pre><code class="lang-Js"><span class="hljs-comment">// Import React from ''</span>
<span class="hljs-keyword">import</span> <span class="hljs-type">React</span> from <span class="hljs-symbol">'reac</span>t';

<span class="hljs-comment">// lakukan inheritance dari component</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{


constructor(props){
    <span class="hljs-keyword">super</span>(props);
    <span class="hljs-keyword">this</span>.state = {name:<span class="hljs-symbol">'Nama</span> <span class="hljs-type">Ku</span>'}
    }

  render () {
    <span class="hljs-keyword">return</span> (
      &lt;h1&gt;<span class="hljs-type">Selamat</span> <span class="hljs-type">Datang</span> {<span class="hljs-keyword">this</span>.state.name}!&lt;/h1&gt;
        );
  }
}

export <span class="hljs-keyword">default</span> <span class="hljs-type">App</span>;
</code></pre>
<hr>
<h1 id="life-cycle">Life-Cycle</h1>
<hr>
<pre><code class="lang-Js"><span class="hljs-keyword">import</span> React, { useState, useEffect } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Counter</span>(<span class="hljs-params">{setGCount, gCount}</span>) </span>{
  <span class="hljs-keyword">const</span> [count, setCount] = useState(<span class="hljs-number">0</span>);

  <span class="hljs-keyword">const</span> increment = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    setCount(count + <span class="hljs-number">1</span>);
  };

  <span class="hljs-keyword">const</span> decrement = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    setCount(count - <span class="hljs-number">1</span>);
  };

  <span class="hljs-comment">// Lifecycle methods</span>
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">componentDidMount</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Component Counter() mounted!'</span>); <span class="hljs-comment">// Logs when the component is inserted into the DOM</span>
  }

  useEffect(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
      setGCount(gCount + <span class="hljs-number">1</span>)
       <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Nilai Count :  <span class="hljs-subst">${count}</span>`</span>)
  }, [count]);

  <span class="hljs-comment">// ============================</span>

  componentDidMount()

  <span class="hljs-comment">// ===========================</span>

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Count: {count}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{increment}</span>&gt;</span>Increment<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{decrement}</span>&gt;</span>Decrement<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
}


<span class="hljs-comment">// ======================== hit() =============</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Hit</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">const</span> [count, setCount] = useState(<span class="hljs-number">0</span>);

  <span class="hljs-keyword">const</span> increment = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    setCount(count + <span class="hljs-number">1</span>);
  };

  <span class="hljs-keyword">const</span> decrement = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    setCount(count - <span class="hljs-number">1</span>);
  };

  <span class="hljs-comment">// Lifecycle methods</span>
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">componentDidMount</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Component Hit() mounted!'</span>); <span class="hljs-comment">// Logs when the component is inserted into the DOM</span>
  }

  useEffect(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
       <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Nilai Count :  <span class="hljs-subst">${count}</span>`</span>)
  }, [count]);


  <span class="hljs-comment">// ============================</span>

  componentDidMount()

  <span class="hljs-comment">// ===========================</span>

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Hit: {count}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{increment}</span>&gt;</span>Increment<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{decrement}</span>&gt;</span>Decrement<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
}

<span class="hljs-comment">// ====================== App() =============</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">App</span>(<span class="hljs-params"></span>)</span>{

<span class="hljs-keyword">let</span> [gCount, setGCount] = useState(<span class="hljs-number">0</span>)
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">`gCount main container : <span class="hljs-subst">${gCount}</span>`</span>)
<span class="hljs-comment">// ========= Jika diatas dijalankan maka terjadi re-render ======</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">componentWillUnmount</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Component unmounted!'</span>); <span class="hljs-comment">// Logs before the component is removed from the DOM</span>
  }

  componentWillUnmount()

<span class="hljs-keyword">return</span>(
&lt;&gt;

&lt;Counter setGCount={setGCount} gCount={gCount}/&gt;

&lt;h1&gt; ============ H1 ============ &lt;/h1&gt;

&lt;Hit /&gt;
&lt;/&gt;
)
}

export default App;
</code></pre>
<p>Terdapat 3 fase state:</p>
<ul>
<li><strong>Mounting</strong>
  Load Component dalam website. </li>
<li><strong>Updating</strong>
  Lakukan update berdasarkan informasi state.</li>
<li><strong>UnMounting</strong>
  Unload component, berpindah component.</li>
</ul>
<hr>
<h1 id="use-memo">Use-Memo</h1>
<hr>
<pre><code class="lang-Js"><span class="hljs-keyword">import</span> { View, Button, Text } <span class="hljs-keyword">from</span> <span class="hljs-string">'react-native'</span>;
<span class="hljs-keyword">import</span> { useState, useMemo } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Home</span>(<span class="hljs-params"></span>)</span>{

  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Component Home() telah di render`</span>)

  <span class="hljs-keyword">return</span>(
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">App</span>/&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span></span>
  )
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">App</span>(<span class="hljs-params"></span>)</span>{
  <span class="hljs-keyword">let</span> [count, setCount] = useState(<span class="hljs-number">0</span>)
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Component App telah terpangil (Re-Render)`</span>)
  <span class="hljs-keyword">const</span> ItemOr = useMemo(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> Item(count), [count]); <span class="hljs-comment">// ===== Gunakan ini agar tidak perlu re-render =======</span>
  <span class="hljs-comment">// const ItemOr = useMemo(() =&gt; Item(), []) bisa seperti ini juga!</span>

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Text</span>&gt;</span>This is Counter App<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Text</span>&gt;</span>Count : ${count}<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onPress</span>=<span class="hljs-string">{()</span> =&gt;</span> setCount(count+1)} title="Count Button"/&gt;
      {ItemOr}
    <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>
  )
}

function Item(count){
  console.log(`Component count dikirm : ${count}`)
  console.log(`Component Item telah terpangil (Re-Render)`)
  return(
    <span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Text</span>&gt;</span>This Content From Item : {count}<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>
  )
}


export default Home</span>
</code></pre>
<h3 id="usememo">useMemo</h3>
<p>adalah sebuah untuk react &quot;Hook&quot;, dimana ini sedikit menyerupai &quot;Event Listener&quot;. Maka Component hanya akan dijalankan jika terjadi perubahan pada state khusus. </p>
<p>Ref: <a href="https://www.w3schools.com/react/react_usememo.asp">https://www.w3schools.com/react/react_usememo.asp</a></p>
<p>Contoh kasar: <a href="https://www.joshwcomeau.com/react/why-react-re-renders/">https://www.joshwcomeau.com/react/why-react-re-renders/</a></p>
<!-- 
Todo List:


- buat instalasi react local computer


-->
<h2 id="catatan-tambahan">Catatan tambahan</h2>
<ul>
<li>
  <RouterLink to="/react-note1" class="LFT-Item"> 
    Membuat comoponent sederhana
    </RouterLink>
</li>
<li>
  <RouterLink to="/react-note2" class="LFT-Item"> 
    Membuat banyak content
    </RouterLink>
</li>
<li>
  <RouterLink to="/react-note3" class="LFT-Item"> 
   Membuat element interaktive
    </RouterLink>
</li>
<li>
  <RouterLink to="/react-note4" class="LFT-Item"> 
    Install react
    </RouterLink>
</li>
<li>
  <RouterLink to="/react-note5" class="LFT-Item"> 
    Membuat formulir interacctive
    </RouterLink>
</li>
<li>
  <RouterLink to="/react-note6" class="LFT-Item"> 
    Add, Update, List JSX
    </RouterLink>
</li>
<li>
  <RouterLink to="/react-note7" class="LFT-Item"> 
    Context
    </RouterLink>
</li>
<li>
  <RouterLink to="/react-note8" class="LFT-Item"> 
    UseEffect
    </RouterLink>
</li>
</ul>
<h2 id="contoh-project">Contoh project</h2>
<ul>
<li><a href="./project-react/add-component.md">Membuat button menambahkan element</a></li>
<li><a href="./project-react/counter.md">Membuat konsep counter</a></li>
<li><a href="./project-react/add-delete.md">membuat element muncul dan hilang</a></li>
<li><a href="./project-react/form-react.md">Membuat Form Lengkap fiture</a></li>
<li><a href="./project-react/todo.md">Todo app</a>
&lt;!--- </li>
<li><a href="./project-react/pokemonApi.md">PokemonApi</a>
--&gt;</li>
</ul>
<h2 id="referensi-">Referensi:</h2>
<ul>
<li><a href="https://www.niagahoster.co.id/blog/react-js-adalah/?gclid=Cj0KCQiAx6ugBhCcARIsAGNmMbi_g36zJkerxEangrozL6QmcfFd7ZZwtxXRiqvmDhPGnGX4Jt_rrM0aAtnGEALw_wcB">https://www.niagahoster.co.id/blog/react-js-adalah/?gclid=Cj0KCQiAx6ugBhCcARIsAGNmMbi_g36zJkerxEangrozL6QmcfFd7ZZwtxXRiqvmDhPGnGX4Jt_rrM0aAtnGEALw_wcB</a></li>
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