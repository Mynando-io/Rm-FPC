<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="membuat-form-lengkap">Membuat Form Lengkap</h1>
<p>Tujuan membuat form yang memiliki fitur lengkap</p>
<ul>
<li>Menerima input real time</li>
<li>Membuka menutup form berdasarkan interaksi user</li>
<li>Memiliki button untuk mengirim form</li>
<li>Tidak boleh form kosong, jika kosong kita akan memberikan pesan secara manual</li>
<li>Menirima hasil akhir dari form, dan menampilkan didepan layar</li>
</ul>
<h2 id="code">Code</h2>
<pre><code class="lang-Javascript"><span class="hljs-keyword">import</span> React from <span class="hljs-string">'react'</span>;

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Item01</span> <span class="hljs-title">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
    <span class="hljs-keyword">constructor</span>(props){
        <span class="hljs-keyword">super</span>(props)
        <span class="hljs-keyword">this</span>.state = {
            Form: <span class="hljs-literal">true</span>,
            email: <span class="hljs-string">''</span>,
            emailError: <span class="hljs-literal">false</span>,
        } <span class="hljs-comment">// Representasi Form itu sendiri</span>
    }

    handleClick(){
        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.state.Form){
            <span class="hljs-keyword">this</span>.setState({Form: <span class="hljs-literal">false</span>}) <span class="hljs-comment">// Jika Form sudah masuk maka close form</span>
        }
        <span class="hljs-keyword">else</span>{
            <span class="hljs-keyword">this</span>.setState({Form: <span class="hljs-literal">true</span>}) <span class="hljs-comment">// Jika form sudah 'submit' maka tutup!!</span>
        }
    }

    handleChange(even){
        let inputEmail = even.target.value <span class="hljs-comment">// Mengambil nilai dari form real time</span>
        let testEmail = inputEmail === <span class="hljs-string">''</span> <span class="hljs-comment">// Melakukan check apakah sudah terisi atau belum</span>
        <span class="hljs-keyword">this</span>.setState({
            email: inputEmail, <span class="hljs-comment">// masukan value ke state.email</span>
            emailError: testEmail, 
        })
    }

    render(){
        let notif; <span class="hljs-comment">// Variabel untuk notif</span>

        <span class="hljs-keyword">if</span>(<span class="hljs-keyword">this</span>.state.emailError) { <span class="hljs-comment">// If statemen untuk notif</span>
            notif = (
                &lt;div style={{color: <span class="hljs-string">'red'</span>}}&gt;
                    Email harus Ada!
                &lt;/div&gt;
            )
        }

        let abc; <span class="hljs-comment">// 'abc' adalah untuk menyimpan elemen form</span>

        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.state.Form){ <span class="hljs-comment">// tampilkan form pada awalan</span>
            abc = (
                &lt;form onSubmit={() =&gt; {<span class="hljs-keyword">this</span>.handleClick()}}&gt;
                    &lt;h1&gt;Ini adalah formulir (Form: True)&lt;/h1&gt;

                    &lt;input
                    title=<span class="hljs-string">'Email'</span>
                    type=<span class="hljs-string">'email'</span> 
                    value={<span class="hljs-keyword">this</span>.state.email} 
                    onChange={(event) =&gt; {<span class="hljs-keyword">this</span>.handleChange(event)}}
                    /&gt;
                    {notif}

                    &lt;input type=<span class="hljs-string">'submit'</span> value=<span class="hljs-string">'kirim'</span>/&gt;
                &lt;/form&gt;
            )
        }

        <span class="hljs-keyword">else</span>{ <span class="hljs-comment">// close form jika sudah selesai</span>
            abc = (
                &lt;div&gt;
                    Selamat Form yang kamu tulis sudah Terkirim!!, {<span class="hljs-keyword">this</span>.state.email}
                &lt;/div&gt;
            )
        }

        <span class="hljs-keyword">return</span>(
            &lt;div&gt;
                {abc}

                &lt;button onClick={() =&gt; {<span class="hljs-keyword">this</span>.handleClick()}}&gt; Ambil form ulang&lt;/button&gt;
            &lt;/div&gt;
        )
    }
}

export <span class="hljs-keyword">default</span> Item01
</code></pre>
<h3 id="app">App</h3>
<pre><code class="lang-Javascript"><span class="hljs-keyword">import</span> logo <span class="hljs-keyword">from</span> <span class="hljs-string">'./logo.svg'</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">'./App.css'</span>;
<span class="hljs-keyword">import</span> Item01 <span class="hljs-keyword">from</span> <span class="hljs-string">'./item01'</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">App</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"App"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">header</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"App-header"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{logo}</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"App-logo"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"logo"</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Item01</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">header</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  );
}

export default App;</span>
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