<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="membuat-component-pada-react">Membuat component pada react</h1>
<p>terdapat dua cara yaitu pembuatan dengan:</p>
<ul>
<li>function </li>
<li>class </li>
</ul>
<p>Perhatikan file App.js dibawah ini</p>
<pre><code><span class="hljs-keyword">import</span> logo <span class="hljs-keyword">from</span> <span class="hljs-string">'./logo.svg'</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">'./App.css'</span>;
<span class="hljs-keyword">import</span> Item02 <span class="hljs-keyword">from</span> <span class="hljs-string">'./item02'</span>;
<span class="hljs-keyword">import</span> Item01 <span class="hljs-keyword">from</span> <span class="hljs-string">'./item01'</span>;

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
</code></pre><p>file tersebut tidak akan berubah meskipun component class/function </p>
<h2 id="contoh-function">Contoh function</h2>
<p>component function </p>
<pre><code class="lang-Js"><span class="hljs-keyword">import</span> React, {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">App</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">let</span> [count, setCount] = useState(<span class="hljs-number">0</span>)
    <span class="hljs-comment">// count adalah bentuk dari 'state' dengan nilai 0</span>
    <span class="hljs-comment">// setCount akan menjadi function, untuk memperbarui count</span>

    <span class="hljs-keyword">let</span> handleClick = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
        setCount(count + <span class="hljs-number">1</span>)
        <span class="hljs-comment">// variabel 'setCount' menjadi penganti 'setState'. Istilahnya React Hooks</span>
        <span class="hljs-comment">// Jika ingin mengunakan setState</span>
        <span class="hljs-comment">// this.setState({count: this.state.count+1})</span>
    }

    <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>{count}<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {handleClick()}}&gt; + <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>

        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> App
</code></pre>
<p>Membuat sebuah counter, </p>
<h2 id="contoh-class-component">Contoh class component</h2>
<pre><code class="lang-Js">import React <span class="hljs-keyword">from</span> 'react';

class Item01 extends React.Component{
    constructor(props){
        super(props)
        this.<span class="hljs-keyword">state</span> = {count: <span class="hljs-number">0</span>}
    }

    handleClick() {
        this.<span class="hljs-built_in">set</span>State({count : this.<span class="hljs-keyword">state</span>.count + <span class="hljs-number">1</span>})
        // variabel '<span class="hljs-built_in">set</span>Count' menjadi penganti '<span class="hljs-built_in">set</span>State'. Istilahnya React Hooks
        // Jika ingin mengunakan <span class="hljs-built_in">set</span>State
        // this.<span class="hljs-built_in">set</span>State({count: this.<span class="hljs-keyword">state</span>.count+<span class="hljs-number">1</span>})
    }

    render(){
        return (
            <span class="hljs-variable">&lt;div&gt;</span>

    <span class="hljs-variable">&lt;h1&gt;</span>{this.<span class="hljs-keyword">state</span>.count}&lt;/h1&gt;
    <span class="hljs-variable">&lt;button onClick={() =&gt;</span> {this.handleClick()}}&gt; + &lt;/button&gt;

            &lt;/div&gt;
        )
    }

}

export <span class="hljs-keyword">default</span> Item01
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