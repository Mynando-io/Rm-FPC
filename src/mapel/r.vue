<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="r-language">R language</h1>
<h2 id="ubuntu-installation">Ubuntu installation</h2>
<pre><code>sudo apt <span class="hljs-keyword">install</span> r-base
</code></pre><p>untuk menjalankan integreted r di terminal tekan </p>
<pre><code><span class="hljs-attribute">R</span>
</code></pre><p>Untuk keluar ide </p>
<pre><code><span class="hljs-string">q()</span>
</code></pre><h2 id="untuk-menjalankan-r-script">Untuk menjalankan r script</h2>
<pre><code><span class="hljs-keyword">Rscript </span>namafile.r
</code></pre><h2 id="contoh-code-r">COntoh code R</h2>
<pre><code># Membuat data frame dengan kolom <span class="hljs-string">"nama"</span> dan <span class="hljs-string">"usia"</span>
dataframe &lt;- data.frame(
  nama = c(<span class="hljs-string">"Andi"</span>, <span class="hljs-string">"Budi"</span>, <span class="hljs-string">"Cindy"</span>, <span class="hljs-string">"Dini"</span>),
  usia = c(<span class="hljs-number">25</span>, <span class="hljs-number">30</span>, <span class="hljs-number">27</span>, <span class="hljs-number">24</span>)
)

# Menampilkan isi data frame
print(dataframe)
</code></pre><h2 id="mencari-akar-dengan-sqrt">Mencari Akar dengan SQRT</h2>
<p><code>sqrt(9) # output: 3</code></p>
<h2 id="membuat-array">Membuat array</h2>
<pre><code>## Bottom is array

x &lt;- c(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>)

y &lt;- c(<span class="hljs-number">-8</span>,<span class="hljs-number">-7</span>,<span class="hljs-number">-6</span>,<span class="hljs-number">-5</span>,<span class="hljs-number">-4</span>,<span class="hljs-number">-3</span>,<span class="hljs-number">-2</span>,<span class="hljs-number">-1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>,<span class="hljs-number">7</span>,<span class="hljs-number">8</span>)

z &lt;- c(<span class="hljs-number">1.0</span>, <span class="hljs-number">1.1</span>, <span class="hljs-number">1.2</span>, <span class="hljs-number">1.3</span>, <span class="hljs-number">1.4</span>, <span class="hljs-number">1.5</span>, <span class="hljs-number">1.6</span>, <span class="hljs-number">1.7</span>, <span class="hljs-number">1.8</span>, <span class="hljs-number">1.9</span>, <span class="hljs-number">2.0</span>)

p &lt;- c(<span class="hljs-number">3</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">15</span>)

q &lt;- rep(<span class="hljs-number">9</span>, times = <span class="hljs-number">6</span>)

print(q)
</code></pre><h2 id="membuat-dataframe">Membuat dataframe</h2>
<pre><code><span class="hljs-meta"># Create variables</span>
<span class="hljs-title">jurusan</span> &lt;- c(<span class="hljs-string">"Komputer"</span>, <span class="hljs-string">"Fisika"</span>, <span class="hljs-string">"Komputer"</span>, <span class="hljs-string">"Fisika"</span>, <span class="hljs-string">"Komputer"</span>,  <span class="hljs-string">"Fisika"</span>, <span class="hljs-string">"komputer"</span>, <span class="hljs-string">"Fisika"</span>)
<span class="hljs-title">asal_daerah</span> &lt;- c(<span class="hljs-string">"Bogor"</span>, <span class="hljs-string">"Bogor"</span>, <span class="hljs-string">"Bandung"</span>, <span class="hljs-string">"Bandung"</span>, <span class="hljs-string">"Bogor"</span>, <span class="hljs-string">"Bogor"</span>, <span class="hljs-string">"Bandung"</span>, <span class="hljs-string">"Bandung"</span>)
<span class="hljs-title">usia</span> &lt;- c(<span class="hljs-number">25</span>, <span class="hljs-number">25</span>, <span class="hljs-number">25</span>, <span class="hljs-number">25</span>, <span class="hljs-number">26</span>, <span class="hljs-number">26</span>, <span class="hljs-number">26</span>, <span class="hljs-number">26</span>)

<span class="hljs-meta"># Combine variables into a data frame</span>
<span class="hljs-title">df</span> &lt;- <span class="hljs-class"><span class="hljs-keyword">data</span>.frame(<span class="hljs-title">jurusan</span>, <span class="hljs-title">asal_daerah</span>, <span class="hljs-title">usia</span>)</span>

<span class="hljs-title">print</span>(df)


<span class="hljs-meta">## Above is dataframe</span>
</code></pre><h2 id="membuat-matriks">Membuat matriks</h2>
<pre><code># Array Matriks A
A &lt;- matrix(c(<span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">14</span>, <span class="hljs-number">16</span>, <span class="hljs-number">17</span>, <span class="hljs-number">18</span>), nrow=<span class="hljs-number">3</span>, ncol=<span class="hljs-number">4</span>, byrow=<span class="hljs-literal">TRUE</span>)
# Array Matriks B
B &lt;- matrix(c(<span class="hljs-number">10</span>, <span class="hljs-number">14</span>, <span class="hljs-number">11</span>, <span class="hljs-number">15</span>, <span class="hljs-number">12</span>, <span class="hljs-number">16</span>, <span class="hljs-number">13</span>, <span class="hljs-number">17</span>), nrow=<span class="hljs-number">4</span>, ncol=<span class="hljs-number">2</span>, byrow=<span class="hljs-literal">TRUE</span>)
# Tampilkan kedua nilai
print(A)
print(B)
</code></pre><h2 id="membuat-tabel">Membuat tabel</h2>
<pre><code>quarter &lt;- data.frame(
Qtr1 = c(<span class="hljs-string">-11</span>, <span class="hljs-string">-7</span>, <span class="hljs-string">-3</span>, 1, 5, 9),
Qtr2 = c(<span class="hljs-string">-10</span>, <span class="hljs-string">-6</span>, <span class="hljs-string">-2</span>, 2, 6, 10),
Qtr3 = c(<span class="hljs-string">-9</span>, <span class="hljs-string">-5</span>, <span class="hljs-string">-1</span>, 3, 7, 11),
Qtr4 = c(<span class="hljs-string">-8</span>, <span class="hljs-string">-4</span>, 0, 4, 8, " "),
row.names = c(2010:2015) # row object harus berada dibagian bawah sendiri.
)
# menampilkan variabel quarter
print(quarter)
</code></pre><p>Qtr, akan mengisi baris 1</p>
<table>
<thead>
<tr>
<th>Qtr1</th>
<th>Qtr2</th>
<th>Qtr3</th>
<th>Qtr4 </th>
</tr>
</thead>
<tbody>
<tr>
<td>-11</td>
<td>-10</td>
<td>-9</td>
<td>-8 </td>
</tr>
</tbody>
</table>
<p><img src="https://github.com/playmakermz/warkop-website/assets/60807663/ae55eafa-aaa5-447c-953f-2f059103dce9" alt="image"></p>
<h4 id="contoh-tabel">Contoh tabel</h4>
<pre><code><span class="hljs-meta"># Build date column</span>
<span class="hljs-type">Jan</span> &lt;- c(<span class="hljs-string">""</span>, <span class="hljs-number">21</span>)
<span class="hljs-type">Feb</span> &lt;- c(<span class="hljs-number">10</span>, <span class="hljs-number">22</span>)
<span class="hljs-type">Mar</span> &lt;- c(<span class="hljs-number">11</span>, <span class="hljs-number">23</span>)
<span class="hljs-type">Apr</span> &lt;- c(<span class="hljs-number">12</span>, <span class="hljs-number">24</span>)
<span class="hljs-type">May</span> &lt;- c(<span class="hljs-number">13</span>, <span class="hljs-number">25</span>)
<span class="hljs-type">Jun</span> &lt;- c(<span class="hljs-number">14</span>, <span class="hljs-number">26</span>)
<span class="hljs-type">Jul</span> &lt;- c(<span class="hljs-number">15</span>, <span class="hljs-number">27</span>)
<span class="hljs-type">Aug</span> &lt;- c(<span class="hljs-number">16</span>, <span class="hljs-number">28</span>)
<span class="hljs-type">Sep</span> &lt;- c(<span class="hljs-number">17</span>, <span class="hljs-number">29</span>)
<span class="hljs-type">Oct</span> &lt;- c(<span class="hljs-number">18</span>, <span class="hljs-number">30</span>)
<span class="hljs-type">Nov</span> &lt;- c(<span class="hljs-number">19</span>, <span class="hljs-string">""</span>)
<span class="hljs-type">Dec</span> &lt;- c(<span class="hljs-number">20</span>, <span class="hljs-string">""</span>)

<span class="hljs-meta"># Manage column, and convert to dataframe</span>
<span class="hljs-title">dataset</span> &lt;- <span class="hljs-class"><span class="hljs-keyword">data</span>.frame(<span class="hljs-type">Jan</span>, <span class="hljs-type">Feb</span>, <span class="hljs-type">Mar</span>, <span class="hljs-type">Apr</span>, <span class="hljs-type">May</span>, <span class="hljs-type">Jun</span>, <span class="hljs-type">Jul</span>, <span class="hljs-type">Aug</span>, <span class="hljs-type">Sep</span>, <span class="hljs-type">Oct</span>, <span class="hljs-type">Nov</span>, <span class="hljs-type">Dec</span>)</span>

<span class="hljs-meta"># Memberikan label baris dari dataset yang telah ada</span>
<span class="hljs-title">rownames</span>(dataset) &lt;- c(<span class="hljs-string">"2020"</span>, <span class="hljs-string">"2021"</span>)

<span class="hljs-meta"># print dataframe into terminal</span>
<span class="hljs-title">print</span>(dataset)
</code></pre><h2 id="ls-pat">ls pat</h2>
<p>code 1: <code>ls(pat=&quot;y&quot;)</code></p>
<hr>
<p>kode ls() pada R dapat kita gunakan untuk mencari object pada einvronment (script) yang sedang berjalan saat ini. Berfungsi untuk membantu kita mencari tau, apakah nama object tersebut sudah ada yang memakai atau belum.</p>
<p>Parameter <code>pat=&quot;y&quot;</code> ini digunakan untuk mencari tau apakah ada object yang memiliki huruf &quot;y&quot; pada nama mereka.</p>
<p>Sebagai contoh dengan code diatas, kita akan mendapatkan list dari object yang telah kita buat sebelumnnya.</p>
<p><img src="https://user-images.githubusercontent.com/60807663/234479345-ce45cbe3-dd35-4f73-9af3-dbd1876bd3a8.png" alt="image"></p>
<p>code 2: <code>for (i in 1:30) {print(i)}</code></p>
<hr>
<p><img src="https://user-images.githubusercontent.com/60807663/234479737-336e7aa9-a8be-4849-8b6c-a5a8221fbcb6.png" alt="image"></p>
<p>Kode diatas digunakan untuk melakukan loop yang akan berjalan dari 1 hingga 30. Dengan menampilkan nilai &quot;i&quot;.</p>
<p>Sedangkan nilai &quot;i&quot; itu sendiri adalah loop counter, maka nilai 1 hingga 30 akan ditampilkan secara terpisah dan satu persatu.</p>
<p>&quot;i&quot; tersebut digunakan sebagai iteration, atau loop counter.</p>
<p>code 3: <code>setwd(&quot;C:\B&quot;)</code></p>
<hr>
<p>pada kode <code>setwd(&quot;C:\B&quot;)</code>, terdapat kesalah pada penulisan backslah(), Karena pada R penempatan dan 1 backslah() memiliki makna dan kegunaan spesial. Oleh karena itu perlu ada tambahan backslah agar bisa dibaca sebagai path.</p>
<p>Kode yang diharapkan <code>setwd(&quot;C:\\B&quot;)</code>. Kode ini berfungsi untuk berpindah directori pada R language. Fungsinya hampir sama dengan <code>dir</code> pada CMD windows, atau <code>ls</code> pada linux terminal.</p>
<p>Dibawah ini adalah contoh setwd pada linux chromebook saya</p>
<pre><code><span class="hljs-function"><span class="hljs-title">setwd</span><span class="hljs-params">(<span class="hljs-string">"/home/yukina"</span>)</span></span>

list.files()
</code></pre><p>Hasilnya:</p>
<p><img src="https://user-images.githubusercontent.com/60807663/234482474-61f571b7-5e5d-4621-89b4-af634ef34bd4.png" alt="image"></p>
<h2 id="melakukan-perhitungan-gaussian-ellimination-">Melakukan perhitungan gaussian ellimination.</h2>
<pre><code># deklarasi matriks M
M &lt;- matrix(c(<span class="hljs-number">9</span>, <span class="hljs-number">2</span>, <span class="hljs-number">8</span>, <span class="hljs-number">3</span>, <span class="hljs-number">0</span>, <span class="hljs-number">10</span>, <span class="hljs-number">7</span>, <span class="hljs-number">6</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">10</span>, <span class="hljs-number">9</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">12</span>), nrow = <span class="hljs-number">4</span>, ncol = <span class="hljs-number">4</span>, byrow =
# deklrarasi matriks identitas I
I &lt;- matrix(c(<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>,<span class="hljs-number">1</span> ,<span class="hljs-number">0</span> ,<span class="hljs-number">0</span> ,<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>), nrow = <span class="hljs-number">4</span>, ncol = <span class="hljs-number">4</span>, byrow = <span class="hljs-literal">TRUE</span>
# Operasi perkalian matriks ini akan menghasilkan matriks yang sama dengan matriks awal
hasil &lt;- M %*% I
# tampilkan hasil
print(hasil)
</code></pre><p>dari matriks </p>
<pre><code><span class="hljs-symbol">9 </span><span class="hljs-number">2</span> <span class="hljs-number">8</span> <span class="hljs-number">3</span>
<span class="hljs-symbol">0 </span><span class="hljs-number">10</span> <span class="hljs-number">7</span> <span class="hljs-number">6</span>
<span class="hljs-symbol">0 </span><span class="hljs-number">0</span> <span class="hljs-number">10</span> <span class="hljs-number">9</span>
<span class="hljs-symbol">0 </span><span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">12</span>
</code></pre><p>menjadi </p>
<p><img src="https://github.com/playmakermz/warkop-website/assets/60807663/09b4fe53-cdcd-4404-9f90-87fb9a2a9c9b" alt="image"></p>
<h2 id="matriks-transpose-code">Matriks transpose code</h2>
<pre><code># deklarasi matriks M
M &lt;- matrix(c(<span class="hljs-number">9</span>, <span class="hljs-number">2</span>, <span class="hljs-number">8</span>, <span class="hljs-number">3</span>, <span class="hljs-number">0</span>, <span class="hljs-number">10</span>, <span class="hljs-number">7</span>, <span class="hljs-number">6</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">10</span>, <span class="hljs-number">9</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">12</span>), nrow = <span class="hljs-number">4</span>, ncol = <span class="hljs-number">4</span>, byrow =
# Operasi perkalian matriks ini akan menghasilkan matriks yang sama dengan matriks awal
hasil &lt;- t(M)
# tampilkan hasil
print(hasil)
</code></pre><h2 id="matriks-inverse">Matriks inverse</h2>
<pre><code># deklarasi matriks M
M &lt;- matrix(c(<span class="hljs-number">9</span>, <span class="hljs-number">2</span>, <span class="hljs-number">8</span>, <span class="hljs-number">3</span>, <span class="hljs-number">0</span>, <span class="hljs-number">10</span>, <span class="hljs-number">7</span>, <span class="hljs-number">6</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">10</span>, <span class="hljs-number">9</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">12</span>), nrow = <span class="hljs-number">4</span>, ncol = <span class="hljs-number">4</span>, byrow =
# Operasi perkalian matriks ini akan menghasilkan matriks yang sama dengan matriks awal
hasil &lt;- solve(M)
# tampilkan hasil
print(hasil)
</code></pre><h2 id="penjumlahan-pada-matriks-n">Penjumlahan pada matriks N</h2>
<pre><code>## Deklrasi matriks N
N &lt;- matrix(c(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">8</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">2</span>), nrow = <span class="hljs-number">2</span>, byrow = <span class="hljs-literal">TRUE</span>)
# matriks d
e &lt;- matrix(c(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">6</span>, <span class="hljs-number">3</span>), nrow =<span class="hljs-number">2</span>, byrow = <span class="hljs-literal">TRUE</span>)
# Hasil
N4 &lt;- N + e
# print N
N4
</code></pre><h2 id="membuat-box-container-dengan-ukuran-yang-berbeda-beda">Membuat box container dengan ukuran yang berbeda-beda</h2>
<p><img src="https://github.com/playmakermz/warkop-website/assets/60807663/204301a2-b692-432b-9f26-a42fe89889c6" alt="image"></p>
<pre><code># Disini mengatur tinggi dengan <span class="hljs-string">"nrow"</span> dan mengatur lebar <span class="hljs-string">"ncolumn"</span>
layout(matrix(c(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>,<span class="hljs-number">2</span>, <span class="hljs-number">3</span>,<span class="hljs-number">3</span>, <span class="hljs-number">4</span>), nrow = <span class="hljs-number">3</span>, ncol = <span class="hljs-number">2</span>), heights = c(<span class="hljs-number">1</span>,<span class="hljs-number">2</span>))
layout.show(<span class="hljs-number">4</span>)
</code></pre><h2 id="membuat-graf">Membuat graf</h2>
<p><img src="https://github.com/playmakermz/warkop-website/assets/60807663/05af3724-23b7-4544-82fd-9805a19b1c94" alt="image"></p>
<pre><code>x &lt;- c(<span class="hljs-number">2</span>,<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">4</span>,<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">1</span>)
y &lt;- c(<span class="hljs-number">4</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">4</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">4</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">3</span>)
sunflowerplot(x,
    y,
    main = <span class="hljs-string">"Diskusi 5"</span>,
    xlab = <span class="hljs-string">"X"</span>,
    ylab = <span class="hljs-string">"Y"</span>)
</code></pre><h2 id="mengambil-data-matriks-dari-file-txt">Mengambil data matriks dari file txt</h2>
<p><img src="https://github.com/playmakermz/warkop-website/assets/60807663/cc6f3ff9-3174-4799-94c6-c7c0ef8bafee" alt="image"></p>
<pre><code><span class="hljs-keyword">scanMatriks </span>&lt;- <span class="hljs-keyword">scan("data2.txt") </span><span class="hljs-comment"># ambil data dari file</span>
hasil &lt;- matrix(<span class="hljs-keyword">scanMatriks, </span>nrow = <span class="hljs-number">4</span>, ncol = <span class="hljs-number">10</span>, <span class="hljs-keyword">byrow </span>= TRUE) <span class="hljs-comment"># masukan variabel ke matriks</span>
print(hasil) <span class="hljs-comment"># tampilkan ke terminal</span>
</code></pre><h2 id="membaca-data-csv">Membaca data CSV</h2>
<pre><code>Data &lt;- read.csv(<span class="hljs-string">"penjualan.csv"</span>, header=TRUE)
<span class="hljs-function"><span class="hljs-title">View</span><span class="hljs-params">(Data)</span></span>
<span class="hljs-function"><span class="hljs-title">print</span><span class="hljs-params">(Data)</span></span>
</code></pre><h2 id="membuat-plot-distribusi">Membuat plot distribusi</h2>
<p><img src="https://github.com/playmakermz/warkop-website/assets/60807663/a7bd5df4-c43e-4599-9aed-b4f0c0c1f4b0" alt="image"></p>
<pre><code>x &lt;- seq(-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, length.<span class="hljs-attr">out</span> = <span class="hljs-number">100</span>) <span class="hljs-comment"># Rentang nilai x dari -1 sampai 1 dengan 100 data</span>

<span class="hljs-comment"># Menghitung kepadatan distribusi Normal Standar untuk setiap nilai x</span>
y &lt;- dnorm(x)
mu &lt;- <span class="hljs-number">0</span> <span class="hljs-comment"># Nilai mu</span>
sigma &lt;- <span class="hljs-number">1</span> <span class="hljs-comment"># Nilai sigma</span>

<span class="hljs-comment"># Mengatur Ukuran dari plot tersebut.</span>
par(<span class="hljs-attr">mar</span> = c(<span class="hljs-number">12</span>, <span class="hljs-number">4</span>, <span class="hljs-number">12</span>, <span class="hljs-number">2</span>) ) <span class="hljs-comment"># Mengatur margin (bottom, left, top, right)</span>

<span class="hljs-comment"># Membuat plot</span>
plot(x, y, <span class="hljs-attr">type</span> = <span class="hljs-string">"l"</span>, <span class="hljs-attr">lwd</span> = <span class="hljs-number">2</span>, <span class="hljs-attr">col</span> = <span class="hljs-string">"gray"</span>,
<span class="hljs-attr">xlab</span> = <span class="hljs-string">""</span>, <span class="hljs-attr">ylab</span> = <span class="hljs-string">"Kepadatan"</span>,
<span class="hljs-attr">main</span> = bquote(<span class="hljs-string">"Fungsi Kepadatan Distribusi Normal Standar, "</span> ~ <span class="hljs-attr">mu</span> == .(mu) ~ <span class="hljs-string">", "</span> ~ <span class="hljs-attr">sigma</span> == .(sigma))
)
</code></pre><h2 id="contoh-while-dan-for-loop-pada-r">Contoh while dan for loop pada R</h2>
<pre><code><span class="hljs-keyword">sum</span> &lt;- 0
<span class="hljs-keyword">while</span> (TRUE ) {
    <span class="hljs-keyword">for</span> (i <span class="hljs-keyword">in</span> 1:10) {
        <span class="hljs-keyword">sum</span> &lt;- <span class="hljs-keyword">sum</span> + <span class="hljs-built_in">i</span>
    }
    <span class="hljs-keyword">if</span> ( <span class="hljs-keyword">sum</span> &gt;= 110 ) {
        <span class="hljs-keyword">break</span>
    }
}
<span class="hljs-keyword">print</span>(<span class="hljs-keyword">sum</span>)
</code></pre><h2 id="contoh-for-loop-untuk-menghasilkan-nilai-genap">contoh for loop, untuk menghasilkan nilai genap</h2>
<pre><code><span class="hljs-type">Nilai_genap</span> &lt;- <span class="hljs-built_in">c</span>()
    <span class="hljs-keyword">for</span> (i <span class="hljs-keyword">in</span> <span class="hljs-number">1</span>:<span class="hljs-number">10</span>) {
        <span class="hljs-keyword">if</span> (i %% <span class="hljs-number">2</span> == <span class="hljs-number">0</span>) {
            <span class="hljs-type">Nilai_genap</span> &lt;- <span class="hljs-built_in">c</span>(<span class="hljs-type">Nilai_genap</span>, i)
        }
}
<span class="hljs-built_in">print</span>(<span class="hljs-type">Nilai_genap</span>)
</code></pre><h2 id="cara-melakukan-perhitungan-mean-rata-rata-">Cara melakukan perhitungan Mean(rata-rata)</h2>
<pre><code class="lang-R">kecepatan &lt;- c(<span class="hljs-number">4</span>,<span class="hljs-number">4</span>,<span class="hljs-number">7</span>,<span class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span class="hljs-number">8</span>,<span class="hljs-number">9</span>,<span class="hljs-number">10</span>,<span class="hljs-number">10</span>,<span class="hljs-number">11</span>,<span class="hljs-number">11</span>,<span class="hljs-number">12</span>,<span class="hljs-number">12</span>,<span class="hljs-number">12</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">114</span>,<span class="hljs-number">14</span>,<span class="hljs-number">14</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">15</span>,<span class="hljs-number">15</span>,<span class="hljs-number">16</span>,<span class="hljs-number">16</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">18</span>,<span class="hljs-number">18</span>,<span class="hljs-number">18</span>,<span class="hljs-number">19</span>,<span class="hljs-number">19</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">21</span>,<span class="hljs-number">22</span>,<span class="hljs-number">23</span>,<span class="hljs-number">24</span>,<span class="hljs-number">24</span>,<span class="hljs-number">24</span>,<span class="hljs-number">25</span>,<span class="hljs-number">25</span>)
banyak1 &lt;- length(kecepatan)
print(sum(kecepatan)/banyak1)

# Mean(Rata-rata) Kecepatan =&gt; <span class="hljs-number">17.5</span>
</code></pre>
<h2 id="cara-melakukan-perhitungan-median-nilai-tengah-">cara melakukan perhitungan Median(nilai tengah)</h2>
<pre><code>kecepatan &lt;- c(<span class="hljs-number">4</span>,<span class="hljs-number">4</span>,<span class="hljs-number">7</span>,<span class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span class="hljs-number">8</span>,<span class="hljs-number">9</span>,<span class="hljs-number">10</span>,<span class="hljs-number">10</span>,<span class="hljs-number">11</span>,<span class="hljs-number">11</span>,<span class="hljs-number">12</span>,<span class="hljs-number">12</span>,<span class="hljs-number">12</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">114</span>,<span class="hljs-number">14</span>,<span class="hljs-number">14</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">15</span>,<span class="hljs-number">15</span>,<span class="hljs-number">16</span>,<span class="hljs-number">16</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">18</span>,<span class="hljs-number">18</span>,<span class="hljs-number">18</span>,<span class="hljs-number">19</span>,<span class="hljs-number">19</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">21</span>,<span class="hljs-number">22</span>,<span class="hljs-number">23</span>,<span class="hljs-number">24</span>,<span class="hljs-number">24</span>,<span class="hljs-number">24</span>,<span class="hljs-number">25</span>,<span class="hljs-number">25</span>)
medianKecepatan &lt;- median(kecepatan)
print(medianKecepatan)
# Median =&gt; <span class="hljs-number">16</span>
</code></pre><h2 id="cara-melakukan-perhitungan-sd-standart-deviasi-">cara melakukan perhitungan SD(Standart Deviasi)</h2>
<pre><code>kecepatan &lt;- c(<span class="hljs-number">4</span>,<span class="hljs-number">4</span>,<span class="hljs-number">7</span>,<span class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span class="hljs-number">8</span>,<span class="hljs-number">9</span>,<span class="hljs-number">10</span>,<span class="hljs-number">10</span>,<span class="hljs-number">11</span>,<span class="hljs-number">11</span>,<span class="hljs-number">12</span>,<span class="hljs-number">12</span>,<span class="hljs-number">12</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">114</span>,<span class="hljs-number">14</span>,<span class="hljs-number">14</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">15</span>,<span class="hljs-number">15</span>,<span class="hljs-number">16</span>,<span class="hljs-number">16</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">18</span>,<span class="hljs-number">18</span>,<span class="hljs-number">18</span>,<span class="hljs-number">19</span>,<span class="hljs-number">19</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">21</span>,<span class="hljs-number">22</span>,<span class="hljs-number">23</span>,<span class="hljs-number">24</span>,<span class="hljs-number">24</span>,<span class="hljs-number">24</span>,<span class="hljs-number">25</span>,<span class="hljs-number">25</span>)
sdKecepatan &lt;- sd(kecepatan) 
# SD =&gt; <span class="hljs-number">14.9273752083963</span>
</code></pre><h2 id="cara-membuat-scatter-plot">Cara membuat scatter plot</h2>
<pre><code># contoh Data Kecepatan dan jarak pada tabel
jarak &lt;- c(<span class="hljs-number">2</span>,<span class="hljs-number">10</span>,<span class="hljs-number">4</span>,<span class="hljs-number">20</span>,<span class="hljs-number">17</span>,<span class="hljs-number">13</span>,<span class="hljs-number">18</span>,<span class="hljs-number">28</span>,<span class="hljs-number">33</span>,<span class="hljs-number">18</span>,<span class="hljs-number">26</span>,<span class="hljs-number">12</span>,<span class="hljs-number">24</span>,<span class="hljs-number">22</span>,<span class="hljs-number">28</span>,<span class="hljs-number">24</span>,<span class="hljs-number">32</span>,<span class="hljs-number">34</span>,<span class="hljs-number">43</span>,<span class="hljs-number">24</span>,<span class="hljs-number">30</span>,<span class="hljs-number">58</span>,<span class="hljs-number">80</span>,<span class="hljs-number">20</span>,<span class="hljs-number">24</span>,<span class="hljs-number">55</span>,<span class="hljs-number">35</span>,<span class="hljs-number">40</span>,<span class="hljs-number">30</span>,<span class="hljs-number">44</span>,<span class="hljs-number">50</span>,<span class="hljs-number">46</span>,<span class="hljs-number">53</span>,<span class="hljs-number">70</span>,<span class="hljs-number">80</span>,<span class="hljs-number">36</span>,<span class="hljs-number">46</span>,<span class="hljs-number">68</span>,<span class="hljs-number">34</span>,<span class="hljs-number">48</span>,<span class="hljs-number">50</span>,<span class="hljs-number">56</span>,<span class="hljs-number">60</span>,<span class="hljs-number">64</span>,<span class="hljs-number">56</span>,<span class="hljs-number">72</span>,<span class="hljs-number">90</span>,<span class="hljs-number">92</span>,<span class="hljs-number">110</span>,<span class="hljs-number">85</span>)
banyak2 &lt;- length(jarak)

kecepatan &lt;- c(<span class="hljs-number">4</span>,<span class="hljs-number">4</span>,<span class="hljs-number">7</span>,<span class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span class="hljs-number">8</span>,<span class="hljs-number">9</span>,<span class="hljs-number">10</span>,<span class="hljs-number">10</span>,<span class="hljs-number">11</span>,<span class="hljs-number">11</span>,<span class="hljs-number">12</span>,<span class="hljs-number">12</span>,<span class="hljs-number">12</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">114</span>,<span class="hljs-number">14</span>,<span class="hljs-number">14</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">15</span>,<span class="hljs-number">15</span>,<span class="hljs-number">16</span>,<span class="hljs-number">16</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">18</span>,<span class="hljs-number">18</span>,<span class="hljs-number">18</span>,<span class="hljs-number">19</span>,<span class="hljs-number">19</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">21</span>,<span class="hljs-number">22</span>,<span class="hljs-number">23</span>,<span class="hljs-number">24</span>,<span class="hljs-number">24</span>,<span class="hljs-number">24</span>,<span class="hljs-number">25</span>,<span class="hljs-number">25</span>)
banyak1 &lt;- length(kecepatan)

# Membuat scatter plot
plot(jarak, kecepatan, 
     main = <span class="hljs-string">"Scatter Plot : Kecepatan vs Jarak"</span>,  # Judul
     xlab = <span class="hljs-string">"Kecepatan (km/h)"</span>, # sumbu x
     ylab = <span class="hljs-string">"Jarak (meter)"</span>,  # sumbu y
     pch = <span class="hljs-number">19</span>, # Bentuk titik 
     col = <span class="hljs-string">"blue"</span>) # warna titik
</code></pre><h2 id="contoh-menambahkan-regresi-linear">Contoh menambahkan regresi linear</h2>
<pre><code># contoh Data Kecepatan dan jarak pada tabel
jarak &lt;- c(<span class="hljs-number">2</span>,<span class="hljs-number">10</span>,<span class="hljs-number">4</span>,<span class="hljs-number">20</span>,<span class="hljs-number">17</span>,<span class="hljs-number">13</span>,<span class="hljs-number">18</span>,<span class="hljs-number">28</span>,<span class="hljs-number">33</span>,<span class="hljs-number">18</span>,<span class="hljs-number">26</span>,<span class="hljs-number">12</span>,<span class="hljs-number">24</span>,<span class="hljs-number">22</span>,<span class="hljs-number">28</span>,<span class="hljs-number">24</span>,<span class="hljs-number">32</span>,<span class="hljs-number">34</span>,<span class="hljs-number">43</span>,<span class="hljs-number">24</span>,<span class="hljs-number">30</span>,<span class="hljs-number">58</span>,<span class="hljs-number">80</span>,<span class="hljs-number">20</span>,<span class="hljs-number">24</span>,<span class="hljs-number">55</span>,<span class="hljs-number">35</span>,<span class="hljs-number">40</span>,<span class="hljs-number">30</span>,<span class="hljs-number">44</span>,<span class="hljs-number">50</span>,<span class="hljs-number">46</span>,<span class="hljs-number">53</span>,<span class="hljs-number">70</span>,<span class="hljs-number">80</span>,<span class="hljs-number">36</span>,<span class="hljs-number">46</span>,<span class="hljs-number">68</span>,<span class="hljs-number">34</span>,<span class="hljs-number">48</span>,<span class="hljs-number">50</span>,<span class="hljs-number">56</span>,<span class="hljs-number">60</span>,<span class="hljs-number">64</span>,<span class="hljs-number">56</span>,<span class="hljs-number">72</span>,<span class="hljs-number">90</span>,<span class="hljs-number">92</span>,<span class="hljs-number">110</span>,<span class="hljs-number">85</span>)
banyak2 &lt;- length(jarak)

kecepatan &lt;- c(<span class="hljs-number">4</span>,<span class="hljs-number">4</span>,<span class="hljs-number">7</span>,<span class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span class="hljs-number">8</span>,<span class="hljs-number">9</span>,<span class="hljs-number">10</span>,<span class="hljs-number">10</span>,<span class="hljs-number">11</span>,<span class="hljs-number">11</span>,<span class="hljs-number">12</span>,<span class="hljs-number">12</span>,<span class="hljs-number">12</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">114</span>,<span class="hljs-number">14</span>,<span class="hljs-number">14</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">15</span>,<span class="hljs-number">15</span>,<span class="hljs-number">16</span>,<span class="hljs-number">16</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">18</span>,<span class="hljs-number">18</span>,<span class="hljs-number">18</span>,<span class="hljs-number">19</span>,<span class="hljs-number">19</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">21</span>,<span class="hljs-number">22</span>,<span class="hljs-number">23</span>,<span class="hljs-number">24</span>,<span class="hljs-number">24</span>,<span class="hljs-number">24</span>,<span class="hljs-number">25</span>,<span class="hljs-number">25</span>)
banyak1 &lt;- length(kecepatan)

# Membuat scatter plot
plot(jarak, kecepatan, 
     main = <span class="hljs-string">"Scatter Plot : Kecepatan vs Jarak"</span>,  # Judul
     xlab = <span class="hljs-string">"Kecepatan (km/h)"</span>, # sumbu x
     ylab = <span class="hljs-string">"Jarak (meter)"</span>,  # sumbu y
     pch = <span class="hljs-number">19</span>, # Bentuk titik 
     col = <span class="hljs-string">"blue"</span>) # warna titik


# ========================== Garis tren merah (regresi linear) ===========================
model &lt;- lm(kecepatan ~ jarak)
abline(model, col = <span class="hljs-string">"red"</span>, lwd = <span class="hljs-number">2</span>)
</code></pre><h2 id="membuat-histogram">Membuat histogram</h2>
<pre><code>
# contoh Data Kecepatan dan jarak pada tabel
jarak &lt;- c(<span class="hljs-number">2</span>,<span class="hljs-number">10</span>,<span class="hljs-number">4</span>,<span class="hljs-number">20</span>,<span class="hljs-number">17</span>,<span class="hljs-number">13</span>,<span class="hljs-number">18</span>,<span class="hljs-number">28</span>,<span class="hljs-number">33</span>,<span class="hljs-number">18</span>,<span class="hljs-number">26</span>,<span class="hljs-number">12</span>,<span class="hljs-number">24</span>,<span class="hljs-number">22</span>,<span class="hljs-number">28</span>,<span class="hljs-number">24</span>,<span class="hljs-number">32</span>,<span class="hljs-number">34</span>,<span class="hljs-number">43</span>,<span class="hljs-number">24</span>,<span class="hljs-number">30</span>,<span class="hljs-number">58</span>,<span class="hljs-number">80</span>,<span class="hljs-number">20</span>,<span class="hljs-number">24</span>,<span class="hljs-number">55</span>,<span class="hljs-number">35</span>,<span class="hljs-number">40</span>,<span class="hljs-number">30</span>,<span class="hljs-number">44</span>,<span class="hljs-number">50</span>,<span class="hljs-number">46</span>,<span class="hljs-number">53</span>,<span class="hljs-number">70</span>,<span class="hljs-number">80</span>,<span class="hljs-number">36</span>,<span class="hljs-number">46</span>,<span class="hljs-number">68</span>,<span class="hljs-number">34</span>,<span class="hljs-number">48</span>,<span class="hljs-number">50</span>,<span class="hljs-number">56</span>,<span class="hljs-number">60</span>,<span class="hljs-number">64</span>,<span class="hljs-number">56</span>,<span class="hljs-number">72</span>,<span class="hljs-number">90</span>,<span class="hljs-number">92</span>,<span class="hljs-number">110</span>,<span class="hljs-number">85</span>)
banyak2 &lt;- length(jarak)

kecepatan &lt;- c(<span class="hljs-number">4</span>,<span class="hljs-number">4</span>,<span class="hljs-number">7</span>,<span class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span class="hljs-number">8</span>,<span class="hljs-number">9</span>,<span class="hljs-number">10</span>,<span class="hljs-number">10</span>,<span class="hljs-number">11</span>,<span class="hljs-number">11</span>,<span class="hljs-number">12</span>,<span class="hljs-number">12</span>,<span class="hljs-number">12</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">13</span>,<span class="hljs-number">114</span>,<span class="hljs-number">14</span>,<span class="hljs-number">14</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">15</span>,<span class="hljs-number">15</span>,<span class="hljs-number">16</span>,<span class="hljs-number">16</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">17</span>,<span class="hljs-number">18</span>,<span class="hljs-number">18</span>,<span class="hljs-number">18</span>,<span class="hljs-number">19</span>,<span class="hljs-number">19</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">20</span>,<span class="hljs-number">21</span>,<span class="hljs-number">22</span>,<span class="hljs-number">23</span>,<span class="hljs-number">24</span>,<span class="hljs-number">24</span>,<span class="hljs-number">24</span>,<span class="hljs-number">25</span>,<span class="hljs-number">25</span>)
banyak1 &lt;- length(kecepatan)


# Membuat histogram
hist(kecepatan, 
     main = <span class="hljs-string">"Histogram Kecepatan Mobil"</span>,  # Judul
     xlab = <span class="hljs-string">"Kecepatan (km/h)"</span>,  # sumbu xx
     ylab = <span class="hljs-string">"Frekuensi"</span>,  # sumbu y
     col = <span class="hljs-string">"blue"</span>,  # warna sumbu
     border = <span class="hljs-string">"black"</span>, # batas
     breaks = <span class="hljs-number">10</span>) # jumlah kelas
</code></pre><h2 id="melakukan-perhitungan-coefficient-of-variation-cv-koeffisiensi-keragaman">Melakukan perhitungan Coefficient of variation (CV) | Koeffisiensi keragaman</h2>
<pre><code><span class="hljs-meta"># matematika Fatoni 90</span>
<span class="hljs-meta"># rata-rata matematika 65</span>
<span class="hljs-meta"># deviasi 10</span>

<span class="hljs-meta"># Bahasa inggris Fatoni 45</span>
<span class="hljs-meta"># rata-rata bahasa inggris 70</span>
<span class="hljs-meta"># deviasi 8</span>

<span class="hljs-meta"># Data untuk ujian Matematika</span>
meanMatematika &lt;- <span class="hljs-number">65</span>
sdMatematika &lt;- <span class="hljs-number">10</span>

<span class="hljs-meta"># Data untuk ujian Bahasa Inggris</span>
meanInggris &lt;- <span class="hljs-number">70</span>
sdInggris &lt;- <span class="hljs-number">8</span>

<span class="hljs-meta"># CV (Coefficient of variaation) </span>
<span class="hljs-meta"># Menghitung koefisien keragaman (CV)</span>
<span class="hljs-meta"># Rumus dasar CV</span>
<span class="hljs-meta"># cv &lt;- sd(data) / mean(data) * 100</span>
<span class="hljs-meta"># Referensi: https://www.statology.org/coefficient-of-variation-in-r/ </span>


<span class="hljs-meta"># Menghitung koefisien keragaman (CV) untuk Matematika</span>
cvMatematika &lt;- (sdMatematika / meanMatematika) * <span class="hljs-number">100</span>



<span class="hljs-meta"># Menghitung koefisien keragaman (CV) untuk Bahasa Inggris</span>
cvInggris &lt;- (sdInggris / meanInggris) * <span class="hljs-number">100</span>

<span class="hljs-meta"># Menampilkan hasil</span>
print(paste(<span class="hljs-string">"Koefisien keragaman untuk Matematika:"</span>, cvMatematika, <span class="hljs-string">"%"</span>))
print(paste(<span class="hljs-string">"Koefisien keragaman untuk Bahasa Inggris:"</span>, cvInggris, <span class="hljs-string">"%"</span>))


<span class="hljs-meta"># Output:</span>

<span class="hljs-meta"># [1] "Koefisien keragaman untuk Matematika: 15.3846153846154 %"</span>
<span class="hljs-meta"># [1] "Koefisien keragaman untuk Bahasa Inggris: 11.4285714285714 %"</span>
</code></pre><h2 id="latihan-r">Latihan R</h2>
<p>
<RouterLink to="/ltR" class="LFT-Item"> 
    Latihan R
    </RouterLink>
</p>
<h1 id="referensi-">Referensi:</h1>
<ul>
<li><a href="https://www.geeksforgeeks.org/calculate-square-root-of-a-number-in-r-language-sqrt-function/">https://www.geeksforgeeks.org/calculate-square-root-of-a-number-in-r-language-sqrt-function/</a></li>
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