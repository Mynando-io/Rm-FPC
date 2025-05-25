<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<h1 id="introduction-python">Introduction python</h1>
<h1 id="introduction">Introduction</h1>
<p>salah satu tujuan dari guido dalam mebuat bahasa python adalah bahasa yang bisa dengan mudah dibaca.</p>
<p>Kositensi sangatlah penting. Kosistensi didalam project sangat penting.</p>
<h2 id="-code-layout-"><em>Code layout</em></h2>
<h3 id="indentation">Indentation</h3>
<p>Gunakan 4 space untuk setiap level indent</p>
<pre><code><span class="hljs-comment"># Correct:</span>

<span class="hljs-comment"># Aligned with opening delimiter.</span>
foo = long_function_name(var_one, var_two,
                         var_three, var_four)

<span class="hljs-comment"># Add 4 spaces (an extra level of indentation) to distinguish arguments from the rest.</span>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">long_function_name</span><span class="hljs-params">(
        var_one, var_two, var_three,
        var_four)</span>:</span>
    print(var_one)

<span class="hljs-comment"># Hanging indents should add a level.</span>
foo = long_function_name(
    var_one, var_two,
    var_three, var_four)

<span class="hljs-comment"># Or / optional</span>

<span class="hljs-comment"># Hanging indents *may* be indented to other than 4 spaces.</span>
foo = long_function_name(
  var_one, var_two,
  var_three, var_four)

<span class="hljs-comment"># No extra indentation.</span>
<span class="hljs-keyword">if</span> (this_is_one_thing <span class="hljs-keyword">and</span>
    that_is_another_thing):
    do_something()

<span class="hljs-comment"># Add a comment, which will provide some distinction in editors</span>
<span class="hljs-comment"># supporting syntax highlighting.</span>
<span class="hljs-keyword">if</span> (this_is_one_thing <span class="hljs-keyword">and</span>
    that_is_another_thing):
    <span class="hljs-comment"># Since both conditions are true, we can frobnicate.</span>
    do_something()

<span class="hljs-comment"># Add some extra indentation on the conditional continuation line.</span>
<span class="hljs-keyword">if</span> (this_is_one_thing
        <span class="hljs-keyword">and</span> that_is_another_thing):
    do_something()

my_list = [
    <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>,
    <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>,
]
result = some_function_that_takes_arguments(
    <span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>,
    <span class="hljs-string">'d'</span>, <span class="hljs-string">'e'</span>, <span class="hljs-string">'f'</span>,
)
</code></pre><h3 id="tabs-or-spaces-">Tabs or spaces?</h3>
<ul>
<li>spaces lebih disarankan untuk digunakan untuk melakukan indentasi</li>
<li>Jika sudah memakai tabs, maka selanjutnya juga harus memakai tabs</li>
</ul>
<p>python tidak memperbolehkan untuk menggunakan tabs dan space bersamaan</p>
<h3 id="maximum-line-lenght">Maximum line lenght</h3>
<p>ini adalah aturan komunitas</p>
<ul>
<li>Untuk penulisan code adalah 79 characters / kata</li>
<li>untuk docs / commenct adalah 72 kata</li>
</ul>
<p>Backslashes masih bisa digunakan untuk membuat kelanjutan code. Dan jangan lupa untuk menambahkan indent pada baris tersebut</p>
<pre><code><span class="hljs-keyword">with</span> open('/path/<span class="hljs-keyword">to</span>/<span class="hljs-keyword">some</span>/<span class="hljs-built_in">file</span>/you/want/<span class="hljs-keyword">to</span>/<span class="hljs-built_in">read</span>') <span class="hljs-keyword">as</span> file_1, \\
     open('/path/<span class="hljs-keyword">to</span>/<span class="hljs-keyword">some</span>/<span class="hljs-built_in">file</span>/being/written', 'w') <span class="hljs-keyword">as</span> file_2:
    file_2.<span class="hljs-built_in">write</span>(file_1.<span class="hljs-built_in">read</span>())
</code></pre><h2 id="penempatan-break-setelah-atau-sebelum-operator-">Penempatan Break setelah atau sebelum operator?</h2>
<pre><code><span class="hljs-meta"># Wrong:</span>
<span class="hljs-meta"># operators sit far away from their operands</span>
income = (gross_wages +
          taxable_interest +
          (dividends - qualified_dividends) -
          ira_deduction -
          student_loan_interest)

<span class="hljs-meta"># Correct:</span>
<span class="hljs-meta"># easy to match operators with operands</span>
income = (gross_wages
          + taxable_interest
          + (dividends - qualified_dividends)
          - ira_deduction
          - student_loan_interest)
</code></pre><h2 id="penempatan-blank-line">Penempatan blank line</h2>
<p>beri jarak untuk function dan class yaitu 2 blank line</p>
<p>dan method yang berada didalam class beri jarak 1 blank line</p>
<h2 id="source-file-encoding">Source file encoding</h2>
<p>code didalam python secara default memakai UTF-8, dan jangan dirubah kecuali untuk testing</p>
<h3 id="import-harus-memiliki-baris-yang-terpisah">Import harus memiliki baris yang terpisah</h3>
<pre><code>## Betul
<span class="hljs-keyword">import</span> os
<span class="hljs-keyword">import</span> sys

## Salah
<span class="hljs-keyword">import</span> os, sys

## kalau seperti ini boleh, ambil dua object dari satu tempat
<span class="hljs-keyword">from</span> subprocess <span class="hljs-keyword">import</span> Popen, PIPE
</code></pre><p>Imports should be grouped in the following order:</p>
<ol>
<li>Standard library imports.</li>
<li>Related third party imports.</li>
<li>Local application/library specific imports.</li>
</ol>
<p>You should put a blank line between each group of imports.</p>
<ul>
<li>Absolute imports are recommended,</li>
</ul>
<pre><code># contoh <span class="hljs-number">1</span>
<span class="hljs-keyword">import</span> mypkg.sibling
<span class="hljs-keyword">from</span> mypkg <span class="hljs-keyword">import</span> sibling
<span class="hljs-keyword">from</span> mypkg.sibling <span class="hljs-keyword">import</span> example

## Contoh <span class="hljs-number">2</span>

<span class="hljs-keyword">from</span> . <span class="hljs-keyword">import</span> sibling
<span class="hljs-keyword">from</span> .sibling <span class="hljs-keyword">import</span> example
</code></pre><ul>
<li>Disaat import class, dari module yang memiliki class</li>
</ul>
<pre><code><span class="hljs-keyword">from</span> myclass <span class="hljs-keyword">import</span> MyClass
<span class="hljs-keyword">from</span> foo.bar.yourclass <span class="hljs-keyword">import</span> YourClass
</code></pre><h2 id="pengunaan-space-untuk-menata-code">Pengunaan space untuk menata code</h2>
<pre><code><span class="hljs-comment"># Correct:</span>
spam(ham[<span class="hljs-number">1</span>], {eggs: <span class="hljs-number">2</span>})
<span class="hljs-comment"># Wrong:</span>
spam( ham[ <span class="hljs-number">1</span> ], { eggs: <span class="hljs-number">2</span> } )

<span class="hljs-comment"># Correct:</span>
foo = (<span class="hljs-number">0</span>,)
<span class="hljs-comment"># Wrong:</span>
bar = (<span class="hljs-number">0</span>, )

<span class="hljs-comment"># Correct:</span>
<span class="hljs-keyword">if</span> x == <span class="hljs-number">4</span>: print(x, y); x, y = y, x
<span class="hljs-comment"># Wrong:</span>
<span class="hljs-keyword">if</span> x == <span class="hljs-number">4</span> : print(x , y) ; x , y = y , x

<span class="hljs-comment"># Correct:</span>
spam(<span class="hljs-number">1</span>)
<span class="hljs-comment"># Wrong:</span>
spam (<span class="hljs-number">1</span>)

<span class="hljs-comment"># Correct:</span>
ham[<span class="hljs-number">1</span>:<span class="hljs-number">9</span>], ham[<span class="hljs-number">1</span>:<span class="hljs-number">9</span>:<span class="hljs-number">3</span>], ham[:<span class="hljs-number">9</span>:<span class="hljs-number">3</span>], ham[<span class="hljs-number">1</span>::<span class="hljs-number">3</span>], ham[<span class="hljs-number">1</span>:<span class="hljs-number">9</span>:]
ham[lower:upper], ham[lower:upper:], ham[lower::step]
ham[lower+ffset : upper+offset]
ham[: upper_fn(x) : step_fn(x)], ham[:: step_fn(x)]
ham[lower + offset : upper + offset]
<span class="hljs-comment"># Wrong:</span>
ham[lower + offset:upper + offset]
ham[<span class="hljs-number">1</span>: <span class="hljs-number">9</span>], ham[<span class="hljs-number">1</span> :<span class="hljs-number">9</span>], ham[<span class="hljs-number">1</span>:<span class="hljs-number">9</span> :<span class="hljs-number">3</span>]
ham[lower : : upper]
ham[ : upper]

<span class="hljs-comment"># Correct:</span>
dct[<span class="hljs-string">'key'</span>] = lst[index]
<span class="hljs-comment"># Wrong:</span>
dct [<span class="hljs-string">'key'</span>] = lst [index]

<span class="hljs-comment"># Correct:</span>
x = <span class="hljs-number">1</span>
y = <span class="hljs-number">2</span>
long_variable = <span class="hljs-number">3</span>
<span class="hljs-comment"># Wrong:</span>
x             = <span class="hljs-number">1</span>
y             = <span class="hljs-number">2</span>
long_variable = <span class="hljs-number">3</span>

<span class="hljs-comment"># Correct:</span>
i = i + <span class="hljs-number">1</span>
submitted += <span class="hljs-number">1</span>
x = x*<span class="hljs-number">2</span> - <span class="hljs-number">1</span>
hypot2 = x*x + y*y
c = (a+b) * (a-b)
<span class="hljs-comment"># Wrong:</span>
i=i+<span class="hljs-number">1</span>
submitted +=<span class="hljs-number">1</span>
x = x * <span class="hljs-number">2</span> - <span class="hljs-number">1</span>
hypot2 = x * x + y * y
c = (a + b) * (a - b)

<span class="hljs-comment"># Correct:</span>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">munge</span><span class="hljs-params">(input: AnyStr)</span>:</span> ...
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">munge</span><span class="hljs-params">()</span> -&gt; PosInt:</span> ...
<span class="hljs-comment"># Wrong:</span>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">munge</span><span class="hljs-params">(input:AnyStr)</span>:</span> ...
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">munge</span><span class="hljs-params">()</span>-&gt;PosInt:</span> ...

<span class="hljs-comment"># Correct:</span>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">complex</span><span class="hljs-params">(real, imag=<span class="hljs-number">0.0</span>)</span>:</span>
    <span class="hljs-keyword">return</span> magic(r=real, i=imag)
<span class="hljs-comment"># Wrong:</span>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">complex</span><span class="hljs-params">(real, imag = <span class="hljs-number">0.0</span>)</span>:</span>
    <span class="hljs-keyword">return</span> magic(r = real, i = imag)

<span class="hljs-comment"># Correct:</span>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">munge</span><span class="hljs-params">(sep: AnyStr = None)</span>:</span> ...
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">munge</span><span class="hljs-params">(input: AnyStr, sep: AnyStr = None, limit=<span class="hljs-number">1000</span>)</span>:</span> ...
<span class="hljs-comment"># Wrong:</span>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">munge</span><span class="hljs-params">(input: AnyStr=None)</span>:</span> ...
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">munge</span><span class="hljs-params">(input: AnyStr, limit = <span class="hljs-number">1000</span>)</span>:</span> ...

<span class="hljs-comment"># Correct:</span>
<span class="hljs-keyword">if</span> foo == <span class="hljs-string">'blah'</span>:
    do_blah_thing()
do_one()
do_two()
do_three()
<span class="hljs-comment"># Rather not:</span>

<span class="hljs-comment"># Wrong:</span>
<span class="hljs-keyword">if</span> foo == <span class="hljs-string">'blah'</span>: do_blah_thing()
do_one(); do_two(); do_three()

<span class="hljs-comment"># Wrong:</span>
<span class="hljs-keyword">if</span> foo == <span class="hljs-string">'blah'</span>: do_blah_thing()
<span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> lst: total += x
<span class="hljs-keyword">while</span> t &lt; <span class="hljs-number">10</span>: t = delay()
<span class="hljs-comment"># Definitely not:</span>

<span class="hljs-comment"># Wrong:</span>
<span class="hljs-keyword">if</span> foo == <span class="hljs-string">'blah'</span>: do_blah_thing()
<span class="hljs-keyword">else</span>: do_non_blah_thing()

<span class="hljs-keyword">try</span>: something()
<span class="hljs-keyword">finally</span>: cleanup()

do_one(); do_two(); do_three(long, argument,
                             list, like, this)

<span class="hljs-keyword">if</span> foo == <span class="hljs-string">'blah'</span>: one(); two(); three()
</code></pre><h2 id="when-to-use-trailing-commas">When to use trailing commas</h2>
<p>trailling commas biasaanya itu opsional, akan tetapi mungkin saja anda butuhkan jika ingin melakukan updata data tersebut.</p>
<pre><code><span class="hljs-meta"># Correct:</span>
FILES = (<span class="hljs-string">'setup.cfg'</span>,)
<span class="hljs-meta"># Wrong:</span>
FILES = <span class="hljs-string">'setup.cfg'</span>,

<span class="hljs-meta"># Wrong:</span>
FILES = [<span class="hljs-string">'setup.cfg'</span>, <span class="hljs-string">'tox.ini'</span>,]
initialize(FILES, error=True,)
</code></pre><p><code>x **=** x **+** **1**                 *# Increment x*</code></p>
<p>But sometimes, this is useful:</p>
<p><code>x **=** x **+** **1**                 *# Compensate for border*</code></p>
<ul>
<li><a href="https://peps.python.org/pep-0257">PEP 257</a> describes good docstring conventions. Note that most importantly, the <code>&quot;&quot;&quot;</code> that ends a multiline docstring should be on a line by itself:</li>
</ul>
<pre><code><span class="hljs-string">"""Return a foobang

Optional plotz says to frobnicate the bizbaz first.
"""</span>
</code></pre><ul>
<li><p>For one liner docstrings, please keep the closing <code>&quot;&quot;&quot;</code> on the same line:</p>
<p>  <em><code>&quot;&quot;&quot;Return an ex-parrot.&quot;&quot;&quot;</code></em></p>
</li>
</ul>
<h2 id="penulisan-comment">Penulisan comment</h2>
<p>comment yang berbeda dengan code, bukan comment. Up to date comment jika anda melakukan perubahan.</p>
<p>Comment haruslah kalimat lengkap, dan dimulai dengan huruf besar. Pastikan comment tersebut bisa dibaca oleh orang yang menjadi tujuan anda</p>
<h2 id="penamaan">Penamaan</h2>
<p>The following naming styles are commonly distinguished:</p>
<ul>
<li><code>b</code> (single lowercase letter)</li>
<li><code>B</code> (single uppercase letter)</li>
<li><code>lowercase</code></li>
<li><code>lower_case_with_underscores</code></li>
<li><code>UPPERCASE</code></li>
<li><code>UPPER_CASE_WITH_UNDERSCORES</code></li>
<li><p><code>CapitalizedWords</code> (or CapWords, or CamelCase – so named because of the bumpy look of its letters <a href="https://peps.python.org/pep-0008/#id8">[4]</a>). This is also sometimes known as StudlyCaps.</p>
<p>  Note: When using acronyms in CapWords, capitalize all the letters of the acronym. Thus HTTPServerError is better than HttpServerError.</p>
</li>
<li><p><code>mixedCase</code> (differs from CapitalizedWords by initial lowercase character!)</p>
</li>
<li><code>Capitalized_Words_With_Underscores</code> (ugly!)</li>
</ul>
<h2 id="pengunaan-is">Pengunaan is</h2>
<pre><code><span class="hljs-comment"># Correct:</span>
<span class="hljs-keyword">if</span> foo <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> <span class="hljs-keyword">None</span>:
<span class="hljs-comment"># Wrong:</span>
<span class="hljs-keyword">if</span> <span class="hljs-keyword">not</span> foo <span class="hljs-keyword">is</span> <span class="hljs-keyword">None</span>:
</code></pre><pre><code><span class="hljs-comment"># Correct:</span>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">f</span><span class="hljs-params">(x)</span>:</span> <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>*x
<span class="hljs-comment"># Wrong:</span>
f = <span class="hljs-keyword">lambda</span> x: <span class="hljs-number">2</span>*x
</code></pre><h2 id="konsisten-dalam-melakukan-if-statement">Konsisten dalam melakukan if statement</h2>
<pre><code><span class="hljs-comment"># Correct:</span>

<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">foo</span><span class="hljs-params">(x)</span>:</span>
    <span class="hljs-keyword">if</span> x &gt;= <span class="hljs-number">0</span>:
        <span class="hljs-keyword">return</span> math.sqrt(x)
    <span class="hljs-keyword">else</span>:
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">None</span>

<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">bar</span><span class="hljs-params">(x)</span>:</span>
    <span class="hljs-keyword">if</span> x &lt; <span class="hljs-number">0</span>:
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">None</span>
    <span class="hljs-keyword">return</span> math.sqrt(x)
<span class="hljs-comment"># Wrong:</span>

<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">foo</span><span class="hljs-params">(x)</span>:</span>
    <span class="hljs-keyword">if</span> x &gt;= <span class="hljs-number">0</span>:
        <span class="hljs-keyword">return</span> math.sqrt(x)

<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">bar</span><span class="hljs-params">(x)</span>:</span>
    <span class="hljs-keyword">if</span> x &lt; <span class="hljs-number">0</span>:
        <span class="hljs-keyword">return</span>
    <span class="hljs-keyword">return</span> math.sqrt(x)
</code></pre><h2 id="note">Note</h2>
<aside>
💡 Untuk istilah atau kata kunci penting

</aside>

<ul>
<li>assert statement</li>
<li>multiline if-statement</li>
<li>multiple with-statement</li>
</ul>
<h2 id="refrence-">Refrence:</h2>
<ul>
<li><a href="https://peps.python.org/pep-0008/">https://peps.python.org/pep-0008/</a>o</li>
</ul>
<h1 id="python-code-guide">python code guide</h1>
<h2 id="variabel">Variabel</h2>
<p>variabel adalah tempat untuk menyimpan data dengan tipe data tertentu. </p>
<p>Beberapa tipe data yang ada:</p>
<ul>
<li><p>Integer</p>
<p>  Integer adalah bentuk nilai / angka. Dan memiliki jangkauan nilai </p>
<p>  misalkan -32768 hingga 32768 </p>
</li>
<li><p>Float ( nilai riil )</p>
<p>  Perbedaan antara float dan integer adalah nilai dibelakang koma. </p>
<p>  contoh : 3.14 </p>
</li>
<li><p>character</p>
<p>  “\n” adalah kata yang digunakan untuk membuat baris baru. </p>
</li>
<li><p>string</p>
<p>  harus diawali dengan “ atau ‘. string berisi kumpulan text</p>
</li>
<li><p>boolean</p>
<p>  tipe data untuk menyatakan benar / salah </p>
</li>
<li><p>tipe tersetruktuk / function</p>
<p>  block code atau kumpulan kode yang dapat dipakai kapan saja </p>
</li>
</ul>
<h1 id="python-guide">Python guide</h1>
<h2 id="perbedaan-dari-cache-dan-database">Perbedaan dari cache dan database</h2>
<p>Kita harus mengetahui ini. Ingat pattern input - proses - output</p>
<p>Pada cache kau menyimpan data <strong>output</strong>. Jika bisa jauhi caching, karena ini tidak akan memberimu outdated data. Kau tidak perlu untuk backup data cache karena bisa dibuat lagi</p>
<p>Pada database data yang kau simpan adalah input. Biasaanya dimasukan oleh manusia atau data yang merepresentasikan data didunia nyata. Itu sangat penting untuk menyimpan data database, karena kau tidak bisa membuatnya lagi. Sedangkan output seperti (html, json) tidak memiliki nilai yang besar, karena kita bisa membuatnya lagi.</p>
<h2 id="relational-database">Relational database</h2>
<p>Pakailah SQL databases, karena itu bisa dipakai diberbagai kondisi.
Misalkan PostgreSQL sebagai databases, sedangankan NoSQL sebagai penyimpan cache.</p>
<p>Postgressql memliki dokumentasi yang bagus: <a href="https://www.postgresql.org/docs/current/index.html">https://www.postgresql.org/docs/current/index.html</a></p>
<h2 id="cardinality">Cardinality</h2>
<p>refrence:</p>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Cardinality_(data_modeling">https://en.wikipedia.org/wiki/Cardinality_(data_modeling)</a>)</li>
<li><a href="https://github.com/guettli/programming-guidelines#2-data-structures">https://github.com/guettli/programming-guidelines#2-data-structures</a></li>
</ul>
<hr>
<h2 id="basic">Basic</h2>
<p>Cara ini di gunakan untuk orang yang memahami atau sudah pernah bermain dengan bahasa program sebelumnya</p>
<h2 id="literal-constant">Literal constant</h2>
<p>Literals pada python: Numeric, string, boolean, special (none) and Literal collection</p>
<pre><code><span class="hljs-attr">var_a</span> = <span class="hljs-number">4</span>  # Integer
<span class="hljs-attr">var_b</span> = <span class="hljs-number">3.14</span>  # Float
<span class="hljs-attr">var_c</span> = <span class="hljs-string">'nama orang'</span> # string
</code></pre><p>&quot;var_a&quot; adalah integer atau numeric literal
&quot;var_b&quot; adalah nilai decimal, bentuknya adalah float
&quot;var_c&quot; adalah string</p>
<h2 id="kata-kunci-yang-tidak-bisa-dipakai-sebagai-variabel">Kata kunci yang tidak bisa dipakai sebagai variabel</h2>
<pre><code><span class="hljs-keyword">if</span>, <span class="hljs-keyword">else</span>, <span class="hljs-keyword">for</span>, <span class="hljs-keyword">while</span>, <span class="hljs-keyword">is</span>, <span class="hljs-keyword">as</span>, or, not, and, None, def, <span class="hljs-class"><span class="hljs-keyword">class</span>, <span class="hljs-type">return</span>, <span class="hljs-type">yield</span>,<span class="hljs-type">pass</span>, <span class="hljs-type">raise</span>, <span class="hljs-type">True</span>, <span class="hljs-type">False</span></span>
</code></pre><h2 id="operands">Operands</h2>
<p>operands juga bisa disebut sebagai variabel. nama variabel tidak boleh dimulai dari angka dan python itu case sensitive</p>
<pre><code><span class="hljs-comment">## Dynamically typed:</span>

<span class="hljs-attr">my_var</span> = <span class="hljs-number">34</span>
<span class="hljs-attr">my_var</span> = <span class="hljs-string">"string"</span>
<span class="hljs-attr">my_var</span> = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>]
<span class="hljs-attr">my_var</span> = <span class="hljs-number">3.14</span>

<span class="hljs-comment"># Variabel bukanlah sebuah type, python is garbage collected</span>
</code></pre><p>Beberapa teknik untuk menamai style:</p>
<ul>
<li>camel casing names ( sesuai untuk varibel )
myVar, myString</li>
<li>capital camel casing names ( sesuai untuk penamaan class )
MyVar, FileData</li>
<li>snake casing names ( sesuai untuk variabel atau function names )
my_var, file_data</li>
</ul>
<h2 id="operators">Operators</h2>
<p>Operators dipakai untuk menjalankan operands atau variabel. Operator seperti arithmetic, assignment, comparison, bitwise</p>
<pre><code><span class="hljs-comment"># Aritmetic operators</span>
+, -, \\*, /, %, \\*\\*, //

<span class="hljs-comment"># assignment operators</span>
=, +=, -=, /*=, /=, %=, //=, \\*\\*=, &amp;=, |=, &gt;&gt;=, &lt;&lt;=

<span class="hljs-comment"># comparison operators</span>
==, !=, &gt;, &lt;, &gt;=, &lt;=

<span class="hljs-comment"># Bitwise operators</span>
&amp;, |, ~, &lt;&lt;, &gt;&gt;

<span class="hljs-comment"># Logical operators</span>
<span class="hljs-keyword">not</span>, <span class="hljs-keyword">and</span>, <span class="hljs-keyword">or</span>

<span class="hljs-comment"># Membership operators</span>

<span class="hljs-keyword">in</span>, <span class="hljs-keyword">not</span> <span class="hljs-keyword">in</span>

<span class="hljs-comment"># Identity operators</span>

<span class="hljs-keyword">is</span>, <span class="hljs-keyword">not</span> <span class="hljs-keyword">in</span>
</code></pre><h2 id="expressions">Expressions</h2>
<p>Expression adalah evaluasi dari python interpreter, value atau sequnce dengan melakukan operation ( aritmatik/ conditional / lambda function ). Mereka</p>
<pre><code># Some example

<span class="hljs-string">"yes"</span> + <span class="hljs-comment">" this</span>
<span class="hljs-keyword">x</span> + <span class="hljs-number">6</span>
<span class="hljs-keyword">if</span> <span class="hljs-keyword">a</span>==<span class="hljs-number">3</span> <span class="hljs-keyword">else</span> <span class="hljs-number">2</span>
    <span class="hljs-keyword">a</span> <span class="hljs-built_in">or</span> <span class="hljs-keyword">b</span>
    <span class="hljs-number">2</span> <span class="hljs-built_in">and</span> <span class="hljs-number">3</span>
    lambda <span class="hljs-keyword">x</span>:<span class="hljs-keyword">x</span>**<span class="hljs-number">2</span>
</code></pre><p>SRC: <a href="https://www.petanikode.com/statement-vs-expression/">https://www.petanikode.com/statement-vs-expression/</a> </p>
<ul>
<li>Statement - adalah bagian yang mengerjakan sesuatu </li>
<li>Expression - adalah bagian yang menghasilkan nilai </li>
</ul>
<p>Contoh statement = loop, if, declare variabel dan lain-lain 
contoh code </p>
<pre><code><span class="hljs-keyword">if</span> <span class="hljs-literal">True</span>: <span class="hljs-meta"># ini adalah statement</span>
    nilai = <span class="hljs-number">2</span> + <span class="hljs-number">3</span> <span class="hljs-meta"># nilai adalah statement, dan 2 + 3 adlah expression</span>
    print(nilai) <span class="hljs-meta"># <span class="hljs-string">"print"</span> adalah statement</span>
</code></pre><p>print bisa menjadi expresssion jika dimasukan kedalam variabel. </p>
<p>ada dua cara yang dapat dipakai untuk membedakan statement atau bukan.
Coba masukan command tersebut kadalam variabel. Jika bisa dimasukan ke variabel maka itu termasuk expresssion, jika tidak maka itu statement. </p>
<p>contoh expression </p>
<pre><code><span class="hljs-attr">nilaiA</span> = eval(<span class="hljs-string">"1 + 1"</span>)
<span class="hljs-attr">nilaiB</span> = eval()
</code></pre><pre><code>value = <span class="hljs-number">10</span> 
requirement = <span class="hljs-symbol">'my</span> apple <span class="hljs-keyword">is</span> <span class="hljs-number">10</span>' <span class="hljs-keyword">if</span> value &lt; <span class="hljs-number">10</span> <span class="hljs-keyword">else</span> <span class="hljs-symbol">'my</span> apple <span class="hljs-keyword">not</span> <span class="hljs-number">10</span>'
</code></pre><p>SRC: <a href="https://www.petanikode.com/statement-vs-expression/">https://www.petanikode.com/statement-vs-expression/</a></p>
<h2 id="python-syntatic-sugar">Python syntatic sugar</h2>
<p>cara lain untuk menulis expression / stattements cara cepat</p>
<pre><code><span class="hljs-comment">## Some examples</span>

<span class="hljs-attr">a</span> = <span class="hljs-attr">b</span> = <span class="hljs-attr">c</span> = <span class="hljs-number">10</span>
<span class="hljs-comment"># nilainya 10 semua</span>

<span class="hljs-attr">text</span> = <span class="hljs-string">"This is text 1."</span> \\
<span class="hljs-string">"This is text 2"</span> \\
<span class="hljs-string">"And I can also continue here in the next line."</span>
</code></pre><h2 id="comments">Comments</h2>
<pre><code><span class="hljs-comment"># Ini adalah single comment</span>

<span class="hljs-comment"># ini adalah todo comment</span>

<span class="hljs-string">"""
Ini adalah multiline comment / todo comment
"""</span>
</code></pre><h2 id="indentation">Indentation</h2>
<p>Ini dipakai Flow Control, Exception Handling, Function/Class definitions pada python, indentationError itu muncul jika teman-teman salah menggunakan indentasi</p>
<pre><code><span class="hljs-comment">## Example 1</span>

<span class="hljs-keyword">if</span> 10 &gt; 5:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">'printed'</span>)
</code></pre><h2 id="three-types-of-namespaces">three types of namespaces</h2>
<ul>
<li>built-in</li>
<li>global</li>
<li>local</li>
</ul>
<pre><code><span class="hljs-comment">## Built-in namespace</span>

<span class="hljs-comment"># For example, some functions</span>
<span class="hljs-comment"># print(), len(), map(), range(), list(), set(), str(), etc.</span>

<span class="hljs-comment">## Global namespace</span>

<span class="hljs-keyword">import</span> time
my_var = <span class="hljs-number">10</span>

<span class="hljs-comment"># import any module</span>
<span class="hljs-comment"># variabel / functions / classes</span>

<span class="hljs-comment">## Local namespace</span>

<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">name_function</span><span class="hljs-params">()</span>:</span>
    my_var = <span class="hljs-number">10</span>

    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">name_fun</span><span class="hljs-params">()</span>:</span>
        <span class="hljs-keyword">pass</span>

<span class="hljs-comment"># variabel dan function itu berada didalam local namespace</span>
</code></pre><h2 id="note">Note</h2>
<ul>
<li>[ ]  condition / if statement</li>
<li>[ ]  case / exception</li>
<li>[ ]  function</li>
<li>[ ]  list, tuple, sets, dictionaries</li>
</ul>
<h2 id="list">List</h2>
<p><code>[1, 2, &#39;halo&#39;]</code></p>
<p>list disini memiliki banyak sekali manfaat. Yang dapat membantu kita menyimpan data secara ter urut.</p>
<h2 id="dictionary">Dictionary</h2>
<pre><code>{
<span class="hljs-symbol">'name</span>' : '<span class="hljs-type">rangga</span>',
<span class="hljs-symbol">'age</span>' : 20,
<span class="hljs-symbol">'major</span>' : '<span class="hljs-type">sains</span>'
}
</code></pre><p>Dictionary tidak terurut seperti list, tetapi berbentuk <code>key:value</code></p>
<h2 id="tuple">Tuple</h2>
<pre><code>(<span class="hljs-symbol">'nasi</span> padang', <span class="hljs-symbol">'nasi</span> goreng', <span class="hljs-symbol">'nasi</span> rawon')
</code></pre><p>Tuple sama seperti list, tetapi kita tidak bisa menggubah isinya setelah berhasil dibuat.</p>
<h2 id="set">Set</h2>
<pre><code>{<span class="hljs-string">'kucing'</span>, <span class="hljs-string">'anjing'</span>, <span class="hljs-string">'katak'</span>, <span class="hljs-string">'katak'</span>}
</code></pre><p>Kita tidak bisa melakukan indexing pada set, dan data pada set tidak dapat dirubah. Tetapi data bisa datambahkan dan dikurangi</p>
<p>Kelebihan utama set adalah menghilangkan duplikasi pada data. Data yang terduplikasi akan ditampilkan satu pada set </p>
<p>SRC: <a href="https://www.programiz.com/python-programming/list">https://www.programiz.com/python-programming/list</a></p>
<h1 id="latihan-python">Latihan Python</h1>
<p>
<RouterLink to="/ltPython" class="LFT-Item"> 
    Latihan Python
    </RouterLink>
</p>
<h2 id="source">Source</h2>
<ul>
<li><a href="https://docs.python.org/3/tutorial/">https://docs.python.org/3/tutorial/</a></li>
<li><a href="https://github.com/huangsam/ultimate-python">https://github.com/huangsam/ultimate-python</a></li>
<li><a href="https://github.com/guettli/programming-guidelines">https://github.com/guettli/programming-guidelines</a></li>
<li><a href="https://github.com/Anku5hk/Programmers_guide_to_Python/blob/main/book.md">https://github.com/Anku5hk/Programmers_guide_to_Python/blob/main/book.md</a></li>
<li><a href="https://github.com/Asabeneh/Python-for-Everyone">https://github.com/Asabeneh/Python-for-Everyone</a></li>
<li><a href="https://roadmap.sh/python">https://roadmap.sh/python</a></li>
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