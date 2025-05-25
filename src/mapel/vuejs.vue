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

<h2 id="event-listener">Event listener</h2>
<p>Adalah fungsi vue yang dimana dia akan memperhatikan interaksi yang diberikan oleh user. 
Sebagai contoh dibawah ini adalah, vue memperhatikan aksi &#39;click&#39; yang dilakukan oleh user.</p>

<pre>
  <code>
    &lt;script setup&gt;
import { ref } from &#39;vue&#39;

const count = ref(0) // State 

function increment() { // blok fungsi 
  count.value++ 
}
&lt;/script&gt;

&lt;template&gt;
  &lt;!-- Fungsi Event Listener --&gt;
  &lt;button @click=&quot;increment&quot;&gt;Tambah : {{ count }}&lt;/button&gt;
&lt;/template&gt;
  </code>
</pre>

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

<pre>
  <code>
    &lt;script setup&gt;
import { ref } from &#39;vue&#39;

const text = ref(&#39;&#39;) // adalah state

&lt;/script&gt;

&lt;template&gt;
  &lt;!-- v-model --&gt;
  &lt;input v-model=&quot;text&quot; placeholder=&quot;Type here&quot;&gt;
  &lt;!-- menampilkan hasil state --&gt;
  &lt;p&gt;{{ text }}&lt;/p&gt;
&lt;/template&gt;
  </code>
</pre>

<p>Ref: <a href="https://vuejs.org/tutorial/#step-5">https://vuejs.org/tutorial/#step-5</a></p>
<h2 id="conditional-rendering">Conditional Rendering</h2>
<p>Disini element HTMl hanya akan dilakukan rendering oleh vue jika condition ( boolean ) adalah True. </p>

<pre>
  <code>
    &lt;script setup&gt;
import { ref } from &#39;vue&#39;

const awesome = ref(true) // boolean state 

function toggle() {
  awesome.value = !awesome.value // timpa value bollean lama ke baru &#39;!state&#39;
}
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click=&quot;toggle&quot;&gt;Toggle&lt;/button&gt; &lt;!-- Event listener ke blok &#39;toggle&#39;  --&gt;
  &lt;h1 v-if=&quot;awesome&quot;&gt;Vue is awesome!&lt;/h1&gt; &lt;!-- Mengacu ke boolean state  --&gt;
  &lt;h1 v-else&gt;Oh no 😢&lt;/h1&gt; &lt;!-- akan menjadi ini jika state adalah FALSE --&gt;
&lt;/template&gt;
  </code>
</pre>

<p>Ref: <a href="https://vuejs.org/guide/essentials/conditional.html">https://vuejs.org/guide/essentials/conditional.html</a></p>
<h2 id="list-rendering">List Rendering</h2>
<p>adalah cara untuk menampilkan data array kedalam halaman HTML.</p>
<p>Berikut adalah contoh Todo list sederhana:</p>

<pre>
  <code>
    &lt;script setup&gt;
import { ref } from &#39;vue&#39;

// give each todo a unique id
let id = 0 

const newTodo = ref(&#39;&#39;) // ini sebagai form state
const todos = ref([
  { id: id++, text: &#39;Learn HTML&#39; },
  { id: id++, text: &#39;Learn JavaScript&#39; },
  { id: id++, text: &#39;Learn Vue&#39; }
])

function addTodo() { // ini adalah item yang terprint
  todos.value.push({ id: id++, text: newTodo.value }) // tambahkan value kedalam todos array
  newTodo.value = &#39;&#39; // bersihkan form state
}

function removeTodo(todo) { // ini adalah aksesoris delete tambahan
  todos.value = todos.value.filter((t) =&gt; t !== todo) // hapus item yang dipilih
  // filter, simpan semua item kecuali yang memiliki id sama dengan &#39;t&#39; atau &#39;todo&#39;
}
&lt;/script&gt;

&lt;template&gt;
  &lt;!-- Form Start --&gt;
  &lt;form @submit.prevent=&quot;addTodo&quot;&gt;
    &lt;input v-model=&quot;newTodo&quot; required placeholder=&quot;new todo&quot;&gt;
    &lt;button&gt;Add Todo&lt;/button&gt;
  &lt;/form&gt;
  &lt;!-- Form End --&gt;

   &lt;!-- Pack --&gt;
  &lt;ul&gt;
    &lt;!-- 1 pcs --&gt;
    &lt;li v-for=&quot;todo in todos&quot; :key=&quot;todo.id&quot;&gt;
      &lt;p&gt;
        \\{\\{ todo.text \\}\\}
      &lt;/p&gt;
      &lt;button @click=&quot;removeTodo(todo)&quot;&gt;X&lt;/button&gt;
    &lt;/li&gt;
    &lt;!-- 1 pcs --&gt;
  &lt;/ul&gt;
  &lt;!-- Pack --&gt;
&lt;/template&gt;
  </code>
</pre>

<h2 id="computed-property">computed property</h2>
<p>disini kita akan membuat fungsi &#39;done&#39; dimana pada todo list yang kita buat dapat menyembunyikan item yang &#39;done&#39;</p>
<p>contoh code seperti ini:</p>

<pre>
  <code>
    &lt;script setup&gt;
import { ref, computed } from &#39;vue&#39;

let id = 0

const newTodo = ref(&#39;&#39;) // form state
const hideCompleted = ref(false) // indikator hide and show dari element tersebut
const todos = ref([
  { id: id++, text: &#39;Learn HTML&#39;, done: true },
  { id: id++, text: &#39;Learn JavaScript&#39;, done: true },
  { id: id++, text: &#39;Learn Vue&#39;, done: false }
])

const filteredTodos = computed(() =&gt; { 
  return hideCompleted.value ? todos.value.filter((t) =&gt; !t.done) : todos.value // True : False
  // Jika True, maka
  // tampilkan hasil filter dari &#39;todos.value.filter((t) =&gt; !t.done)&#39;
  // nilai default adalah false &#39;todos.value&#39;
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false }) // tambahkan item kedalamn state
  newTodo.value = &#39;&#39; // refresh form
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) =&gt; t !== todo) // hapus item sesuai dengan id yang dipilih
}
&lt;/script&gt;

&lt;template&gt;
  &lt;form @submit.prevent=&quot;addTodo&quot;&gt;
    &lt;input v-model=&quot;newTodo&quot; required placeholder=&quot;new todo&quot;&gt;
    &lt;button&gt;Add Todo&lt;/button&gt;
  &lt;/form&gt;
  &lt;ul&gt;
    &lt;!-- &#39;li&#39; akan diduplikasi sebanyak item di filteredTodos --&gt;
    &lt;li v-for=&quot;todo in filteredTodos&quot; :key=&quot;todo.id&quot;&gt;
      &lt;input type=&quot;checkbox&quot; v-model=&quot;todo.done&quot;&gt;
      &lt;span :class=&quot;{ done: todo.done }&quot;&gt;\\{\\{ todo.text \\}\\}&lt;/span&gt;
      &lt;button @click=&quot;removeTodo(todo)&quot;&gt;X&lt;/button&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
  &lt;button @click=&quot;hideCompleted = !hideCompleted&quot;&gt;
    {{ hideCompleted ? &#39;Show all&#39; : &#39;Hide completed&#39; }}
  &lt;/button&gt;
&lt;/template&gt;

&lt;style&gt;
.done {
  text-decoration: line-through;
}
&lt;/style&gt;
  </code>
</pre>

<h2 id="lifecyle">Lifecyle</h2>
<h3 id="lifecyle-and-template-refs">LifeCyle and template Refs</h3>
<p>Adalah panduan untuk melakukan configurasi DOM secara manual tidak lagi otomatis seperti sebelumnya. </p>

<pre>
  <code>
    &lt;script setup&gt;
import { ref, onMounted } from &#39;vue&#39; 

// Ambil alamat dengan &#39;Template Ref&#39;
const pElementRef = ref(null)

onMounted(() =&gt; {
  // onMounted adalah kondisi status saat component Mounted didalam LifeCyle
  // ini adalah blok code yang akan di eksekusi jika statusnya adalah mounted
  pElementRef.value.textContent = &#39;mounted!&#39; // timpa text
})

&lt;/script&gt;

&lt;template&gt;
  &lt;!-- Gunakan alamat tersebut di element HTML yang dituju --&gt;
  &lt;p ref=&quot;pElementRef&quot;&gt;Hello&lt;/p&gt;
&lt;/template&gt;
  </code>
</pre>

<p>Kondisi component ( hooks  ):</p>
<ul>
<li>onMounted</li>
<li>onUpdate </li>
<li><p>onUnmounted</p>
<h2 id="components">Components</h2>
<p>salah satu hal yang akan menjadi media terbaik dari vue adalah components.
Yaitu dimana kita akan membuat component dan akan dilekatkan kepada component lain.</p>
<p>Contoh:</p>
</li>
</ul>

<pre>
  <code>
    &lt;script setup&gt;
// Panggil component lain
import ChildComp from &#39;./ChildComp.vue&#39;
&lt;/script&gt;

&lt;template&gt;
  &lt;!-- render child component --&gt;
   &lt;!-- Tempel mereka disini --&gt;
  &lt;ChildComp /&gt;
&lt;/template&gt;
  </code>
</pre>


<h2 id="props">Props</h2>
<p> adalah metode mengirim data kepada component lain dari penerima.
 bentuknya seperti ini:</p>
<ul>
<li>Komponen A (Import / penerima / Parent component) adalah sebagai penerima komponen lain</li>
<li>Komponen B (Export / pengirim / child component) adalah komponen lain yang akan melengkapi</li>
</ul>
<p>Code Komponen A (Parent component)</p>

<pre>
  <code>
    &lt;script setup&gt;
import { ref } from &#39;vue&#39;
import ChildComp from &#39;./ChildComp.vue&#39; // panggil komponen B

const greeting = ref(&#39;Hello from parent&#39;) // buat state
&lt;/script&gt;

&lt;template&gt;
  &lt;ChildComp :msg=&quot;greeting&quot; /&gt; &lt;!-- Kirim data State ke komponen B --&gt;
&lt;/template&gt;
  </code>
</pre>

<p>code komponen B (child component)</p>

<pre>
  <code>
    &lt;script setup&gt;
const props = defineProps({ // Buat metode menerima data
  msg: String // &#39;msg&#39; adalah alamat variabel yang digunakan untuk menerima
})
&lt;/script&gt;

&lt;template&gt;
  &lt;h2&gt;{{ msg || &#39;No props passed yet&#39; }}&lt;/h2&gt; &lt;!-- pasang variabel --&gt;
&lt;/template&gt;

  </code>
</pre>

<p>Note:</p>
<ul>
<li>&#39;defineProps()&#39; sudah built-in, oleh karena itu komponen B tidak perlu melakukan import</li>
</ul>
<h2 id="emits">Emits</h2>
<p>adalah aksi parent (Komponent A) mengirim state ke komponent child (Komponent B)</p>

<pre>
  <code>
    &lt;script setup&gt;
  // ========= Ini adalah komponent parent (Komponent A) =======
import { ref } from &#39;vue&#39;
import ChildComp from &#39;./ChildComp.vue&#39; // panggil komponent child

const childMsg = ref(&#39;No child msg yet&#39;) // Buat state
&lt;/script&gt;

&lt;template&gt;
  &lt;!-- panggil &#39;ChildComp&#39; untuk menggambil state component child--&gt;
   &lt;!-- ChildComp hanya akan menampilkkan &#39;template&#39; saja--&gt;
  &lt;ChildComp @response=&quot;(msg) =&gt; childMsg = msg&quot; /&gt;
  &lt;!-- &#39;hello from child&#39; akan ditampikan dibawah sini (state awal di timpa)--&gt;
  &lt;p&gt;{{ childMsg }}&lt;/p&gt;
&lt;/template&gt;
  </code>
</pre>

<pre>
<code>
  &lt;script setup&gt;
   // ========= Ini adalah komponent child (Komponent B) =======
const emit = defineEmits([&#39;response&#39;])

emit(&#39;response&#39;, &#39;hello from child&#39;)
&lt;/script&gt;

&lt;template&gt;
  &lt;h2&gt;Child component&lt;/h2&gt;
&lt;/template&gt;
</code>
</pre>

<h2 id="slots">Slots</h2>
<p>adalah metode parent component untuk mengirimkan dara ke child component.</p>
<p>Data dari parent akan dikirim ke element &quot;slot&quot;, dan tidak akan mengangu element lainnya.</p>
<p>content didalam element &quot;slot&quot; akan ditimpa oleh data dari parent</p>

<pre>
<code>
  &lt;template&gt;
  &lt;!-- Ini adalah child components --&gt;
  &lt;slot&gt;Fallback content&lt;/slot&gt;
  &lt;p&gt;
    hanya elemnt &quot;slot&quot; yang diubah
  &lt;/p&gt;
&lt;/template&gt;
</code>
</pre>

<p>dibawah ini adalah parent components</p>

<pre>
<code>
  &lt;script setup&gt;
  // Ini adalah parent component
import { ref } from &#39;vue&#39;
import ChildComp from &#39;./ChildComp.vue&#39;

const msg = ref(&#39;from parent&#39;)
&lt;/script&gt;

&lt;template&gt;
  &lt;ChildComp&gt;Message: {{ msg }}&lt;/ChildComp&gt;
&lt;/template&gt;
</code>
</pre>


<h2 id="router">Router</h2>
<p>Adalah Fungsi Untuk berpindah komponent, penjelasan lebih detail ada disini</p>
<p><a href="./vue/router.md">Route Vue Js</a></p>

<hr>
<h1 id="glosarium-kata-kunci">Glosarium | Kata kunci</h1>
<hr>
<h3 id="declarative-rendering-dr">Declarative Rendering | DR</h3>
<p>adalah perpanjangan dari vue yang membantu kita  untuk menulis HTML didalam file berebntuk JavaScript</p>
<h3 id="reactivity">Reactivity</h3>
<p>Vue akan secara otomatis melakukan tracking terhadap perubaha JavaScript &#39;state&#39; dan melakukan perubahan kepada DOM dengan seksama.</p>
<h3 id="single-file-components-sfl">Single-File Components | SFL</h3>
<p>adalah sebuah format file yang mengabungkan antara: HTML, JavaScript, CSS dengan nama format adalah &#39;*.vue&#39;</p>

<pre>
<code>
  &lt;script setup&gt;

import { ref } from &#39;vue&#39;

const count = ref(0)

&lt;/script&gt;



&lt;template&gt;

  &lt;button @click=&quot;count++&quot;&gt;Count is: {{ count }}&lt;/button&gt;

&lt;/template&gt;



&lt;style scoped&gt;

button {

  font-weight: bold;

}

&lt;/style&gt;
</code>
</pre>

<p>Format ini adalah bentuk rekomendasi dari Author ( official Vue )</p>
<h2 id="latihan-vue">Latihan Vue</h2>
<p>
  <RouterLink to="/ltVue" class="LFT-Item"> 
    Latihan Vue
    </RouterLink>
</p>
<hr>
<h1 id="reference">Reference</h1>
<hr>
<ul>
<li><a href="https://vuejs.org/guide/introduction.html">https://vuejs.org/guide/introduction.html</a></li>
</ul>



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