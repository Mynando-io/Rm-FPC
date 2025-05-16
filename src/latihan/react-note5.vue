<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<p>#Pembuatan formulir interaktive</p>
<p>Tujuan adalah membuat sebuah formulir yang dapat menerima input, dan memberikan feedback setelah input tersebut masuk.</p>
<p>##Tahapan</p>
<ul>
<li>Membuat Form dengan JSX -</li>
<li>Membuat onClick terima -</li>
<li>Membuat feedback</li>
</ul>
<pre><code class="lang-Js"><span class="hljs-comment">// itemForm.js </span>
<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">FormComp</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
    <span class="hljs-keyword">constructor</span>(props){
        <span class="hljs-keyword">this</span>.state ={
    <span class="hljs-comment">/* Dibawah ini adalah kunci dinamis form */</span> 
        isSubmitted: <span class="hljs-literal">false</span>;
    }
}


    handleSubmit(){
        <span class="hljs-keyword">this</span>.setState({<span class="hljs-attr">isSubmitted</span>: <span class="hljs-literal">true</span>})
    }

    render(){
        <span class="hljs-keyword">let</span> contactForm

        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.state.isSubmitted){ <span class="hljs-comment">/* &lt;=== adalah jika terkirim */</span>
            contactForm = (
            <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">'pesan-terkirim'</span>&gt;</span>

            Pesan terkirim 
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
        )
        }; <span class="hljs-comment">/* &lt;=== Semicolom wajib pada course online */</span> 

        <span class="hljs-keyword">else</span> { <span class="hljs-comment">/* &lt;=== adalah jika belum terkirim */</span>
            contactForm = (

            <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">onSubmit</span>= <span class="hljs-string">{()</span> =&gt;</span> {this.handleSubmit()} 
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Input Alamat Rumah!<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">input</span> 

          /&gt;</span>

          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Detail Pesanan<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          {/* tag textarea */}
          <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> 

          /&gt;</span>

          {/* tombol kirim */}

          <span class="hljs-tag">&lt;<span class="hljs-name">input</span> 

          /&gt;</span>


            } // Akhir form 

        ) // Akhir contactForm

        return (
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                {contactForm} {/* <span class="hljs-tag">&lt;<span class="hljs-name">===</span> <span class="hljs-attr">JSX</span> <span class="hljs-attr">disini</span> */}
            &lt;/<span class="hljs-attr">div</span>&gt;</span>
        )
        }
    }
}</span>
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