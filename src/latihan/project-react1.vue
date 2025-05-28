<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="membuat-button-untuk-melakukan-penambahan-element">Membuat Button untuk melakukan penambahan element</h1>
<h2 id="tujuan">Tujuan</h2>
<p>Membuat dua button, dimana setiap button memiliki value yang dapat mengubah text element diatas.</p>
<h2 id="tahapan">Tahapan</h2>
<ul>
<li>masuk ke folder src <code>App.js</code></li>
<li>Buat component baru</li>
<li>Buat object </li>
<li>Buat property dengan <code>state</code></li>
<li>buat <code>handleClick()</code> untuk menerima perintah</li>
<li>gunakan <code>setState</code> untuk melakukan perubahan pada <code>state</code> awal</li>
<li>buat <code>render()</code> dan <code>return()</code> untuk bagian JSX</li>
<li>buat fungsi <code>onClick</code> untuk mengirim permintaan kepada <code>handleClick()</code></li>
<li><code>export default</code> untuk component baru yang kita buat</li>
<li>Masukan JSX <code>Item00</code> pada file <code>App.js</code> dan render</li>
</ul>
<pre><code class="lang-Javascript"><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;


<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Item00</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
    <span class="hljs-keyword">constructor</span>(props){
        <span class="hljs-keyword">super</span>(props)
        <span class="hljs-keyword">this</span>.state = {<span class="hljs-attr">name</span>: <span class="hljs-string">'Appel'</span>}
    }

    handleClick(abc){
        <span class="hljs-keyword">this</span>.setState({<span class="hljs-attr">name</span>: abc})
    }

    render(){
        <span class="hljs-keyword">return</span>(
           <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
             <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hello, namaku adalah {this.state.name}!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span> {/* <span class="hljs-tag">&lt;<span class="hljs-name">=====</span> <span class="hljs-attr">ini</span> <span class="hljs-attr">akan</span> <span class="hljs-attr">berubah</span> <span class="hljs-attr">sesuai</span> <span class="hljs-attr">dengan</span> <span class="hljs-attr">state</span> <span class="hljs-attr">saat</span> <span class="hljs-attr">ini</span>!!!*/}

            &lt;<span class="hljs-attr">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {this.handleClick('Banana')}}&gt; Banana <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {this.handleClick('Appel')}}&gt; Appel <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
           <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
        )
    }
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> Item00;
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