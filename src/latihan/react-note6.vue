<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h3 id="melakukan-update-pada-state">Melakukan update pada state</h3>
<p>state tidak bisa dilakukan perubahan secara langsung, seperti dua contoh dibawah ini. </p>
<pre><code>this.<span class="hljs-keyword">state</span> = {name: 'udin'} // tidak bisa 

this.<span class="hljs-keyword">state</span>.name = 'udin' // tidak bisa
</code></pre><p><strong>cara mengubah state adalah dengan</strong> <code>setState</code></p>
<pre><code><span class="hljs-selector-tag">this</span><span class="hljs-selector-class">.setState</span>({<span class="hljs-attribute">name</span>:<span class="hljs-string">'udin'</span>})
</code></pre><h3 id="cara-memperbarui-state">Cara memperbarui state</h3>
<pre><code><span class="hljs-comment">// Import React from ''</span>
<span class="hljs-keyword">import</span> <span class="hljs-type">React</span> from <span class="hljs-symbol">'reac</span>t';

<span class="hljs-comment">// lakukan inheritance dari component</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{


constructor(props){
    <span class="hljs-keyword">super</span>(props);
    <span class="hljs-keyword">this</span>.state = {name:<span class="hljs-symbol">'Nama</span> <span class="hljs-type">Ku</span>'}
}

  render () {
    <span class="hljs-keyword">return</span> (

        &lt;h1&gt;<span class="hljs-type">Hello</span>, namaku adalah {<span class="hljs-keyword">this</span>.state.name}!&lt;/h1&gt; {<span class="hljs-comment">/* &lt;===== ini akan berubah sesuai dengan state saat ini!!!*/</span>}

        &lt;button onClick={() =&gt; {<span class="hljs-keyword">this</span>.setState({name:<span class="hljs-symbol">'udi</span>n'})}}&gt; namaku udin!! &lt;/button&gt;
    );
  }
}

export <span class="hljs-keyword">default</span> <span class="hljs-type">App</span>;
</code></pre><p>pada method render, terdapat event ( onclick ), dan state. 
code diatas adalah untuk mengubah nilai state awal menjadi apa yang kita ingin kan.</p>
<h3 id="cara-lain-untuk-melakukan-perubahan-state">cara lain untuk melakukan perubahan state</h3>
<pre><code><span class="hljs-comment">// Import React from ''</span>
<span class="hljs-keyword">import</span> <span class="hljs-type">React</span> from <span class="hljs-symbol">'reac</span>t';

<span class="hljs-comment">// lakukan inheritance dari component</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{


    constructor(props){
        <span class="hljs-keyword">super</span>(props);
        <span class="hljs-keyword">this</span>.state = {name:<span class="hljs-symbol">'Nama</span> <span class="hljs-type">Ku</span>'}
    }

    fuctClick(arg) {
        <span class="hljs-keyword">this</span>.setState({name: arg})
    }

    render () {
        <span class="hljs-keyword">return</span> (

            &lt;h1&gt;<span class="hljs-type">Hello</span>, namaku adalah {<span class="hljs-keyword">this</span>.state.name}!&lt;/h1&gt; {<span class="hljs-comment">/* &lt;===== ini akan berubah sesuai dengan state saat ini!!!*/</span>}

            &lt;button onClick={() =&gt; {<span class="hljs-keyword">this</span>.fuctClick(<span class="hljs-symbol">'udi</span>n')}}&gt; udin &lt;/button&gt;
    );
  }
}

export <span class="hljs-keyword">default</span> <span class="hljs-type">App</span>;
</code></pre><h3 id="wrap-up-01-aturan-state-diatas-">Wrap up 01 ( aturan state diatas )</h3>
<pre><code><span class="hljs-keyword">import</span> <span class="hljs-type">React</span> from <span class="hljs-symbol">'reac</span>t';

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{

    constructor(props) {
        <span class="hljs-keyword">super</span>(props){
        <span class="hljs-keyword">this</span>.state = {nama:<span class="hljs-symbol">'makana</span>n'} <span class="hljs-comment">// Tahap 1. deklarasi state </span>

}}

    handleClick(arg) {
        <span class="hljs-keyword">this</span>.setState({nama: arg}) <span class="hljs-comment">// Tahap 3. Melakukan perubahan!!</span>
}

    render() {
        <span class="hljs-keyword">return</span> (
            &lt;div&gt; 
                &lt;h1&gt; <span class="hljs-type">Makanan</span> yang kusuka adalah {<span class="hljs-keyword">this</span>.state.nama} &lt;/h1&gt;
                {<span class="hljs-comment">/*&lt;====== Tahap 2. menampilkan state */</span>}


                &lt;button onClick={() =&gt; {<span class="hljs-keyword">this</span>.handleClick(<span class="hljs-symbol">'Soto</span> <span class="hljs-type">Ayam</span>')}}&gt; suka soto ayam &lt;/button&gt;
                {<span class="hljs-comment">/* &lt;========= Tahap 3 Melakukan perubahan */</span>}

            &lt;/div&gt;
)}


}
</code></pre><p>Tahapan:</p>
<ol>
<li>Deklarasi state pada constructor. Contoh <code>nama:&#39;value&#39;</code></li>
<li>Menampilkan set. Contoh <code>{this.state.nama}</code></li>
<li>Melakukan perubahan dengan onClick dan <code>setState</code></li>
</ol>
<h3 id="urutan-alur-menampilkan-react">Urutan alur menampilkan React</h3>
<ul>
<li>App.js (JSX) =&gt; akan diberikan kepada </li>
<li>index.js =&gt; code JSX akan proses disini ( mengalami perubahan  )</li>
<li>index.html =&gt; tujuan akhir, code JSX akan ditimpa disini. </li>
</ul>
<p><strong>Contoh process</strong></p>
<pre><code><span class="hljs-comment">// App.js </span>

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">component</span> </span>{
    render(){
        <span class="hljs-keyword">return</span> (
            <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hello World<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>


)
}
}

<span class="hljs-comment">// index.js  ( Tahap kedua )</span>

<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">'./components/App'</span>
ReactDOM.render(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">App</span> /&gt;</span>, document.getElementById('root'))


// index.html ( tahap terakhir )
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"root"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span></span>
</code></pre><h3 id="memasukan-css-kedalam-jsx">Memasukan css kedalam JSX</h3>
<pre><code>render(){
    <span class="hljs-keyword">return</span> (

        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"title"</span>&gt;</span>Hello World<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"sub title"</span>&gt;</span> Hello juga <span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>

)
}
</code></pre><ul>
<li>Cara penulisan attribute class berbeda dengan pada HTML biasa.</li>
</ul>
<hr>
<h1 id="membuat-component-baru">Membuat component baru</h1>
<p><strong>boleh 2 atau lebih component selain App.js</strong></p>
<ul>
<li>Tahap Pertama, Pembuatan component baru. pada folder App.js </li>
</ul>
<pre><code><span class="hljs-comment">//file: ekstra.js </span>
<span class="hljs-keyword">import</span> <span class="hljs-type">React</span> from <span class="hljs-symbol">'reac</span>t';

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">ekstra</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
    render() {
        <span class="hljs-keyword">return</span> (
            &lt;div className=<span class="hljs-symbol">'exstra</span>-container'&gt;
                &lt;p&gt; ini berasal dari component extra &lt;/p&gt;
            &lt;/div&gt;
)
}
}

<span class="hljs-comment">// Export component </span>
export <span class="hljs-keyword">default</span> ekstra;
</code></pre><ul>
<li>tahap kedua </li>
</ul>
<pre><code><span class="hljs-comment">// File: App.js</span>
<span class="hljs-keyword">import</span> <span class="hljs-type">React</span> from <span class="hljs-symbol">'reac</span>t'
<span class="hljs-keyword">import</span> ekstra from './ekstra'

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
    render(){
        <span class="hljs-keyword">return</span>(
            &lt;div&gt;
                &lt;ekstra /&gt; {<span class="hljs-comment">/* &lt;=== Tag ini berasal dari component baru */</span>}
            &lt;/div&gt;

)
}
}
</code></pre><p>catatan kecil, component dapat digunakan berkali-kali.</p>
<h3 id="cara-untuk-melakukan-perubahan-pada-component-jsx">cara untuk melakukan perubahan pada component JSX</h3>
<pre><code><span class="hljs-comment">// file App.js</span>
<span class="hljs-keyword">import</span> <span class="hljs-type">React</span> from <span class="hljs-symbol">'reac</span>t'
<span class="hljs-keyword">import</span> ekstra from './ekstra'

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
    render(){
        <span class="hljs-keyword">return</span>(
        &lt;div&gt;

            &lt;ekstra 
                nama=<span class="hljs-string">"udin"</span>

            /&gt; 


            &lt;ekstra
                nama=<span class="hljs-string">"budi"</span>

            /&gt;


    &lt;/div&gt;

)
}
}
</code></pre><ul>
<li>pada <code>&lt;ekstra /&gt;</code> kita dapat menambahkan <strong>props</strong> didalamnya yang akan membantu dalam melakukan perubahan secara spesifik.</li>
</ul>
<p>Setelah melakukan perubahan pada <code>App.js</code> dilanjutkan pada <code>ekstra.js</code></p>
<pre><code><span class="hljs-comment">// ekstra.js </span>

<span class="hljs-keyword">import</span> <span class="hljs-type">React</span> from <span class="hljs-symbol">'reac</span>t';

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">ekstra</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
    render() {
        <span class="hljs-keyword">return</span> (

            &lt;div className=<span class="hljs-symbol">'exstra</span>-container'&gt;
            &lt;p&gt; ini berasal dari component extra 

            dan ini adalah namaku {<span class="hljs-keyword">this</span>.props.nama}

            &lt;/p&gt;


        &lt;/div&gt;
)
}
}

<span class="hljs-comment">// Export component </span>
export <span class="hljs-keyword">default</span> ekstra;
</code></pre><h3 id="cara-membuat-component-secara-otomatis">Cara membuat component secara otomatis</h3>
<p>dibawah ini adalah contoh membuat component otomatis. semisal terdapat list, maka component yang akan dibuat akan menyesuaikan dengan berapa banyak item pada list.</p>
<pre><code><span class="hljs-comment">// file App.js</span>
<span class="hljs-keyword">import</span> <span class="hljs-type">React</span> from <span class="hljs-symbol">'reac</span>t'
<span class="hljs-keyword">import</span> ekstra from './ekstra'

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
    render(){

        let namaPeserta = [
        {name: <span class="hljs-symbol">'udi</span>n'},
        {name: <span class="hljs-symbol">'bud</span>i'},
        ]

    <span class="hljs-keyword">return</span>(
        &lt;div&gt;

        {namaPeserta.map((item) =&gt;{

            <span class="hljs-keyword">return</span> (

                &lt;ekstra
                nama={item.name}
                /&gt;

                    )
        }
) {<span class="hljs-comment">/*&lt;== bagian akhir dari map method */</span>}
}


&lt;/div&gt;

)
}
}
</code></pre><p>Pada code diatas kita membuat code didalam JSX untuk membuat sebuah loop yang akan membuat component <code>&lt;ekstra /&gt;</code> sebanyak item pada list yang diberikan.</p>
<p>ini bisa dilakukan dengan bantuan <code>map</code> method.</p>




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