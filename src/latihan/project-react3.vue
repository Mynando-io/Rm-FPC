<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="membuat-element-dapat-muncul-dan-hilang">Membuat element dapat muncul dan hilang</h1>
<p>Tujuan adalah membuat element, dan hanya terdapat satu tombol untuk mengatur kapan dibuka dan ditutup.</p>
<h2 id="code">Code</h2>
<pre><code class="lang-Javascript"><span class="hljs-keyword">import</span> <span class="hljs-type">React</span> from <span class="hljs-symbol">'reac</span>t';


<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Item00</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
    constructor(props){
        <span class="hljs-keyword">super</span>(props)
        <span class="hljs-keyword">this</span>.state = {site: <span class="hljs-literal">true</span>} <span class="hljs-comment">// Tambahkan State counter, awalan ada!</span>
    }

    handleClick(){
        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.state.site){ <span class="hljs-comment">// Check Nilai</span>
            <span class="hljs-keyword">this</span>.setState({site: <span class="hljs-literal">false</span>}) <span class="hljs-comment">// Tutup Element</span>
        }
        <span class="hljs-keyword">else</span> {
            <span class="hljs-keyword">this</span>.setState({site: <span class="hljs-literal">true</span>}) <span class="hljs-comment">// buka element</span>
        }

    }

    render(){

        let itemInter 

        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.state.site){
            itemInter = ( <span class="hljs-comment">// &lt;===== Wajib ada () pada JSX</span>
                &lt;div&gt;
                    <span class="hljs-type">Halo</span> saya adalah &lt;b&gt;element <span class="hljs-type">Interaktive</span>!!&lt;/b&gt;
                &lt;/div&gt;
            )
        }

        <span class="hljs-keyword">return</span>(
           &lt;div&gt;
             &lt;h1&gt;<span class="hljs-type">Hello</span>, <span class="hljs-type">Aku</span> adalah component item01!&lt;/h1&gt; {<span class="hljs-comment">/* &lt;===== ini akan berubah sesuai dengan state saat ini!!!*/</span>}


             {itemInter}

            &lt;button onClick={() =&gt; {<span class="hljs-keyword">this</span>.handleClick()}}&gt; <span class="hljs-type">Open</span> and close &lt;/button&gt; {<span class="hljs-comment">/*&lt;==== Click method */</span>}
           &lt;/div&gt;
        )
    }
}

export <span class="hljs-keyword">default</span> <span class="hljs-type">Item00</span>;
</code></pre>
<h2 id="breakdown-code">Breakdown code</h2>
<ul>
<li>Buat state <code>state</code></li>
<li>buat method untuk menerima perintah dari <strong>onClick</strong></li>
<li>Satu method dengan if statement didalamnya, dimana dilakukan pengecekan apakah state tersebut <code>true</code> atau tidak!</li>
<li>didalam <code>render()</code> buat if statement, jika state adalah true maka render element tersebut!</li>
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