<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="catatan-pembuatan-project-note">Catatan pembuatan project note</h1>
<p>tujuan adalah membuat aplikasi note, seperti TodoApp. dimana kita akan melakukan</p>
<ul>
<li>Input data </li>
<li>Membuat form baru </li>
<li>close form </li>
<li>submit input </li>
<li>tampilkan hasil submit</li>
</ul>
<hr>
<h1 id="tahap-1">Tahap 1</h1>
<hr>
<ul>
<li>Membuat file khusus untuk css</li>
<li>aturan css pada file khusus</li>
<li>configurasi file </li>
</ul>
<p>Expo App yang digunakan berasal dari React template codespace.</p>
<pre><code>&gt; /(tabs)
&gt; index<span class="hljs-selector-class">.tsx</span>
&gt; &gt; /components
&gt; &gt; Style<span class="hljs-selector-class">.tsx</span> 
&gt; &gt; Home<span class="hljs-selector-class">.tsx</span> 
&gt; &gt; customTextInput<span class="hljs-selector-class">.tsx</span> 
&gt; &gt; customButton.tsx
</code></pre><p>dimana disana kita akan membuat folder baru bernama <code>/components</code> dan 4 file didalamnya. </p>
<p>penjelasan file:</p>
<ul>
<li><code>Style.tsx</code> - disini hanya akan fokus untuk css, dan tidak akan menyentuh komponen lain. </li>
</ul>
<p><strong>Aturan css</strong>:</p>
<ul>
<li>tidak ada file dengan format css pada native </li>
<li>property seperti <code>backgroundColor</code> bisa digunakan pada container </li>
<li>tetapi container tidak bisa modifikasi property <code>color</code> pada item.</li>
<li>oleh karena itu <code>backgroundColor</code> gunakan untuk container, dan <code>color</code> gunakan untuk item</li>
</ul>
<hr>
<h1 id="bagian-2">bagian 2</h1>
<hr>
<ul>
<li>Menyiapkan button </li>
<li>Menyiaopkan form </li>
<li>Menyiapkan home, yang akan menerima button dan mengatur tata letak mereka.</li>
</ul>
<h3 id="custombutton">customButton</h3>
<pre><code class="lang-Js"><span class="hljs-comment">// customButton.js </span>

<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>
<span class="hljs-keyword">import</span> { TouchableOpacity, Text } <span class="hljs-keyword">from</span> <span class="hljs-string">'react-native'</span>

<span class="hljs-keyword">import</span> { styles } <span class="hljs-keyword">from</span> <span class="hljs-string">'./Style'</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">CustomButton</span>(<span class="hljs-params">{text, onPress}</span>)</span>{
    <span class="hljs-keyword">return</span> (
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">TouchableOpacity</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{styles.button}</span> <span class="hljs-attr">onPress</span>=<span class="hljs-string">{onPress}</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Text</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{styles.tesxt}</span>&gt;</span>{text}<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">TouchableOpacity</span>&gt;</span></span>
      )
}


<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> CustomButton
</code></pre>
<ul>
<li>fungsi <code>customButton</code> menerima parameter <code>text, dan onPress</code></li>
<li>diman itu adalah component yang dikirm oleh file lain. </li>
</ul>
<h3 id="customtextinput">customTextInput</h3>
<pre><code class="lang-Js"><span class="hljs-comment">// customTextInput/tsx </span>

<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>
<span class="hljs-keyword">import</span> { TextInput, Text, View } <span class="hljs-keyword">from</span> <span class="hljs-string">'react-native'</span>
<span class="hljs-keyword">import</span> { styles } <span class="hljs-keyword">from</span> <span class="hljs-string">'./Style'</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">CustomTextInput</span>(<span class="hljs-params">{text, onChange, label, multiline, numberOfLines}</span>)</span>{

    <span class="hljs-keyword">return</span> (

        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span>

          <span class="hljs-tag">&lt;<span class="hljs-name">Text</span>&gt;</span>{label}<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>

          <span class="hljs-tag">&lt;<span class="hljs-name">TextInput</span>
            <span class="hljs-attr">multiline</span>=<span class="hljs-string">{multiline}</span>
            <span class="hljs-attr">numberOfLines</span>=<span class="hljs-string">{numberOfLines}</span>
            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">{label}</span>
            <span class="hljs-attr">onChangeText</span>=<span class="hljs-string">{onChange}</span>
            <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">{text}</span>
          /&gt;</span>

        <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>
      )
  }

export default CustomTextInput</span>
</code></pre>
<ul>
<li><code>{text, onChange, label, multiline, numberOfLines}</code> adalah component yang dikirim oleh file lain. </li>
<li><code>TextInput</code> component tersebut akan ditata rapi didalam form tersebut</li>
</ul>
<h3 id="home">Home</h3>
<pre><code class="lang-Js">// Home.tsx
<span class="hljs-keyword">import</span> React from <span class="hljs-string">'react'</span>
<span class="hljs-keyword">import</span> { FlatList, View, Text } from <span class="hljs-string">'react-native'</span>
<span class="hljs-keyword">import</span> CustomButton from <span class="hljs-string">'./customButton'</span>
<span class="hljs-keyword">import</span> { styles } from <span class="hljs-string">'./Style'</span>

<span class="hljs-keyword">function</span> NoteCard({item}) { // pemangilan kedua
    return(
        &lt;View&gt;

    &lt;Text&gt;{item.title}&lt;/Text&gt;
    &lt;Text&gt;{item.desc}&lt;/Text&gt;

    &lt;View style={styles.bcontain}&gt; {/* === Buat container untuk dua button kosong ===*/}
      &lt;CustomButton
        text=<span class="hljs-string">"Ubah"</span>
        onPress={() =&gt; {}}
      /&gt;

      &lt;CustomButton
        text=<span class="hljs-string">"Hapus"</span>
        onPress={() =&gt; {}}
      /&gt;

    &lt;/View&gt;

  &lt;/View&gt;
    )
}
<span class="hljs-keyword">function</span> home({noteList}){ // Pemangilan pertama, <span class="hljs-string">"noteList"</span> adalah penerima data dari file lain. yaitu index.tsx
    return (
        &lt;View&gt;
          &lt;CustomButton
        text=<span class="hljs-string">"Tambahkan Note"</span>
        onPress={() =&gt; {}}
      /&gt;
          &lt;FlatList // {/* Menampilkan array item dan button disebelah mereka  */}
            showsVerticalScrollIndicator={false}
            data={noteList}
            renderItem={NoteCard}
            keyExtractor={(item) =&gt; item.id}
          /&gt;
        &lt;/View&gt;
      )
}



export <span class="hljs-keyword">default</span> home
</code></pre>
<ul>
<li><code>Home.tsx</code> digunakan untuk memangil form, dan juga menata tempat bagi array item.</li>
</ul>
<h3 id="index">index</h3>
<pre><code class="lang-Js"><span class="hljs-comment">// index.tsx </span>
<span class="hljs-keyword">import</span> React, { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>
<span class="hljs-keyword">import</span> { View, Text } <span class="hljs-keyword">from</span> <span class="hljs-string">'react-native'</span>
<span class="hljs-keyword">import</span> Home <span class="hljs-keyword">from</span> <span class="hljs-string">'./components/Home'</span>
<span class="hljs-keyword">import</span> { styles } <span class="hljs-keyword">from</span> <span class="hljs-string">'./components/Style'</span>


<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">App</span>(<span class="hljs-params"></span>)</span>{

  <span class="hljs-keyword">const</span> [noteList, setNoteList] = useState([
    {
      <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">title</span>: <span class="hljs-string">'Note pertama'</span>,
      <span class="hljs-attr">desc</span>:
        <span class="hljs-string">'Lorem Ipsum is simply dummy text of the printing and typesetting industry'</span>,
    },
  ])

  <span class="hljs-keyword">return</span>(
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{styles.zero}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{styles.main}</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Home</span> <span class="hljs-attr">noteList</span>=<span class="hljs-string">{noteList}</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>

    <span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span>
  )
}



export default App;</span>
</code></pre>
<ul>
<li><code>index.tsx</code> - ditujukan untuk membuat state list, dan array.</li>
<li>dan akan memangil <code>Home.tsx</code> </li>
</ul>
<hr>
<h1 id="bagian-2">Bagian 2</h1>
<hr>
<ul>
<li>tujuan: membuat halaman lain, untuk input form. </li>
<li>menyiapkan folder dan file baru untuk itu </li>
</ul>
<pre><code><span class="hljs-comment">// Pada directory yang sama dengan folder components</span>
&gt; /screen
&gt; addNote<span class="hljs-selector-class">.tsx</span> 
&gt; editNote<span class="hljs-selector-class">.tsx</span> 
&gt; home.tsx
</code></pre><h3 id="addnote">addNote</h3>
<pre><code class="lang-JS">// addNote.tsx

<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>
<span class="hljs-keyword">import</span> { Text } <span class="hljs-keyword">from</span> <span class="hljs-string">'react-native'</span>

const AddNote = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> &lt;Text&gt;Tambahkan Note&lt;/Text&gt;

<span class="hljs-keyword">export</span> default AddNote
</code></pre>
<h3 id="editnote">editNote</h3>
<pre><code class="lang-Js">// editNote.tsx
<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>
<span class="hljs-keyword">import</span> { Text } <span class="hljs-keyword">from</span> <span class="hljs-string">'react-native'</span>

const EditNote = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> &lt;Text&gt;Ubah Note&lt;/Text&gt;

<span class="hljs-keyword">export</span> default EditNote
</code></pre>
<h3 id="home">Home</h3>
<pre><code class="lang-JS">// Home.tsx
<span class="hljs-keyword">import</span> React from <span class="hljs-string">'react'</span>
<span class="hljs-keyword">import</span> { FlatList, View, Text } from <span class="hljs-string">'react-native'</span>
<span class="hljs-keyword">import</span> CustomButton from <span class="hljs-string">'./customButton'</span>
<span class="hljs-keyword">import</span> { styles } from <span class="hljs-string">'./Style'</span>

<span class="hljs-keyword">function</span> NoteCard({item, setCurrentPage}) { // pemangilan kedua
    return(
        &lt;View&gt;

    &lt;Text&gt;{item.title}&lt;/Text&gt;
    &lt;Text&gt;{item.desc}&lt;/Text&gt;

    &lt;View style={styles.bcontain}&gt; {/* === Buat container untuk dua button kosong ===*/}

      &lt;CustomButton
        text=<span class="hljs-string">"Ubah"</span>
        onPress={() =&gt; {setCurrentPage(<span class="hljs-string">'edit'</span>)}}
      /&gt;

      &lt;CustomButton
        text=<span class="hljs-string">"Hapus"</span>
        onPress={() =&gt; {}}
      /&gt;

    &lt;/View&gt;

  &lt;/View&gt;
    )
}
<span class="hljs-keyword">function</span> home({noteList, setCurrentPage}){ // Pemangilan pertama, <span class="hljs-string">"noteList"</span> adalah penerima data dari file lain. yaitu index.tsx
    return (
        &lt;View&gt;
          &lt;CustomButton
        text=<span class="hljs-string">"Tambahkan Note"</span>
        onPress={() =&gt; {setCurrentPage(<span class="hljs-string">'add'</span>)}}
      /&gt;
          &lt;FlatList // {/* Menampilkan array item dan button disebelah mereka  */}
            showsVerticalScrollIndicator={false}
            data={noteList}

            renderItem={({ item }) =&gt; (
              &lt;NoteCard item={item} setCurrentPage={setCurrentPage} /&gt;
            )}

            keyExtractor={(item) =&gt; item.id}

          /&gt;
        &lt;/View&gt;
      )
}



export <span class="hljs-keyword">default</span> home
</code></pre>
<ul>
<li>pada dua function ditas, tambahkan parameter <code>setCurrentPage</code></li>
<li>dimana render item disini akan diperjelas, dimana mengunakan fitur method <code>map()</code> kita akan memangil mereka semua satu persatu item.</li>
<li><code>{setCurrentPage(&#39;edit&#39;)}</code> - digunakan untuk memangil component <code>AddNote</code></li>
<li><code>{setCurrentPage(&#39;add&#39;)}</code> -  digunakan untuk meamngil component <code>EditNote</code> yang bisa kita akses setelah component ini terhubung dengan <code>index.tsx</code></li>
</ul>
<h3 id="index">index</h3>
<pre><code class="lang-Js"><span class="hljs-comment">// index.tsx</span>

import React, { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>
import { View, Text } <span class="hljs-keyword">from</span> <span class="hljs-string">'react-native'</span>
import Home <span class="hljs-keyword">from</span> <span class="hljs-string">'./components/Home'</span>
import AddNote <span class="hljs-keyword">from</span> <span class="hljs-string">'./screens/addNote'</span>
import EditNote <span class="hljs-keyword">from</span> <span class="hljs-string">'./screens/editNote'</span>
import { styles } <span class="hljs-keyword">from</span> <span class="hljs-string">'./components/Style'</span>


<span class="hljs-comment">// ====================== New function =====================</span>
<span class="hljs-function">function <span class="hljs-title">CurrentPageWidget</span> (<span class="hljs-params">{ currentPage, noteList, setCurrentPage }</span>)</span>{
  <span class="hljs-keyword">switch</span> (currentPage) {
    <span class="hljs-keyword">case</span> <span class="hljs-string">'home'</span>: <span class="hljs-comment">// memasukan state "noteList" dan setState "setCurrentPage"</span>
      <span class="hljs-keyword">return</span> (
        &lt;Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
        /&gt;
      )
    <span class="hljs-keyword">case</span> <span class="hljs-string">'add'</span>: <span class="hljs-comment">// ubah component pada halaman</span>
      <span class="hljs-keyword">return</span> &lt;AddNote /&gt;
    <span class="hljs-keyword">case</span> <span class="hljs-string">'edit'</span>: <span class="hljs-comment">// ubah component pada halaman</span>
      <span class="hljs-keyword">return</span> &lt;EditNote /&gt;
    <span class="hljs-keyword">default</span>: <span class="hljs-comment">// kembali ke component awal saat 'home'</span>
      <span class="hljs-keyword">return</span> &lt;Home /&gt;
  }
}


<span class="hljs-function">function <span class="hljs-title">App</span>(<span class="hljs-params"></span>)</span>{
  <span class="hljs-keyword">const</span> [currentPage, setCurrentPage] = useState(<span class="hljs-string">'home'</span>) <span class="hljs-comment">// New state</span>

  <span class="hljs-keyword">const</span> [noteList, setNoteList] = useState([
    {
      id: <span class="hljs-number">1</span>,
      title: <span class="hljs-string">'Note pertama'</span>,
      desc:
        <span class="hljs-string">'Lorem Ipsum is simply dummy text of the printing and typesetting industry'</span>,
    },
  ])

  <span class="hljs-keyword">return</span>(
    &lt;View style={styles.zero}&gt;
      &lt;View style={styles.main}&gt;

      &lt;CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
    /&gt;

&lt;/View&gt;

    &lt;/View&gt;
  )
}



export <span class="hljs-keyword">default</span> App;
</code></pre>
<ul>
<li>disini kita menggunakan &quot;switch case&quot;. untuk memangil component apa yang akan ditampilkan pada halaman. sama seperti <code>{ state ? }</code></li>
</ul>
<hr>
<p>Bagian 3</p>
<hr>
<hr>
<p>Bagian Akhir </p>
<hr>
<p><a href="../../code/jsPro/note-todoApp-expo">Source code</a></p>
<h2 id="referensi">Referensi</h2>
<ul>
<li><p><a href="https://medium.com/@yildizfatma/handling-user-input-in-react-native-expo-text-input-buttons-6e7931bc227a">https://medium.com/@yildizfatma/handling-user-input-in-react-native-expo-text-input-buttons-6e7931bc227a</a></p>
</li>
<li><p><a href="https://medium.com/nerd-for-tech/make-todo-list-application-using-react-native-expo-for-ios-and-android-device-1de436168f86">Todoapp</a></p>
</li>
<li><a href="https://codeflarelimited.com/blog/use-external-style-sheet-in-react-native/">React native and css</a></li>
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