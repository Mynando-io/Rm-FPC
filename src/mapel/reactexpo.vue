<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="expo">Expo</h1>
<h2 id="react-native">React Native</h2>
<p>React Native adalah framework open-source yang dapat membantu kita untuk melakukan pengembangan suatu aplikasi mobile dengan javascriopt. </p>
<p>Kelebihan React Native:</p>
<ul>
<li><strong>Pengembangan lintas platfrom</strong>: Satu code, bisa digunakan untuk android atau IOS. </li>
</ul>
<h2 id="expo">Expo</h2>
<p>Expo adalah aplikasi yang dibangung diatas React Native. Expo dapat digunakan untuk mempercepat pengembangan aplikasi dengan React Native. </p>
<p>Keuntungan dengan EXPO:</p>
<ul>
<li>Dengan Expo, kita bisa melewati beberapa configurasi yang diperlukan untuk membuat app. </li>
<li>&quot;Expo SDK&quot;, menyediakan Module dan library yang siap pakai seperti &quot;navigasi&quot; dan lain-lain. </li>
<li>&quot;Expo CLI&quot;, Digunakan untuk membangun dan menjalankan app.</li>
<li>&quot;Expo-Go&quot;, digunakan untuk membantu kita menjalankan aplikasi tanpa harus melakukan build dan deployment.</li>
</ul>
<hr>
<p>adalah tool yang dapat membantu kita untuk membuat App android dan IOS. </p>
<p>Untuk IDX tetap pakai <code>yarn</code></p>
<p>cara instalasi dengan yarn:</p>
<pre><code>npm <span class="hljs-keyword">install</span> -g yarn

yarn <span class="hljs-keyword">add</span> <span class="hljs-keyword">global</span> expo-cli
yarn <span class="hljs-keyword">add</span> <span class="hljs-keyword">global</span> expo
# =================== atau seperti ini =============
npm <span class="hljs-keyword">install</span> expo-cli
npm <span class="hljs-keyword">install</span> expo

npx expo-cli <span class="hljs-keyword">upgrade</span> // jika mengalami <span class="hljs-keyword">error</span> karena <span class="hljs-keyword">version</span>
</code></pre><p>ref: <a href="https://medium.com/@blackpintz/how-to-install-expo-cli-using-yarn-92efe8ed78f5">https://medium.com/@blackpintz/how-to-install-expo-cli-using-yarn-92efe8ed78f5</a></p>
<pre><code><span class="hljs-string">npx </span><span class="hljs-built_in">create-expo-app</span> <span class="hljs-string">my-app
</span>

<span class="hljs-comment"># =========== Jalankan App pada website ===========</span>
<span class="hljs-string">npm </span><span class="hljs-string">run </span><span class="hljs-string">web</span>
</code></pre><h2 id="tool-tambahan">tool tambahan</h2>
<p>install <code>Expo Go</code> untuk melakukan testing didalam android</p>
<hr>
<h1 id="informasi">Informasi</h1>
<hr>
<p>jika menggunakan github codespace check area ini </p>
<pre><code>/app/(<span class="hljs-keyword">tabs</span>)/<span class="hljs-built_in">index</span>.tsx
</code></pre><p>contoh code </p>
<pre><code class="lang-Js"><span class="hljs-keyword">import</span> { HelloWave } <span class="hljs-keyword">from</span> <span class="hljs-string">'@/components/HelloWave'</span>;
<span class="hljs-keyword">import</span> ParallaxScrollView <span class="hljs-keyword">from</span> <span class="hljs-string">'@/components/ParallaxScrollView'</span>;
<span class="hljs-keyword">import</span> { ThemedText } <span class="hljs-keyword">from</span> <span class="hljs-string">'@/components/ThemedText'</span>;
<span class="hljs-keyword">import</span> { ThemedView } <span class="hljs-keyword">from</span> <span class="hljs-string">'@/components/ThemedView'</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">HomeScreen</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span></span>

<span class="hljs-tag">&lt;<span class="hljs-name">View</span> </span><span class="hljs-attr">style</span>=<span class="hljs-string"> &lt;span class=&quot;hljs-attr&quot;&gt;alignItems:&lt;/span&gt; '&lt;span class=&quot;hljs-attr&quot;&gt;center&lt;/span&gt;'  </span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Text</span></span> <span class="hljs-attr">style</span>=<span class="hljs-string">&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;fontSize:&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;40&lt;/span&gt; </span>Hello React Native<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">View</span></span> <span class="hljs-attr">style</span>=<span class="hljs-string">&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;alignItems:&lt;/span&gt; '&lt;span class=&quot;hljs-attr&quot;&gt;center&lt;/span&gt;' </span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Text</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;fontSize:&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;40&lt;/span&gt; </span>Hello React Native<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span></span>
  );
}
</code></pre>
<hr>
<h1 id="component-inti-react-native">Component Inti React Native</h1>
<hr>
<p>Beberapa Component bawaan dari &quot;Expo&quot;</p>
<ol>
<li>Daftar Component dasar dalam UI </li>
<li>view</li>
<li>Text </li>
<li>StyleSheet</li>
<li>Image</li>
<li><p>TextInput</p>
</li>
<li><p>View yang dapat scroll</p>
</li>
<li>ScrollView</li>
<li><p>FlatList</p>
</li>
<li><p>View yang dapat touch </p>
</li>
<li>Button </li>
<li>TouchableOpacity</li>
</ol>
<h1 id="component-dasar">Component dasar</h1>
<p>Berserta penjelasan fungsi </p>
<h3 id="view">view</h3>
<pre><code class="lang-Js"><span class="hljs-keyword">import</span> { View, Text } <span class="hljs-keyword">from</span> <span class="hljs-string">'react-native'</span>
... 

return (
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span></span>

<span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;alignItems:&lt;/span&gt; '&lt;span class=&quot;hljs-attr&quot;&gt;center&lt;/span&gt;' </span></span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Text</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;fontSize:&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;40&lt;/span&gt; </span>Hello React Native<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span></span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;alignItems:&lt;/span&gt; '&lt;span class=&quot;hljs-attr&quot;&gt;center&lt;/span&gt;' </span></span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Text</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;fontSize:&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;40&lt;/span&gt; </span>Hello React Native<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span></span>
)
</code></pre>
<p>Mereka berfungsi sebagai container pembungkus. sama seperti kita menggunakan <code>&lt;div&gt;</code></p>
<h3 id="text">Text</h3>
<pre><code class="lang-Js"><span class="hljs-tag">&lt;<span class="hljs-name">Text</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;fontSize:&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;30&lt;/span&gt; </span></span>

<span class="hljs-tag">&lt;<span class="hljs-name">Text</span>&gt;</span>Ini ukuran akan berubah <span class="hljs-tag">&lt;<span class="hljs-name">Text</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Text</span>&gt;</span>Ini ukuran tidak akan berubah <span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
</code></pre>
<p>ini adalah seoperti bentuk string. Kita tidak bisa memasukan string kepada component <code>&lt;View&gt;</code>. Cara diatas dapat digunakan untuk mewariskan style kepada <code>Text</code> dibawahnya, kecuali terdapat text didalam view atau component lain.</p>
<h3 id="stylesheet">StyleSheet</h3>
<pre><code class="lang-Js"><span class="hljs-keyword">import</span> { StyleSheet, <span class="hljs-built_in">Text</span>, View } <span class="hljs-keyword">from</span> 'react-native'

...

&lt;<span class="hljs-built_in">Text</span> style={styles.title}&gt;React Native - Prograte&lt;/<span class="hljs-built_in">Text</span>&gt;


<span class="hljs-keyword">const</span> styles = StyleSheet.create({
  container: {
    flex: <span class="hljs-number">1</span>,
    padding: <span class="hljs-number">24</span>,
    backgroundColor: '<span class="hljs-comment">#eaeaea',</span>
  },})
</code></pre>
<p>Infile CSS </p>
<h3 id="image">Image</h3>
<pre><code class="lang-Js">import { View, <span class="hljs-built_in">Image</span>, StyleSheet } <span class="hljs-keyword">from</span> <span class="hljs-string">'react-native'</span>

 &lt;<span class="hljs-built_in">Image</span> style={styles.<span class="hljs-built_in">image</span>} source={require(<span class="hljs-string">'./assets/icon.png'</span>)} /&gt;
</code></pre>
<p>Sama seperti Tag <code>image</code></p>
<p>Ref: <a href="https://www.tutorialspoint.com/react_native/react_native_images.htm">https://www.tutorialspoint.com/react_native/react_native_images.htm</a></p>
<h3 id="textinput">TextInput</h3>
<pre><code class="lang-Js"><span class="hljs-keyword">import</span> { View, StyleSheet, TextInput } from <span class="hljs-string">'react-native'</span>

const [name, setName] = useState()

&lt;TextInput
        style={styles.input}
        placeholder=<span class="hljs-string">"Masukan Nama"</span>
        onChangeText={setName}
        <span class="hljs-keyword">value</span>={name}
      /&gt;
</code></pre>
<p>Adalaj bentuk form. Untuk lebih detail mengenai form TextInput: <a href="https://reactnative.dev/docs/textinput#props">https://reactnative.dev/docs/textinput#props</a></p>
<hr>
<h1 id="bagian-view-dan-scroll">Bagian View dan Scroll</h1>
<hr>
<p><strong>Attribute</strong> special untuk component container: </p>
<pre><code class="lang-Js"><span class="hljs-attr">contentContainerStyle</span>={styles.wrapper}
</code></pre>
<p>Berfungsi sebagai penerima css bagi container. </p>
<p>ref: <a href="https://stackoverflow.com/questions/46032604/scrollview-child-layout-must-be-applied-through-the-contentcontainerstyle-prop">https://stackoverflow.com/questions/46032604/scrollview-child-layout-must-be-applied-through-the-contentcontainerstyle-prop</a></p>
<h3 id="scrollview">ScrollView</h3>
<p>adalah suatu component yang dapat membantu kita untuk membungkus content yang melewati batas dari size screen.</p>
<pre><code class="lang-Js"><span class="xml">import </span><span class="hljs-template-variable">{ StyleSheet, View, ScrollView, Text }</span><span class="xml"> from 'react-native'

<span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">style</span>=</span></span><span class="hljs-template-variable">{styles.container}</span><span class="xml"><span class="hljs-tag">&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ScrollView</span> <span class="hljs-attr">style</span>=</span></span><span class="hljs-template-variable">{styles.scrollView}</span><span class="xml"><span class="hljs-tag">&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Text</span> <span class="hljs-attr">style</span>=</span></span><span class="hljs-template-variable">{styles.text}</span><span class="xml"><span class="hljs-tag">&gt;</span>
          </span><span class="hljs-template-tag">{/* <span class="hljs-name">Tuliskan</span> teks panjang di sini */}</span><span class="xml">
        <span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ScrollView</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span></span>
</code></pre>
<p>Reference: <a href="https://reactnative.dev/docs/using-a-scrollview">https://reactnative.dev/docs/using-a-scrollview</a></p>
<h3 id="flatlist">FlatList</h3>
<p>menyerupai dengan ScrollView, tetapi memiliki perbedaan kapan harus digunakan. Dimana <code>FlatList</code> digunakan saat kita memangil banyak item dari array. </p>
<pre><code class="lang-Js"><span class="hljs-keyword">const</span> App = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  <span class="hljs-keyword">const</span> renderItem = <span class="hljs-function">(<span class="hljs-params">{ item }</span>) =&gt;</span> &lt;Item title={item.title} /&gt;

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{styles.container}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FlatList</span>
        <span class="hljs-attr">data</span>=<span class="hljs-string">{items}</span>
        <span class="hljs-attr">renderItem</span>=<span class="hljs-string">{renderItem}</span>
        <span class="hljs-attr">keyExtractor</span>=<span class="hljs-string">{(item)</span> =&gt;</span> item.id}
      /&gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>
  )
}</span>
</code></pre>
<p>Break: dimana pada fungsi <code>App()</code> kita memangil item satu demi satu. </p>
<ul>
<li><code>data</code> - adalah item spesifik </li>
<li><code>renderItem</code> - adalah list item </li>
<li><code>keyExtractor</code> - adalah <code>key.id</code> pada react biasa. konsep untuk penanda item list</li>
</ul>
<p>Ref: <a href="https://reactnative.dev/docs/flatlist">https://reactnative.dev/docs/flatlist</a></p>
<h3 id="perbedaan-scrollview-dan-flatlist">perbedaan scrollView dan FlatList</h3>
<ul>
<li>ScrollView digunakan jika data yang kita render sedikit, meningkatkan performa app </li>
<li>FlatList digunakan disaat kita merender data yang super besar dan banyak.</li>
</ul>
<hr>
<h1 id="button-and-touchableopacity">Button and TouchableOpacity</h1>
<hr>
<h3 id="button">Button</h3>
<pre><code class="lang-Js">import { View, <span class="hljs-keyword">Button</span>, Alert, StyleSheet } from <span class="hljs-string">'react-native'</span>

&lt;<span class="hljs-keyword">Button</span>
          <span class="hljs-keyword">title</span>=<span class="hljs-string">"Color Button"</span>
          <span class="hljs-keyword">color</span>=<span class="hljs-string">"#f194ff"</span>
          onPress={() =&gt; Alert.alert(<span class="hljs-string">'Color Button'</span>)}
        /&gt;
</code></pre>
<p>disini button bisa kita gunakan seperti biasa, pemangilan fungsi dan lain-lain.</p>
<h3 id="touchableopacity">TouchableOpacity</h3>
<pre><code class="lang-Js"><span class="xml">import </span><span class="hljs-template-variable">{ View, StyleSheet, TouchableOpacity, Text }</span><span class="xml">

<span class="hljs-tag">&lt;<span class="hljs-name">TouchableOpacity</span> <span class="hljs-attr">style</span>=</span></span><span class="hljs-template-variable">{styles.button}</span><span class="xml"><span class="hljs-tag"> <span class="hljs-attr">onPress</span>=</span></span><span class="hljs-template-variable">{onPress}</span><span class="xml"><span class="hljs-tag">&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Text</span> <span class="hljs-attr">style</span>=</span></span><span class="hljs-template-variable">{styles.buttonText}</span><span class="xml"><span class="hljs-tag">&gt;</span>Press Here<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">TouchableOpacity</span>&gt;</span></span>
</code></pre>
<p>adalah sebuah wrapper seperti <code>div</code> dimana kita bisa membuatnya sebagai pengganti button. seperti pada HTML biasa kita bisa menggunakan <code>div</code> sebagai alternative tag <code>button</code></p>
<hr>
<h1 id="expo-linear-gradient">expo-linear-gradient</h1>
<hr>
<p>Instalasi </p>
<pre><code class="lang-js"><span class="hljs-comment">// npm install expo-linear-gradient</span>
<span class="hljs-comment">// Instalasi </span>

<span class="hljs-keyword">import</span> LinearGradient <span class="hljs-keyword">from</span> <span class="hljs-string">'expo-linear-gradient'</span>;

<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">LinearGradient</span>
  <span class="hljs-attr">colors</span>=<span class="hljs-string">{[</span>'#<span class="hljs-attr">FF0000</span>', '#<span class="hljs-attr">FFFF00</span>', '#<span class="hljs-attr">00FF00</span>']}
  <span class="hljs-attr">start</span>=<span class="hljs-string">{[0,</span> <span class="hljs-attr">0</span>]}
  <span class="hljs-attr">end</span>=<span class="hljs-string">{[1,</span> <span class="hljs-attr">1</span>]}
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span>
    {/* Content to display within the gradient */}
  <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">LinearGradient</span>&gt;</span></span>
</code></pre>
<p>Pada contoh diatas, akan dibuat suatu transisi dari kiri ke kanan. dimana component semua item pada component &quot;view&quot;. </p>
<p>Manfaat: </p>
<ul>
<li>Meningkatkan kualitas visual </li>
<li>dapat kita gunakan untuk memberikan Highlight pada area spesifik. </li>
</ul>
<p>Ref: </p>
<ul>
<li><a href="https://github.com/react-native-linear-gradient/react-native-linear-gradient">https://github.com/react-native-linear-gradient/react-native-linear-gradient</a> | </li>
<li><a href="https://codesandbox.io/s/react-hv1g9e">https://codesandbox.io/s/react-hv1g9e</a> | contoh hasil</li>
<li><a href="https://docs.expo.dev/versions/latest/sdk/linear-gradient/">https://docs.expo.dev/versions/latest/sdk/linear-gradient/</a> | Contoh Official</li>
</ul>
<hr>
<h1 id="imagebackground">ImageBackground</h1>
<hr>
<pre><code class="lang-Js"><span class="hljs-keyword">import</span> {ImageBackground, StyleSheet, Text, View} <span class="hljs-keyword">from</span> <span class="hljs-string">'react-native'</span>;

<span class="hljs-keyword">const</span> image = {<span class="hljs-attr">uri</span>: <span class="hljs-string">'https://legacy.reactjs.org/logo-og.png'</span>};

<span class="hljs-keyword">const</span> App = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{styles.container}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ImageBackground</span> <span class="hljs-attr">source</span>=<span class="hljs-string">{image}</span> <span class="hljs-attr">resizeMode</span>=<span class="hljs-string">"cover"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{styles.image}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Text</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{styles.text}</span>&gt;</span>Inside<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ImageBackground</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span></span>
);
</code></pre>
<p>berfungsi untuk menambahkan item didalam gambar. </p>
<p>ref: <a href="https://reactnative.dev/docs/imagebackground">https://reactnative.dev/docs/imagebackground</a></p>
<hr>
<h1 id="fontawesome-logo-">FontAwesome (Logo)</h1>
<hr>
<pre><code class="lang-Js">
<span class="hljs-keyword">import</span> { FontAwesome } <span class="hljs-keyword">from</span> <span class="hljs-string">'@expo/vector-icons'</span>

&lt;FontAwesome name=<span class="hljs-string">"star"</span> <span class="hljs-keyword">size</span>={<span class="hljs-number">16</span>} color=<span class="hljs-string">"yellow"</span> <span class="hljs-regexp">/&gt;</span>
</code></pre>
<p>Ref: <a href="https://icons.expo.fyi/Index">https://icons.expo.fyi/Index</a> </p>
<hr>
<h1 id="catatan-tambahan">catatan tambahan</h1>
<hr>
<h3 id="deklarasi-state">deklarasi state</h3>
<p>state harus kita deklarasi didalam function, tidak boleh diluar function.</p>
<hr>
<hr>
<h1 id="note">Note</h1>
<ul>
<li>
  <RouterLink to="/expo-note1" class="LFT-Item"> 
    Simple todo App
    </RouterLink>
</li>
<li>
  <RouterLink to="/expo-note2" class="LFT-Item"> 
    Api Test
    </RouterLink>
</li>
<li>
  <RouterLink to="/expo-note3" class="LFT-Item"> 
    Expo Navigator
    </RouterLink>
</li>
</ul>
<h1 id="reference-">Reference:</h1>
<ul>
<li><p><a href="https://www.freecodecamp.org/news/responsive-layout-react-native/">https://www.freecodecamp.org/news/responsive-layout-react-native/</a> | App sangat sederhana</p></li>
<li><p><a href="https://shift.infinite.red/start-using-reactotron-in-your-expo-project-today-in-3-easy-steps-a03d11032a7a">React Expo Debugging</a></p>
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