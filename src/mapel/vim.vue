<script setup>
// ======================================== Script area start =======================================================


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->

<h1 id="sample-markdown">Sample Markdown</h1>
<p>This is some basic, sample markdown.</p>
<h2 id="second-heading">Second Heading</h2>
<ul>
<li>Unordered lists, and:# Vim cheatsheet</li>
</ul>
<ul>
<li>Essentials<h2 id="cursor-movement-normal-visual-mode-">Cursor movement (Normal/Visual Mode)</h2>
</li>
<li><code>h j k l</code> - Arrow keys</li>
<li><code>w / b</code>- Next/previous word</li>
<li><code>W / B</code> - Next/previous word (space seperated)</li>
<li><code>e / ge</code> - Next/previous end of word</li>
<li><code>0 / $</code> - Start/End of line</li>
<li><code>^</code> - First non-blank character of line (same as 0w)</li>
</ul>
<h2 id="editing-text">Editing text</h2>
<ul>
<li><code>i / a</code> - Start insert mode at/after cursor</li>
<li><code>I / A</code> - Start insert mode at the beginning/end of the line</li>
<li><code>o / O</code> - Add blank line below/above current line</li>
<li><code>Esc or Ctrl+[</code> - Exit insert mode</li>
<li><code>d</code> - Delete</li>
<li><code>dd</code> - Delete line</li>
<li><code>c</code> - Delete, then start insert mode</li>
<li><code>cc</code> - Delete line, then start insert mode operators
Operators also work in Visual Mode</li>
<li><code>d</code> - Deletes from the cursor to the movement location</li>
<li><code>c</code> - Deletes from the cursor to the movement location, then starts insert mode</li>
<li><code>y</code> - Copy from the cursor to the movement location</li>
<li><code>&gt;</code> - Indent one level</li>
<li><code>&lt;</code> - Unindent one level
You can also combine operators with motions. Ex: d$ deletes from the cursor to the end of the line.
Marking text (visual mode)</li>
<li><code>v</code> - Start visual mode</li>
<li><code>V</code> - Start linewise visual mode</li>
<li><code>Ctrl+v</code>- Start visual block mode</li>
<li><code>Esc or Ctrl+[</code> - Exit visual mode</li>
<li><code>&gt;&gt;</code> indent (move right) line one shiftwidth</li>
<li><code>&lt;&lt;</code> de-indent (move left) line one shiftwidth</li>
</ul>
<h2 id="clipboard">Clipboard</h2>
<ul>
<li><code>yy</code> - Yank (copy) a line</li>
<li><code>p</code> - Paste after cursor</li>
<li><code>P</code> - Paste before cursor</li>
<li><code>dd</code> - Delete (cut) a line</li>
<li><code>x</code> - Delete (cut) current character</li>
<li><code>X</code> - Delete (cut) previous character</li>
<li><code>d / c</code> - By default, these copy the deleted text
Exiting</li>
<li><code>:w</code> - Write (save) the file, but don’t quit</li>
<li><code>:wq</code> - Write (save) and quit</li>
<li><code>:q</code> - Quit (fails if anything has changed)</li>
<li><code>:q!</code> - Quit and throw away changes</li>
</ul>
<h2 id="search-replace">Search/Replace</h2>
<ul>
<li><code>/pattern</code> - Search for pattern</li>
<li><code>?pattern</code> - Search backward for pattern</li>
<li><code>n</code> - Repeat search in same direction</li>
<li><code>N</code> - Repeat search in opposite direction</li>
<li><code>:%s/old/new/g</code> - Replace all old with new throughout file (gn is better though)</li>
<li><code>:%s/old/new/gc</code> - Replace all old with new throughout file with confirmations</li>
</ul>
<h2 id="general">General</h2>
<ul>
<li><code>u</code> - Undo</li>
<li><code>Ctrl+r</code> - Redo</li>
</ul>
<h2 id="advanced">Advanced</h2>
<p>Cursor movement</p>
<ul>
<li><code>Ctrl+d</code> - Move down half a page</li>
<li><code>Ctrl+u</code> - Move up half a page</li>
<li><code>}</code> - Go forward by paragraph (the next blank line)</li>
<li><code>{</code> - Go backward by paragraph (the next blank line)</li>
<li><code>gg</code> - Go to the top of the page</li>
<li><code>G</code> - Go the bottom of the page</li>
<li><code>: [num] [enter]</code> - Go to that line in the document</li>
<li><code>ctrl+e / ctrl+y</code>- Scroll down/up one line</li>
</ul>
<h2 id="character-search">Character search</h2>
<ul>
<li><code>f [char]</code> - Move forward to the given char</li>
<li><code>F [char]</code> - Move backward to the given char</li>
<li><code>t [char]</code> - Move forward to before the given char</li>
<li><code>T [char]</code> - Move backward to before the given char</li>
<li><code>; / ,</code> - Repeat search forwards/backwards</li>
</ul>
<h2 id="editing-text">Editing text</h2>
<ul>
<li><code>J</code> - Join line below to the current one</li>
<li><code>r</code> [char] - Replace a single character with the specified char (does not use Insert mode)</li>
</ul>
<h2 id="visual-mode">Visual mode</h2>
<ul>
<li><code>O</code> - Move to other corner of block</li>
<li><code>o</code> - Move to other end of marked area</li>
</ul>
<p>File Tabs</p>
<ul>
<li><code>:e</code> filename - Edit a file</li>
<li><code>:tabe</code> - Make a new tab</li>
<li><code>gt</code> - Go to the next tab</li>
<li><code>gT</code> - Go to the previous tab</li>
<li><code>:vsp</code> - Vertically split windows</li>
<li><code>ctrl+ws</code> - Split windows horizontally</li>
<li><code>ctrl+wv</code> - Split windows vertically</li>
<li><code>ctrl+ww</code> - Switch between windows</li>
<li><code>ctrl+wq</code> - Quit a window</li>
</ul>
<h2 id="marks">Marks</h2>
<p>Marks allow you to jump to designated points in your code.</p>
<ul>
<li><code>m{a-z}</code> - Set mark {a-z} at cursor position
A capital mark {A-Z} sets a global mark and will work between files
-<code>&#39;{a-z}</code>- Move the cursor to the start of the line where the mark was set
-<code>&#39;&#39;</code> - Go back to the previous jump location
Text Objects
Say you have def (arg1, arg2, arg3), where your cursor is somewhere in the middle of the parenthesis.
di( deletes everything between the parenthesis. That says “change everything inside the nearest parenthesis”. Without text objects, you would need to do T(dt).
Learn more
General
. - Repeat last command
Ctrl+r + 0 in insert mode inserts the last yanked text (or in command mode)
gv - reselect (select last selected block of text, from visual mode)
% - jumps between matching () or {}</li>
</ul>
<h2 id="reference">Reference</h2>
<p>sopurce: <a href="https://vimsheet.com/">https://vimsheet.com/</a> </p>
<ul>
<li><a href="https://vim.rtorr.com/">https://vim.rtorr.com/</a><ol>
<li>One</li>
<li>Two</li>
<li>Three</li>
<li>More</li>
</ol>
</li>
</ul>
<blockquote>
<p>Blockquote</p>
</blockquote>
<p>And <strong>bold</strong>, <em>italics</em>, and even <em>italics and later <strong>bold</strong></em>. Even <del>strikethrough</del>. <a href="https://markdowntohtml.com">A link</a> to somewhere.</p>
<p>And code highlighting:</p>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-string">'bar'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">baz</span><span class="hljs-params">(s)</span> </span>{
   <span class="hljs-keyword">return</span> foo + <span class="hljs-string">':'</span> + s;
}
</code></pre>
<p>Or inline code like <code>var foo = &#39;bar&#39;;</code>.</p>
<p>Or an image of bears</p>
<p><img src="http://placebear.com/200/200" alt="bears"></p>
<p>The end ...</p>



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