<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="javascript-class">javascript class</h1>
<h3 id="class">Class</h3>
<p>Secara simple &quot;class&quot; pada javascript adalah sebuah blueprint untuk membuat object yang memiliki kemiripan pada properties dan kebiasaan. Dengan &quot;class&quot; kita bisa membuat properties dan method yang dapat dibagikan dengan instance &quot;class&quot; lainnya. </p>
<p>Teman-teman bisa bayangkan class adalah sebuah cetakan kue ataupun cetakan es krim yang bisa kita gunakan untuk membuat banyak kue dengan rasa yang berbeda-beda tetapi memiliki bentuk kue yang sama.</p>
<p>Dengan class kita bisa mengatur sebuah project code yang besar dengan lebih effisient. </p>
<h3 id="method">Method</h3>
<p>Method pada javascript adalah sebuah function yang berada didalam object. 
Method memiliki kemampuan untuk mengakses method lain atau properties yang ada didalam object. Method dan function itu sama, yang membedakan adalah cara pemanggilan. Function bisa dipanggil secara langsung, sedangkan method harus dipanggil melalui object </p>
<pre><code><span class="hljs-keyword">const</span> person = {
  <span class="hljs-attr">name</span>: <span class="hljs-string">"John"</span>,
  <span class="hljs-attr">age</span>: <span class="hljs-number">30</span>,
  <span class="hljs-attr">greet</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Hello, my name is <span class="hljs-subst">${<span class="hljs-keyword">this</span>.name}</span> and I am <span class="hljs-subst">${<span class="hljs-keyword">this</span>.age}</span> years old.`</span>);
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">`-----------------------------------------------------------------------`</span>)
  }
};

person.greet(); <span class="hljs-comment">// Output: Hello, my name is John and I am 30 years old.</span>
</code></pre><h2 id="function">Function</h2>
<p>Function dan parameter itu sama. Yang membedakan mereka adalah dimana mereka diletakan. Function yang berada didalam class itu disebut sebagai method. </p>
<p>Ada beberapa cara untuk menulis function pada javascript: </p>
<ul>
<li>Function Declaration: </li>
</ul>
<pre><code><span class="hljs-keyword">function</span> <span class="hljs-title">tambah</span> (x, y) {
    <span class="hljs-keyword">return</span> <span class="hljs-type">x</span> + y
}
</code></pre><ul>
<li><p>Function Expression: </p>
<pre><code><span class="hljs-keyword">const</span> tambah = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(x,y)</span> </span>{
  <span class="hljs-keyword">return</span> x + y
}
</code></pre></li>
<li><p>Arrow function: </p>
<pre><code>const tambah = <span class="hljs-function"><span class="hljs-params">(x, y)</span> =&gt;</span> x + y
</code></pre></li>
<li><p>Constructor function: 
```
const tambah = function(x, y) {
  this.x = x 
  this.y = y 
}</p>
</li>
</ul>
<p>const penambahan = new tambah(10, 20) // 30</p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">constructor</span> <span class="hljs-title">function</span> <span class="hljs-title">akan</span> <span class="hljs-title">membuat</span> <span class="hljs-title">object</span> <span class="hljs-title">baru</span> <span class="hljs-title">setiap</span> <span class="hljs-title">kali</span> <span class="hljs-title">kita</span> <span class="hljs-title">menggunakan</span> "<span class="hljs-title">new</span>"

## <span class="hljs-title">Return</span></span>
</code></pre><p>function addNumbers(a, b) {
  return a + b;
}</p>
<p>const result = addNumbers(5, 3); // result will be 8</p>
<pre><code>
Secara sederhana perintah <span class="hljs-string">"return"</span> akan menghasilkan suatu nilai <span class="hljs-keyword">jika </span>function tersebut kita panggil.


<span class="hljs-comment">### Paramether and argument </span>

Pada <span class="hljs-keyword">javscript </span>paramter adalah <span class="hljs-keyword">sebuah </span>nilai yang <span class="hljs-keyword">digunakan </span>oleh function <span class="hljs-keyword">sebagai </span>pintu masuk (input data). <span class="hljs-keyword">Disaat </span>kita membuat function parameter adalah variabel yang kita tulis <span class="hljs-keyword">diantara </span>kurung <span class="hljs-keyword">buka </span>dan kurung tutup. 

Sedangkan Argument adalah nilai asli yang akan <span class="hljs-keyword">dimasukan </span>dan <span class="hljs-keyword">diproses </span>oleh function. 
<span class="hljs-symbol">

example:</span>
</code></pre><p>function greet(name) {
  console.log(<code>Hello, ${name}!</code>);
}</p>
<p>greet(&quot;John&quot;); // Output: Hello, John!</p>
<pre><code>
- <span class="hljs-string">'name'</span> pada function adalah parameter 
- <span class="hljs-string">"John"</span> nilai asli ini adalah argument


<span class="hljs-comment">### Private and public Properties</span>

pada dasarnnya semua properties dari object adalah <span class="hljs-keyword">berbentuk </span>public, yang <span class="hljs-keyword">berarti </span>mereka <span class="hljs-keyword">bisa </span><span class="hljs-keyword">dimodifikasi </span>dan <span class="hljs-keyword">digunakan </span>dari luar object tersebut. Tetapi kita <span class="hljs-keyword">juga </span><span class="hljs-keyword">bisa </span>membuat <span class="hljs-keyword">sebuah </span>properties menjadi private pada <span class="hljs-keyword">javascript </span>menggunakan method. 

Membuat private properties dengan method. 
<span class="hljs-number">1</span>. Declarasi <span class="hljs-keyword">sebuah </span>variabel <span class="hljs-keyword">didalam </span>method
<span class="hljs-number">2</span>. Variabel tersebut hanya akan <span class="hljs-keyword">bisa </span><span class="hljs-keyword">diakses </span>dari method itu saja
<span class="hljs-symbol">
Contoh:</span>
</code></pre><p>function Person(age) {
  let myName = &#39;budi&#39;; // private property</p>
<p>  this.getAge = function() {
    return age; // public method
  };</p>
<p>  this.getName = function() {
    return myName; // private method
  };
}</p>
<p>console.log(myName); // error in this line</p>
<pre><code>
Seperti pada kode <span class="hljs-keyword">diatas, </span><span class="hljs-keyword">jika </span>kita mencoba mengakses private variabel seperti itu maka akan terjadi error.


<span class="hljs-comment">### instance (blue print)</span>

Dalam konsep Object <span class="hljs-keyword">Oriented </span>Programming ada <span class="hljs-keyword">sebuah </span>konsep yang <span class="hljs-keyword">bernama </span><span class="hljs-keyword">Blue </span>print, yang <span class="hljs-keyword">dimana </span><span class="hljs-keyword">disaat </span>kita membuat class pada <span class="hljs-keyword">javascript, </span>class code tersebut adalah <span class="hljs-keyword">blue </span>print. 

<span class="hljs-keyword">Buat </span>apa <span class="hljs-keyword">Blue </span>print?

<span class="hljs-keyword">Blue </span>print <span class="hljs-keyword">digunakan </span>untuk membuat object yang serupa dengan cepat. 
Kita <span class="hljs-keyword">bisa </span><span class="hljs-keyword">bayangkan </span><span class="hljs-keyword">bahwasannya </span><span class="hljs-keyword">blue </span>print adalah <span class="hljs-keyword">sebuah </span>cetakan kue, dengan cetakan kue kita <span class="hljs-keyword">bisa </span>membuat <span class="hljs-keyword">banyak </span>kue yang memiliki <span class="hljs-keyword">bentuk </span>serupa tetapi memiliki <span class="hljs-keyword">banyak </span>pilihan rasa dengan cepat. Itu adalah perumpamaan dari <span class="hljs-keyword">blueprint.
</span>
Class yang kita <span class="hljs-keyword">buat </span>pada object <span class="hljs-keyword">Oriented </span>Programming <span class="hljs-keyword">disebut </span><span class="hljs-keyword">sebagai </span><span class="hljs-keyword">blueprint, </span>sedangkan variabel yang memiliki class <span class="hljs-keyword">didalamannya </span><span class="hljs-keyword">disebut </span><span class="hljs-keyword">sebagai </span><span class="hljs-string">"instance"</span> dan class itu sendiri adalah object 


- **<span class="hljs-keyword">Instance** </span>adalah hasil 
- **object** adalah awal 
<span class="hljs-symbol">
Perumpamaan:</span> <span class="hljs-keyword">Di </span>atas meja terdapat <span class="hljs-number">5</span> apel ( <span class="hljs-keyword">instance </span>), setiap apel memiliki ukuran dan <span class="hljs-keyword">bentuk </span>yang <span class="hljs-keyword">berbeda-beda.</span>
</code></pre><p>// Define a class / blueprint
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}</p>
<p>// Create an instance of the class
const person1 = new Person(&#39;John&#39;, 30);</p>
<p>// Access the properties of the instance
console.log(person1.name); // Output: John
console.log(person1.age); // Output: 30</p>
<pre><code>
### Object

<span class="hljs-symbol">Konsep</span> Object pada javascript <span class="hljs-keyword">itu </span>sangat penting (dikutip dari: https://towardsdatascience.com/everything-about-javascript-object-part-<span class="hljs-number">1</span>-<span class="hljs-number">854025</span>d71fea ). Hampir <span class="hljs-keyword">seluruh </span><span class="hljs-meta">code</span> yang kita pakai pada javscript adalah <span class="hljs-keyword">berbentuk </span>object, dan setidaknya ada <span class="hljs-number">6</span> <span class="hljs-meta">code</span> yang <span class="hljs-keyword">bukan </span>object yaitu: null, undefined, <span class="hljs-keyword">strings, </span>numbers, <span class="hljs-keyword">boolean, </span>dan symbols. <span class="hljs-meta">Code</span> pada javscript yang <span class="hljs-keyword">bukan </span>object disebut sebagai tipe primitif ( primitive types ). 



<span class="hljs-symbol">Pada</span> javasscript, object adalah sebuah koleksi dari <span class="hljs-meta">data</span> dan fungsi yang <span class="hljs-keyword">berhubungan, </span>yang <span class="hljs-keyword">biasannya </span><span class="hljs-keyword">berbentuk </span>seperti pasangan attribute-nilai ( ini seperti property dan value pada css ). <span class="hljs-meta">Data</span> <span class="hljs-keyword">bisa </span><span class="hljs-keyword">berbentuk </span><span class="hljs-keyword">string, </span>numbers, arrays, atau <span class="hljs-keyword">bahkan </span>object lain. Object adalah <span class="hljs-keyword">bagian </span>penting pada javscript, yang akan dapat membantu teman-teman membuat representasi dari <span class="hljs-keyword">bagian </span><span class="hljs-meta">code</span> yang complex. Object tersebut memiliki kelibahan encapsulation dan inheritance. 


<span class="hljs-symbol">pada</span> javascript terdapat setidaknnya <span class="hljs-number">5</span> cara untuk membuat sebuah object:

- Object Literal syntax ( object ) 

<span class="hljs-symbol">contoh</span> object literal syntax
</code></pre><p>// creating an object using object literal syntax
const person = {
  name: &quot;John&quot;,
  age: 30,
  address: {
    street: &quot;123 Main St&quot;,
    city: &quot;New York&quot;,
    state: &quot;NY&quot;
  },
  sayHello: function() {
    console.log(<code>Hello, my name is ${this.name}!</code>);
  }
};</p>
<p>// accessing object properties and calling methods
console.log(person.name); // output: &quot;John&quot;
console.log(person.address.city); // output: &quot;New York&quot;
person.sayHello(); // output: &quot;Hello, my name is John!&quot;</p>
<pre><code>
- <span class="hljs-function"><span class="hljs-keyword">Constructor</span> <span class="hljs-title">function</span> <span class="hljs-title">syntax</span> <span class="hljs-params">( <span class="hljs-keyword">object</span> )</span></span>
</code></pre><p>// Define a constructor function for creating person objects
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;</p>
<p>  // A method of the Person object
  this.greet = function() {
    console.log(<code>Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.</code>);
  };
}</p>
<p>// Use the constructor function to create a new person object
let john = new Person(&quot;John&quot;, &quot;Doe&quot;, 30);</p>
<p>// Call the greet method of the person object
john.greet(); // Output: &quot;Hello, my name is John Doe and I am 30 years old.&quot;</p>
<pre><code>
- ES6 Class syntax (<span class="hljs-built_in"> instance </span>)
</code></pre><p>class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }</p>
<p>  greet() {
    console.log(<code>Hello, my name is ${this.name} and I am ${this.age} years old.</code>);
  }
}</p>
<p>const john = new Person(&#39;John&#39;, 30);
john.greet(); // output: &quot;Hello, my name is John and I am 30 years old.&quot;</p>
<pre><code>
- Object.create() <span class="hljs-function"><span class="hljs-keyword">method</span> <span class="hljs-params">(instance )</span></span>
</code></pre><p>// Define a person object
const person = {
  greeting: &#39;Hello!&#39;,
  sayHello() {
    console.log(this.greeting);
  }
};</p>
<p>// Create a new object using the person object as its prototype
const john = Object.create(person);</p>
<p>// Add a new property to the john object
john.name = &#39;John&#39;;</p>
<p>// Call the sayHello method on the john object
john.sayHello(); // Output: Hello!</p>
<pre><code>
- Factory <span class="hljs-keyword">function</span> <span class="hljs-title">pattern.</span>
</code></pre><p>function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      console.log(&#39;Hello, my name is &#39; + this.name + &#39; and I am &#39; + this.age + &#39; years old.&#39;);
    }
  };
}</p>
<p>// create new person objects using the factory function
let person1 = createPerson(&#39;John&#39;, 30);
let person2 = createPerson(&#39;Jane&#39;, 25);</p>
<p>// call the greet method on each person object
person1.greet(); // output: Hello, my name is John and I am 30 years old.
person2.greet(); // output: Hello, my name is Jane and I am 25 years old.</p>
<pre><code>
<span class="hljs-comment">### Constructor</span>

Pada Javascript <span class="hljs-string">"constructor"</span> adalah sebuah function yang digunakan untuk membuat object yang akan dibuat oleh kata kunci 'new'. Ini adalah sebuah function special, karena mereka adalah sama dengan nama class itu sendiri, dan akan dipanggil secara otomatis saat<span class="hljs-built_in"> instance </span>dibuat.

Constructor biasaannya digunakan untuk membuat nilai awal dari properti object. Dengan kata lain <span class="hljs-string">"constructor"</span> adalah cara kita untuk membuat<span class="hljs-built_in"> instance </span>berdasarkan blueprint atau class yang ada, dan memastikan setiap<span class="hljs-built_in"> instance </span>yang dibuat memiliki bentuk awal properti dan method yang sama dengan blue print. 

- Contoh Constructor Dengan ES6 class
</code></pre><p>class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }</p>
<p>  sayHello() {
    console.log(<code>Hello, my name is ${this.name} and I am ${this.age} years old.</code>);
  }
}</p>
<p>const john = new Person(&#39;John&#39;, 30);
john.sayHello(); // Output: Hello, my name is John and I am 30 years old.</p>
<pre><code>
- Contoh <span class="hljs-function"><span class="hljs-keyword">constructor</span> <span class="hljs-title">dengan</span> <span class="hljs-title">function</span></span>
</code></pre><p>function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log(&#39;Hello, my name is &#39; + this.name + &#39; and I am &#39; + this.age + &#39; years old.&#39;);
  };
}</p>
<p>// Create a new Person object using the constructor function
const john = new Person(&#39;John&#39;, 30);</p>
<p>// Call the sayHello method on the john object
john.sayHello(); // Output: Hello, my name is John and I am 30 years old.</p>
<pre><code>
<span class="hljs-comment">### this </span>

Pada Javascript class, 'this' akan merujuk pada bagian<span class="hljs-built_in"> instance </span>properti dari class. Dengan begitu kita bisa memanggil properti tersebut dari mana saja selama berada didalam class.
</code></pre><p>class Person {
  constructor(name) {
    this.name = name;
  }</p>
<p>  sayHello() {
    console.log(<code>Hello, my name is ${this.name}.</code>);
  }
}</p>
<p>const person = new Person(&#39;John&#39;);
person.sayHello(); // Output: Hello, my name is John.</p>
<pre><code>
<span class="hljs-symbol">contoh:</span>
</code></pre><p>this.namaku = nama</p>
<p>// bisa dilakukan </p>
<pre><code>

<span class="smali"><span class="hljs-comment">## new</span>

kata kunci<span class="hljs-built_in"> new </span>yang digunakan pada javascript digunakan untuk membuat<span class="hljs-built_in"> instance </span>dari object. Disaat kita menggunakan<span class="hljs-built_in"> new </span>maka properti dari object tersebut juga akan di replika. 

contoh code:</span>
</code></pre><p>function Person(name, age) {
  this.name = name;
  this.age = age;
}</p>
<p>const john = new Person(&#39;John&#39;, 30);
console.log(john.name); // Output: John
console.log(john.age); // Output: 30</p>
<pre><code>
atau contoh <span class="hljs-selector-tag">code</span> dengan ES6
</code></pre><p>class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }</p>
<p>  getDetails() {
    return <code>${this.make} ${this.model} (${this.year})</code>;
  }
}</p>
<p>const myCar = new Car(&#39;Honda&#39;, &#39;Civic&#39;, 2021);
console.log(myCar.getDetails()); // Output: Honda Civic (2021)</p>
<pre><code>
fungsi <span class="hljs-keyword">new</span> <span class="hljs-type">dibekerja</span> dengan <span class="hljs-string">"this"</span>. Tanpa kata kunci <span class="hljs-string">"this"</span> untuk properti maka kita tidak bisa menggunakan <span class="hljs-keyword">new</span><span class="hljs-type"></span>. 

Dengan <span class="hljs-keyword">new</span> <span class="hljs-type">kita</span> dapat membuat banyak object yang memiliki ciri-ciri yang serupa. 



<span class="hljs-meta">### Super </span>

Pada Javascript <span class="hljs-string">'super'</span> digunakan untuk memmangil method dari parent <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">ke</span> <span class="hljs-title">subclass</span> <span class="hljs-title">yang</span> <span class="hljs-title">ingin</span> <span class="hljs-title">melakukan</span> <span class="hljs-title">perubahan</span> <span class="hljs-title">pada</span> <span class="hljs-title">method</span> <span class="hljs-title">yang</span> <span class="hljs-title">sebelumnnya</span>.  <span class="hljs-title">Dengan</span> <span class="hljs-title">super</span> <span class="hljs-title">subclass</span> <span class="hljs-title">dapat</span> <span class="hljs-title">memiliki</span> <span class="hljs-title">aksess</span> <span class="hljs-title">dan</span> <span class="hljs-title">memanggil</span> <span class="hljs-title">method</span> <span class="hljs-title">dari</span> <span class="hljs-title">parent</span>.</span>
</code></pre><p>class Animal {
  constructor(name) {
    this.name = name;
  }</p>
<p>  speak() {
    console.log(<code>${this.name} makes a noise.</code>);
  }
}</p>
<p>class Dog extends Animal {
  constructor(name) {
    super(name); // calls the parent class constructor and passes in the name argument
  }</p>
<p>  speak() {
    super.speak(); // calls the parent class&#39;s speak method
    console.log(<code>${this.name} barks.</code>);
  }
}</p>
<p>const dog = new Dog(&#39;Rufus&#39;);
dog.speak(); // Output: Rufus makes a noise. Rufus barks.</p>
<pre><code>
Contoh <span class="hljs-selector-tag">code</span> lainnya:
</code></pre><p>class Animal {
    constructor(name) {
        this.name = name;
    }</p>
<pre><code>speak() {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`<span class="hljs-subst">${<span class="hljs-keyword">this</span>.name}</span> bersuara`</span>)
}
</code></pre><p>}</p>
<p>class Dog extends Animal {
    constructor(name, makanan){
        super(name) // jika ini dihapus maka akan terjadi error
        this.makanan = makanan</p>
<pre><code>}

speak() {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`<span class="hljs-subst">${<span class="hljs-keyword">this</span>.name}</span> barks`</span>)
}
</code></pre><p>}</p>
<p>const dog = new Dog(&#39;bagus&#39;, &#39;whiskase&#39;);
dog.speak();</p>
<pre><code>
perintah <span class="hljs-string">"super"</span> akan membantu <span class="hljs-keyword">jika </span>kita melakukan perubahan data pada class parent. Tanpa <span class="hljs-string">"super"</span> kita tidak dapat melakukan perubahan pada method dari class parent. 



<span class="hljs-comment">## OOP memiliki empat konsep utama </span>

<span class="hljs-number">1</span>. <span class="hljs-string">"encapsulation"</span>: <span class="hljs-keyword">digunakan </span>agar code kita lebih private, memberikan informasi kepada developer lain <span class="hljs-keyword">bahwa </span>kode ini tidak <span class="hljs-keyword">boleh </span><span class="hljs-keyword">dirubah. </span><span class="hljs-keyword">Bisa </span><span class="hljs-keyword">berwujud </span>local variabel ( kebalikan dari global variabel )

<span class="hljs-number">2</span>. <span class="hljs-string">"inheritance"</span>: adalah proses untuk membuat kelas <span class="hljs-keyword">baru </span>tetapi memiliki karaktersitik dari class yang menjadi parent. 

<span class="hljs-number">3</span>. <span class="hljs-string">"Polymorphism"</span>: adalah <span class="hljs-keyword">bentuk </span>dari inheritance, tetapi class childer telah melakukan perubahan pada method dari class parent.
<span class="hljs-symbol">
contoh:</span>
</code></pre><p>class Animal {
  sound() {
    console.log(&#39;This animal makes a sound&#39;);
  }
}
class Dog extends Animal {
  sound() {
    console.log(&#39;Bark! Bark!&#39;);
  }
}
class Cat extends Animal {
  sound() {
    console.log(&#39;Meow!&#39;);
  }
}
const animal1 = new Animal();
const dog1 = new Dog();
const cat1 = new Cat();
animal1.sound(); // Output: This animal makes a sound
dog1.sound(); // Output: Bark! Bark!
cat1.sound(); // Output: Meow!</p>
<pre><code>
- <span class="hljs-string">"abstration"</span>: Dengan abstration kita <span class="hljs-keyword">bisa </span>lebih fokus ke prosesnya daripada menggenai menulis detail <span class="hljs-meta">data</span> secara manual. Dengan abstraction kita <span class="hljs-keyword">bisa </span>memasukan parameter ke object secara langsung. Dengan <span class="hljs-keyword">begitu </span>object akan lebih <span class="hljs-keyword">berfariasi </span>daripada tipe diatas
</code></pre><p>class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    throw new Error(&quot;makeSound method must be implemented&quot;);
  }
}
class Dog extends Animal {
  makeSound() {
    console.log(<code>${this.name} barks: ${this.sound}</code>);
  }
}
const dog = new Dog(&quot;Buddy&quot;, &quot;Woof woof!&quot;);
// insert paramter ^
dog.makeSound();
```</p>
<h3 id="konsep-oop-dengan-garbage-collection">Konsep OOP dengan garbage collection</h3>
<p>OOP dan garbage collection itu berbeda. 
Garbage collection digunakan untuk membersihkan penggunaan memory dari aplikasi yang tidak berjalan.</p>
<h2 id="reference-">Reference:</h2>
<ul>
<li>ChatGPT</li>
<li>Freecodecamp </li>
<li><a href="https://en.wikipedia.org/wiki/Name%E2%80%93value_pair">https://en.wikipedia.org/wiki/Name%E2%80%93value_pair</a></li>
<li><a href="https://javascript.info/class">https://javascript.info/class</a> </li>
<li><a href="https://eloquentjavascript.net/06_object.html">https://eloquentjavascript.net/06_object.html</a> </li>
<li><p><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript">https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript</a></p>
</li>
<li><p><a href="https://stackoverflow.com/questions/2885385/what-is-the-difference-between-an-instance-and-an-object">https://stackoverflow.com/questions/2885385/what-is-the-difference-between-an-instance-and-an-object</a> ( difference between instance and object talk )</p>
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