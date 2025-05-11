<script setup>
import './style.css'
import './main.js'
import README from './components/README.vue'
const count = 'Saya komponen baru'

</script>


<template>
<!-- ========================= Template start ================== -->

  
<div class="Homepage">

  <div class="Home-title">
    <h1>Logo</h1>
<hr/>
<p>Ini adalah Halaman Utama</p>
<p> Contoh Ini adalah Paragraf</p>
<p> Tugas Kelompok 2</p>
  </div> <!--============== Item01 ====================-->

  <div class="Home-container">
<nav class="left-content-item">
  <h3>Contents</h3>
  <hr/>
  <RouterLink to="/">Go to Home</RouterLink>
  <RouterLink to="/latihanHTML01">Go to Latihan HTML 1</RouterLink>
  <RouterLink to="/latihanHTML02">Go to Latihan HTML 2</RouterLink>
  <RouterLink to="/HTML-Mapel">Go to Mapel HTML</RouterLink>
</nav>


<main class="right-content">
  <RouterView />
</main>
</div><!--============== Item02 ====================-->


<div class="contact-us">
  <hr/>
<p>This page was last edited on 29 December 2023, at 18:14.</p>
</div><!--============== Item03 ====================-->
</div>

<!-- ========================= Template End ================== -->
</template>





<style scoped>
/* Pakai Saja style.css */


.Homepage{
  display: flex;
  justify-content: center;
  max-width: 100%;
  flex-direction: column;
  background-color: #d3d8dd;
  padding:0 10%;
}

.Home-title{
  background-color: white;
  padding: 1%;
}

.Home-container{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: white;
}

.contact-us{
  background-color: white;
  padding: 1%;
}

.left-content-item{
flex-wrap: wrap;
flex-direction: column;
padding: 0 7% 0 1%;
max-height:300px;
}

.right-content{
  flex-grow: 4;
}

nav{
    display: flex;
    padding: 20px 0;
    justify-content: space-between;
}

</style>