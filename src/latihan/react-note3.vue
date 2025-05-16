<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="membuat-button-interactive">Membuat button interactive</h1>
<p>Pada contoh kali ini, kita bisa menyembunyikan dan menampilkan element pada HTML dengan satu kali click. </p>
<pre><code><span class="hljs-comment">// itemAdd.js</span>
<span class="hljs-keyword">import</span> <span class="hljs-type">React</span> from <span class="hljs-symbol">'reac</span>t';

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">ItemAdd</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
    constructor() {
        <span class="hljs-keyword">super</span>(props)
        <span class="hljs-keyword">this</span>.state = {isItemOpen: <span class="hljs-literal">false</span>}
}

<span class="hljs-comment">// method dibawah adalah untuk proses dari onClick</span>

    handleClick(){
        <span class="hljs-keyword">this</span>.setState({isItemOpen: <span class="hljs-literal">true</span>})
}

<span class="hljs-comment">// Method dibawah adalah untuk menghilangkan element item</span>
    handleClickClose(){
        <span class="hljs-keyword">this</span>.setState({isItemOpen: <span class="hljs-literal">false</span>})
}


    render(){

        let itemParag;

        <span class="hljs-keyword">if</span>(<span class="hljs-keyword">this</span>.state.isItemOpen){ <span class="hljs-comment">// &lt;===== adalah tempat JSX dan condition</span>
            itemParag = ( {<span class="hljs-comment">/* &lt;==== harus ada '()' ini adalah JSX area */</span>}
                &lt;p&gt; <span class="hljs-type">Halo</span> saya adalah paragraph interactive &lt;/p&gt;
        )
        }

        <span class="hljs-keyword">return</span>(
            &lt;div&gt;

            &lt;p&gt; saya adalah static &lt;/p&gt;
            {itemParag}

            &lt;button onClick={() =&gt; {<span class="hljs-keyword">this</span>.handleClick()}} title=<span class="hljs-string">"Open"</span>/&gt;

            {<span class="hljs-comment">/* &lt;=== button ini untuk open */</span>}

            &lt;button onClick={() =&gt; {<span class="hljs-keyword">this</span>.handleClickClose()}} title=<span class="hljs-string">"close"</span> /&gt;

            {<span class="hljs-comment">/* &lt;=== button ini untuk close */</span>}
        )
}

}

export <span class="hljs-keyword">default</span> <span class="hljs-type">ItemAdd</span>;
</code></pre><p><strong>Break down code</strong></p>
<ul>
<li>Membuat Property untuk element interactive <code>this.state = {isItemOpen: false}</code> </li>
<li><p>membuat method untuk menangkap perintah dari <code>onClick</code> dengan method <code>handleClick()</code></p>
</li>
<li><p>membuat variabel yang akan menampung JSX <code>let itemParag;</code></p>
</li>
<li><p>membuat if statement untuk mengatur kapan JSX akan digunakan dan tidak <code>if(this.state.isItemOpen){</code></p>
</li>
<li><p>Tambahkan code JSX pada variabel <code>itemParag</code> didalam if statement</p>
</li>
<li><p>pada <code>render(){ return(...) }</code> bagian return tambahkan code JSX <code>{itemParag}</code> </p>
</li>
<li>buat button onClick untuk memangil <code>{this.handleClick()}</code> </li>
<li>lakukan export pada baris terakhir untuk class yang sudah dibuat.</li>
<li>BUath method <code>handleClickClose</code> untuk menutup element</li>
</ul>
<h3 id="tahap-terakhir">Tahap terakhir</h3>
<p>adalah menghubungkan component item dengan file <code>App.js</code> sperti panduan sebelumnya.</p>
<pre><code><span class="hljs-comment">//App.js </span>
<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> ItemAdd <span class="hljs-keyword">from</span> <span class="hljs-string">'itemAdd'</span>;

...

&lt;ItemAdd /&gt;
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