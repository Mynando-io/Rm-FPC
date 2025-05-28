<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="membuat-todo-app">Membuat Todo App</h1>
<p>Pada tahap awal ini akan digunakan 3 component: </p>
<ul>
<li>App </li>
<li>item00</li>
<li>item01 </li>
</ul>
<p>Fungsi App </p>
<ul>
<li>Bisa melaklukan input data </li>
<li>data input dapat ditampilkan </li>
<li>memiliki fitur interactive dengan &quot;checkbox&quot;</li>
<li>data yang dipilih bisa dihilangkan.</li>
</ul>
<h2 id="app-js-halaman-utama">App.js halaman utama</h2>
<p>tidak ada perubahan data pada App.js hingga akhir. </p>
<pre><code class="lang-Js"><span class="hljs-keyword">import</span> logo <span class="hljs-keyword">from</span> <span class="hljs-string">'./logo.svg'</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">'./App.css'</span>;
<span class="hljs-keyword">import</span> Item00 <span class="hljs-keyword">from</span> <span class="hljs-string">'./item00'</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">App</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"App"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">header</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"App-header"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{logo}</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"App-logo"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"logo"</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Item00</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">header</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  );
}

export default App;</span>
</code></pre>
<h2 id="pengaturan-tambahan-untuk-index-css">Pengaturan tambahan untuk index.css</h2>
<pre><code><span class="hljs-selector-class">.inCh</span> {
  <span class="hljs-attribute">display</span>: flex;
}
</code></pre><p>cukup tambahkan code diatas</p>
<hr>
<h2 id="bagian-pertama">Bagian Pertama</h2>
<hr>
<p>buat file awal yaitu <code>item00</code> dimana kita akan membuat array, dan function disini. </p>
<p>Tujuan awal adalah: </p>
<ul>
<li>membuat dua component yang terhubung </li>
<li><code>item00</code> akan memanggil <code>item01</code> disetiap loop map()</li>
<li><code>item00</code> akan mengirim data function, atau state ke <code>item01</code></li>
</ul>
<pre><code class="lang-Js"><span class="hljs-comment">//item00.js </span>
<span class="hljs-keyword">import</span> React, { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>
<span class="hljs-keyword">import</span> Item01 <span class="hljs-keyword">from</span> <span class="hljs-string">'./item01'</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Item00</span>(<span class="hljs-params"></span>) </span>{

    <span class="hljs-keyword">let</span> [todos, setTodos] = useState([
        {<span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>:<span class="hljs-string">'appel'</span>, <span class="hljs-attr">completed</span>:<span class="hljs-literal">false</span>},
        {<span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>:<span class="hljs-string">'manggo'</span>, <span class="hljs-attr">completed</span>:<span class="hljs-literal">false</span>},
        {<span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>:<span class="hljs-string">'banana'</span>, <span class="hljs-attr">completed</span>:<span class="hljs-literal">false</span>},
]) <span class="hljs-comment">// ini adalah state update 'setTodos'</span>

    <span class="hljs-keyword">return</span> (

        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Item01</span> <span class="hljs-attr">todos</span>=<span class="hljs-string">{todos}</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
)
}

export default Item00</span>
</code></pre>
<p>Breakdown code: </p>
<ul>
<li><code>todos={todos}</code> adalah cara kita mengirim data dari file <code>item00</code> ke <code>item01</code> dimana data yang dikirim adalah state</li>
</ul>
<h2 id="tahap-selanjutnya">tahap selanjutnya</h2>
<p>membuat file <code>item01.js</code> yang menjadi penampil data </p>
<pre><code class="lang-Js"><span class="hljs-comment">//item01.js </span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Todos</span>(<span class="hljs-params">{todos}</span>)</span>{
    <span class="hljs-keyword">return</span>(
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    {todos.map((todo) =&gt; {
    let itemSp = (
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"inCh"</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span>/&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{todo.id}</span>&gt;</span>{todo.name}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{}</span>&gt;</span>x<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>

        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    )
    return itemSp

    })}

    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
)
}

export default Todos</span>
</code></pre>
<p>Breakdown code: </p>
<ul>
<li>jangan lupa masukan <code>todos</code> sebagai parameter</li>
<li>key adalah kunci penting dalam menampilkan data dari array. untuk memastikan kita bisa melakukan debuging dan mengurangi resiko error</li>
</ul>
<hr>
<h1 id="bagian-2">Bagian 2</h1>
<hr>
<p>tujuan:</p>
<ul>
<li>membuat item secara spesifik memiliki fitur interactive, dimana mereka akan secara otomatis mengalami perubahan pada <code>textDecoration</code>. </li>
<li>kita gunakan checkbox untuk menjadi indikator, dan input perubahan. </li>
</ul>
<pre><code class="lang-Js"><span class="hljs-comment">//item00.js </span>
<span class="hljs-comment">// didalam function Item00()</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">toggleCo</span>(<span class="hljs-params">todoId</span>) </span>{ <span class="hljs-comment">// efek interaktive</span>
        <span class="hljs-keyword">let</span> abc = todos.map(<span class="hljs-function">(<span class="hljs-params">todo</span>) =&gt;</span> {
            <span class="hljs-keyword">if</span> (todo.id === todoId){
                todo.completed = !todo.completed
                alert(todo.name)
            }
            <span class="hljs-keyword">return</span> todo <span class="hljs-comment">// bagian map</span>
        })
        setTodos(abc)
    }
</code></pre>
<p>informasi variabel:</p>
<ul>
<li><code>todoId</code> didapatkan dari <code>item01.js</code> yang mengirim data yaitu <code>todo.id</code> dari item yang menerima interaksi.</li>
<li><code>todo</code> adalah array spesifik didalam list, dengan menggunakan <code>map()</code> kita bisa mendapat &quot;array ocject&quot; secara spesifik dari dalam list &quot;array biasa&quot;</li>
</ul>
<p>Break donw code: </p>
<ul>
<li>kita membuat array baru dengan aturan <code>map()</code></li>
<li>dimana pada array baru ini, kita melakukan &quot;search&quot; <code>todo.id</code></li>
<li>jika sudah ditemukan, maka ubah nilai &quot;true/false&quot; menjadi sebaliknya <code>!todo.completed</code></li>
<li>setelah <code>map()</code> selesai</li>
<li>ubah state dengan cara <code>setTodos(abc)</code> </li>
<li>dimana <code>(abc)</code> adalah hasil perubahan keseluruhan array dari <code>map()</code></li>
</ul>
<p>lalu didalam Function Item00 return() </p>
<pre><code class="lang-JS">//item00.js
<span class="hljs-tag">&lt;<span class="hljs-name">Item01</span> <span class="hljs-attr">todos</span>=<span class="hljs-string">{todos}</span> <span class="hljs-attr">toggleCo</span>=<span class="hljs-string">{toggleCo}</span> /&gt;</span>
</code></pre>
<p>lakukan update pada Item01, dima kita akan mengirim function <code>toggleCo</code> kedalam component lain</p>
<h2 id="tahap-selanjutnya">Tahap selanjutnya</h2>
<pre><code class="lang-Js"><span class="hljs-comment">//item01.js</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Todos</span><span class="hljs-params">({todos, toggleCo,})</span>
</span>{

}
</code></pre>
<p>lakukan update parameter <code>toggleCo</code>. </p>
<pre><code class="lang-Js"><span class="hljs-comment">//item01.js</span>

&lt;input <span class="hljs-class"><span class="hljs-keyword">type</span></span>=<span class="hljs-string">"checkbox"</span>  className=<span class="hljs-string">""</span>
                onChange={() =&gt; toggleCo(todo.id) }
                /&gt;
</code></pre>
<p>lakukan update pada element &quot;checkbox&quot;, dimana jika element tersebut menerima interaksi, maka function didalamnya akan dipanggil. </p>
<hr>
<h1 id="bagian-3">Bagian 3</h1>
<hr>
<p>tujuan: </p>
<ul>
<li>dapat menghapus item spesifik</li>
</ul>
<p>pada <code>item00.js</code></p>
<pre><code class="lang-Js"><span class="hljs-comment">//item00.js </span>
<span class="hljs-comment">// Item00()</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">todoDelete</span>(<span class="hljs-params">todoId</span>)</span>{ <span class="hljs-comment">// menghapus element spesifik</span>
        <span class="hljs-keyword">let</span> abc = todos.filter(<span class="hljs-function">(<span class="hljs-params">todoMt</span>) =&gt;</span> {
            <span class="hljs-keyword">return</span> todoMt.id !== todoId
        })
        setTodos(abc)
        <span class="hljs-comment">// todoId menerima parameter dari onclick, dan todoIt adalah pemangilan berkala dari filter</span>
        <span class="hljs-comment">// filter sama seperti map, dimana dia juga melakukan loop. untuk memastikan semua telah sesuai</span>
        <span class="hljs-comment">// https://www.digitalocean.com/community/tutorials/js-filter-array-method</span>
    }
</code></pre>
<p>Informasi: </p>
<ul>
<li><code>todoId</code> - ini kita dapatkan dengan mengirim <code>todo.id</code> dari &quot;button&quot; pada file <code>item01.js</code>. dimana kita akan mendapatkan item spesifik yang ingin kita hapus.</li>
</ul>
<p>breakdown: </p>
<ul>
<li><code>todos.filter()</code> - bertujuan untuk mencari &quot;property&quot; yang sesuai didalam array. </li>
<li><code>return todoMt.id !== todoId</code> - ini adalah yang dicari, dimana semua item yang memiliki berbeda property state <code>id</code> dengan <code>todoId</code> akan disimpan didalam array baru <code>abc</code>.</li>
<li><code>setTodos(abc)</code> - array baru <code>abc</code> akan disimpan kedalam <code>todos</code>. secara mudahnya ditimpa array lama <code>todos</code> menjadi array baru <code>abc</code></li>
</ul>
<h3 id="selanjutnya">selanjutnya</h3>
<pre><code class="lang-JS"><span class="hljs-comment">// item01.js </span>
<span class="hljs-comment">// Item01() </span>

 &lt;<span class="hljs-keyword">button</span> <span class="hljs-keyword">onClick</span>={() =&gt; todoDelete(todo.id)}&gt;X&lt;/<span class="hljs-keyword">button</span>&gt;
</code></pre>
<ul>
<li>perbaiki &quot;button&quot; agar bisa mengirim informasi kepda function <code>todoDelete</code></li>
<li><code>todo.id</code> ini kita dapatkan dengan memanggil fungsi <code>map()</code> kepada <code>todos</code> array state</li>
</ul>
<hr>
<h1 id="bagian-4">Bagian 4</h1>
<hr>
<p>tujuan:</p>
<ul>
<li>melakukan &quot;record&quot; pada setiap perubahan huruf didalam form </li>
</ul>
<p>untuk melakukan &quot;recording&quot; kepada semua nilai input dari &quot;form&quot; kita bisa mengunakan fungsi <code>onChange</code>.</p>
<p>pada file <code>item00.js</code></p>
<pre><code class="lang-Js"><span class="hljs-comment">//item00.js </span>
<span class="hljs-comment">// inside Item00()</span>
<span class="hljs-keyword">let</span> [title, setTitle] = useState(<span class="hljs-string">''</span>)
</code></pre>
<ul>
<li>ini perlu kita buat &quot;state&quot; baru untuk menyimpan &quot;value/str&quot; dari form untuk sementara, setelah semua data complete. user bisa mengirim data sementara tersebut ke <code>todos</code></li>
</ul>
<h3 id="selanjutnya">Selanjutnya</h3>
<pre><code class="lang-JS"><span class="hljs-comment">//item00.js </span>
<span class="hljs-comment">// inside function Item()</span>
<span class="hljs-function">function <span class="hljs-title">handleChange</span>(<span class="hljs-params"><span class="hljs-keyword">event</span></span>)</span>{ <span class="hljs-comment">// menerima perubahan sync dari form</span>
    setTitle(<span class="hljs-keyword">event</span>.target.<span class="hljs-keyword">value</span>) <span class="hljs-comment">// Mengambil nilai dari form real time</span>
    <span class="hljs-comment">// kita buktikan dengan alert(title)</span>
    }
</code></pre>
<p><strong>Informasi</strong>: <code>event</code> parameter tersebut kita dapatkan disaat kita melakukan pemanggilan dari tool pada file <code>item00.js</code> dengan fungsi <code>onChange</code>. </p>
<p>Breakdown:</p>
<ul>
<li><code>event.target.value</code> itu adalah nilai &quot;str&quot; yang kita dapatkan dari form. dan cara melakukan akses kepada &quot;str&quot; tersebut. </li>
<li><code>setTitle</code> adalah untuk melakukan perubahan pada state <code>title</code></li>
</ul>
<h3 id="selanjutnya">Selanjutnya</h3>
<pre><code><span class="hljs-comment">// item00.js </span>
<span class="hljs-comment">// Item00() </span>

&lt;input
                    title=<span class="hljs-string">'Email'</span>
                    <span class="hljs-keyword">value</span>={title}
                    onChange={(<span class="hljs-keyword">event</span>) =&gt; {handleChange(<span class="hljs-keyword">event</span>)}} <span class="hljs-comment">// menyimpan input realtime</span>
                    /&gt;
</code></pre><p>Lakukan update pada element &quot;input&quot; didalam &quot;form&quot;</p>
<p>Breakdown: </p>
<ul>
<li><code>{title}</code> adalah memangil state baru yang kita buat. dimana state baru terssebut akan di update setiap kali user melakukan input 1 huruf. </li>
<li><code>onChange</code> untuk membuat function selalu dipanggil setiap kali terdapat perubahan pada form, gunakan <code>onChange</code></li>
<li><code>(event) =&gt; {handleChange(event)}</code> ini adalah function yang panggil</li>
</ul>
<hr>
<h1 id="bagian-5">Bagian 5</h1>
<hr>
<p>Tujuan:</p>
<ul>
<li>Membuat fitur, input dan melakukan penyimpanan kepada <code>todos</code></li>
<li>terdapat dua function<ul>
<li><code>addItem()</code> - digunakan untuk menyimpan hasil input &quot;form&quot; dan menyimpan hasil akhir kedalam <code>setTodos()</code></li>
<li><code>handleSubmit()</code> - digunakan untuk menerima perintah dari &quot;form&quot;, memangil function <code>addItem()</code>, dan melakukan pengubahan pada <code>setTitle()</code> agar setiap kali kita melakukan submit, form akan dibersihkan dari awal</li>
</ul>
</li>
</ul>
<p>pada file <code>item00.js</code></p>
<pre><code><span class="hljs-comment">// item00.js </span>
<span class="hljs-comment">// Item00()</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addItem</span>(<span class="hljs-params">todoTitle</span>)  </span>{ <span class="hljs-comment">// Fungsi untuk membuat object baru dan memasukan kedalam array todos</span>
            <span class="hljs-keyword">if</span> (todoTitle === <span class="hljs-string">''</span>) {
              <span class="hljs-keyword">return</span> <span class="hljs-string">''</span>
            }

            <span class="hljs-keyword">const</span> newTodo = {
              <span class="hljs-attribute">id:</span><span class="hljs-string"> todos.length</span> + <span class="hljs-number">1</span>, <span class="hljs-comment">// mereujuk ke state todos</span>
              <span class="hljs-attribute">name</span>: todoTitle,
              <span class="hljs-attribute">completed</span>: <span class="hljs-literal">false</span>,
            }

            <span class="hljs-keyword">const</span> updatedTodos = todos.concat(newTodo)
            setTodos(updatedTodos) <span class="hljs-comment">// merujuk kepada set setting</span>
          }
</code></pre><p>informasi: </p>
<ul>
<li><code>todoTitle</code> - didapatkan dari function lain <code>handleSubmit()</code></li>
</ul>
<p>break:</p>
<ul>
<li><code>if (todoTitle === &#39;&#39;)</code> - jika form bnelum diisi, maka code dibawahnya tidak akan dijalankan. </li>
<li><code>newTodo = {}</code> - addalah array object baru yang dibuat berdasarkan hasil input user. </li>
<li><code>id: todos.length + 1</code> - itu berarti id baru akan dibuat berdasarkan, banyak item didalam array <code>todos</code></li>
<li><code>todos.concat(newTodo)</code> - <code>concat</code> digunakan untuk mengabungkan array <code>todos</code> dengan <code>newTodo</code>. Yang menjadi <code>newTodo</code> adalah array urutan terakhir didalam <code>todos</code>.</li>
<li><code>setTodos(updatedTodos)</code> - simpan array baru tersebut, untuk menimpa array state lama <code>todos</code></li>
</ul>
<p>concat ref: <a href="https://www.w3schools.com/jsref/jsref_concat_array.asp">https://www.w3schools.com/jsref/jsref_concat_array.asp</a></p>
<h3 id="selanjutnya">Selanjutnya</h3>
<pre><code class="lang-Js"><span class="hljs-comment">// item00.js </span>
<span class="hljs-comment">// Item00()</span>
<span class="hljs-selector-tag">function</span> <span class="hljs-selector-tag">handleSubmit</span>(event){ <span class="hljs-comment">// melakukan penyimpanan data</span>
            <span class="hljs-selector-tag">event</span><span class="hljs-selector-class">.preventDefault</span>() <span class="hljs-comment">// memastikan bahwasanya fitur browser tidak menginterfensi code</span>
            <span class="hljs-selector-tag">addItem</span>(title) <span class="hljs-comment">// fungsi setter, dan state</span>
            <span class="hljs-selector-tag">setTitle</span>(<span class="hljs-string">''</span>)
        }
</code></pre>
<p>informasi: </p>
<ul>
<li><code>event</code> didapatkan disaat function ini dipanggil dari &quot;form&quot;</li>
<li><code>event.preventDefault()</code> digunakan untuk memastikan, proses react buatan kita tidak di interupsi oleh sistem browseer. </li>
<li><code>addItem()</code> - panggil fungsi diatas </li>
<li><code>setTitle()</code> - balikan perubahan pada state <code>title</code> yang menjadi representasi form, ke bentuk awal <code>&#39;&#39;</code></li>
</ul>
<h3 id="selanjutnya">Selanjutnya</h3>
<pre><code><span class="hljs-comment">// item00.js </span>
&lt;<span class="hljs-selector-tag">form</span> onSubmit={(evet) =&gt; {handleSubmit(evet)}}&gt;
</code></pre><p>perbarui &quot;tag form&quot; agar bisa menjalankan perintah tersebut disaat mereka dijalnakan. </p>
<hr>
<h1 id="bagian-akhir">Bagian Akhir</h1>
<hr>
<p>Hasil akhir code </p>
<p><a href="../../code/jsPro/todo">Hasil akhir</a></p>
<h3 id="reference">Reference</h3>
<ul>
<li><a href="https://www.freecodecamp.org/news/build-a-todo-app-from-scratch-with-reactjs/">https://www.freecodecamp.org/news/build-a-todo-app-from-scratch-with-reactjs/</a> [ Detail Guide ]</li>
<li><a href="https://github.com/iamspruce/create-a-todo-app-with-React">https://github.com/iamspruce/create-a-todo-app-with-React</a> [ Source Code ]</li>
<li><a href="https://create-a-todo-app-with-react.vercel.app/">https://create-a-todo-app-with-react.vercel.app/</a> [Output]</li>
<li><p><a href="https://vercel.com/new?filter=next.js">https://vercel.com/new?filter=next.js</a> [ Deploy ]</p>
</li>
<li><p><a href="https://stackblitz.com/edit/simple-react-todo-example-qevigz-hyjxhf?file=index.js">https://stackblitz.com/edit/simple-react-todo-example-qevigz-hyjxhf?file=index.js</a> [Simple react todo]</p>
</li>
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