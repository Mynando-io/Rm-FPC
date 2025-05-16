<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="useeffect">useEffect</h1>
<h2 id="react-hook-">React Hook?</h2>
<p>mereka adalah fitur baru yang ditambahkan pada React 16.8 ke atas, dimana dengan &#39;React Hooks&#39; kita bisa mengunakan &#39;state&#39; dan fitura lain pada React, tanpa perlu menulis suautu class. Dengan &quot;React hooks&quot; kita bisa membuat component dengan lebih mudah dan effisien. </p>
<p>Ref: <a href="https://react.dev/reference/react/hooks">https://react.dev/reference/react/hooks</a></p>
<h2 id="react-useeffect-">React useEffect?</h2>
<p>mereka adalah fungsi hook dimana dengan bantuan &#39;useEffect&#39;, kita bisa melaksanakan tugas side effect didalam fungsi. </p>
<p>Side effect disini adalah sebuah operasi yang tidak memerlukan rendering component, seperti pemangilan API, time, dan lain-lain. </p>
<h3 id="contoh-useeffect-jalankan-effect-setiap-kali-terjadi-render-">Contoh useEffect (Jalankan effect, setiap kali terjadi render)</h3>
<p>dimana pada contoh ini akan dilakukan rendering &quot;useEffect&quot; setiap kali terjadi proses render. </p>
<pre><code class="lang-JS"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Timer</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">const</span> [count, setCount] = useState(<span class="hljs-number">0</span>);

  useEffect(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
      setCount(<span class="hljs-function">(<span class="hljs-params">count</span>) =&gt;</span> count + <span class="hljs-number">1</span>);
    }, <span class="hljs-number">1000</span>);
  });

  <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>I have rendered {count} times!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span></span>;
}
</code></pre>
<h3 id="contoh-useeffect-dijalankan-hanya-sekali-">contoh useEffect (Dijalankan hanya sekali)</h3>
<pre><code class="lang-JS"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Timer</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">const</span> [count, setCount] = useState(<span class="hljs-number">0</span>);

  useEffect(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
      setCount(<span class="hljs-function">(<span class="hljs-params">count</span>) =&gt;</span> count + <span class="hljs-number">1</span>);
    }, <span class="hljs-number">1000</span>);
  }, []); <span class="hljs-comment">// &lt;==== Indikator, </span>

  <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>I have rendered {count} times!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span></span>;
}
</code></pre>
<ul>
<li><code>[]</code> - &#39;useEffect&#39; akan melakukan pengecekan terhadap perubahan pada <code>array</code>, jika terdapat perubahan maka jalankan &#39;useEffect&#39;</li>
</ul>
<h3 id="contoh-useeffect-dijalankan-disaat-tertentu-">contoh useEffect (Dijalankan disaat tertentu)</h3>
<p><strong>Event Listener</strong></p>
<pre><code class="lang-Js"><span class="hljs-keyword">import</span> { useState, useEffect } <span class="hljs-keyword">from</span> <span class="hljs-string">"react"</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Timer</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">const</span> [count, setCount] = useState(<span class="hljs-number">0</span>);
  <span class="hljs-keyword">const</span> [calculation, setCalculation] = useState

  useEffect(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
        setCalculation(count * <span class="hljs-number">2</span>)
  }, [count]); <span class="hljs-comment">// &lt;==== Indikator, </span>

  <span class="hljs-keyword">return</span> (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> Count: {count} <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> Calculation: {calculation} <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> setCount((c) =&gt; c + 1)}&gt;+<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
<p>Pada code diatas, <code>useEffect</code> akan dijalankan disaat kita melakukan perubahan data pada <code>count</code>.</p>
<p>Ref: <a href="https://www.w3schools.com/react/showreact.asp?filename=demo2_react_useeffect_settimeout3">https://www.w3schools.com/react/showreact.asp?filename=demo2_react_useeffect_settimeout3</a></p>
<p>Contoh ini adalah bentuk dari &quot;Event Listener&quot; dimana ini akan menerima dan memproses bagaimana seorang user melakukan interaksi.</p>
<h2 id="data-fetching">Data fetching</h2>
<p>Event Listener dapat digunakan untuk membantu kita melakukan pengambilan data. Seperti mengambil dari API dan melakukan update kepada state berdasarkan data yang diambil. </p>
<pre><code class="lang-Js"><span class="hljs-comment">/* RandomUserList.js */</span>
<span class="hljs-keyword">import</span> React,
{
    useState,
    useEffect
} <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">RandomUserList</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">const</span> [userList, setUserList] = useState([]);

    useEffect(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
        fetch(<span class="hljs-string">'https://random-data-api.com/api/v2/users?size=5'</span>)
            .then(<span class="hljs-function"><span class="hljs-params">response</span> =&gt;</span> response.json())
            .then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> setUserList(data));
    }, []);

    <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Random User List<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
                {userList.map(user =&gt; (
                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{user.id}</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
                            Name:
                            {user.first_name}
                            {user.last_name}
                        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
                            Email:
                            {user.email}
                        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                        {/* Add more user data fields as needed */}
                    <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                ))}
            <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> RandomUserList;
</code></pre>
<ul>
<li><code>fetch</code> - digunakan untuk mengambil data dari alamat yang diberikan.</li>
<li><code>then[0]</code> - digunakan untuk mengambil data, dan melakukan proses ke json</li>
<li><code>then[1]</code> - digunakan untuk menyimpan data json tersebut kedalam state</li>
</ul>
<p>ref: <a href="https://www.geeksforgeeks.org/fetching-data-from-an-api-with-useeffect-and-usestate-hook/">https://www.geeksforgeeks.org/fetching-data-from-an-api-with-useeffect-and-usestate-hook/</a></p>
<hr>
<h1 id="api">API</h1>
<hr>
<h2 id="melakukan-penambilan-api-local-atau-online">melakukan penambilan API, local atau online</h2>
<pre><code class="lang-Js"><span class="hljs-comment">/* RandomUserList.js */</span>
<span class="hljs-keyword">import</span> React,{ useState, useEffect} <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;

<span class="hljs-keyword">import</span> users <span class="hljs-keyword">from</span> <span class="hljs-string">'./users.json'</span> <span class="hljs-comment">// Ambil data JSON manually</span>


<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">App</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">const</span> [userList, setUserList] = useState(users);

  <span class="hljs-comment">/* Menagmbil API online
    useEffect(() =&gt; {
        fetch('https://random-data-api.com/api/v2/users?size=5')
            .then(response =&gt; response.json())
            .then(data =&gt; setUserList(data));
    }, []);
  */</span>

    <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Random User List<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
                {userList.map(user =&gt; (
                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{user.id}</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
                            Name:
                            {user.first_name}
                            {user.last_name}
                        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
                            Email:
                            {user.email}
                        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                        {/* Add more user data fields as needed */}
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
              Skill:  
              {user.employment.key_skill}
            <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                ))}
            <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> App;
</code></pre>
<ul>
<li>Untuk menyimpan data json, kita bisa akses link API, lalu click <code>save as</code> Dimana kita akan menyimpan file &quot;json&quot; tersebut didalam &#39;src&#39;. </li>
</ul>
<h2 id="axios">axios</h2>
<p>didalam proses pembuatan app yang membutuhkan app, disini kita memerlukan sebuah tool untuk menerima data, dan memiliki cara untuk melakukan testing kepada sumber API original sedikit saja. </p>
<p>oleh karena itu, kita akan menyimpan file JSON local untuk media pembelajaran.</p>
<p><a href="../../document/project-react/Api-Axios.md">Apa itu axios?</a></p>
<pre><code class="lang-Js"><span class="hljs-comment">/* RandomUserList.js */</span>
<span class="hljs-keyword">import</span> React,{ useState, useEffect, } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> axios <span class="hljs-keyword">from</span> <span class="hljs-string">'axios'</span>

<span class="hljs-comment">//import users from './users.json' // Ambil data JSON manually</span>


<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">App</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">const</span> [userList, setUserList] = useState([]);

  <span class="hljs-comment">/* Menagmbil API online
    useEffect(() =&gt; {
        fetch('https://random-data-api.com/api/v2/users?size=5')
            .then(response =&gt; response.json())
            .then(data =&gt; setUserList(data));
    }, []);
  */</span>

  useEffect(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> { <span class="hljs-comment">// Ambil API secara sementara.</span>
    axios  <span class="hljs-comment">// axios adalah bentuk dari "Promise".</span>
    .get(<span class="hljs-string">'users.json'</span>)
      .then(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {
        setUserList(response.data)
      })
      .catch(<span class="hljs-function">(<span class="hljs-params">error</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(error)
      })
  }, [])

    <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Random User List<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
                {userList.map(user =&gt; (
                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{user.id}</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
                            Name:
                            {user.first_name}
                            {user.last_name}
                        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
                            Email:
                            {user.email}
                        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                        {/* Add more user data fields as needed */}
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
              Skill:  
              {user.employment.key_skill}
            <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                ))}
            <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> App;
</code></pre>
<ul>
<li>simpan file JSON, didalam <code>public</code> folder</li>
</ul>
<p>ref: </p>
<ul>
<li><a href="https://akhtarvahid.medium.com/how-to-access-fetch-the-local-json-file-to-react-5ce07c43731d">https://akhtarvahid.medium.com/how-to-access-fetch-the-local-json-file-to-react-5ce07c43731d</a> </li>
<li><a href="https://stackoverflow.com/questions/54224164/trouble-getting-local-json-data-with-axios">https://stackoverflow.com/questions/54224164/trouble-getting-local-json-data-with-axios</a></li>
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