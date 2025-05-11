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

<p>Ini adalah Halaman Utama</p>
<p> Contoh Ini adalah Paragraf</p>
<p> Tugas Kelompok 2</p>
  </div>

  <div class="Home-container">

<nav class="left-content-item">
  <RouterLink to="/">Go to Home</RouterLink>
  <RouterLink to="/latihanHTML01">Go to Latihan HTML 1</RouterLink>
  <RouterLink to="/latihanHTML02">Go to Latihan HTML 2</RouterLink>
  <RouterLink to="/HTML-Mapel">Go to Mapel HTML</RouterLink>
</nav>


<main class="right-content">
  <RouterView />
</main>
</div>

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
}

.Home-container{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border: 1px solid red;
  background-color: white;
}

.left-content-item{
flex-wrap: wrap;
flex-direction: column;
border: 1px solid red;
padding: 0 7% 0 0;
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