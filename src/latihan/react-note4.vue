<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h2 id="cara-instalasi-react-pada-ubuntu-dan-wsl">Cara instalasi react pada Ubuntu dan WSL</h2>
<pre><code>sudo apt <span class="hljs-keyword">update</span>
sudo apt <span class="hljs-keyword">install</span> nodejs npm
</code></pre><p>Install react globally pada node</p>
<pre><code>sudo npm <span class="hljs-keyword">install</span> -g <span class="hljs-keyword">create</span>-react-app
</code></pre><p>buat folder khusus untuk app react</p>
<pre><code><span class="hljs-keyword">mkdir</span> react-<span class="hljs-keyword">test</span>
<span class="hljs-keyword">cd</span> react-<span class="hljs-keyword">test</span>
</code></pre><p>buat project react </p>
<pre><code><span class="hljs-string">npx </span><span class="hljs-built_in">create-react-app</span> <span class="hljs-string">my-app
</span><span class="hljs-string">cd </span><span class="hljs-string">my-app
</span><span class="hljs-string">npm </span><span class="hljs-string">start</span>
</code></pre><h2 id="reference">Reference</h2>
<ul>
<li><a href="https://dev.to/vidvatek/step-by-step-guide-installing-reactjs-on-ubuntu-582e">https://dev.to/vidvatek/step-by-step-guide-installing-reactjs-on-ubuntu-582e</a></li>
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