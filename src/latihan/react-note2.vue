<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="membuat-banyak-component">membuat banyak component</h1>
<p>Tujuan adalah membuat banyak component, dan digabungkan menjadi satu pada App.js. </p>
<h3 id="tahapan">Tahapan</h3>
<ul>
<li>Buat component disekitar <code>App.js</code></li>
</ul>
<h3 id="tahapan-00">Tahapan 00</h3>
<pre><code class="lang-Js"><span class="hljs-comment">// App.js</span>
<span class="hljs-keyword">import</span> logo <span class="hljs-keyword">from</span> <span class="hljs-string">'./logo.svg'</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">'./App.css'</span>;
<span class="hljs-keyword">import</span> Item02 <span class="hljs-keyword">from</span> <span class="hljs-string">'./item02'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">App</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"App"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">header</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"App-header"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{logo}</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"App-logo"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"logo"</span> /&gt;</span>


        <span class="hljs-tag">&lt;<span class="hljs-name">Item02</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">header</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  );
}

export default App;</span>
</code></pre>
<h3 id="tahapan-01">Tahapan 01</h3>
<p>Tujuan adalah untuk membuat component yang akan terus dipanggil pada loop <code>map()</code>. maka file <code>item01.js</code> akan terus dipanggil.</p>
<pre><code class="lang-Javascript"><span class="hljs-comment">// item01.js</span>
<span class="hljs-keyword">import</span> <span class="hljs-type">React</span> from <span class="hljs-symbol">'reac</span>t';

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Item01</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{

    render(){
        <span class="hljs-keyword">return</span>(

        &lt;div&gt;

        &lt;h1&gt; <span class="hljs-type">Halo</span> aku adalah item <span class="hljs-number">01</span> &lt;/h1&gt;
        &lt;p&gt; buah {<span class="hljs-keyword">this</span>.props.name} rasanya adalah {<span class="hljs-keyword">this</span>.props.rasa} &lt;/p&gt;
        {<span class="hljs-comment">/* &lt;===== Paragraph memiliki hubungan dengan item02 === */</span>}

        &lt;/div&gt;

)
}

}


<span class="hljs-comment">// Eksport component</span>

export <span class="hljs-keyword">default</span> <span class="hljs-type">Item01</span>;
</code></pre>
<p><code>Item01</code> adalah file baru pada folder components. </p>
<h3 id="tahap-02">Tahap 02</h3>
<p>Membuat Component <code>item02</code> yang berfungsi untuk memanggil <code>item01</code> dan menjadi wadah dari loop <code>map()</code></p>
<pre><code class="lang-Js"><span class="hljs-comment">// item02.js</span>
<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> Item01 <span class="hljs-keyword">from</span> <span class="hljs-string">'./item01'</span>

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Item02</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{

    render(){
        <span class="hljs-keyword">let</span> buahArr = 
            [
            {<span class="hljs-attr">name</span>: <span class="hljs-string">'semangka'</span>, <span class="hljs-attr">rasa</span>:<span class="hljs-string">'manis'</span>},
            {<span class="hljs-attr">name</span>: <span class="hljs-string">'jeruk'</span>, <span class="hljs-attr">rasa</span>:<span class="hljs-string">'asam'</span>}
            ]


        <span class="hljs-keyword">return</span>(

            <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span> halo ini list dari component item02 <span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>

            {/* <span class="hljs-tag">&lt;<span class="hljs-name">======</span> <span class="hljs-attr">Ini</span> <span class="hljs-attr">adalah</span> <span class="hljs-attr">component</span> <span class="hljs-attr">item01</span> */}

            {<span class="hljs-attr">buahArr.map</span>( (<span class="hljs-attr">buaharr</span>)=&gt;</span>{

                return (

                    <span class="hljs-tag">&lt;<span class="hljs-name">Item01</span> 
                     <span class="hljs-attr">name</span>=<span class="hljs-string">{buaharr.name}</span> 
                     <span class="hljs-attr">rasa</span>=<span class="hljs-string">{buaharr.rasa}</span> 
                    /&gt;</span>

                    )}
            )}


            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

)
}
}

export default Item02</span>
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