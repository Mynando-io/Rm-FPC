<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<p><img src="https://user-images.githubusercontent.com/60807663/153804659-c633bf08-733e-4463-afc0-6f87fe477d7f.png" alt="finale"></p>
<h2 id="table-of-content">Table of content</h2>
<ol>
<li><a href="#ruby">Ruby</a></li>
</ol>
<h1 id="ruby">Ruby</h1>
<p>Ruby adalah salah satu bahasa computer yang bisa digunakan secara cross-platfrom 
Oleh karena itu teman-teman tidak perlu khawatir dengan code yang dibuat. 
karena akan bisa dijalankan disemua platfrom. </p>
<h2 id="untuk-apa-sih-memakai-ruby-language-">Untuk apa sih memakai Ruby Language?</h2>
<p>Ruby adalah salah satu bahasa programm yang bisa digunakan untuk 
berbagai macam kebutuhan, Dengan kata lain ini bisa digunakan 
sebagai: </p>
<ul>
<li>Web development</li>
</ul>
<p>Ruby memiliki Web development framework bernama Ruby on Rails. 
Rilis sejak tahun 2005.</p>
<p>Ruby on Rails membuat web development cepat dan mudah. 
Seorang developer bisa langsung membuat web application tanpa 
harus menyesuaikan setting ( sebagai contoh setting LocalHost, dan lain-lain)
karena sudah dipersiapkan dari sana. Dan juga disediakan pre-built code 
libraries yang dapat membantu mempercepat pengembangan code. </p>
<ul>
<li>DevOps </li>
</ul>
<p>Ruby juga digunakan pada DevOps ( Singkatan dari Software development(Dev) dan IT operations(Ops).)
Bertujuan untuk memperpendek system development life cycle dan menyediakan 
software yang dapat diandalkan setiap saat. </p>
<ul>
<li>Automation</li>
</ul>
<p>Ruby adalah salah satu bahasa program yang dapat diandalkan. 
Developer bisa membuat script untuk melakukan sesuatu secara otomatis. 
Karena Ruby mudah untuk ditulis, script yang simple dan bisa dikerjakan dengan cepat.</p>
<ul>
<li>Web Scraping and crawling</li>
</ul>
<p>Ruby juga bisa digunakan untuk melakukan crawling pada halaman website. 
Mengambil data dari element tertentu dan mendownload halaman website secara cepat. 
Sebagai contoh, kau bisa menggunakan Nokogiri untuk extract 
structured data dari HTML pada halaman website.</p>
<ul>
<li>Data processing </li>
</ul>
<p>Ruby language sangat cocok untuk melakukan prosessing data, cleaing, dan 
fileterin. Ada beberapa fitur yang sudah tersedia dalam ruby, seperti map, 
reduce, and select. Fungsi ini sangat membantu untuk melakukan pemrosesan data</p>
<h2 id="ruby-cheat-sheet">Ruby Cheat sheet</h2>
<p>Anda bisa membayangkan ruby sebagai laci yang digunakan untuk menyimpan sesuatu.</p>
<p><code>myvariabel = 1</code></p>
<p>Terdapat banyak sekali tipe data didalam Ruby. </p>
<ul>
<li>Boolean </li>
<li>Integer</li>
<li>float</li>
<li>string</li>
</ul>
<h2 id="ruby-install-rails">Ruby install Rails</h2>
<pre><code>sudo apt <span class="hljs-keyword">install</span> ruby-<span class="hljs-keyword">full</span>
sudo apt-<span class="hljs-keyword">get</span> <span class="hljs-keyword">install</span> libsqlite3-dev
sudo gem <span class="hljs-keyword">install</span> sqlite3-ruby
gem <span class="hljs-keyword">list</span> # <span class="hljs-keyword">Check</span> sqlite3 <span class="hljs-keyword">and</span> sqlite3-ruby <span class="hljs-keyword">if</span> <span class="hljs-keyword">is</span> installed

gem <span class="hljs-keyword">install</span> rails
sudo rails <span class="hljs-keyword">new</span> myapp 
cd myapp
<span class="hljs-keyword">bin</span>/rails <span class="hljs-keyword">server</span> # <span class="hljs-keyword">http</span>://localhost:<span class="hljs-number">3000</span>
</code></pre><p>Ruby Basic Syntax</p>
<h2 id="print-something">Print something</h2>
<p><code>puts &#39;Hello World!&#39;</code></p>
<h1 id="variabel">Variabel</h1>
<p>Didalam Ruby untuk melakukan deklarasi variabel tidak perlu membuat type secara spesifik ( variabel constant yang tidak bisa dirubah atau variabel normal yang bisa dirubah sewaktu waktu ). Variabel ruby bisa menyimpan semua tipe data (Boolean, float, integer, string dan lain-lain). </p>
<p>Sebagai contoh:</p>
<ul>
<li><code>nama_variabel = &#39;Hello world&#39;</code>
atau </li>
<li><code>namaVariabel =&#39;Hello world&#39;</code></li>
</ul>
<p>Hampir semua fitur didalam ruby adalah object ~Atau memang object semua~ 
object variabel bisa diubah kapan saja.</p>
<p>sebagai contoh:</p>
<pre><code>umur_ku = <span class="hljs-number">89</span> 
<span class="hljs-meta"># dua tahun kemudian</span>
umur_ku = <span class="hljs-number">91</span>
<span class="hljs-meta"># Hasil yang akan dikeluarkan adalah 91</span>
<span class="hljs-meta"># atau bisa menggunakan cara seperti ini</span>
umurt_ku += <span class="hljs-number">2</span>
<span class="hljs-meta"># ini disebut sebagai Operators, hasil yang akan dikeluarkan adalah 89 + 2 </span>
<span class="hljs-meta"># cara ini juga bisa digunakan pada string object</span>
</code></pre><p>Didalam Variabel kita tidak perlu mengatakan tipe data apa yang sedang dipakai, cukup tulis data tersebut dan biarkan system yang akan mencari tau.</p>
<p>Contoh tipe data: </p>
<ul>
<li><code>&#39;ini adalah string&#39;</code> = tipe data string</li>
<li><code>383123</code> = ini adalah tipe data integer </li>
<li><code>23.42</code> = ini adalah tipe data float </li>
<li><code>true</code> = ini adalah tipe data boolean</li>
</ul>
<pre><code><span class="hljs-built_in">title</span> = 'teks'
<span class="hljs-built_in">title</span>.upcase <span class="hljs-meta"># hasikan TEKS secara sementara </span>
<span class="hljs-built_in">title</span>.upcase! <span class="hljs-meta"># hasilkan TEKS secara permanent, tersimpan didalam memory</span>
<span class="hljs-built_in">title</span>.downcase!
</code></pre><h2 id="cara-melakukan-manipulasi-string">Cara melakukan manipulasi string</h2>
<p>Metode ini dapat mempermudah pengabungan antara dua atau lebih variabel menjadi satu. ( String interpolation )</p>
<pre><code><span class="hljs-attr">nama_makanan</span> = <span class="hljs-string">'nasi goreng'</span>
<span class="hljs-attr">jumlah_makanan</span> = <span class="hljs-string">'3'</span>
<span class="hljs-attr">hasil</span> = <span class="hljs-string">"#{nama_makanan} beli #{jumlah_makanan}"</span>
<span class="hljs-comment"># output: 'nasi goreng beli 3'</span>
<span class="hljs-comment"># Perlu diingat gunakan " bukan '</span>
</code></pre><h2 id="menulis-variabel-constants">Menulis variabel Constants</h2>
<p>Metode ini hanya menyerupai constant tidak sama persis. Didalam constant variabel nilai tidak dapat diubah setelah sudah ditulis. </p>
<p>didalam RUBY anda bisa menulis sebuah variabel yang akan memberikan notifikasi jika ada perubahan pada variabel yang dituju. 
Contoh penulisan :</p>
<pre><code><span class="hljs-attr">TEST_CONST</span> = <span class="hljs-number">12</span>
<span class="hljs-comment"># jika ada perubahan di variabel diatas maka akan ada notifikasi pada terminal</span>
<span class="hljs-attr">TEST_CONST</span> = <span class="hljs-number">14</span> 
<span class="hljs-comment"># Akan ada notifikasi jika kita mengubah nilai didalam variabel tersebut</span>
</code></pre><p>Penulisan variabel harus penuh huruf besar</p>
<h2 id="control-flow">Control-Flow</h2>
<p>Pada penulisan sebuah instruksi terkadang diperlukan untuk menambahkan fungsi atau tindakan untuk mengontrol gimana sebuah instruksi tersebut dilakukan. </p>
<p>sebagai contoh, mari kita buat sebuah perumpamaan: </p>
<p>Jika kita ingin pergi ke sekolah, disana terdapat 2 cara untuk menuju ke sekolah </p>
<ol>
<li>Kita bisa menggunakan jalur paling dekat ke sekolah akan tetapi jalan raya tersebut banyak lubang</li>
<li>Kita bisa menggunakan jalur paling jauh ke sekolah akan tetapi jalan raya tersebut lebih lancar</li>
</ol>
<p>Tentu ini adalah sebuah opsi, kedua jalan tersebut dapat menghasilkan sebuah hasil yang sama akan tetapi proses dilakukannya itu berbeda.</p>
<p><strong> Cara melakukan control flow </strong></p>
<p>cara melakukannnya adalah dengan menggunakan If statement,
sebagai contoh:</p>
<pre><code>umur_udin = <span class="hljs-number">17</span>

<span class="hljs-keyword">if</span> umur_udin &lt; <span class="hljs-number">19</span> 
    <span class="hljs-built_in">puts</span> <span class="hljs-string">" udin adalah anak sma"</span>

elseif umur_udin &gt; <span class="hljs-number">30</span> 
    <span class="hljs-built_in">puts</span> <span class="hljs-string">" udin adalah seorang salah satu karyawan dari F.A.N.G"</span>

<span class="hljs-keyword">else</span> 
    <span class="hljs-built_in">puts</span> <span class="hljs-string">" Udin adalah seorang mahasiswa"</span>
end
</code></pre><p>Hasil yang akan dikeluarkan adalah &quot;udin adalah anak sma&quot;,
karena disitu umur udin dibawah 19 </p>
<p>didalam If statement akan dilakukan checking Data tersebut benar atau salah, Seperti contoh diatas, karena umur udin kurang dari 19 maka hasil dari <strong>if</strong> itu benar dan akan dilakukan instruksi selanjutnnya.</p>
<p>Bisa dikatakan jika sebuah persyaratan sudah terpenuhi maka instruksi selanjutnya akan dilakukan. </p>
<p>dengan menggunakan If statement kita bisa membuat program memiliki sebuah opsi persyaratan khusus sebelum menjalankan instruksi. </p>
<p>Beberapa symbol untuk melakukan perbandingan nilai </p>
<pre><code>&gt; # Lebih besar dari 
&lt; # Kurang dari 
<span class="hljs-section">== # sama besar dengan </span>
&gt;= # lebih besar atau sama besar dengan 
&lt;= # lebih kecil atau sama besar dengan
</code></pre><p>Didalam If statement anda bisa menambahkan banyak sekali opsi, <strong>elsif</strong> untuk memberikan program opsi instruksi apa yang akan dilakukan selanjutnnya.</p>
<p>Cara menulisa if statement dalam satu baris</p>
<pre><code><span class="hljs-type">IPK</span> = <span class="hljs-number">4</span>
<span class="hljs-keyword">if</span> <span class="hljs-type">IPK</span> == <span class="hljs-number">4</span> <span class="hljs-keyword">then</span> puts <span class="hljs-symbol">'Nilai</span> yang memuaskan' <span class="hljs-keyword">else</span> puts <span class="hljs-symbol">'ayo</span> belajar lebih giat' <span class="hljs-keyword">end</span>
</code></pre><p>Atau menggunakan cara ini</p>
<pre><code><span class="hljs-attribute">IPK</span> = <span class="hljs-number">4</span> 
puts IPK == <span class="hljs-number">4</span> ? <span class="hljs-string">'Nilai bagus'</span> : <span class="hljs-string">'coba lagi'</span>
<span class="hljs-comment"># ini adalah Ternary Expression</span>
</code></pre><p>untuk format penulisannya seperti ini 
<code>Kondisi_persyaratan ? true : false</code></p>
<ol>
<li>kondisi persyaratan adalah nilai yang akan di seleksi ( di contoh pertama tadi adalah <code>IPK == 4</code> )</li>
<li>symbol <code>?</code> adalah syntax untuk mengenali bahwa ini adalah Ternary Expression</li>
<li>kolom <code>true</code> akan dijalankan jika persyaratan telah terpenuhi</li>
<li>kolom <code>:</code> adalh bagian dari syntax jangan dirubah</li>
<li>kolom <code>false</code> akan dijalankan jika persyaratan tidak terpenuhi</li>
</ol>
<p>Contohnya seperti ini </p>
<pre><code><span class="hljs-attr">nilai</span> = <span class="hljs-number">2</span> + <span class="hljs-number">3</span>
<span class="hljs-attr">hasil</span> = a == <span class="hljs-number">5</span> ? <span class="hljs-string">'jawaban benar'</span> : <span class="hljs-string">'jawaban salah'</span>
</code></pre><h2 id="unless">unless</h2>
<p>adalah cara lain untuk melakukan If statement. Didalam unless yang dipakai 
adalah nilai yang berisi &#39;false&#39; atau bisa dikatakan nilai yang tidak memenuhi persyaratan. </p>
<p>jika didalam if statement maka yang akan dipakai adalah nilai True (nilai yang sudah memenuhi persyaratan), sedangakan &#39;unless&#39; adalah nilai false ( nilai yang tidak memenuhi persyaratan )</p>
<pre><code>a = <span class="hljs-number">10</span>
<span class="hljs-keyword">unless</span> a &gt; <span class="hljs-number">30</span>
  puts <span class="hljs-string">"<span class="hljs-subst">#{a}</span> hasil dari false, karena 10 tidak lebih dari 30"</span>
<span class="hljs-keyword">end</span>
</code></pre><h2 id="case">Case</h2>
<pre><code>nilai = <span class="hljs-number">10</span>
case nilai # ini adalah <span class="hljs-keyword">parameter</span>
when <span class="hljs-comment">1..9</span>
  puts <span class="hljs-comment">'nilai berada di jarak antara 1 - 9'</span>
when <span class="hljs-comment">10</span> 
    puts <span class="hljs-comment">'nilai sama dengan 10'</span>
else 
    puts <span class="hljs-comment">'nilai tidak di ketahui'</span>
end
</code></pre><p><strong> Breakdown code</strong></p>
<ol>
<li><code>nilai = 10</code> ini adalah variabel </li>
<li><code>case nilai</code> &quot;case&quot; adalah syntax untuk menunjukan bahwa ini adalah sitch case, sedangkan nilai adalah variabel </li>
<li><code>when 1..9</code> disini adalah sebuah persyaratan apakah variabel &#39;nilai&#39; berada diantara 1-9, jika benar maka instruksi selanjutnya akan dijalankan </li>
<li><code>when 10</code> disini adalah sebuah persyaratan apakah variabel &#39;nilai&#39; sama dengan 10, jika benar maka instruksi akan dilanjutkan.</li>
<li><code>else</code> jika tidak ada opsi yang cocok maka akan dijalankan perintah dibawah ini </li>
<li><code>end</code> ini adalah syntax yang wajib ditulis untuk mengakhiri sitch case </li>
</ol>
<p>Sebagai perumpamaan Ruby melakukan analisa perbandingan dengan mengunakan cara:</p>
<ol>
<li>apakah nilai tersebut berada di dalam list? ( contoh: 1, apakah dia berada di 1-9? ) [1..9]</li>
<li>apakah nilai tersebut sama persis (contoh: &#39;budi&#39;, apakah nilai sama dengan &#39;budi&#39;?)
[&quot;budi&quot;]</li>
<li>apakah nilai tersebut berbentuk integer atau string (contoh: &#39;budi&#39;, apakah ini string?) 
[String / Fixnum]</li>
</ol>
<p>atau bisa menjalankan ruby case tapa mengisi paramter</p>
<pre><code>nilai = <span class="hljs-number">10</span>
<span class="hljs-keyword">case</span> 
<span class="hljs-keyword">when</span> nilai &lt; <span class="hljs-number">10</span> 
    puts <span class="hljs-symbol">'nilai</span> kurang dari <span class="hljs-number">10</span>'
<span class="hljs-keyword">when</span> nilai == <span class="hljs-number">10</span> 
    puts <span class="hljs-symbol">'nilai</span> sama dengan <span class="hljs-number">10</span>'
<span class="hljs-keyword">end</span>
</code></pre><p>Dengan menggunakan instruksi diatas maka akan dilakukan flow control yang cukup mirip dengan if statement, jika persyarataan terpenuhi maka akan dijalankan. </p>
<p>pada switch case diatas, tidak perlu mengisi nilai dari <code>case</code>. dengan begitu cara pemakaainnya akan sama dengan if statement</p>
<p>src : </p>
<ul>
<li><a href="https://stackoverflow.com/questions/948135/how-to-write-a-switch-statement-in-ruby?rq=1">https://stackoverflow.com/questions/948135/how-to-write-a-switch-statement-in-ruby?rq=1</a></li>
<li><a href="https://www.geeksforgeeks.org/ruby-case-statement/">https://www.geeksforgeeks.org/ruby-case-statement/</a></li>
</ul>
<p>src: <a href="https://www.rubyguides.com/2019/10/ruby-ternary-operator/#:~:text=What%20is%20a%20ternary%20operator,just%20one%20line%20of%20code">https://www.rubyguides.com/2019/10/ruby-ternary-operator/#:~:text=What%20is%20a%20ternary%20operator,just%20one%20line%20of%20code</a>.</p>
<h2 id="loops">Loops</h2>
<pre><code><span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-number">2</span>..<span class="hljs-number">100</span>
    puts <span class="hljs-string">"ini adalah nomor <span class="hljs-subst">#{i}</span>"</span>
<span class="hljs-keyword">end</span>
</code></pre><p><strong> Breakdown code </strong></p>
<ol>
<li><code>for i in 2..100</code> untuk setiap angka diantara 2-100 </li>
<li>print &#39;ini adalah nomor #{variabel i}&#39;</li>
<li>akhiri loop</li>
</ol>
<p>disini perintah akan diulang sebanyak 99 kali</p>
<h2 id="while">While</h2>
<pre><code>var_A = <span class="hljs-number">0</span>
<span class="hljs-keyword">while</span> var_A &lt; <span class="hljs-number">100</span>
    puts <span class="hljs-string">"ini adalah loop ke <span class="hljs-subst">#{var_A}</span>"</span>
    var_A += <span class="hljs-number">1</span> 

<span class="hljs-keyword">end</span>
</code></pre><p><strong> Breakdown </strong></p>
<ol>
<li><code>var_A = 0</code> ini adalah variabel </li>
<li><code>while var_A &lt; 100</code> selama nilai variabel berada dibawah 100 lakukan </li>
<li><code>puts &quot;ini adalah loop ke #{var_A}&quot;</code> print string dengan nilai variabel 4. <code>var_A += 1</code> tambah 1 kedalam variabel </li>
<li><code>end</code> ini adalah syntax, sebagai penutup while loop </li>
</ol>
<p>didalam code diatas loop akan terus dilakukan hingga 100 kali. 
setiap kali loop dilakukan program akan melakukan dua instruksi yang sudah disiapkan  </p>
<h2 id="until">Until</h2>
<pre><code>obj = <span class="hljs-number">100</span>

<span class="hljs-keyword">until</span> obj &lt; <span class="hljs-number">1</span> 
    puts <span class="hljs-string">"ini adalah nomor ke <span class="hljs-subst">#{obj}</span>"</span>
    obj -= <span class="hljs-number">1</span> 
<span class="hljs-keyword">end</span>
</code></pre><p>metode ini kurang lebih sama seperti unless statement, jika persyaratan tidak terpenuhi maka jalankan instruksi tersebut.</p>
<p><strong>Breakdown code</strong></p>
<ol>
<li><code>obj = 100</code> adalah variabel </li>
<li><code>until obj &lt; 1</code> bisa kita ibaratkan sebagai &quot;unless&quot; jika  persyaratan tidak terpenuhi maka jalankan instruksi selanjutnya</li>
<li><code>puts</code> digunakan untuk menampilkan nilai kedalam terminal / konsole </li>
<li><code>end</code> adalah syntax untuk mengakhiri loop</li>
</ol>
<h2 id="loop">Loop</h2>
<pre><code>obj = <span class="hljs-number">0</span>

<span class="hljs-built_in">loop</span> <span class="hljs-built_in">do</span> 
    obj += <span class="hljs-number">1</span> 
    puts <span class="hljs-string">"obj nilai ke #{obj}"</span>

    <span class="hljs-built_in">if</span> obj == <span class="hljs-number">100</span> 
        <span class="hljs-built_in">break</span> 
    <span class="hljs-built_in">end</span> 
<span class="hljs-built_in">end</span> 

puts <span class="hljs-string">"loop berakhir"</span>
</code></pre><p><strong>code breakdown</strong></p>
<ol>
<li><code>obj</code> adalah variabel </li>
<li><code>loop do</code> selama loop masih berjalan maka lakukan instruksi selanjutnya 3. <code>obj += 1</code> tambah 1 setiap kali loop </li>
<li><code>if obj == 100</code> jika nilai obj sama dengan 100 </li>
<li><code>break</code> syntax ini hanya bisa digunakan didalam loop statement, untuk mengakhiri loop yang berjalan</li>
</ol>
<h2 id="next-pada-loop">next pada loop</h2>
<pre><code>abc = <span class="hljs-number">10</span>

<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-number">1</span>..<span class="hljs-number">10</span>
  puts <span class="hljs-string">"ini adalah nomor ke <span class="hljs-subst">#{i}</span>"</span>
  <span class="hljs-keyword">if</span> i == <span class="hljs-number">5</span>
    puts <span class="hljs-string">" ========= ini adalah angka 5"</span>
    puts <span class="hljs-string">" instruksi selanjutnnya akan terlewati"</span>
    <span class="hljs-comment"># next digunakan untuk membuat loop kembali ke instruksi pertama loop</span>
    <span class="hljs-keyword">next</span>
  <span class="hljs-keyword">end</span>

  puts <span class="hljs-string">"ini adalah bagian yang akan terlewati <span class="hljs-subst">#{i}</span>"</span>
<span class="hljs-keyword">end</span>
</code></pre><h2 id="arrays">arrays</h2>
<pre><code>nama_kelas = ['kelas <span class="hljs-number">1</span>', 'kelas <span class="hljs-number">2</span>', 'kelas <span class="hljs-number">3</span>']

puts nama_kelas[<span class="hljs-number">0</span>] # kelas <span class="hljs-number">1</span>
puts nama_kelas[<span class="hljs-number">1</span>] # kelas <span class="hljs-number">2</span>
puts nama_kelas[<span class="hljs-number">2</span>] # kelas <span class="hljs-number">3</span> 
puts nama_kelas[<span class="hljs-number">-1</span>] # kelas <span class="hljs-number">3</span> 
puts nama_kelas[<span class="hljs-number">-3</span>] # kelas <span class="hljs-number">1</span> 
puts nama_kelas.length # <span class="hljs-number">3</span>
</code></pre><p>opsi untuk membuat array </p>
<pre><code>makanan = <span class="hljs-type">Array</span>.new(<span class="hljs-number">4</span>, <span class="hljs-symbol">'nasi</span> goreng') # akan ada <span class="hljs-number">4</span> nasi goreng di <span class="hljs-built_in">list</span> [<span class="hljs-string">"nasi goreng"</span>, <span class="hljs-string">"nasi goreng"</span>, <span class="hljs-string">"nasi goreng"</span>, <span class="hljs-string">"nasi goreng"</span>]

minuman = [<span class="hljs-symbol">'jeruk</span> panas', <span class="hljs-symbol">'Es</span> chocklat']
minuman.push(<span class="hljs-symbol">'Es</span> coffe') # ini akan menambahkan item kedalam <span class="hljs-built_in">list</span> pada bagian akhir 
minuman &lt;&lt; <span class="hljs-string">"es gratis"</span> # ini akan menambahkan item kedalam <span class="hljs-built_in">list</span> pada bagian akhir
</code></pre><h2 id="functions">Functions</h2>
<p>function adalah sebuah block code yang bisa dipanggil kapan saja.
istilahnnya adalah DRY ( Don&#39;t Repeat yourself )</p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">fungsi</span><span class="hljs-params">(argument)</span></span>
    puts <span class="hljs-string">"hallo, <span class="hljs-subst">#{argument}</span>"</span>
<span class="hljs-keyword">end</span>

fungsi(<span class="hljs-string">'budi'</span>)
</code></pre><h2 id="latihan-ruby">Latihan Ruby</h2>
<hr>
<p>
    <RouterLink to="/ltRuby" class="LFT-Item"> 
    Latihan Ruby
    </RouterLink>
</p>
<h2 id="task">Task</h2>
<h3 id="devops-tool-chain">Devops tool chain</h3>
<ul>
<li><a href="https://en.wikipedia.org/wiki/DevOps_toolchain">https://en.wikipedia.org/wiki/DevOps_toolchain</a> </li>
<li><a href="https://en.wikipedia.org/wiki/DevOps">https://en.wikipedia.org/wiki/DevOps</a> </li>
</ul>
<hr>
<h3 id="source">Source</h3>
<ul>
<li><a href="https://stackoverflow.com/questions/948135/how-to-write-a-switch-statement-in-ruby?rq=1">https://stackoverflow.com/questions/948135/how-to-write-a-switch-statement-in-ruby?rq=1</a></li>
<li><a href="https://www.rubyguides.com/2015/10/ruby-case/">https://www.rubyguides.com/2015/10/ruby-case/</a></li>
<li><a href="https://github.com/training-mode/ruby">https://github.com/training-mode/ruby</a></li>
<li><a href="https://github.com/rails/rails">https://github.com/rails/rails</a></li>
<li><a href="https://stackoverflow.com/questions/17350837/ruby-on-rails-add-gem-sqlite3-to-your-gemfile">https://stackoverflow.com/questions/17350837/ruby-on-rails-add-gem-sqlite3-to-your-gemfile</a></li>
<li><a href="https://www.codecademy.com/resources/blog/should-i-learn-ruby/#:~:text=Ruby%20is%20a%20popular%20language,framework%20called%20Ruby%20on%20Rails.&amp;text=Ruby%20on%20Rails%20makes%20web,of%20time%20setting%20things%20up">https://www.codecademy.com/resources/blog/should-i-learn-ruby/#:~:text=Ruby%20is%20a%20popular%20language,framework%20called%20Ruby%20on%20Rails.&amp;text=Ruby%20on%20Rails%20makes%20web,of%20time%20setting%20things%20up</a>. </li>
<li><a href="https://en.wikipedia.org/wiki/DevOps">https://en.wikipedia.org/wiki/DevOps</a> </li>
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