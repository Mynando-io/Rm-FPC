<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="expo-navigator">Expo Navigator</h1>
<p>Tahapan Instalasi:</p>
<pre><code class="lang-Js"><span class="hljs-selector-tag">npm</span> <span class="hljs-selector-tag">install</span> @<span class="hljs-keyword">react</span>-<span class="hljs-keyword">navigation</span>/<span class="hljs-keyword">native</span>
</code></pre>
<ul>
<li><p>2 </p>
<pre><code class="lang-Js">npx expo <span class="hljs-keyword">install</span> react-<span class="hljs-keyword">native</span>-screens react-<span class="hljs-keyword">native</span>-<span class="hljs-keyword">safe</span>-area-<span class="hljs-keyword">context</span>
</code></pre>
</li>
<li><p>2 / Atau </p>
<pre><code class="lang-Js">npm <span class="hljs-keyword">install</span> react-<span class="hljs-keyword">native</span>-screens react-<span class="hljs-keyword">native</span>-<span class="hljs-keyword">safe</span>-area-<span class="hljs-keyword">context</span>
</code></pre>
</li>
<li><p>3 </p>
</li>
</ul>
<pre><code class="lang-Js">npm <span class="hljs-keyword">install</span> react-<span class="hljs-keyword">native</span>-screens react-<span class="hljs-keyword">native</span>-<span class="hljs-keyword">safe</span>-area-<span class="hljs-keyword">context</span>
</code></pre>
<ul>
<li><p>4 </p>
<pre><code class="lang-Js"><span class="hljs-built_in">npm</span> install --save react-<span class="hljs-keyword">native</span>-navigation
</code></pre>
</li>
<li><p>5 </p>
<pre><code class="lang-Js"><span class="hljs-selector-tag">npm</span> <span class="hljs-selector-tag">install</span> @<span class="hljs-keyword">react</span>-<span class="hljs-keyword">navigation</span>/<span class="hljs-keyword">drawer</span>
</code></pre>
</li>
<li><p>6 </p>
<pre><code class="lang-Js">npm <span class="hljs-keyword">install</span> react-<span class="hljs-keyword">native</span>-gesture-<span class="hljs-keyword">handler</span> react-<span class="hljs-keyword">native</span>-reanimated
</code></pre>
</li>
</ul>
<hr>
<h1 id="fundamental-information">fundamental information</h1>
<hr>
<p>Mengenai &quot;React Navigation&quot;. Sebagai contoh pada web browser disaat kita klik <code>&lt;a&gt;</code> dimana kita akan dilempar ke halaman dimana sebuah link tersebut berada, kita bisa kembali kehalaman utama dengan cara klik tombol &quot;back&quot;. Dimana tombol &quot;back&quot; itu mengambil informasi dari history browser kita. &quot;React Navigation&quot; bekerja seperti itu.  </p>
<p>Terdapat perbedaan kunci dimana:</p>
<ul>
<li>&quot;React Navigation&quot;: Pada fungsi ini, mereka menyediakan kita sebuah gesture dan animasi perpindahan seperti apa yang kita exspetasikan pada android.</li>
</ul>
<h2 id="createnativestacknavigator">createNativeStackNavigator</h2>
<p><code>createNativeStackNavigator</code> adalah suatu fungsi yang akan menghasilkan 2 property: <code>Screen</code> dan <code>Navigator</code>. Mereka berdua adalah component react untuk melakukan configurasi navigator. </p>
<p>penempatan dari <code>NavigationContainer</code> adalah didalam bagian aplikasi utama, <code>index.tsx</code> atau <code>app</code>. </p>
<p>perhatikan code dibawah ini:</p>
<pre><code class="lang-Js"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> { View, Text } <span class="hljs-keyword">from</span> <span class="hljs-string">'react-native'</span>;
<span class="hljs-keyword">import</span> { NavigationContainer } <span class="hljs-keyword">from</span> <span class="hljs-string">'@react-navigation/native'</span>;
<span class="hljs-keyword">import</span> { createNativeStackNavigator } <span class="hljs-keyword">from</span> <span class="hljs-string">'@react-navigation/native-stack'</span>;





<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">HomeScreen</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{}</span> <span class="hljs-attr">flex:</span> <span class="hljs-attr">1</span>, <span class="hljs-attr">alignItems:</span> '<span class="hljs-attr">center</span>', <span class="hljs-attr">justifyContent:</span> '<span class="hljs-attr">center</span>' {}&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Text</span>&gt;</span>Home Screen<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span></span>
  );
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">DetailsScreen</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{}</span> <span class="hljs-attr">flex:</span> <span class="hljs-attr">1</span>, <span class="hljs-attr">alignItems:</span> '<span class="hljs-attr">center</span>', <span class="hljs-attr">justifyContent:</span> '<span class="hljs-attr">center</span>' {}&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Text</span>&gt;</span>Details Screen<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span></span>
  );
}

<span class="hljs-keyword">const</span> Stack = createNativeStackNavigator();

<span class="hljs-comment">// Pemilihan suatu "route" didasarkan "name"</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">App</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> (
    &lt;NavigationContainer&gt;
      &lt;Stack.Navigator initialRouteName="Home"&gt;
        &lt;Stack.Screen name="Home" component={HomeScreen} /&gt;
        &lt;Stack.Screen name="Details" component={DetailsScreen} /&gt;
      &lt;/Stack.Navigator&gt;
    &lt;/NavigationContainer&gt;
  );
}

export default App;
</code></pre>





<ul>
<li>Sekarang kita berhasil membuat dua &quot;routes&quot;</li>
<li>yaitu: <code>Home</code> dan <code>Details</code> route. </li>
<li>Cara membuat &quot;route&quot; adalah dengan bantuan <code>Screen</code></li>
<li><code>name</code> adalah property yang akan merespon dari &quot;route&quot; yang akan digunakan. </li>
</ul>
<h2 id="melakukan-perubahan-tampilan-pada-route">Melakukan perubahan tampilan pada route</h2>
<p><code>options</code> atau <code>screenOptions</code></p>
<p>contoh: <a href="https://reactnavigation.org/docs/hello-react-navigation#specifying-options">https://reactnavigation.org/docs/hello-react-navigation#specifying-options</a></p>
<hr>
<h1 id="tab-navigation-nesting-navigators">Tab Navigation / Nesting navigators</h1>
<hr>
<p>ref: <a href="https://reactnavigation.org/docs/nesting-navigators">https://reactnavigation.org/docs/nesting-navigators</a></p>
<p>Tujuan dari &quot;Nesting navigators&quot; adalah untuk melakukan rendering &quot;navigator&quot; didalam screen dari &quot;navigator&quot; lain. </p>
<pre><code class="lang-Js">function Home() {
  return (
    <span class="hljs-tag">&lt;<span class="hljs-name">Tab.Navigator</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Tab.Screen</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"Feed"</span> <span class="hljs-attr">component</span>=<span class="hljs-string">{Feed}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Tab.Screen</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"Messages"</span> <span class="hljs-attr">component</span>=<span class="hljs-string">{Messages}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Tab.Navigator</span>&gt;</span>
  );
}

function App() {
  return (
    <span class="hljs-tag">&lt;<span class="hljs-name">NavigationContainer</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Stack.Navigator</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Stack.Screen</span>
          <span class="hljs-attr">name</span>=<span class="hljs-string">"Home"</span>
          <span class="hljs-attr">component</span>=<span class="hljs-string">{Home}</span>
          <span class="hljs-attr">options</span>=<span class="hljs-string">{}</span> <span class="hljs-attr">headerShown:</span> <span class="hljs-attr">false</span> {}
        /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Stack.Screen</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"Profile"</span> <span class="hljs-attr">component</span>=<span class="hljs-string">{Profile}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Stack.Screen</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"Settings"</span> <span class="hljs-attr">component</span>=<span class="hljs-string">{Settings}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Stack.Navigator</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">NavigationContainer</span>&gt;</span>
  );
}
</code></pre>
<p>Untuk percobaan real-time local computer, hilangkan tag <code>&lt;NavigationContainer&gt;</code></p>
<p>dengan urutan seperti ini: </p>
<ul>
<li>Stack.Navigator<ul>
<li>Home (Tab.Navigator)<ul>
<li>Feed (Screen)</li>
<li>Messages (Screen)</li>
</ul>
</li>
<li>Profile (Screen)</li>
<li>Settings (Screen)</li>
</ul>
</li>
</ul>
<h2 id="terdapat-beberapa-hal-yang-perlu-diperhatikan">Terdapat Beberapa hal yang perlu diperhatikan</h2>
<p>ref: <a href="https://reactnavigation.org/docs/nesting-navigators#how-nesting-navigators-affects-the-behaviour">https://reactnavigation.org/docs/nesting-navigators#how-nesting-navigators-affects-the-behaviour</a></p>
<h2 id="melakukan-navigasi-terhadap-screen-didalam-navigator-lain">Melakukan navigasi terhadap screen didalam navigator lain</h2>
<p>ref: <a href="https://reactnavigation.org/docs/nesting-navigators#how-nesting-navigators-affects-the-behaviour">https://reactnavigation.org/docs/nesting-navigators#how-nesting-navigators-affects-the-behaviour</a></p>
<p>Setiap navigator memiliki &quot;history&quot; mereka sendiri-sendiri. Sebagai contoh jika kamu menjalankan sebuah navigator didalam &quot;screen&quot; maka kamu akan dapat kembali kedalam navigator semula dimana &quot;navigator&quot; parent berada. </p>
<h3 id="tugas-">Tugas:</h3>
<p>Membuat sebuah app navigator dimana terdapat: </p>
<ul>
<li><code>Profile</code> - screen </li>
<li><code>Home</code> - screen </li>
<li><code>EmptyScreen</code> - <code>Settings</code> - screen </li>
<li><code>EmptyScreen</code> - <code>EditPost</code> - screen</li>
</ul>
<p>dan: </p>
<ul>
<li>pada <code>Home</code> screen, kita bisa akses <code>Profile</code> dan <code>EmptyScreen</code></li>
<li>pada component app, kita akan membuat &quot;navigator&quot; utama, dimana mereka bisa diakses dari mana saja didalam component childern.</li>
</ul>
<pre><code class="lang-Js"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> React from <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> { Button, View, Text } from <span class="hljs-string">'react-native'</span>;
<span class="hljs-keyword">import</span> { NavigationContainer } from <span class="hljs-string">'@react-navigation/native'</span>;
<span class="hljs-keyword">import</span> { createNativeStackNavigator } from <span class="hljs-string">'@react-navigation/native-stack'</span>;
<span class="hljs-keyword">import</span> { createBottomTabNavigator } from <span class="hljs-string">'@react-navigation/bottom-tabs'</span>;

<span class="hljs-keyword">let</span> Tab = createBottomTabNavigator()
<span class="hljs-keyword">let</span> Stack = createNativeStackNavigator()

<span class="hljs-keyword">function</span> Profile({navigation}){
  return (
    &lt;View style={} flex: <span class="hljs-number">1</span>, alignItems: <span class="hljs-string">'center'</span>, justifyContent: <span class="hljs-string">'center'</span> {}&gt;
      &lt;Text&gt;Profile Screen&lt;/Text&gt;
      &lt;Button
        onPress={() =&gt; navigation.navigate(<span class="hljs-string">'EditPost'</span>)}
        title=<span class="hljs-string">"Go to Edit Post"</span>
      /&gt;
    &lt;/View&gt;
  )
}

<span class="hljs-keyword">function</span> EmptyScreen(){
  return (
    &lt;View&gt;
      &lt;Text&gt;Hai, this is Empty and dummy screen&lt;/Text&gt;
    &lt;/View&gt;
  )
}

<span class="hljs-keyword">function</span> Home(){
  // tidak boleh ada selain Screen didalam navigator
  return (
    &lt;Tab.Navigator&gt;
      &lt;Tab.Screen name=<span class="hljs-string">"Profile"</span> component={Profile} /&gt;
      &lt;Tab.Screen name=<span class="hljs-string">"Settings"</span> component={EmptyScreen} /&gt;
    &lt;/Tab.Navigator&gt;
  )
}

<span class="hljs-keyword">function</span> App(){
  // Halaman utama akan diambil dari 
  // Stack.Screen pertama,
  // untuk akses Stack Screen kedua <span class="hljs-string">"EditPost"</span>
  // kita bisa akses dari component <span class="hljs-string">"Profile"</span> <span class="hljs-string">"navigation"</span>!!
  return (
    &lt;Stack.Navigator&gt;
      &lt;Stack.Screen name=<span class="hljs-string">'Home'</span> component={Home} options={} headerShown: false {}/&gt;
      &lt;Stack.Screen name=<span class="hljs-string">'EditPost'</span> component={EmptyScreen} /&gt;
    &lt;/Stack.Navigator&gt;
  )
}

export <span class="hljs-keyword">default</span> App
</code></pre>
<hr>
<h1 id="navigation-lifecycle">Navigation lifecycle</h1>
<hr>
<p>Pada topic sebelumnya kita telah mempelajari bagiama mengunakan <code>navigation.navigate(&#39;RouteName&#39;)</code> untuk melakukan navigasi diantara routes.</p>
<p>Pertanyaan: Apa yang terjadi jika kita melakukan navigasi jauh dari <code>Home</code>, atau bagaimana cara kita kembali? Bagaimana suatu route mencari tau user pergi dan kembali?</p>
<p>contoh code: (Src)[../../code/jsPro/React-Navigator-Expo/index-nesting-nagvigator.tsx]</p>
<p>Dimana disini, kita akan membuat dua &quot;child container&quot;, yang berfungsi sebagai:</p>
<p><strong>Tujuan</strong></p>
<ul>
<li>Dimana screen awal adalah &quot;setting&quot;. </li>
<li>Terdapat dua screen utama &quot;setting&quot; dan &quot;Home&quot;</li>
<li>Kita tidak bisa membuat button pada &quot;setting&quot;, untuk akses creen didalam &quot;Home&quot;, dan sebaliknya.</li>
</ul>
<pre><code class="lang-Js"><span class="hljs-tag">&lt;<span class="hljs-name">Tab.Navigator</span> <span class="hljs-attr">screenOptions</span>=<span class="hljs-string">{}</span> <span class="hljs-attr">headerShown:</span> <span class="hljs-attr">false</span> {}&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">Tab.Screen</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"First"</span>&gt;</span>

 {() =&gt; (
            <span class="hljs-tag">&lt;<span class="hljs-name">SettingsStack.Navigator</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">SettingsStack.Screen</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"Settings"</span> <span class="hljs-attr">component</span>=<span class="hljs-string">{SettingsScreen}/</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">SettingsStack.Screen</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"Profile"</span> <span class="hljs-attr">component</span>=<span class="hljs-string">{ProfileScreen}</span> /&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">SettingsStack.Navigator</span>&gt;</span>
          )}

 <span class="hljs-tag">&lt;/<span class="hljs-name">Tab.Screen</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">Tab.Screen</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"Second"</span>&gt;</span>

 {() =&gt; (
            <span class="hljs-tag">&lt;<span class="hljs-name">HomeStack.Navigator</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">HomeStack.Screen</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"Home"</span> <span class="hljs-attr">component</span>=<span class="hljs-string">{HomeScreen}</span> /&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">HomeStack.Screen</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"Details"</span> <span class="hljs-attr">component</span>=<span class="hljs-string">{DetailsScreen}</span> /&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">HomeStack.Navigator</span>&gt;</span>
          )}

<span class="hljs-tag">&lt;/<span class="hljs-name">Tab.Screen</span>&gt;</span>
</code></pre>
<ul>
<li>&quot;Home&quot; hanya bisa akses &quot;Details&quot;</li>
<li>&quot;Settings&quot; hanya bisa akses profile</li>
</ul>
<hr>
<h1 id="contoh-code-sederhana">Contoh code sederhana</h1>
<hr>
<pre><code class="lang-Js"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> React from <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> { Button, View, Text } from <span class="hljs-string">'react-native'</span>;
<span class="hljs-keyword">import</span> { NavigationContainer } from <span class="hljs-string">'@react-navigation/native'</span>; 
<span class="hljs-keyword">import</span> { createNativeStackNavigator } from <span class="hljs-string">'@react-navigation/native-stack'</span>;

<span class="hljs-keyword">function</span> HomeScreen({ navigation }) {
  return (
    &lt;View style={} flex: <span class="hljs-number">1</span>, alignItems: <span class="hljs-string">'center'</span>, justifyContent: <span class="hljs-string">'center'</span> {}&gt;
      &lt;Text&gt;Home Screen&lt;/Text&gt;
      &lt;Button
        title=<span class="hljs-string">"Go to Details"</span>
        onPress={() =&gt; navigation.navigate(<span class="hljs-string">'Details'</span>)}
      /&gt;
    &lt;/View&gt;
  );
}

<span class="hljs-keyword">function</span> DetailsScreen() {
  return (
    &lt;View style={} flex: <span class="hljs-number">1</span>, alignItems: <span class="hljs-string">'center'</span>, justifyContent: <span class="hljs-string">'center'</span> {}&gt;
      &lt;Text&gt;Details Screen&lt;/Text&gt;
    &lt;/View&gt;
  );
}

const Stack = createNativeStackNavigator();

<span class="hljs-keyword">function</span> App() {
  return (

      &lt;Stack.Navigator initialRouteName=<span class="hljs-string">"Home"</span>&gt;
        &lt;Stack.Screen name=<span class="hljs-string">"Home"</span> component={HomeScreen} /&gt;
        &lt;Stack.Screen name=<span class="hljs-string">"Details"</span> component={DetailsScreen} /&gt;
      &lt;/Stack.Navigator&gt;

  );
}

export <span class="hljs-keyword">default</span> App;
</code></pre>
<p>Ref: <a href="https://reactnavigation.org/docs/navigating">https://reactnavigation.org/docs/navigating</a></p>
<ul>
<li>Seperti yang saya katakan sebelumnya, sepertinya <code>NavigationContainer</code> sudah telah menjadi satu dengan <code>Stack.Navigator</code></li>
</ul>
<hr>
<h1 id="note-penting">Note Penting</h1>
<hr>
<p>Untuk kemudian kita tidak perlu mengunakan <code>&lt;NavigationContainer&gt;</code>, <strong>cukup pakai</strong> <code>stack</code></p>
<ul>
<li>&quot;Navigator&quot; - adalah component react yang akan mennentukan melakukan render &quot;screens&quot; mana yang akan dipilih. </li>
<li>&quot;Router&quot; - adalah koleksi fungsi yang dapat membantu kita untuk melakukan handle terhadap perubahan  action dan state didalam navigator.</li>
<li><p>&quot;Screen component&quot; - adalah sebuah component yang kita gunakan didalam melakukan configurasi route.</p>
</li>
<li><p><code>Navigation Prop</code> &quot;navigate&quot; - digunakan untuk melakukan navigasi kita.</p>
</li>
</ul>
<hr>
<h1 id="mengetahui-kapan-masuk-dan-keluar-screen-lifecyle-">mengetahui kapan masuk dan keluar screen (LifeCyle)</h1>
<hr>
<pre><code class="lang-Js"><span class="hljs-keyword">import</span> { useState, useCallback } <span class="hljs-keyword">from</span> <span class="hljs-string">"react"</span>
<span class="hljs-keyword">import</span> { useFocusEffect } <span class="hljs-keyword">from</span> <span class="hljs-string">'@react-navigation/native'</span>;

useFocusEffect(
    useCallback(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Screen was focused ( Mount )'</span>);
      <span class="hljs-comment">// Do something when the screen is focused</span>
      <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Screen was unfocused ( Unmount )'</span>);
        setCount(<span class="hljs-number">0</span>)
        <span class="hljs-comment">// Do something when the screen is unfocused</span>
        <span class="hljs-comment">// Useful for cleanup functions</span>
      };
    }, [])
  );
</code></pre>
<p><a href="../../code/jsPro/React-Navigator-Expo/index-lifecylce-navigator.tsx">source code</a></p>
<hr>
<h1 id="tugas-akhir-membuat-pilihan-keluar-atau-stay-pada-screen">Tugas Akhir, membuat pilihan keluar atau stay pada screen</h1>
<hr>
<p>Ref: <a href="https://reactnavigation.org/docs/preventing-going-back">https://reactnavigation.org/docs/preventing-going-back</a></p>
<hr>
<hr>
<hr>
<h1 id="berpindah-antara-screen-dan-back-">Berpindah antara screen dan Back()</h1>
<hr>
<pre><code class="lang-js"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> React from <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> { Button, View, Text } from <span class="hljs-string">'react-native'</span>;
<span class="hljs-keyword">import</span> { NavigationContainer } from <span class="hljs-string">'@react-navigation/native'</span>;
<span class="hljs-keyword">import</span> { createNativeStackNavigator } from <span class="hljs-string">'@react-navigation/native-stack'</span>;

<span class="hljs-keyword">function</span> HomeScreen({ navigation }) {
  return (
    &lt;View style={} flex: <span class="hljs-number">1</span>, alignItems: <span class="hljs-string">'center'</span>, justifyContent: <span class="hljs-string">'center'</span> {}&gt;
      &lt;Text&gt;Home Screen&lt;/Text&gt;
      &lt;Button
        title=<span class="hljs-string">"Go to Details"</span>
        onPress={() =&gt; navigation.navigate(<span class="hljs-string">'Details'</span>)}
      /&gt;
    &lt;/View&gt;
  );
}

<span class="hljs-keyword">function</span> DetailsScreen({ navigation }) {
  return (
    &lt;View style={} flex: <span class="hljs-number">1</span>, alignItems: <span class="hljs-string">'center'</span>, justifyContent: <span class="hljs-string">'center'</span> {}&gt;
      &lt;Text&gt;Details Screen&lt;/Text&gt;
      &lt;Button
        title=<span class="hljs-string">"Go to Details... again"</span>
        onPress={() =&gt; navigation.push(<span class="hljs-string">'Details'</span>)}
      /&gt;
      &lt;Button title=<span class="hljs-string">"Go to Home"</span> onPress={() =&gt; navigation.navigate(<span class="hljs-string">'Home'</span>)} /&gt;
      &lt;Button title=<span class="hljs-string">"Go back"</span> onPress={() =&gt; navigation.goBack()} /&gt;
    &lt;/View&gt;
  );
}

const Stack = createNativeStackNavigator();

<span class="hljs-keyword">function</span> App() {
  return (
    &lt;NavigationContainer&gt;
      &lt;Stack.Navigator initialRouteName=<span class="hljs-string">"Home"</span>&gt;
        &lt;Stack.Screen name=<span class="hljs-string">"Home"</span> component={HomeScreen} /&gt;
        &lt;Stack.Screen name=<span class="hljs-string">"Details"</span> component={DetailsScreen} /&gt;
      &lt;/Stack.Navigator&gt;
    &lt;/NavigationContainer&gt;
  );
}

export <span class="hljs-keyword">default</span> App;
</code></pre>
<p><strong>Titik Penting:</strong></p>
<pre><code class="lang-Js"> &lt;<span class="hljs-keyword">Button</span>
        <span class="hljs-keyword">title</span>=<span class="hljs-string">"Go to Details... again"</span>
        onPress={() =&gt; navigation.push(<span class="hljs-string">'Details'</span>)}
      /&gt;

      &lt;<span class="hljs-keyword">Button</span> <span class="hljs-keyword">title</span>=<span class="hljs-string">"Go to Home"</span> onPress={() =&gt; navigation.navigate(<span class="hljs-string">'Home'</span>)} /&gt;

      &lt;<span class="hljs-keyword">Button</span> <span class="hljs-keyword">title</span>=<span class="hljs-string">"Go back"</span> onPress={() =&gt; navigation.goBack()} /&gt;
</code></pre>
<p>ref: <a href="https://stackoverflow.com/questions/51090135/react-navigation-v2-difference-between-navigation-push-and-navigation-navigate">https://stackoverflow.com/questions/51090135/react-navigation-v2-difference-between-navigation-push-and-navigation-navigate</a></p>
<hr>
<h1 id="passing-parameter-to-routes">Passing Parameter to routes</h1>
<hr>
<pre><code class="lang-Js"><span class="xml">
// ============== Send Params ===============
function HomeScreen(</span><span class="hljs-template-variable">{ navigation }</span><span class="xml">) </span><span class="hljs-template-variable">{
  return (
    &lt;View style={} flex: 1, alignItems: 'center', justifyContent: 'center' }</span><span class="xml">}&gt;

      <span class="hljs-tag">&lt;<span class="hljs-name">Text</span>&gt;</span>Home Screen<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">"Go to Details"</span>
        <span class="hljs-attr">onPress</span>=</span></span><span class="hljs-template-variable">{() =&gt; {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          }</span><span class="xml"><span class="hljs-tag">);
        }}
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>
  );
}

// ============= get the params =============
function DetailsScreen(</span><span class="hljs-template-variable">{ route, navigation }</span><span class="xml">) </span><span class="hljs-template-variable">{
  /* 2. Get the param */
  const { itemId, otherParam }</span><span class="xml"> = route.params;
  return (
    <span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">style</span>=</span></span><span class="hljs-template-variable">{ flex: 1, alignItems: 'center', justifyContent: 'center' }</span><span class="xml"><span class="hljs-tag">}&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Text</span>&gt;</span>Details Screen<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Text</span>&gt;</span>itemId: </span><span class="hljs-template-variable">{JSON.stringify(itemId)}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Text</span>&gt;</span>otherParam: </span><span class="hljs-template-variable">{JSON.stringify(otherParam)}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">"Go to Details... again"</span>
        <span class="hljs-attr">onPress</span>=</span></span><span class="hljs-template-variable">{() =&gt;
          navigation.push('Details', {
            itemId: <span class="hljs-keyword">Math</span>.floor(<span class="hljs-keyword">Math</span>.random() * 100),
          }</span><span class="xml"><span class="hljs-tag">)
        }
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Go to Home"</span> <span class="hljs-attr">onPress</span>=</span></span><span class="hljs-template-variable">{() =&gt; navigation.navigate('Home')}</span><span class="xml"><span class="hljs-tag"> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Go back"</span> <span class="hljs-attr">onPress</span>=</span></span><span class="hljs-template-variable">{() =&gt; navigation.goBack()}</span><span class="xml"><span class="hljs-tag"> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>
  );
}</span>
</code></pre>
<p><strong>Point penting :*</strong></p>
<pre><code class="lang-Js"><span class="hljs-comment">// ====== Params sender ==========</span>

&lt;Button
        title=<span class="hljs-string">"Go to Details"</span>
        onPress={() =&gt; {
          <span class="hljs-comment">/* 1. Navigate to the Details route with params */</span>
          navigation.navigate(<span class="hljs-string">'Details'</span>, {
            itemId: <span class="hljs-number">86</span>,
            otherParam: <span class="hljs-string">'anything you want here'</span>,
          });
        }}
      /&gt;


<span class="hljs-comment">// =============== Params receiver ==========</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">DetailsScreen</span><span class="hljs-params">({ route, navigation })</span> </span>{
  <span class="hljs-comment">/* 2. Get the param */</span>
  <span class="hljs-keyword">const</span> { itemId, otherParam } = route.params;
</code></pre>
<p><strong>Atau dengan :</strong></p>
<p>initial params. dimana ini kita tulis didalam screen. </p>
<pre><code class="lang-Js"><span class="hljs-tag">&lt;<span class="hljs-name">Stack.Screen</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">"Details"</span>
  <span class="hljs-attr">component</span>=<span class="hljs-string">{DetailsScreen}</span>
  <span class="hljs-attr">initialParams</span>=<span class="hljs-string">{}</span> <span class="hljs-attr">itemId:</span> <span class="hljs-attr">42</span> {}
/&gt;</span>
</code></pre>
<hr>
<h1 id="usenavigation">useNavigation</h1>
<hr>
<p>Ref: <a href="https://reactnavigation.org/docs/use-navigation/">https://reactnavigation.org/docs/use-navigation/</a></p>
<p>Sebuah metode untuk berpindah screen jika kita berada didalam component paling bawah. </p>
<hr>
<h1 id="stackaction">StackAction</h1>
<hr>
<p>Ref: <a href="https://reactnavigation.org/docs/stack-actions/">https://reactnavigation.org/docs/stack-actions/</a></p>
<p>StackAction push adalah sebuah metode untuk kita mengirim data dari screen lain</p>
<ul>
<li>Gunakan &quot;Push&quot; ketika Anda ingin menambahkan layar baru ke riwayat navigasi dan memungkinkan pengguna untuk kembali ke layar sebelumnya.</li>
<li>Gunakan &quot;Replace&quot; ketika Anda ingin mengganti layar yang ada dengan layar baru dan mencegah pengguna kembali ke layar yang diganti.</li>
</ul>
<h2 id="referensi">Referensi</h2>
<ul>
<li><a href="https://snack.expo.dev/">https://snack.expo.dev/</a> </li>
<li><a href="https://medium.com/@tbgarza2/nested-navigation-react-navigation-4518c273b71e">https://medium.com/@tbgarza2/nested-navigation-react-navigation-4518c273b71e</a></li>
<li><a href="https://wix.github.io/react-native-navigation/docs/installing">https://wix.github.io/react-native-navigation/docs/installing</a> | react-native-navigation</li>
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