<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="mari-belajar-bahasa-jawa-java-language-">Mari Belajar Bahasa Jawa ( java language )</h1>
<h2 id="instalasi-java-debian-terminal">instalasi java debian terminal</h2>
<pre><code>sudo apt <span class="hljs-keyword">update</span>
sudo apt <span class="hljs-keyword">install</span> <span class="hljs-keyword">default</span>-jre <span class="hljs-keyword">default</span>-jdk
</code></pre><p>Ref: <a href="https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-20-04">https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-20-04</a></p>
<h2 id="compile-and-run">Compile and run</h2>
<pre><code><span class="hljs-keyword">javac </span>namafile.<span class="hljs-keyword">java
</span><span class="hljs-keyword">java </span>namafile
</code></pre><p>ref: <a href="https://www.javatpoint.com/how-to-compile-and-run-java-program">https://www.javatpoint.com/how-to-compile-and-run-java-program</a></p>
<h2 id="point-penting-pada-java">point penting pada java</h2>
<ul>
<li>jangan lupa semicolon pada setiap perintah</li>
</ul>
<h2 id="tahapan-belajar">Tahapan Belajar</h2>
<ul>
<li>disediakan set code </li>
<li>dilakukan breakdown setiap baris ( jika telah dijelaskan pada kesempatan sebelumnya, maka baris tersebut tidak akan dijelaskan lagi )</li>
<li>catatan kecil mengenai hal baru yang telah dipelajari</li>
<li>untuk latihan lakukan penyelesaian kasus menggunakan ilmu yang telah dipelajari ( contoh kasus akan diberikan pada akhir halaman )</li>
</ul>
<h2 id="public-class-static-void-">Public, class, static, void ?</h2>
<pre><code><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">start</span> { <span class="hljs-comment">// Java run start</span>
    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span>(<span class="hljs-params">String[] args</span>) </span>{
        <span class="hljs-comment">// Membuat variabel integer dengan nama 'angka' dan memberinya nilai 7</span>
        <span class="hljs-keyword">int</span> nilai = <span class="hljs-number">1945</span>; <span class="hljs-comment">// variabel "nilai"</span>

        <span class="hljs-comment">// Menampilkan nilai variabel ke dalam terminal</span>
        System.<span class="hljs-keyword">out</span>.println(<span class="hljs-string">"Nilai didalam variabel adalah"</span> + nilai);
    }
}
<span class="hljs-comment">// javac start.Java</span>
<span class="hljs-comment">// java start</span>
</code></pre><blockquote>
<p>hasil breakdown </p>
</blockquote>
<p>Tentu, berikut adalah penjelasan untuk setiap baris kode tersebut:</p>
<ul>
<li><p>public class start :(awalan, deklarasi wajib sebuah publik class, yang dapat diakses oleh file atau class lainnya)</p>
</li>
<li><p>public static void main(string[] args) :(ini adalah kelompok pertama yang akan dieksekusi oleh file bernama &quot;main&quot;, sedangkan args digunakan untuk menerima perintah yang masuk)</p>
</li>
<li><p>int nilai = 1945; :( int digunakan untuk memberi tau java tipe data apa yang akan di input nanti, &quot;nilai&quot; adalah variabel, &quot;1945&quot; adalah value )</p>
</li>
<li><p>System.out.printLn(&quot;string bro &quot; + nilai); :(bertujuan menampilkan nilai didalam kurung buka)</p>
</li>
</ul>
<p>}: Menutup blok kode untuk metode main.</p>
<p>}: Menutup blok kode untuk kelas start.</p>
<p>// javac start.Java: Komentar yang menunjukkan perintah untuk mengkompilasi file Java. Namun, perlu diperhatikan bahwa Java bersifat case-sensitive, jadi seharusnya perintahnya adalah javac start.java.</p>
<p>// java start: Komentar yang menunjukkan perintah untuk menjalankan program Java yang telah dikompilasi.</p>
<blockquote>
<p>point penting</p>
</blockquote>
<pre><code>public class <span class="hljs-keyword">start</span> { // <span class="hljs-keyword">Java</span> run <span class="hljs-keyword">start</span>
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-built_in">void</span> <span class="hljs-keyword">main</span>(<span class="hljs-keyword">String</span>[] args) {
        // Membuat variabel <span class="hljs-built_in">integer</span> dengan nama <span class="hljs-string">'angka'</span> dan memberinya nilai <span class="hljs-number">7</span>
        <span class="hljs-built_in">int</span> nilai = <span class="hljs-number">1945</span>; // variabel "nilai"
</code></pre><hr>
<h2 id="array-satu-dimensi">array satu dimensi</h2>
<p>Tentu, saya akan menjelaskan setiap baris dari kode Java yang Anda berikan:</p>
<pre><code class="lang-java">public class start { // Mendeklarasikan kelas dengan nama <span class="hljs-string">"start"</span>
   <span class="hljs-keyword"> public</span><span class="hljs-keyword"> static</span> void main(String[] args) { // Metode utama yang akan dijalankan oleh JVM (Java Virtual Machine)
        // Membuat variabel<span class="hljs-built_in"> array
</span>        int[] arraySatu = {12,10,40}; // Inisialisasi<span class="hljs-built_in"> array </span><span class="hljs-string">"arraySatu"</span> dengan tiga elemen: 12, 10, dan 40

        // Menampilkan nilai variabel ke dalam terminal
        System.out.print(<span class="hljs-string">"Array: ["</span>); // Mencetak teks <span class="hljs-string">"Array: ["</span> tanpa baris baru di akhir
        for (int i = 0; i &lt; arraySatu.length; i++) { // Perulangan for untuk mengakses setiap elemen<span class="hljs-built_in"> array
</span>            System.out.print(arraySatu[i]); // Mencetak elemen saat ini dari<span class="hljs-built_in"> array </span><span class="hljs-string">"arraySatu"</span>
           <span class="hljs-built_in"> if </span>(i &lt; arraySatu.length - 1) { // Jika ini bukan elemen terakhir dari array,
                System.out.print(<span class="hljs-string">", "</span>); // maka cetak koma dan spasi
            }
        }
        System.out.println(<span class="hljs-string">"]"</span>); // Mencetak tanda kurung tutup <span class="hljs-string">"]"</span> dan baris baru
    }
}
</code></pre>
<blockquote>
<p>breakdown</p>
</blockquote>
<ul>
<li><code>public class start</code>: Ini mendeklarasikan kelas dengan nama <code>start</code>. Di Java, setiap file harus memiliki setidaknya satu kelas, dan nama kelas harus sama dengan nama file jika kelas tersebut adalah kelas publik.</li>
<li><code>public static void main(String[] args)</code>: Ini adalah metode <code>main</code> yang merupakan titik masuk dari setiap aplikasi Java. <code>String[] args</code> adalah parameter yang digunakan untuk menerima argumen baris perintah saat menjalankan program.</li>
<li><code>int[] arraySatu = {12,10,40};</code>: Ini mendeklarasikan dan menginisialisasi sebuah array integer bernama <code>arraySatu</code> dengan tiga nilai: 12, 10, dan 40.</li>
<li><code>System.out.print(&quot;Array: [&quot;);</code>: Ini mencetak string <code>&quot;Array: [&quot;</code> ke konsol tanpa menambahkan baris baru di akhir.</li>
<li><code>for (int i = 0; i &lt; arraySatu.length; i++)</code>: Ini adalah perulangan <code>for</code> yang digunakan untuk mengiterasi melalui setiap elemen dari array <code>arraySatu</code>.</li>
<li><code>System.out.print(arraySatu[i]);</code>: Ini mencetak elemen saat ini dari array <code>arraySatu</code> ke konsol.</li>
<li><code>if (i &lt; arraySatu.length - 1)</code>: Ini adalah kondisi yang memeriksa apakah elemen saat ini bukan elemen terakhir dari array. Jika tidak, maka cetak koma dan spasi.</li>
<li><code>System.out.println(&quot;]&quot;);</code>: Ini mencetak tanda kurung tutup <code>&quot;]&quot;</code> dan menambahkan baris baru di akhir.</li>
</ul>
<p>Perintah <code>// javac start.Java</code> digunakan untuk mengkompilasi file <code>start.Java</code> dan <code>// java start</code> digunakan untuk menjalankan kelas <code>start</code> yang telah dikompilasi. Pastikan bahwa nama file dan nama kelas sesuai, dan perhatikan bahwa Java peka terhadap huruf besar/kecil, jadi <code>start.Java</code> harus ditulis sebagai <code>start.java</code>.</p>
<blockquote>
<p>point penting </p>
</blockquote>
<pre><code>int[] arraySatu = {12,10,40}; // Inisialisasi<span class="hljs-built_in"> array </span><span class="hljs-string">"arraySatu"</span> dengan tiga elemen: 12, 10, dan 40

        // Menampilkan nilai variabel ke dalam terminal
        System.out.print(<span class="hljs-string">"Array: ["</span>); // Mencetak teks <span class="hljs-string">"Array: ["</span> tanpa baris baru di akhir
        for (int i = 0; i &lt; arraySatu.length; i++) { // Perulangan for untuk mengakses setiap elemen<span class="hljs-built_in"> array
</span>            System.out.print(arraySatu[i]); // Mencetak elemen saat ini dari<span class="hljs-built_in"> array </span><span class="hljs-string">"arraySatu"</span>
           <span class="hljs-built_in"> if </span>(i &lt; arraySatu.length - 1) { // Jika ini bukan elemen terakhir dari array,
                System.out.print(<span class="hljs-string">", "</span>); // maka cetak koma dan spasi
            }
</code></pre><hr>
<h2 id="array-matriks-3x3">array matriks 3x3</h2>
<p>Tentu saja, berikut adalah penjelasan untuk setiap baris kode Java yang Anda berikan:</p>
<pre><code class="lang-java">public class start { // Mendeklarasikan kelas dengan nama <span class="hljs-string">"start"</span>
   <span class="hljs-keyword"> public</span><span class="hljs-keyword"> static</span> void main(String[] args) { // Metode utama yang akan dijalankan oleh JVM (Java Virtual Machine)
        // Matriks array, variabel arrayDua
        int[][] arrayDua = {
            {12, 10, 40}, // Baris pertama dari matriks<span class="hljs-built_in"> array
</span>            {13, 11, 41}, // Baris kedua dari matriks<span class="hljs-built_in"> array
</span>            {14, 12, 42}  // Baris ketiga dari matriks<span class="hljs-built_in"> array
</span>        }; // Inisialisasi<span class="hljs-built_in"> array </span>dua dimensi <span class="hljs-string">"arrayDua"</span> dengan nilai-nilai yang diberikan

        // Menampilkan isi<span class="hljs-built_in"> array </span>dua dimensi ke dalam terminal, secara manual
        for (int i = 0; i &lt; 3; i++) { // Loop luar untuk baris
            for (int j = 0; j &lt; 3; j++) { // Loop dalam untuk kolom
                System.out.print(arrayDua[i][j] + <span class="hljs-string">" "</span>); // Mencetak elemen<span class="hljs-built_in"> array </span>dua dimensi
            }
            System.out.println(); // Mencetak baris baru setelah setiap baris dari matriks
        }
    }
}
</code></pre>
<blockquote>
<p>breakdown </p>
<ul>
<li><code>public class start</code>: Ini mendeklarasikan kelas dengan nama <code>start</code>. Di Java, setiap file harus memiliki setidaknya satu kelas, dan nama kelas harus sama dengan nama file jika kelas tersebut adalah kelas publik.</li>
<li><code>public static void main(String[] args)</code>: Ini adalah metode <code>main</code> yang merupakan titik masuk dari setiap aplikasi Java. <code>String[] args</code> adalah parameter yang digunakan untuk menerima argumen baris perintah saat menjalankan program.</li>
<li><code>int[][] arrayDua = {...};</code>: Ini mendeklarasikan dan menginisialisasi sebuah array dua dimensi integer bernama <code>arrayDua</code> dengan tiga baris dan tiga kolom, diisi dengan nilai-nilai yang diberikan.</li>
<li><code>for (int i = 0; i &lt; 3; i++)</code>: Ini adalah loop luar yang digunakan untuk mengiterasi melalui setiap baris dari array <code>arrayDua</code>.</li>
<li><code>for (int j = 0; j &lt; 3; j++)</code>: Ini adalah loop dalam yang digunakan untuk mengiterasi melalui setiap kolom dalam baris saat ini dari array <code>arrayDua</code>.</li>
<li><code>System.out.print(arrayDua[i][j] + &quot; &quot;);</code>: Ini mencetak elemen saat ini dari array <code>arrayDua</code> ditambah dengan spasi ke konsol.</li>
<li><code>System.out.println();</code>: Ini mencetak baris baru ke konsol, yang menyebabkan output dari baris berikutnya dari array <code>arrayDua</code> akan dimulai dari baris baru.</li>
</ul>
</blockquote>
<p>Perintah <code>// javac start.Java</code> digunakan untuk mengkompilasi file <code>start.Java</code> dan <code>// java start</code> digunakan untuk menjalankan kelas <code>start</code> yang telah dikompilasi. Pastikan bahwa nama file dan nama kelas sesuai, dan perhatikan bahwa Java peka terhadap huruf besar/kecil, jadi <code>start.Java</code> harus ditulis sebagai <code>start.java</code>.</p>
<blockquote>
<p>point penting </p>
</blockquote>
<pre><code class="lang-java">        int[][] arrayDua = {
            {12, 10, 40}, // Baris pertama dari matriks<span class="hljs-built_in"> array
</span>            {13, 11, 41}, // Baris kedua dari matriks<span class="hljs-built_in"> array
</span>            {14, 12, 42}  // Baris ketiga dari matriks<span class="hljs-built_in"> array
</span>        }; // Inisialisasi<span class="hljs-built_in"> array </span>dua dimensi <span class="hljs-string">"arrayDua"</span> dengan nilai-nilai yang diberikan
</code></pre>
<h2 id="latihan-java">Latihan java</h2>
<p><a href="../latihan-bahasa/latihan-java.md">latihan java</a></p>
<h2 id="topic-lanjutan">Topic lanjutan</h2>
<ul>
<li><a href="./fundamental-java.md">Fundamental</a></li>
<li><a href="./array-java.md">Array</a></li>
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