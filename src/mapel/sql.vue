<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="pengenalan-database">Pengenalan Database</h1>
<p>dengan adannya miliaran pengguna internet saat ini,
sebuah sistem atau perangkat penggelo yang bisa mengatur
, mendata, mengelompokan data pengguna itu
sangat dibutuhkan.</p>
<p>Peningkatan pembuatan dan penggunan data meningkat sangat
tajam. Untuk membuat suatu decision/pilihan, banyak
organisasi membutuhkan orang yang bisa mengelola data
( business analsysts, data enginer, dan lain-lain )</p>
<p>SQL adalah bahasa program dan suatu aplikasi
penggelola data yang telah diandalkan oleh para
developer dalam waktu yang lama, meskipun SQL
adalah teknologi lama akan tetapi para developer
secara terus menerus mengembangkannya.</p>
<h2 id="table-of-content">Table of content</h2>
<ol>
<li><a href="#penejelasan-database">Penjelasan database</a></li>
<li><a href="#dataset">Dataset</a></li>
<li><a href="#databaes-management-system-dbms">Database Management System</a></li>
<li><a href="crud">CRUD</a></li>
<li><a href="#two-type-of-database">Two type of database</a></li>
<li><a href="#relational-database">Relational Database</a></li>
<li><a href="#non-relational-databases-nosql">Non-Relational Databases</a></li>
<li><a href="#apa-itu-sql?">Apa itu SQL?</a></li>
<li><a href="#sql-process-flow">SQL process flow</a></li>
<li><a href="#contoh-perintah-pada-sql">contoh perintah pada sql</a></li>
<li><a href="#database-queries">Database queris</a></li>
<li><a href="#type-primary-key">Type primary key</a></li>
<li><a href="#natural-key-number">Natural Key number</a></li>
<li><a href="#surrogate-key">Surrogate key</a></li>
<li><a href="#candidate-key">candidate key</a></li>
<li><a href="#alternate-key">alternate key</a></li>
<li><a href="#foregein-key">Foregein key</a></li>
<li><a href="#composite-key">composite key</a><ol>
<li><a href="#wrap-up">Wrap up</a></li>
</ol>
</li>
<li><a href="#ddl-data-definition-language">Data definition language</a></li>
<li><a href="#dml-data-manipulation-language">DML data manipulation language</a></li>
<li><a href="#dcl-data-control-language">DCL data control language</a></li>
<li><a href="#field-or-column-kolom">Field or column</a></li>
<li><a href="#record-or-row-baris">Record or Row</a></li>
<li><a href="#sql-constraint">SQL constraint</a></li>
<li><a href="#generate-backup-database">Backup database</a></li>
<li><a href="#restore-database">Restore database</a></li>
<li><a href="#operator-perbandingan">Operator perbandingan</a></li>
<li><a href="#like">LIKE mengambil data yang mirip</a></li>
<li><a href="#kolom-null">Baris NULL</a></li>
<li><a href="#order-by">ORDER BY</a></li>
<li><a href="#limit">LIMIT</a></li>
<li><a href="#wrap-up-rangkuman">Wrap up rangkuman 2</a></li>
<li><a href="#Latihan-SQL">Latihan</a><h2 id="penjelasan-database">Penjelasan Database</h2>
</li>
</ol>
<p>secara umum database, adalah koleksi dari informasi yang terkait.
sebagai contoh( buku nomor telphon, list belanja/shopping list, Todo list, 
Absensi kelas), Database bisa disimpan dimana saja sebagai contoh: </p>
<ul>
<li>Di atas kertas</li>
<li>didalam kepala</li>
<li>didalam komputer</li>
<li>PowerPoint ini </li>
<li>bagian komen</li>
</ul>
<p>Ada banyak sekali cara untuk mengatur database dan banyak sekali tipe database
yang didesain untuk tujuan tertentu. Contohnnya:</p>
<p>Jika anda menggunakan Excel, anda harus sudah terbiasa dengan table, mirip seperti spreadsheet.
table memiliki row dan columns. Database tables, harus diatur dengan column, dan setiap column
harus memiliki nama unik(Primary key).</p>
<p>Kesimpulan: database adalah sebuah koleksi dari informasi terkait dan bisa 
disimpan dimana saja. </p>
<p><strong>Beberapa istilah pada table:</strong></p>
<ul>
<li>Field - adalah nama kolom pada table, yang berbentuk horizontal </li>
<li>Record - adalah kelompok data pada satu baris, yang memiliki hubungan.</li>
</ul>
<p>Contoh table, Field, dan records :
nama murid | jurusan 
--- | --- |
Budi | IPA 
ucup | IPA 
ranti | IPS 
rangga | Bahasa </p>
<p><strong>Field</strong> adalah &quot;nama murid&quot;, dan &quot;jurusan&quot;</p>
<p><strong>Record</strong> adalah &quot;Budi&quot;, dan &quot;IPA&quot;. Satu kelompook data yang berhubungan.</p>
<h2 id="instalasi-mysql-in-windows-subsystem-for-linux-wsl-">Instalasi Mysql in windows subsystem for linux (WSL)</h2>
<p>Source: <a href="https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database">https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database</a> </p>
<ol>
<li>Buka terminal WSL ( pada instruksi ini memakai ubuntu )</li>
<li>Usahakan membiasakan <code>sudo apt update</code></li>
<li>Setelah berhasil updatem install MySQL dengan <code>sudo apt install mysql-server</code></li>
<li>Untuk memastikan versi dari sql, <code>mysql --version</code></li>
</ol>
<p>Jika ingin membuat sql server untuk produksi lakukan secure installation. <code>sudo mysql_secure_installation</code></p>
<p>Biasannya disaat kita menghidupkan komputer mysql akan berada di status belum berjalan, untuk membuat my sql server bisa berjalan gunakan <code>sudo /etc/init.d/mysql start</code>.</p>
<p>Cara untuk membuka mysql melalui terminal <code>sudo mysql</code>.</p>
<p><strong>Penting jika anda bertemu hal yang sperti ini saat secure installation</strong>
<code>... Failed! Error: SET PASSWORD has no significance for user &#39;root&#39;@&#39;localhost&#39; as the authentication method used doesn&#39;t store authentication data in the MySQL server. Please consider using ALTER USER instead if you want to change authentication parameters.</code></p>
<p>Ini adalah instruksi penanganan dari <a href="https://askubuntu.com/questions/1406395/mysql-root-password-setup-error">https://askubuntu.com/questions/1406395/mysql-root-password-setup-error</a> :</p>
<ol>
<li>Keluar dari pesan error tersebut. </li>
<li><code>sudo mysql</code> masuk ke mysql </li>
<li><code>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password by &#39;my-secret-password&#39;;</code> lakukan alter user, untuk merubah password</li>
<li><code>exit;</code> keluar mysql </li>
<li><code>sudo mysql_secure_installation</code> masuk kembali ke secure installation</li>
<li><code>mysql -u &lt;your username&gt; -p</code></li>
</ol>
<h2 id="cara-untuk-mengetahui-user-dan-host-yang-sudah-terdaftar-pada-mysql">Cara Untuk mengetahui USER dan host yang sudah terdaftar pada mysql</h2>
<p>Sumber: <a href="http://mysql.phi-integration.com/administrasi-mysql/melihat-daftar-user">http://mysql.phi-integration.com/administrasi-mysql/melihat-daftar-user</a> </p>
<ol>
<li>Masuk kedalam mysql terlebih dahulu </li>
<li>ketik <code>SELECT User, Host from mysql.user;</code></li>
</ol>
<h2 id="cara-untuk-input-data-kedalam-database">Cara untuk input data kedalam DATABASE</h2>
<p>Langkah pertaman untuk melakukan inputing data disini adalah dengan masukan kedalam applikasi mysql terlebih dahulu. Setelah masuk kedalam mysql dengan terminal akan muncul pesan seperti ini</p>
<pre><code>Welcome to the MySQ<span class="hljs-class">L monitor.  Commands end with ;</span><span class="hljs-built_in"> or </span>\g.
Your MySQL connection id is 13
Server version: 8.0.30-0ubuntu0.20.04.2 (Ubuntu)

Copyright (c) 2000, 2022, Oracle<span class="hljs-built_in"> and/or </span>its affiliates.

Oracle is a registered trademark of Oracle Corporation<span class="hljs-built_in"> and/or </span>its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;'<span class="hljs-built_in"> or </span>'\h' for help. Type '\c' to clear the current input statement.

mysql&gt; ^C
</code></pre><p>Dalam penggunaan command pada sql, biasannya tidak &#39;case-senssitive&#39;, jadi teman-teman bisa menggunakan huruf besar maupun kecil. Tetapi Sangat dianjurkan menggunakan huruf besar untuk menandai bahwa itu adalah command pada sql. 
Pada Variabel seperti nama database, tabel dan lain-lain SQL akan melakukan case-senssitive. Jangan lupa untuk mengakhiri setiap perintah sql dengan titik koma <code>;</code></p>
<p><strong>Contoh Beberapa tahapan yang dilakukan</strong></p>
<ul>
<li>untuk mengetahui list database yang ada didalam mysql, ketik <code>SHOW DATABASES;</code></li>
<li>Untuk membuat database baru, ketik <code>CREATE DATABASE school;</code></li>
<li>untuk memilih database, ketik <code>USE school;</code></li>
<li>Untuk membuat table baru didalam database, ketik <pre><code>  <span class="hljs-keyword">CREATE</span> <span class="hljs-keyword">TABLE</span> student (
  <span class="hljs-keyword">id</span> <span class="hljs-built_in">INT</span> <span class="hljs-keyword">unsigned</span> <span class="hljs-keyword">NOT</span> <span class="hljs-literal">NULL</span> AUTO_INCREMENT,
  <span class="hljs-keyword">name</span> <span class="hljs-built_in">VARCHAR</span>(<span class="hljs-number">200</span>)  <span class="hljs-keyword">NOT</span> <span class="hljs-literal">NULL</span>, 
  major <span class="hljs-built_in">VARCHAR</span>(<span class="hljs-number">150</span>) <span class="hljs-keyword">NOT</span> <span class="hljs-literal">NULL</span>,
  PRIMARY <span class="hljs-keyword">KEY</span> (<span class="hljs-keyword">id</span>)
  );
</code></pre>  Untuk lebih lengkapnya menggenai &quot;Data Types&quot;, dan &quot;primaryKey&quot; bisa dilihat pada bagian bawah. </li>
<li>Untuk melihat list table yang ada, ketik <code>SHOW TABLES;</code></li>
<li>Untuk melihat informasi column didalam table, ketik <code>DESCRIBE student;</code></li>
<li>Untuk menambahkan records atau data kedalam table, ketik <pre><code>  <span class="hljs-selector-tag">INSERT</span> <span class="hljs-selector-tag">INTO</span> <span class="hljs-selector-tag">student</span> ( name, major ) <span class="hljs-selector-tag">VALUES</span> 
  ( <span class="hljs-string">'budi'</span>, <span class="hljs-string">'IPA'</span> ),
  ( <span class="hljs-string">'ucup'</span>, <span class="hljs-string">'IPS'</span> ),
  ( <span class="hljs-string">'ranti'</span>, <span class="hljs-string">'IPS'</span> ),
  ( <span class="hljs-string">'rangga'</span>, <span class="hljs-string">'Bahasa'</span> );
</code></pre></li>
<li>Mengambil records dari dalam table, ketik <code>SELECT * FROM student;</code></li>
</ul>
<p>SRC: <a href="https://dev.mysql.com/doc/mysql-getting-started/en/">https://dev.mysql.com/doc/mysql-getting-started/en/</a></p>
<h2 id="dataset">Dataset</h2>
<p>Cara mudah untuk menganalisa data?
adalah dengan menjalankan side by side pada dataset!</p>
<p>Dataset adalah sekumpulan data yang tersruktur, yang data mempermudahkan manusia untuk membaca dan menanalisa data dengan jumlah yang banyak. Dataset biasannyaberbentuk dalam tabel, yang terdiri dari baris dan kolom. </p>
<p>Dengan cara penggunaan baris dan kolomyang tepat, dataset akan mempermudah kita dalam melihat hubungan dari setiap data.</p>
<p>Misalkan dataset harga barang dibawah ini </p>
<table>
<thead>
<tr>
<th>Nama Barang</th>
<th>Harga Barang</th>
<th>Barang Yang Terjual</th>
</tr>
</thead>
<tbody>
<tr>
<td>Kaos kaki</td>
<td>5000</td>
<td>20</td>
</tr>
<tr>
<td>Spatu</td>
<td>35000</td>
<td>25 </td>
</tr>
<tr>
<td>sandal</td>
<td>10000</td>
<td>10 </td>
</tr>
<tr>
<td>Tali spatu</td>
<td>10000</td>
<td>5</td>
</tr>
</tbody>
</table>
<p>Sekarang akan saya coba jelaskan perbedaan data, dataset, dan database </p>
<p>Mari kitabuat perumpamaan, data adalah lembar kertas pada buku. Dataset adalah kumpulan lembaran kertas yaitu buku. Sedangkan Database adalah Lemari/rak buku.</p>
<ul>
<li>Data adalah serpihan informasi</li>
<li>Dataset adalah Tempat dimana data dikumpulkan </li>
<li>Database adalah Wadah yang akan menyimpan kumpulan dataset</li>
</ul>
<h2 id="sql-where">SQL where</h2>
<pre><code><span class="hljs-keyword">SELECT</span> column1, column2 
<span class="hljs-keyword">FROM</span> nama_table 
<span class="hljs-keyword">WHERE</span> column1 = <span class="hljs-string">'requirement'</span>;
</code></pre><p>clausa &quot;where&quot; digunakan untuk melakukan filtering, hanya yang sesuai persyratan yang akan diambil. </p>
<h2 id="sql-update-statement">SQL UPDATE statement</h2>
<pre><code>UPDATE nama_table
<span class="hljs-keyword">SET</span> column1 <span class="hljs-comment">= value1, column2 = value2</span>
WHERE <span class="hljs-comment">condition</span>;
</code></pre><p>Statement &quot;update&quot; adauntuk melakukan perubahan pada records yang telah ada</p>
<h2 id="sql-delete-statement">SQL DELETE statement</h2>
<pre><code><span class="hljs-keyword">DELETE</span> <span class="hljs-keyword">FROM</span> nama_table <span class="hljs-keyword">WHERE</span> conditon;
</code></pre><p>statement &quot;delete&quot; ada untuk menghapus record yang telah ada </p>
<h2 id="alter-table">ALTER table</h2>
<pre><code><span class="hljs-keyword">ALTER</span> <span class="hljs-keyword">TABLE</span> nama_table 
    <span class="hljs-keyword">ADD</span> <span class="hljs-keyword">COLUMN</span> nama_column <span class="hljs-built_in">TEXT</span>,
    <span class="hljs-keyword">DROP</span> <span class="hljs-keyword">COLUMN</span> nama,
    <span class="hljs-keyword">RENAME</span> <span class="hljs-keyword">COLUMN</span> nama <span class="hljs-keyword">to</span> nama_baru, 
    <span class="hljs-keyword">MODIFY</span> nama <span class="hljs-built_in">VARCHAR</span>(<span class="hljs-number">100</span>) <span class="hljs-keyword">AFTER</span> nama_column,
    <span class="hljs-keyword">MODIFY</span> nama <span class="hljs-built_in">VARCHAR</span>(<span class="hljs-number">100</span>) <span class="hljs-keyword">FIRST</span>;
</code></pre><p>Beberapa contoh statement untuk altering table</p>
<h2 id="menambahkan-menghapus-unique-constraint">Menambahkan / menghapus unique constraint</h2>
<pre><code><span class="hljs-keyword">ALTER</span> <span class="hljs-keyword">TABLE</span> nama_table 
    <span class="hljs-keyword">ADD</span> <span class="hljs-keyword">CONSTRAINT</span> column_unique <span class="hljs-keyword">UNIQUE</span> (nama_column);
</code></pre><p>&quot;ADD CONSTRAIN&quot; ini adalah untuk menambahkan kata kunci, agar kita bisa dengan mudah jika ingin menghapusnya nanti.
&quot;UNIQUE&quot; Akan memastikan bahwa semua value yang masuk berbeda denganyang lain. </p>
<pre><code><span class="hljs-keyword">ALTER</span> <span class="hljs-keyword">TABLE</span> nama_table 
    <span class="hljs-keyword">DROP</span> <span class="hljs-keyword">CONSTRAINT</span> column_unique;
</code></pre><p>Perintah diatas untuk menghapus constraint unique </p>
<h2 id="menambhkan-foreign-key">Menambhkan FOREIGN KEY</h2>
<pre><code><span class="hljs-keyword">ALTER</span> <span class="hljs-keyword">TABLE</span> nama_column
    <span class="hljs-keyword">ADD</span> <span class="hljs-keyword">CONSTRAINT</span> fk_nama_column 
    FOREIGN <span class="hljs-keyword">KEY</span> (nama_column) <span class="hljs-keyword">REFERENCES</span> nama_column(<span class="hljs-keyword">id</span>);
</code></pre><h2 id="databaes-management-system-dbms-">Databaes Management System (DBMS)</h2>
<p>Special software yang akan membantu pengguna mengelola database.
Membantu menambahkan, menghapus, mengubah data yang berada di database</p>
<h2 id="crud">CRUD</h2>
<p>Change, Read, Update, dan delete.</p>
<h2 id="two-type-of-database">Two type of database</h2>
<ul>
<li><p>Relational Database (SQL)
mengatur data menjadi satu atau lebih table. setiap table memiliki columns dan rows.
kata kunci khusus mengidentifikasi setiap baris. Relational database 
adalah database yang berdasarkan data yang terhubung atau sudah ditentukan 
sebelumnnya. Berbagai item disusun menjadi satu set tabel dengan kolom 
dan baris. Tabel digunakan untuk menyimpan informasi tentang object yang 
akan dipresentasikan dalam database.</p>
</li>
<li><p>Non-Relational ( noSQL/ tidak hanya SQL )</p>
<ul>
<li>menyimpan kata kunci</li>
<li>Document (JSON, XML)</li>
<li>Graphs</li>
<li>flexibel Tables</li>
</ul>
</li>
</ul>
<h2 id="relational-database">Relational Database</h2>
<ul>
<li>Student Table</li>
</ul>
<table>
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Major</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Jack</td>
<td>Biology</td>
</tr>
<tr>
<td>2</td>
<td>Kate</td>
<td>Sociology</td>
</tr>
<tr>
<td>3</td>
<td>Claire</td>
<td>English</td>
</tr>
<tr>
<td>4</td>
<td>Jhon</td>
<td>Chemistry</td>
</tr>
</tbody>
</table>
<ul>
<li>User Table </li>
</ul>
<table>
<thead>
<tr>
<th>Username</th>
<th>Password</th>
<th>Email</th>
</tr>
</thead>
<tbody>
<tr>
<td>1.jsmith22</td>
<td>wordpass</td>
<td>...</td>
</tr>
<tr>
<td>2.catlover45</td>
<td>apple223</td>
<td>...</td>
</tr>
<tr>
<td>3.gamerkid</td>
<td>...</td>
<td>...</td>
</tr>
<tr>
<td>4.giraffe</td>
<td>...</td>
<td>...</td>
</tr>
</tbody>
</table>
<p>Relational Database Management System (RDBMS)
  membantu pengguna membuat dan mengelola relasi database
contoh: mysql, oracle, postgresql, mariaDB</p>
<h2 id="non-relational-databases-nosql-">Non-Relational Databases (noSQL)</h2>
<ul>
<li><p>Non-relational database management system (NRDBMS)
membantu pengguna membuat dan mengatur non-relational database
contoh; mongoDB, dynamoDB, apache cassandra</p>
</li>
<li><p>Implementation specific</p>
<ul>
<li><p>setiap non-relational database masuk kategori ini, tidak ada
bahasa standart.</p>
</li>
<li><p>kebanyakan NRDBMS akan mengunakan bahasa program mereka untuk
menjalankan CRUD dan administrative operations pada database.</p>
</li>
</ul>
</li>
</ul>
<h2 id="apa-itu-sql-">Apa itu SQL?</h2>
<p>SQL(Structures Query Language)  adalah salah satu bahasa untuk Membuat desain 
aturan di dalam relational database. Ini sudah ada sejakl 1970s dan cara umum untuk 
mengakses data didalam database. fitur yang sering dipakai dalam SQL adalah 
baca, manipulasi, mengubah data. Beberapa alsan SQL bisa menjadi popular: </p>
<ul>
<li>semantik dan mudah dipahami</li>
<li>Bisa mengakses data yang besar secara langsung dari tempat penyimpanan</li>
<li>Jika dibandigkan dengan spreadsheet tools, analisa data lebih mudah dilakukan 
dalam SQL karena mudah melakukan audit dan replika data</li>
<li>SQL itu bagus dalam database language untuk menyimpan data kedalam database </li>
<li>SQL adalah alat yang bagus untuk website seperti PHP, Phython, Java, ASP dan lain-lain 
untuk membuat dynamis website</li>
</ul>
<p>Peringkat SQL dalam penggunaan di dunia data science tools berada di pringkat kedua
dilansir dari <a href="https://research.aimultiple.com/data-science-competition/">https://research.aimultiple.com/data-science-competition/</a> 
(community data science competitions) dalam surveynya berjudul &#39;2020 Data 
Science and Machine Learning Survey&#39;(<a href="https://www.kaggle.com/paultimothymooney/2020-kaggle-data-science-machine-learning-survey">https://www.kaggle.com/paultimothymooney/2020-kaggle-data-science-machine-learning-survey</a>)</p>
<h2 id="sql-process-flow">SQL process flow</h2>
<p>disaat kau menjalankan SQL query pergi ke dalam SQL server. SQL server bekerja untuk
mengelola database, dan lain-lain. SQL server memangil database table dan return hasilnya.
(<a href="https://way2tutorial.com/sql/sql-introduction.php">https://way2tutorial.com/sql/sql-introduction.php</a>)</p>
<h2 id="contoh-perintah-pada-sql">contoh perintah pada sql</h2>
<p>dalam penulisan SQL, pengguna tidak perlu memperhatikan besar atau kecilnya suatu huruf karena SQL tidak mengunakan &#39;case sensitiv&#39;.
Contoh Perintah penting dalam SQL:</p>
<ul>
<li>&#39;SELECT&#39; - ekstrak data dari database</li>
<li>&#39;UPDATE&#39; - Perbarui data dari database</li>
<li>&#39;DELETE&#39; - hapus data dari database</li>
<li>&#39;INSERT INTO&#39; - masukan data baru ke database</li>
<li>&#39;CREATE DATABASE&#39; - Buat database baru</li>
<li>&#39;ALTER DATABASE&#39; - ubah databse</li>
<li>&#39;CREATE TABLE&#39; - buat table baru</li>
<li>&#39;ALTER TABLE&#39; - ubah table</li>
<li>&#39;DROP TABLE&#39; - delete table</li>
<li>&#39;CREATE INDEX&#39; - buat index (kata kunci)</li>
<li>&#39;DROP INDEX&#39; - hapus index</li>
</ul>
<h2 id="database-queries">Database queries</h2>
<p>queris adalah permintaan yang dibuat oleh database management system untuk
informasi spesifik.</p>
<p>dengan semakin complex database tersebut, akan lebih sulit untuk mendapatkan
sebuah informasi.</p>
<p>Secara mudahnnya, queries adalah set instruksi pada database</p>
<h2 id="type-primary-key">Type primary key</h2>
<table>
<thead>
<tr>
<th>Student id</th>
<th>name</th>
<th>manjor</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Jack</td>
<td>Biology</td>
</tr>
<tr>
<td>2</td>
<td>Kate</td>
<td>Sociology</td>
</tr>
<tr>
<td>3</td>
<td>claire</td>
<td>English</td>
</tr>
<tr>
<td>4</td>
<td>Jack</td>
<td>biology</td>
</tr>
<tr>
<td>5</td>
<td>Mike</td>
<td>comp. sci</td>
</tr>
</tbody>
</table>
<p>Primary key is important in database table. pastikan primary key adalah informasi
yang pasti berbeda untuk setiap row. jika dengan contoh diatas maka primary key adalah
&#39;student id&#39;.</p>
<h2 id="natural-key-number">Natural key number</h2>
<p>Natural key number adalah kata kunci yang telah ada sebelumnnya di dunia 
nyata. Sebagai contoh Nomor KTP adalah kata kunci yang telah ada didunia
nyata dan bisa digunakan sebagai natural key.</p>
<h2 id="surrogate-key">Surrogate key</h2>
<p>adalah kata kunci yang tidak memiliki bentuk didunia nyata.</p>
<h2 id="candidate-key">candidate key</h2>
<p>adalah kandidat kata kunci, kita bisa sebut sebagai identitas yang bisa 
membedakan object satu dengan yang lain. Sebagai contoh: 
jika kita ingin membedakan orang dengan menggunakan data pribadi, 
kita bisa menggunakan nomor KTP, atau menggunakan nomor handphone mereka,
atau bisa menggunakan alamat email mereka. Setiap data tersebut bisa 
membedakan satu dengan yang lainnya. ketiga primary key diatas bisa 
disebut sebagai candidate key yang akan dipakai sebagai primary key,
atau alternate key. </p>
<h2 id="alternate-key">Alternate key</h2>
<p>bisa dikenal sebagai secondary key, ini adalah identitas pembeda 
didalam row/baris dalam table</p>
<h2 id="foregein-key">Foregein Key</h2>
<p>adalah attribute yang bisa kita simpan pada database table. Yang akan menghubungkan
dengan database table lain.</p>
<p>Ini digunakan untuk menyimpan primary key kedalam row database table lain.</p>
<ul>
<li><p>employee
emp-id  |   name    |   branch-id | super-id
---     |  ----     |   ---  |   ---
103     | budi      | 1       | 102
101     | alva      | 2       | 103
102     | rangga    | 3       | 101</p>
</li>
<li><p>Branch
branch-id | branch-name   | mgr-id
---       | ---           | ---
3         | Bambang        | 102
2         | nasi-gorengeng | 101
1         | soto           | 103</p>
</li>
</ul>
<p>Foregein key penting untuk menghubungkan atau mendefinisikan hubungan antara tables.
dengan contoh diatas; column &#39;branch-id&#39; adalah Foregein key yang akan menghubungkan
dengan database table bernama &#39;Branch&#39;.</p>
<p>Didalam contoh diatas. ini juga mendefinisikan siapa supervisor untuk setiap orang,
102,103,101. budi employee id &#39;103&#39; supervisor id is 102 &#39;rangga&#39;.</p>
<h2 id="composite-key">composite key</h2>
<p>jika ada primary key yang terdiri dari 2 atau lebih column, biasa disebut sebagai
composite key. ini digunakan untuk membuat primary key tetap unik, diantara
banyak data yang memiliki kesamaan.</p>
<p>sebagai contoh; untuk memngidentifikasi setiap murid dibutuhkan nama depan dan
nama belakang. akan sulit atau tidak mungkin bisa untuk membedakan murid
jika hanya dari nama depan atau nama belakangnya saja.</p>
<p>Jika ada murid yang memiliki nama depan yang sama dengan murid lain akan sulit
untuk membedakaanya. Dengan digunakannya composite Key kita bisa mengurangi
kemungkinan salah mebedakan orang.</p>
<p>Teknik tersebut sangat berguna untuk membedakan setiap data dengan data yang lain.
didalam suatu sistem database tidak boleh ada kesamaan dari primary key,
setiap primary key itu harus unik dan berbeda dengan yang lain.</p>
<p>tidak harus primary key saja yang bisa mengunakan composite key.
gabungan dari 2 atau lebih column bisa menjadi composite key juga</p>
<!--menit ke 41:47 -->
<h2 id="wrap-up">wrap Up</h2>
<ul>
<li>database adalah koleksi informasi</li>
<li>computer bagus dalam menyimpan database</li>
<li>DBMS membuat database lebih mudah diatur dan lebih aman</li>
<li>DBMS memperbolehkan CRUD operasi</li>
<li>rational database dan non-rational database</li>
<li>RDBMS (Relational Databse Management System)</li>
<li>Data Integrity ( Menyimpan data sekali dan menjauhi duplikasi)</li>
<li>SQL Constraints ( Constraints adalah aturan yang dipasangkan kepada table column
untuk menyimpan data dan menghindari pengguna untuk menyimpan data yang tidak valid kedalam
column)</li>
<li>Better Security (Menetapkan memberikan atau hak kepada pengguna individu. 
Mengunakan ini pengguna bisa menyimpan data penting kedalam table menggunakan username
dan password)</li>
<li>Database Normalization (Adalah proses untuk menyimpan database dengan efisien. 
Tidak perlu menyimpan data yang sama lebih dari satu)</li>
<li>Beberapa type relationships( one to one, one to many, many to many)<ul>
<li>One to one relationship: Mengabungkan dua table  -</li>
<li>One to many relationship: membuat foreign key dari parent table ke 
child table</li>
<li>Many to many relathionship: membuat relation table baru </li>
</ul>
</li>
<li>Structured query language (SQL)<ul>
<li>bahasa standart untuk berinteraksi dengan RDBMS</li>
<li>digunakan untuk menjalankan C.R.U.D operasi.</li>
<li>digunakan untuk menjelasakan table dan struktur</li>
<li>SQL code biasannya digunakan dengan satu RDBMS tidak bisa untuk
yang lain.</li>
</ul>
</li>
<li><p>Row adalah baris yang melintang horisontal
Kanan ke kiri</p>
</li>
<li><p>Column adalah baris melintang vertikal, dimulai dari atas ke bawah.</p>
</li>
</ul>
<h2 id="ddl-data-definition-language-">DDL (Data Definition Language)</h2>
<p>beberapa contoh</p>
<ul>
<li>CREATE 
Membuat Table atau object baru</li>
<li>ALTER
Memodifikasi database object seperti table </li>
<li>DROP 
hapus seluruh table atau objek lain </li>
<li>USE 
Digunakan untuk memilih dan mengunakan object </li>
</ul>
<h2 id="dml-data-manipulation-language-">DML (Data manipulation Language)</h2>
<ul>
<li>SELECT 
Mengambil Satu atau lebih kolom. sebagai contoh mengambil 
kolom dari table </li>
<li>INSERT 
Membuat / memasukan data Record(baris) baru</li>
<li>UPDATE 
Mengubah object pada database. Sebagai contoh digunakan untuk update table  </li>
<li>DELETE 
Menghapus object pada datbase </li>
</ul>
<h2 id="dcl-data-control-language-">DCL (Data control Language)</h2>
<ul>
<li>GRANT 
Memberikan hak istimewa kepada pengguna </li>
<li>REVOKE 
mengambil kembali hak istimewan dari pengguna </li>
</ul>
<h2 id="field-or-column-kolom-">Field or column (kolom)</h2>
<p>Field adalah kolom table yang didesain untuk mengelola informasi 
spesifik untuk record table (ID, name)</p>
<h2 id="record-or-row-baris-">RECORD or ROW (Baris)</h2>
<p>RECORD adalah garis horizontal(lurus) pada table.</p>
<h2 id="sql-constraint">SQL constraint</h2>
<p>Digunakan untuk memberikan aturan secara spesifik data dalam table 
ini untuk memastikan akurasi dan reliability data dalam table.</p>
<h3 id="contoh-beberapa-constraint-">contoh beberapa constraint:</h3>
<ul>
<li>NOT NULL </li>
<li>UNIQUE</li>
<li>PRIMARY KEY </li>
<li>FOREIGN KEY </li>
</ul>
<p>contoh format: 
<code>CREATE TABLE nama_table(field_name {tipe_data} {constraint});</code></p>
<h2 id="generate-backup-database">Generate backup database</h2>
<p>tulis code ini pada terminal, untuk menjalankan aplikasi 
mysqldump
<code>mysqldump -U root -P nama_database &gt; nama_file_backup.sql</code></p>
<h2 id="restore-database">Restore database</h2>
<ol>
<li>sebelum restore database, siapkan database kosong</li>
<li><code>CREATE DATABASE nama_database</code></li>
<li>pada terminal, jalankan perintah beriku ini 
 <code>mysql -U root -P nama_database &lt; nama_file_backup.sql</code></li>
</ol>
<p>cara diatas digunakan untuk backup database 
source: <a href="https://phoenixnap.com/kb/how-to-backup-restore-a-mysql-database">https://phoenixnap.com/kb/how-to-backup-restore-a-mysql-database</a></p>
<h2 id="untuk-melihat-isi-table">Untuk melihat isi table</h2>
<p><code>SELECT * FROM nama_table;</code></p>
<p>untuk melihat seluruh List dalam melihat data dalam table, 
nilai ROW dan COLUMN </p>
<table>
<thead>
<tr>
<th>nama</th>
<th>harga </th>
</tr>
</thead>
<tbody>
<tr>
<td>soto</td>
<td>5000 </td>
</tr>
<tr>
<td>rawon</td>
<td>5000</td>
</tr>
</tbody>
</table>
<h2 id="sql-date-types">SQL Date Types</h2>
<p><code>DATE</code> - Format YYYY-MM-DD</p>
<h2 id="data-integrity">Data integrity</h2>
<p>contoh data integrity pada database </p>
<ul>
<li>entity integrity </li>
<li>Domain integrity </li>
</ul>
<h2 id="contoh-pengambilan-data">contoh pengambilan data</h2>
<p><code>SELECT nama_kolom FROM nama_table;</code>
Di gunakan untuk mengambil data dalam nama kolom yang dituju </p>
<h2 id="operator-perbandingan">Operator perbandingan</h2>
<p><code>SELECT * FROM purchases
WHERE price &gt;= 10;</code></p>
<ul>
<li>a &lt; b   - Mencari a lebih kecil dari b </li>
<li>a &lt;= b  - Mencari lebih kecil atau sama dengan b </li>
<li>a &gt; b   - Mencari a lebih besar dari b </li>
<li>a &gt;= b  - Lebih besar atau sama dengan b </li>
</ul>
<p>Contoh 
<code>SELECT * FROM nama_database
WHERE nama_kolom &lt;= &#39;1000&#39;;
/* 1000 adalah data INT */</code>
Ini digunakan untuk mengambil data INT dibawah 
1000 </p>
<h2 id="like">LIKE</h2>
<p>digunakan untuk mengambil data yang mirip </p>
<p><code>SELECT * FROM nama_database 
WHERE nama_kolom LIKE %kunci%;</code>
Data yang akan diambil akan memiliki kemiripan atau kata kunci 
&#39;kunci&#39;. Sama seperti <code>*</code> adalah whildcard digunakan untuk bypass
melewati kata kunci sebelumnya atau selanjutnnya sesuai dengan 
penempatan whildcard. </p>
<p>Contoh </p>
<ul>
<li><code>name%</code>
kata kunci yang dilewati atau bypass adalah setelah dari 
&#39;name&#39;</li>
<li><code>%name</code>
kata kunci yang dilewati atau bypass adalah sebelum dari &#39;name&#39;</li>
<li><code>%name%</code>
kata kunci yang dilewati atau bypass adalah sebelum dan sesudah 
dari &#39;name&#39;</li>
</ul>
<h2 id="kolom-null">Kolom NULL</h2>
<p>record atau row yang tidak menyimpan data, bisa disebut &#39;NULL&#39;</p>
<p>kolom atau baris tidak menyimpan nilai apapun. maka kolom atau 
baris adalah NULL.  </p>
<h2 id="menampilkan-baris-yang-berisi-null">Menampilkan baris yang berisi NULL</h2>
<p><code>SELECT * FROM nama_database
WHERE nama_kolom IS NULL;</code>
untuk memilih baris yang berisi &#39;NULL&#39; atau kosong</p>
<p><code>SELECT * FROM nama_database
WHERE nama_kolom IS NOT NULL;</code>
untuk mengambil baris yang tidak &#39;NULL&#39; atau kosong</p>
<h2 id="and">AND</h2>
<p><code>SELECT * FROM nama_database
WHERE nama_kolom = &#39;kata kunci&#39;
AND nama_kolom = &#39;kata kunci ke 2&#39;;</code>
digunakan untuk menambah opsi, pengunaanya seperti &#39;&amp;&amp;&#39;
pada javascript language (if statement). 
Saat mengunakan &#39;AND&#39; tidak perlu menulis &#39;WHERE&#39; dibelakangnnya </p>
<h2 id="order-by">ORDER BY</h2>
<p><code>SELECT * FROM nama_database
WHERE nama_kolom = &#39;kata kunci&#39;
ORDER BY nama_kolom DESC;</code>
Jika tanpa &#39;WHERE&#39;
<code>SELECT * FROM nama_database
ORDER BY nama_kolom DESC;</code>
Digunakan Untuk mengurutkan data pada kolom yang dipilih sesasu 
degan METHOD yang dipilih. </p>
<ul>
<li>ASC ( menaik, dari bawah ke atas) [1,2,3,4,5,6,7,8]</li>
<li>DESC (Menurun, dari atas ke bawah) [8,7,6,5,4,3,2,]</li>
</ul>
<h2 id="limit">LIMIT</h2>
<p>menentukan jumlah baris yang akan dikeluarkan sebgai output. 
Dengan menggunakan &#39;LIMIT&#39; </p>
<p><code>SELECT * FROM nama_database
WHERE nama_kolom =&#39;kata kunci&#39;
LIMIT 5;</code></p>
<h2 id="sql-query">SQL query</h2>
<p>pada akhir sql statement atau sql query, tulis semicolon 
(;) pada akhir statement. </p>
<p>queris adalah set instruksi yang diberikan pada RDBMS
mengenai informasi apa yang mau diambil. </p>
<h2 id="wrap-up-rangkuman">Wrap up Rangkuman</h2>
<ul>
<li><code>WHERE</code> digunakan untuk mencari kata kunci yang dituju </li>
<li><code>ORDER BY</code> digunakan untuk membuat atau mengurutkan data </li>
<li><code>SELECT</code> digunakan untuk memilih atau mengambil kolom </li>
<li><code>FROM</code> digunakan untuk mengambil atau memilih table </li>
<li><code>USE</code> digunakan untuk mengambil atau memilih object seperti database</li>
<li><code>CREATE</code> digunakan untuk membuat object, seperti database </li>
<li><code>LIKE</code> digunakan untuk mengambil data yang mirip<ul>
<li>Format <code>WHERE nama_kolom LIKE &#39;%nama%&#39;</code></li>
</ul>
</li>
<li><code>IS NULL</code> digunakan untuk mengambil data kolom yang memiliki nilai 
Null atau kosong <ul>
<li>Format <code>WHERE nama_kolom IS NULL</code></li>
</ul>
</li>
<li><code>AND</code> digunakan untuk menambahkan opsi pada queri sama seperti di 
&#39;if statement&#39; pada programming language<ul>
<li>Format <code>WHERE nama_kolom = &#39;str&#39; AND nama_kolom = &#39;STR&#39;</code></li>
</ul>
</li>
<li><code>LIMIT</code> digunakan untuk membatasi data yang keluar (output)<ul>
<li>format <code>WHERE nama_kolom = &#39;str&#39; LIMIT 5</code></li>
</ul>
</li>
</ul>
<h2 id="drop-table">DROP Table</h2>
<p><code>DROP TABLE table_name;</code></p>
<p>digunakan untuk object table yang dituju. 
Harus hati-hati dengan mengunakan statement tersebut 
sekalinnya terhapus maka akan hilang selamannya. </p>
<h2 id="insert-into-table">Insert Into Table</h2>
<p><code>ISERT INTO nama_table(nama_kolom, nama_kolom) VALUES 
(&#39;value&#39;, &#39;value&#39;);</code>
Pastikan urutan &#39;value&#39; sudah sesuai dengan urutan kolom yang kita 
inginkan. </p>
<p>Jika tidak ditulis urutannnya, maka akan diambil urutan yang 
sudah ada sebelumnnya didalam table</p>
<h2 id="update-query">Update query</h2>
<p><code>UPDATE nama_table 
SET nama_kolom = &#39;value baru&#39; 
WHERE nama_kolom = &#39;value lama&#39;;</code>
atau 
<code>UPDATE nama_table 
SET nama_kolom = &#39;value baru&#39;;</code>
Jika menggunakan cara diatas maka 
semua data dalam &#39;nama_kolom&#39; yang dipilih 
akan berubah semua. </p>
<p>&#39;UPDATE&#39; dan &#39;SET&#39; dengan mengunakan statement ini, 
bisa digunakan untuk mengubah record atau baris yang lama. </p>
<h2 id="delete-query">DELETE query</h2>
<p><code>DELETE FROM nama_table
WHERE nama_kolom = &#39;value&#39;;</code>
Statement diatas bisa digunakan untuk menghapus 
record atau baris yang dipilih. </p>
<h2 id="group-by">GROUP BY</h2>
<p><code>SELECT nama_kolom SUM(nilai_kolom) 
FROM nama_table 
GROUP BY nama_kolom_number;</code></p>
<p><code>GROUP BY</code> adalah statement untuk mengatur data yang identik 
menjadi grup. </p>
<p><code>SUM</code> adalah statement untuk menghitung hasil kolom numeric yang
kita pilih. </p>
<p>Contoh: 
nama    |   pengeluaran
---     |   ---
budi    |   5000
budi    |   10000</p>
<p>akan menjadi 
nama    |   SUM(pengeluaran) 
---     |   ---
budi    |   15000</p>
<ul>
<li><code>SUM()</code> adalah statement yang digunakan untuk menghitung 
data dalam kolom yang dipilih. </li>
<li><code>AVG()</code> adalah statement yang digunakan untuk mencari nilai 
rata-rata pada kolom</li>
<li><code>COUNT()</code> adalah statement yang digunakan untuk mendapatkan 
berapa banyak baris, yang sesuai dengan kriteria </li>
</ul>
<p>Contoh <code>COUNT()</code>:
<code>SELECT nama, COUNT(harga)
FROM nama_table 
WHERE harga &lt;= 10000;</code></p>
<p>total baris yang akan saya cari adalah harus dibawah dan sama 
dengan 10000</p>
<h2 id="distinct">DISTINCT</h2>
<p><code>DISTINC</code>
kata kunci ini digunakan untuk mengilimansi records atau baris yang 
memiliki value duplikat. </p>
<p><code>SELECT DISTINCT nama_kolom
FROM nama_table 
ORDER BY nama_kolom;</code></p>
<p>Perintah diatas digunakan untuk mengeliminasi records atau 
baris yang memiliki value duplikat. dan diurutakan, 
<code>ORDER BY</code> Jika tidak kolom method diisi maka akan 
mengunakan <code>ASC</code> secara default. </p>
<h2 id="tipe-data">Tipe data</h2>
<p>sebagai contoh dalam execl atau aplikasi penyimpananan data
spreadsheet lainnya. Kita bisa menentukan pada kolom 
tertentu harus kita isi dengan data berbentuk angka atau 
huruf. Akan tetapi penggunaan kolom tersebut bisa saja berubah-ubah. </p>
<p>Dalam SQL jika kolom tersebut dibuat untuk tipe data number, 
maka seterusnnya akan begitu. Kita bisa memilih tipe data 
apa untuk kolom yang kita buat sesuai dengan kebutuhan. </p>
<p>Contoh tipe data pada SQL: </p>
<ul>
<li><p>Data Integer </p>
<ul>
<li><code>TINYINT</code> tipe data ini akan mengambil nilai dari (-128, 127)</li>
<li><code>SMALLINT</code> tipe data ini akan mengambil nilai dari (-32768, 32767)</li>
<li><code>MEDIUMINT</code> tipe data ini akan mengambil nilai dari (-8388608, 8388607)</li>
<li><code>INT</code> tipe data ini akan mengambil nilai dari (-2147483648, 2147483647)</li>
<li><code>BIGINT</code> tipe data ini akan mengambil nilai dari (-9223372036854775808, 9223372036854775807)</li>
</ul>
</li>
<li><p>data float </p>
<ul>
<li><code>FLOAT</code> adalah tipe data angka yang memiliki bagian desimal di akhir angka 
,atau memiliki bagian desimal di akhir angka, atau memiliki tanda &#39;titik&#39; yang menandakan 
bilangan desimal. Contoh: 0,9 atau 3,14 </li>
</ul>
<p>tipe data float cocok digunakan untuk variabel yang berisi angka pecahan, 
seperti hasil pembagian dan lain-lain. </p>
</li>
</ul>
<h2 id="decimal">DECIMAL</h2>
<p>tipe data number khusus yang ditentukan jumlah precission dan scalennya.</p>
<p>Sebagai contoh: </p>
<ul>
<li><code>DECIMAL(5,2)</code> bisa menghasilkan output seperti ini &#39;999.99&#39;</li>
<li><code>DECIMAL(3,1)</code> output &#39;99.9&#39;</li>
<li><code>DECIMAL(3)</code> output &#39;999&#39;</li>
</ul>
<h2 id="char-and-varchar">CHAR and VARCHAR</h2>
<p>Adalah tipe data untuk menyimpan bentuk &#39;string&#39;,
Seperti kata, angka, dan bentuk special. </p>
<ul>
<li><p><code>CHAR(size)</code> ini adalah fixed panjang string.<br>Jika disimpan disini 10 maka akan ada 10 baris yang tersimpan. 
Input: <code>CHAR(7)</code>
Output: &#39;namaku &#39;</p>
</li>
<li><p><code>VARCHAR(size)</code> ini adalah variabel yang lebih bisa otomatis
menyesuaikan data yang disimpan. 
Input: <code>VARCHAR(7)</code>
Output: &#39;namaku&#39;</p>
</li>
</ul>
<h2 id="date-and-time-data-type">Date and Time Data Type</h2>
<p>tipe data ini digunakan untuk menyipan data berformat 
waktu. Tanggal, bulan, tahun, dan jam. </p>
<ul>
<li><code>DATE</code> data yang disimpan berformat &#39;YYYY-MM-DD&#39;</li>
<li><code>DATETIME</code> data yang disimpan berformat &#39;YYYY-MM-DD hh:mm:ss&#39;</li>
<li><code>YEAR</code> data yang disimpan mulai dari 1901 ke 2155 dan 0000 </li>
</ul>
<h2 id="enum">ENUM</h2>
<p>Adalah tipe data string yang bisa kite tentukan pilihannya 
atau opsi. </p>
<p><code>ENUM(&#39;opsi1&#39;,&#39;opsi2&#39;)</code> 
Contoh: 
<code>ENUM(&#39;pria&#39;,&#39;wanita&#39;)</code>
dalam statement diatas, data yang diperbolehkan masuk adalah 
data &#39;pria&#39; atau &#39;wanita&#39; selain itu akan ditolak oleh sql </p>
<h2 id="mengubah-table">Mengubah table</h2>
<p><code>ALTER TABLE nama_table 
ADD COLUMN nama_kolom TEXT,
DROP COLUMN nama_kolom,
RENAME COLUMN kolom_lama TO nama_baru
MODIFY nama_kolom VARCHAR(100) AFTER nama_kolom
MODIFY nama_kolom TEXT FIRST;</code>
Break down kata kunci</p>
<ul>
<li><code>ALTER TABLE</code> digunakan untuk memilih table mana yang akan di ubah </li>
<li><code>ADD COLUMN</code> digunakan untuk menambahkan kolom pada table </li>
<li><code>DROP COLUMN</code> digunakan untuk menghapus kolom </li>
<li><code>RENAME COLUMN</code> digunakan untuk mengubah nama kolom </li>
<li><code>MODIFY, AFTER, FIRST</code> digunakan untuk memindahkan urutan kolom </li>
</ul>
<h2 id="update-table">Update table</h2>
<p><code>UPDATE nama_table 
SET nama_kolom = &#39;nilai_baru&#39;,
    nama_kolom = &#39;nilai_baru2&#39;
WHERE nama_kolom = &#39;string&#39;;</code>
Query diatas digunakan untuk mengubah data dalam kolom secara spesifik. 
Jika tidak menggunakan &#39;WHERE&#39; maka kesuluruhan data akan diubah. </p>
<h2 id="rename-table">Rename table</h2>
<p><code>ALTER TABLE nama_table 
RENAME TO nama_table_baru;</code></p>
<h2 id="join">Join</h2>
<p><code>SELECT * FROM nama_table1
JOIN nama_table2 
ON nama_table1.kolom_value = nama_table2.kolom_value</code>
Dengan query diatas kita bisa menghubungkan dua table, 
dan menempatkannya bersandingan atau bersebelahan dengan 
statement &#39;ON&#39; dan &#39;=&#39;. Table akan bersebelahan jika 
value mereka sama. </p>
<h2 id="show-create-table-nama_table">SHOW CREATE TABLE nama_table</h2>
<p><code>SHOW CREATE TABLE nama_table</code> Perintah ini akan menunjukan secara penuh detail menggenai query sql yang masuk dalam pembuatan table.</p>
<h2 id="describe-nama_table">DESCRIBE nama_table</h2>
<p><code>DESCRIBE nama_table</code> akan menujukan field,type dan lain-lain yaitu informasi dasar pada table tersebut</p>
<h2 id="note-kecil">Note kecil</h2>
<p>Contoh data modeling adalah relational databases</p>
<h2 id="latihan-sql">Latihan SQL</h2>
<p>Panduan latihan :
<RouterLink to="/ltSql" class="LFT-Item"> 
    Latihan SQL
    </RouterLink>
</p>
<h2 id="pranala-menarik">Pranala menarik</h2>
<ul>
<li><a href="https://dev.mysql.com/doc/refman/8.0/en/alter-table.html">https://dev.mysql.com/doc/refman/8.0/en/alter-table.html</a></li>
<li><a href="https://stevenpcurtis.medium.com/what-is-a-floating-point-number-6991f2f85a28">https://stevenpcurtis.medium.com/what-is-a-floating-point-number-6991f2f85a28</a></li>
<li><a href="https://www.duniailkom.com/mengenal-tipe-data-float-dan-cara-penulisan-float-dalam-php/">https://www.duniailkom.com/mengenal-tipe-data-float-dan-cara-penulisan-float-dalam-php/</a> </li>
<li><a href="https://www.youtube.com/watch?v=xYBclb-sYQ4">https://www.youtube.com/watch?v=xYBclb-sYQ4</a></li>
<li><a href="https://en.wikipedia.org/wiki/Composite\_key">https://en.wikipedia.org/wiki/Composite\_key</a></li>
<li><a href="https://www.kelasexcel.id/2014/09/pengertian-row-column-cell-dan-range-excel.html">https://www.kelasexcel.id/2014/09/pengertian-row-column-cell-dan-range-excel.html</a></li>
<li><a href="https://www.youtube.com/watch?v=HXV3zeQKqGY\&amp;t=1504s">https://www.youtube.com/watch?v=HXV3zeQKqGY\&amp;t=1504s</a></li>
<li><a href="https://www.w3schools.com/sql/sql_syntax.asp">https://www.w3schools.com/sql/sql_syntax.asp</a></li>
<li><a href="https://mode.com/sql-tutorial/introduction-to-sql/">https://mode.com/sql-tutorial/introduction-to-sql/</a></li>
<li><a href="https://www.analyticsvidhya.com/blog/2020/07/8-sql-techniques-data-analysis-analytics-data-science/">https://www.analyticsvidhya.com/blog/2020/07/8-sql-techniques-data-analysis-analytics-data-science/</a></li>
<li><a href="https://www.studytonight.com/dbms/introduction-to-sql.php">https://www.studytonight.com/dbms/introduction-to-sql.php</a></li>
<li><a href="https://www.sqlshack.com/introduction-to-sql/">https://www.sqlshack.com/introduction-to-sql/</a></li>
<li><a href="https://way2tutorial.com/sql/sql-introduction.php">https://way2tutorial.com/sql/sql-introduction.php</a></li>
<li><a href="https://aws.amazon.com/id/relational-database/">https://aws.amazon.com/id/relational-database/</a></li>
<li><a href="http://www.agiledata.org/essays/keys.html">http://www.agiledata.org/essays/keys.html</a></li>
<li><a href="https://www.w3schools.com/sql/sql_examples.asp">https://www.w3schools.com/sql/sql_examples.asp</a></li>
<li><a href="https://www.codepolitan.com/membuat-database-dan-tabel-di-mysql-5884222be38fa">https://www.codepolitan.com/membuat-database-dan-tabel-di-mysql-5884222be38fa</a></li>
<li><a href="https://www.tutorialspoint.com/sql/sql-rdbms-concepts.htm">https://www.tutorialspoint.com/sql/sql-rdbms-concepts.htm</a></li>
<li><a href="https://www.tutorialspoint.com/sqlite/sqlite_python.htm">https://www.tutorialspoint.com/sqlite/sqlite_python.htm</a></li>
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