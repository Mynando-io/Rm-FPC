<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="sample-markdown">Sample Markdown</h1>
<p>This is some basic, sample markdown.</p>
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

<pre>
  <code>
    
&lt;script&gt;

export default {

  // Properties returned from data() become reactive state

  // and will be exposed on `this`.

  data() {

    return {

      count: 0

    }

  },



  // Methods are functions that mutate state and trigger updates.

  // They can be bound as event handlers in templates.

  methods: {

    increment() {

      this.count++

    }

  },



  // Lifecycle hooks are called at different stages

  // of a component&#39;s lifecycle.

  // This function will be called when the component is mounted.

  mounted() {

    console.log(`The initial count is ${this.count}.`)

  }

}

&lt;/script&gt;



&lt;template&gt;

  &lt;button @click=&quot;increment&quot;&gt;Count is: {{ count }}&lt;/button&gt;

&lt;/template&gt;

  </code>
</pre>

<p><strong>BreakDown code:</strong></p>
<ul>
<li>&#39;data()&#39;    : adalah bagian dimana kita menyampan State </li>
<li>&#39;methods&#39;   : adalah bagian dimana kita menuliskan event</li>
<li>&#39;mounted()&#39; : adalah dimana code akan dijalankan setiap ada perubahan state, dan awal halaman dimuat.</li>
<li>&#39;@click&#39;    : adalah attribute fungsi yang akan menjalankan component jika user melakukan interaksi ( life cycle ).</li>
</ul>

<hr>
<h1 id="abstract-note">Abstract Note</h1>
<hr>
<h2 id="halaman-utama-website-disini">Halaman utama website disini</h2>
<p>Tempat pengerjaan halaman awal pada vue adalah &#39;src/App.vue&#39;</p>
<h2 id="tahapan-menerima-komponent">Tahapan menerima komponent</h2>

<p>&#39;src/components&#39;</p>
<p>Setelah membuat component, jangan lupa untuk export dan import ke halaman yang dituju!</p>
<p>contoh:</p>

<pre>
  <code>
    &lt;script setup&gt;

import HelloWorld from &#39;./components/HelloWorld.vue&#39;
import Hello01 from &#39;.&#39;component/Hello01.vue

&lt;/script&gt;
  </code>
</pre>

<h2 id="tahapan-untuk-menempelkan-komponent-ke-html-halaman">Tahapan untuk menempelkan komponent ke HTML halaman</h2>

<pre>
  <code>
    &lt;template&gt;

&lt;Hello01/&gt;

&lt;template/&gt;
  </code>
</pre>

<h2 id="package-yang-di-export">Package yang di export</h2>

<pre>
  <code>
    &lt;script setup&gt;

const count = &#39;Saya komponen baru&#39;

&lt;/script&gt;





&lt;template&gt;

&lt;h1&gt;{{ count }}&lt;/h1&gt;

&lt;/template&gt;





&lt;style scoped&gt;

.read-the-docs {

  color: #888;

}

&lt;/style&gt;
  </code>
</pre>

<h2 id="menjalankan-vue">Menjalankan vue</h2>

<pre>
  <code>
    # Instalasi vue js
npm install -g @vue/cli

# Atau upgrade dengan ini
# npm update -g @vue/cli

# Buat Vue App
vue create hello-world 

# Atau gunakan versi GUI untuk build
# vue ui

cd &lt;your-project-name&gt;

npm run serve

# Atau ini
# npm run dev
  </code>
</pre>

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

<pre>
  <code>
    import { reactive } from 'vue'

const counter = reactive({
  count: 0
})

console.log(counter.count) // 0
counter.count++
  </code>
</pre>

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

<pre>
  <code>
    import { ref } from 'vue'

const message = ref('Hello World!')

console.log(message.value) // "Hello World!"
message.value = 'Changed'

    </code>
</pre>

<p>Breakdowncode:</p>
<ul>
<li>Panggil &#39;ref&#39;</li>
<li>buat sebuah variabel yang akan menjadi state</li>
<li>&#39;message.value&#39; adalah cara menampilkan state</li>
<li><code>message.value = &#39;Changed&#39;</code> adalah cara melakukan perubahan state</li>
</ul>
<h2 id="attribute-binding">Attribute binding</h2>
<p>Adalah metode mengunakan state ditempat lain.</p>

<pre>
  <code>
    &lt;script setup&gt;
import { ref } from &#39;vue&#39;

const titleClass = ref(&#39;title&#39;)
&lt;/script&gt;

&lt;template&gt;
  &lt;h1 :class=&quot;titleClass&quot;&gt;Make me red ({{titleClass}})&lt;/h1&gt; &lt;!-- add dynamic class binding here --&gt;
&lt;/template&gt;

&lt;style&gt;
.title {
  color: red;
}
&lt;/style&gt;
  </code>
</pre>

<p>Breakdown:</p>
<ul>
<li>Gunakan &#39;ref&#39;</li>
<li>Dan buat state (titleClass)</li>
<li>State bisa digunakan sebagai txt value atau sebagai judul yang merujuk ke class css</li>
<li>state dengan value &#39;title&#39; merujuk kepada class css.</li>
</ul>
<p>Contoh penggunaan lainnya adalah </p>

<pre>
  <code>
    &lt;div v-bind:id=&quot;dynamicId&quot;&gt;&lt;/div&gt;
  </code>
</pre>

<pre>
  <code>
    &lt;div :id=&quot;dynamicId&quot;&gt;&lt;/div&gt;
  </code>
</pre>


<!-- ===================================== biarkan code dibawah ini ====================================  -->
<nav>
    <RouterLink to="/">Go to Home</RouterLink>
</nav>
<!-- 000000000000000000000000000000000000000000000000000000 Template area end  000000000000000000000000000000000000000000 -->
</template>






<style scoped>

/* ============================================== Style area start ======================================= */


/* ============================================== Style area end ======================================= */
</style>