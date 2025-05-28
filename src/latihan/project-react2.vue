<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="membuat-button-untuk-melakukan-counting">Membuat Button untuk melakukan counting</h1>
<p>Terdapat fitur counter, betapa banyak button tersebut telah ditekan.</p>
<h2 id="code">Code</h2>
<pre><code class="lang-Javascript"><span class="hljs-keyword">import</span> <span class="hljs-type">React</span> from <span class="hljs-symbol">'reac</span>t';


<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Item00</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
    constructor(props){
        <span class="hljs-keyword">super</span>(props)
        <span class="hljs-keyword">this</span>.state = {count: <span class="hljs-number">0</span>} <span class="hljs-comment">// Tambahkan State counter</span>
    }

    handleClick(){
        <span class="hljs-keyword">this</span>.setState({count: <span class="hljs-keyword">this</span>.state.count + <span class="hljs-number">1</span>}) <span class="hljs-comment">// Respon dan proses</span>
    }

    render(){
        <span class="hljs-keyword">return</span>(
           &lt;div&gt;
             &lt;h1&gt;<span class="hljs-type">Hello</span>, namaku adalah {<span class="hljs-keyword">this</span>.state.count}!&lt;/h1&gt; {<span class="hljs-comment">/* &lt;===== ini akan berubah sesuai dengan state saat ini!!!*/</span>}

            &lt;button onClick={() =&gt; {<span class="hljs-keyword">this</span>.handleClick()}}&gt; <span class="hljs-type">Counter</span>! &lt;/button&gt; {<span class="hljs-comment">/*&lt;==== Click */</span>}
           &lt;/div&gt;
        )
    }
}

export <span class="hljs-keyword">default</span> <span class="hljs-type">Item00</span>;
</code></pre>
<h2 id="breakdown-code">Breakdown code</h2>
<ul>
<li>Buat state <code>count</code></li>
<li>buat method untuk menerima perintah dari <strong>onClick</strong></li>
<li>Buat <strong>onClick</strong> untuk mengirim perintah!!</li>
</ul>
<h2 id="detail-tahapan-abstract-">Detail tahapan (Abstract)</h2>
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