<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="vue-js-guide">Vue Js Guide</h1>
<p>Memiliki konsep yang tidak beda jauh dari React. </p>
<h2 id="table-of-content">Table of Content</h2>
<ul>
<li><a href="#halaman-utama-website-disini">Halaman Utama web</a></li>
<li><a href="#tahapan-menerima-komponent">menerima komponent</a></li>
<li><a href="#tahapan-untuk-menempelkan-komponent-ke-html-halaman">menerapkan komponent</a></li>
<li><a href="#package-yang-di-export">export package</a></li>
<li><a href="#menjalankan-vue">menjalankan-vue</a></li>
<li><a href="#declarative-rendering">declarative-rendering</a></li>
<li><a href="#attribute-binding">attribute-binding</a></li>
<li><a href="#event-listener">event-listener</a></li>
<li><a href="#form-binding">form-binding</a></li>
<li><a href="#contoh-form-binding">contoh-form-binding</a></li>
<li><a href="#conditional-rendering">conditional-rendering</a></li>
<li><a href="#list-rendering">List Rendering</a></li>
<li><a href="#computed-property">computed property</a></li>
<li><a href="#Lifecyle">Lifecyle</a></li>
<li><a href="#Components">Components</a></li>
<li><a href="#Props">Props</a></li>
<li><a href="#Emits">Emits</a></li>
<li><a href="#Slots">Slots</a></li>
<li><a href="#Router">Router</a></li>
</ul>
<h2 id="bentuk-fundamental-dari-vue-options-api">Bentuk Fundamental dari vue | Options API</h2>
<pre><code class="lang-html"><span class="xml">
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {

  <span class="hljs-comment">// Properties returned from data() become reactive state</span>

  <span class="hljs-comment">// and will be exposed on `this`.</span>

  data() {

    <span class="hljs-keyword">return</span> {

      <span class="hljs-attr">count</span>: <span class="hljs-number">0</span>

    }

  },



  <span class="hljs-comment">// Methods are functions that mutate state and trigger updates.</span>

  <span class="hljs-comment">// They can be bound as event handlers in templates.</span>

  methods: {

    increment() {

      <span class="hljs-keyword">this</span>.count++

    }

  },



  <span class="hljs-comment">// Lifecycle hooks are called at different stages</span>

  <span class="hljs-comment">// of a component's lifecycle.</span>

  <span class="hljs-comment">// This function will be called when the component is mounted.</span>

  mounted() {

    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`The initial count is <span class="hljs-subst">${<span class="hljs-keyword">this</span>.count}</span>.`</span>)

  }

}

</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>



<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"increment"</span>&gt;</span>Count is: </span><span class="hljs-template-variable">{{ count }}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span>
</code></pre>
<p><strong>BreakDown code:</strong></p>
<ul>
<li>&#39;data()&#39;    : adalah bagian dimana kita menyampan State </li>
<li>&#39;methods&#39;   : adalah bagian dimana kita menuliskan event</li>
<li>&#39;mounted()&#39; : adalah dimana code akan dijalankan setiap ada perubahan state, dan awal halaman dimuat.</li>
<li>&#39;@click&#39;    : adalah attribute fungsi yang akan menjalankan component jika user melakukan interaksi ( life cycle ).</li>
</ul>
<!--0000000000000000000000000000000000000000000000000000000000000000000000000 Abstract Note 0000000000000000000000000000000000000000000000000000000000000000000000000000000000 -->
<hr>
<h1 id="abstract-note">Abstract Note</h1>
<hr>
<h2 id="halaman-utama-website-disini">Halaman utama website disini</h2>
<p>Tempat pengerjaan halaman awal pada vue adalah &#39;src/App.vue&#39;</p>
<h2 id="tahapan-menerima-komponent">Tahapan menerima komponent</h2>
<p>&#39;src/components&#39;</p>
<p>Setelah membuat component, jangan lupa untuk export dan import ke halaman yang dituju!</p>
<p>contoh:</p>
<pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">

<span class="hljs-keyword">import</span> HelloWorld <span class="hljs-keyword">from</span> <span class="hljs-string">'./components/HelloWorld.vue'</span>
<span class="hljs-keyword">import</span> Hello01 <span class="hljs-keyword">from</span> <span class="hljs-string">'.'</span>component/Hello01.vue

</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<h2 id="tahapan-untuk-menempelkan-komponent-ke-html-halaman">Tahapan untuk menempelkan komponent ke HTML halaman</h2>
<pre><code class="lang-html"><span class="hljs-section">&lt;template&gt;</span>

<span class="hljs-section">&lt;Hello01/&gt;</span>

<span class="hljs-section">&lt;template/&gt;</span>
</code></pre>
<h2 id="package-yang-di-export">Package yang di export</h2>
<pre><code class="lang-html"><span class="xml">
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="actionscript">

<span class="hljs-keyword">const</span> count = <span class="hljs-string">'Saya komponen baru'</span>

</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>





<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span></span><span class="hljs-template-variable">{{ count }}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>





<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">

<span class="hljs-selector-class">.read-the-docs</span> {

  <span class="hljs-attribute">color</span>: <span class="hljs-number">#888</span>;

}

</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></span>
</code></pre>
<h2 id="menjalankan-vue">Menjalankan vue</h2>
<pre><code class="lang-html"><span class="hljs-meta"># Instalasi vue js</span>
npm install -g @vue/cli

<span class="hljs-meta"># Atau upgrade dengan ini</span>
<span class="hljs-meta"># npm update -g @vue/cli</span>

<span class="hljs-meta"># Buat Vue App</span>
vue create hello-world 

<span class="hljs-meta"># Atau gunakan versi GUI untuk build</span>
<span class="hljs-meta"># vue ui</span>

cd &lt;your-project-name&gt;

npm run serve

<span class="hljs-meta"># Atau ini</span>
<span class="hljs-meta"># npm run dev</span>
</code></pre>
<p>Ref: <a href="https://vuejs.org/guide/quick-start">https://vuejs.org/guide/quick-start</a></p>
<p>Panduan instalasi: <a href="https://cli.vuejs.org/guide/installation.html">https://cli.vuejs.org/guide/installation.html</a></p>
<ul>
<li><a href="https://cli.vuejs.org/guide/creating-a-project.html#vue-cli-service-build">https://cli.vuejs.org/guide/creating-a-project.html#vue-cli-service-build</a></li>
</ul>
<h2 id="declarative-rendering">Declarative Rendering</h2>
<p>Adalah tindakan untuk membuat state dan melakukan perubahan kepada state tersebut.
Terdapat dua cara untuk melakukannya:</p>
<ul>
<li>Reactive() </li>
<li>ref()</li>
</ul>
<p><strong>Reactive()</strong></p>
<pre><code class="lang-Js"><span class="hljs-keyword">import</span> { reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>

const counter = reactive({
  <span class="hljs-keyword">count</span>: <span class="hljs-number">0</span>
})

console.log(counter.<span class="hljs-keyword">count</span>) <span class="hljs-comment">// 0</span>
counter.<span class="hljs-keyword">count</span>++
</code></pre>
<p>Breakdowcode:</p>
<ul>
<li>Memangil fungsi reactive</li>
<li>Membuat sebuah array of object (tempat menyimpan state)</li>
<li>&#39;count&#39; adalah state</li>
<li>&#39;counter.count&#39; adalah cara menampilkan value didalam state</li>
<li>&#39;counter.count++&#39; adalah melakukan perubahan data</li>
</ul>
<p>Reactive bekerja seperti halnya perintah &#39;map&#39; dan &#39;set&#39; didalam array.</p>
<p><strong>ref()</strong></p>
<pre><code class="lang-Js">import { <span class="hljs-keyword">ref</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>

<span class="hljs-keyword">const</span> message = <span class="hljs-keyword">ref</span>(<span class="hljs-string">'Hello World!'</span>)

console.log(message.<span class="hljs-keyword">value</span>) <span class="hljs-comment">// "Hello World!"</span>
message.<span class="hljs-keyword">value</span> = <span class="hljs-string">'Changed'</span>
</code></pre>
<p>Breakdowncode:</p>
<ul>
<li>Panggil &#39;ref&#39;</li>
<li>buat sebuah variabel yang akan menjadi state</li>
<li>&#39;message.value&#39; adalah cara menampilkan state</li>
<li><code>message.value = &#39;Changed&#39;</code> adalah cara melakukan perubahan state</li>
</ul>
<h2 id="attribute-binding">Attribute binding</h2>
<p>Adalah metode mengunakan state ditempat lain.</p>
<pre><code class="lang-html"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>

<span class="hljs-keyword">const</span> titleClass = ref(<span class="hljs-string">'title'</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">:class</span>=<span class="hljs-string">"titleClass"</span>&gt;</span>Make me red (</span><span class="hljs-template-variable">{{titleClass}}</span><span class="xml">)<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span> <span class="hljs-comment">&lt;!-- add dynamic class binding here --&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.title</span> {
  <span class="hljs-attribute">color</span>: red;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></span>
</code></pre>
<p>Breakdown:</p>
<ul>
<li>Gunakan &#39;ref&#39;</li>
<li>Dan buat state (titleClass)</li>
<li>State bisa digunakan sebagai txt value atau sebagai judul yang merujuk ke class css</li>
<li>state dengan value &#39;title&#39; merujuk kepada class css.</li>
</ul>
<p>Contoh penggunaan lainnya adalah </p>
<pre><code class="lang-html">&lt;<span class="hljs-keyword">div</span> v-bind:<span class="hljs-built_in">id</span>=<span class="hljs-string">"dynamicId"</span>&gt;&lt;/<span class="hljs-keyword">div</span>&gt;
</code></pre>
<p>Atau </p>
<pre><code class="lang-html">&lt;div <span class="hljs-symbol">:id=<span class="hljs-string">"dynamicId"</span>&gt;&lt;/div&gt;</span>
</code></pre>
<h2 id="event-listener">Event listener</h2>
<p>Adalah fungsi vue yang dimana dia akan memperhatikan interaksi yang diberikan oleh user. 
Sebagai contoh dibawah ini adalah, vue memperhatikan aksi &#39;click&#39; yang dilakukan oleh user.</p>
<pre><code class="lang-html"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>

<span class="hljs-keyword">const</span> count = ref(<span class="hljs-number">0</span>) <span class="hljs-comment">// State </span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">increment</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-comment">// blok fungsi </span>
  count.value++ 
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- Fungsi Event Listener --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"increment"</span>&gt;</span>Tambah : </span><span class="hljs-template-variable">{{ count }}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span>
</code></pre>
<p>Breakdown code:</p>
<ul>
<li>Panggil ref </li>
<li>tentukan state awal</li>
<li>buat blok fungsi, yang dimana dia akan dijalankan setiap kali ada interaksi (Event Listener)</li>
<li>Buat pembuka event listener (@click)</li>
</ul>
<p>Pembuka event listener memiliki dua macam:</p>
<p><code>&lt;button v-on:click=&quot;increment&quot;&gt;{{ count }}&lt;/button&gt;</code></p>
<p>atau bentuk shorthand</p>
<p><code>&lt;button @click=&quot;increment&quot;&gt;{{ count }}&lt;/button&gt;</code></p>
<h2 id="form-binding">Form Binding</h2>
<p>adalah fungsi dimana vue akan menjadi perantara form dan code fungsi javascript kita.
terdapat dua cara untuk melakukan Form Binding:</p>
<h3 id="cara-lama-manual-">Cara lama ( Manual )</h3>
<p><code>&lt;input :value=&quot;text&quot; @input=&quot;onInput&quot;&gt;</code></p>
<p>Disini:</p>
<ul>
<li>&#39;:value=text&#39; -- adalah sebagai output (menampilkan value ke form)</li>
<li>&#39;@input&#39;      -- adalah sebagai input (mengirim value ke state onInput)</li>
</ul>
<pre><code class="lang-html"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onInput</span>(<span class="hljs-title">e</span>) {</span>
 <span class="hljs-comment"> // a v-on handler receives the native DOM event</span>
 <span class="hljs-comment"> // as the argument.</span>
  <span class="hljs-keyword">text</span>.<span class="hljs-built_in">value</span> = e.target.<span class="hljs-built_in">value</span>
}
</code></pre>
<p>Disini:</p>
<ul>
<li>&#39;text.value&#39; adalah state yang akan ditampikan oleh form</li>
<li>&#39;e.target.value&#39; adalah nilai yang didapatkan form</li>
<li>&#39;text&#39; akan berubah setiap kali ada data baru dari fungsi onInput()</li>
</ul>
<h3 id="cara-baru-automatis-">Cara baru (Automatis)</h3>
<pre><code class="lang-html">&lt;<span class="hljs-selector-tag">input</span> v-model=<span class="hljs-string">"text"</span>&gt;
</code></pre>
<p>adalah bentuk penyederhanaan dari proses diatas. 
Kita tidak perlu lagi membuat function yang harus menerima setiap interaksi didalam form.</p>
<p>&#39;v-model&#39; juga bisa digunakan untuk checkbox.</p>
<h3 id="contoh-form-binding">Contoh Form binding</h3>
<pre><code class="lang-html"><span class="xml">
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="actionscript">
<span class="hljs-meta"><span class="hljs-meta-keyword">import</span> </span></span></span><span class="hljs-template-variable">{ ref }</span><span class="xml"><span class="javascript"> <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>

<span class="hljs-keyword">const</span> text = ref(<span class="hljs-string">''</span>) <span class="hljs-comment">// adalah state</span>

</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- v-model --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Type here"</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- menampilkan hasil state --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span></span><span class="hljs-template-variable">{{ text }</span><span class="xml">}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span>
</code></pre>
<p>Ref: <a href="https://vuejs.org/tutorial/#step-5">https://vuejs.org/tutorial/#step-5</a></p>
<h2 id="conditional-rendering">Conditional Rendering</h2>
<p>Disini element HTMl hanya akan dilakukan rendering oleh vue jika condition ( boolean ) adalah True. </p>
<pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>

<span class="hljs-keyword">const</span> awesome = ref(<span class="hljs-literal">true</span>) <span class="hljs-comment">// boolean state </span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">toggle</span>(<span class="hljs-params"></span>) </span>{
  awesome.value = !awesome.value <span class="hljs-comment">// timpa value bollean lama ke baru '!state'</span>
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"toggle"</span>&gt;</span>Toggle<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span> <span class="hljs-comment">&lt;!-- Event listener ke blok 'toggle'  --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">"awesome"</span>&gt;</span>Vue is awesome!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span> <span class="hljs-comment">&lt;!-- Mengacu ke boolean state  --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">v-else</span>&gt;</span>Oh no 😢<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span> <span class="hljs-comment">&lt;!-- akan menjadi ini jika state adalah FALSE --&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre>
<p>Ref: <a href="https://vuejs.org/guide/essentials/conditional.html">https://vuejs.org/guide/essentials/conditional.html</a></p>
<h2 id="list-rendering">List Rendering</h2>
<p>adalah cara untuk menampilkan data array kedalam halaman HTML.</p>
<p>Berikut adalah contoh Todo list sederhana:</p>
<pre><code class="lang-html"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>

<span class="hljs-comment">// give each todo a unique id</span>
<span class="hljs-keyword">let</span> id = <span class="hljs-number">0</span> 

<span class="hljs-keyword">const</span> newTodo = ref(<span class="hljs-string">''</span>) <span class="hljs-comment">// ini sebagai form state</span>
<span class="hljs-keyword">const</span> todos = ref([
  { <span class="hljs-attr">id</span>: id++, <span class="hljs-attr">text</span>: <span class="hljs-string">'Learn HTML'</span> },
  { <span class="hljs-attr">id</span>: id++, <span class="hljs-attr">text</span>: <span class="hljs-string">'Learn JavaScript'</span> },
  { <span class="hljs-attr">id</span>: id++, <span class="hljs-attr">text</span>: <span class="hljs-string">'Learn Vue'</span> }
])

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addTodo</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-comment">// ini adalah item yang terprint</span>
  todos.value.push({ <span class="hljs-attr">id</span>: id++, <span class="hljs-attr">text</span>: newTodo.value }) <span class="hljs-comment">// tambahkan value kedalam todos array</span>
  newTodo.value = <span class="hljs-string">''</span> <span class="hljs-comment">// bersihkan form state</span>
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeTodo</span>(<span class="hljs-params">todo</span>) </span>{ <span class="hljs-comment">// ini adalah aksesoris delete tambahan</span>
  todos.value = todos.value.filter(<span class="hljs-function">(<span class="hljs-params">t</span>) =&gt;</span> t !== todo) <span class="hljs-comment">// hapus item yang dipilih</span>
  <span class="hljs-comment">// filter, simpan semua item kecuali yang memiliki id sama dengan 't' atau 'todo'</span>
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- Form Start --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">form</span> @<span class="hljs-attr">submit.prevent</span>=<span class="hljs-string">"addTodo"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"newTodo"</span> <span class="hljs-attr">required</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"new todo"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>&gt;</span>Add Todo<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- Form End --&gt;</span>

   <span class="hljs-comment">&lt;!-- Pack --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- 1 pcs --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"todo in todos"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"todo.id"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
        </span><span class="hljs-template-variable">{{ todo.text }}</span><span class="xml">
      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"removeTodo(todo)"</span>&gt;</span>X<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- 1 pcs --&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- Pack --&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span>
</code></pre>
<h2 id="computed-property">computed property</h2>
<p>disini kita akan membuat fungsi &#39;done&#39; dimana pada todo list yang kita buat dapat menyembunyikan item yang &#39;done&#39;</p>
<p>contoh code seperti ini:</p>
<pre><code class="lang-html"><span class="xml">
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref, computed } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>

<span class="hljs-keyword">let</span> id = <span class="hljs-number">0</span>

<span class="hljs-keyword">const</span> newTodo = ref(<span class="hljs-string">''</span>) <span class="hljs-comment">// form state</span>
<span class="hljs-keyword">const</span> hideCompleted = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// indikator hide and show dari element tersebut</span>
<span class="hljs-keyword">const</span> todos = ref([
  { <span class="hljs-attr">id</span>: id++, <span class="hljs-attr">text</span>: <span class="hljs-string">'Learn HTML'</span>, <span class="hljs-attr">done</span>: <span class="hljs-literal">true</span> },
  { <span class="hljs-attr">id</span>: id++, <span class="hljs-attr">text</span>: <span class="hljs-string">'Learn JavaScript'</span>, <span class="hljs-attr">done</span>: <span class="hljs-literal">true</span> },
  { <span class="hljs-attr">id</span>: id++, <span class="hljs-attr">text</span>: <span class="hljs-string">'Learn Vue'</span>, <span class="hljs-attr">done</span>: <span class="hljs-literal">false</span> }
])

<span class="hljs-keyword">const</span> filteredTodos = computed(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> { 
  <span class="hljs-keyword">return</span> hideCompleted.value ? todos.value.filter(<span class="hljs-function">(<span class="hljs-params">t</span>) =&gt;</span> !t.done) : todos.value <span class="hljs-comment">// True : False</span>
  <span class="hljs-comment">// Jika True, maka</span>
  <span class="hljs-comment">// tampilkan hasil filter dari 'todos.value.filter((t) =&gt; !t.done)'</span>
  <span class="hljs-comment">// nilai default adalah false 'todos.value'</span>
})

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addTodo</span>(<span class="hljs-params"></span>) </span>{
  todos.value.push({ <span class="hljs-attr">id</span>: id++, <span class="hljs-attr">text</span>: newTodo.value, <span class="hljs-attr">done</span>: <span class="hljs-literal">false</span> }) <span class="hljs-comment">// tambahkan item kedalamn state</span>
  newTodo.value = <span class="hljs-string">''</span> <span class="hljs-comment">// refresh form</span>
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeTodo</span>(<span class="hljs-params">todo</span>) </span>{
  todos.value = todos.value.filter(<span class="hljs-function">(<span class="hljs-params">t</span>) =&gt;</span> t !== todo) <span class="hljs-comment">// hapus item sesuai dengan id yang dipilih</span>
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">form</span> @<span class="hljs-attr">submit.prevent</span>=<span class="hljs-string">"addTodo"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"newTodo"</span> <span class="hljs-attr">required</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"new todo"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>&gt;</span>Add Todo<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- 'li' akan diduplikasi sebanyak item di filteredTodos --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"todo in filteredTodos"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"todo.id"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"todo.done"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">:class</span>=<span class="hljs-string">"{ done: todo.done }"</span>&gt;</span></span><span class="hljs-template-variable">{{ todo.text }}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"removeTodo(todo)"</span>&gt;</span>X<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"hideCompleted = !hideCompleted"</span>&gt;</span>
    </span><span class="hljs-template-variable">{{ hideCompleted ? 'Show all' : 'Hide completed' }}</span><span class="xml">
  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.done</span> {
  <span class="hljs-attribute">text-decoration</span>: line-through;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></span>
</code></pre>
<h2 id="lifecyle">Lifecyle</h2>
<h3 id="lifecyle-and-template-refs">LifeCyle and template Refs</h3>
<p>Adalah panduan untuk melakukan configurasi DOM secara manual tidak lagi otomatis seperti sebelumnya. </p>
<pre><code class="lang-html">
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref, onMounted } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span> 

<span class="hljs-comment">// Ambil alamat dengan 'Template Ref'</span>
<span class="hljs-keyword">const</span> pElementRef = ref(<span class="hljs-literal">null</span>)

onMounted(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  <span class="hljs-comment">// onMounted adalah kondisi status saat component Mounted didalam LifeCyle</span>
  <span class="hljs-comment">// ini adalah blok code yang akan di eksekusi jika statusnya adalah mounted</span>
  pElementRef.value.textContent = <span class="hljs-string">'mounted!'</span> <span class="hljs-comment">// timpa text</span>
})

</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- Gunakan alamat tersebut di element HTML yang dituju --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"pElementRef"</span>&gt;</span>Hello<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre>
<p> Kondisi component ( hooks  ):</p>
<ul>
<li>onMounted</li>
<li>onUpdate </li>
<li><p>onUnmounted</p>
<h2 id="components">Components</h2>
<p>salah satu hal yang akan menjadi media terbaik dari vue adalah components.
Yaitu dimana kita akan membuat component dan akan dilekatkan kepada component lain.</p>
<p>Contoh:
```html</p>
<script setup>
// Panggil component lain
import ChildComp from './ChildComp.vue'
</script>

</li>
</ul>
<template>
  <!-- render child component -->
   <!-- Tempel mereka disini -->
  <ChildComp />
</template>
 <code>## Props

 adalah metode mengirim data kepada component lain dari penerima.
 bentuknya seperti ini:
- Komponen A (Import / penerima / Parent component) adalah sebagai penerima komponen lain
- Komponen B (Export / pengirim / child component) adalah komponen lain yang akan melengkapi

Code Komponen A (Parent component)</code>html
<script setup>
import { ref } from &#39;vue&#39;
import ChildComp from &#39;./ChildComp.vue&#39; // panggil komponen B

const greeting = ref(&#39;Hello from parent&#39;) // buat state
</script>

<template>
  <ChildComp :msg="greeting" /> <!-- Kirim data State ke komponen B -->
</template>
<code>code komponen B (child component)</code>html
<script setup>
const props = defineProps({ // Buat metode menerima data
  msg: String // &#39;msg&#39; adalah alamat variabel yang digunakan untuk menerima
})
</script>

<template>
  <h2>{{ msg || &#39;No props passed yet&#39; }}</h2> <!-- pasang variabel -->
</template>

<pre><code><span class="xml">Note:
- 'defineProps()' sudah built-in, oleh karena itu komponen B tidak perlu melakukan import


## Emits

adalah aksi parent (Komponent A) mengirim state ke komponent child (Komponent B)

```html
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="actionscript">
  <span class="hljs-comment">// ========= Ini adalah komponent parent (Komponent A) =======</span>
<span class="hljs-meta"><span class="hljs-meta-keyword">import</span> </span></span></span><span class="hljs-template-variable">{ ref }</span><span class="xml"><span class="javascript"> <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>
<span class="hljs-keyword">import</span> ChildComp <span class="hljs-keyword">from</span> <span class="hljs-string">'./ChildComp.vue'</span> <span class="hljs-comment">// panggil komponent child</span>

<span class="hljs-keyword">const</span> childMsg = ref(<span class="hljs-string">'No child msg yet'</span>) <span class="hljs-comment">// Buat state</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- panggil 'ChildComp' untuk menggambil state component child--&gt;</span>
   <span class="hljs-comment">&lt;!-- ChildComp hanya akan menampilkkan 'template' saja--&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ChildComp</span> @<span class="hljs-attr">response</span>=<span class="hljs-string">"(msg) =&gt; childMsg = msg"</span> /&gt;</span>
  <span class="hljs-comment">&lt;!-- 'hello from child' akan ditampikan dibawah sini (state awal di timpa)--&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span></span><span class="hljs-template-variable">{{ childMsg }</span><span class="xml">}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span>
</code></pre><pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="actionscript">
   <span class="hljs-comment">// ========= Ini adalah komponent child (Komponent B) =======</span>
<span class="hljs-keyword">const</span> emit = defineEmits([<span class="hljs-string">'response'</span>])

emit(<span class="hljs-string">'response'</span>, <span class="hljs-string">'hello from child'</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Child component<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre>
<h2 id="slots">Slots</h2>
<p>adalah metode parent component untuk mengirimkan dara ke child component.</p>
<p>Data dari parent akan dikirim ke element &quot;slot&quot;, dan tidak akan mengangu element lainnya.</p>
<p>content didalam element &quot;slot&quot; akan ditimpa oleh data dari parent</p>
<pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- Ini adalah child components --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">slot</span>&gt;</span>Fallback content<span class="hljs-tag">&lt;/<span class="hljs-name">slot</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    hanya elemnt "slot" yang diubah
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre>
<p>dibawah ini adalah parent components</p>
<pre><code class="lang-html"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="actionscript">
  <span class="hljs-comment">// Ini adalah parent component</span>
<span class="hljs-meta"><span class="hljs-meta-keyword">import</span> </span></span></span><span class="hljs-template-variable">{ ref }</span><span class="xml"><span class="javascript"> <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>
<span class="hljs-keyword">import</span> ChildComp <span class="hljs-keyword">from</span> <span class="hljs-string">'./ChildComp.vue'</span>

<span class="hljs-keyword">const</span> msg = ref(<span class="hljs-string">'from parent'</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ChildComp</span>&gt;</span>Message: </span><span class="hljs-template-variable">{{ msg }</span><span class="xml">}<span class="hljs-tag">&lt;/<span class="hljs-name">ChildComp</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span>
</code></pre>
<h2 id="router">Router</h2>
<p>Adalah Fungsi Untuk berpindah komponent, penjelasan lebih detail ada disini</p>
<p><a href="./vue/router.md">Route Vue Js</a></p>
<!-- 
// ===========================================================   Progress saat ini ================================================================
// Pastikan ini selalu di bagian bawah dari (abstract)
// 03/19/2025
// https://vuejs.org/tutorial/#step-14
// ===========================================================   Progress saat ini ================================================================
-->
<!--0000000000000000000000000000000000000000000000000000000000000000000000000 Glosariunm 0000000000000000000000000000000000000000000000000000000000000000000000000000000000 -->
<hr>
<h1 id="glosarium-kata-kunci">Glosarium | Kata kunci</h1>
<hr>
<h3 id="declarative-rendering-dr">Declarative Rendering | DR</h3>
<p>adalah perpanjangan dari vue yang membantu kita  untuk menulis HTML didalam file berebntuk JavaScript</p>
<h3 id="reactivity">Reactivity</h3>
<p>Vue akan secara otomatis melakukan tracking terhadap perubaha JavaScript &#39;state&#39; dan melakukan perubahan kepada DOM dengan seksama.</p>
<h3 id="single-file-components-sfl">Single-File Components | SFL</h3>
<p>adalah sebuah format file yang mengabungkan antara: HTML, JavaScript, CSS dengan nama format adalah &#39;*.vue&#39;</p>
<pre><code class="lang-JavaScript"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">

<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>

<span class="hljs-keyword">const</span> count = ref(<span class="hljs-number">0</span>)

</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>



<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"count++"</span>&gt;</span>Count is: </span><span class="hljs-template-variable">{{ count }}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>



<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">

<span class="hljs-selector-tag">button</span> {

  <span class="hljs-attribute">font-weight</span>: bold;

}

</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></span>
</code></pre>
<p>Format ini adalah bentuk rekomendasi dari Author ( official Vue )</p>
<h2 id="latihan-vue">Latihan Vue</h2>
<p><a href="./latihan-bahasa/latihan-vue.md">Latihan Halaman Quiz vue</a></p>
<hr>
<h1 id="reference">Reference</h1>
<hr>
<ul>
<li><a href="https://vuejs.org/guide/introduction.html">https://vuejs.org/guide/introduction.html</a></li>
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