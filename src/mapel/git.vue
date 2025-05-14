<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="version-control-git">Version Control Git</h1>
<p>Git adalah version control yang digunakan untuk melakukan tracking perubahan (sama seperti save data pada game) pada folder project. Dengan git kita bisa melihat siapa yang melakukan perubahan, kapan dilakukan perubahan, dan apa yang dirubah. </p>
<p>Version control system adalah software yang digunakan untuk membantu kita mengetahui history perubahan pada project. Dengan ini kita bisa melihat dan membandingkan perubahan dari file. Dan mempermudah kolaborasi dengan orang lain dengan lebih efektif. </p>
<p>Git mengunakan sistem distribusi, yaitu memperbolehkan kita untuk melakukan perubahan saat offline dan &quot;merge&quot; perubahan tersebut saat kita sudah siap dan online. Dengan ini kita sebagai developer tidak perlu terlalu takut jika tidak ada internet. </p>
<p>Beberapa command line git yang paling sering digunakan:</p>
<ul>
<li><code>git init</code> Sebagai pembuka git (mengaktifkan git) pada folder </li>
<li><code>git add</code> menambahkan perubahan pada &quot;stagin area&quot;</li>
<li><code>git commit</code> menulis nama untuk save data | menulis judul / alasan perubahan </li>
<li><code>git push</code> upload repository git ke internet. </li>
<li><code>git pull</code> mendownload perubahan dari repository yang berada dari luar </li>
<li><code>git branch</code> membuat &quot;branch&quot; baru, dan beberapa hal tentang branch </li>
<li><p><code>git merge</code> menggabungkan branch 1 dan yang lainnya</p>
<blockquote>
<p>Merge is best used when the target branch is supposed to be shared.</p>
</blockquote>
</li>
</ul>
<p>Git juga dilengkapi fitur untuk melakukan pull request (untuk melakukan kolaborasi dengan orang lain) dan code reviews (melihat / membadingkan code). Dengan mode ini kita akan lebih mudah untuk bekerja dengan orang lain.</p>
<p>Secara garis besar git adalah alat yang sangat bermanfaat untuk kita secara jangka panjang. </p>
<h2 id="git-dan-github">Git dan github</h2>
<p>Git adalah suatu version control system yang dirancang untuk menangani berbagai macam bentuk project. Pengembangan awal pada tahun 2005 oleh Linus Torvalds, Git menjadi titik awal dalam version control pada source code.</p>
<p>Git dapat membantu kita untuk melacak perubahan pada &quot;source code&quot;, dan bisa membantu kita untuk kembali pada versi sebelumnya jika dibuthkan.
Ini adalah fungsi yang sangat dibutuhkan oleh para developer untuk membantu mereka mengerjakan semua pekerjaan dengan sangat efektif. </p>
<p>Pada sisi lain terdapat github yang menjadi sistem berbasis hosting untuk project-project &quot;source code&quot;. Github dimulai pada tahun 20008, github menjadi salah satu platfrom hosting yang sangat reliable untuk melakukan colaborasi dengan banyak project, penyelesaian masalah, dan mengelolah code.</p>
<p>Pada github, terdapat fitur &quot;Pull Request&quot; dimana kita sebagai user bisa melakukan collaborasi, dan akan menunggu hasil collaborasi diterima oleh owner. Oleh karena fitur tersebut, colaborasi pada github bisa memiliki aturan sesuai dengan apa yang kita ingin kan. </p>
<h2 id="mengenai-savepoint">Mengenai savepoint</h2>
<p>Konsep sederhana dari Git adalah savePoint. </p>
<p>Dimana pada suatu game, kita bisa melakukan savepoint untuk menyimpan progress kita, dan kita bisa kembali ke save point sebelumnya jika character yang kita gunakan kalah, atau alasan lainnya. </p>
<p>Konsep pada git juga sama seperti itu.</p>
<p>dengan, kita bisa melihat &quot;history&quot; atau id savepoint sebelumnya.</p>
<pre><code>git <span class="hljs-built_in">log</span>
</code></pre><p>dengan, kita bisa berpindah ke savepoint sebelumnya. </p>
<pre><code>git checkout [commit_id] <span class="hljs-comment"># Manual </span>
git checkout <span class="hljs-keyword">master</span> <span class="hljs-title"># atau</span> main, untuk kembali ke savepoint paling baru
</code></pre><h2 id="mengenai-rebase">Mengenai Rebase</h2>
<p>Jika terdapat dua perubahan, semisal pada local dan repository.</p>
<p>terdapat conflict history dimana bagian repository telah berada pada versi selanjutnya, sedangkan bagian local tertinggal.</p>
<p>Kita bisa menggunakan perintah</p>
<pre><code>git <span class="hljs-keyword">add</span><span class="bash"> .
</span>git commit -am <span class="hljs-string">'new'</span>
git pull --rebase
</code></pre><p>dimana selama tidak terdapat conflict pada baris code, antara bagian baru dan lama maka masalah akan dapat diselesaikan dengan sangata mudah.</p>
<h2 id="mengenai-rebase-jika-terdapat-conflict-pada-baris-">Mengenai Rebase ( Jika terdapat conflict pada baris )</h2>
<p>mereka akan secara otomatis akan memberikan tanda seperti ini. dimana terdapat informasi bagian head (Repository) dan local diberi tanda pada file yang kita upload. </p>
<p>Semisal pada baris ke 20, terdapat dua versi code. Terdapat yang baru dan lama.</p>
<pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
<span class="hljs-section">halo saya mau conflict disini
=======</span>
halo saya dari branch belakang apa bisa
&gt;&gt;&gt;&gt;&gt;&gt;&gt; ca838f0 (conf)
</code></pre><h2 id="perbedaan-rebase-dan-merge">Perbedaan Rebase dan Merge</h2>
<ul>
<li><code>git pull --rebase</code> adalah fungsi rebase</li>
<li><code>git pull --no-rebase</code> adalah fungsi merge</li>
</ul>
<table>
<thead>
<tr>
<th>Rebase</th>
<th>Merge</th>
</tr>
</thead>
<tbody>
<tr>
<td>Mereka akan menulis ulang history</td>
<td>Mereka akan menyimpan history</td>
</tr>
<tr>
<td>Sangat disarankan untuk menyelesaikan masalah private</td>
<td>sangat disarankan untuk menyelesaikan masalah public</td>
</tr>
<tr>
<td>conflict pada satu branch yang sama</td>
<td>conflict pada branch yang berbeda</td>
</tr>
</tbody>
</table>
<p>Kapan mereka harus digunakan?</p>
<ul>
<li>Terkadang pada open source mereka menambahkan aturan khusus untuk collaborator. untuk menggunakan <code>rebase</code> agar mendapatkan git linear clean history</li>
<li>Terkadang pada project yang membutuhkan banyak collaborator akan membutuhkan git merge.</li>
</ul>
<h2 id="cara-manual-alternative-repot-dari-rebase">Cara manual alternative repot dari Rebase</h2>
<p>Semisal terdapat conflict antara local dan repository.
kita bisa lakukan</p>
<ul>
<li>copy code yang kita rasa penting dari locale</li>
<li>masukan code tersebut secara manual kedalam repository</li>
<li>hapus keseluruhan code</li>
<li>lalu clone code dari repository</li>
</ul>
<!-- 
Todo list 
- https://www.simplilearn.com/git-rebase-vs-merge-article#:~:text=Git%20merge%20keeps%20the%20commit,more%20organized%2C%20linear%20project%20history.
- Buat satu repository, satu lakukan editing langsung, satunya editing manual
- Manual jangan pull, hinga editing repo selesai 

-->
<hr>
<h1 id="uji-coba-merge">Uji coba Merge</h1>
<hr>
<ul>
<li>Buat satu repo kosong</li>
<li>clone repo</li>
<li>buat branch baru <code>git branch [branch-name]</code></li>
<li>pindah branch <code>git checkout [branch-name]</code></li>
<li>lakukan perubahan data, semisal pada README.md</li>
<li>push branch baru tersebut, jika error tambahkan <code>git push --set-upstream origin [branch-name]</code></li>
<li>kembali ke branch <code>main</code>, dan check apakah terdapat perubahan atau belum (locale)</li>
<li>jika belum ada perubahan, lakukan <code>git merge [branch-name]</code> maka akan melakukan update</li>
<li>lalu <code>push</code> bracnh main</li>
</ul>
<h2 id="uji-coba-kedua">Uji coba kedua</h2>
<p>menyelesaikan masalah merge, </p>
<ul>
<li>pada branch main, lakukan perubahan pada file README</li>
<li>pada [branch-name] lakukan perubahan pada file yang sama</li>
<li>lakukan pull request dari branch baru, dan lihat cara penyelesaian nya.</li>
</ul>
<h3 id="reference">Reference</h3>
<ul>
<li><p><a href="https://www.simplilearn.com/git-rebase-vs-merge-article#:~:text=Git%20merge%20keeps%20the%20commit,more%20organized%2C%20linear%20project%20history">https://www.simplilearn.com/git-rebase-vs-merge-article#:~:text=Git%20merge%20keeps%20the%20commit,more%20organized%2C%20linear%20project%20history</a>.</p>
</li>
<li><p><a href="https://binarysiddhant.hashnode.dev/demystifying-git-pull-rebase-and-git-pull-no-rebase">https://binarysiddhant.hashnode.dev/demystifying-git-pull-rebase-and-git-pull-no-rebase</a></p>
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